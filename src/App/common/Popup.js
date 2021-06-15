import React from 'react';

export default function Popup({ show, onClose, className = "", children }) {

    return (
        <div className={"absolute w-full h-screen inset-0 z-20 bg-black bg-opacity-30 flex items-center justify-center " + (show ? "" : "hidden")}>
            <div className={"border border-gray-200 bg-white shadow w-full " + className}>
                <div className="px-8 py-5 flex flex-col gap-5 text-center">
                    {
                        children.map((child, index) => (
                            <div>
                                {child}
                            </div>
                        ))
                    }
                </div>
                <div className="py-3 border-t border-gray-400 underline cursor-pointer bg-white hover:bg-gray-200"
                    onClick={onClose}>
                    Close
                </div>
            </div>
        </div>
    );
}