import React, { Component } from 'react';

class Step4 extends Component {

    render() { 
        const { submitValues, previousStep, handleInputChange, data, errors, step } = this.props;

        return (  
            <React.Fragment>
            <h4 className="m-3">Plan</h4>
            <p>Which plan will you like to subscribe to?</p>
            <div className="form-check form-check-inline">
                <input className="form-check-input" 
                            type="radio" 
                            name="plan"
                            id="monthly" 
                            checked={data[step].plan === 'monthly'}
                            onChange={handleInputChange}
                            value="monthly" />
                <label className="form-check-label" htmlFor="monthly">Monthly</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" 
                        type="radio" 
                        name="plan" 
                        id="yearly" 
                        value="yearly" 
                        checked={data[step].plan === 'yearly'}
                        onChange={handleInputChange}/>
                <label className="form-check-label" htmlFor="yearly">Yearly</label>
            </div>

            <div className="form-group-inline m-3">
                <button type="button" onClick={previousStep} className="btn btn-primary pull-left">Previous</button>

                <button type="button" onClick={submitValues} className="btn btn-primary next">Submit</button>
            </div>
            </React.Fragment>
        );
    }
}
 
export default Step4;