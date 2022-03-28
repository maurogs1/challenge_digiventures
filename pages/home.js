import { useContext, useEffect } from "react"
import { UserContext } from "/front/context/user/userContext"
import Router from 'next/router'

export default function Home() {

 const {username} = useContext(UserContext) 

useEffect(() => {
    if(!username){
        Router.push('/')
    }
})
 
    return (
        <div> 
            <h1>Bienvenido { username }</h1>
         </div>   
    )

}