async function getTransactionList({
  customerId = 0,
  status,
  startDate,
  endDate,
}) {
  try {
    const res = await fetch(
      `/api/transaction/history-order-list?customerId=${customerId}&status=${status}&start=${startDate}&end=${endDate}`,
      {
        method: 'GET',
      }
    ).then((res) => res.json());

    if (!res?.data) throw res;

    const items = await Promise.all(
      res.data.items.map(
        async ({
          increment_id: id,
          entity_id: orderId,
          updated_at: updatedAt,
          created_at: createdAt,
          payment: { method: paymentMethod },
          status,
          grand_total: grandTotal,
          items: items,
        }) => {
          const res = await fetch(
            `/api/transaction/product/${items[0].sku}`
          ).then((res) => res.json());

          let firstItem = items[0];

          if (res?.data) {
            let {
              sku,
              name,
              extension_attributes: {
                brand: [brand],
              },
              media_gallery_entries: mediaGalleryEntries,
            } = res.data;

            firstItem = {
              sku,
              name,
              brand: JSON.parse(brand),
              mediaGalleryEntries,
            };
          }

          return {
            id,
            orderId,
            updatedAt,
            createdAt,
            paymentMethod,
            status,
            grandTotal,
            items: items.map(({ sku }, index) =>
              index === 0 ? firstItem : { sku }
            ),
          };
        }
      )
    );

    let editedRes = {
      data: {
        ...res.data,
        items,
      },
    };

    return editedRes;
  } catch (err) {
    return err;
  }
}

async function getOrderDetail(orderId) {
  try {
    const res = await fetch(
      `/api/transaction/history-order-detail/${orderId}`,
      {
        method: 'GET',
      }
    ).then((res) => res.json());

    if (!res?.data) throw res;

    const {
      increment_id: incrementId,
      status_order: statusOrder,
      created_at: createdAt,
      payment_method: paymentMethod,
      grand_total: grandTotal,
      subtotal,
      discount_amount: discountAmount,
      shipping_amount: shippingAmount,
      address,
      item_data: items,
    } = res.data;

    // console.log('res order detail', res.data);

    const resEdited = {
      data: {
        orderId: incrementId,
        statusOrder,
        createdAt,
        paymentMethod,
        grandTotal: parseInt(grandTotal),
        subtotal: parseInt(subtotal),
        discountAmount: parseInt(discountAmount),
        shippingAmount: parseInt(shippingAmount),
        address,
        items,
      },
    };

    return resEdited;
  } catch (err) {
    return err;
  }
}

export default {
  getTransactionList,
  getOrderDetail,
};
