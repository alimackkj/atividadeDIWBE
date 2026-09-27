import {useState} from "react";

import Header from "../components/header";
import Descricao from "../components/descricao";
import Footer from "../components/footer";

const Exe5 = () => {
    const [conta, setConta] = useState(0);
    const [amigos, setAmigos] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [contaDividida, setContaDividida] = useState(0);
    const [contaComTaxa, setContaComTaxa] = useState(0);

    function calculaConta(){
        const valorConta = conta;
        const quantAmigos = amigos;

        const contaDivisao = valorConta/quantAmigos;
        const calculoTaxa = contaDivisao * 0.1;
        const valorTotal = calculoTaxa + contaDivisao;

        setContaDividida(contaDivisao);
        setTaxa(calculoTaxa);
        setContaComTaxa(valorTotal);
    }
    return(
        <>
         <Header titulo="Exercicio 5"/>
         <Descricao descricao="Receba o valor referente da conta de um restaurante, gerada pelo consumo de um
grupo de amigos, efetue o cálculo de quanto cada um irá pagar, e inclua a opção de
taxa de garçom."/>
        <label>Informe o valor da conta do restaurante</label>
        <input 
        type = "number"
        value={conta}
        onChange={e=> setConta(e.target.value)}
        />
        <label>Informe a quantidade de amigos do grupo</label>
        <input 
        type = "number"
        value= {amigos}
        onChange={e=> setAmigos(e.target.value)}
        />

        <button onClick={() => calculaConta() } >Calcular</button>
        
        <h3> O valor da conta dividida por {amigos} sem a taxa de garçom é {contaDividida}, com a taxa do garçom é {contaComTaxa}</h3>
        </>
    );
}

export default Exe5;