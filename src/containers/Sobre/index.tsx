import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá, meu nome é Micael. Estudo Desenvolvimento Web na Escola Britânica de
      Artes Criativas e Tecnologia há 1 ano e meio e estou em busca de uma
      oportunidade como desenvolvedor júnior. Tenho certeza de que minhas
      habilidades podem contribuir significativamente para sua equipe e estou
      pronto para agregar valor ao seu time.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=mikghl&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=mikghl&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
