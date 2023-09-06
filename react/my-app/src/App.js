//aron function
const Titulo = () => (
  <h2>
    <span>Olá, </span>
    <strong>Mundo!</strong>
    !!!
  </h2>
)

function MeuBotao(){

  const label = 'Clique Aqui!!!';

  return(
    <button type="button">{label} </button>
  )
}

function App() {
  return (
    <div className="App">
      <Titulo />
      <article>
        <h2>Subtitulo</h2>
        <p>Teste teste teste</p>
      </article>
      <MeuBotao />
    </div>
  );
}

export default App;
