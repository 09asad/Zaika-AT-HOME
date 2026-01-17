import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1 className="m-4 font-bold text-lg">Oops!!!</h1>
            <h2 className="m-4 font-bold text-lg">Something went wrong⚠️</h2>
        </div>
    );
};

export default Error;