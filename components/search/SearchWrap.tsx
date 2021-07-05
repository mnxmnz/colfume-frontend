import React from 'react';
import SearchBar from './SearchBar';
import SelectKeyword from './SelectKeyword';
import ImageTable from './ImageTable';
import styled from 'styled-components';

function SearchWrap() {
  return (
    <Layout>
      <SearchBar />
      <SelectKeyword />
      <ImageTable />
    </Layout>
  );
}

const Layout = styled.div`
  margin-top: 7.3rem;
`;

export default SearchWrap;
