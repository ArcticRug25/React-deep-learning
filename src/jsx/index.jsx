// JSX

// const rEl = <h1>This is my first JSX experience.</h1>;

/**
 * JSX到底是什么？
 * 1. 一种标签语法、JS进行的语法扩展
 * 2. 不是字符串、不是HTML标签
 * 3. 描述UI呈现与交互的直观的形式
 * 4. 生成React元素
 */

/**
 * createElement 与 JSX 对比
 */

// const rEl = React.createElement(
//   "h1",
//   {
//     className: "title",
//   },
//   "This is my first JSX experience."
// );

// const rEl = <h1>This is my first JSX experience.</h1>;

// ReactDOM.render(rEl, document.getElementById("app"));

// -----------------------------------------------------------

// class MyButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       openStatus: false,
//     };
//   }

//   statusChange() {
//     this.setState({
//       openStatus: !this.state.openStatus,
//     });
//   }

//   render() {
//     // JSX 遵循JS的命名规范，一般使用camelCase小驼峰
//     return (
//       <div className="wrapper">
//         <p className="text">
//           {/* 插值表达式 */ this.state.openStatus ? "打开状态" : "关闭状态"}
//         </p>
//         {/* 在类组件当中绑定事件的this默认指向所绑定元素，大多数情况需要改变this指向 */}
//         <button onClick={this.statusChange.bind(this)}>
//           {this.state.openStatus ? "关闭" : "打开"}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(React.createElement(MyButton), document.getElementById("app"));

// -----------------------------------------------------------

/**
 * 为什么React不把视图标记和逻辑分开呢？
 * 1. 渲染和UI标记是有逻辑耦合的
 * 2. 即使是这样的耦合，也能实现关注点分离
 */

/**
 * JSX插值表达式
 *
 * 表达式：一切有效的（符合JS编程逻辑的）表达式 { title }
 * JSX被编译以后 -> React元素 -> 普通的对象
 */

// const rEl = <h1 className="title">This is a title part.</h1>;

// const rEl2 = React.createElement(
//   "h1",
//   {
//     className: "title",
//   },
//   "This is a title part."
// );

// // rEl 编译 -> rEl2
// console.log(rEl, rEl2);

// -----------------------------------------------------------

// var mark = 'title'

// function selectText(mark){
//     switch(mark){
//         case 'title':
//             return 'This is a title';
//         default:
//             return 'This is a paragraph';
//     }
// }

// function getText(mark){
//     if(mark === 'title'){
//         return <h1 className={ mark }>
//             { selectText(mark) }
//         </h1>
//     }

//     return <p>{ selectText(mark) }</p>
// }

// console.log(getText('p'));

// -----------------------------------------------------------

// var arr = [
//   {
//     id: 1,
//     name: "张三",
//   },
//   {
//     id: 2,
//     name: "李四",
//   },
//   {
//     id: 3,
//     name: "王五",
//   },
// ];

// function setList() {
//   return (
//     <ul>
//       {arr.map((item) => {
//         return (
//           <li key={item.id}>
//             <span>{item.id}</span>
//             <p>{item.name}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// console.log(setList());

// const rEl = setList();

// ReactDOM.render(rEl, document.getElementById("app"));

// -----------------------------------------------------------

// 单标签必须要闭合
// const rEl = <img src="" />

// render 之前
// 所有的JSX都会转成字符串
// 所有的输入的内容都会进行转义
