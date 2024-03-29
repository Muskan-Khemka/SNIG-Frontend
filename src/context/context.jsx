import React,{useState} from "react";
import Context from './context.js'
const ContextProvider=({children})=>{
    const [subscribed,setSubscribed]=useState(true)
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    return (
        <Context.Provider value={{subscribed,setSubscribed,currentUser, setCurrentUser,showAdminBoard, setShowAdminBoard}}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider 