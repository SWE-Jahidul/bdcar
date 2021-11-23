import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const useAuth =() =>{

    console.log("use contexT" , useContext);
    return useContext(AuthContext);
}

export default useAuth;
