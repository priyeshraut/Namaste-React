import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "./utils/UserContext";


class About extends Component {
    constructor(props) {
        super(props);

        // console.log("Parent Contructor")
    }

    componentDidMount() {
        // console.log("Parent componentDidMount")
    }

    render() {
        // console.log("Parent Render")
        return (
            <>
            <h1>About Class Component</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-xl text-black font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass name={"Priyesh Raut"} location={"Dhanbad"}/>
            </>
        )
    }
}

export default  About;