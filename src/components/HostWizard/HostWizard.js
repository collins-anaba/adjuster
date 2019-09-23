import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import './HostWizard.css';

class HostWizard extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            image:null,
            price: '',
            nameOfStay:'',
            telephoneNumber: '',
            address: '',
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

    handleStep = (e) => {
        if(e ='') {
            alert('Please fill out all information')
        } else {
        let {image, price, nameOfStay,telephoneNumber,address,stayType} = this.state
        this.props.handleImage(image)
        this.props.handlePrice(price)
        this.props.handleName(nameOfStay)
        this.props.handleTelephoneNumber(telephoneNumber)
        this.props.handleAddress(address)
        this.props.handleStayType(stayType) }
    }


    

    render(){
        let {image, price, name,telephoneNumber,address,stayType} = this.props

        return(
            <div>
                <form>

    <h1> Tell us about your stay</h1>
    <br/>
    <h2>What type of stay is this?</h2>
    <select className='select1' onChange={e=> this.handleChange(e)}
    name='stayType'>
        <option>Choose one...</option>
        <option>Hotel/Inn</option>
        <option>Private room</option>
        <option>Full house</option>
    </select>
    <br/>
    <h2>Where is the stay located?</h2>
    <input className='locationInput' onchange={e=> this.handleChange(e)} name='address' placeholder='Enter Address'/>
    <br/>
    <h2>Name of Stay?</h2>
    <input className='nameInput' onChange={e=> this.handleChange(e)} name='nameOfStay'/>
    <h2>How much is it a night?</h2>
    <input className='priceInput' onChange={e=> this.handleChange(e)} name='price'/>
    <br/>
    <h2>Whats the contact number</h2>
    <input className='numberInput' onChange={e=> this.handleChange(e)} name='telephoneNumber' placeholder='Enter Contact Number'/>
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