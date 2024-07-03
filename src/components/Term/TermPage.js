import React, { useContext, useEffect, useState } from 'react';
import Loader from '../../layouts/Loader';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import Helpers from '../../Config/Helpers';
import { ThemeContext } from '../../layouts/ThemeContext';

function TermPage() {
    const { isLightMode } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [term, setTerm] = useState([]);
    
    const getTerm = async () => {
        const response = await axios.get(`${Helpers.apiUrl}term/show`);
        setTerm(response.data.data);
    };
    
    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([getTerm()]);
            setLoading(false);
        };
        fetchData();
        document.title = "Term & Condition | ClockIn";
    }, []);
    
    return (
        <>
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
                            <h2 className='text-text font-semibold text-3xl pt-8 text-center'>Term & Condition</h2>
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
