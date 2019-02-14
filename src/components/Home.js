import React, { Component } from "react";
import "./Home.css";
import Table from "./Table";

var data = [
  {
    id: 1,
    name: "김유준",
    age: "31",
    productname: "무)KB가족사랑건강+종신보험II(2종)",
    Insuranceperiod: "2040/12/31",
    hash: "as4df8a1f2da3sdfad1815fasf1da511asdf1115f833as",
    contractdate: "19/1/5",
    premium: "197,000원",
    Paymentperiod: "20년",
    PlannerName: "김정수",
    branch: "명동지점",
    phoneNumber: "010 - 4383 - 8890"
  },
  {
    id: 2,
    name: "권태희",
    age: "25",
    productname: "무)KB참쉬운변액연금보험",
    Insuranceperiod: "2060/12/31",
    hash: "fa1sd6fa1sfd5a3df1a8s6df1a3sdfasdfa51a84512q4vv",
    contractdate: "11/3/7",
    premium: "77,000원",
    Paymentperiod: "20년",
    PlannerName: "김정수",
    branch: "명동지점",
    phoneNumber: "010 - 4383 - 8890"
  },
  {
    id: 3,
    name: "김정수",
    age: "30",
    productname: "무)KB국민wise상해보험II",
    Insuranceperiod: "9999/12/31",
    hash: "qr1tq51ga5fds5v1z1g21d5fgaert5w1rg8wr49h2j1u6k8",
    contractdate: "15/2/15",
    premium: "107,000원",
    Paymentperiod: "20년",
    PlannerName: "김정수",
    branch: "명동지점",
    phoneNumber: "010 - 4383 - 8890"
  },
  {
    id: 4,
    name: "김은정",
    age: "29",
    productname: "무)KB국민라이프케어생활비지급암보험II(갱신형)",
    Insuranceperiod: "2060/12/31",
    hash: "q51t8rg1zd1cb3m1i84mi51m6fgh4nfxg1bxdf1b3er15g5",
    contractdate: "17/6/18",
    premium: "200,000원",
    Paymentperiod: "20년",
    PlannerName: "김정수",
    branch: "명동지점",
    phoneNumber: "010 - 4383 - 8890"
  },
  {
    id: 5,
    name: "강지은",
    age: "26",
    productname: "무)KB국민라이프케어생활비지급암보험II(갱신형)",
    Insuranceperiod: "2060/12/31",
    hash: "q51t8rg1zd1cb3m1i84mi51m6fgh4nfxg1bxdf1b3er15g5",
    contractdate: "17/6/18",
    premium: "200,000원",
    Paymentperiod: "20년",
    PlannerName: "김정수",
    branch: "명동지점",
    phoneNumber: "010 - 4383 - 8890"
  },
  {
    id: 6,
    name: "홍성학",
    age: "34",
    productname: "무)KB국민라이프케어생활비지급암보험II(갱신형)",
    Insuranceperiod: "2060/12/31",
    hash: "q51t8rg1zd1cb3m1i84mi51m6fgh4nfxg1bxdf1b3er15g5",
    contractdate: "17/6/18",
    premium: "200,000원",
    Paymentperiod: "20년",
    PlannerName: "김정수",
    branch: "명동지점",
    phoneNumber: "010 - 4383 - 8890"
  },
  {
    id: 7,
    name: "구덕회",
    age: "34",
    productname: "무)KB국민라이프케어생활비지급암보험II(갱신형)",
    Insuranceperiod: "2060/12/31",
    hash: "q51t8rg1zd1cb3m1i84mi51m6fgh4nfxg1bxdf1b3er15g5",
    contractdate: "17/6/18",
    premium: "200,000원",
    Paymentperiod: "20년",
    PlannerName: "김정수",
    branch: "명동지점",
    phoneNumber: "010 - 4383 - 8890"
  }
];

class Home extends Component {
  render() {
    return (
      <div>
        <Table data={data} />
      </div>
    );
  }
}

export default Home;
