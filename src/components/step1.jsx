import React, { Component } from 'react';

class Step1 extends Component {
    render() { 
        const { nextStep, previousStep, handleInputChange, data, errors, step } = this.props;

        return ( 
            <React.Fragment>
                <h4 className="m-3">Login information</h4>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="Enter email" 
                            value={data[step].email} 
                            onChange={handleInputChange}
                            />
                </div>
                {errors[step]['email'] && <div className="alert alert-danger"><small>{errors[step]['email']}</small></div>}

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                            className="form-control" 
                            name="password" 
                            id="password" 
                            placeholder="Password" 
                            value={data[step].password} 
                            onChange={handleInputChange}
                            />
                </div>
                {errors[step]['password'] && <div className="alert alert-danger"><small>{errors[step]['password']}</small></div>}

                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type="password" 
                            className="form-control" 
                            name="password_confirmation" 
                            id="password_confirmation" 
                            placeholder="Confirm Password" 
                            value={data[step].password_confirmation} 
                            onChange={handleInputChange}
                            />
                </div>
                {errors[step]['password_confirmation'] && <div className="alert alert-danger"><small>{errors[step]['password_confirmation']}</small></div>}
                <div className="form-group">
                    <button type="button" onClick={previousStep} className="btn btn-primary pull-left">Previous</button>

                    <button type="button" onClick={nextStep} className="btn btn-primary next">Next</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Step1;