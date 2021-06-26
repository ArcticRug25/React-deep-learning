/**
 * React.createContext
 *
 * 创建一个指定的Context对象
 * 组件会找离自己最近的Provider，获取其value
 *
 * 没有匹配到Provider就使用默认值
 *
 * Context.Provider
 * 通过React.createContext -> 上下文对象里的一个组件
 * 组件可以插入其他组件 -> 订阅这个Context
 * 通过Provider的value属性来将数据传递给Consumer组件
 *
 * value变化，插入Provider的组件都会重新渲染
 * 
 * new and old value -> 相比较 -> Object.js相同的算法
 */

/**
 * Consumer -> 使用 -> Provider -> value
 * 订阅context的变更
 * Consumer内部使用函数作为子元素 -> function as a child
 * 函数接收context最近的Provider提供的value
 * 如果没有Provider -> default value
 */ 
const AContext = React.createContext("default a");
const BContext = React.createContext("default b");
AContext.displayName = "MyAContext";
BContext.displayName = "MyBContext";

class App extends React.Component {
  state = {
    a: "a context",
    b: "b context",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: "aa context",
      });
    }, 1000);
  }

  render() {
    return (
      <BContext.Provider value={this.state.b}>
        <AContext.Provider value={this.state.a}>
          <Text />
        </AContext.Provider>
      </BContext.Provider>
      //   <Text />
    );
  }
}

class Text extends React.Component {
  // shouldComponentUpdate(){
  //     console.log('Will repain!!!');
  // }

  render() {
    return (
      <>
        <BContext.Consumer>
          {(valueB) => (
            <AContext.Consumer>
              {(valueA) => {
                return <div>{valueA + "," + valueB}</div>;
              }}
            </AContext.Consumer>
          )}
        </BContext.Consumer>
        <BContext.Consumer>
          {(valueB) => (
            <AContext.Consumer>
              {(valueA) => {
                return <div>{valueA + "," + valueB}</div>;
              }}
            </AContext.Consumer>
          )}
        </BContext.Consumer>
        <BContext.Consumer>
          {(valueB) => (
            <AContext.Consumer>
              {(valueA) => {
                return <div>{valueA + "," + valueB}</div>;
              }}
            </AContext.Consumer>
          )}
        </BContext.Consumer>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
