import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class Color extends React.Component {
  state = {
    colors: [],
    color: "#000"
  };
  async componentDidMount() {
    try {
      const url = "http://www.colr.org/json/color/random";
      const color1 = await axios.get(url);
      const color2 = await axios.get(url);

      this.setState({
        colors: [color1.data.new_color, color2.data.new_color]
      });
    } catch (e) {
      alert("Cannot fetch colors");
    }
  }

  onClickHandler = () => {
    const { colors } = this.state;
    this.setState({
      color: `#${colors[Math.floor(Math.random() * colors.length)]}`
    });
  };

  render() {
    const { colors } = this.state;
    const { text } = this.props;
    const blackWithRandom = ["#000", this.state.color];
    return (
      <div>
        <button
          disabled={colors.length === 0}
          style={{
            color:
              blackWithRandom[
                Math.floor(Math.random() * blackWithRandom.length)
              ],
            fontSize: "2rem"
          }}
          onClick={this.onClickHandler}
        >
          {text}
        </button>
      </div>
    );
  }
}

Color.propTypes = {
  text: PropTypes.string.isRequired
};

export default Color;
