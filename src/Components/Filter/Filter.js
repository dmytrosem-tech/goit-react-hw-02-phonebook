import { Component } from "react";

class Filter extends Component {
  state = {
    filter: "",
  };
  render() {
    return <input type="text" name="filter" />;
  }
}

export default Filter;
