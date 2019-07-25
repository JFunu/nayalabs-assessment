import React, { Component } from 'react';

class Step3 extends Component {

    componentDidMount = () => {
        if(this.props.data[0].accepts_shipment === 'no'){
            this.props.nextStep();
        }
    }


    render() { 
        const { nextStep, previousStep, handleInputChange, data, errors, step } = this.props;

        return (
            <React.Fragment>
                <h4 className="m-3">Address.</h4>
                <div className="form-group">
                    <label htmlFor="address1">Address 1</label>
                    <input type="text" 
                                className="form-control" 
                                name="address1" 
                                id="address1"  
                                value={data[step].address1} 
                                onChange={handleInputChange}
                                placeholder="Adress line 1" />
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address 2</label>
                    <input type="text" 
                                    className="form-control" 
                                    name="address2" 
                                    id="address2"  
                                    value={data[step].address2} 
                                    onChange={handleInputChange}
                                    placeholder="Adress line 2" />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" 
                                className="form-control" 
                                name="zip" 
                                id="zip"  
                                value={data[step].zip} 
                                onChange={handleInputChange}
                                placeholder="Zip" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" 
                                className="form-control" 
                                name="state"
                                id="state"  
                                value={data[step].state} 
                                onChange={handleInputChange}
                                placeholder="State" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text"
                                className="form-control" 
                                name="city" 
                                id="city"  
                                value={data[step].city} 
                                onChange={handleInputChange}
                                placeholder="City" />
                </div>
                <div className="form-group">
                    <button type="button" onClick={previousStep} className="btn btn-primary pull-left">Previous</button>

                    <button type="button" onClick={nextStep} className="btn btn-primary next">Next</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Step3;