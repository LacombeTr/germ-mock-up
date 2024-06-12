import React from "react";
import Homebuttons from "./home-buttons";

interface BannerProps {
    title:string
}

const Banner: React.FC<BannerProps>  = ({title}) => {
    return (
        <div className="flex flex-row min-w-screen min-h-40 items-center justify-between px-16">
            <div className="flex flex-col">
                <h1 className=" bg-gradient-to-b from-amber-600 to-amber-800 text-3xl text-transparent font-black bg-clip-text ">{title}</h1>
                <h2 className=" text-amber-700 text-xl font-bold">GERM</h2>
                <p className=" text-amber-700">Chemical characterization of the Earth, its major reservoirs and the fluxes between them.</p>
            </div>

            <div className=" flex ">
                <Homebuttons title={"Databases"} />
                <Homebuttons title={"Events"}/>
                <Homebuttons title={"Tools"}/>
                <Homebuttons title={"Publications"}/>
                <Homebuttons title={"Links"}/>
            </div>
        </div>
    );
};

export default Banner