import styled from 'styled-components';
import Switch from 'react-switch';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.veryLightGrayishBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px ${({ theme }) => theme.layout.mobileSidesPadding} 0;
  position: relative;
  z-index: 10;
  overflow: hidden;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.grayishBlue};
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 40px;

  span {
    color: ${({ theme }) => theme.lightGrayishBlue};
    margin: 0 25px;
  }

  ${Switch} {
    div:first-child {
      background: ${({ theme }) => theme.linearGradient} !important;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.bigTablet} {
    justify-content: center;
    flex-direction: row;
  }
`;

export const Footer = styled.footer`
  font-size: 11px;
  text-align: center;
  padding-bottom: 10px;

  a {
    color: hsl(228, 45%, 44%);
  }
`;

export const BgBottom = styled.img`
  display: none;

  ${({ theme }) => theme.mq.bigTablet} {
    display: initial;
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const BgTop = styled.img`
  z-index: -1;
  position: absolute;
  top: -40px;
  right: -180px;

  ${({ theme }) => theme.mq.bigTablet} {
    top: 0;
    right: 0;
  }
`;
