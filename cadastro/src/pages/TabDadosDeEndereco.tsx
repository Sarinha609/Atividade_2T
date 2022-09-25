import { useState } from "react";
import InputCep from "../componentes/InputCep";
import InputCidades from "../componentes/InputCidades";
import InputEstados from "../componentes/Inputestados";
import { CepContextProvider } from "../providers/CepContext";
import brasil from "../pages/brasil.png"; 

export default function() {

    return <>
        <img src={brasil} width="500" height="300"></img>
        <h1>Cadastro: Dados de Endereço</h1>
        <CepContextProvider>
        <InputCep/>
        <InputEstados />
        <InputCidades />
        </CepContextProvider>
        <button className="btn-salvar">Limpar seleção</button>  
        {/* tentativa  falha de fazer um botão funcionar ksksks*/}
    </>
}