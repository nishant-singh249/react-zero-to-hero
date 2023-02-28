import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create state variables
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    //console.log("Constructor-child");
  }
  async componentDidMount() {
    // Best place to make a API call
    const data = await fetch("https://api.github.com/users/nishant-singh249");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    //console.log("render-child");
    return (
      <div>
        <h2>ProfileClass Component!!</h2>
        <img alt="image" src={this.state?.userInfo?.avatar_url} />
        <h3>Name: {this.state?.userInfo?.name}</h3>
        <h3>Location: {this.state?.userInfo?.location}</h3>
      </div>
    );
  }
}

export default Profile;
