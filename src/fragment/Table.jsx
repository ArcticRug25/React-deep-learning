class Table extends React.Component {
  state = {
    headers: ["Name", "ID", "Age"],
    info: ["ArcticRug", "475367459", "24"],
  };
  render() {
    return (
      <table border="1">
        <caption>Private Information</caption>
        <thead>
          <tr>
            <TableHeaders headers={this.state.headers} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCells info={this.state.info} />
          </tr>
        </tbody>
      </table>
    );
  }
}

class TableHeaders extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.headers.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </React.Fragment>
    );
  }
}

class TableCells extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.info.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </React.Fragment>
    );
  }
}

export default Table;
