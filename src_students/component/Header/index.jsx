import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  state = {
    showAddBox: false,
    gender: true,
  };

  loginBtn = () => {
    this.props.getData();
  };

  addBtn = () => {
    const add = this.state.showAddBox ? false : true;
    this.setState({ showAddBox: add }); // 显示盒子
    this.props.getProvinceData();
  };

  jungleGender = (gender) => {
    return () => {
      this.setState({ gender });
      this.props.setGenderData(gender ? 1 : 0);
    };
  };

  render() {
    const { students, getFormData, weather } = this.props;

    return (
      <div className="header">
        <button onClick={this.loginBtn}>登录</button>
        <input
          className="ipt"
          type="button"
          value={"添加"}
          onClick={this.addBtn}
        />

        <div
          className="box"
          style={{ display: this.state.showAddBox ? "block" : "none" }}
        >
          <div className="box_header">添加信息</div>

          <form>
            <div className="form_list">
              <label>姓名：</label>
              <input
                type="text"
                placeholder="请输入信息"
                onChange={getFormData("name")}
              />
            </div>

            <div className="form_list">
              <label>性别：</label>
              <div className="gender_box">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="gender"
                  checked={this.state.gender}
                  onChange={this.jungleGender(true)}
                />
                男
              </div>
              <div className="gender_box">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="gender"
                  checked={!this.state.gender}
                  onChange={this.jungleGender(false)}
                />
                女
              </div>
            </div>
            <div className="form_list">
              <label>年龄：</label>
              <input
                type="text"
                placeholder="请输入年龄"
                onChange={getFormData("age")}
              />
            </div>
            <div className="form_list">
              <label>组号：</label>
              <input
                type="text"
                placeholder="请输入组号"
                onChange={getFormData("group")}
              />
            </div>
            <div className="form_list">
              <label>期望薪资：</label>
              <input
                type="text"
                placeholder="请输入期望薪资"
                onChange={getFormData("hope_salary")}
              />
            </div>
            <div className="form_list">
              <label>实际薪资：</label>
              <input
                type="text"
                placeholder="请输入实际薪资"
                onChange={getFormData("salary")}
              />
            </div>
            <div className="form_list_foot">
              <label>籍贯：</label>
              <select name="" id="">
                <option value="">--省份--</option>
                {weather ? (
                  weather.map((it) => {
                    return <option value={it}>--{it}--</option>;
                  })
                ) : (
                  <></>
                )}
              </select>
              <select name="" id="">
                <option value="">--城市--</option>
              </select>
              <select name="" id="">
                <option value="">--地区--</option>
              </select>
            </div>
          </form>

          <div className="footer">
            <button>提交</button>
          </div>
        </div>
      </div>
    );
  }
}
