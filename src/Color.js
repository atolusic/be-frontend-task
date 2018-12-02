import React from "react";
import axios from "axios";

class Color extends React.Component {
  state = {
    colors: ["#000"]
  };
  async componentDidMount() {
    const url = "http://www.colr.org/json/color/random";
    const color1 = await axios.get(url);
    const color2 = await axios.get(url);

    this.setState(prevState => ({
      colors: [
        ...prevState.colors,
        color1.data.new_color,
        color2.data.new_color
      ]
    }));
  }

  onClickHandler = () => {};

  render() {
    return (
      <div>
        <button onClick={e => this.onClickHandler()}>Color</button>
      </div>
    );
  }
}

export default Color;
