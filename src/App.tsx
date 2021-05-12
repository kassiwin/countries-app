import * as React from "react";
import './styles/App.css';
import {Header} from "./components";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {CountryDetails} from "./pages";


type State = {
    isDarkMode: boolean
}

class App extends React.Component<{}, State> {

    state: State = {
        isDarkMode: false
    }


    toggleDarkMode = () => {
        this.setState({isDarkMode: !this.state.isDarkMode})
    }


    render(): React.ReactNode {
        const {isDarkMode} = this.state;
        return (
            <div className={`${isDarkMode ? 'dark' : ''} bg-white dark:bg-black text-blackTxt dark:text-white`}>
                <Header toggleDarkMode={this.toggleDarkMode}/>
                <Router>
                    <Switch>
                        <Route path="/:country">
                            <CountryDetails/>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }


}

export default App;
