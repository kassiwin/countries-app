import React from 'react';

type Props = {}
const CountryDetails = (props: Props) => {
    return (
        <div>
            <div className="w-full flex items-center justify-start">
                <button className="p-4">&lt;-- Back</button>
            </div>

            <div className="flex flex-row flex-wrap">
                <div className="w-1/2">
                    <img src={""} alt={""}/>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-around">
                    <h1>name</h1>
                    <div className="flex flex-row flex-wrap w-full justify-between items-center">
                        <div>
                            <p>
                                <span>Native Name:</span>
                                <span>

                                </span>
                            </p>
                            <p>
                                <span>Population</span>
                                <span>

                                </span>
                            </p>
                            <p>
                                <span>Region</span>
                                <span>

                                </span>
                            </p>
                            <p>
                                <span>Sub Region</span>
                                <span>

                                </span>
                            </p>
                            <p>
                                <span>Capital</span>
                                <span>

                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>Top Level Domain</span>
                                <span>

                                </span>
                            </p>
                            <p>
                                <span>Currencies</span>
                                <span>

                                </span>
                            </p>
                            <p>
                                <span>Languages</span>
                                <span>

                                </span>
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-row">
                        <span>Border Countries</span>
                    </div>
                </div>

            </div>

        </div>
    );
};

function BorderCountry(name: String) {
    return (
        <div className="p-3 text-center border border-lightGrey">
            {name}
        </div>
    );

}

export default CountryDetails;