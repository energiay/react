
import React, { Component } from 'react';



class Hello extends Component {
    constructor (props) {
        super(props)
        this.state = {          
            firstName: '',
            lastName: '',
            email: '',
            phone: {
                value: '',
                isCorrect: false,
                message: ''
            },
            password: '',
            confirmPassword: '',

            firstNameError: '',
            lastNameError: '',
            emailError: '',
            phoneError: '',
            passwordError: '',
            passwordErrorConf: '',           
                
            buttonEnabled: false, 
        }
    }  

    onChangeFirstName= (event) => {                    
        this.setState({firstName: event.target.value});
    };
    onChangeLastName= (event) => {             
        this.setState({lastName: event.target.value});
    };
    onChangeEmail= (event) => {             
        this.setState({email: event.target.value});
    }; 
    onChangePhone= (event) => {          
        let phone = {...this.state.phone}
        let sVal = event.target.value;

        if( isNaN(sVal) ) {
            phone = {
                message: 'not number',
                isCorrect: false,
            }
        }
        else {
            phone = {
                isCorrect: true
            }
        }
        phone.value = sVal;
        cl
        this.setState({
            phone
        });
    };
    onChangePassword= (event) => {             
        this.setState({password: event.target.value});
    };
    onChangeConfirmPassword= (event) => {             
        this.setState({confirmPassword: event.target.value});
    };
    validate = () => {
        
        
        
        let firstNameError= '';
        let emailError='';
        let lastNameError='';
        // let phoneError= '';
        let passwordError= '';
        let passwordErrorConf = '';  

        //firstname
        if (this.state.firstName.length === 0) {            
            firstNameError = 'Enter your name';
        }
        
        if (this.state.firstName.length > 20) {           
            firstNameError = 'Your name must contain maximum 20 characters';
        }

        if(firstNameError){
            this.setState({firstNameError})
            return false;
        };      

        //lastname
        if (this.state.lastName.length === 0) {
            lastNameError = 'Enter your surname'
        } else if (this.state.lastName.length > 20) {    
            lastNameError = 'Your surname must contain maximum 20 characters'
        }
        if(lastNameError){
            this.setState({lastNameError})
            return false;
        };

        //email
            if (this.state.email.length === 0) {
            emailError = 'enter your email';
        } else if (!this.state.email.includes('@')) {           
            emailError = 'Invalid email';
        }
        if (emailError){
            this.setState({emailError});
            return false;
        }
        
    

        //password
        if (this.state.password.length === 0) {
            passwordError='Enter password'
        }
        if(passwordError){
            this.setState({passwordError});
            return false;
        }
        if (this.state.confirmPassword.length === 0) {
            passwordErrorConf='Enter password'
        }else if(this.state.password !== this.state.confirmPassword){
            passwordErrorConf='Passwords do not matched'
        }
        if (passwordErrorConf){
            this.setState({passwordErrorConf});
            return false;
        }     

        return true; 
        //очищать сообщения о неправильном вводе
    }  
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log('submit form')
        } else {         
            console.log('not submit') 
        }
    };   
    render() {        
        return(
            <div className='reg-container'>
                <form  onSubmit={(event) => this.handleSubmit(event)} className='reg-block'>
                    <h2>Registration</h2>
                    <p>If you already have username, go to the</p>
                    <h3>Personal information</h3>                   

                    <div className='reg-input'>
                        <label>First name</label>
                        <input 
                            type='text'
                            placeholder='Enter your first name'
                            value={this.state.firstName}
                                onChange={(event) => {
                                    return this.onChangeFirstName(event)
                                }}
                            />
                            <div className='reg-errors'>{this.state.firstNameError}</div>
                            
                    </div>

                    <div className='reg-input'>
                        <label>Last name</label>
                        <input 
                            type='text'
                            placeholder='Enter your last name'
                            value={this.state.lastName}
                            onChange={(event) => this.onChangeLastName(event)} 
                            />
                            <div className='reg-errors'>{this.state.lastNameError}</div>
                            
                    </div>
                    
                    <div className='reg-input'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'                         
                            placeholder='Enter your email'                         
                            value={this.state.email}
                            onChange={(event) => this.onChangeEmail(event)}                         
                            />
                            <div className='reg-errors'>{this.state.emailError}</div>      
                    </div>

                    <div className='reg-input'>
                        <label>Phone</label>
                        <input
                            type='text'
                            placeholder='Enter your phone number'
                            value={this.state.phone.value}
                            onChange={this.onChangePhone}
                        />
                        {
                            this.state.isCorrect
                                ? null 
                                : <div className='reg-errors'>{this.state.phone.message}</div>
                        }

                    </div>

                    <h3>Password</h3>
                    <div className='reg-input'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            value={this.state.password}
                            onChange={(event) => this.onChangePassword(event)}
                        />
                        <div className='reg-errors'>{this.state.passwordError}</div>    
                    </div>

                    <div className='reg-input'>
                        <label htmlFor='password'>Confirm password</label>
                        <input
                            type='password'
                            placeholder='Confirm your password'
                            value={this.state.confirmPassword}
                            onChange={(event) => this.onChangeConfirmPassword(event)}
                            />
                            <div className='reg-errors'>{this.state.passwordErrorConf}</div> 
                    </div>
                    <button
                        disabled={!this.state.buttonEnabled}
                        //onClick={() => this.onSubmit()} 
                        >
                            Create profile
                        </button>
                </form>

            </div>           
        );
    }
}


export default Hello;

