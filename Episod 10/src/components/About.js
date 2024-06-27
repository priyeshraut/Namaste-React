import { Component } from "react";
import UserClass from "./UserClass";


class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent Contructor")
    }

    componentDidMount() {
        console.log("Parent componentDidMount")
    }

    render() {
        console.log("Parent Render")
        return (
            <>
            <h1>About Class Component</h1>

            <UserClass name={"Priyesh Raut"} location={"Dhanbad"}/>
            </>
        )
    }
}

export default  About;