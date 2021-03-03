import React from 'react'

import Aux from '../../hoc/Auxx'
import classes from './layout.module.css'
const Layout = (props) => (

    <Aux>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;