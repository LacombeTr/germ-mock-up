/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";



const Hero = () => {

    return (
        <div className="relative flex items-center justify-end w-full h-[550px] mb-24">
            <Image
                src="/heroEarthNasa.jpg"
                layout="fill"
                objectFit="cover"
                alt="Picture of the Earth from orbit by NASA"
                className="-z-20"
            />

            <div className="flex justify-around relative">
                <p className="relative flex items-center w-[50%] text-4xl italic font-light my-3
                              before:flex before:justify-center before:align-middle before:absolute before:w-full
                              before:left-0 before:-bottom-0 before:h-[110%] before:bg-gradient-to-b before:from-amber-600 before:to-amber-700 before:-z-10
                              before:-translate-x-5 before:translate-y-2 before:-skew-x-12"> "Every rock holds a key to understanding our planet's past, guiding us toward a more enlightened future."</p>
                <div className="relative flex flex-col items-center min-w-96">
                    <p className=" text-3xl font-semibold uppercase py-4 text-white ">Browse our database</p>
                    <div id="searchField" className={`flex w-full justify-between h-10 bg-white rounded-full text-stone-900
                                                    transition-all duration-200
                                                    focus-within:outline focus-within:outline-2  focus-within:outline-amber-600 focus-within:shadow-[0px_0px_11px_4px_#d97706]
                                                    hover:outline hover:outline-2  hover:outline-amber-600 hover:shadow-[0px_0px_11px_4px_#d97706]`}>
                        <input type="text" name="searchBar" id="searchBar" className="outline-none grow h-full px-4 bg-transparent"
                            placeholder="Search for a rock type or locality"
                        />
                        <div className="flex items-center justify-center h-full w-10 rounded-full bg-gradient-to-b from-amber-600 to-amber-800 text-3xl text-white duration-200 hover:scale-125">
                            <Link href={"/search"}> <IoMdSearch /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero