import PropTypes from 'prop-types';
import React from 'react';

export default class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" placeholder="Fish Name" ref={this.nameRef} />
        <input type="text" placeholder="Fish Price" ref={this.priceRef} />
        <select ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea placeholder="Fish Desc" ref={this.descRef} />
        <input type="text" placeholder="Fish Image" ref={this.imageRef} />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}
