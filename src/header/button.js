import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles ={
    button: {
        backgroundColor: '#0084ff'
    },
}

export const SearchButton = withStyles(styles)(function (props) {
    const { classes } = props;
    return (
        <Button variant="contained" color="primary" className={classes.button}>
            提问
        </Button>
    )
})