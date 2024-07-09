import React, { useContext, useEffect, useState } from 'react';
import Loader from '../../layouts/Loader';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import Helpers from '../../Config/Helpers';
import { ThemeContext } from '../../layouts/ThemeContext';
import { SEOContext } from '../../Config/SEOContext';
import { Helmet } from 'react-helmet';

function TermPage() {
    const { isLightMode } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [term, setTerm] = useState([]);

    const getTerm = async () => {
        const response = await axios.get(`${Helpers.apiUrl}term/show`);
        setTerm(response.data.data);
    };

    const { seoData, fetchSEOData } = useContext(SEOContext);
    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([getTerm()]);
            setLoading(false);
        };
        fetchData();
        document.title = "Terms & Condition | ClockIn";
        fetchSEOData('term');
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
                            <h1 className='text-text font-semibold text-3xl pt-8 text-center'>Term & Condition</h1>
                        </div>
                    </div>
                    <div className='container mx-auto my-10 pl-20  '>
                        {term.map((item, index) => (
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

export default TermPage;
