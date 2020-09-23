import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

export class TableComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    render () {
        return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">WEEK ENDING</TableCell>
                            <TableCell align="center">RETAIL SALES</TableCell>
                            <TableCell align="center">WHOLESALE SALES</TableCell>
                            <TableCell align="center">UNITS SOLD</TableCell>
                            <TableCell align="center">RETAILER MARGIN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.stackLineData.sales.map((row) => (
                            <TableRow key={row.weekEnding}>
                                <TableCell align="center" component="th" scope="row">
                                    {row.weekEnding}
                                </TableCell>
                                <TableCell align="center">{row.retailSales}</TableCell>
                                <TableCell align="center">{row.wholesaleSales}</TableCell>
                                <TableCell align="center">{row.unitsSold}</TableCell>
                                <TableCell align="center">{row.retailerMargin}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
        );
    }
}

const mapStateToProps = state =>{
    return {stackLineData: state.stackLineData};
};

export default connect(mapStateToProps,{getData})(TableComponent);