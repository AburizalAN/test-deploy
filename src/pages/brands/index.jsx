import { useState, useEffect } from 'react';
import ShoppingLayout from 'components/shopping-layout';
import { InputAdornment } from '@mui/material';
import ACTIONS from 'store/registerActions';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import AppBar from 'components/AppBar';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import {
  ChildWrapper,
  Container,
  FixedContainer,
  ProductContainer,
  FlexContainer,
  Search as SearchInput,
} from 'components/style';

import { TitleSection } from 'components/ui/Shopping/style';

import {
  SectionFeaturedBrands,
  SectionAlphabet,
  SectionListBrands,
  ListBrands,
  BrandsContainer,
} from 'components/ui/Shopping/brands/style';

import { ChevronLeft } from '@mui/icons-material';
import Search from 'components/icons/search';
import Divider from '@mui/material/Divider';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Brands = () => {
  const [alphabetSelected, setAlphabetSelected] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { brands, featuredBrands, loading, loadingFeatured } = useSelector(
    (state) => state.brands
  );

  useEffect(() => {
    dispatch(ACTIONS.brands.getBrands());
    dispatch(ACTIONS.brands.getFeaturedBrands());
  }, []);

  useEffect(() => {
    if (alphabetSelected) {
      const element = document.getElementById(alphabetSelected);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [alphabetSelected]);

  return (
    <Container>
      <AppBar title="Brands Search" noButton backable />
      <ChildWrapper>
        <FlexContainer padding={'10px 0'}>
          <SearchInput
            onClick={() => router.push('/brands/search')}
            className="searchInput"
            variant="outlined"
            placeholder="Cari brands favorit kamu"
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
        <SectionAlphabet>
          {alphabet.split('').map((item, index) => (
            <div onClick={() => setAlphabetSelected(item)} key={index}>
              {item}
            </div>
          ))}
        </SectionAlphabet>
        <Divider variant={'middle'} />
        <SectionListBrands>
          {loading
            ? [...Array(6)].map((item, i) => (
                <ListBrands key={i}>
                  <h4>
                    <Skeleton width="30%" />
                  </h4>
                  <p>
                    {[...Array(9)].map((item, i) => (
                      <Skeleton width="90%" key={i} />
                    ))}
                  </p>
                </ListBrands>
              ))
            : brands.map((object) => (
                <ListBrands key={object.alphabet} id={object.alphabet}>
                  <h4>{object.alphabet}</h4>
                  <p>
                    {object.brand_list.map((brand) => (
                      <Link
                        href={`/brands/${brand.url_key}`}
                        key={brand.brand_id}
                        passHref
                      >
                        <div
                          onClick={() =>
                            ACTIONS.brands.setBrandProps({
                              id: brand.brand_id,
                              name: brand.name,
                            })
                          }
                        >
                          {brand.name}
                        </div>
                      </Link>
                    ))}
                  </p>
                </ListBrands>
              ))}
        </SectionListBrands>
        <Divider variant={'middle'} />
        <SectionFeaturedBrands>
          <TitleSection title="Featured Brands" justifyContent="start" />
          <BrandsContainer>
            {loadingFeatured
              ? [...Array(6)].map((item, i) => (
                  <div key={i} className="brand-wrapper">
                    <Skeleton
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                      }}
                    />
                  </div>
                ))
              : featuredBrands.map((brand) => (
                  <Link
                    href={`/brands/${brand.brand_id}?name=${brand.name}`}
                    key={brand.id}
                    passHref
                  >
                    <div
                      onClick={() =>
                        ACTIONS.brands.setBrandProps({
                          id: brand.brand_id,
                          name: brand.name,
                        })
                      }
                      className="brand-wrapper"
                    >
                      <img src={brand.small_image} />
                    </div>
                  </Link>
                ))}
          </BrandsContainer>
        </SectionFeaturedBrands>
      </ChildWrapper>
    </Container>
  );
};

export default Brands;
