import React from 'react';
import styled from 'styled-components';
import Icon from '@/components/Icon';

const RateStarWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;

    .feather {
        fill: yellow;
        color: transparent;
    }
`;

interface IRateStar {
    rate: number
}

const RateStar: React.FC<IRateStar> = (props) => {
    const { rate } = props;

    const renderStar = () => {
        const star = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < rate; i++) {
            star.push(<Icon key={i} name="star" />);
        }
        return star;
    };
    return (
        <RateStarWrapper>
            {renderStar()}
        </RateStarWrapper>
    );
};

export default RateStar;
