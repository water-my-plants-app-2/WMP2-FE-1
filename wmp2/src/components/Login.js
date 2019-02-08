import React from 'react';
// import './Login.css';
import './LOGIN.css'

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
                <div id="formContent">

                    <div className="fadeIn first">
                        <h1 className="fadeIn first">Water My Plants</h1>
                        <h1 className="fadeIn first">So your plants never go thirsty.</h1>
                    </div>

                    <form>
                        
                        {/* <p className="fadeIn first"></p> */}
                        <input type="text" id="login" autocomplete="off"  className="fadeIn second" name="username" value={this.state.username} placeholder="Username" onChange={this.changeHandler} required />

                        <input type="text" id="password" className="fadeIn third" autocomplete="off" name="password" value={this.state.password} placeholder="Password" onChange={this.changeHandler} required />

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