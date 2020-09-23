import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions";
import {Line, LineChart, Tooltip, XAxis} from "recharts";

export class ChartComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <>
                <div className={"lineChart"}>
                    <h3>Retail Sales</h3>
                    <LineChart width={900} height={300} data={this.props.stackLineData}>
                        <XAxis dataKey="weekEnding" tickLine={false} axisLine={{ stroke: 'rgba(234,240,244,0.01)' }}/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="salesPerMonth" stroke="#2b54d8" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="wholesalesPerMonth" stroke="#6b6b6b" strokeWidth={2} dot={false} />
                    </LineChart>
                </div>
            </>
        );
    }
}

const mapStateToProps = state =>{
    const data = state.stackLineData.sales;

    const collection = data.map(x => ({ ...x, weekEnding: parseInt(x.weekEnding.split("-")[1],10), retailSales: Number(x.retailSales), wholesaleSales: Number(x.wholesaleSales)}));


    const retailSalesPerMonth = collection.reduce((acc, cur) => {
        acc[cur.weekEnding] = acc[cur.weekEnding] + cur.retailSales || cur.retailSales;
        return acc;
    }, {})

    const wholesaleSalesPerMonth = collection.reduce((acc, cur) => {
        acc[cur.weekEnding] = acc[cur.weekEnding] + cur.wholesaleSales || cur.wholesaleSales;
        return acc;
    }, {})


    const finalData = []
    const monthsOfYear = {0: "", 1:"JAN", 2:"FEB", 3:"MAR", 4:"APR", 5:"MAY",
        6:"JUN", 7:"JUL", 8:"AUG", 9:"SEP", 10:"OCT", 11:"NOV", 12:"DEC"};

    for (let i = 0, keys = Object.keys(monthsOfYear), ii = keys.length; i < ii; i++) {
        console.log(typeof(keys[i]));
        let modifiedData = {"weekEnding":monthsOfYear[keys[i]],"salesPerMonth":retailSalesPerMonth[keys[i]],"wholesalesPerMonth":wholesaleSalesPerMonth[keys[i]]}
        finalData.push(modifiedData)
    }
    console.log(finalData);
    return {stackLineData: finalData};
};

export default connect(mapStateToProps,{getData})(ChartComponent);