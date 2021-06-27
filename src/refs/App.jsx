/**
 * Refs
 * 允许我们访问真实DOM
 *
 * React数据流 -> 通过props来实现父子组件的交互
 * Refs允许我们用于强制修改子组件
 */

/**
 * 管理input的焦点
 *
 * 通过一个按钮，清空input value，input聚焦
 *
 */

// class MyInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.inputRef = React.createRef();
//   }

//   state = {
//     inputValue: "",
//   };

//   inputOperating() {
//     const oInput = this.inputRef.current;

//     oInput.focus();

//     this.setState({
//       inputValue: "",
//     });
//   }

//   changeInputValue(e) {
//     this.setState({
//       inputValue: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.inputRef}
//           value={this.state.inputValue}
//           onChange={this.changeInputValue.bind(this)}
//         />
//         <button onClick={this.inputOperating.bind(this)}>操作Input</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyInput />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// 媒体管理
// class MyVideo extends React.Component {
//   constructor(props) {
//     super(props);

//     this.videoRef = React.createRef();
//   }

//   videoPlay() {
//     this.videoRef.current.play();
//   }

//   videoPause() {
//     this.videoRef.current.pause();
//   }

//   render() {
//     return (
//       <div>
//         <video
//           ref={this.videoRef}
//           src=""
//           width="300"
//           height="200"
//           controls
//         ></video>
//         <button onClick={this.videoPlay.bind(this)}>Play</button>
//         <button onClick={this.videoPause.bind(this)}>Pause</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyVideo />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// class MyBox extends React.Component {
//   constructor(props) {
//     super(props);

//     this.boxRef = React.createRef();
//   }

//   boxExtend() {
//     const oBox = this.boxRef.current;

//     oBox.style.width = "500px";
//     oBox.style.height = "500px";
//   }

//   render() {
//     return (
//       <>
//         <div
//           ref={this.boxRef}
//           style={{
//             width: 200 + "px",
//             height: 200 + "px",
//             backgroundColor: "orange",
//             transition: "all 1s",
//           }}
//         ></div>
//         <button onClick={this.boxExtend.bind(this)}>Extend</button>
//       </>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyBox />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// 集成第三方DOM库
// class MyBox extends React.Component {
//   constructor(props) {
//     super(props);

//     this.boxRef = React.createRef();
//   }

//   boxExtend() {
//     const $Box = $(this.boxRef.current);

//     $Box.animate({
//       width: 500,
//       height: 500,
//     });
//   }

//   render() {
//     return (
//       <>
//         <div
//           ref={this.boxRef}
//           style={{
//             width: 200 + "px",
//             height: 200 + "px",
//             backgroundColor: "orange",
//           }}
//         ></div>
//         <button onClick={this.boxExtend.bind(this)}>Extend</button>
//       </>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyBox />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// // 模态框打开关闭
// class Modal extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.modalRef = React.createRef();

//     // if (props.onRef) {
//     //   props.onRef(this);
//     // }
//   }

//   // open() {
//   //   console.log(1);
//   //   this.modalRef.current.style.display = "block";
//   // }

//   // close() {
//   //   this.modalRef.current.style.display = "none";
//   // }

//   render() {
//     return (
//       <div
//         // ref={this.modalRef}
//         style={{
//           width: 300 + "px",
//           border: "1px solid #000",
//           // display: "none",
//           display: this.props.isOpen ? "block" : "none",
//         }}
//       >
//         <h1>This is a Modal</h1>
//         <p>This is a super Modal.</p>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     isOpen: false,
//   };

//   modalOpen(status) {
//     // switch (status) {
//     //   case "open":
//     //     this.modal.open();
//     //     break;
//     //   case "close":
//     //     this.modal.close();
//     //     break;
//     //   default:
//     //     break;
//     // }

//     this.setState({
//       isOpen: status === "open" ? true : false,
//     });
//   }

