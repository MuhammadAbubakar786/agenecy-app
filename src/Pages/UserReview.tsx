import React, { ChangeEvent, FormEvent, useState } from 'react'
import star from '../assests/Icons/star.svg'
import fileUpload from '../assests/Icons/upload_to_cloud.svg'
import { Link } from 'react-router-dom';

function UserReview() {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');

  const handleFormSubmit = () => {
    console.log('Form submitted:', {
      email,
      location,
      selectedOption,
      pros,
      cons,
      file,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  return (
    <React.Fragment>
      <div className='container mx-auto px-2 py-8'>
        <div className="max-w-xl mx-auto bg-whiteColor grid grid-cols-1 gap-8">
            <h1 className='font-semibold text-2xl line leading-8 text-center'>Leave a Review</h1>
            <form className='grid grid-cols-1 gap-8'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className="grid grid-cols-1">
                  <label htmlFor="email" className='text-gray700 text-sm font-medium leading-5'>
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-[1px] border-grayBorder text-grayBorder rounded-lg p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label htmlFor="location" className='text-gray700 text-sm font-medium leading-5'>
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="border-[1px] border-grayBorder text-grayBorder rounded-lg p-2"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="dropdown" className='text-gray700 text-sm font-medium leading-5'>
                  Dropdown list
                </label>
                <select
                  id="dropdown"
                  className=' border-[1px] border-grayBorder text-grayBorder rounded-lg p-2'
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  required
                >
                  <option value="" className='pr-2'>Select an option</option>
                  <option value="option1" className='pr-2'>Less than 6 months</option>
                  <option value="option2" className='pr-2'>Option 2</option>
                </select>
              </div>
              <div className='grid grid-cols-1 gap-3'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className='grid grid-cols-[auto_auto]'>
                    <label htmlFor="Value" className='text-base font-medium text-textColor'>
                      Value
                    </label>
                    <div id='Value' className='grid auto-cols-auto grid-flow-col justify-self-end'>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                    </div>
                  </div>
                  <div className='grid grid-cols-[auto_auto]'>
                    <label htmlFor="domain" className='text-base font-medium text-textColor'>
                      Domain Knowledge
                    </label>
                    <div id='domain' className='grid auto-cols-auto grid-flow-col justify-self-end'>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className='grid grid-cols-[auto_auto]'>
                    <label htmlFor="Value" className='text-base font-medium text-textColor'>
                      Communication
                    </label>
                    <div id='Value' className='grid auto-cols-auto grid-flow-col justify-self-end'>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                    </div>
                  </div>
                  <div className='grid grid-cols-[auto_auto]'>
                    <label htmlFor="domain" className='text-base font-medium text-textColor'>
                      Would recommanded
                    </label>
                    <div id='domain' className='grid auto-cols-auto grid-flow-col justify-self-end'>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4 '/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                      <img src={star} alt='Star' className='w-4'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className="grid grid-cols-1">
                  <label htmlFor="pros" className='text-gray700 text-sm font-medium leading-5'>
                    Pros
                  </label>
                  <textarea
                    id="pros"
                    className="border-[1px] border-grayBorder text-grayBorder rounded-lg px-2 py-2"
                    value={pros}
                    onChange={(e) => setPros(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label htmlFor="cons" className='text-gray700 text-sm font-medium leading-5'>
                    Cons
                  </label>
                  <textarea
                    id="cons"
                    className="border-[1px] border-grayBorder text-grayBorder rounded-lg px-2 py-2"
                    value={cons}
                    onChange={(e) => setCons(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <p className='text-center text-sm font-normal'>In order to validate the authenticity of all reviews on agencyreviews.io, we require an image or PDF of an invoice from the agency</p>
                <div className='grid grid-cols-1'>
                  <label htmlFor="file-input" className="bg-primaryColor py-2 px-[14px] rounded-lg text-whiteColor grid grid-cols-[auto_1fr] justify-self-center items-center gap-2">
                    <img src={fileUpload} alt='File upload' className='w-4'  />
                    <span>Select File {file && <span>| {file.name}</span>}</span>
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    className="hidden bg-primaryColor py-2 px-3 rounded-lg text-whiteColor grid-cols-1 justify-self-center"
                    accept=".jpg, .jpeg, .png, .pdf"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </form>
        </div>
        <div className='grid grid-cols-[auto_auto] justify-between pt-4'>
          <Link to="/" className='font-semibold px-5 py-2 border-2 border-primaryColor text-primaryColor rounded-lg text-sm '>Back</Link>
          <button type='submit' className='font-semibold px-5 py-2 rounded-lg text-sm bg-primaryColor text-whiteColor' onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserReview