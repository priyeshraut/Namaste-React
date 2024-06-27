import React from "react";

class UserClass extends React.Component {
  
  constructor(props) {
    super(props);
    // console.log(props);

    // creating state variable
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Dummy locatoin",
        url: "https/;as;lsss",
        avatar_url: "img",
      },
    };


    // console.log("Child Contructor");

  }


  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/priyeshraut");
    const json = await data.json();

    // when we call setstate updating cycle begins(updating cycle happens when the setstate is called) :- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    this.setState({
      userInfo: json,
    });


    // console.log("Child componentDidMount")


    // this.timer = setInterval(() => {
    //   console.log("chal")
    // }, 1000);

}


componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) console.log("componentDidUpdate")
}

componentWillUnmount() {
  clearInterval(this.timer)
  // console.log("componentWillUnmount")
}


  render() {

    const {count} = this.state
    
    const { avatar_url, name, location, url } = this.state.userInfo;
    // console.log("Child Render");


    const style = {
      width: "150px",
    }

    return (

      <div className="user">
        <img src={avatar_url} alt="" width={style.width} />
        <h1>Count = {count}</h1>
        <button onClick={() => {
            // NEVER UPDATE STATE VARIBLES DIRECTLY
            this.setState({
                // It will only update count not count2 (count2 = 1 using in this.state)
                count: this.state.count + 1,
            });
        }}>Increacse count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location === null ? this.props.location : location }</h3>
        <h4>url: {url}</h4>
      </div>
    );

  }
}


export default UserClass;


/***
 * 
 * -------MOUNTING--------
 * 
 * Constructor (dummy)
 * Render (dummy)
 *    <HTML Dummy >
 * Component Did Mount
 *    <API Call >
 *    <this.setstate> -> State variable is updated
 * 
 * ------UPDATE----------
 * 
 *    render (Api data)
 *    <HMTL new Api data>
 *    componentDid update
 * 
 */