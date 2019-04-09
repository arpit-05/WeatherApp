import React,{Component} from 'react'
class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Enter City..."></input>
                <input type="text" name="country" placeholder="Enter Country..." ></input>
                <button> Get Weather</button>
            </form>

        )
    }
}
export default Form;