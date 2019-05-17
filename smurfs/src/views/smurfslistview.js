import React from "react";
import { connect } from "react-redux";


import {getSmurfs} from '../actions/index'
import SmurfsList from "../components/smurfslist";
import { SmurfForm } from "../components";


class SmurfsListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
   
    this.props.getSmurfs();
    
  }

  render() {
    if (this.props.fetching) {
  
    }
    return (
      <div>
        <SmurfForm/>
        <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}


const mapStateToProps=state=>{
  return{
    smurfs: state.smurfs,
  fetching:state.fetching,
  error:state.error

  }
}

export default connect(
  mapStateToProps ,
  {getSmurfs}
)(SmurfsListView);