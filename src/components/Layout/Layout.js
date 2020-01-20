import React from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <div>
            <Toolbar/>
            <main className="LayoutContent">
                {props.children}
            </main>
        </div>
    );
};

export default Layout;