<!-- 1.  -->
<!-- using props in c.c -->

<!-- 
import React from 'react'

export default class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }
    render() {
        return (
            <div className="user">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3>
            <h4>Contact: @priyehraut5</h4>
        </div>
        )
    }
} -->







<!-- 2. -->
<!-- using state variable in c.c -->

<!-- import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // creating state variable
    this.state = {
      count: 0,
    };
  }
  render() {
    // destrucntor props
    const { name, location } = this.props;

    return (
      <div className="user">
        <h1>Count = {this.state.count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @priyehraut5</h4>
      </div>
    );
  }
} -->






<!-- 3 -->
<!-- create multiple state variable using f.c -->

<!-- import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Dhanbad</h3>
            <h4>Contact: @priyehraut5</h4>
        </div>
    )
}

export default User; -->







<!-- 4. -->
<!-- create multiple state variable using c.c -->

<!-- import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // creating state variable
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    // destrucntor props
    const { name, location } = this.props;
    // destructor states
    const {count, count2} = this.state

    return (
      <div className="user">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @priyehraut5</h4>
      </div>
    );
  }
} -->





<!-- 5 -->
<!-- updating state varibles in c.c -->

<!-- import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // creating state variable
    this.state = {
      count: 0,
    };
  }
  render() {
    // destrucntor props
    const { name, location } = this.props;
    // destructor states
    const {count} = this.state


    return (
      <div className="user">
        <h1>Count = {count}</h1>
        <button onClick={() => {
            // this is not how you update the count we do not update the state varibale directly we will never modify our state varibale using and equal to and putting some value.

            /*this.state.count = this.state.count + 1;*/

            // use this
            
            this.setState({
                count: this.state.count + 1,
            });
        }}>Increase Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @priyehraut5</h4>
      </div>
    );
  }
} -->




<!-- 6 -->

<!-- import User from "./User";
import UserClass from "./UserClass";



 <!-- how does react componenet work behind the scenes -->

<!-- Whenever about component is rendered onto the web page or mybe mounted onto the web page so it basically start renderring jsx and whenever it is rendering it sees thereis a "UserClass" which is imported form "./UserClass" so it starts to load UserClass component it goes to this class based component now a new instance of this class is created and what happens when this class is called or maybe this class is instantiated so what happened is the contructor is called the first thing when the class loads is a contructor is called (when we say class loads that means we are creting a new instance of that class).  -->

<!-- So, whenever that class is instantiated the constructor is called remember this is very important -->

<!-- once the constructor is called then render is called -->


<!--
const About = () => {
    return (
        <>
        <h1>About Page</h1>

        <UserClass name={"Priyesh Raut (class)"} location={"Dhanbad class"}/>
        </>
    )
}

export default  About;



import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    };

    // contructor is called then render is called
    console.log("Contructor");

  }
  render() {

    // render is called after contructor called
    console.log(" Render");

    return (
      <div className="user">
      </div>
    );
  }
}


export default UserClass; -->




<!-- 7 -->



<!-- 
parent

import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent Contructor")
    }

    render() {
        console.log("Parent Render")
        return (
            <>
            <h1>About Page</h1>
            {/* <User name={"Priyesh Raut (function)} /> */}
    
            <UserClass name={"Priyesh Raut (class)"} location={"Dhanbad class"}/>
            </>
        )
    }
}

when the about component is loaded so first of all about compoenent is initialized It's basiclly a new instance of this class is created so the contructor ("console.log("Parent Contructor")") of about component is called thent the render ("console.log("Parent Render")") of about comp. is called then it goes to the children (UserClass) and then it again trigger the life cycle and now the "child contructor" is called and then the "child Render" is called.

// so this is how the life cycle of React works. This is how the life cycle of class based comp. work

export default  About;




child

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // creating state variable
    this.state = {
      count: 0,
      count2: 1,
    };

    // contructor is called then render is called
    console.log("Child Contructor");

  }
  render() {
    // destrucntor props
    const { name, location } = this.props;
    // destructor states
    const {count} = this.state

    // render is called after contructor called
    console.log("Child Render");

    return (
      <div className="user">
        <h1>Count = {count}</h1>
        <button onClick={() => {
            // NEVER UPDATE STATE VARIBLES DIRECTLY
            this.setState({
                // It will only update count not count2 (count2 = 1 using in this.state)
                count: this.state.count + 1,
            });
        }}>Increase Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @priyehraut5</h4>
      </div>
    );
  }
}


export default UserClass; -->




<!-- 8 -->

<!-- import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends Component {
    constructor(props) {
        super(props);

        console.log("Contructor")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        console.log("Render")
        return (
            <>
            <h1>About Page</h1>
            </>
        )
    }
}



