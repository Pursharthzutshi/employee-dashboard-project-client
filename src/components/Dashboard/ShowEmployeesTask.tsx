import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "../Dashboard/ShowEmployeesTask.css"
import EditEmployeesTaskDetailsDialogBox from "./EditEmployeesTaskManagerDialogBox";
import { setShowEmployeesDialogBox, setShowEmployeesEditDialogBox } from "../../slicers/ShowEmployeesDialogBoxSlicer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import EditEmployeesTaskManagerDialogBox from "./EditEmployeesTaskManagerDialogBox";
const fetch_employees_task_details_query = gql`
query fetchEmployeesDetails{
 fetchEmployeesTaskDetails{
 uid,
name,
emailId,
taskDesc,
deadLine
 }
}
`
const delete_employees_task_data = gql`
mutation dq($employeeUidParameter: deleteEmployeesTaskInput!){
  deleteEmployeesTask(employeeUidParameter: $employeeUidParameter) {
    emailId
  }
}
`


function ShowEmployeesTask() {

  const [selectedUpdateTaskFieldUid,setSelectedUpdateTaskFieldUid] = useState<string>("");

  const {data:employeesTaskData,loading} = useQuery(fetch_employees_task_details_query)

  const [editDialogBox,setEditDialogBox] = useState<Boolean>(false);

  const [deleteEmployeeTaskData] = useMutation(delete_employees_task_data,
    {
      refetchQueries:[{query:fetch_employees_task_details_query}]

    }
  );

    
  const editdialogBox = useAppSelector((state) => state.ShowEmployeesDialogBoxSlicer.showEmployeesEditDialogBox)

  const Dispatch = useAppDispatch();


  const showEditDialogBox = (val:any)=>{
    Dispatch(setShowEmployeesEditDialogBox(true));
    console.log(val)
    setSelectedUpdateTaskFieldUid(val)
  }

  useEffect(()=>{
    console.log(employeesTaskData)  
  })
  if (loading) return <p>Loading...</p>;

  return (
        <div>
            {
                employeesTaskData.fetchEmployeesTaskDetails.map((val:any)=>{
                  console.log(val)
                    return(
                        <div>
                          <p>{val.uid}</p>
                            <p>{val.name}</p>
                            <p>{val.deadLine}</p>
                            <p className="emailid">{val.emailId}</p>
                            
                            <button onClick={()=>{deleteEmployeeTaskData({
                                variables:{
                                  employeeUidParameter:{
                                        uid:val.uid
                                    }
                                }
                            })}}>Delete</button>
                            
                            <button onClick={()=>showEditDialogBox(val.uid)}>Edit</button>
                            
                            </div>
                    )
                })
            }

            {
              editdialogBox && <EditEmployeesTaskManagerDialogBox  selectedUpdateTaskFieldUid={selectedUpdateTaskFieldUid}/>
            }
        </div>
    )
}

export default ShowEmployeesTask;