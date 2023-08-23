import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

function byid (){

    const params = useParams();

    const [data, setData] = useState([])
    const url = "http://localhost:3000/receitas"

    async function fetchData() {
        try {
        const response = await axios.get(url);
        setData(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        console.log("Fetching data...");
        fetchData();
    }, []);

    return (
        <div>
            {
                data.map((item) => {
                    if (item.id == params.id) {
                        return (
                            <Link to ={`/receita/${item.id}`}>
                                <div key={item.id}>
                                    <div> {props.id} </div>
                                    <p>{item.nome}</p>
                                </div>
                            </Link>
                        )
                    }
                })
            }
        </div>
    )
    
}

export default byid;