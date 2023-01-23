import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
import styled from 'styled-components';
import img from '@/assets/img/hero.jpg';
import RateStar from '@/components/RateStar';

const ReviewWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    background: var(--color-white);
    margin: 30px 0;
    padding: 50px 0;
`;

const SliderWrapper = styled.div`
    position: relative;
    display: block;
    text-align: center;
    width: 100%;
    height: auto;
    padding: 0 25px 20px;
`;

const NewsCard = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    margin: auto;
    background: var(--color-white);
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 12px 6px rgba(0, 0, 0, .08);

    .profile-img {
        position: relative;
        height: 100px;
        width: 100px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 100px;
    }
`;

const newsArr: any[] = [
    { title: 'John Doe', thumbnail: img, rate: 3, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'John Doe', thumbnail: img, rate: 5, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'John Doe', thumbnail: img, rate: 1, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'John Doe', thumbnail: img, rate: 4, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'John Doe', thumbnail: img, rate: 2, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'John Doe', thumbnail: img, rate: 5, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
];

const Review: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <ReviewWrapper>
            <h5 className="fs-5 fw-bold mb-3 text-center">Clucth Review</h5>
            <p className="mb-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="container">
                <Slider {...settings}>
                    {newsArr.map((i: any, key: any) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <SliderWrapper key={key}>
                            <NewsCard>
                                <div className="profile-img" style={{ backgroundImage: `url(${i.thumbnail})` }} />
                                <RateStar rate={i.rate} />
                                <p className="my-2 fw-bold">{i.title}</p>
                                <p className="mb-0 px-2">{i.desc}</p>
                            </NewsCard>
                        </SliderWrapper>
                    ))}
                </Slider>
            </div>
        </ReviewWrapper>
    );
};

export default Review;
