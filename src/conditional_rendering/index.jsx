// 条件渲染

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  login = () => {
    const { username, password } = this.state;

    if (!username.length === 0 || password.length === 0) {
      alert("用户名密码不能为空");
      return;
    }

    this.props.login(username, password);
  };

  handelUserNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handelPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>
          用户名：
          <input
            type="text"
            placeholder="用户名"
            onChange={this.handelUserNameChange}
          />
        </p>
        <p>
          密码：
          <input
            type="password"
            placeholder="密码"
            onChange={this.handelPasswordChange}
          />
        </p>
        <p>
          <button onClick={this.login}>登录</button>
        </p>
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>欢迎您，亲爱的用户！</h1>
        <button onClick={this.props.logout}>退出登录</button>
      </div>
    );
  }
}

class Tip extends React.Component {
  render() {
    const { tipShow } = this.props;

    if (!tipShow) {
      //  如果render函数返回null，不会进行任何渲染
      return null;
    }

    return <p>This is a Tip.</p>;
  }
}

class App extends React.Component {
  state = {
    logged: true,
    count: 0,
    tipShow: false,
  };

  login = (username, password) => {
    if (username != 123 || password != 123) {
      alert("用户名密码错误！！");
      return;
    }

    this.setState({
      logged: true,
      tipShow: true,
    });
  };

  logout = () => {
    this.setState({
      logged: false,
      tipShow: false,
    });
  };

  render() {
    const { logged, count, tipShow } = this.state;
    return (
      <div>
        {logged && <span>尊贵的会员</span>}
        {
          // 是一定不会返回p，但是会返回false表达式0
          // 判断表达式一定是bool false，null，undefined的时候不会被渲染
          // 0 NaN 会被渲染出来
          count && <p>会员等级：{count}</p>
        }
        {logged ? (
          <Welcome logout={this.logout} />
        ) : (
          <LoginForm login={this.login} />
        )}
        <Tip tipShow={tipShow} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// -----------------------------------------------------------
