import './Botao.css'
//*componte baseado em função = mais atualizado

function Botao(props){
     return(
          <input type="submit" className="Botao" value={props.texto}/> 
     );

}

export default Botao;