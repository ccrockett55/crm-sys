import React, {useState} from 'react'
import './entry.css'
import { Login } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/reset-password/Reset-password'

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

    const handleOnChange = e => {
        const {name, value} = e.target
        switch(name){
            case 'email':
                setEmail(value)
                break;
            
                case 'password':
                    setPassword(value)
                    break;
                
                    default: break
        }
    };

    const formSwitcher = frmType => {
            setFrmLoad(frmType);
    }
        
    return (
        <div className='entry-style'>
        <div className='jumbotron form-box'>
        {frmLoad === 'login' && 
        <Login 
        handleOnChange={handleOnChange}  
        formSwitcher={formSwitcher}       
        email={email}
        pass={password}        
        />}
        {frmLoad === 'reset' &&
        <ResetPassword 
        handleOnChange={handleOnChange}         
        email={email}
               
        />}
        </div>
    </div>
  )
}
