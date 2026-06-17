import { createContext, useState } from "react";

export const taskContext = createContext();

export const TaskProvider = ({children}) => {
    const [employees, setEmployees] = useState(() => { 
        const storedEmployees = localStorage.getItem("employees");

        return JSON.parse(storedEmployees);
    });

    return(
        <taskContext.Provider value={{employees, setEmployees}}>
            {children}
        </taskContext.Provider>
    )
}