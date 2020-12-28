import React, { Component } from 'react';

class Home extends Component{
    state={
        Details: {
        id:"1",
        name:"Vidya",
        job:"developer",
        employee:"capgemini"
    }
}

    render(){
      const {Details}=this.state
        return(
            <div>
                 <h1>{Details.id}</h1>
                 <h1>This is yashwanth code</h1>
                 <h1>{Details.name}</h1>
                 <h1>{Details.job}</h1>
                 <h1>{Details.employee}</h1>
                {/* <h1>userid={this.state.Details.id}</h1> */}
               
                </div>


        )
    }
}
export default Home;