import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

class Main extends React.Component {
  state = {
    navData: ["一", "二", "三", "四"],
  };
  render() {
    return (
      <div>
        <Header>这是标题</Header>
        <div>
          <button onClick={() => this.props.themeChange("black")}>black</button>
          <button onClick={() => this.props.themeChange("red")}>red</button>
          <button onClick={() => this.props.themeChange("orange")}>
            orange
          </button>
          <button onClick={() => this.props.themeChange("purple")}>
            purple
          </button>
        </div>
        <BottomNav data={this.state.navData} />
      </div>
    );
  }
}

export default Main;
