import { P as Parag } from './styles'
export type Props = {
  children?: string
  tipo?: 'secundario' | 'principal'
  fontSize?: number
}

const Paragrafo = (props: Props) => (
  <Parag tipo={props.tipo} fontSize={props.fontSize}>
    {props.children}
  </Parag>
)

export default Paragrafo
