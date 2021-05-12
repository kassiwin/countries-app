import React from "react";

interface Props {
    toggleDarkMode: () => void
}


export default function Header({toggleDarkMode}: Props) {
    return (
        <header className="h-20 shadow-xl w-full bg-white dark:bg-darkBlue text-blackTxt dark:text-white dark:shadow-2xl z-10">
            <div className="container max-w-6xl px-4 py-3 mx-auto flex flex-row items-center justify-between w-full h-full">
                <div className="font-bold text-lg">Where in the world?</div>
                <div onClick={toggleDarkMode} className="cursor-pointer">
                    Switch
                </div>
            </div>
        </header>
    )
}