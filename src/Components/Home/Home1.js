import React, { Component } from 'react';
import Home2 from './Home/Home2';

class Home1 extends Component{
    constructor(){
        super()
    this.state={
        DetailsArr:[ {
        id:"1",
        name:"Vidya",
        job:"developer",
        employee:"capgemini"
    },
      {
        id:"2",
        name:"Vidya",
        job:"developer",
        employee:"wipro"
    },
     {
        id:"3",
        name:"Vidya",
        job:"developer",
        employee:"Cognizant"
    }
]
}
    }
    handleClick=()=>{
        this.setState({
            DetailsArr:[{
                id:22,
                name:"pranuthi",
                job:"React developer",
                employee:"tcs"
            }]
        })
    }
        

    render(){
      const {Details,UserDetails,EmployeeDetails,DetailsArr }=this.state
        return(
            <div>
                <Home2 passdata={DetailsArr}/>
                    
                   {/* {DetailsArr.map((res,index)=>(
                         <div key={index}>
                         <h1>ID:{res.id}</h1>
                         <h1>Name:{res.name}</h1>
                         <h1>Job:{res.job}</h1>
                         <h1>Employee:{res.employee}</h1>
                         </div>
                   ))} */}

 <button onClick={this.handleClick}>Click me</button>




</div>
        )
    }
}
export default Home1;