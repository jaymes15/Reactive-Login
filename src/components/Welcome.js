import React, {Component} from 'react';
import Form from './Form.js';


class Welcome extends Component{
   constructor(props){
    super(props)

    this.state = {
      message:'',
      password:'',
      username:''
    }

    this.myForm = this.myForm.bind(this);
   
  }
  
componentDidMount(){
  const form =(
         
          <form onSubmit={this.mySubmitHandler}>
         
          <p>Enter your username:</p>
          <input type='text' name = 'username' onChange = {this.myForm}  />

          <p>Enter your password:</p>
          <input type='password' name = 'password' onChange = {this.myForm}  />

          <input type='submit'/>
          <Form username={this.state.username} />
      </form>
          
      );
  this.setState({
    message:form
  });
}

  myForm = (event) => { 
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});

  }

  mySubmitHandler = (event) => {
    const loginInfo =  <Form username={this.state.username} />;
    if (this.state.username !== '' && this.state.password !== '') {
      
      alert("You are submitting " + this.state.username);
      
      this.setState({
        username:'',
        password:'',
        message: loginInfo
      })
    }
    else{
      event.preventDefault();
      alert('please fill your login details')
    }
  }
  
  
  render() {
    return (
    <div>
    {this.state.message}
    </div>

    	)
  }
}

export default Welcome;
