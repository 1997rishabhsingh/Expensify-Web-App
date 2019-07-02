import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin &&  <p>This is private info.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : <p>Please log in</p>}
            
        </div>
    )
}


// const AdminInfo = withAdminWarning(Info)
// ReactDOM.render(<AdminInfo isAdmin={false} info="RisHaBh" />, document.getElementById('app') )

const AuthInfo = requireAuth(Info)
ReactDOM.render(<AuthInfo isAuth={false} info="RisHaBh" />, document.getElementById('app') )