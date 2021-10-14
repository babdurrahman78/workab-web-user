import React from "react"
import { Route, Redirect } from 'react-router-dom'
import MasterLayout from "../layout/MasterLayout"

function PrivateRoute({ ...rest }) {
    return (
        <Route
            { ...rest }
            render={ ({ props, location }) => 
                localStorage.getItem('token') ?
                    ( <MasterLayout { ...props } /> )
                :
                    ( <Redirect to={ { pathname: "/login", state: { from: location } } } /> )
            }
        />
    )
}

export default PrivateRoute