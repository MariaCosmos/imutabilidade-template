import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import { useState } from "react";

function Garagem(props) {
  const [automovel1, setAutomovel1] = useState({
    cor:"Magenta", 
    ano: 2077, 
    flex:"não"
  })
  const [automovel2, setAutomovel2] = useState({
    cor:"Roxo", 
    ano: 2053, 
    flex:"sim"
  })
  const [automovel3, setAutomovel3] = useState({
    cor:"Bege", 
    ano: 2037, 
    flex:"sim"
  })
  const [automovel4, setAutomovel4] = useState({
    cor:"Verde", 
    ano: 2033, 
    flex:"não"
  })

  function mudarCorCarro(){
    setAutomovel1({...automovel1, cor:"Amarelo"})
    setAutomovel2({...automovel2, cor:"Vermelho"})
    setAutomovel3({...automovel3, cor:"Lilas"})
    setAutomovel4({...automovel4, cor:"Cinza"})

  }


  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem do {props.nome}</h1>
      <button onClick={props.mensagemAprentacao}>Mensagem</button>
      <button onClick={mudarCorCarro}>Mudar as cores</button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel1.cor}
        ano={automovel1.ano}
        flex={automovel1.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel3.cor}
        ano={automovel3.ano}
        flex={automovel3.flex}
      />
      <Carro 
      adicionadoPor={props.nome} 
      cor={automovel4.cor} 
      ano={automovel4.ano}
      flex={automovel4.flex} 
      />
   </EstilizacaoDaGaragem>
  );
}

export default Garagem;
