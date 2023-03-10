import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from '../helpers';

export default class Fish extends React.Component {
  static propTypes = {
    addToOrder: PropTypes.func.isRequired,
    details: PropTypes.shape({
      desc: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.string.isRequired,
  };

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { addToOrder, desc, image, index, name, price, status } =
      this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={this.handleClick}
          type="button"
        >
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}
