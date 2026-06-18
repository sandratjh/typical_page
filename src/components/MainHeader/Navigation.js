import React from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.css';

const Navigation = (props) => {
    return (
        <AuthContext.Consumer>
            {(ctx) => {
                return (
                    <nav className={classes.nav}>
                        <ul>
                            {ctx.loggedIn && (
                                <li>
                                    <a href="/">Users</a>
                                </li>
                            )}
                            {ctx.loggedIn && (
                                <li>
                                    <a href="/">Admin</a>
                                </li>
                            )}
                            {ctx.loggedIn && (
                                <li>
                                    <button onClick={props.onLogout}>Logout</button>
                                </li>
                            )}
                        </ul>
                    </nav>
                )
            }}
        </AuthContext.Consumer>
    );
};

export default Navigation;