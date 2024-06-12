import React, { useEffect, useState } from "react";
import Stats from "./Stats";
import DashboardComp from "./DashboardComp";
import Plan from "./Plan";
import Achievements from "./Achievements";
import Footer from "../../layouts/Footer";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedText from "../../layouts/AnimatedText";
import FeatureCard from "./FeatureCard";
import Helpers from "../../Config/Helpers";
import axios from "axios";
const Hero = ({ secondImage, thirdImage1, thirdImage2, thirdImage3 ,secondcontent1,secondcontent2,secondcontent3 ,thirdcontent1 , thirdcontent2 ,fourthcontent1 ,fourthcontent2 ,fifthcontent1 ,fifthcontent2}) => {
    const [feature, setFeatures] = useState([])
    const getFeatures = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}getfeature`);
            console.log('response', response);
            setFeatures(response.data.data);
        } catch (error) {
            console.log("error in fetching data", error);
        }
    };

    useEffect(() => {
        getFeatures();
    }, []);
    const chunkedFeatures = Helpers.chunkArray(feature, 3);

    return (
        <section className="bg-pinkbackground mt-8">
            <div className="container mx-auto">
                <AnimatedText>
                    <h2 className="text-text font-bold text-center py-8 sm:py-10 md:py-12 lg:py-16 text-xl lg:text-4xl">
                        Our Application Features
                    </h2>
                </AnimatedText>
                <div>
                    <AnimatedText>
                        {chunkedFeatures.map((featureChunk, chunkIndex) => (
                            <Swiper
                                key={chunkIndex}
                                modules={[Navigation, Pagination, Scrollbar]}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                spaceBetween={30}
                                navigation
                                pagination={{
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                        return `<span class="${className} mx-1 rounded-full cursor-pointer transition duration-150 ease-in-out h-3 w-3 mt-10 ${index === 0 ? "bg-[#FF7A50]" : "bg-gray-500"
                                            }"></span>`;
                                    },
                                }}
                                scrollbar={{ draggable: true }}
                                className="mySwiper"
                                style={{ position: "relative" }}
                            >
                                {featureChunk.map((feature, index) => (
                                    <SwiperSlide key={index}>
                                        <FeatureCard
                                            href={feature.href}
                                            imgSrc={`${Helpers.basePath}/storage/${feature.image}`}
                                            title={feature.heading}
                                            description={feature.paragraph}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ))}
                    </AnimatedText>
                </div>
            </div>

            <AnimatedText>
                <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 lg:px-[160px] py-8 container mx-auto">
                    <div className="text-center lg:text-left lg:order-1 order-2">
                        <h2 className="text-text font-bold lg:text-4xl text-2xl mb-4 lg:mb-8">
                            {secondcontent1 || "Why we are the best & customers choose us"}
                        </h2>
                        <p className="text-text mb-4 md:mb-8">
                        {secondcontent2 || "Efficiency personalized. Clients choose us for seamless time tracking and unparalleled results."}
                        </p>
                        <button className="mt-4 md:mt-8 lg:mt-12 bg-[#FF7A50] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300">
                        {secondcontent3 || "Learn more"}                      
                         </button>
                    </div>
                    <img
                        src={`${Helpers.basePath}${secondImage}` ? '/assets/f7.png' : ''}
                        alt="whyus"
                        className="mt-8 lg:mt-0 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg lg:order-2 order-1"
                    />
                </div>
            </AnimatedText>
            <AnimatedText>
                <Stats />
            </AnimatedText>
            <DashboardComp
                thirdImage1={thirdImage1}
                thirdImage2={thirdImage2}
                thirdImage3={thirdImage3}
                thirdcontent1={thirdcontent1}
                thirdcontent2={thirdcontent2}
                fourthcontent1={fourthcontent1}
                fourthcontent2={fourthcontent2}
                fifthcontent1={fifthcontent1}
                fifthcontent2={fifthcontent2}
            />
            <AnimatedText>
                <Plan />
            </AnimatedText>
            <AnimatedText>
                <Achievements />
            </AnimatedText>
            <Footer />
        </section>
    );
};

export default Hero;
