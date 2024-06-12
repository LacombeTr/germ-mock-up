import Link from "next/link";
import React from "react";

interface ButtonProps {
    title:string,
    url:string
}

const Homebuttons: React.FC<ButtonProps>  = ({title, url}) => {
    return (
        <div>
            <Link href={url} className="transition px-2 bg-gradient-to-b from-amber-600 to-amber-800 text-transparent bg-clip-text mx-2 py-1 relative inline-block after:flex after:justify-center after:align-middle after:absolute after:w-0 hover:after:w-full after:left-0 after:-bottom-0 after:h-0.5 after:bg-amber-600 hover:after:duration-300">{title}</Link>
        </div>
    );
};

export default Homebuttons