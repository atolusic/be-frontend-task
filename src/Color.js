import React from "react";
import axios from "axios";

class Color extends React.Component {
  state = {
    colors: [],
    color: "#000"
  };
  async componentDidMount() {
    const url = "http://www.colr.org/json/color/random";
    const color1 = await axios.get(url);
    const color2 = await axios.get(url);

    this.setState({
      colors: [color1.data.new_color, color2.data.new_color]
    });
  }

  onClickHandler = () => {
    const { colors, color } = this.state;
    if (color === "#000") {
      this.setState({
        color: `#${colors[Math.floor(Math.random() * colors.length)]}`
      });
    } else {
      this.setState({ color: "#000" });
    }
  };

  render() {
    const { colors } = this.state;
    return (
      <div>
        <button
          disabled={colors.length === 0}
          style={{ color: this.state.color }}
          onClick={this.onClickHandler}
        >
          Color
        </button>
      </div>
    );
  }
}

export default Color;
