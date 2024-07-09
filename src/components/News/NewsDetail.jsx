import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Helpers from '../../Config/Helpers';
import Header from '../../layouts/Header';
import { ThemeContext } from '../../layouts/ThemeContext';
import Footer from '../../layouts/Footer';
import Loader from '../../layouts/Loader';

function NewsDetail() {
    const { isLightMode } = useContext(ThemeContext);
    const { slug } = useParams();
    const [newsDetail, setNewsDetail] = useState(null);
    const [recentNews, setRecentNews] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await Promise.all([getNewsDetail(), getRecentNews()])
            setLoading(false);
        }
        fetchData()
        // getNewsDetail();
        // getRecentNews();
    }, [slug]);

    const getNewsDetail = async () => {
        const response = await axios.get(`${Helpers.apiUrl}news/detail/${slug}`);
        setNewsDetail(response.data.data);
    };

    const getRecentNews = async () => {
        const response = await axios.get(`${Helpers.apiUrl}news/latest`);
        setRecentNews(response.data.data);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <div className='bg-cover bg-center bg-no-repeat h-auto w-full' style={{ backgroundImage: `url(${isLightMode ? '/assets/bg1.png' : '/assets/bg2.png'})` }}>
                        <Header />
                        <div className='py-5 mt-10'>
                            <h1 className='text-text font-semibold text-3xl pt-8 text-center pb-14'>News & Article</h1>
                        </div>

                    </div>
                    <div className="container mx-auto px-4 py-12">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-8/12 px-4">
                                {newsDetail && (
                                    <div className="bg-pinkbackground rounded-lg shadow-lg p-6 mb-8">
                                        <img className="w-full h-64 object-cover rounded-lg mb-6" src={`${Helpers.basePath}/storage/${newsDetail.image}`} alt={newsDetail.title} />
                                        <h1 className="text-2xl font-bold mb-4">{newsDetail.title}</h1>
                                        <p className="text-text ckeditor-output" dangerouslySetInnerHTML={{ __html : newsDetail.description}}>
                                        </p>
                                        {/* {newsDetail.description} */}
                                    </div>
                                )}
                            </div>
                            <div className="w-full md:w-4/12 px-4">
                                <h2 className="text-xl font-bold mb-4">Recent News</h2>
                                {recentNews.map(news => (
                                    <div key={news.id} className="bg-pinkbackground rounded-lg shadow-lg p-4 mb-4">
                                        <img className="w-full h-32 object-cover rounded-lg mb-4" src={`${Helpers.basePath}/storage/${news.image}`} alt={news.title} />
                                        <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                                        <a href={`/news/${news.slug}`} className="text-primary">Read more</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default NewsDetail;
