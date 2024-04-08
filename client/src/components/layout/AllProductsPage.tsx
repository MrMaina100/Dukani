import { useGetAllProductsQuery } from "@/apis/fakeStoreApi"
import ProductsCard from "../ui/ProductsCard"
import Pacman from "../ui/Pacman"


export default function AllProductsPage() {

   const {data, isLoading, isError} = useGetAllProductsQuery()

   

   if(isLoading){
      return <Pacman/>
   }
   if(isError || !data){
      return <p>ooops something a miss here lol</p>
   }
  return (
    <div className="max-w-7xl mx-auto flex flex-col space-y-4 items-center">
      <h1 className="font-black text-lg">Available Products</h1>

      {/* our cards and everything */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
         {
            data.map((products)=>(
               <ProductsCard key={products.id} products={products}/>
          
            ))
         }


      </div>

    </div>
  )
} 