when the about component is loaded so first of all about compoenent is initialized It's basiclly a new instance of this class is created so the contructor ("console.log("Contructor")") is called then the render ("console.log("Render")") is called and once the contructor once this class based comp. is mounted onto the dom then the componentDidMount (console.log("componentDidMount")) is called.

order: -
Contructor
Render
componentDidMount


export default  About; -->


<!-- 9 -->

<!-- Parent About

import { Component } from "react";
import User from "./User";
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
            <h1>About Page</h1>

            <UserClass name={"Priyesh Raut (class)"} location={"Dhanbad class"}/>

            </>
        )
    }
}




// what happended if we have componentDidMount in About comp. and UserClass too?

// so the imp interview question arise is what order will these methods be called


// when the about component is loaded so first of all about compoenent is initialized It's basiclly a new instance of this class is created so the contructor ("console.log("Parent Contructor")") is called thent the render ("console.log("Parent Render")") is called and  when the component is rendering it sees UserCalsss so it goes to this calss based compo. About compo. has not yet finised mouting so it will go to the UserClass and it will trigge it's life cycle methods now UserClass contructor will be called then render will be called then the componentDidMount will be called and once the children i.e UseClass compo. has been mounted properly then the parent i.e About comp.'s componentDidMount will be called

// so the componentDidMount is called once the component has been completely mounted on to the web page


// order
/*
Parent Contructor
Parent Render
Child Contructor
Child Render
Child componentDidMount
Parent componentDidMount
 */



// componentDidMount is used to make an API calls


export default  About;



child UserClass

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // creating state variable
    this.state = {
      count: 0,
      count2: 1,
    };

    // contructor is called then render is called
    console.log("Child Contructor");

  }


  componentDidMount() {
    console.log("Child componentDidMount")
}


  render() {
    // destrucntor props
    const { name, location } = this.props;
    // destructor states
                                                                                                                   

    // render is called after contructor called
    console.log("Child Render");

    return (
      <div className="user">
        <h1>Count = {count}</h1>
        <button onClick={() => {
            // NEVER UPDATE STATE VARIBLES DIRECTLY
            this.setState({
                // It will only update count not count2 (count2 = 1 using in this.state)
                count: this.state.count + 1,
            });
        }}>Increase Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @priyehraut5</h4>
      </div>
    );
  }
}


export default UserClass; -->




<!-- 9 -->

<!-- import { Component } from "react";
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
            <h1>About Page</h1>

            <UserClass name={"Priyesh Raut (class)"} location={"Dhanbad class"}/>
            <UserClass name={"Elon musk (class)"} location={"UK class"}/>

            </>
        )
    }
}

// Why do we make api call inside componentDidMount 

// When about component is loaded contructor will be called then render will be called and when the mouting finished properly then the componentDidMount will be called

// If I want to quicly render my component then make an api call get the data and then re-render the components so we have to use componentDidMount because it will be called after constructor and render called and the mouting/loading is done properly 


// I have one child UserClass what if we have multiple child how react life cycle work (two UserCalss inside About)

/*
order:-
- Parent Contructor
- Parent Render

- Priyesh Raut (class)Child Contructor
- Priyesh Raut (class)Child Render

- Elon musk (class)Child Contructor
- Elon musk (class)Child Render

<DOM UPDATED - IN SINGLE BATCH>

- Priyesh Raut (class)Child componentDidMount
- Elon musk (class)Child componentDidMount

- Parent componentDidMount
*/

 //got to raact-life cycle diagram:- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// In react when the component is mounted It is mounted in two phases this is why react is fast first phase is render phase and second is commmit phase

// how the react life cycle work

// when the component is mouting first of all constructor is called then the render is called this constructor and render is the render phase then the "React updated Dom and refs"  and then componentDidMount is called this "React updated Dom and refs"  and then componentDidMount is the commit phase and that is why componentDidMount is the best place to make an api call.

// So, render pahse has constructor and render. In the commit phase React actually updated the dom and then componentDidMount is called


// refs website:- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// the mounting cycle happens for every child, every parent, every component in the react goes through this life cycle method

export default  About;



import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // creating state variable
    this.state = {
      count: 0,
      count2: 1,
    };

    // contructor is called then render is called
    console.log(this.props.name +"Child Contructor");

  }


  componentDidMount() {
    console.log(this.props.name + "Child componentDidMount")
}


  render() {
    // destrucntor props
    const { name, location } = this.props;
    // destructor states
    const {count} = this.state

    // render is called after contructor called
    console.log(this.props.name + "Child Render");

    return (
      <div className="user">
        <h1>Count = {count}</h1>
        <button onClick={() => {
            // NEVER UPDATE STATE VARIBLES DIRECTLY
            this.setState({
                // It will only update count not count2 (count2 = 1 using in this.state)
                count: this.state.count + 1,
            });
        }}>Increase Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @priyehraut5</h4>
      </div>
    );
  }
}


export default UserClass; -->

















