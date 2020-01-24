import React from "react";
import {connect} from "react-redux";
import InputX from "./InputX";
import InputR from "./InputR";
import CanvasComponent from "./CanvasComponent";
import ResultTable from "./ResultTable";

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        if(this.props.user===null) this.props.history.push("/login");
        else this.props.dispatch({type: "APP_GET_POINTS", value:{history: this.props.history}})
    }
    render() {
        return(
            <div className="main">
                <h2>Приветик, {this.props.user} !</h2>
                <h1>Куда же упадет точка?</h1>
                <CanvasComponent/>
                <h2>Иксик</h2>
                <InputX/>
                <h2>Игрик</h2>
                <input type="text" value={this.props.y} placeholder="от -5 до 3" onChange={event => this.props.dispatch({
                    type: "MAIN_SET_Y",
                    value: event.target.value.replace(",",".")})}/>
                <h2>Радиус</h2>
                <InputR/>
                <button className="submit-button" onClick={()=>this.props.dispatch({
                    type: "MAIN_ADD_POINT",
                    value:{x: this.props.x, y:this.props.y, r:this.props.r}
                })} disabled={this.props.y===""||this.props.y==="-"||this.props.y==="."}>Проверочка</button>
                <button className="submit-button" onClick={this.exit}>Выйти</button><br/>
                <ResultTable/>
            </div>
        )
    }


    exit = ()=>{
        this.props.dispatch({type: "APP_LOGOUT", value: {history: this.props.history}});
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.appState.user,
        x: store.mainState.xField,
        y: store.mainState.yField,
        r: store.mainState.rField,
    }
};

export default connect(mapStateToProps)(MainContainer);