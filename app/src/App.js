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
                    <Route path='/search' element={isLogin() ? <Search/> : <Navigate to="/" />}></Route>
                    <Route path='/profile/:id' element={isLogin() ? <Profile/> : <Navigate to="/" />}></Route>
                    <Route path='/settings' element={isLogin() ? <Settings/> : <Navigate to="/" />}></Route>
                    <Route path='/adding' element={isLogin() ? <PhotoAdding/> : <Navigate to="/" />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
// { isLogin() &&
export default App;
