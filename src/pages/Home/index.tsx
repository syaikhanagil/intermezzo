import React from 'react';
import Main from '@/layouts/Main';
import Hero from '@/pages/Home/components/Hero';
import OurTeam from '@/pages/Home/components/OurTeam';
import Hearing from '@/pages/Home/components/Hearing';
import StartProject from '@/pages/Home/components/StartProject';
import NewsFeed from '@/pages/Home/components/NewsFeed';
import OurGallery from '@/pages/Home/components/OurGallery';
import CaseStudy from '@/pages/Home/components/CaseStudy';
import OurServices from '@/pages/Home/components/OurServices';
import Faq from '@/pages/Home/components/Faq';
import OurClient from '@/pages/Home/components/OurClient';
import Review from '@/pages/Home/components/Review';

const Home: React.FC = () => {
    return (
        <Main>
            <Hero />
            <OurGallery />
            <CaseStudy />
            <OurClient />
            <OurServices />
            <Review />
            <Hearing />
            <NewsFeed />
            <StartProject />
            <OurTeam />
            <Faq />
        </Main>
    );
};

export default Home;
