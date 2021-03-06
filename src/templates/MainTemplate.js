import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'assets/styles/globalStyles';

import { theme } from 'assets/styles/theme';

const MainTemplate = ({ children }) => (
  <>
    <Helmet lang="en" title="Pricing component with toogle" />
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
