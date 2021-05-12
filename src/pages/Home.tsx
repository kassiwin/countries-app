import * as React from 'react';
import {CountryCard} from "../components";
import {RouteComponentProps } from 'react-router-dom';


type State = {
    countries: object,
    regions: object,
}

interface Props extends RouteComponentProps {}


class Home extends React.Component<Props, State> {

    state = {
        countries: [],
        regions: ['africa', 'americas', 'asia', 'europe', 'oceania']
    }

    componentDidMount(): void {
        // TODO: Fetch By Batch
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(countries => {
                this.setState({countries: countries})
            });
    }

    onCountryCardClick = (country: object) => {
        this.props.history.push({
            pathname: `/${country.name}`,
            state: country
        });

    }


    render() {
        const {countries, regions} = this.state;
        return (
            <div className="dark:bg-black bg-lightGrey text-blackTxt dark:text-white w-full min-h-screen">
                <div className="container max-w-6xl px-4 mx-auto dark:bg-black bg-lightGrey">
                    <div className="w-full dark:bg-black bg-lightGrey flex flex-row justify-between items-center py-12">
                        <div>
                            Search
                        </div>
                        <div className="select-regions-container p-5 bg-white dark:bg-darkBlue text-blackTxt dark:text-white dark:shadow-2xl">
                            <select id="regions" className="">
                                <option>Filter By Region</option>
                                {
                                    regions.map((region) => {
                                        return (
                                            <option className="uppercase" value={region} key={region}>{region}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        {countries.map((country, idx) => {
                            return <CountryCard {...country} onClick={this.onCountryCardClick} key={idx}/>
                        })}
                    </div>


                </div>

            </div>
        );
    }
}

export default Home;