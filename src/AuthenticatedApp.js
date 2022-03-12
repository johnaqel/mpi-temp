import Home from "./components/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CookTemps} from "./components/CookTemps/CookTemps";

export const AuthenticatedApp = () => {
    return (
        <>
            Authenticated
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cook-temps" element={<CookTemps/>} />
                </Routes>
            </BrowserRouter>
        </>

    )
}