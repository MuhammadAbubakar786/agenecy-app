import React, { ChangeEvent, FormEvent, useState } from 'react'
import star from '../assests/Icons/star.svg'
import outlineStar from '../assests/Icons/start_outline.svg'
import fileUpload from '../assests/Icons/upload_to_cloud.svg'
import dropDownIcon from '../assests/Icons/expand_arrow.svg'
import { Link } from 'react-router-dom';
import LogoMark from '../assests/Icons/Logomark.svg'
import line from '../assests/Icons/line.svg'
function UserReview() {
  const categories = ['Value', 'Domain knowledge', 'Communication', 'World recommendation'];
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [ratings, setRatings] = useState<{ [category: string]: number }>({});
  const isLocationValid = () => location.trim() !== '';
  const isLocationValid1 = () => email.trim() !== '';
  const isLocationValid2 = () => selectedOption.trim() !== '';

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isLocationValid() && isLocationValid1() && isLocationValid2()){
      console.log('Form submitted:', {
        email,
        location,
        selectedOption,
        pros,
        cons,
        file,
        ratings,
      });
    }
    else{
      console.log("Validation error");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };
  const filledStarIcon = (
    <img src={outlineStar} alt='Star' className='w-4'/>
  );

  const outlineStarIcon = (
    <img src={star} alt='Star' className='w-4'/>
  );
  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: rating,
    }));
  };
  return (
    <React.Fragment>
      <div className='mx-[5%] grid grid-cols-1'>
        <div className='mx-auto max-w-[680px] sm:px-0 grid grid-cols-1 py-8'>
          <div className="bg-whiteColor grid grid-cols-1">
              <form className='grid grid-cols-1 gap-6 font-montserrat' onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1">
                  <div className="grid grid-cols-[auto_auto] justify-center items-center gap-4 pb-4 sm:pb-8">
                    <img src={LogoMark} alt="Logo" className="w-11 sm:w-14 mr-auto"/>
                    <h3 className="uppercase font-babas font-bold text-2xl sm:text-[32px] leading-normal tracking-[0.64px]">Agency Name</h3>
                  </div>
                  <h1 className='font-montserrat not-italic font-semibold text-lg sm:text-2xl leading-[30px] text-center '>Leave a Review</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className="grid grid-cols-1 gap-[4px] items-center">
                    <label htmlFor="email" className='font-montserrat text-gray700 text-sm font-medium leading-5 not-italic'>
                      Email address <span className="text-redHighlightedColor">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={!isLocationValid1() ? 'border-[1px] border-redHighlightedColor text-inputColor rounded-lg  px-2 py-3 shadow-shadowXs h-10 self-stretch' : `border-[1px] border-grayBorder text-inputColor rounded-lg  px-2 py-3 shadow-shadowXs h-10 self-stretch`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-[4px]">
                    <label htmlFor="location" className='font-montserrat text-gray700 text-sm font-medium leading-5 not-italic'>
                      Location  <span className="text-redHighlightedColor">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      className={!isLocationValid() ? 'border-[1px] border-redHighlightedColor text-inputColor rounded-lg  px-2 py-3 shadow-shadowXs h-10 self-stretch' : `border-[1px] border-grayBorder text-inputColor rounded-lg  px-2 py-3 shadow-shadowXs h-10 self-stretch`}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-[4px] items-center">
                  <label htmlFor="dropdown" className='font-montserrat text-gray700 text-sm font-medium leading-5 not-italic'>
                    How long have you been a client?
                  </label>
                  <div className='grid grid-cols-1 relative'>
                    <select
                      id="dropdown"
                      className={!isLocationValid2() ? 'font-montserrat text-sm not-italic font-medium appearance-none border-[1px] border-redHighlightedColor text-inputColor rounded-lg pl-2 py-3 leading-5 relative shadow-shadowXs' : `font-montserrat text-sm not-italic font-medium appearance-none border-[1px] border-grayBorder text-inputColor rounded-lg pl-2 py-3 leading-5 relative shadow-shadowXs`}
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      required
                    >
                      <option value="" className='pr-2 text-inputColor'>Select an option</option>
                      <option value="option1" className='pr-2'>Less than 6 months</option>
                      <option value="option2" className='pr-2'>Option 2</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 px-[10px] py-4">
                      <img src={dropDownIcon} alt="Arrow down icon" className="w-[10px]" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 px-3">
                    {categories.map((category) => (
                        <div key={category} className='grid grid-cols-[auto_auto]'>
                          <label htmlFor="Value" className='font-montserrat text-sm font-medium text-textColor not-italic leading-5'>
                            {category}
                          </label>
                          <div id='Value' className='grid auto-cols-auto grid-flow-col justify-self-end'>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <span
                                key={index}
                                onClick={() => handleRatingChange(category, index)}
                                style={{ cursor: 'pointer', margin: '0 3px' }}
                              >
                                {index <= (ratings[category] || 0) ? outlineStarIcon : filledStarIcon}
                              </span>
                            ))}
                          </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-[4px] items-start self-stretch">
                  <label htmlFor="pros" className='font-montserrat text-gray700 text-sm font-medium leading-5 not-italic'>
                    Pros
                  </label>
                  <textarea
                    id="pros"
                    className="font-montserrat border-[1px] border-grayBorder text-sm not-italic font-medium leading-5 h-28 text-inputColor rounded-lg px-3 py-[14px] shadow-shadowXs"
                    value={pros}
                    onChange={(e) => setPros(e.target.value)}
                    placeholder='Pros ...'
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-[4px] items-start self-stretch">
                  <label htmlFor="cons" className='font-montserrat text-gray700 text-sm font-medium leading-5 not-italic'>
                    Cons
                  </label>
                  <textarea
                    id="cons"
                    className="font-montserrat border-[1px] border-grayBorder text-sm not-italic font-medium leading-5 h-28 text-inputColor rounded-lg px-3 py-[14px] shadow-shadowXs"
                    value={cons}
                    onChange={(e) => setCons(e.target.value)}
                    placeholder='Cons ...'
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <p className='text-center text-sm font-normal'>In order to validate the authenticity of all reviews on agencyreviews.io, we require an image or PDF of an invoice from the agency</p>
                  <div className='grid grid-cols-1'>
                    <label htmlFor="file-input" className="font-montserrat not-italic font-semibold leading-5 text-sm rounded-lg border-[1px] border-grayBorder px-4 py-[10px] text-gray700 grid grid-cols-[auto_auto] justify-center justify-self-center items-center gap-2 shadow-shadowXs">
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
                <div className='grid grid-cols-1 py-2'>
                  <img src={line} alt='hori line' className='w-full'/>
                </div>
                <div className='grid grid-cols-[90px_90px] sm:grid-cols-[144px_144px] justify-between gap-2 font-montserrat font-semibold text-xs sm:text-sm'>
                  <Link to="/" className='leading-5 not-italic px-2 py-2 sm:px-4 sm:py-[10px] text-center border-2 border-grayBorder text-gray700 rounded-lg shadow-shadowXs'>Back</Link>
                  <button type='submit' className='border border-red-900 leading-5 not-italic px-2 py-2 sm:px-4 sm:py-[10px] bg-primaryColor text-whiteColor rounded-lg shadow-shadowXs' >Submit</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserReview