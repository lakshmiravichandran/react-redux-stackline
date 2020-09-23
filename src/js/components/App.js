import React from "react";
import TableComponent from "./TableComponent";
import HeaderComponent from "./HeaderComponent"
import DescComponent from "./DescComponent"
import ChartComponent from "./ChartComponent"
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import "../../css/App.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <HeaderComponent />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <DescComponent />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <ChartComponent /> <br/><br/><br/>
                        <TableComponent />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}



