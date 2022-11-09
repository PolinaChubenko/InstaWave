import './App.css';
import Auth from "./components/Auth/Auth";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Main/Profile/Profile";
import Settings from "./components/Main/Settings/Settings";
import PhotoAdding from "./components/Main/PhotoAdding/PhotoAdding";
import Search from "./components/Main/Search/Search";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Auth/>}></Route>
                    <Route path='/profile' element={<Profile/>}></Route>
                    <Route path='/settings' element={<Settings/>}></Route>
                    <Route path='/adding' element={<PhotoAdding/>}></Route>
                    <Route path='/search' element={<Search/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
