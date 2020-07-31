import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import styled from 'styled-components';

const QuantityValue = styled.span`
  font-weight: 600;
  color: ${props => (props.inStock ? '#77a039' : 'tomato')};
  `;

const Image = styled.img`
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

const Button = styled.button`
  background: ${props => props.primary ? "tomato" : "white"};
  color: ${props => props.primary ? "white" : "tomato"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  &:hover {
    background-color: tomato;
    color: #fff;
  }
`;

function Product ({imgUrl, name, price, quantity}) {
  const isInStock = quantity < 50;

  // const quantityClass = isInStock ? styles.available : styles.notAvailable;
  // MODULES.CSS

    return (
    <div className={styles.container}>
      <Image
        src={imgUrl}
        alt={name}
        width="640"
      />
      <h2 className={styles.name}>{name}</h2>
      <p>Price: {price}$</p>
      <p>Quantity:
        <QuantityValue inStock = {isInStock}>
        {isInStock ? ' In stock, dont worry' : ' Few left - lets go buy it!'}
        </QuantityValue>
        {/* // MODULES.CSS */}
        {/* <span className={quantityClass}>
        {isInStock ? ' Few left - lets go buy it!' : ' In stock, dont worry'}
        </span> */}
      </p>
      <Button type="button">Add to cart</Button>
    </div>
  
  );
};

Product.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product;