/**
 * JSX 其实是React.createElement函数调用的语法糖
 * JSX -> 编译 -> React.createElement 调用形式
 */

// class App extends React.Component {
//   render() {
//     return (
//       //   <div className="box" id="J_Box">
//       //     <h1 className="title">
//       //       This is a <span>Title</span>
//       //     </h1>
//       //   </div>
//       React.createElement(
//         "div",
//         {
//           className: "box",
//           id: "J_Box",
//         },
//         React.createElement(
//           "h1",
//           {
//             className: "title",
//           },
//           "This is a ",
//           React.createElement("span", null, "Title")
//         )
//       )
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

/**
 * React元素类型
 * MyButton -> React元素 -> React元素类型
 * 组件 -> JSX -> 这个组件必须存在在当前模块的作用域中
 * React -> 编译 -> JSX => React.createElement调用形式
 *   React -> createElement -> 让React库存在当前的模块作用域中
 *   import React from 'react'
 *
 *
 */

// class MyButton extends React.Component {
//   render() {
//     return <button>Click</button>;
//   }
// }

// class App extends React.Component {
//   render() {
//     return <MyButton />;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

/**
 * 如何在JSX中使用点语法
 *
 */

// const colorSystem = {
//   primary: "blue",
//   success: "green",
//   warning: "orange",
//   danger: "red",
// };

// const MyUI = {
//   Button: class extends React.Component {
//     render() {
//       const { type, children } = this.props;

//       return (
//         <button style={{ color: "#fff", backgroundColor: colorSystem[type] }}>
//           {children}
//         </button>
//       );
//     }
//   },
//   Input: function (props) {
//     const { placeholder, onValueInput } = props;
//     return (
//       <input
//         type="text"
//         placeholder={placeholder}
//         onChange={(e) => onValueInput(e)}
//       />
//     );
//   },
// };

// class App extends React.Component {
//   valueInput(e) {
//     console.log(e);
//   }
//   render() {
//     return (
//       <div>
//         <MyUI.Button type="danger">Click</MyUI.Button>
//         <MyUI.Input
//           placeholder="请填写"
//           onValueInput={this.valueInput.bind(this)}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

/**
 *  书写规范
 *  小写字母开头代表HTML的内置组件
 *  <div> <h1>
 *  标签转换为 'div' 'h1' -> 作为React.createElement第一个参数
 *
 *  大写字母开头的自定义组件 <MyButton />
 *  编译 React.createElement(MyButton)
 */

// 运行时选择React类型

// class LoginBtnGroup extends React.Component {
//   render() {
//     return (
//       <div>
//         <button>登录</button>
//         <button>注册</button>
//       </div>
//     );
//   }
// }

// class WelcomeInfo extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>欢迎您，{this.props.username}</h1>
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   // 类型
//   static components = {
//     login: LoginBtnGroup,
//     welcome: WelcomeInfo,
//   };

//   render() {
//     const HeaderUser = Header.components[this.props.type];

//     return <HeaderUser {...this.props} />;
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header type={"welcome"} username="ArcticRug25" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

/**
 * JSX的props
 *
 * JSX 大括号 {} 里面可以传入任何JavaScript表达式 (if, for, switch, function)
 * 非表达式 可以在JSX外面使用
 */

// function MyTitle(props) {
//   const { title, author } = props;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{author}</p>
//     </div>
//   );
// }

// class App extends React.Component {
//   state = {
//     mainTitle: "This is a MAIN_TITLE",
//     subTitle: "This is a SUB_TITLE",
//     titleShow: "main", // 'sub'
//   };

//   render() {
//     let title = "";

//     if (this.state.titleShow === "sub") {
//       title = <h2>{this.state.subTitle}</h2>;
//     } else {
//       title = <h1>{this.state.mainTitle}</h1>;
//     }

//     return (
//       <div>
//         <MyTitle
//           title={`${this.state.mainTitle} ${this.state.subTitle}`}
//           author="ArcticRug25"
//         />
//         <div>{title}</div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

/**
 * 字符串字面量
 */

