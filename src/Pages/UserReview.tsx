import React, { ChangeEvent, useState } from 'react'
import star from '../assests/Icons/star.svg'
import fileUpload from '../assests/Icons/upload_to_cloud.svg'
import dropDownIcon from '../assests/Icons/expand_arrow.svg'
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
      <div className='container mx-auto px-4 sm:px-0 py-8'>
        <div className="max-w-xl mx-auto bg-whiteColor grid grid-cols-1 gap-8">
           <div className="grid grid-cols-1">
            <div className="grid grid-cols-[auto_auto] justify-center items-center gap-8 pb-4">
              <img src="//" alt="Logo" className="w-14"/>
              <h3 className="uppercase font-babas font-bold text-[32px] leading-[38.4px]">Agency Name</h3>
            </div>
            <h1 className='font-semibold text-2xl line leading-8 text-center'>Leave a Review</h1>
           </div>
            <form className='grid grid-cols-1 gap-8 font-montserrat'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className="grid grid-cols-1">
                  <label htmlFor="email" className='text-gray700 text-sm font-medium leading-5'>
                    Email address <span className="text-redHighlightedColor">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-[1px] border-grayBorder text-inputColor rounded-lg p-2 shadow-shadowXs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label htmlFor="location" className='text-gray700 text-sm font-medium leading-5'>
                    Location  <span className="text-redHighlightedColor">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="border-[1px] border-grayBorder text-inputColor rounded-lg p-2 shadow-shadowXs"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="dropdown" className='text-gray700 text-sm font-medium leading-5'>
                  How long have you been a client?
                </label>
                <div className='grid grid-cols-1 relative'>
                  <select
                    id="dropdown"
                    className='cursor-pointer appearance-none border-[1px] border-grayBorder text-inputColor rounded-lg p-2 relative shadow-shadowXs'
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    required
                  >
                    <option value="" className='pr-2 text-inputColor'>Select an option</option>
                    <option value="option1" className='pr-2'>Less than 6 months</option>
                    <option value="option2" className='pr-2'>Option 2</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 pr-2 ">
                    <img src={dropDownIcon} alt="Arrow down icon" className="w-5" />
                  </div>
                </div>
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
              <div className='grid grid-cols-1 gap-6'>
                <div className="grid grid-cols-1">
                  <label htmlFor="pros" className='text-gray700 text-sm font-medium leading-5'>
                    Pros
                  </label>
                  <textarea
                    id="pros"
                    className="border-[1px] border-grayBorder text-inputColor rounded-lg px-2 py-2 min-h-[105px] shadow-shadowXs"
                    value={pros}
                    onChange={(e) => setPros(e.target.value)}
                    placeholder='Enter pros...'
                    required
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label htmlFor="cons" className='text-gray700 text-sm font-medium leading-5'>
                    Cons
                  </label>
                  <textarea
                    id="cons"
                    className="border-[1px] border-grayBorder text-inputColor rounded-lg px-2 py-2 min-h-[105px] shadow-shadowXs"
                    value={cons}
                    onChange={(e) => setCons(e.target.value)}
                    placeholder='Enter pros...'
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <p className='text-center text-sm font-normal'>In order to validate the authenticity of all reviews on agencyreviews.io, we require an image or PDF of an invoice from the agency</p>
                <div className='grid grid-cols-1'>
                  <label htmlFor="file-input" className="w-[144px] rounded-lg border-[1px] border-grayBorder px-4 py-[10px] text-gray700 grid grid-cols-[auto_auto] justify-center justify-self-center items-center gap-2 shadow-shadowXs">
                    <img src={fileUpload} alt='File upload' className='w-5'  />
                    <span className="capitalize">upload {file && <span>| {file.name}</span>}</span>
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
        <div className='grid grid-cols-[auto_auto] justify-between pt-8 gap-2 font-montserrat'>
          <Link to="/" className='w-[144px] font-semibold px-4 py-[10px] border-2 border-grayBorder text-gray700 rounded-lg text-sm text-center shadow-shadowXs'>Back</Link>
          <button type='submit' className='w-[144px] font-semibold px-4 py-[10px] rounded-lg text-sm bg-primaryColor text-whiteColor shadow-shadowXs' onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserReview