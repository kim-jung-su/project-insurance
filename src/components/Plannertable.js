import React, { Component } from "react";
import MaterialTable from "material-table";

class Plannertable extends Component {
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
            { title: "성명", field: "name" },
            { title: "나이", field: "age" },
            { title: "소속", field: "branch" },
            { title: "경력", field: "career" },
            { title: "고객수", field: "customers", type: "date" },
            { title: "계약건수", field: "contract" },
            { title: "민원건수", field: "claim" },
            { title: "해지건수", field: "cancel" },
            { title: "평가점수", field: "Score",
              render: rowData => {
                  const score = rowData.score + '%'
                  const color = rowData.score > 70 ? '#4CAF50' : '#f44336'
                  return (
                    <div style={{ width: '100%', backgroundColor: '#ddd', height: 20 }}>
                    <div
                      style={{
                        textAlign: 'left',
                        padding: 1,
                        color: 'white',
                        width: score,
                        backgroundColor: color,
                        height: 20,
                      }}
                    >
                      {score}
                    </div>
                  </div>                        
                  )
              }}
          ]}
          style={{ textAlign: "center" }}
          title="설계사 정보"
          detailPanel={[
            {
              tooltip: "planner value",
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      color: "black"
                    }}
                  >
                    <p>설계사 코드 : {rowData.code}</p>
                    <p>설계사 핸드폰 : {rowData.phoneNumber}</p>
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

export default Plannertable;
