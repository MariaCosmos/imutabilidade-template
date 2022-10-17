import Garagem from "./Componentes/Garagem";
import { GlobalStyled } from "./globalStyled";
import { useState } from "react";

export default function App() {
  const nome = "Turma";
  const [nomeEstado, setNomeEstado] = useState("Cosmos")

  function mudarNome(){
    setNomeEstado("Cosmico °0°")
  }

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nomeEstado} mensagemAprentacao={mudarNome} />
    </div>
  );
}
