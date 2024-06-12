import React, { useEffect, useState } from "react";
import "../Register/Login.css"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setUserLoggedInEmailId, setUserLoggedInEmailPassword } from "../../slicers/LoginSlicer";
import { gql, useMutation } from "@apollo/client";

const checkUserLoggedInAuthQuery = gql`
mutation userLogin($userLoginParameters: createLoginInput!){
  createUserLogin(userLoginParameters: $userLoginParameters) {
    emailId
    password
  }
}
`

function Login() {
    
    const userLoggedinEmailId = useAppSelector((state)=>state.LoginSlicer.userLoggedinEmailId)
    const userLoggedInEmailPassword = useAppSelector((state)=>state.LoginSlicer.userLoggedinPassword)

    const dispatch = useAppDispatch()
    // const [] = useState("");

    const [checkUserLoggedInAuth] = useMutation(checkUserLoggedInAuthQuery,{
        onCompleted: (data) => {
            console.log('User deleted:', data);
            // Optionally refetch data here
          },
    });
    
    useEffect(()=>{
        console.log(checkUserLoggedInAuth)
    })

    return (
        <div>
            
            <input type="text" placeholder="EmailId"  onChange={(e)=>dispatch(setUserLoggedInEmailId(e.target.value))}/>
            <input type="password" placeholder="password"  onChange={(e)=>dispatch(setUserLoggedInEmailPassword(e.target.value))}/>
            <button onClick={()=>{
                {
                    checkUserLoggedInAuth({
                        variables:{
                            userLoginParameters:{
                                emailId:userLoggedinEmailId,
                                password:userLoggedInEmailPassword
                            }
                        }
                    })
                }
            }}>Login</button>
        </div>
    )
}

export default Login;