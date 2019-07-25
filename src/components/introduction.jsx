import React, { Component } from 'react';

class Introduction extends Component {
    render() { 
        const { nextStep, data, step, handleInputChange } = this.props;

        return (  
            <React.Fragment>
                <p>Do you accept shipments?</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                                type="radio" 
                                name="accepts_shipment"
                                id="yes" 
                                checked={data[step].accepts_shipment === 'yes'}
                                onChange={handleInputChange}
                                value="yes" />
                    <label className="form-check-label" htmlFor="yes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                            type="radio" 
                            name="accepts_shipment" 
                            id="no" 
                            value="no" 
                            checked={data[step].accepts_shipment === 'no'}
                            onChange={handleInputChange}/>
                    <label className="form-check-label" htmlFor="no">No</label>
                </div>
                <div className="form-group">
                    <button type="button" onClick={nextStep} className="btn btn-primary next">Next</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Introduction;