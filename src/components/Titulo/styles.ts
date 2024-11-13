import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weigth: bold;
  color: #282a35;
  margin-bottom: 16px;
`
