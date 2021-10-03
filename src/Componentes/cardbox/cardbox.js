import Card from "./../../elements/card/card";
import React from "react";
import "./cardbox.css"


const CardBox = ()=>{
    return(
        <div id="cardboxcontainer">
        <Card name={'aas'}/>
        <Card/>
        <Card/> <Card/>
        <Card/> <Card/>
        
        </div>)
}
export default CardBox;