//   render() {
//     return (
//       <div>
//         {/* <Modal onRef={(instance) => (this.modal = instance)} /> */}
//         <Modal isOpen={this.state.isOpen} />
//         <div>
//           <button onClick={() => this.modalOpen("open")}>Open</button>
//           <button onClick={() => this.modalOpen("close")}>Close</button>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

/**
 * createRef -> React => React.creatRef();
 *
 * 通过createRef -> ref对象
 * 通过元素的ref属性可以附加到React元素
 * 一般通过构造器中给this上的属性赋值一个ref，方便整个组件使用
 * ref只要传递React元素中，就可以利用ref的current属性访问到该真实DOM节点
 * ref在componentDidMount和componentDidUpdate触发前更新
 */

/**
 * ref有不同的使用方式
 *
 * 1. ref -> html元素 -> current -> 真实DOM节点
 * 2. ref -> class组件 -> current -> 组件实例
 * 3. ref -> 函数组件（没有实例） -> createRef -> 附加不到组件上
 */

// class Test extends React.Component {
//   constructor(props) {
//     super(props);

//     this.divRef = React.createRef();
//   }

//   render() {
//     return <div ref={this.divRef}>{this.props.children}</div>;
//   }
// }

// function Test2() {
//   const divRef = React.useRef(null);

//   React.useEffect(() => {
//     console.log(divRef);
//   }, []);

//   return <div ref={divRef}>Hello, Function Ref!!!!</div>;
// }

// class App extends React.Component {
//   state = {
//     text: "Hello,Ref!!!!",
//   };

//   render() {
//     return (
//       <div>
//         <Test>{this.state.text}</Test>
//         <Test2 />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// /**
//  * 如何将子节点ref暴露给父组件
//  *
//  * 16.3以上 Refs转发
//  * 将ref自动的通过组件传递给子组件
//  */

// // React.forwardRef(() => { return React元素 })

// // 3.通过forwardRef向input转发ref属性
// const MyInput = React.forwardRef((props, ref) => (
//   // 5. ref参数只能用在forwardRef定义的组件内
//   <input type="text" placeholder={props.placeholder} ref={ref} />
// ));

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // 1.创建ref对象
//     this.myInputRef = React.createRef();
//   }

//   componentDidMount() {
//     // 4.myInputRef.current 指向 input DOM 节点
//     console.log(this.myInputRef);
//   }

//   inputOperate(e) {
//     console.log(this.myInputRef);
//     const oInput = this.myInputRef.current;

//     oInput.value = '';
//     oInput.focus();
// }

//   render() {
//     return (
//       <div>
//         {/* 2.给组件赋值ref */}
//         <MyInput ref={this.myInputRef} placeholder={'请填写...'} />
//         <button onClick={this.inputOperate.bind(this)}>OperateInput</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------------------------------

// class MyInput extends React.Component {
//   render() {
//     return (
//       <input
//         type="text"
//         ref={this.props.forwardedRef}
//         placeholder={this.props.placeholder}
//       />
//     );
//   }
// }

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder={props.placeholder}
    />
  );
});

function InputHoc(WrapperComponent) {
  class Input extends React.Component {
    render() {
      // 容器组件内部获取ref属性
      const { forwardedRef, ...rest } = this.props;

      // 将forwardedRef传递给参数组件
      return <WrapperComponent ref={forwardedRef} {...rest} />;
    }
  }

  function forwardRef(props, ref) {
    return <Input forwardedRef={ref} {...props} />;
  }

  forwardRef.displayName = "Input - " + WrapperComponent.name;

  return React.forwardRef(forwardRef);
}

const MyInputHoc = InputHoc(MyInput);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  operateInput() {
    console.log(this.inputRef);
    const oInput = this.inputRef.current;
    oInput.value = "";
    oInput.focus();
  }

  render() {
    return (
      <>
        {/* 用ref接收我们的转发的ref */}
        <MyInputHoc ref={this.inputRef} placeholder={"请填写..."} />
        <button onClick={this.operateInput.bind(this)}>Operate</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
