import { useState } from 'react';
import classes from './Form.module.css'
function Form(props){
    const[name, setName]=useState('');
    const[description,setDescription]=useState('');
    const[price, setPrice]=useState();
    const[l,setL]=useState();
    const[m,setM]=useState();
    const[s,setS]=useState();

    const nameHandler=(e)=>{
        setName(e.target.value);
    }

    const desHandler=(e)=>{
        setDescription(e.target.value);
    }

    const priceHandler=(e)=>{
        setPrice(e.target.value);
    }

    const lHandler=(e)=>{
        setL(e.target.value);
    }

    const mHandler=(e)=>{
        setM(e.target.value);
    }

    const sHandler=(e)=>{
        setS(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        props.onAdd(name, description,price,l,m,s)
        setName('');
        setDescription('');
        setPrice();
        setL();
        setM();
        setS();
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <label>Shoe name :</label>
            <input type="text" value={name} onChange={nameHandler}></input>
            <label>Description :</label>
            <input type="text" value={description} onChange={desHandler}></input>
            <label>Price :</label>
            <input type="number" value={price} onChange={priceHandler}></input>
            <label>Quantity available :</label>
            <label>L</label>
            <input type='number' value={l} onChange={lHandler}></input>
            <label>M</label>
            <input type='number' value={m} onChange={mHandler}></input>
            <label>S</label>
            <input type='number' value={s} onChange={sHandler}></input>
            <button type='submit'>Add product</button>
        </form>
    )
}
export default Form;