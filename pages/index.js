import Link from "next/link";
import GradientButton from "../src/components/GradientButton";


export default function Home() {
  return (
    <>
      <div className="flex items-center h-screen max-w-4xl m-auto  justify-between">
        <p className=" w-[100rem]">
          <img className="w-48" src="rocket.svg"></img>
        </p>
        <p className="text-xl font-medium" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      </div>
    </>
  );
}
