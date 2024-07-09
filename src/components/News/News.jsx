import React, { useContext, useEffect, useState } from 'react';
import Header from '../../layouts/Header';
import { ThemeContext } from '../../layouts/ThemeContext';
import Footer from '../../layouts/Footer';
import Cards from './Cards';
import Loader from '../../layouts/Loader';
import Helpers from '../../Config/Helpers';
import axios from 'axios';
import { SEOContext } from '../../Config/SEOContext';
import { Helmet } from 'react-helmet';

function News() {
  const { isLightMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([])
  const getNews = async () => {
    const response = await axios.get(`${Helpers.apiUrl}news/show`);
    setNews(response.data.data)
  }
  
  const { seoData, fetchSEOData } = useContext(SEOContext);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await Promise.all([getNews(),]);
      setLoading(false);
    };
    fetchData();
    fetchSEOData('news');
    document.title = "News & Article | ClockIn"
  }, [])
  
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
  const chunkedNews = Helpers.chunkArray(news, 4);

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
          <div className='bg-cover bg-center bg-no-repeat h-[37vh] lg:h-[50vh] w-full' style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
            <Header />
            <div className='py-5 mt-10'>
              <h1 className='text-text font-semibold text-3xl pt-8 text-center'>News & Article</h1>
            </div>
            {/* seacrh input field */}
            <div className='flex items-center justify-center pb-8'>
              <div className=" px-4 flex justify-center items-center w-[80%] lg:w-[45%] rounded-full" style={{ height: '5rem' }}>
              </div>
            </div>
          </div>
          <div>
            <Cards chunkedNews={chunkedNews} />
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}

export default News