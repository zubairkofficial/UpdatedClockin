import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Helpers from "../../Config/Helpers";
import { SEOContext } from "../../Config/SEOContext";
import { Helmet } from "react-helmet";

const AskQuestionForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    help: '',
    image: null
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Helpers.apiUrl}question/store`, formData, {
        headers: { 'content-Type': 'multipart/form-data' }
      })
      Helpers.toast("success", response.data.success)
      // console.log("success", response.data.success)
      resetForm()
    } catch (error) {
      console.log('Error saving data', error)
    }
  }
  const resetForm = () => {
    setFormData({
      email: '',
      help: '',
      subject: '',
      image: null
    })
  }
  
  const { seoData, fetchSEOData } = useContext(SEOContext);
  useEffect(() => {
    fetchSEOData('Support');
    document.title = "Contact Us | ClockIn";
  }, []);
  
  useEffect(() => {
    if (seoData && seoData.schema_markup) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = seoData.schema_markup;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [seoData]);
  return (
    <>
     {seoData && (
      <Helmet>
        {/* <title>{seoData.title}</title> */}
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonical} />
        {Array.isArray(seoData.og) && seoData.og.map((ogTag, index) => (
            <meta key={index} property={`og:${ogTag.property}`} content={ogTag.content} />
          ))}
      </Helmet>
    )}
    <div className="flex flex-col items-center justify-center min-h-screen bg-pinkbackground ">
      <div className="w-full max-w-[85%] bg-pinkbackground lg:p-8 p-6 rounded-xl shadow-2xl mt-[-15%] lg:mt-[-15%]">
        <div className="p-3">
          <h2 className="text-text text-2xl">Ask your Question</h2>
          <p className="text-gray-500 py-2 text-sm">
            We will send an email to you with in 24 hours.
          </p>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-text text-md font-semibold pl-4">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject here"
              value={formData.subject}
              onChange={handleInputChange}
              className="text-sm mt-2 appearance-none block w-full bg-inputcolor text-text rounded-full py-5 px-5 leading-tight focus:outline-none focus:bg-inputcolor"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="text-text text-md font-semibold pl-4">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email here"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className="text-sm mt-2 appearance-none block w-full bg-inputcolor text-text rounded-full py-5 px-5 leading-tight focus:outline-none focus:bg-inputcolor"
            />
          </div>
        </div>

        <div className=" w-full mb-6 ">
          <label className="text-text font-semibold pl-4 pt-6">
            How we can help?
          </label>
          <textarea
            placeholder="Write here..."
            name="help"
            onChange={handleInputChange}
            value={formData.help}
            className="appearance-none block w-full bg-inputcolor text-text rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-inputcolor h-[40vh] mt-5"
          ></textarea>
        </div>

        <div className="flex space-x-3 justify-end items-end">
          {/* Add File Button */}
          <button className="flex items-center justify-center hover:bg-orange-600 text-text font-semibold py-2 px-4 rounded-full">
            <label htmlFor="file-upload" className="flex items-center cursor-pointer">
              <img src="assets/attach-file-icon.png" alt="Attach File" />
              Add File
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              // value={formData.image}
              onChange={handleImageChange}
            />
          </button>


          {/* Send Button */}
          <button className="bg-[#FF8B42] hover:bg-orange-600 text-white font-semibold py-2 px-7 rounded-lg" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AskQuestionForm;
