import { P as Parag } from './styles'
export type Props = {
  children: string
  tipo?: 'secundario' | 'principal'
}

const Paragrafo = (props: Props) => (
  <Parag tipo={props.tipo}>{props.children}</Parag>
)

export default Paragrafo
