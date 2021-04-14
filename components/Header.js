import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {

    const router = useRouter();

    const searchInputRef = useRef(null);

    const search=(e)=>{
        e.preventDefault();

        const term = searchInputRef.current.value;
        if(!term) return ;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    width={120}
                    height={40}
                    className="cursor-pointer"
                    onClick={ ()=>router.push(`/`)}
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input defaultValue={router.query.term} ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none"/>
                    <XIcon className="h-7 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125" onClick={()=>(searchInputRef.current.value="")} />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                    <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 "/>
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url='https://assets-2.placeit.net/smart_templates/411661001fea59f195b0b7eefd9b8db8/assets/sxsw28wombmsu8npx0pwqpjeqnkdijeu.jpg'/>
            </div>

            <HeaderOptions/>
        </header>
    )
}

export default Header
