import { ThemeContext } from "../../context";

class NavItem extends React.Component {
  render() {
    const { index, item } = this.props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div className={!index ? `item active-${theme}` : "item"}>{item}</div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default NavItem;
