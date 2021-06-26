export default function InputHoc(WrapperComponent) {
  // 高阶组件是不可以修改参数组件的
  // 这样修改可能会导致参数组件内部的逻辑执行失效
  // WrapperComponent.prototype.componentDidUpdate = function () {
  //     console.log('InputHoc');
  // }

  class InputHocComponent extends React.Component {
    state = {
      inputValue: "",
    };

    // 一切的功能都可以在容器组件内实现
    componentDidUpdate() {
      console.log("InputHocComponent");
    }

    valueInput(e) {
      this.setState({
        inputValue: e.target.value,
      });
    }

    render() {
      // 如何排除参数组件不需要的属性
      const { a, ...props } = this.props;
      return (
        <WrapperComponent
          inputValue={this.state.inputValue}
          valueInput={this.valueInput.bind(this)}
          {...props}
        />
      );
    }
  }

  return InputHocComponent;
}
