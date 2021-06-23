// 组合 继承

// 包含组合
// children

// CSS 模块化
import style from "./index.module.css";

/**
 * 1.如果Container内有有内容，React会再props内部增加children属性
 * 2.如果Container内部有非元素内容，children：非元素内容
 * 3.如果Container内部有单个元素内容，children：React元素对象
 * 4.如果Container内部有多个内部元素，children：[...(React元素对象)]
 *
 */
// class Container extends React.Component {
//   render() {
//     return <div className="container">{this.props.children}</div>;
//   }
// }

// class App extends React.Component {
//   render() {
//     return <Container>123</Container>;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------

/**
 * 为什么JSX还可以通过props传递视图元素 React元素？
 * JSX本质上都会转成React元素（对象 Object）
 * 视图通过props传递的机制比较像vue的插槽
 * React元素并没有slot的概念定义
 * React本身就允许你通过Prop传递任何类型的数据到子组件
 */

// class Container extends React.Component {
//   render() {
//     return (
//       <div className={style.container}>
//         <div className={style.header}>{this.props.header}</div>
//         <div className={style.sidebar}>{this.props.sidebar}</div>
//         <div className={style.main}>{this.props.main}</div>
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return <p>HEADER</p>;
//   }
// }

// class Sidebar extends React.Component {
//   render() {
//     return <p>SIDEBAR</p>;
//   }
// }

// class Main extends React.Component {
//   render() {
//     return <p>MAIN</p>;
//   }
// }

// class App extends React.Component {
//   render() {
//     return <Container header={<Header/>} sidebar={<Sidebar/>} main={<Main/>} />;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------

// function Modal(props) {
//   return (
//     <div className={style.modal}>
//       <header className={style.modalHeader}>
//         <h1>{props.headerTitle}</h1>
//       </header>
//       <div className={style.modalContent}>{props.children}</div>
//     </div>
//   );
// }

// function Alert(props) {
//   return (
//     <Modal headerTitle={props.headerTitle}>
//       <p>{props.alertText}</p>
//     </Modal>
//   );
// }

// function WelcomeAlert() {
//   return (
//     <Alert
//       headerTitle="欢迎您，亲爱的用户"
//       alertText="您是我们最尊贵的用户，将会体验到不一样的服务"
//     />
//   );
// }

// function App() {
//   return <WelcomeAlert />;
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------

/**
 * React目前还没有发现有需要组件继承的需求
 * 
 * 因为通过children或者是传递视图React元素的方式完全可以解决组件组合的问题
 * props可以传递任何类型的数据，所以组合的方式完全可以替代继承方案
 * 
 * 逻辑部分需要继承或者共用，
 * 这个需要你自己去写逻辑抽离的模块、函数、类，单独进行模块导入使用
 */ 