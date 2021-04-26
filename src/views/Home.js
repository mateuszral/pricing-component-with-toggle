import React, { useState } from 'react';
import Switch from 'react-switch';

import Card from 'components/molecules/Card/Card';

import bgTop from 'assets/images/bg-top.svg';
import bgBottom from 'assets/images/bg-bottom.svg';

import {
  Wrapper,
  Header,
  SwitchWrapper,
  ContentWrapper,
  Footer,
  BgBottom,
  BgTop,
} from './Home.styles';

const Home = () => {
  const [isSubTypeMonthly, setIsSubTypeMonthly] = useState(true);

  const handleChangeSwitch = () => {
    setIsSubTypeMonthly((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Header>Our Pricing</Header>
      <SwitchWrapper>
        <span>Annually</span>
        <Switch
          onChange={handleChangeSwitch}
          checked={isSubTypeMonthly}
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={22}
        />
        <span>Monthly</span>
      </SwitchWrapper>
      <ContentWrapper>
        <Card
          title="Basic"
          price={isSubTypeMonthly ? '19.99' : '199.99'}
          storage="500 GB"
          usersAllowed={2}
          transferLimit="3 GB"
        />
        <Card
          title="Professional"
          price={isSubTypeMonthly ? '24.99' : '249.99'}
          storage="1 TB"
          usersAllowed={5}
          transferLimit="10 GB"
          featured
        />
        <Card
          title="Master"
          price={isSubTypeMonthly ? '39.99' : '399.99'}
          storage="2 TB"
          usersAllowed={10}
          transferLimit="20 GB"
        />
      </ContentWrapper>
      <Footer>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <span>Mateusz Ral</span>.
      </Footer>
      <BgBottom src={bgBottom} alt="" />
      <BgTop src={bgTop} alt="" />
    </Wrapper>
  );
};

export default Home;
