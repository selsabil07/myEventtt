
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import Image from 'next/image';
// import { useState } from 'react';


//   const [eventTitle, setEventTitle] = useState('')
//   const [organization, setOrganization] = useState('')
//   const [country, setCountry] = useState('')

// const onSubmit = async (e) => {
//   e.preventDefault()

//   try {
//     const res = await fetch('http://127.0.0.1:8000/api/eventManager/register', {
//       method: 'POST',
//       body: JSON.stringify({
//         eventTitle,
//           organization,
//           country,
//           tags,
//           sector,
//           summary,
//           description,
//           startingDate,
//           endingDate,
        
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept' : 'application/json'
//       },

//     })
//     if (res.ok) {
//       window.location.href = '/dashboard'
//     } else {
//       setError((await res.json()).error)
//     }
//   } catch (error) {
//     setError(error?.message)
//   }
// }


// const StepA = ({ formData, handleChangeInput, handleNextStep }) => {
//     return (
//       <div className=' '>

        
//       <h1 className='mt-2 text-xl font-bold text-blue-900' >
//         Step A: Basic information
//       </h1>
//       <div className='my-2'>
//         <Label>Event Name</Label>
//         <Input
//           required
//           type='text'
//           name='eventTitle'
//           value={formData.eventTitle}
//           onChange={(e) => setEventTitle(e)}
//         />
        
//       </div>
//       <div className='my-2'>
//         <Label>Organization</Label>
//         <Input
//           type='text'
//           name='organization'
//           value={formData.organization}
//           onChange={(e) => setOrganization(e)}
//         />
//       </div>
//       <div className='my-2'>
//         <Label>Country</Label>
//         <Input
//           type='text'
//           name='country'
//           value={formData.country}
//           onChange={(e) => setCountry(e)}
//         />
//       </div>
      
//       <div className='my-2 flex justify-end items-center'>
        
//         <Button onClick={handleNextStep}>Next</Button>
      
//       </div>
//     </div>
      
//     );
//   };
  
//   export default StepA;