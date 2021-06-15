import React from 'react';

export default function Page({ wrapperColor = "white", marginColor = "white", className = "", children }) {

    return (
        <div className="min-h-screen flex justify-center flex-row border-b"
            style={{ backgroundColor: wrapperColor }}>
            <div className="h-screen w-5 "
                style={{ backgroundColor: marginColor }} />
            <div className={"w-full max-w-3xl overflow-hidden flex flex-col gap-2 md:gap-4 items-center pt-5 md:pt-10 " + (className)}>
                {
                    children.map((child, index) => (
                        <div key={index} >
                            {child}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}