import React, { useState, useEffect } from 'react';
import { Cola } from './AppIcons';

export default function TimeToBuyCola({ timeToBuyColaYou, timeToBuyColaZimbabwe, show = true }) {

    const [animationValue, setAnimationValue] = useState({ timeToBuyColaYou: 0, timeToBuyColaZimbabwe: 0 });


    useEffect(() => {
        const animation = setInterval(() => {
            setAnimationValue(animationValue => (
                timeToBuyColaYou > animationValue.timeToBuyColaYou ?
                    { ...animationValue, timeToBuyColaYou: animationValue.timeToBuyColaYou + (timeToBuyColaYou / 30) }
                    :
                    { ...animationValue, timeToBuyColaYou: timeToBuyColaYou }));
            setAnimationValue(animationValue => (
                timeToBuyColaZimbabwe > animationValue.timeToBuyColaZimbabwe ?
                    { ...animationValue, timeToBuyColaZimbabwe: animationValue.timeToBuyColaZimbabwe + (timeToBuyColaZimbabwe / 30) }
                    :
                    { ...animationValue, timeToBuyColaZimbabwe: timeToBuyColaZimbabwe }));
            return () => clearInterval(animation)
        }, 100)
    }, [])


    return (
        <div className={"flex flex-col md:flex-row " + (show ? "" : "hidden")}>

            {
                [
                    {
                        label: "You",
                        value: animationValue.timeToBuyColaYou,
                        className: "",
                    },
                    {
                        label: "Labourer in Zimbabwe",
                        value: animationValue.timeToBuyColaZimbabwe,
                        className: "transform md:-translate-x-8",
                    },
                ].map((element, index) => (
                    <div className={"flex flex-col " + element.className}
                        key={index}>
                        <h1 className="font-bold text-lg">
                            {element.label}
                        </h1>
                        <div className="h-48 md:h-72 w-48 md:w-72 m-auto rounded-full bg-gray-100 border-8 border-white flex flex-col gap-3 justify-center items-center">
                            <Cola className="h-36 object-adjust" />
                            <div className="text-2xl opacity-80 font-bold"
                                style={{ color: "#b79d59" }}>
                                {("0" + ((element.value / 60).toFixed(0))).slice(-2)}:{("0" + ((element.value % 60).toFixed(0))).slice(-2)}:00
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}