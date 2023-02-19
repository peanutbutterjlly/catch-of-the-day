import React from "react";
import { getFunName } from "../helpers";

export default class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    event.preventDefault();
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" defaultValue={getFunName()} placeholder="Store Name" ref={this.myInput} required />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}
