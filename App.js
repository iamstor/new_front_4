import React from 'react';
import { Switch, Route} from "react-router-dom";
import "./style.scss"
import logo from "./vt-logo.png"
import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import RegisterPage from "./RegisterPage/RegisterPage";


class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </div>
        );
    }
}


const Header = ()=>{
    return(<div className="head">
        <span id="head-title">
            ЛР №4 Сторожевой Дарьи (Р3214) Вариант 21004
        </span>
    </div>)
};


export default App;
