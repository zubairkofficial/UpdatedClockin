import React, { useContext, useEffect, useState } from 'react';
import JustHeader from '../download/JustHeader'
import FaqsCards from './FaqsCards';
import Header from '../../layouts/Header';
import { ThemeContext } from '../../layouts/ThemeContext';
import Footer from '../../layouts/Footer';
import AnimatedText from '../../layouts/AnimatedText';
import axios from 'axios';
import Helpers from '../../Config/Helpers';
import Loader from '../../layouts/Loader';
import { SEOContext } from '../../Config/SEOContext';
import { Helmet } from 'react-helmet';

const SearchBar = () => {
  const { isLightMode } = useContext(ThemeContext);
  const [currentContent, setCurrentContent] = useState({
    "faq-1": "",
  });
  const [loading, setLoading] = useState(true);
  
  const { seoData, fetchSEOData } = useContext(SEOContext);
  useEffect(() => {
    fetchSEOData('FAQs');
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
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await Promise.all([fetchContent()]);
      setLoading(false);
    };
    fetchData();
    document.title = "FAQs | ClockIn";
  }, [isLightMode]);
  // useEffect(() => {
  //   document.title = "FAQs | ClockIn"
  //   fetchContent()
  // },[])
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // searchQuery.filter('edit')
    console.log(`Searching for: ${searchQuery}`);
  };
  const fetchContent = async () => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}content/show`);
      const fetchedContent = {};
      const sections = [
        "faq-1",
      ];
      sections.forEach(section => {
        const content = response.data.data.find(item => item.section === section);
        if (content) {
          fetchedContent[section] = content.content;
        }
      });
      // console.log("coi", fetchedContent);
      setCurrentContent(fetchedContent);
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

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
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className='bg-cover bg-center bg-no-repeat h-auto w-full' style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
            <Header />
            <div className='py-5 mt-10'>
              {/* <AnimatedText>   */}
              <h1 className='text-text font-semibold text-3xl pt-8 text-center'>{currentContent['faq-1'] || "How Can We Help You?"}</h1>
              {/* </AnimatedText>  */}
            </div>
            {/* seacrh input field */}
            <div className='flex items-center justify-center pb-8'>
              <div className=" px-4 flex justify-center items-center w-[80%] lg:w-[45%] rounded-full" style={{ height: '5rem' }}>

                {/* <AnimatedText> */}
                <div className="flex items-center bg-inputcolor rounded-full overflow-hidden flex-grow">
                  <input
                    type="text"
                    className="p-3 pl-8 text-gray-300 focus:outline-none w-[100%] bg-inputcolor"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    className="bg-[#FF7A50] hover:bg-orange-700 text-white p-4 rounded-full transition-colors duration-200"
                    onClick={handleSearch}
                  >
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </div>
                {/* </AnimatedText> */}
              </div>
            </div>
          </div>
          <div>
            <FaqsCards searchQuery={searchQuery} />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;