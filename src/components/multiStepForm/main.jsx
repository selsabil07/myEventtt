'use client';
import React, { useEffect, useState } from 'react';
import StepA from './StepA';
import StepB from './StepB';
import StepC from './StepC';
import StepD from './StepD';
import StepFinal from './StepFinal';
import Image from 'next/image';

// This is the parent component.
// This component will control and manage steps and data

// Step A: Customer Identity Info
// Step B: Customer Business Info
// Step C: Customer Financial Info
// Step D: Confirm Form  Data

// Step Final: Succes Result

const initialFormData = {
  eventTitle: '',
  organization: '',
  country: '',

  sector: '',
  photo:'',
  tags: '',
  summary:'',
  description: '',
  message:'',

  startingDate:'' ,
  endingDate:'' ,
  agreeToTerms: false,
};

const stepsArray = ['A', 'B', 'C'];

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState('A');
  const [formData, setFormData] = useState(initialFormData);

  // We need a method to go to next step
  const handleNextStep = () => {
    if (step === 'A') setStep('B');
    else if (step === 'B') setStep('C');
  };

  // We need a method to go to prev step
  const handlePrevStep = () => {
    
     if (step === 'C') setStep('B');
    else if (step === 'B') setStep('A');
  };

  // We need a method to update our formData
  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === 'agreeToTerms') {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    if (!formData.agreeToTerms) {
      alert('Error!! You must agree to Terms of Services!!');
    } else {
      setStep('Final');
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    return (
      <section className='mt-2 mb-4 flex justify-between'>
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-200 rounded-xl cursor-pointer ${
              item === step ? 'bg-purple-500' : ''
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
    
  <div className='flex flex-row border justify-center border-solid rounded-md w-[96%] '>
    <div className='text-center w-1/2 rounded-tr-3xl rounded-br-3xl text-2xl p-10 pt-16 font-bold '>
      <div className='w-40 bg-purple-500 blur-3xl'></div>
      <h1 className=''>Give us more information</h1>
      <h1 className=''>about your event </h1>
      <div className='text-lg p-10 text-center font-semibold flex justify-center bg-purple-300'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quo saepe fugit accusantium 
      </div>
      {/* <div className='flex justify-center'>
        <Image className=' w-auto' src={'/cute.png'} width={90} height={50}/>
      </div> */}
    </div>
    <div className='w-[96%] h-[96%] px-6 py-1 mx-auto rounded-lg '>
     
      {renderTopStepNumbers()}

      {/* // Render Steps */}
      {step === 'A' ? (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'C' ? (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
      
      {step === 'Final' ? <StepFinal /> : null}
    </div>
   </div>
  );
};

export default SimpleMultiStepForm;