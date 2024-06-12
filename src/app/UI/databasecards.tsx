import React from "react";

interface CardProps {
    title: string;
    subtitle: string;
    desc: string;
  }

const DatabaseCard: React.FC<CardProps> = ({ title, subtitle, desc }) => {
    
    return (
      <div className=" shadow-[0px_5px_10px_2px_rgba(0,_0,_0,_0.15)] rounded-lg p-4 m-1 w-[20vw] duration-300 hover:-translate-y-5 bg-white">
        <h2 className="text-3xl font-bold text-violet-900 mb-2">{title}</h2>
        <h3 className="text-l font-semibold text-violet-900 mb-1">{subtitle}</h3>
        <p className="text-gray-800">{desc}</p>
      </div>
    );
  };
  
  export default DatabaseCard;