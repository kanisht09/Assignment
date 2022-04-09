import React, { useState } from 'react';
import './FormNew.css';
import FormInputNew from './FormInputNew';
import { RiArrowDropDownLine } from 'react-icons/ri';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const options = [
  'Select Specialization',
  'Cardiologist',
  'Eye Specialist',
  'Physician',
  'Physio Therapist',
  'Surgeon',
];

const defaultOption = options[0];

const Form = () => {
  const [values, setValues] = useState({
    doctorName: '',
    speciality: '',
    email: '',
    mobileNumber: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'doctorName',
      type: 'text',
      errorMessage:
        "Name shouldn't include any digit or any special characters except space !",
      placeholder: 'Full Name',
      label: 'Doctor Name*',
      pattern: "^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$",
      required: true,
    },
    {
      id: 2,
      name: 'speciality',
      type: 'text',
      errorMessage: 'It should be a valid string',
      placeholder: 'Select Specialization',
      label: 'Speciality*',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      errorMessage: 'It should be a valid email address!',
      placeholder: 'you@gmail.com',
      label: 'Email*',
      required: true,
    },
    {
      id: 4,
      name: 'mobileNumber',
      type: 'tel',
      pattern: '^[0-9]{10}',
      placeholder: '8386432858',
      label: 'Mobile Number*',
      errorMessage: 'Mobile number should be of 10 digits ',
    },
    {
      id: 5,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 6,
      name: 'password',
      type: 'password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
      placeholder: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: 'Password',
      required: true,
    },
    {
      id: 7,
      name: 'confirmPassword',
      type: 'password',
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSelect = () => {
    console.log('Hello');
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h1>Fill up the details to register</h1>
        {/* {inputs.map((input) => (
          <FormInputNew
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))} */}
        <div className='form-box'>
          <FormInputNew
            {...inputs[0]}
            value={values[inputs[0].name]}
            onChange={onChange}
          />
          <div className='w-100 form-flex'>
            <label htmlFor='speciality'>Speciality*</label>
            <Dropdown
              options={options}
              value={defaultOption}
              className='select-box'
              controlClassName='select-box-inner'
              arrowClassName='select-box-arrow'
              placeholder='Select Sepecialization'
              onChange={(e) =>
                setValues((prev) => ({ ...prev, speciality: e.value }))
              }
            />
          </div>
        </div>
        <FormInputNew
          {...inputs[2]}
          value={values[inputs[2].name]}
          onChange={onChange}
        />
        {/* 
        <div>
          <label htmlFor='Mobile Number'>Mobile Number*</label>
          <div>
            <div>
              <p>IND</p>
              <RiArrowDropDownLine />
            </div>
            <input/>
          </div>
        </div> */}

        <FormInputNew
          {...inputs[3]}
          value={values[inputs[3].name]}
          onChange={onChange}
        />

        <button>Complete Registration</button>
      </form>
    </div>
  );
};

export default Form;
