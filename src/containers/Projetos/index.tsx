import Titulo from '../../components/Titulo/index'
import ReposList from '../../components/Api/github'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <ReposList />
  </section>
)

export default Projetos
