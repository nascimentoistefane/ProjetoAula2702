import "./sobre.css"

export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
            <div id="resumo">
                <h2>Sobre mim</h2>

                <p>
                Meu nome é Istefane Nascimento e estudo desenvolvimento web desde janeiro de 2024. Iniciei meus estudos com HTML e CSS e, desde então, venho ampliando meus conhecimentos em diversas tecnologias. Estou sempre em busca de aprender coisas novas e melhorar minhas habilidades como desenvolvedora.
                </p>
            </div>
            <div id="meus-conhecimentos">
                <h2>Meus conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </div>
    )
}