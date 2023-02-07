import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";

export default class App extends Component {
  state = {
    students: [
      {
        name: "张三",
        age: 20,
        group: 3,
        hope_salary: 80000,
        salary: 3000,
        province: "湖北省",
        city: "武汉市",
        area: "江汉区",
        id: 889,
      },
      {
        name: "李四",
        age: 18,
        group: 6,
        hope_salary: 60000,
        salary: 5000,
        province: "湖南省",
        city: "长沙市",
        area: "xx区",
        id: 566,
      },
    ],
  };
  // cosnt [students,setStudents]=useState({})

  // 获取接口数据
  getData = async () => {
    axios.interceptors.request.use(
      function (config) {
        // console.log(config);
        config.headers.Authorization = localStorage.getItem("token");
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        window.tip("我错了");
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    const { data: res } = await axios({
      url: "http://ajax-api.itheima.net/students",
      method: "GET",
    });
    const { data } = res;
    this.setState({ students: data });
  };

  // 删除接口数据
  delData = async (id) => {
    await axios({
      url: "http://ajax-api.itheima.net/students/" + id,
      method: "DELETE",
    });
  };

  // 获取表单输入的数据
  getFormData = (a) => {
    return (e) => {
      this.setState({ [a]: e.target.value });
    };
  };
  setGenderData = (gender) => {
    this.setState({ gender });
  };

  //获取接口省份数据
  getProvinceData = async () => {
    const { data: res } = await axios({
      method: "get",
      url: "http://ajax-api.itheima.net/api/province",
    });
    const { data } = res;
    this.setState({ weather: data });
  };

  render() {
    const { students, weather } = this.state;
    return (
      <div>
        <Header
          getData={this.getData}
          students={students}
          getFormData={this.getFormData}
          setGenderData={this.setGenderData}
          getProvinceData={this.getProvinceData}
          weather={weather}
        />
        <List
          students={this.state.students}
          delData={this.delData}
          getData={this.getData}
        />
      </div>
    );
  }
}
