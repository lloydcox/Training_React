import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        // SHORT CIRCUIT OPERATOR 
        return this.state.isLoggedIn && <div>Welcome Lloyd</div>

        // CONDITIONAL TURNARY OPERATOR
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Lloyd</div> 
        //     ) : (
        //     <div>Welcome Guest</div>
        // )

        // ELEMENT VARIABLES 
        // let message 
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Lloyd</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // IF /ELSE 
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Lloyd</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div> Welcome Lloyd</div>
        //         <div> Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
