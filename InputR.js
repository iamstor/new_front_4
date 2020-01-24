import React from "react";
import {connect} from "react-redux";

class InputR extends React.Component{
    render() {
        return(
            <table className="input-table">
                <tr>
                    <td>
                        <input type="radio" value="1" name="r" id="r1"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 1} />
                        <label htmlFor="r1">1</label>
                    </td>
                    <td>
                        <input type="radio" value="2" name="r" id="r2"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 2} />
                        <label htmlFor="r2">2</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" value="3" name="r" id="r3"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 3} />
                        <label htmlFor="r3">3</label>
                    </td>
                    <td>
                        <input type="radio" value="4" name="r" id="r4"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 4} />
                        <label htmlFor="r4">4</label>
                    </td>
                   </tr>
            </table>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        r: store.mainState.rField,
    }
};

export default connect(mapStateToProps)(InputR)