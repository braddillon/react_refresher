import React, { Component } from "react";

class AddContactForm extends Component {

    state = {
        name: '',
        phone: '',
        email: ''
    }

    resetFields = () => {
        this.setState({ name: '', phone: '', email: ''})
    }

  render() {
    return (
      <div className="padding">
        <h4>Add Contact</h4>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Name</span>
          </div>
          <input type="text" className="form-control" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) } />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Phone</span>
          </div>
          <input type="text" className="form-control" value={this.state.phone} onChange={ (e) => this.setState({phone: e.target.value}) } />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Email</span>
          </div>
          <input type="text" className="form-control" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }/>
        </div>
        <button type="button" className="btn btn-primary" onClick={ () => this.props.onAdd(this.state.name, this.state.phone, this.state.email)}>Save</button>
        <button type="button" className="btn btn-danger" onClick={this.resetFields}>Reset</button>
      </div>
    );
  }
}

export default AddContactForm;
