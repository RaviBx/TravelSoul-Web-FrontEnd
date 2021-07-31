import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';
import { LITERAL_TYPES } from '@babel/types';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--meduim', 'btn--large'];

export const Button = ({
    childern, 
    type, 
    onclick, 
    buttonStyle, 
    buttonSize}) => {const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0]

        return(

            <Link to='/sign-up' className='btn-mobile'>
                <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
                onClick={onclick}
                type={type}
                >
                    {childern} 
                </button>
            </Link>
        )
    
    };
