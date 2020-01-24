import React from "react";
import {connect} from "react-redux";

class ResultTable extends React.Component{

    render() {
        let result = [];
        let points = this.props.points.concat().sort((a,b)=>b.date-a.date);
        for(let item of points){
            let history = item.pointHistoryElements.concat().sort((a,b)=>b.date-a.date);
            result.push(
                <tr key={item.id}>
                    <td>{this.props.currentPoint===item.id?this.xChange() : history[0].x}</td>
                    <td>{this.props.currentPoint===item.id?this.yChange() : history[0].y}</td>
                    <td>{item.r}</td>
                    <td>{history[0].isCheck ? "Успех":"Проигрыш"}</td>
                    <td>{this.props.currentPoint===item.id?this.saveButton(item): formatDate(new Date(item.date))}</td>
                   
                </tr>
            )}
        return(
            <div>
                <h1>Таблица результатов</h1>
                <table className="result-table">
                    <thead>
                    <tr>
                        <th>Иксик</th>
                        <th>Игрик</th>
                        <th>Радиус</th>
                        <th>Судьба точки</th>
                        <th>Момент падения</th>

                    </tr>
                    </thead>
                    <tbody>{result}</tbody>
                </table>
            </div>
        )
    }

}
const mapStateToProps = function(store) {
    return {
        points: store.appState.points,
        currentPoint: store.mainState.currentPoint,
        x:store.mainState.xChange,
        y:store.mainState.yChange
    }
};


const formatDate = (date)=>{
    return `${fill(date.getDay()+22)}.${fill(date.getMonth()+1)}.${fill(date.getFullYear())},\n
     ${fill(date.getHours())}:${fill(date.getMinutes())}:${fill(date.getSeconds())}`
};
const fill = (item)=>{
    return Number(item)<10? "0"+item : ""+item;
};

export default connect(mapStateToProps)(ResultTable)