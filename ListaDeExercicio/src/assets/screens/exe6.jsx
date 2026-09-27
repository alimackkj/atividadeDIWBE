import {useState} from "react";

import Descricao from "../components/descricao";
import Header from "../components/header";
import Footer from "../components/footer";

const Exe6 = () =>  {
    const[vendido, setVendido] = useState(0);
    const [producao, setProducao] = useState(0);
    const [valor, setValor] = useState(0);
    const [lucro, setLucro] = useState(0);


    function calculaLucro(){
        const venda = vendido;
        const valorProducao = venda * 0.3;
        const valorPorLitro = venda * 2.5;
        const lucroTotal = valorPorLitro - valorProducao;

        setProducao(valorProducao);
        setValor(valorPorLitro);
        setLucro(lucroTotal);

    }
    return(
        <>
        <Header titulo="Exercicio 6"/>
        <Descricao descricao="Um fazendeiro tem como principal atividade a venda de leite. Do valor total ganho
de sua produção, 30% vai para custear a produção. Sabendo que ele vende o litro de
leite por R$2,50 para seus distribuidores, faça um programa que receba uma
quantidade de litros vendidas e informe quanto ele ganhará com a venda."/>
        <label>Informe a quantidade de litros de leite vendido</label>
        <input
        type="number"
        value={vendido}
        onChange={e=> setVendido(e.target.value)}
        />
        <button onClick={() => calculaLucro()}>Calcular</button>
        <h3>O valor recebido pela venda é {lucro}</h3>
        </>
    );
}
export default Exe6;