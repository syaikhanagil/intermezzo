/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '@/components/Icon';

const AccordionWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    background: var(--color-canvas);
    box-shadow: 0 4px 12px 6px rgba(0, 0, 0, .08);
    padding: 10px 1rem;
    border-radius: 10px;
    transition: .3s ease;
    margin: 15px 0 0;
    cursor: pointer;

    &:first-of-type {
        margin: 0;
    }
    
    &:hover {
        box-shadow: 0 4px 8px 6px rgba(0, 0, 0, .04);
    }
`;

const AccordionHeader = styled.div`
    position: relative;
    display: block;
    color: var(--color-black);
    padding: 10px 0;

    .feather {
        width: 16px;
        height: 16px;
    }

    span {
        vertical-align: middle;
        margin-left: 10px;
    }
`;

const AccordionBody = styled.div`
    position: relative;
    display: block;
    color: var(--color-black);
    padding: 5px 0;
`;

interface IAccordionProps {
    title: string
    body: string
}

const Accordion: React.FC<IAccordionProps> = (props) => {
    const { title, body } = props;
    const [expand, setExpand] = useState(false);

    return (
        <AccordionWrapper>
            <AccordionHeader onClick={() => setExpand(!expand)}>
                <Icon name="plus" />
                <span>{title}</span>
            </AccordionHeader>
            {expand ? (
                <AccordionBody>
                    <span dangerouslySetInnerHTML={{ __html: body }} />
                </AccordionBody>
            ) : null}
        </AccordionWrapper>
    );
};

export default Accordion;
