import React from 'react';

const Login = props => {
    return(
        <div>
            <form onSubmit={props.onLogin}>
                <h1>Water My Plants</h1>
                <p>So your plants never go thirsty.</p>
                <input type="text" name="username" value={props.username} placeholder="Username" onChange={props.handleChanges} required />
                <input type="text" name="password" value={props.password} placeholder="Password" onChange={props.handleChanges} required />
                <input type="submit" value="Login"></input>
            </form>
        </div>
    )
}

export default Login;