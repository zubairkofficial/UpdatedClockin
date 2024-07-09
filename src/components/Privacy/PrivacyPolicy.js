import React, { useContext, useEffect, useState } from 'react';
import Loader from '../../layouts/Loader';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import Helpers from '../../Config/Helpers';
import { ThemeContext } from '../../layouts/ThemeContext';
import { SEOContext } from '../../Config/SEOContext';
import { Helmet } from 'react-helmet';

function PrivacyPolicy() {
    const { isLightMode } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    const getNews = async () => {
        const response = await axios.get(`${Helpers.apiUrl}privacy/show`);
        setNews(response.data.data);
    };

    const { seoData, fetchSEOData } = useContext(SEOContext);
    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([getNews()]);
            setLoading(false);
        };
        fetchSEOData('privacy');
        fetchData();
        document.title = "Privacy & Policy | ClockIn";
    }, []);

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
                    <div
                        className='bg-cover bg-center bg-no-repeat h-[37vh] lg:h-[50vh] w-full'
                        style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}
                    >
                        <Header />
                        <div className='py-5 mt-10'>
                            <h1 className='text-text font-semibold text-3xl pt-8 text-center'>Privacy & Policy</h1>
                        </div>
                    </div>
                    <div className='container mx-auto my-10 pl-20  '>
                        {news.map((item, index) => (
                            <div
                                key={index}
                                className="ckeditor-output"
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        ))}
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default PrivacyPolicy;
