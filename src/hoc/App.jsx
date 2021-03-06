/**
 * Student List
 *
 * {
 *   id, name, grade
 * }
 *
 * Teacher List
 *
 * {
 *   id, name, subject, like
 * }
 */

// import { fetchListData } from "./model";

// import StudentList from "./components/StudentList";
// import TeacherList from "./components/TeacherList";

// class App extends React.Component {
//   state = {
//     studentList: [],
//     teacherList: [],
//   };

//   removeStudent(id) {
//     this.setState({
//       studentList: this.state.studentList.filter((item) => item.id !== id),
//     });
//   }

//   likeTeacher(id) {
//     this.setState({
//       teacherList: this.state.teacherList.map((item) => {
//         if (item.id === id) {
//           item.like += 1;
//         }

//         return item;
//       }),
//     });
//   }

//   async componentDidMount() {
//     const studentData = await fetchListData("student");
//     const teacherData = await fetchListData("teacher");

//     this.setState({
//       studentList: studentData.data,
//       teacherList: teacherData.data,
//     });
//   }

//   render() {
//     return (
//       <div className="app">
//         <StudentList
//           data={this.state.studentList}
//           removeStudent={this.removeStudent.bind(this)}
//         />
//         <TeacherList
//           data={this.state.teacherList}
//           likeTeacher={this.likeTeacher.bind(this)}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// ----------------------------------------------------------

// import { fetchListData } from "./model";
// import listHoc from "./components/listHoc";

// import StudentList from "./components/StudentList";
// import TeacherList from "./components/TeacherList";

// const StudentListHoc = listHoc(StudentList, fetchListData);
// const TeacherListHoc = listHoc(TeacherList, fetchListData);

// class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <StudentListHoc field={"student"} />
//         <TeacherListHoc field={"teacher"} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

/**
 * ??????????????? -> mixins
 *
 * ????????????????????????????????????????????????????????????
 * ???HOC?????????????????????????????????
 * ????????????????????????????????????
 *
 * ???HOC??????????????????????????????????????????
 * ???????????????????????????????????????????????????
 */

// ----------------------------------------------------------

import MyInput from "./components/MyInput";

import InputHoc from "./components/InputHoc";

const MyInputHoc = InputHoc(MyInput);

class App extends React.Component {
  state = {
    a: 1,
    b: 2,
    c: 3,
  };

  render() {
    return (
      <>
        <MyInputHoc {...this.state} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
