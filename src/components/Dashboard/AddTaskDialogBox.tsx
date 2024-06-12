import React, { useEffect, useState } from "react";
import "../Dashboard/AddTaskDialogBox.css"
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import DisplayData from "./DisplayData";
import { client } from "../..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SetEmployeeEmailId, setEmployeeDeadLine, setEmployeeName, setEmployeeTaskDesc } from "../../slicers/AddEmployeesTaskSlicer";

type addTaskDialogBoxProps = {
    setAddTaskDialogBox: React.Dispatch<React.SetStateAction<Boolean>>;
    // FetchUserData:any
}
const showUsersEmailIdsQuery = gql`
query fetchEmailUsersIds{
  fetchEmailUsersIds {
  name  
  emailId
  }
}
`
const addEmployeesTask = gql`
mutation mt($employeesTaskParameters: createEmployeesTaskInput!){
  createEmployeesTask(employeesTaskParameters: $employeesTaskParameters) {
    name
  }
}
`

function AddTaskkDialogBox({ setAddTaskDialogBox }: addTaskDialogBoxProps) {

    // const { data:FetchUserData, loading, error, refetch, showUsersEmailIdsQuery } = DisplayData();

    const employeeName = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeName)
    const employeeEmailId = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeEmailId)
    const employeeTaskDesc = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeTaskDesc)
    const employeeDeadLine = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeDeadLine)

    const Dispatch = useAppDispatch();

    const [selectedUsers, setSelectedUsers] = useState<any>([]);

    const [userData, setUserData] = useState<any>([]);


    const [addTasks] = useMutation(addEmployeesTask);

    const { data: FetchUserData, loading, error, refetch } = useQuery(showUsersEmailIdsQuery);

    useEffect(() => {
        console.log(FetchUserData)
    }, [FetchUserData])

    if (loading) return <p>Loading...</p>;


    const closeDialogBox = () => {
        setAddTaskDialogBox(false)
    }

    const addSelectedUser = (currentUsers: any) => {
        console.log(selectedUsers);

        if (!selectedUsers.includes(currentUsers)) {

            const usersEmailIds = FetchUserData.fetchEmailUsersIds.find((val: any) => {
                if (val.emailId === currentUsers) {
                    return setSelectedUsers((prevUser: any) => [...prevUser, currentUsers])
                }
            })

            Dispatch(SetEmployeeEmailId(selectedUsers));
            console.log(usersEmailIds)

        }


        // if(currentUsers == usersEmailIds)
        // setSelectedUsers((prevUser:any)=>[...prevUser,currentUsers])
    }

    // useEffect(()=>{
    //     console.log(currentUsers);

    // })

    return (
        <div className="add-task-dialog-box">



            <button className="close-dialog-box-icon" onClick={closeDialogBox}>Close</button>
            <form className="add-task-dialog-box-form">

                <input type="text" placeholder="name" onChange={(e:any) => { Dispatch(setEmployeeName(e.target.value)) }} />

                <input onInput={(e: any) => addSelectedUser(e.target.value)} type="text" name="city" list="cityname" />
                
                <datalist id="cityname">
                    <select>
                        {
                            FetchUserData.fetchEmailUsersIds.map((val: any) => {
                                return <option value={val.emailId}>
                                    {val.name}
                                </option>
                            })
                        }

                    </select>
                </datalist>

                <h3>Selected People</h3>
                {
                    selectedUsers.map((val: any) => {
                        return (
                            <div>
                                <p>{val}</p>
                            </div>
                        )
                    })
                }
                <input type="text" placeholder="taskDesc"  onChange={(e:any) => { Dispatch(setEmployeeTaskDesc(e.target.value)) }}/>
                <input type="text" placeholder="deadLine" onChange={(e:any) => { Dispatch(setEmployeeDeadLine(e.target.value)) }}/>

                <div className="add-button-div">
                    <button onClick={() => addTasks({
                        variables: {
                            employeesTaskParameters: {
                                name:employeeName,
                                emailId:employeeEmailId,
                                taskDesc:employeeTaskDesc,
                                deadLine:employeeDeadLine
                            }
                        }
                    })}
                        className="add-button">Add A New Task</button>
                </div>
            </form>
        </div>
    )
}

export default AddTaskkDialogBox;