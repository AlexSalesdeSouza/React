import Botao from "./Components/Botao/Botao";

function App() {
  return (
<div>
  <form>
    <label>Titulo do Livro</label>
    <input type="text" placeholder="Digite o Titulo"/>

    <label>Autor</label>
    <input type="text" placeholder="Digite o Nome do autor"/>

    <label>Gênero</label>
    <input type="text" placeholder="Digite o Gênero do Livro"/>
    <Botao texto="Cadastrar"/>
    <Botao texto="Deletar"/>
    <Botao texto="Quantidade"/>

  </form>

  <div>
    <ul>
      <li>Livro 1</li>
      <li>Livro 2</li>
      <li>Livro 3</li>
    </ul>
  </div>
  </div>
);
}

export default App;
