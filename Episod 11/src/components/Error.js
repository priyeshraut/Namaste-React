import { useRouteError } from "react-router-dom";

const Error = () => {
    const errr = useRouteError();
    console.log(errr)
    return (
        <div>
            <h1>Opps! Error Something Went Wrong</h1>
            <h2>{errr.status}: {errr.statusText}</h2>
        </div>
    )
}

export default Error;