import React from 'react';
import {Person,Twitter} from './AppIcons';

export default function TopRichDiagram({persentage=0}){

    return(
        <div className="mx-10 flex flex-row gap-px flex-wrap opacity-80">
            <div className="w-full flex items-start mb-1">&larr;<span className="font-bold mx-1">Richer </span> than you</div>
            {
                [...Array(100)].map((value, index) => (
                    <div className="flex flex-col">
                        <div className={"transform -translate-x-2 -translate-y-14 "+(index + 1 < persentage&&index+2 >= persentage ? "absolute":"hidden")}>{}
                            <div className="h-12 w-12 flex justify-center items-center rounded-full text-white font-black" style={{ backgroundColor:"#b79d59"}}>
                                You
                            </div>
                            <div className="transform translate-x-5 -translate-y-1" style={{ height: "0", width: "0", borderTop: "16px solid #b79d59", borderLeft: "5px solid transparent", borderRight: "5px solid transparent"}}/>
                        </div>
                        <Person className={"h-8 w-8 my-px " + (index + 1 >= persentage ? "text-gray-600 " : index + 2 >= persentage ? "text-yellow-800" : "text-black")}/>
                    </div>
                ))
            }
            <div className="w-full flex flex-row-reverse mt-1">than you &rarr; <span className="font-bold mx-1"> Poorer </span></div>
        </div>
    );
}