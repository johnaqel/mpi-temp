import {createContext, useContext, useState} from "react";

const FormHostContext = createContext();

export const useFormHost = () => {
    return useContext(FormHostContext)
}

export const FormHost = ({onSubmitSuccess, onCancel, children}) => {
    const [formHostCallbacks, setFormHostCallbacks] = useState([
        () => {
            onSubmitSuccess()
        },
        () => {
            onCancel()
        }
    ])

    return(
        <>
            <FormHostContext.Provider value={formHostCallbacks}>
                {children}
            </FormHostContext.Provider>
        </>
    )

}