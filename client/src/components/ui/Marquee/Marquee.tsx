import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

//image imports

export default function Marquee() {
  return (
    <div className="flex flex-col space-y-2">
      <FirstComponent/>
      <SecondComponent/>  

    </div>
  )
}