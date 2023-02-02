import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
            <Routes>
                <Route path = "/" element = {<Home />}/>
                <Route path = "/reservations" element = {<Reservations />}/>
            </Routes>
        </>
    );
}

/*TODO add Routers*/
export default App;
