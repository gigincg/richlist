import React, { useState, useEffect } from 'react';
import { Person } from './AppIcons';

export default function TopRichDiagram({ persentage = 0, className = "" }) {

    const [persentageNow, setPersentageNow] = useState(100);

    useEffect(() => {
        const increaser = setInterval(() => {
            setPersentageNow(persentageNow => (persentageNow <= persentage ? persentageNow : persentageNow - 1));
        }, 50);
        return () => clearInterval(increaser);
    }, []);
    return (
        <div className={"md:mx-10 flex flex-row gap-px flex-wrap opacity-80 " + className}>
            <div className="w-full flex items-start mb-1">&larr;<span className="font-bold mx-1">Richer </span> than you</div>
            {
                [...Array(100)].map((value, index) => (
                    <div className="flex flex-col">
                        <div className={"transform -translate-x-4 md:-translate-x-2 -translate-y-16 md:-translate-y-14 " + (index + 1 === persentageNow ? "absolute" : "hidden")}>
                            <div className="h-12 w-12 flex justify-center items-center rounded-full text-white font-black" style={{ backgroundColor: "#b79d59" }}>
                                You
                            </div>
                            <div className="transform translate-x-5 -translate-y-1" style={{ height: "0", width: "0", borderTop: "16px solid #b79d59", borderLeft: "5px solid transparent", borderRight: "5px solid transparent" }} />
                        </div>
                        <Person className={"h-4 md:h-8 w-4 md:w-8 my-px " + (index + 1 > persentageNow ? "text-gray-600 " : index + 1 === persentageNow ? "text-yellow-800" : "text-black")} />
                    </div>
                ))
            }
            <div className="w-full flex flex-row-reverse mt-1">than you &rarr; <span className="font-bold mx-1"> Poorer </span></div>
        </div>
    );
}