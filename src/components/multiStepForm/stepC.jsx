// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { useState , useEffect } from 'react'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import Packages from '@/components/packages'

//   // const [eventTitle, setEventTitle] = useState('')
//   // const [organization, setOrganization] = useState('')
//   // const [country, setCountry] = useState('')
//   // const [tags, setTags] = useState('')
//   // const [sector, setSector] = useState('')
//   // const [summary, setSummary] = useState('')
//   // const [description, setDescription] = useState('')
//   const [startingDate, setStartingDate] = useState('')
//   const [endingDate, setEndingDate] = useState(null)

//   const onSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const res = await fetch('http://127.0.0.1:8000/api/eventManager/register', {
//         method: 'POST',
//         body: JSON.stringify({
//           eventTitle,
//           organization,
//           country,
//           tags,
//           sector,
//           summary,
//           description,
//           startingDate,
//           endingDate,
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

// const StepC = ({
//     formData,
//     handleChangeInput,
//     handlePrevStep,
//     handleSubmitFormData
//   }) => {
//     return (
//       <div>
//         <h1 className='mt-2 text-xl font-bold text-blue-900'>
//           Step C: Timing info
//         </h1>
  
//         <div className='my-2'>
//           <Label>Starting Date</Label>
//           <Input
//             type='number'
//             name='startingDate'
//             value={formData.startingDate}
//             onChange={(e) => setStartingDate(e)}
            
//           />
//         </div>
//         <div className='my-2'>
//           <Label>Ending Date</Label>
//           <Input
//             type='number'
//             name='endingDate'
//             value={formData.endingDate}
//             onChange={(e) => setEndingDate(e)}
//           />
//         </div>
//         <div className='my-1 flex items-center'>
//           <input
//             type='checkbox'
//             name='agreeToTerms'
//             id='agreeToTerms'
//             value={formData.agreeToTerms}
//             onChange={(e) => handleChangeInput(e)}
//             className="border-spacing-0"
//           />
//           <Label htmlFor='agreeToTerms'>I Agree to Terms of Services</Label>
//         </div>
//         <div className='my-2 flex justify-between items-center'>
//           <Button
//             onClick={handlePrevStep}
//           >
//             Prev
//           </Button>

//           {/* <Popover>
//       <PopoverTrigger asChild> */}
//         <Button variant="outline" onSubmit>submit</Button>
//       {/* </PopoverTrigger>
//       <PopoverContent className="w-96">
//         <Packages/>
//       </PopoverContent>
//     </Popover> */}

//         </div>
        
       
//       </div>
//     );
//   };
  
//   export default StepC;