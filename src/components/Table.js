import React, { Component } from "react";
import MaterialTable from "material-table";

class Table extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%", textAlign: "center" }}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <MaterialTable
          data={this.props.data}
          style={{ textAlign: "center" }}
          columns={[
            { title: "구분", field: "id" },
            { title: "고객명", field: "name" },
            { title: "나이", field: "age" },
            { title: "보험명", field: "productname" },
            { title: "보장기간", field: "Insuranceperiod" },
            { title: "계약일자", field: "contractdate", type: "date" },
            { title: "보험료", field: "premium" },
            { title: "납입기간", field: "Paymentperiod" }
          ]}
          title="보험계약현황"
          detailPanel={[
            {
              tooltip: "hash value",
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      color: "black"
                    }}
                  >
                    <p>해시 값 : {rowData.hash}</p>
                  </div>
                );
              }
            },
            {
              icon: "account_circle",
              tooltip: "PlannerInfo",
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      color: "white",
                      backgroundColor: "gray"
                    }}
                  >
                    <p>설계사 : {rowData.PlannerName}</p>
                    <p>소속 : {rowData.branch}</p>
                    <p>핸드폰 : {rowData.phoneNumber}</p>
                  </div>
                );
              }
            }
          ]}
          options={{
            selection: true
          }}
        />
      </div>
    );
  }
}

export default Table;
