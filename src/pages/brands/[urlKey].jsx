import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ChildWrapper, MainContainer } from 'components/style';
import AppBar from 'components/AppBar';
import IconButton from '@mui/material/IconButton';
import Search from 'components/icons/search';
import { useRouter } from 'next/router';
import SimpleSkeleton from 'components/loading/SimpleSkeleton';
import { SectionProduct } from 'components/ui/Product/style';
import { useSelector, useDispatch } from 'react-redux';
import ListBrandProducts from 'components/ui/Product/card/ListBrandProducts';
import ACTIONS from 'store/registerActions';

const ListProduct = () => {
  const { brandProducts, loading } = useSelector((state) => state.brands);

  if (loading !== true) {
    return <ListBrandProducts product={brandProducts} />;
  } else {
    return (
      <SectionProduct>
        <SimpleSkeleton height={760} onLoad={true}>
          <div />
        </SimpleSkeleton>
      </SectionProduct>
    );
  }
};

const BrandProducts = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);

  const handleBack = () => {
    const storage = globalThis.sessionStorage;

    const defaultBackUrl = '/brands';

    let prevUrl = storage?.prevPath ?? defaultBackUrl;
    if (prevUrl === 'null') {
      prevUrl = defaultBackUrl;
    }

    router.push(prevUrl);
  };

  useEffect(() => {
    const brandProps = localStorage.getItem('brandProps');

    if (brandProps) {
      setId(JSON.parse(brandProps).id);
      setName(JSON.parse(brandProps).name);
    }

    return () => {
      dispatch(ACTIONS.brands.resetBrandProducts());
    };
  }, []);

  useEffect(() => {
    if (id) dispatch(ACTIONS.brands.getBrandProducts(id));
  }, [id]);

  return (
    <MainContainer>
      <AppBar
        title={name}
        backable
        backUrl="/brands"
        onBackClick={handleBack}
        buttonComponent={
          <IconButton
            onClick={() => router.push('/search')}
            sx={{ padding: 0 }}
          >
            <Search sx={{ width: 24, height: 24, color: 'primary.main' }} />
          </IconButton>
        }
      />
      <ChildWrapper>
        <ListProduct />
      </ChildWrapper>
    </MainContainer>
  );
};

export default BrandProducts;
