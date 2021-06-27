// JSX 函数子元素
/**
 * JSX的props.children跟props本身是有一致的特性
 * props.children就可以传递任何类型的子元素
 */

// class Repeat extends React.Component {
//   render() {
//     const jsxArr = [];

//     for (var i = 0; i < this.props.num; i++) {
//       jsxArr.push(this.props.children(i));
//     }

//     return jsxArr;
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Repeat num={10}>
//           {(index) => <p key={index}>This is item {index + 1}.</p>}
//         </Repeat>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------------------------------------------

  class App extends React.Component {
    render() {
      return (
        <div>
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));
  
