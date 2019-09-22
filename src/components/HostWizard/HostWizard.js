import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import './HostWizard.css';

class HostWizard extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            city: '',
            state: '',
            zipcode: '',
            image:null,
            Price: '',
            name:'',
            telephoneNumber: '',
            streetAddress: '',
            stayType: '',
            
        }
    }

    componentDidMount(){
        console.log('hello')
    }

    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
      }

    handleChange =(e)=> {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    handleStep1 = (e) => {
        if(e ='') {
            alert('Please fill out all information')
        } else {
        let {Company, JobTitle, Address,City,State,Zipcode} = this.state
        this.props.handleCompany(Company)
        this.props.handleJobTitle(JobTitle)
        this.props.handleAddress(Address)
        this.props.handleCity(City)
        this.props.handleState(State)
        this.props.handleZipcode(Zipcode) }
    }


    

    render(){
        return(
            <div>
                <form>

    <h1> Tell us about your stay</h1>
    <br/>
    <h2>What type of stay is this?</h2>
    <select>
        <option>Choose one...</option>
        <option>Hotel/Inn</option>
        <option>Private room</option>
        <option>Full house</option>
    </select>
    <br/>
    <h2>Where is the stay located?</h2>
    <input placeholder='Enter Address'></input>
    <br/>
    <h2>How much is it a night?</h2>
    <input></input>
    <br/>
    <h2>Whats the contact number</h2>
    <input placeholder='Enter Contact Number'/>
<h2>Do you have a picture of the stay? Upload here</h2>
<input type='file'/>
<br/>
<br/>
<button>Next</button>
                </form>
            </div>
        )
    }
}

export default HostWizard