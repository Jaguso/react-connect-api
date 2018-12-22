import React, {Component} from 'react';
import {createUser} from '../../services/';


class Signup extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      lastname: "",
      password: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target

    console.log("Evento: ", event)
    console.log("Valores: ", name, value)
    this.setState({[name]: value})
  }

  onSubmit = async(event) => {
    event.preventDefault();

    let response = {};
    response = await createUser(this.state)
      .catch(({response}) => alert(response.data.error.errors[0].message))
    if(response) {
      console.log(response.data.id)
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={this.onSubmit}>
            <div className="col-md-6 form-group">
              <label htmlFor="">Email:</label>
              <input 
                type="email"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="name">Tu nombre:</label>
              <input 
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="lastname">Tu apellido:</label>
              <input 
                type="text"
                name="lastname"
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChangeInput}
              />
            </div>
            
            <div className="col-md-6 form-group">
              <label htmlFor="name">Password:</label>
              <input 
                type="password"
                name="password"
                className="form-control"
                value={this.state.password}
                onChange={this.onChangeInput}
              />
            </div>
            <button type="submit" className="btn btn-success">Registrar</button>
          </form>

        </div>
      </div>
    );
  }
}

export default Signup;