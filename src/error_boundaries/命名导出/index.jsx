import Loading from "./loading";

const Test1 = React.lazy(() => import("./Test1"));
const Test2 = React.lazy(() => import("./Test2"));
const Com = React.lazy(() => import("./Component"));
console.log(Com);

class App extends React.Component {
  render() {
    return (
      <div>
        <React.Suspense fallback={<Loading />}>
          <Test1 />
          <Test2 />
        </React.Suspense>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
