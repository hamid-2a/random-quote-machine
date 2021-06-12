import React from "react";
import "./app.styles.scss";
import quotes from "./quotes";

import * as Icon from "react-bootstrap-icons";

//COLORS
const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotes[0],
      color: "teal"
    };
  }

  changeQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState({
      currentQuote: quotes[randomIndex],
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  };

  render() {
    document.body.style.backgroundColor = this.state.color;

    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <div id="quote-box">
          <p id="text" style={{ color: this.state.color }}>
            <sup>
              <Icon.ChatRightQuoteFill />{" "}
            </sup>
            {this.state.currentQuote.quote}
          </p>
          <p id="author" style={{ color: this.state.color }}>
            - <em>{this.state.currentQuote.author}</em>
          </p>

          <div className="buttons-container">
            <button
              id="tweet-quote"
              style={{ backgroundColor: this.state.color }}
            >
              <a href="twitter.com/intent/tweet" target="_blank">
                <Icon.Twitter />
              </a>
            </button>

            <button
              id="tumblr-quote"
              style={{ backgroundColor: this.state.color }}
            >
              <a href="instagram.com" target="_blank">
                <Icon.Instagram />
              </a>
            </button>

            <button
              id="new-quote"
              onClick={this.changeQuote}
              style={{ backgroundColor: this.state.color }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
