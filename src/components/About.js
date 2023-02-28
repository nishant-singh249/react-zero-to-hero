import React from 'react';
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        //console.log("Constuctor- Parent");
    }
    componentDidMount() {
        // Best place to make a API call
        //console.log("ComponentDidMount-Parent");
    }
    render() {
        //console.log("render-parent");
        return (
            <div>
            <h1>About us</h1>
            <p>This is the About us page</p>
            {/* <ProfileFunctionalComponent name={"Nishant"}/> */}
            <Profile />
        </div>
        )
    }
}

export default About;