import styled from 'styled-components'
import { Props } from './index'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'secundario' ? '#949494' : '#282a35')};
  line-height: 22px;
`
