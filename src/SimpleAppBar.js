import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'


function handleTouchTap() {
    alert('title component was taped/clicked');
}

const SimpleAppBar = () => (
    <AppBar
        title={<span className="Title">James Abtahi</span>}
        onTitleTouchTap={handleTouchTap}
        iconClassNameRight={<FlatButton label="About Me"/>}
        />
)

export default SimpleAppBar;

