import { useState } from 'react';
import { FormState } from '../FormState';
import FormInput from '../FormInput/FormInput';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import toast, { Toaster } from 'react-hot-toast';
import { RiArrowDropDownLine } from 'react-icons/ri';

const options = ['Select a Specialist', 'Cardiologist', 'Surgeon', 'Physician'];
const defaultOption = options[0];

const Error = {
  fullname: 'Full Name is required',
  speciality: 'Speciality is required',
  email: 'Proive a valid Email address',
  mobile: 'Proivde a valid mobile No',
  experience: 'Experience required',
  clinicName: 'Clinic Name is required',
  startDate: 'You need to fill the start date',
  endDate: 'You need to fill the end  date',
};

const Mobile = ({ handleModal, open }) => {
  const [pre, setPre] = useState(false);
  const [state, setState] = useState(FormState);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDate = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: new Date(e.target.value).toLocaleDateString(),
    }));
  };

  const validateAndProceed = (e) => {
    e.preventDefault();
    var regE = /^-?\d+\.?\d*$/;
    var regM = /^[0]?[789]\d{9}$/;
    if (
      !regE.test(state.experience) ||
      !regM.test(state.mobile) ||
      state.speciality === 'Select a Specialist'
    ) {
      toast.error('Kindly Provide valid input');
      return;
    }
    setPre((pre) => !pre);
  };

  const handleSubmit = (e) => {
    if (state.startDate > state.endDate) {
      toast.error('Provide valid input to requierd fields');
      return;
    }
    console.log(JSON.stringify(state));
    setTimeout(() => {
      handleModal();
    }, 3000);
    toast.success('Succesfully Submitted');
  };

  const values = [
    {
      label: 'Doctor Name*',
      type: 'text',
      name: 'fullname',
      placeholder: 'Full Name',
      error: `${Error.fullname}`,
      required: true,
      half: true,
      onChange: handleChange,
    },
    {
      options,
      value: defaultOption,
      className: 'select-box',
      controlClassName: 'select-box-inner',
      arrowClassName: 'select-box-arrow',
      placeholder: 'Select Sepecialization',
    },
    {
      label: 'Email*',
      type: 'email',
      name: 'email',
      placeholder: 'you@example.com',
      onChange: handleChange,
      required: true,
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      error: 'Provide a valid email address',
    },
    {
      type: 'text',
      className: 'ip',
      placeholder: '6386432858',
      name: 'mobile',
      onChange: handleChange,
      required: true,
      pattern: '[1-9]{1}[0-9]{9}',
      error: 'provide a valid mobile number',
    },
    {
      label: 'Experience*',
      type: 'text',
      name: 'experience',
      placeholder: 'Write in numbers',
      onChange: handleChange,
      required: true,
      pattern: '[1-9][0-9]',
      error: 'Experience Required',
      half: true,
    },
    {
      label: 'Clinic Name*',
      type: 'text',
      name: 'clinicName',
      placeholder: 'Eg. Sharda Clinic',
      onChange: handleChange,
      half: true,
    },
    {
      label: 'Address',
      type: 'text',
      name: 'address',
      onChange: handleChange,
      placeholder: 'eg. Near park street, Calcutta, W.B.',
      max: 150,
      error: 'max 150 chars are allowed',
    },

    {
      half: true,
      label: 'date',
      type: 'date',

      name: 'startDate',
      placeholder: 'DD-MM-YY',
      onChange: handleDate,
      required: true,
      error: 'Start date is required',
    },
    {
      half: true,
      label: 'EndDate*',
      type: 'date',
      name: 'endDate',
      onChange: handleDate,
      placeholder: 'DD-MM-YY',
      disabled: checked,
      required: true,
    },
  ];
  return (
    <div className={`form-container ${open} mobile-height`}>
      <div className='form-wrapper'>
        <h3 className='form-title'>Fill up the details to Register</h3>
        <form className='form'>
          {!pre && (
            <>
              <FormInput {...values[0]} />
              <div className='form-input '>
                <label htmlFor='speciality'>Speciality*</label>
                <Dropdown
                  {...values[1]}
                  onChange={(e) =>
                    setState((prev) => ({ ...prev, speciality: e.value }))
                  }
                />
              </div>
              <FormInput {...values[2]} />
              <div className='form-input'>
                <label htmlFor='mobile'>*Mobile Number</label>
                <div className='form-mobile'>
                  <span style={{ color: 'black' }}>IND</span>
                  <RiArrowDropDownLine color='black' size={26} />
                  <input {...values[3]} />
                  <span className='mobile-error'>Enter a Valid mobile no</span>
                </div>
                <FormInput {...values[4]} />
                <button
                  type='submit'
                  onClick={validateAndProceed}
                  className='ip'
                >
                  Next
                </button>
              </div>
            </>
          )}
          {pre && (
            <>
              <FormInput {...values[5]} />
              <FormInput {...values[6]} />
              <FormInput {...values[7]} />
              <FormInput {...values[8]} />
              <div className='check-box'>
                <input
                  className='ip'
                  type='checkbox'
                  name='check'
                  onChange={() =>
                    setChecked((check) => {
                      if (!check) {
                        var newDate = new Date().toLocaleDateString();
                        setState((prev) => ({ ...prev, endDate: newDate }));
                      }
                      return !check;
                    })
                  }
                />
                <label
                  htmlFor='check'
                  style={{
                    transform: 'translateY(5px)',
                    marginLeft: '5px',
                    color: 'grey',
                    fontSize: '12px',
                  }}
                >
                  Presently at this postion
                </label>
              </div>
              <button type='submit' onClick={handleSubmit} className='ip'>
                Complete Registration
              </button>
            </>
          )}
        </form>
        <Toaster
          position='bottom-center'
          reverseOrder={false}
          gutter={8}
          containerClassName=''
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Mobile;
