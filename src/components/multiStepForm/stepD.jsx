// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

// const StepD = ({
//     formData,
//     handleChangeInput,
//     handlePrevStep,
//     handleSubmitFormData,
//   }) => {
//     return (
//       <div>
//         <h1 className='mt-2 text-xl font-bold text-blue-900'>
//           Step D: Confirm Form Data
//         </h1>
//         <DataConfirmRow label='First Name:' value={formData.firstName} />
//         <DataConfirmRow label='Last Name:' value={formData.lastName} />
//         <DataConfirmRow label='Business Name:' value={formData.businessName} />
//         <DataConfirmRow label='Business City:' value={formData.businessCity} />
//         <DataConfirmRow
//           label='Business Website:'
//           value={formData.businessWebsite}
//         />
//         <DataConfirmRow label='Business Email:' value={formData.businessEmail} />
//         <DataConfirmRow
//           label='Income Per Month:'
//           value={formData.incomePerMonth}
//         />
//         <DataConfirmRow label='Tax Percantage:' value={formData.taxPercantage} />
  
//         <div className='my-1 flex items-center'>
//           <Input
//             type='checkbox'
//             name='agreeToTerms'
//             id='agreeToTerms'
//             value={formData.agreeToTerms}
//             onChange={(e) => handleChangeInput(e)}
//           />
//           <Label htmlFor='agreeToTerms'>I Agree to Terms of Services</Label>
//         </div>
  
//         <div className='my-2 flex justify-between items-center'>
//           <Button
//             onClick={handlePrevStep}
//           >
//             Prev
//           </Button>
//           <Button
//             onClick={handleSubmitFormData}
//           >
//             Submit
//           </Button>
//         </div>
//       </div>
//     );
//   };
  
//   export default StepD;
  
//   // A Seperate component to show data
//   const DataConfirmRow = ({ label, value }) => {
//     return (
//       <div className='my-3 border border-dashed border-gray-200 p-1 rounded-lg'>
//         <span className='mr-4 text-slate-500'>{label}</span>
//         <span className='mr-4 text-slate-900'>{value}</span>
//       </div>
//     );
//   };