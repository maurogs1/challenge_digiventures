import { useContext } from "react"
import { UserContext } from "../front/context/user/userContext"
import  Router  from 'next/router'
export default function Home() {
 const {username} = useContext(UserContext) 
    if(!username)
        Router.push('/login')
    return (
        <div> 
            <h1>Bienvenido { username }</h1>
         </div>   
    )

}