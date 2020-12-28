import React, { Component } from 'react';
// class Home2 extends Component{
//     render(){
//         return(
//             <div>
                  
//     {this.props.passdata.DetailsArr.map((item,index)=>(
//         <div key={index}>
//       <li>id:{item.id}</li>
//       <li>name:{item.name}</li>
//       <li>job:{item.job}</li>
//       <li>employee:{item.employee}</li>
//         </div>
//     ))}
 
//      </div>
//         )
//     }
// }
// export default Home2;

const Home2=(props)=>{
    //console.log(props);
    return(
        <div>
    {props.passdata.DetailsArr.map((item,index)=>(
        <div key={index}>
      <li>id:{item.id}</li>
      <li>name:{item.name}</li>
      <li>job:{item.job}</li>
      <li>employee:{item.employee}</li>
        </div>
    ))}
            </div>
    )
}
export default Home2;