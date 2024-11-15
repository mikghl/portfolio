import { useEffect, useState } from 'react'
import { Projeto } from '../Projeto'
import { Lista } from '../../containers/Projetos/styles'

type Repositorio = {
  id: number
  name: string
  html_url: string
}

const ReposList = () => {
  const [repos, setRepos] = useState<Repositorio[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/mikghl/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar repositórios:', error)
      })
  }, [])

  return (
    <Lista>
      {repos.map((retorno) => (
        <li key={retorno.id}>
          <Projeto name={retorno.name} html_url={retorno.html_url} />
        </li>
      ))}
    </Lista>
  )
}

export default ReposList
