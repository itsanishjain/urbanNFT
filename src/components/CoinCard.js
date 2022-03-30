
export default function CoinCard() {
    return (
        <div className="text-white  bg-gradient-to-br from-purple-400 to-purple-500 max-w-md mx-auto rounded-md p-4 ">
            {/* <div className="w-72 h-64 border border-black bg-blue-400 absolute z-1">
                <div>

                </div>
            </div> */}


            <div className="flex justify-center relativ z-10">
                <div className="rounded-full w-72 h-64 border border-black  animate-spin">
                    <div className="rounded-full w-64 h-64 border  border-black flex items-center justify-center">
                        <span className="font-bold text-8xl">$</span>
                    </div>
                </div>
            </div>



        </div>
    )
}
