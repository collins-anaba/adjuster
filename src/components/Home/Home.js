import React, { Component} from 'react';
import './Home.css';


class Home extends Component {
constructor (){
  super()
  this.state = {
    city: '',
    state: '',
    place: [],
    price: 0,
    guests: '',
  }
}





    render() {
      return (
        <div>
   <style>
@import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');
</style>

    <div className='searchForm'>
      <form>
        <h1>Search a stay</h1>
        <h2>Where</h2>
        <input className='input'
        placeholder='Anywhere'       
        />
        <h2>Type of stay</h2>
        <select>
          <option>Hotel/Inn</option>
          <option>Private Room</option>
          <option>Entire House</option>
        </select>
        <br/>
        <br/>
        <button className='button'>Begin</button>
      </form>
    </div>
        </div>
      )
    }
    }
    
    export default Home;