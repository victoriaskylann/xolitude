import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

type InputFieldProps = {
    label: string
    value: string
    type: string
    name: string
    changeHandler: (event: React.SyntheticEvent) => void
} 

export const InputField = ({label, value, type, name, changeHandler}: InputFieldProps) =>  {
    return (
        <InputFieldContainer>
            <div className='group'>
                <label className='label'>{label}</label>
                <input
                type={type} 
                name={name}
                className='input'
                onChange={changeHandler}
                value={value} />
            </div>
        </InputFieldContainer>
    );
}

const InputFieldContainer = styled.div`
    text-align: left;
    margin: 15px;
    .label {
        width: 10vw;
        font-size: 15px;
        color: #fff;
    }
    .input {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border: 1px;
    }

`
