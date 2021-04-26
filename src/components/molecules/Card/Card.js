import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

import { Wrapper, Specifications } from './Card.styles';

const Card = ({ title, price, storage, usersAllowed, featured = false }) => (
  <Wrapper isFeatured={featured}>
    <h2>{title}</h2>
    <Paragraph isBig>${price}</Paragraph>
    <Specifications>
      <Paragraph>{storage} Storage</Paragraph>
      <Paragraph>{usersAllowed} Users Allowed</Paragraph>
      <Paragraph>Send up to 3 GB</Paragraph>
    </Specifications>
    <Button>LEARN MORE</Button>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  usersAllowed: PropTypes.number.isRequired,
  featured: PropTypes.bool,
};

Card.defaultProps = {
  featured: false,
};

export default Card;
