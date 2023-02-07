import React, { Component } from "react";
import "./index.css";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { students, delData, getData } = this.props;
    // console.log(students);

    return (
      <table className="center">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>组号</th>
            <th>期望薪资</th>
            <th>就业薪资</th>
            <th>籍贯</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {/* <Item students={students} /> */}

          {students.map((it) => {
            return (
              <Item
                students={it}
                key={it.id}
                delData={delData}
                getData={getData}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
