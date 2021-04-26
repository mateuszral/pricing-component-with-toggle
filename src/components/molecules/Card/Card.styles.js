import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme, isFeatured }) => (isFeatured ? theme.linearGradient : theme.white)};
  color: ${({ theme, isFeatured }) => (isFeatured ? theme.white : theme.darkGrayishBlue)};
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  max-width: 400px;

  ${Button} {
    background: ${({ theme, isFeatured }) => isFeatured && theme.white};
    color: ${({ theme, isFeatured }) => isFeatured && theme.grayishBlue};
  }

  ${({ theme }) => theme.mq.bigTablet} {
    min-height: ${({ isFeatured }) => isFeatured && '450px'};
  }
`;

export const Specifications = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${Paragraph} {
    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.lightGrayishBlue};
    }

    &:nth-child(2) {
      border-top: 1px solid ${({ theme }) => theme.lightGrayishBlue};
      border-bottom: 1px solid ${({ theme }) => theme.lightGrayishBlue};
    }

    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.lightGrayishBlue};
    }
  }
`;
