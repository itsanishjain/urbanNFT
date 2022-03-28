import Link from "next/link";
import GradientButton from './GradientButton';

export default function NavigationBar() {
  return (

    <div className="flex justify-end p-4 items-center space-x-8 ">
       <Link href="/" >
        <span className="text-xl text-white cursor-pointer">Home</span>
      </Link>

      <Link href="/profile" >
        <span className="text-xl text-white cursor-pointer">profile</span>
      </Link>
      <div className="w-64">
        <GradientButton text="Connect" onClick={() => console.log("Connect")} />
      </div>
    </div>

  );
}
