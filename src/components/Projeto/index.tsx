import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

type ProjetoProps = {
  name: string
  html_url: string
}

export const Projeto = ({ name, html_url }: ProjetoProps) => (
  <Card>
    <Titulo>{name}</Titulo>
    <Paragrafo tipo="secundario">Projeto disponível no GitHub</Paragrafo>
    <LinkBotao href={html_url} target="_blank">
      Visualizar
    </LinkBotao>
  </Card>
)
