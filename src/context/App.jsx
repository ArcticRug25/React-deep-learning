import Main from "./Main";

/**
 * ThemeContext -
 * Provider 供应方
 * Consumer 消费方 使用方
 */

import { ThemeContext } from "./context";

class App extends React.Component {
  state = {
    theme: "black",
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Main themeChange={(color) => this.setState({ theme: color })} />
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
