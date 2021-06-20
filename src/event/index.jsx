// React 事件处理

// DOM事件处理 addEventListener onclick = function () {}
// <button onclick="doSth"></button> DOM0 纯小写

// React元素也采用了类似于DOM0标准中的时间属性定义的方法
// JSX <button onClick={ this.doSth }>click</button> 小驼峰

// 直接创建React元素方法
/**
 * React.creatElement(
 *    'button',
 *    {
 *      onClick: { this.doSth }
 *    },
 *    'click'
 * )
 */

// class App extends React.Component {
//   doSth() {
//     console.log("click");
//   }

//   doSth2(e) {
//     // React的事件对象
//     /**
//      * SyntheticBaseEvent 合成基础事件对象 React重新定义的
//      * 这个SBE是遵守W3C事件对象的规范的，不存在任何的浏览器兼容性问题
//      *
//      */
//     // e.preventDefault();
//     console.log("click2");
//   }

//   /**
//    * 为什么React要将事件处理直接在React元素上绑定？
//    * React一直认为事件处理跟视图是有程序上的直接关系的
//    * 事件处理和视图写在一起可以更加直观的表述视图与逻辑的关系
//    * 更加好维护
//    */

//   render() {
//     return (
//       <div>
//         <button onClick={this.doSth}>click</button>
//         <a href="#" onClick={this.doSth2}>
//           click
//         </a>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------

// // this 指向
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.doSth = this.doSth.bind(this);
//   }

//   doSth() {
//     /**
//      * 默认处理函数的this为undefined
//      * ES6 class模块默认是不对事件处理函数进行this的再绑定的
//      */
//     console.log(this);

//     /**
//      * 解决this指向的方法
//      * 1、bind（this）=> 构造器
//      * 2、bind（this）=> 视图标记中
//      * 3、回调 + 箭头函数
//      *    render函数每次执行的时候 -> 新的回调
//      *
//      *    给子组件的属性进行传递函数的时候，
//      *    每次都要新创建一个回调
//      *    子组件每次都会接受一个新的函数
//      *    触发子组件的render
//      */
//   }

//   // 实验性写法 class fields
//   doSth = () => {
//     console.log(this);
//   };

//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.doSth.bind(this)}>click</button> */}
//         {/* <button onClick={() => this.doSth()}>click</button> */}
//         <button onClick={this.doSth}>click</button>
//         {/* <Title fn={() => this.doSth()} /> */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// // 总结 推荐 class fields 或者 bind写法

// -----------------------------------------------------------

class App extends React.Component {
  // 事件对象都是在最后一个参数
  // 回调 显示传入事件对象
  doSth(p1, p2, p3, e) {
    console.log(p1, p2, p3, e);
  }

  // bind 是隐式传入事件对象
  doSth2(p1, p2, p3, e) {
    console.log(p1, p2, p3, e);
  }

  render() {
    return (
      <div>
        {/* 是一致的 */}
        <button onClick={(e) => this.doSth(1, 2, 3, e)}>click1</button>
        <button onClick={this.doSth2.bind(this, 1, 2, 3)}>click1</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
