import Link from "next/link";
import GradientButton from "../src/components/GradientButton";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";


export default function Profile() {
    const { results } = useContext(MainContext);
    console.log("DFDASFADSFADSFDASF", results);

    return (
        <div className="max-w-lg mx-auto">
            <div className="flex flex-col justify-around mt-8">
                {results && results.map((result, index) => (
                    <img key={index} src={result} className="w-64 p-4" />
                ))
                }
            </div>

        </div>
    )
}
