import React from 'react';
import { connect } from 'react-redux'
import FormsEntrace from './components/formsEntrace';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      password: "",
      movie: ""
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState(
      {
       [event.target.id]: event.target.value
      }
    )
  } 

  render() {
    return (
      <div>
        <h1>{ this.props.lerPage }</h1>
        <form>  
          <FormsEntrace 
          id="nome" 
          type="text" 
          handleChange={this.handleChange}
          />
          
          <FormsEntrace 
          id="email" 
          type="email"
          handleChange={this.handleChange}
          /> 
          
          <FormsEntrace 
          id="password" 
          type="password"
          handleChange={this.handleChange}
          /> 
          
          <FormsEntrace 
          id="movie" 
          type="text"
          handleChange={this.handleChange}
          /> 
          
          <button type="submit">OK</button>
        </form>
        <p>
          {this.state.nome}
        </p>
        <p>
          {this.state.email}
        </p>
      </div>
    );
  }      
}

const mapStateToProps = (state) => ({
  lerPage: state.page
});

export default connect(mapStateToProps)(App);
