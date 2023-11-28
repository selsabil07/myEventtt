// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { SelectDemo } from '@/components/ui/select'
// import { Select } from '@radix-ui/themes';
// import { useState } from 'react';

//   const [tags, setTags] = useState('')
//   const [sector, setSector] = useState('')
//   const [summary, setSummary] = useState('')
//   const [description, setDescription] = useState('')

//   const onSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const res = await fetch('http://127.0.0.1:8000/api/eventManager/register', {
//         method: 'POST',
//         body: JSON.stringify({
         
//           tags,
//           sector,
//           summary,
//           description,
          
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept' : 'application/json'
//         },

//       })
//       if (res.ok) {
//         window.location.href = '/myEvent'
//       } else {
//         setError((await res.json()).error)
//       }
//     } catch (error) {
//       setError(error?.message)
//     }
//   }


// const StepB = ({
//     formData,
//     handleChangeInput,
//     handlePrevStep,
//     handleNextStep,
//   }) => {
//     return (
//       <div>
//         <h1 className='mt-2 text-xl font-bold text-blue-900'>
//           Step B: Customer Business Info
//         </h1>
  
//         <div className='my-2 flex align-items'>
//           <Label>Sector</Label>
//           <select name="cars" id="cars">
//           <option value="educational">educational</option>
//           <option value="Cultural">Cultural</option>
//           <option value="Fundraisers">Fundraisers</option>
//           <option value="food">food</option>
//         </select>
//         </div>
//         <div className='my-2'>
//           <Label>photo</Label>
//           <Input
//             type='text'
//             name='photo'
//             value={formData.photo}
//             onChange={(e) => handleChangeInput(e)}
//           />
//         </div>
//         <div className='my-2'>
//           <Label>tags</Label>
//           <Input
//             type='text'
//             name='tags'
//             value={formData.tags}
//             onChange={(e) => setTags(e)}
//           />
//         </div>
//         <div className='my-2'>
//           <Label>Summary</Label>
//           <Input
//             type='text'
//             name='summary'
//             value={formData.summary}
//             onChange={(e) => setSummary(e)}
//           />
//         </div>
//         <div className='my-2'>
//           <Label>Description</Label>
//           <Input
//             type='text'
//             name='description'
//             value={formData.description}
//             onChange={(e) => setDescription(e)}
//           />
//         </div>
//         <div className='my-2'>
//           <Label>Message</Label>
//           <Input
//             type='text'
//             name='message'
//             value={formData.message}
//             onChange={(e) => setMessage(e)}
//           />
//         </div>
  
//         <div className='my-2 flex justify-between items-center'>
         
//           <Button onClick={handlePrevStep}>
//              Prev
//           </Button>
          
//           <Button onClick={handleNextStep}>
//              Next
//           </Button>
//         </div>
//       </div>
//     );
//   };
  
//   export default StepB;