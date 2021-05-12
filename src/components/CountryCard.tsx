import React from "react";

interface Props {
    flag: String,
    name: String,
    population: String,
    capital: String,
    region: String,
    onClick: (country: Props) => void
}

export default function CountryCard({country, onClick}: Props) {

    const {flag, name, population, capital, region} = country;

    return (
        <div className="max-w-xs rounded shadow-2xl dark:bg-darkBlue dark:text-white cursor-pointer" onClick={() => onClick(country)}>
            <div className="w-full h-40 bg-center bg-cover" style={{backgroundImage: `url(${flag})`}}/>
            <div className="px-6 py-8">
                <h1 className="my-3 font-bold text-lg">{name}</h1>
                <div>
                    <span className="font-medium text-sm inline-block mr-2">Population:</span>
                    <span className="text-sm">{population}</span>
                </div>
                <div>
                    <span className="font-medium text-sm inline-block mr-2">Region:</span>
                    <span className="text-sm">{region}</span>
                </div>
                <div>
                    <span className="font-medium text-sm inline-block mr-2">Capital:</span>
                    <span className="text-sm">{capital}</span>
                </div>
            </div>
        </div>
    )
}