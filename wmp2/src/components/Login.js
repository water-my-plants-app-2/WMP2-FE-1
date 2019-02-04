import React from 'react';
import './Login.css';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// const Login = props => {
//     return(
//         <div>
//             <form onSubmit={props.onLogin}>
//                 <h1>Water My Plants</h1>
//                 <p>So your plants never go thirsty.</p>
//                 <input type="text" name="username" value={props.username} placeholder="Username" onChange={props.handleChanges} required />
//                 <input type="text" name="password" value={props.password} placeholder="Password" onChange={props.handleChanges} required />
//                 <input type="submit" value="Login"></input>
//             </form>
//         </div>
//     )
// }
// const styles = theme => ({
//     button: {
//       margin: theme.spacing.unit,
//     },
//     input: {
//       display: 'none',
//     },
//   });

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
                    <input type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChanges} required />
                    {/* <button onClick={this.onLogin}>Login</button> */}
                    
                </form>
                <button class="push_button blue" href="#">Login</button>
            </div>
           
        )
    }
}

export default Login;