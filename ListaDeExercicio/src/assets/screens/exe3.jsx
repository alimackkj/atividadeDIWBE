import {useState} from "react";

import Descricao from "../components/descricao";
import Header from "../components/header";
import Footer from "../components/footer";

const Exe3 = () => {
    const[farenheit , setFarenheit ] = useState(0);
    const[celcius, setCelcius] = useState(0);

    function calculaCelcius(){
        setCelcius((farenheit - 32)/1,8);
    }
    
    return(
        <>
        <Header titulo="Exercicio 3"/>
        <Descricao descricao="Desenvolva um programa que transforme um valor de temperatura fornecido pelo
usuário, de Farenheit ( F ) para Graus Celcius ( ºC ). [C = (F – 32) / 1,8]."/>
        
        <label>Informe a temperatura em Farenheit </label>
        <input 
        type = "number"
        value = {farenheit}
        onChange={e=> setFarenheit(parseFloat(e.target.value))}
        />
        <button onClick={() => (calculaCelcius())}> Calcular </button>
        <h3> A temperatura em Celcius é {celcius}</h3>
        </>
    );
}

export default Exe3;