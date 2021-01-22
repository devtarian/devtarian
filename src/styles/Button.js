import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0 0.75rem;
  height: ${(props) => (props.h ? props.h : '35px')};
  line-height: ${(props) => (props.h ? props.h : '35px')};
  vertical-align: center;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray[1]};
  transition: all 0.3s ease;
  margin-right: 0.4rem;
  background: ${(props) => (props.bg ? props.bg : 'white')};
  margin-bottom: 10px;
  overflow: hidden;
  &:hover {
    background: ${(props) => props.theme.color[1]};
    color: ${(props) => props.theme.background[0]};
  }
  &.active {
    background: ${(props) => props.theme.color[1]};
    color: ${(props) => props.theme.background[0]};
    transition: none;
  }

  ${(props) =>
    props.clicked &&
    css`
      background: ${(props) => props.theme.brown[0]};
    `}

  ${(props) =>
    props.type === 'green' &&
    css`
      background: ${(props) => props.theme.green[0]};
      color: white;
    `}

    @media (max-width: 767px) {
    padding: 0 0.45rem;
  }
`;

export default Button;
