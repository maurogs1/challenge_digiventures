import { useContext, useEffect } from "react"
import { UserContext } from "../front/context/user/UserContext"
import Router from 'next/router'

export default function Home() {

 const {username} = useContext(UserContext) 

useEffect(() => {
    if(!username){
        Router.push('/')
    }
})
 
    return (
        <div className="d-flex justify-content-center align-items-center vh-100"> 
            <h1>Bienvenido { username }</h1>
         </div>   
    )

}