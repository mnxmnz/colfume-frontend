import React from 'react';
import styled from 'styled-components';
import { BannerImg } from '../../assets';
import Image from "next/image";

const BannerWrap = styled.div`
& > div {
    z-index: -1;
}

img {
     width: 100%; 
}

p{
    font-size: 100px;
}
`;

const Banner = () => {
    return (
        <BannerWrap>
         <div>
            <Image src={BannerImg} />
         </div>
            <p>test</p>
        </BannerWrap>
    );
};

export default Banner;