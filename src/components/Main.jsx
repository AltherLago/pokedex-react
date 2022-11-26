import React from "react";
import Card from "./Card"
import Info from "./Info";

export default function Main(){
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                </div>
                <div className="right-content">
                    <Info/>
                </div>
            </div>
        </>
    )
}
