import { useRouteError } from "react-router-dom";


const Errorpage = () => {
    const errorObject = useRouteError()
    console.log("errorobject",errorObject);
    return(
        <div className="d-flex flex-column justify-content-center align-items-center text-danger">
       Oops Something Went Wrong <br/>
       Error {errorObject?.status}{errorObject.statusText} <br/>
       Description {errorObject?.error?.message}
        </div>
    )
}

export default Errorpage;