import React from 'react'

function Page404(props){

    setTimeout(() => {
        props.history.push("/");
    }, 1500);

    return(
        <div className="card box-card">
            <div className="form-title">404 Page not found</div>
            <h4>Redirecting to homepage</h4>
        </div>
    )
}

export default Page404;