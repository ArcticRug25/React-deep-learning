/**
 * HOC 更加关注逻辑与状态的管理，参数组件的逻辑与状态的订阅
 */

// export default class MyInput extends React.Component {
//   componentDidUpdate() {
//       console.log('MyInput');
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.inputValue}</h1>
//         <p>总计：{this.props.b + this.props.c}</p>
//         <input
//           type="text"
//           value={this.props.inputValue}
//           onChange={this.props.valueInput}
//         />
//       </div>
//     );
//   }
// }

// -----------------------------------------------

// 高阶组件接受的参数组件可以是类组件也可以是函数组件

export default function MyInput(props) {
  React.useEffect(() => {
    console.log("我是Input");
  }, [props.inputValue]);
  return (
    <div>
      <h1>{props.inputValue}</h1>
      <p>总计：{props.b + props.c}</p>
      <input type="text" value={props.inputValue} onChange={props.valueInput} />
    </div>
  );
}
