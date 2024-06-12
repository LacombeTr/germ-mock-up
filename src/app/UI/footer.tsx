import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col min-w-screen items-center justify-between">
            <div className="flex w-full h-16 bg-gradient-to-b from-amber-600 to-amber-800">
                adresses
            </div>
                <p className="text-stone-900 text-sm my-3">This website is a mock-up of the <a className=" text-violet-900 font-semibold" href="https://earthref.org/index/" target="_blank">EarthRef.org</a> website</p>
                <p className="italic font-light text-stone-900 text-xs mb-3">by Tristan Lacombe - 2024</p>
        </div>
    );
};

export default Footer