import React, { Component} from 'react';
import Joi from 'joi-browser';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Step4 from './components/step4';
import Introduction from './components/introduction';
import './App.css';


export default class App extends Component {
    state = {
        step: 0,
        data: {
            0: {
                accepts_shipment: 'yes'
            },
            1: {
                email: '',
                password: '',
                password_confirmation: '',
            },
            2: {
                dob: '',
                phone_number: '',
                gender: '',
            },
            3: {
                address1: '',
                address2: '',
                zip: '',
                state: '',
                city: '',
            },
            4: {
                plan: 'monthly'
            }
        },
        errors: {
            0: {},
            1: {},
            2: {},
            3: {},
            4: {}
        }
    }

    schema = {
        1: {
            email: Joi.string().required().email(),
            password: Joi.string().min(2).required(),
            password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({
                language: { any: { allowOnly: 'must match password'}}
            })
        }
    }



    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-8 center">
                <h1>Order Completion</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 center">
                    <form>
                        { this.showSteps() }
                    </form>
                </div>
            </div>
        </div>
    }

    showSteps() {
        switch (this.state.step) {
            case 1:
              return <Step1 data={this.state.data}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    handleInputChange={this.handleInputChange}
                                    errors={this.state.errors}
                                    step={this.state.step}
                                    />
            case 2:
              return <Step2 data={this.state.data}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep}
                                   handleInputChange={this.handleInputChange}
                                   errors={this.state.errors}
                                   step={this.state.step}
                                    />
            case 3:
              return <Step3 data={this.state.data}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep}
                                   handleInputChange={this.handleInputChange}
                                   errors={this.state.errors}
                                   step={this.state.step}
                                    />
            case 4:
              return <Step4 data={this.state.data} 
                            previousStep={this.previousStep}
                            submitValues={this.saveValues} 
                            handleInputChange={this.handleInputChange} 
                            errors={this.state.errors}
                            step={this.state.step}
                            />
            default:
                return <Introduction data={this.state.data} 
                                    nextStep={this.nextStep} 
                                    handleInputChange={this.handleInputChange} 
                                    step={this.state.step}
                                    />
          }
    }

    saveValues = e => {
        console.log('saving values');
        console.log(this.state.data);
    }

    validateStep = (step) => {
        if(this.state.data[step] && this.schema[step]){
            const result = Joi.validate(this.state.data[step], this.schema[step], { abortEarly: false})
            if(!result.error) return null;
    
            const errors = {...this.state.errors};
            for (let item of result.error.details) {
                errors[step][item.path[0]] = item.message
            }
            
            return errors;
        }
    }

    validateInput = ( { name, value }) => {
        if(this.schema[this.state.step] && this.schema[this.state.step][name]){
            const obj = {[name]: value};
            const schema = {[name]: this.schema[this.state.step][name]};
    
            if(name == 'password_confirmation'){
                obj.password = this.state.data[this.state.step].password;
                schema.password = this.schema[this.state.step].password;
            }
    
            const {error} = Joi.validate(obj, schema);
            
            return error ? error.details[0].message : null;
        }
    }

    handleInputChange = ({ currentTarget: input}) => {   
        let errors = {...this.state.errors};
        if(this.state.step > 0){
            const errorMsg = this.validateInput(input);
            if(errorMsg) errors[this.state.step][input.name] = errorMsg;
            else delete errors[this.state.step][input.name];
        }
                     
        const data = {...this.state.data};
        data[this.state.step][input.name] = input.value;
        this.setState({ data });
    }

    nextStep = () => {
        let errors = {...this.state.errors};
        if(this.state.step > 0){
            const result = this.validateStep(this.state.step);
            errors = (result) ? result : errors;
        }

        this.setState({ errors})
        
        if(Object.keys(errors[this.state.step]).length > 0){
            return;
        }
        this.setState({ step: this.state.step + 1})
    }

    previousStep = () => {
        this.setState({ step: this.state.step - 1})
    }
}
