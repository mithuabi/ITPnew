import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.Addnumber = this.Addnumber.bind(this)

        this.state = {
            number:0
        }
    }

Addnumber(){
    this.setState({
        number: ++this.state.number
    })

}



    render(){
        return(
            <div>
        <h3>Classbase Component</h3>
    
        <h1>Counter = {this.state.number}</h1>
        <button onClick={this.Addnumber}>Increment</button>
        </div>


        )
       
    }
}
export default CounterClass;
