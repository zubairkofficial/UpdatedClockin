import React, { useContext, useEffect, useState } from 'react';
import JustHeader from '../download/JustHeader'
import Header from '../../layouts/Header';
import { ThemeContext } from '../../layouts/ThemeContext';
import Footer from '../../layouts/Footer';
import AnimatedText from '../../layouts/AnimatedText';
import Cards from './Cards';
import Loader from '../../layouts/Loader';
import Helpers from '../../Config/Helpers';
import axios from 'axios';

function News() {
  const { isLightMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([])
  const getNews = async () => {
    const response = await axios.get(`${Helpers.apiUrl}news/show`);
    setNews(response.data.data)
  }
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getNews(),]);
      setLoading(false);
    };
    fetchData();
    document.title = "News & Article | ClockIn"
  }, [])
  const chunkedNews = Helpers.chunkArray(news, 4);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className='bg-cover bg-center bg-no-repeat h-auto w-full' style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
            <Header />
            <div className='py-5 mt-10'>
              <h2 className='text-text font-semibold text-3xl pt-8 text-center'>News & Article</h2>
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