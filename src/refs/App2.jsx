// 16.2及以下， Refs转发

// class MyInput extends React.Component {
//   render() {
//     return <input type="text" ref={this.props.inputRef} />;
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.inputRef = React.createRef();
//   }

//   componentDidMount() {
//     console.log(this.inputRef);
//   }

//   render() {
//     return <MyInput inputRef={this.inputRef} />;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// 回调 Refs

// class MyInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.myInput = null;
//   }

//   setMyInput(el) {
//     this.myInput = el;
//   }

//   focusInput() {
//     this.myInput.value = "";
//     this.myInput.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.setMyInput.bind(this)} />
//         <button onClick={this.focusInput.bind(this)}>Click!</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return <MyInput />;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// class MyInput extends React.Component {
//   focusInput() {
//     this.myInput.value = "";
//     this.myInput.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.props.inputRef} />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.oInput = null;
//   }

//   focusInput() {
//     this.oInput.value = "";
//     this.oInput.focus();
//   }

//   render() {
//     return (
//       <div>
//         <MyInput inputRef={(el) => (this.oInput = el)} />
//         <button onClick={this.focusInput.bind(this)}>Click!</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// 已经废除掉的

/**
 * string Refs 依赖 组件实例下面的refs集合里的ref
 * 需要React保持追踪当前正在渲染的组件 this没法确定
 * React获取ref可能会比较慢
 * 
 * 不能在render中工作
 * 
 * 不能组合，只能有一个ref
 */ 

class MyInput extends React.Component {
  componentDidMount() {
    console.log(this.refs.inputRef);
  }
  render() {
    return (
      <div>
        <input type="text" ref="inputRef" />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MyInput />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
