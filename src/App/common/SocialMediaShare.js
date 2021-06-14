import React from 'react';
import { Facebook,Instagram,Twitter } from './AppIcons';

const social = [
    {
        name: "Facebook",
        href: "#",
        icon: Facebook,
    },
    {
        name: "Instagram",
        href: "#",
        icon: Instagram,
    },
    {
        name: "Twitter",
        href: "#",
        icon: Twitter,
    },
];

export default function SocialMediaShare({ className = "", color ="#a58b47"}){

    return(
        <div className={"flex flex-col gap-1 justify-center items-center "+className}>
            <h1 className="text-sm" style={{ color: color }}>Share your results:</h1>
            <div className="flex flex-row gap-2">
                {
                    social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            style={{ backgroundColor: color }}
                            className="text-white p-2 rounded-full hover:text-yellow-400"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6"/>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}