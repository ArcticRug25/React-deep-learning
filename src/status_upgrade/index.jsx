// 状态提升 - 两个组件（无父子关系）同享一个数据并且同步数据变化

// class Info extends React.Component {
//   render() {
//     const { username, inputNum } = this.props;
//     return (
//       <div>
//         <p>第{inputNum}号</p>
//         <p> 输入长度为：{username.length}</p>
//         <p>
//           提示：
//           {username.length < 6
//             ? "长度必须大于等于6位"
//             : username.length >= 6 &&
//               (username.length <= 12 ? "长度合法" : "长度必须小于12")}
//         </p>
//       </div>
//     );
//   }
// }

// // 类组件调用（实例化）的时候，组件内部的状态是唯一且独立的
// class UsernameInput extends React.Component {
//   state = {
//     username: "",
//   };

//   changeUsername(e) {
//     this.setState({
//       username: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Info username={this.state.username} inputNum={this.props.inputNum} />
//         <div>
//           <input type="text" onChange={(e) => this.changeUsername(e)} />
//         </div>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <UsernameInput inputNum={1} />
//         <UsernameInput inputNum={2} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------

// // 组件嵌套与调用，和类组件函数组件没有任何关系
// function Info(props) {
//   return (
//     <div>
//       <p>第{props.inputNum}号</p>
//       <p> 输入长度为：{props.username.length}</p>
//       <p>
//         提示：
//         {props.username.length < 6
//           ? "长度必须大于等于6位"
//           : props.username.length >= 6 &&
//             (props.username.length <= 12 ? "长度合法" : "长度必须小于12")}
//       </p>
//     </div>
//   );
// }

// function UsernameInput(props) {
//   const [username, setUsername] = React.useState("");

//   return (
//     <div>
//       <Info username={username} inputNum={props.inputNum} />
//       <div>
//         <input type="text" onChange={(e) => setUsername(e.target.value)} />
//       </div>
//     </div>
//   );
// }

// // 类组件与函数组件相互是可以调用的
// function App() {
//   return (
//     <div>
//       <UsernameInput inputNum={1} />
//       <UsernameInput inputNum={2} />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------

// 单项数据流
// 数据的流动 父 -> 子 => props 向下传递
// props只读数据 —> props -> 数据操作 -> 父组件来完成 -> 数据由父组件管理
// 状态提升 -> 本应该是子组件的状态 -> 父组件来保存操作 -> 通过props -> 子组件
class Info extends React.Component {
  render() {
    const { username, inputNum } = this.props;
    return (
      <div>
        <p>第{inputNum}号</p>
        <p> 输入长度为：{username.length}</p>
        <p>
          提示：
          {username.length < 6
            ? "长度必须大于等于6位"
            : username.length >= 6 &&
              (username.length <= 12 ? "长度合法" : "长度必须小于12")}
        </p>
      </div>
    );
  }
}

// 类组件调用（实例化）的时候，组件内部的状态是唯一且独立的
class UsernameInput extends React.Component {
  render() {
    return (
      <div>
        <Info username={this.props.username} inputNum={this.props.inputNum} />
        <div>
          <input type="text" value={this.props.username} onChange={(e) => this.props.usernameChange(e)} />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    username: "",
  };
  usernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <UsernameInput
          username={this.state.username}
          usernameChange={this.usernameChange.bind(this)}
          inputNum={1}
        />
        <UsernameInput
          username={this.state.username}
          usernameChange={this.usernameChange.bind(this)}
          inputNum={2}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
