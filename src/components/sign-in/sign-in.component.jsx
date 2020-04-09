import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import {ReactComponent as GoogleLogo} from '../../assests/google.svg';
import{auth, SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }
   
    handleSubmit = async event =>{
        event.preventDefault();
        const {email,password} = this.state;
        try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email: '', password:''})
        }catch(err){
            alert(err.code);
        }

    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='Email'
                    value={this.state.email} required handleChange={this.handleChange}/>
                    
                    <FormInput type='password' name='password' label ='Password'
                    value={this.state.password} required handleChange={this.handleChange}/>
                    <div className ="buttons">
                        <CustomButton type='submit' >
                        Sign In
                        </CustomButton>
                        <CustomButton type='submit' signInWithGoogle onClick ={SignInWithGoogle}>
                        <GoogleLogo  className="google" /> Google
                        </CustomButton>
                       
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;