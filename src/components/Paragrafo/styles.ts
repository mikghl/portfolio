import styled from 'styled-components'
import { Props } from './index'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'secundario'
      ? props.theme.corSecundaria
      : props.theme.corPrincipal};
  line-height: 22px;
`
