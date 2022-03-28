import Button from '../src/components/Button'
import Loader from '../src/components/Loader'
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const { mintNFT, loading } = useContext(MainContext);

  return (
    <>
      <ToastContainer />
      <div className="flex items-center h-screen max-w-4xl m-auto  justify-between">
        <p className=" w-[100rem]">
          <img className="w-48" src="rocket.svg"></img>
        </p>
        <div>

          <p className="text-xl font-medium" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          <div className='mb-2'>
            {!loading ? <Button text="Mint" onClick={mintNFT} /> : <Loader />}
          </div>

        </div>
      </div>



    </>
  );
}
