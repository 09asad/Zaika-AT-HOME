import React from "react";

// Class Component -> A class that extends React.Component and returns JSX using a render() method

class UserClass extends React.Component{
    constructor(props){
        super(props);        // used to access this.props
        this.state = {       // used to initialize state (like useState in functional components)
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy-photo.com",
            },
        };
        console.log("child- constructor");
    }
    async componentDidMount(){       // used to run code after the component mounts (like fetching an API, just like useEffect() in functional components)
        const data = await fetch("https://api.github.com/users/09asad");
        const json = await data.json();
        console.log(json);

        this.setState({       // used to update state (like setState function from useState)
            userInfo: json,
        });
        console.log("Child - componentDidMount");
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
    render() {
        console.log("child - render");
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img className="p-4 w-[300px]" src={avatar_url} />
                <h2 className="px-4">Name: {name}</h2>
                <h3 className="px-4">Location: {location}</h3> 
                <h4 className="px-4">Contact: asad.zaikaathome@co.in</h4>
            </div>
        );
    }
}

export default UserClass;