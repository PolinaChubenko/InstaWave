import './App.css';
import Auth from "./components/Auth/Auth";
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./components/Main/Profile/Profile";
import Settings from "./components/Main/Settings/Settings";
import PhotoAdding from "./components/Main/PhotoAdding/PhotoAdding";
import Search from "./components/Main/Search/Search";
import {isLogin} from "./utils/isLogin";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Auth/>}></Route>
                    {isLogin() && <Route path='/search' element={<Search/>}></Route>}
                    {isLogin() && <Route path='/profile/:id' element={<Profile/>}></Route>}
                    {isLogin() && <Route path='/settings' element={<Settings/>}></Route>}
                    {isLogin() && <Route path='/adding' element={<PhotoAdding/>}></Route>}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
// { isLogin() &&
export default App;
