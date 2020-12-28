import React, { Component } from 'react';

class Header1 extends Component {
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
    handleButton = () => {
        this.setState({
            Details: {
                id: "20",
                name: "divya",
                job: "react",
                employee: "developer"
            }

        })
    }

    render() {
        //  const {Details}=this.state
        return (
            <div>
                
                <button onClick={this.handleButton}>
                    clickMe
                     </button>
            </div>
        )
    }
}
export default Header1;