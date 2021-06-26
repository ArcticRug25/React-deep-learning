import { BtnStyleContext } from "../../context";

class StButton extends React.Component {
  render() {
    return (
      <BtnStyleContext.Consumer>
        {({ style, doClick }) => {
          return <button style={style} onClick={doClick} {...this.props} />;
        }}
      </BtnStyleContext.Consumer>
    );
  }
}

export default StButton;
