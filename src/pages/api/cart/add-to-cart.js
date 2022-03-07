/* eslint-disable prettier/prettier */
import { MAGENTO_BASE_URL } from 'utils/constant';
import { fetchQuoteId } from 'utils/helper';

export default async function handler(req, res) {
  const { body, headers } = req;
  const { authorization } = headers;
  const { sku, qty, option_id, option_value } = body;

  const quoteId = await fetchQuoteId(authorization);

  const parseBody = () => {
    if (option_id) {
      return {
        cartItem: {
          sku: sku,
          qty: qty,
          quote_id: quoteId,
          product_option: {
            extension_attributes: {
              configurable_item_options: [
                {
                  option_id: option_id,
                  option_value: option_value,
                },
              ],
            },
          },
        },
      };
    } else {
      return {
        cartItem: {
          sku: sku,
          qty: qty,
          quote_id: quoteId,
        },
      };
    }
  };

  const bodies = await parseBody();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
    body: JSON.stringify(bodies),
  };

  const url = MAGENTO_BASE_URL + '/carts/mine/items';
  const response = await fetch(url, options);
  const status = await response.status;
  const respond = await response.json();

  if (response?.status !== 200) {
    if (response?.status)
      return res
        .status(response.status)
        .json({ error: respond, status: response.status });

    if (respond.message) {
      return res.status(400).json({ error: respond });
    }
  }

  if (respond.message) {
    return res.status(400).json({ error: respond });
  }

  return res.status(200).json({ data: respond });
}