// function MyTitle(props) {
//   const { title, author } = props;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{author}</p>
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyTitle title="这是一个标题" author="小野" />
//         <MyTitle title={"这是一个标题"} author={"小野"} />
//         <MyTitle title="这是一个<标题>" author={"&lt;小野&gt;"} />
//         {/* 字符串字面量传入props的方式不会对HTML实体转义 */}
//         <MyTitle title="这是一个&lt;标题&gt;" author={"<小野>"} />
//         {/* 语义：字符串传入的意义就是字符串的意思，不代表Bool真假 */}
//         {/* 逻辑：字符串true是逻辑真，语义不是真 */}
//         <MyTitle authorShow={ true } />
//         {/* 不赋值属性 -> 默认就是Bool 真 */}
//         {/* 不推荐这么做，语义不好 */}
//         <MyTitle authorShow />
//         {/* a="1" a={ 1 } 语义不同 */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

// function MyTitle(props) {
//   const { title, author, authorShow } = props;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{author}</p>
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     const { a, ...others } = this.props;
//     return <MyTitle {...others} />;
//   }
// }

// ReactDOM.render(
//   <App title="This is a title" author="ArcticRug25" authorShow={true} a="1" />,
//   document.getElementById("app")
// );

// -------------------------------------------------------------

// function MyTitle(props) {
//   const { title, author } = props;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{author}</p>
//       {props.children}
//     </div>
//   );
// }

// class MyList extends React.Component {
//   render() {
//     return (
//       <div className={this.props.listClassName}>
//         <h1>{this.props.title}</h1>
//         <ul className="my-list">{this.props.children}</ul>
//       </div>
//     );
//   }
// }

// class ListItem extends React.Component {
//   render() {
//     return <li>{this.props.children}</li>;
//   }
// }

// class App extends React.Component {
//   /**
//    * JSX 子元素
//    *
//    * 字符串字面量 不转义
//    * 1、去掉首尾空格换行
//    * 2、字符串之间的多个空格压缩为一个空格（&nbsp;）
//    * 3、字符串之间的换行压缩为一个空格（<br/>）
//    */

//   state = {
//     listData: ["This is content 1", "This is content 2", "This is content 3"],
//   };

//   render() {
//     return (
//       <div>
//         {/* <MyTitle>This is a &lt;TITLE&gt;</MyTitle>
//         <MyTitle>{"This is a <TITLE>"}</MyTitle>
//         <MyTitle>This is a TITLE</MyTitle>
//         <MyTitle>This is a TITLE</MyTitle> */}
//         {/* JSX作为JSX子元素 */}
//         <MyList listClassName="my-list-container" title="This is my list">
//           {this.state.listData.map((item, index) => (
//             <ListItem key={index}>Hello, {item}</ListItem>
//           ))}
//         </MyList>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

// class MyList extends React.Component {
//   render() {
//     return (
//       <div className={this.props.listClassName}>
//         <h1>{this.props.title}</h1>
//         <ul className="my-list">{this.props.children}</ul>
//       </div>
//     );
//   }
// }

// // class ListItems extends React.Component {
// //   render() {
// //     return [
// //       <li key="1">This is content 1.</li>,
// //       <li key="2">This is content 2.</li>,
// //       <li key="3">This is content 3.</li>,
// //     ];
// //   }
// // }

// class ListItems extends React.Component {
//   render() {
//     return this.props.listData.map((item, index) => (
//       <li key={index}>{item}</li>
//     ));
//   }
// }

// class App extends React.Component {
//   state = {
//     listData: ["This is content 1", "This is content 2", "This is content 3"],
//   };

//   render() {
//     return (
//       <div>
//         <MyList listClassName="my-list-container" title="This is my list">
//           <ListItems listData={this.state.listData} />
//         </MyList>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

class App extends React.Component {
  state = {
    show: false,
    data: [],
  };
  render() {
    return (
      <div>
        {/* null, undefined, bool 都是可以作为JSX的子元素
                    这些子元素是会被忽略不会渲染的
                */}
        <div>{true}</div>
        <div>{false}</div>
        <div>{undefined}</div>
        <div>{null}</div>
        <div>{this.state.show ? "OK" : "不OK"}</div>
        <div>{this.state.show && "ok"}</div>
        <div>{this.state.data.length ? "有数据" : "无数据"}</div>
        <div>{this.state.data.length && "有数据"}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
