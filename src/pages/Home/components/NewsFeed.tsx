import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
import styled from 'styled-components';
import img from '@/assets/img/hero.jpg';

const NewsFeedWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    background: var(--color-white);
    margin: 40px 0;
    padding: 40px 0;
`;

const SliderWrapper = styled.div`
    position: relative;
    display: block;
    text-align: center;
    width: 100%;
    height: auto;
    padding: 0 15px 20px;
`;

const NewsCard = styled.div`
    position: relative;
    width: 100%;
    background: var(--color-white);
    margin: 20px 0;
    padding: 0 0 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px 6px rgba(0, 0, 0, .08);

    .thumbnail {
        position: relative;
        height: 200px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px 10px 0 0;
    }
`;

const newsArr: any[] = [
    { title: 'John Doe', thumbnail: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'John Doe', thumbnail: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'John Doe', thumbnail: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'John Doe', thumbnail: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'John Doe', thumbnail: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'John Doe', thumbnail: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
];

const NewsFeed: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        <NewsFeedWrapper>
            <h5 className="fs-5 fw-bold mb-3 text-center">News Feed</h5>
            <div className="container">
                <Slider {...settings}>
                    {newsArr.map((i: any, key: any) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <SliderWrapper key={key}>
                            <NewsCard>
                                <div className="thumbnail" style={{ backgroundImage: `url(${i.thumbnail})` }} />
                                <p className="my-2 fw-bold px-2">{i.title}</p>
                                <p className="mb-0 px-2">{i.desc}</p>
                            </NewsCard>
                        </SliderWrapper>
                    ))}
                </Slider>
            </div>
        </NewsFeedWrapper>
    );
};

export default NewsFeed;
