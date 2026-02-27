import imagemDev from "../src/imagens/imagemDev.jpg"
import iconeGithub from "../src/imagens/iconeGithub.png"
import iconeLinkedin from "../src/imagens/iconeLinkedin.png"
import './App.css'

function App() {
  

  return (
   <main>
    <section>
    <p>
      Olá! Seja bem-vindo(a) ao meu portfólio.
    </p>

    <p>
      Meu nome é <span>Istefane Nascimento</span> e eu sou uma desenvolvedora web
    </p>

    <div id="redes-sociais">
      <a href="#">
        <img src={iconeGithub} alt="" srcset=""/>
      </a>
      <a href="#">
        <img src={iconeLinkedin} alt="" srcset="" />
      </a>

    </div>
    <a href="#sobreMim">
      <button>Conheça mais sobre mim</button>
    </a>
    </section>

    <section>
    <img id="imagemDev" src={imagemDev}/>
    </section>
   </main>
  )
}

export default App
