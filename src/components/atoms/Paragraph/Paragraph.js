import styled from 'styled-components';

const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  padding: ${({ isBig }) => !isBig && '15px'};
  font-size: ${({ theme, isBig }) => isBig && theme.font.size.header};
  margin: ${({ isBig }) => (isBig ? '20px 0' : 0)};
`;

export default Paragraph;
