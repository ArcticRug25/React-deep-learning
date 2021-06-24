import Loading from "./loading";
import ErrorBoundary from "./ErrorBoundary";

const TestComponent = React.lazy(() => import("./test"));

class App extends React.Component {
  render() {
    return (
      <div>
        <div>123</div>
        <ErrorBoundary>
          <React.Suspense fallback={<Loading />}>
            <TestComponent />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
