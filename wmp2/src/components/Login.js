import React from 'react';
import './Login.css';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    
    

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onLogin = event => {
        const user = this.state.username
        localStorage.setItem('user', user)
        window.location.reload();
    }

    render() {
        return(
            <div className="Login">
                <form>
                    <h1>Water My Plants</h1>
                    <p>So your plants never go thirsty.</p>
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.changeHandler} required />
                    <input type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.changeHandler} required />
                    {/* <button onClick={this.onLogin}>Login</button> */}
                    
                </form>
                <button onClick={this.onLogin} class="push_button blue" href="#">Login</button>
            </div>
           
        )
    }
}

export default Login;