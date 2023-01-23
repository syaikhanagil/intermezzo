import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import feather from 'feather-icons';

interface IIconProps {
    name: string
}

const Icon: React.FC<IIconProps> = (props) => {
    const { name } = props;

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <i data-feather={name} />
    );
};

export default Icon;
