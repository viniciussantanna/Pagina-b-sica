// pages/index.js

export default function Home() {
    // Função que será chamada ao clicar no botão
    const handleClick = () => {
      alert("Você clicou no botão!");
    };
  
    return (
      <div className="container">
        <header>
          <h1>Bem-vindo ao meu projeto com Next.js!</h1>
        </header>
        <main>
          <section className="content">
            <p>Este é um projeto básico utilizando Next.js, HTML e CSS.</p>
            <button className="btn" onClick={handleClick}>
              Clique aqui!
            </button>
          </section>
        </main>
        <footer>
          <p>Feito com dedicação</p>
        </footer>
      </div>
    );
  }