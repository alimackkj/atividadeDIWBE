import {useState} from "react";

 import Descricao from "../components/descricao";
 import Header from "../components/header";
 import Footer from "../components/footer";

 const Exe7 = () => {
    const [numeros, setNumeros] = useState([]);
    const [dataHora, setDataHora] = useState("");

    function gerarDados() {
       
        const numerosSorteados = [];
        for (let i = 0; i < 5; i++) {
           
            const numero = Math.floor(Math.random() * 31);
            numerosSorteados.push(numero);
        }
       
        const agora = new Date();
        const dataFormatada = agora.toLocaleString('pt-BR');
        setNumeros(numerosSorteados);
        setDataHora(dataFormatada);
    }

    return(
        <>
        <Header titulo="Exercicio 7"/>
        <Descricao descricao="Desenvolva um algoritmo que exiba cinco números aleatórios 0 a 30 e exiba a data
e a hora atual do sistema."/>
        <button onClick={gerarDados}>Gerar Números e Data</button>
            {dataHora !== "" && (
                <div>
                    <h3>Números sorteados: {numeros.join(" - ")}</h3>
                    <h3>Data e Hora do sorteio: {dataHora}</h3>
                </div>
            )}
            
            <Footer />
        </>
    );
 }
 export default Exe7;