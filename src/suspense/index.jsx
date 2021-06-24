// lazy 方法 React内置方法
// Suspense React内置组件，挂载到React

/**
 * lazy是React提供给你的懒（动态）加载组件的方法 React.lazy()
 *   参数一个：函数 -> 动态导入组件 import() (必须支持Promise)
 *   减少打包体积、对初次渲染不适用的组件延迟加载
 *   依赖内置组件Suspense，给lazy加上loading指示器组件的一个容器组件
 */

import Loading from "./loading";

/**
 * lazy 接受一个动态导入组件的函数
 * 改函数返回一个Promise -> ie11以下 polyfill 
 * Promise会resolve一个默认导出的React组件 export default xxx
 * 
 * Suspense目前只和lazy配合实现组件等待加载指示器的功能
 * 
 * 服务端 loadable Components
 */ 

const MainComponent = React.lazy(() => import("./main"));
const Main2Component = React.lazy(() => import("./main2"));

class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <div>
          <MainComponent />
          <Main2Component />
        </div>
      </React.Suspense>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------
