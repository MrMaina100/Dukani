require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
  origin:'https://dukani-alpha.vercel.app/',
  optionsSuccessStatus: 204,
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static('public'));

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

app.post('/create-checkout-session', async (req, res) => {
  const cartProducts = req.body.items;
  try {   

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartProducts.map((item)=>{
        return{
          price_data:{
            currency: 'usd',
            unit_amount: item.price *100,
            product_data:{
              name: item.title,
              description:item.description,
              images:[item.image]
            }
          },
          quantity: item.quantity

        }
      }),
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.listen(5173, () => console.log('Server is running on port 5173'));
