import { useState} from "react"; 

import Descricao from "../components/descricao";
import Footer from "../components/footer";
import Header from "../components/header";


const Exe1 = () => {

    const [nome, setNome] = useState(""); 
    return(
        <>
        <Header titulo= "Exercicio 1"/>
        <Descricao descricao=" Receba o nome do usuario em um campo de Input e escreva o cumprimento 'bem vindo' seguido do nome informado" />
        <label> Informe seu nome </label>
        <input
        type="text"
        value={nome}
        onChange={e=> setNome(e.target.value)}
        />
        <h3> Seja bem vindo {nome}</h3>
        </>
    );
}

export default Exe1;