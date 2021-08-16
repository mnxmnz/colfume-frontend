import React from 'react';
import styled from 'styled-components';
import { MobileMenuIcon, Logo } from '../../assets';
import Image from 'next/image';

const Wrap = styled.div``;

const MobileHeader = () => {
  return (
    <Wrap>
      <Image src={Logo} id="Logo" alt="" />
      <Image src={MobileMenuIcon} id=" MobileMenuIcon" alt="" />
    </Wrap>
  );
};

export default MobileHeader;
