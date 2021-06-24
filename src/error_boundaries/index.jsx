// 错误边界 -> React 16 增加

/**
 * 防止某个组件的UI渲染错误导致整个应用崩溃
 * 子组件发生JS的错误，有备用的渲染UI
 * 错误边界 -> 组件 -> 只能用class组件来写
 */

/**
 * 错误边界组件捕获错误的时机：
 *      渲染时、生命周期函数中、组件树的构造函数中
 * 
 * 如果多个嵌套错误边界组件 --> 则从最里层错误触发，向上冒泡触发捕获
 */ 

// 在开发环境下，错误会冒泡至 window，这意味着任何 window.onerror 或者 window.addEventListener('error', callback) 会中断
// 这些已经被 componentDidCatch() 捕获的错误

/**
 * static getDerivedStateFromError(error)
 * 参数：子组件抛出的错误
 * 返回值就是新的state
 * 获取捕获错误 修改错误状态
 * 作用：渲染备用的UI
 * 渲染阶段调用，不允许出现副作用 （setTimeout等）
 *
 * 无法捕获的场景：
 *     事件处理函数
 *     异步代码 setTimeout ajax
 *     服务端渲染
 *     错误边界内部有错误
 */

/**
 * componentDidCatch (error, info) -> 原型上的方法
 * 边界错误组件捕获异常，并运行后续处理
 * 作用：错误信息捕获，运行副作用
 * 在组件抛出错误后调用
 * 
 * 参数：
 *      error: 抛出的错误
 *      info: 组件引发错误的相关信息 组件栈
 */ 

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>This is Error UI</h1>;
    }
    return this.props.children;
  }
}

class Test extends React.Component {
  render() {
    return <div>{data.title}</div>;
  }
}

class Sub extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      throw new Error("This is a setTimeout");
    }, 1000);
  }

  handleClick() {
    console.log(123);
    throw new Error("This is a btnClick error");
  }

  render() {
    return (
      <div>
        <p onClick={this.handleClick.bind(this)}>This is content</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Sub />
        <ErrorBoundary>
          <Text />
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------
