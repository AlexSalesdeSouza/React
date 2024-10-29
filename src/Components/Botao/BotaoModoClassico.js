import { Component } from "react";

import React from 'react';

//* Componente baseado em classe (Mais antigo)
//* export= exporta para arquivo externos, permite que arquivos externos acessem esse componente (ex app.js usar este botao)

export class Botao extends Component{
     //* render = renderiza - carrega - desenha
     render(){
          return(
               <input type="submit" value="Cadastrar"/> 
          );
     }
}


//* export default = uma forma de exportar o PRINCIPAL do arquivo. ja que so tem um. vai ser o BOTAO mesmo.
export default Botao;