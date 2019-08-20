import React from 'react';

const Login () {
    return (
        <Form className ="form">
            <div className="form-group">
                <label className="label">Email</label>
                <Field className="input"
                        name="email"
                        type="email"
                        autoComplete="off"
                        />
            </div>
            
            <div className="form-group">
                <label className="label">User Name</label>
                <Field className="input"
                       name="user"
                       type="user"
                       autoComplete="off"
                       />
            </div>

            <div className="form-group">
                <label className="label">Password</label>
                <Field className="input"
                       name="password"
                       type="password"
                       autoComplete="off"
                       />           
            </div>
        </Form>
    )
}