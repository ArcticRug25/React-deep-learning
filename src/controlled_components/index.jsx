// 受控组件： 使用1与2的控制表单输入行为取值的方式的组件

class App extends React.Component {
  // 1. state就是表单的唯一数据源
  state = {
    username: "",
    password: "",
    intro: "",
    gender: "male",
    isStudent: true,
    hobbies: [],
  };

  //   handleUsernameChange(e) {
  //     // 2. 控制表单操作并同步state
  //     // e -> target -> value
  //     this.setState({
  //       username: e.target.value,
  //     });
  //   }

  //   handlePasswordChange(e) {
  //     this.setState({
  //       password: e.target.value,
  //     });
  //   }

  //   handleIntroChange(e) {
  //     this.setState({
  //       intro: e.target.value,
  //     });
  //   }

  handleSubmitClick(e) {
    e.preventDefault();
    const { username, password, intro, gender, isStudent, hobbies } =
      this.state;
    console.log(username, password, intro, gender, isStudent, hobbies);
  }

  handleResetClick(e) {
    e.preventDefault();
    this.setState({
      username: "",
      password: "",
      intro: "",
      gender: "male",
      isStudent: true,
      hobbies: [],
    });
  }

  handleIsStudentChange(isStudent) {
    this.setState({
      isStudent,
    });
  }

  //   handleGenderChange(e) {
  //     this.setState({
  //       gender: e.target.value,
  //     });
  //   }

  handleHobbiesChange(e) {
    console.log(e.target.value);
    if (e.target.checked) {
      this.setState({
        hobbies: [...this.state.hobbies, e.target.value],
      });
    } else {
      this.setState({
        hobbies: this.state.hobbies.filter((item) => item !== e.target.value),
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { username, password, intro, gender, isStudent, hobbies } =
      this.state;

    return (
      <form>
        <p>
          用户名：
          <input
            type="text"
            placeholder="用户名"
            value={username}
            name="username"
            onChange={this.handleChange.bind(this)}
          />
        </p>
        <p>
          密码：
          <input
            type="password"
            placeholder="密码"
            value={password}
            name="password"
            onChange={this.handleChange.bind(this)}
          />
        </p>
        <p>
          密码：
          <textarea
            type="password"
            placeholder="自我介绍"
            value={intro}
            name="intro"
            onChange={this.handleChange.bind(this)}
          />
        </p>
        <p>
          <select
            name="gender"
            value={gender}
            onChange={this.handleChange.bind(this)}
          >
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </p>
        <p>
          <button onClick={this.handleSubmitClick.bind(this)}>登录</button>
          <button onClick={this.handleResetClick.bind(this)}>重置</button>
        </p>
        <p>
          是否是学生： 是
          <input
            type="radio"
            name="isStudent"
            checked={isStudent}
            onChange={this.handleIsStudentChange.bind(this, true)}
          />{" "}
          | 否
          <input
            type="radio"
            name="isStudent"
            onChange={this.handleIsStudentChange.bind(this, false)}
          />
        </p>
        <p>
          钢琴：
          <input
            type="checkbox"
            name="hobbies"
            value="piano"
            checked={hobbies.includes('piano')}
            onChange={this.handleHobbiesChange.bind(this)}
          />
          旅行：
          <input
            type="checkbox"
            name="hobbies"
            value="travel"
            checked={hobbies.includes('travel')}
            onChange={this.handleHobbiesChange.bind(this)}
          />
          跑步：
          <input
            type="checkbox"
            name="hobbies"
            value="running"
            checked={hobbies.includes('running')}
            onChange={this.handleHobbiesChange.bind(this)}
          />
          唱歌：
          <input
            type="checkbox"
            name="hobbies"
            value="singing"
            checked={hobbies.includes('singing')}
            onChange={this.handleHobbiesChange.bind(this)}
          />
        </p>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
// https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
