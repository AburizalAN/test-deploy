import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  CardContainer,
  CardTitle,
} from 'components/ui/shopping/checkout/checkout.style';
import Select from 'components/ui/shopping/shipping/Select';
import Product from 'components/ui/shopping/shipping/Product';
import PropTypes from 'prop-types';
import SERVICES from 'store/modules/checkout/services';
import Skeleton from 'react-loading-skeleton';

const SubTotal = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const ProductWrapper = styled.div`
  &:nth-child(1) {
    border-top: 1px solid #c4c4c4;
  }
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  border-bottom: 1px solid #c4c4c4;
  padding: 12px 0;
`;

const ProductGroups = ({ item, selectedAddress, addShippingMethod, index }) => {
  const [shippingMethods, setShippingMethods] = useState(null);
  const [payload, setPayload] = useState(null);
  const [loadingCourrierSelect, setLoadingCourrierSelect] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(null);

  useEffect(() => {
    if (selectedAddress?.address_id && item?.payload) {
      const payload = {
        addressId: selectedAddress?.address_id,
        address: item?.payload.address,
      };
      setLoadingCourrierSelect(true);
      SERVICES.getShippingMethods(payload).then((res) => {
        const _data = res.data.map((item) => ({
          shipping_courrier: item,
          label: `${item.carrier_title}-${
            item.method_title
          } (Rp ${new Intl.NumberFormat('id').format(item.price_excl_tax)})`,
        }));
        setLoadingCourrierSelect(false);
        setSelectedShipping(_data[0]);
        setShippingMethods(_data);
      });
    }
  }, [item?.payload, selectedAddress?.address_id]);

  useEffect(() => {
    if (item?.warehouse) {
      setPayload({
        warehouse: item?.warehouse,
        index: index,
      });
    }
  }, [item?.warehouse]);

  useEffect(() => {
    if (selectedShipping) {
      setPayload({
        ...payload,
        shipping_courrier: {
          carrier_code: selectedShipping?.shipping_courrier.carrier_code,
          carrier_title: selectedShipping?.shipping_courrier.carrier_title,
          method_code: selectedShipping?.shipping_courrier.method_code,
          method_title: selectedShipping?.shipping_courrier.method_title,
          price: selectedShipping?.shipping_courrier.price_incl_tax,
        },
      });
    }
  }, [selectedShipping]);

  useEffect(() => {
    if (payload) {
      addShippingMethod(payload);
    }
  }, [payload]);

  console.log('detail item', item);
  console.log('selected shipping', selectedShipping);
  console.log('payload', payload);

  return (
    <ProductWrapper>
      <h6>
        Dari {item.seller_regency_name} Warehouse {item.wh_label}
      </h6>
      {item && shippingMethods ? (
        item.items.map((product) => (
          <Product
            key={product.item_id}
            productProps={{
              image: product.imageUrl,
              name: product.name,
              price: `Rp ${new Intl.NumberFormat('id').format(product.price)}`,
              weight: product.weight,
              qty: product.qty,
              item_id: product.item_id,
            }}
          />
        ))
      ) : (
        <>
          <Skeleton count={3} height="80px" />
        </>
      )}
      {shippingMethods !== null && !loadingCourrierSelect ? (
        <>
          <Select
            selected={selectedShipping}
            setSelected={setSelectedShipping}
            list={shippingMethods}
          />
          <SubTotal>
            <div>Subtotal</div>
            <div>Rp {new Intl.NumberFormat('id').format(item.subtotal)}</div>
          </SubTotal>
        </>
      ) : (
        <>
          <Skeleton height="44px" style={{ marginTop: '12px' }} />
          <Skeleton height="30px" style={{ marginTop: '12px' }} />
        </>
      )}
    </ProductWrapper>
  );
};

ProductGroups.propTypes = {
  item: PropTypes.object,
  selectedAddress: PropTypes.object,
  addShippingMethod: PropTypes.func,
  index: PropTypes.number,
};

ProductGroups.defaultProps = {
  selectedAddress: {},
  item: {},
};

const SummaryComponent = ({
  data,
  subtotal,
  selectedAddress,
  addShippingMethod,
}) => {
  return (
    <CardContainer p="12px">
      <CardTitle mb="12px">Ringkasan Pesanan</CardTitle>
      <div>
        {data.map((item, index) => (
          <ProductGroups
            key={index}
            item={item}
            index={index}
            subtotal={subtotal}
            selectedAddress={selectedAddress}
            addShippingMethod={addShippingMethod}
          />
        ))}
      </div>
    </CardContainer>
  );
};

SummaryComponent.propTypes = {
  data: PropTypes.array,
  subtotal: PropTypes.number,
  selectedAddress: PropTypes.object,
  addShippingMethod: PropTypes.func,
};

export default SummaryComponent;
