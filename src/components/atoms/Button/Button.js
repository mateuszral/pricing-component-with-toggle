import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.linearGradient};
  color: ${({ theme }) => theme.white};
  margin-top: 25px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.size.button};
  letter-spacing: 1px;
`;

export default Button;
