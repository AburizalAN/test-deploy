import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductPremiumItem = ({ data }) => {
  return (
    <Wrapper>
      <div className="promo">PROMO</div>
    </Wrapper>
  );
};

export default ProductPremiumItem;

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  width: 132px;
  flex-shrink: 0;
  margin-right: 12px;

  .promo {
    background: #a0c16b;
    border-radius: 0 0 15px 0;
    width: 74px;
    padding: 4px 12px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.25px;
    color: #ffffff;
  }
`;

ProductPremiumItem.propTypes = {
  data: PropTypes.objectOf({
    phoneNumber: PropTypes.string,
    am_product_benefit: PropTypes.string,
    attribute_set_id: PropTypes.string,
    brand_id: PropTypes.string,
    brand_name: PropTypes.string,
    category_ids: PropTypes.arrayOf(PropTypes.string),
    country_of_manufacture: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    dikelola_oleh: PropTypes.string,
    disabled_deliver_with_jne: PropTypes.string,
    entity_id: PropTypes.string,
    extension_attributes: PropTypes.object,
    gift_message_available: PropTypes.string,
    has_options: PropTypes.string,
    image: PropTypes.string,
    is_exclusive_product_awal_mula: PropTypes.string,
    is_salable: PropTypes.number,
    is_sold_product_manual: PropTypes.string,
    lokasi: PropTypes.string,
    media_gallery: PropTypes.object,
    meta_description: PropTypes.string,
    meta_keyword: PropTypes.string,
    meta_title: PropTypes.string,
    msrp_display_actual_price_type: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    options_container: PropTypes.string,
    position: PropTypes.string,
    price: PropTypes.string,
    product_diet: PropTypes.array,
    quantity_and_stock_status: PropTypes.object,
    required_options: PropTypes.string,
    short_description: PropTypes.string,
    size: PropTypes.string,
    sku: PropTypes.string,
    small_image: PropTypes.string,
    special_from_date: PropTypes.string,
    special_price: PropTypes.string,
    status: PropTypes.string,
    swatch_image: PropTypes.string,
    tax_class_id: PropTypes.string,
    thumbnail: PropTypes.string,
    tier_price: PropTypes.array,
    tier_price_changed: PropTypes.number,
    type_id: PropTypes.string,
    updated_at: PropTypes.string,
    url_key: PropTypes.string,
    visibility: PropTypes.string,
    warehouse_data: PropTypes.object,
  }),
};
