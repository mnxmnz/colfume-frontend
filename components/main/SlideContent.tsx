import React from 'react';
import styled from 'styled-components';

interface Props {
    datum: object;
    // image: string;
    // keyword: string;
}

function SlideContent( props: Props) {
    const image = props.datum.image.src;
    const keyword = props.datum.keyword;

    return (
        <ContentWrap>
            <img src={image} alt={keyword}/>
        </ContentWrap>
    );
}

export default SlideContent;

const ContentWrap = styled.div`
    width: 21.3rem;
    margin: 0;

    img {
        width: 21.3rem;
        height: 27.7rem;
    }
`