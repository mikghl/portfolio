import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
