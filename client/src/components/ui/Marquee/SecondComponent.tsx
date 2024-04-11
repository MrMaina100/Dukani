
import Marquee from 'react-fast-marquee';
import { imageDatasetTwo } from '@/data/ImageData';

export default function SecondComponent() {
  return (
    <div className="flex flex-col ">
      <Marquee gradient={true} direction="right" speed={30}>
        <div className=" flex flex-wrap space-x-4">
          {imageDatasetTwo.map((data) => (
            <div key={data.id}>
              <div className="rounded-lg w-[120px] h-20 md:w-[320px] md:h-40 ">
                <img
                  src={data.img}
                  alt="images"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </Marquee>
    </div>
  );
}
