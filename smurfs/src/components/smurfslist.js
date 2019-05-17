import React, { Component } from 'react';
import Smurf from './smurf'




/*const SmurfsList=props=>{
    return(
        <div className='smurfslist'>
        {props.smurfs.map(smurf=>{
            return <Smurf key={smurf.name} smurf={smurf}/>;
        })}
        
        
        </div>
    )
}

export default SmurfsList;*/

class SmurfsList extends Component {
    render() {
      return (
     
          
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  
                  key={smurf.id}
                  
                />
              );
            })}
          </ul>
          
       
      );
    }
  }
  
  Smurf.defaultProps = {
   smurfs: [],
  };
  
  export default SmurfsList;