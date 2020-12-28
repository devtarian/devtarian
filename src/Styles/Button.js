import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray[1]};
  transition: all 0.3s ease;
  margin-right: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.brown[0]};
  }
  &.active {
    background-color: ${(props) => props.theme.brown[0]};
    transition: none;
  }
`;

export default Button;
