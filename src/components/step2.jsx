import React, { Component } from 'react';
import MaskedInput from 'react-text-mask'

class Step2 extends Component {
    render() { 
        const { nextStep, previousStep, handleInputChange, data, errors, step} = this.props;

        return ( 
            <React.Fragment>
                <h4 className="m-3">Personal information</h4>
                <div className="form-group">
                    <label htmlFor="dob">Date of birth</label>
                    <MaskedInput type="text" 
                                    className="form-control"
                                    id="dob"
                                    placeholder="mm / dd / yyyy"
                                    name="dob"
                                    value={data[step].dob} 
                                    onChange={handleInputChange}
                        mask={[/[0-1]/, /[0-9]/, ' ', '/', /\d/, /\d/, ' ', '/', /\d/, /\d/, /\d/, /\d/]} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone_number">Phone number</label>
                    <MaskedInput type="text" 
                                    className="form-control" 
                                    name="phone_number" 
                                    id="phone_number"
                                    value={data[step].phone_number} 
                                    onChange={handleInputChange}
                                    mask={['1', '(', /[1-9]/, /[0-9]/, /[0-9]/, ')', ' ',/\d/,/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select className="form-control" name="gender" id="gender"  onChange={handleInputChange}>
                        <option selected={data[step].gender === 'male'} value="male">Male</option>
                        <option selected={data[step].gender === 'female'} value="female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="button" onClick={previousStep} className="btn btn-primary pull-left">Previous</button>

                    <button type="button" onClick={nextStep} className="btn btn-primary next">Next</button>
                </div> 
            </React.Fragment>
        );
    }
}
 
export default Step2;