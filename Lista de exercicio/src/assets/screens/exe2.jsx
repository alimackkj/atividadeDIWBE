import { useState} from "react"; 

import Descricao from "../components/descricao";
import Header from "../components/header";
import Footer from "../components/footer";

const Exe2 = () => {
    const[distancia, setDistancia] = useState(0); 
    const[tempo, setTempo] = useState(0);
    const[velocidade, setVelocidade] = useState(0);

    function calcula_velocidade(){
    setVelocidade(distancia/tempo);
    }

    return(
        <>
        <Header titulo= "Exercicio 2"/>
        <Descricao descricao="Sabendo que a velocidade linear é calculada pela seguinte equação velocidade=distancia/tempo. Desenvolva um algoritmo que receba os valores relativosà distância e tempo, calcule e mostre o valor da velocidade média."/>
       <label>Informe a distancia gasto</label>
       <input
       type="number"
       value={distancia}
        onChange={e=> setDistancia(parseFloat(e.target.value))}
        />
        <label> Informe o tempo gasto</label>
        <input
        type = "number"
        value={tempo}
        onChange={e=> setTempo(e.target.value)}
        />
        <button onClick={()=>(calcula_velocidade())}>
            Calcular
            </button>
            <h3> A velocidade media foi de {velocidade}</h3>
        <Footer/>
        
        </>
    );

}

export default Exe2;