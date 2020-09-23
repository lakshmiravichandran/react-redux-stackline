import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions";
import Button from "@material-ui/core/Button";
import {faChartBar, faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";

export class DescComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    render () {
        return (
            <>
                <Grid divided='vertically'>
                    <div className={"descImage"}>
                        <img src={this.props.stackLineData.image} width={"200px"} alt={"logo"} />
                        <h3>{this.props.stackLineData.title}</h3>
                        <h6>{this.props.stackLineData.subtitle}</h6>
                    </div>

                    <div className={"descTags"}>
                        {this.props.stackLineData.tags.map((row) => (
                        <><Button className={"tagsButton"}  size="small" variant="outlined" disabled>{row} </Button> </>
                        ))
                        }
                    </div>
                    <br/>
                    <br/>
                    <div className={"descMenu"}>
                        <a><FontAwesomeIcon icon={faHome} /> &nbsp; OVERVIEW </a>
                    </div>
                    <br/>
                    <br/>
                    <div className={"descMenu"}>
                        <a className={"salesText"}><FontAwesomeIcon className={"salesIcon"} icon={faChartBar} /> &nbsp; SALES </a>
                    </div>
                </Grid>
            </>
        );
    }
}

const mapStateToProps = state =>{
    return {stackLineData: state.stackLineData};
};

export default connect(mapStateToProps,{getData})(DescComponent);