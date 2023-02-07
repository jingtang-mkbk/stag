import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { isMouseEnter: false };

  changeColor = (flag) => {
    return () => {
      flag
        ? this.setState({ isMouseEnter: true })
        : this.setState({ isMouseEnter: false });
    };
  };

  delBtn = (id) => {
    this.props.delData(id);
    this.props.getData();
  };

  render() {
    const { students } = this.props;

    return (
      <tr
        style={{
          backgroundColor: this.state.isMouseEnter ? "#ddd" : "white",
        }}
        onMouseEnter={this.changeColor(true)}
        onMouseLeave={this.changeColor(false)}
      >
        <td>{students.name}</td>
        <td>{students.age}</td>
        <td>{students.gender === 1 ? "男" : "女"}</td>
        <td>第{students.group}组</td>
        <td>{students.hope_salary}</td>
        <td>{students.salary}</td>
        <td>{students.province + students.city + students.area}</td>
        <td>
          <button style={{ marginRight: "10px" }}>改</button>
          <button onClick={() => this.delBtn(students.id)}>删</button>
        </td>
      </tr>
    );
  }
}
