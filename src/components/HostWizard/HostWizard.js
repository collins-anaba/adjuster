import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './HostWizard.css';

class HostWizard extends Component {
    constructor(){
        super()
        this.state = {
            city: '',
            state: '',
            zipcode: '',
            image: '',
            Price: '',
            name:'',
            telephoneNumber: '',
            streetAddress: '',
            stayType: ''
        }
    }

    componentDidMount(){
        console.log('hello')
    }

    handleChange =(e)=> {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    handleStep = (e) => {        
        if(e = '') {
            alert('Please fill out all information')
        } else {
            let { city, state, zipcode, image, price, name, telephoneNumber,streetAddress, stayType} = this.state
            this.props.handleState(state),
            this.props.handleCity(city),
            this.props.handleZipcode(zipcode),
            this.props.handleImage(image),
            this.props.handlePrice(price),
            this.props.handleName(name),
            this.props.handleTelephoneNumber(telephoneNumber),
            this.props.handleStreetAddress(streetAddress),
            this.props.handleStayType(stayType) }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default HostWizard