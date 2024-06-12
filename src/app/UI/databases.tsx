/* eslint-disable react/no-unescaped-entities */
'use client'

import React from "react";
import DatabaseCard from "./databasecards";
import { TfiWorld } from "react-icons/tfi";



const Databaseslist = () => {

    const databases = [
        { title: "GERM", subtitle: "Geochemical Earth Reference Model", desc: "Providing a chemical characterization of the Earth, its major reservoirs and the fluxes between them." },
        { title: "MagIC", subtitle: "Magnetics Information Consortium", desc: "Promoting information technology infrastructures for the international paleomagnetic, geomagnetic and rock magnetic community." },
        { title: "SBN", subtitle: "Seamount Biogeosciences Network", desc: "Bringing together all science disciplines involved in seamount research to explore innovative ways to build a seamount cyberinfrastructure." },
        { title: "ERESE", subtitle: "Enduring Resources for Earth Science Education", desc: "Promoting, creating and publishing of enduring resources for Earth science education in a collaboration between school teachers and Earth scientists." },
    ];
    
    return (
        <div className="relative flex flex-col justify-center items-center w-full mt-48 pb-48 overflow-hidden">
            <h2 className=" text-5xl text-violet-900 font-bold uppercase my-16">Our databases</h2>

            <div className="flex">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {databases.map((database, index) => (
                    <DatabaseCard key={index} title={database.title} subtitle={database.subtitle} desc={database.desc} />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 right-48 flex -z-10">
                <TfiWorld className=" text-gray-100 text-9xl scale-[750%] -rotate-45" />
            </div>
        </div>
    );
};

export default Databaseslist