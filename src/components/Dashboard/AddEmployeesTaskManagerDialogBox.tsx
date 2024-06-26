import React, { useEffect, useState } from "react";
import "../Dashboard/AddTaskDialogBox.css"
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import DisplayData from "./DisplayData";
import { client } from "../..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SetEmployeeEmailId, setEmployeeDeadLine, setEmployeeName, setEmployeeTaskDesc } from "../../slicers/AddEmployeesTaskSlicer";
import { v4 as uuidv4 } from 'uuid';
import AddTaskDialogBoxForm from "./EmployeesTaskManagerDialogBoxForm";
import EmployeesTaskManagerDialogBoxForm from "./EmployeesTaskManagerDialogBoxForm";


type addTaskDialogBoxProps = {
    setAddTaskDialogBox: React.Dispatch<React.SetStateAction<Boolean>>;
    // FetchUserData:any
}
const addEmployeesTask = gql`
mutation mt($employeesTaskParameters: createEmployeesTaskInput!){
  createEmployeesTask(employeesTaskParameters: $employeesTaskParameters) {
    name
  }
}
`

function AddEmployeesTaskManagerDialogBox() {

    // const { data:FetchUserData, loading, error, refetch, showUsersEmailIdsQuery } = DisplayData();

    const employeeName = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeName)
    const employeeEmailId = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeEmailId)
    const employeeTaskDesc = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeTaskDesc)
    const employeeDeadLine = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeDeadLine)

    const Dispatch = useAppDispatch();


    const [addTasks] = useMutation(addEmployeesTask);

    return (
        <div className="add-task-dialog-box">

            <form className="add-task-dialog-box-form">

                <EmployeesTaskManagerDialogBoxForm />


                <div className="add-button-div">
                    <button onClick={() => addTasks({
                        variables: {
                            employeesTaskParameters: {
                                uid: uuidv4(),
                                name: employeeName,
                                emailId: employeeEmailId,
                                taskDesc: employeeTaskDesc,
                                deadLine: employeeDeadLine
                            }
                        }
                    })}
                        className="add-button">Add A New Task</button>
                </div>
            </form>
        </div>
    )
}

export default AddEmployeesTaskManagerDialogBox;