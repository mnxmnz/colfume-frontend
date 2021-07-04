import React from 'react';
import SearchBar from './SearchBar';
import SelectKeyword from './SelectKeyword';
import ImageTable from './ImageTable';
import styled from 'styled-components';

const Layout = styled.div`
    margin-top: 7.3rem;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

function SearchWrap() {
  return (
    <Layout>
       <SearchBar />
    </Layout>
  );
}

export default SearchWrap;
