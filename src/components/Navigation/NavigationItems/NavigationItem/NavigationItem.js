import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import FiberNewIcon from '@material-ui/icons/FiberNew';
import ComboBox from "../../../Autocomplete/Autocomplete";




const NavigationItem = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <FiberNewIcon fontSize="large" />TV+
                </IconButton>
                <ComboBox/>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationItem;