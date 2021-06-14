import React, { useState, useEffect } from 'react';
import { Person } from './AppIcons';

export default function WealthRatioDiagram({ wealthRatio = 0 }) {

    const [wealthRatioNow, setWealthRatioNow] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWealthRatioNow(wealthRatioNow => (wealthRatio > wealthRatioNow ? wealthRatioNow + 1 : wealthRatio));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row absolute transform translate-y-20 md:translate-y-28 -translate-x-5">
                <div className="h-10 md:h-16 w-10 md:w-16 rounded-full text-white font-black flex justify-center items-center md:text-xl" style={{ backgroundColor: "#b79d59" }}>YOU</div>
                <div className="transform translate-y-3 md:translate-y-5 -translate-x-3 transform scale-50 md:scale-100" style={{ height: "0", width: "0", borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "40px solid #b79d59" }} />
            </div>
            <div className="h-48 md:h-64 w-48 md:w-64 m-auto rounded-full bg-gray-100 border-8 border-white flex justify-center items-center">
                <Person className="h-10 md:h-20 object-adjust opacity-90 transform translate-y-2 md:translate-y-3" />
                <h1 className="text-7xl md:text-9xl transform scale-125 font-black font-mono transform -translate-x-2 md:-translate-x-5" style={{ color: "#b79d59" }}>1</h1>
            </div>
            <div className="h-48 md:h-64 w-48 md:w-64 rounded-full bg-gray-100 border-8 border-white z-10 transform md:-translate-x-8 flex flex-col justify-center items-center overflow-hidden">
                <div className="flex flex-row flex-wrap mx-4 md:mx-8 mb-10">
                    {
                        [...Array(wealthRatioNow)].map((value, index) => (
                            <Person key={index} className="h-3 object-adjust mt-px" />
                        ))
                    }
                </div>
                <h1 className="text-8xl font-black fixed md:top-32" style={{ color: "#b79d59" }}>{wealthRatioNow}</h1>
            </div>
        </div>
    );
}