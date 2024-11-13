import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

export const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)
