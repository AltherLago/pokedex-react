import {useState, useEffect} from "react";
import Card from "./Card"
import Info from "./Info";
import axios from "axios";

export default function Main(){
    
    const [pokeData,setPokeData] = useState([])
    const [loading,setLoading] = useState(true)
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    useEffect(() => {

    })

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
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <div className="btn-group">
                        <button>Previus</button>
                        <button>Next</button>
                    </div>
                </div>

                <div className="right-content">
                    <Info/>
                </div>
            </div>
        </>
    )
}
