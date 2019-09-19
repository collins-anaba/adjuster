import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

    // handleStep = (e) => {        
    //     if(e = '') {
    //         alert('Please fill out all information')
    //     } else {
    //         let { city, state, zipcode, image, price, name, telephoneNumber,streetAddress, stayType} = this.state
    //         this.props.handleState(state),
    //         this.props.handleCity(city),
    //         this.props.handleZipcode(zipcode),
    //         this.props.handleImage(image),
    //         this.props.handlePrice(price),
    //         this.props.handleName(name),
    //         this.props.handleTelephoneNumber(telephoneNumber),
    //         this.props.handleStreetAddress(streetAddress),
    //         this.props.handleStayType(stayType) }
    // }

    

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
<h2>Do you have a picture? Upload here</h2>
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