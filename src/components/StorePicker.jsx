import PropTypes from 'prop-types';
import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  myInput = React.createRef();
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          defaultValue={getFunName()}
          placeholder="Store Name"
          ref={this.myInput}
          required
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}
