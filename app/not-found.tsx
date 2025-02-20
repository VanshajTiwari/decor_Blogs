import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default async function Page(){
    return(
        <>
            <header className="items-center justify-center">
                <img src={"/img/404.jpg"} alt="" className="background" />
                <div>
                    <h1 className="text-6xl text-white border-2 border-white p-3">404 PAGE NOT FOUND</h1>
                    <Link href="/" className="relative top-4 bg-orange-900 text-white p-3 text-3xl flex items-center gap-x-2">Go To Home <FaArrowRight/></Link>
                </div>
            </header>
        </>
    )
}