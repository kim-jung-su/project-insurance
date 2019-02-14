import React, { Component } from "react";
import "./PlannerInfo.css";
import Plannertable from "./Plannertable";

var data = [
  {
    id: 1,
    name: "김정수",
    age: "31",
    branch: "서울명동지점",
    career: "2년",
    code: "1076237",
    contract: "200건",
    customers: "100명",
    claim: "2건",
    cancel: "5건",
    phoneNumber: "010 - 4383 - 8890",
    score: 90
  },
  {
    id: 2,
    name: "천혜린",
    age: "26",
    branch: "영등포지점",
    career: "3년",
    code: "1151507",
    contract: "350건",
    customers: "200명",
    claim: "4건",
    cancel: "10건",
    phoneNumber: "010 - 4383 - 8890",
    score: 85
  },
  {
    id: 3,
    name: "한효주",
    age: "33",
    branch: "강남지점",
    career: "4년",
    code: "1272475",
    contract: "600건",
    customers: "400명",
    claim: "6건",
    cancel: "12건",
    phoneNumber: "010 - 4383 - 8890",
    score: 66
  },
  {
    id: 4,
    name: "김민호",
    age: "29",
    branch: "서울강북지점",
    career: "3년",
    code: "1071187",
    contract: "320건",
    customers: "150명",
    claim: "8건",
    cancel: "3건",
    phoneNumber: "010 - 4383 - 8890",
    score: 95
  }
];

class PlannerInfo extends Component {
  render() {
    return (
      <div>
        <Plannertable data={data} />
      </div>
    );
  }
}

export default PlannerInfo;
