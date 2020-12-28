import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            Details: {
                id: "1",
                name: "Vidya",
                job: "developer",
                employee: "capgemini"
            },
        }
    }


    render() {
        //const {Details, userdetails,users}=this.state
        const name = this.state.Details.name
        const job = this.state.Details.job
        const id=this.state.Details.id
        const employee=this.state.Details.employee
        return (
            <div>
                {name}<br/>
                {job}<br/>
                {employee}<br/>
                {id}


            </div>


        )
    }
}


export default Header;