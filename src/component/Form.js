
import React from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={country :'',region:''};
    }
    selectCountry(val){
        this.setState({country:val})
      }
      selectRegion(val){
        this.setState({region:val})
      }
    render()
    {
        const {country,region}=this.state
        return(
            <div>
                
                 <form onSubmit={this.props.getWeather}>
                 {/* <input type="text" name="city" placeholder="Enter City..."></input>
                 <input type="text" name="country" placeholder="Enter Country..." ></input> */}
                 <CountryDropdown value={country}
                 onChange={val=>(this.selectCountry(val))}></CountryDropdown>
                 <RegionDropdown
                 country={country}
                value={region}
                 onChange={(val) => this.selectRegion(val)} />
                <button> Get Weather</button>
                </form>
            </div>
        )
    }
}

export default Form;