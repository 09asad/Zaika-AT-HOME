import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1 className="m-4 font-bold text-xl font">About</h1>
            <h2 className="m-4">Hello Everyone! This is your food delivery app 'Zaika AT HOME'. Enjoy✌️</h2>
            <h2 className="m-4">Here're the details of the owner</h2>
            <UserClass />
        </div>
    );
};

export default About;