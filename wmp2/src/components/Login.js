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
            <div className="wrapper fadeInDown">
                <div className="formContent">
                    <div className="fadeIn first">
                    <h1 className="fadeIn first">Water My Plants</h1>
                    </div>
                    <form>
                        {/* <h1 className="fadeIn first">Water My Plants</h1> */}
                        <p className="fadeIn first">So your plants never go thirsty.</p>
                        <input autocomplete="off" type="text" className="fadeIn second" name="username" value={this.state.username} placeholder="Username" onChange={this.changeHandler} required />
                        <input autocomplete="off" type="text" className="fadeIn third" name="password" value={this.state.password} placeholder="Password" onChange={this.changeHandler} required />
                        <input type="submit" className="fadeIn fourth" onClick={this.onLogin} />
                    </form>

                    <div id="formFooter">
                        {/* <button onClick={this.onLogin} className="push_button blue" href="#">Login</button> */}
                        <a className="underlineHover" href>Forgot Password?</a>
                    </div>
                    
                </div>  
            </div>
           
        )
    }
}

export default Login;