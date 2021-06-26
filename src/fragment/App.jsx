// Fragment -> React 组件 -> Fragment
// document.createDocumentFragment()
// 创建文档碎片
import Table from "./Table";
import StaffList from "./StaffList";

class App extends React.Component {
  render() {
    return <StaffList />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
