import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";

const PageOne = () => {
    return (
        <div>page one
            <div>
                <Link to="/page2">page2</Link>
            </div>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>page two
            <div>
                <Link to="/">back</Link>
            </div>

        </div>
    );
}

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne}/>
                <Route path="/page2"  component={PageTwo}/>
            </div>
        </BrowserRouter>

    )
};


export default App;