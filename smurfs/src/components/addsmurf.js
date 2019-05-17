import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addSmurf} from '../actions'


class SmurfForm extends Component {
 state={
   smurf:{
     name:'',
     age:'',
     height: ''
    
   }
 }


  changeHandler=ev=>{
    ev.persist();
    let value=ev.target.value;
    if(ev.target.name==='age'){
      value=parseInt(value,10);
    }

    this.setState(prevState=>({
      smurf:{
        ...prevState.smurf,
        [ev.target.name]:value
      }

    }))
  }

  handleSubmit=e=>{
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});


export default connect(mapStateToProps, {addSmurf})(SmurfForm);