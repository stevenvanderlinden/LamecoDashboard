import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

class Data extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    AppActions.recieveData();
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      data: AppStore.getData()
    }, function(){
      console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        DATA
      </div>
    );
  }
}

export default Data;
