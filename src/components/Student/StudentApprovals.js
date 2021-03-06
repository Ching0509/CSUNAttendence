import React, { Component } from "react";
import {Table} from 'reactstrap';

export class StudentApprovals extends Component {
  state = {
    studentId: null,
  };
  render() {
    //Make a lambda Call that passes userID;
    let thisUserInformation = {
      studentId: "1",
      firstName: "Jace",
      lastName: "Keith",
      courses: [
        {
          courseId: "16884",
          department: "COMP",
          classNumber: "310",
          classSection: "03",
          className: "Auto Lang + Computin",
        },
        {
          courseId: "16332",
          department: "COMP",
          classNumber: "424",
          classSection: "01",
          className: "Comp System Secrty",
        },
        {
          courseId: "16756",
          department: "COMP",
          classNumber: "440",
          classSection: "01",
          className: "Database Design",
        },
        {
          courseId: "16983",
          department: "COMP",
          classNumber: "482",
          classSection: "02",
          className: "Algorithm Design",
        },
        {
          courseId: "20896",
          department: "COMP",
          classNumber: "491L",
          classSection: "08",
          className: "Sr Project Lab",
        },
        {
          courseId: "17137",
          department: "COMP",
          classNumber: "542",
          classSection: "01",
          className: "Machine Learning",
        },
      ],
      approvals: [
        {
          approvalId: "1",
          date: "01/27/2021",
          courseId: "20896",
          status: "Approved",
        },
      ],
      attendences: [
        {
          date: "01/25/2021",
          courses: [
            {
              courseId: "16983",
              checkedIn: "05:01:20",
              anteMeridiem: "PM",
              status: "Late",
            },
            {
              courseId: "20896",
              checkedIn: "08:29:49",
              anteMeridiem: "PM",
              status: "Present",
            },
          ],
        },
        {
          date: "01/26/2021",
          courses: [
            {
              courseId: "16884",
              checkedIn: "10:59:12",
              anteMeridiem: "AM",
              status: "Present",
            },
            {
              courseId: "17137",
              checkedIn: "06:49:29",
              anteMeridiem: "PM",
              status: "Present",
            },
          ],
        },
        {
          date: "01/27/2021",
          courses: [
            {
              courseId: "16983",
              checkedIn: "null",
              anteMeridiem: "null",
              status: "Absent",
            },
            {
              courseId: "20896",
              checkedIn: "null",
              anteMeridiem: "null",
              status: "Excused",
            },
          ],
        },
      ],
    };
    //User Full Name
    let userFullName =
      thisUserInformation.firstName + " " + thisUserInformation.lastName;
    //Get All Approvals
    let allApprovals = thisUserInformation.approvals.map(approval => 
        <tr key={approval.approvalId}>
            <td>{userFullName}</td>
            <td>{approval.date}</td>
            <td>{approval.courseId}</td>
            <td>{approval.status}</td>
        </tr>
    );
    return (
      <div>
        <h1>Image Goes Here</h1>
        <h3>Approvals</h3>
        <Table dark responsive striped bordered hover>
          <thead>
            <tr>
              <th> Full Name </th>
              <th> Date </th>
              <th> Course Id </th>
              <th> Status </th>
            </tr>
          </thead>
          <tbody>
            {allApprovals}
          </tbody>
        </Table>
        <h1>{userFullName}</h1>
        <h3>{this.state.userId}</h3>
      </div>
    );
  }
}

export default StudentApprovals;
