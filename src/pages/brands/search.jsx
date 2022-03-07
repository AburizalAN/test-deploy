import { useCallback } from 'react';
import AppBar from 'components/AppBar';
import { InputAdornment } from '@mui/material';
import Search from 'components/icons/search';
import { debounce } from 'utils/helper';
import ACTIONS from 'store/registerActions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MainContainer,
  ChildWrapper,
  Container,
  FixedContainer,
  ProductContainer,
  FlexContainer,
  Search as SearchInput,
} from 'components/style';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const SearchItem = styled(Box)`
  color: #6f6f6f;
`;

const BrandSearch = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchBrandList, loadingSearch } = useSelector(
    (state) => state.brands
  );

  const handleBack = () => {
    const storage = globalThis.sessionStorage;

    const defaultBackUrl = '/brands';

    let prevUrl = storage?.prevPath ?? defaultBackUrl;
    if (prevUrl === 'null') {
      prevUrl = defaultBackUrl;
    }

    router.push(prevUrl);
  };

  const handleChange = (value) => {
    dispatch(ACTIONS.brands.getSearchBrandList(value));
  };

  const optimizedFn = useCallback(debounce(handleChange, 1000), []);

  return (
    <MainContainer>
      <AppBar
        title="Brands Search"
        backUrl={`/brands`}
        backable
        noButton
        onBackClick={handleBack}
      />
      <ChildWrapper>
        <FlexContainer padding={'10px 0'}>
          <SearchInput
            className="searchInput"
            variant="outlined"
            placeholder="Cari brands favorit kamu"
            onChange={(e) => optimizedFn(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="iconWrap">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{
              margin: '0 12px',
            }}
          />
        </FlexContainer>
        <Box p="12px">
          {loadingSearch ? (
            <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
              <CircularProgress />
            </Box>
          ) : searchBrandList.length == 0 ? (
            <SearchItem>Hasil tidak ditemukan</SearchItem>
          ) : (
            searchBrandList.map((brand) => {
              return (
                <Link
                  key={brand.brand_id}
                  href={`/brands/${brand.brand_id}?name=${brand.name}`}
                  passHref
                >
                  <SearchItem mb="12px">{brand.name}</SearchItem>
                </Link>
              );
            })
          )}
        </Box>
      </ChildWrapper>
    </MainContainer>
  );
};

export default BrandSearch;
