import React from 'react';

interface IMainProps {
    children: React.ReactNode | any
}

const Main: React.FC<IMainProps> = (props) => {
    const { children } = props;
    return (
        <div>
            {children}
        </div>
    );
};

export default Main;
