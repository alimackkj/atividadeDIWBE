import {useState} from "react";

import Descricao from "../components/descricao";
import Header from "../components/header";
import Footer from "../components/footer";

const Exe4 = () => {
    const[raio, setRaio] = useState(0);
    const[circunferencia, setCircunferencia] = useState(0);

    function calcularCircunferencia(){
        setCircunferencia(2 * 3.14 * raio);
    }

    return(
        <>
        <Header titulo ="Exercicio 4"/>
        <Descricao descricao="Receba o valor de um raio e calcule a circunferência de um círculo ( C = 2 * pi *
raio)."/>  
        <label> Informe o valor do raio</label>
        <input 
        type = "number"
        value={raio}
        onChange={e=> setRaio(e.target.value)}
        />
        <button onClick={() => (calcularCircunferencia())}>Calcular</button>
        <h3> O valor da circunferencia é {circunferencia}</h3>
        </>
        
    );
}
export default Exe4;