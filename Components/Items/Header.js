import Button from '../UI/Button';
import React from 'react'
import classes from './Header.module.css'
function Header(props){
    return(
        <div className={classes.header}>
            <h1>Shoes order app</h1>
            <Button onClick={props.onClick}/>
        </div>
    )
}

export default Header;