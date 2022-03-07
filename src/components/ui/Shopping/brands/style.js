import styled from 'styled-components';

export const SectionFeaturedBrands = styled.section`
  padding: 0;
  margin-top: 12px;
`;

export const BrandsContainer = styled.div`
  padding-top: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 20px;
  .brand-wrapper {
    overflow: hidden;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
`;

export const SectionAlphabet = styled.section`
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  div {
    cursor: pointer;
    padding: 4px 8px;
    margin-right: 10px;
    margin-bottom: 10px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const SectionListBrands = styled.section`
  position: relative;
  padding: 12px 0;
  margin: 24px 12px;
  max-height: 256px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 100px;
    background-color: #c4c4c4;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a1a1a1;
    border-radius: 100px;
  }
`;

export const ListBrands = styled.div`
  h4 {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
  }
  p {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 4px;
    margin: 8px 24px 12px 0;
  }
`;
