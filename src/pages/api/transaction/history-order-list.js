async function getAll(req, res) {
  const {
    cookies: { AMToken },
    query: {
      currentPage = 1,
      pageSize = 10,
      customerId = 0,
      status,
      start,
      end,
    },
  } = req;

  const url =
    `${process.env.API_URL}/rest/default/V1/customer/order/history` +
    `?searchCriteria[currentPage]=${currentPage}` +
    `&searchCriteria[pageSize]=${pageSize}` +
    '&searchCriteria[sortOrders][0][field]=entity_id' +
    `&searchCriteria[sortOrders][0][direction]=DESC` +
    `&searchCriteria[filter_groups][0][filters][0][condition_type]=eq` +
    `&searchCriteria[filter_groups][0][filters][0][field]=customer_id` +
    `&searchCriteria[filter_groups][0][filters][0][value]=${customerId}` +
    `${
      status
        ? status.includes(',')
          ? `${status
              .split(',')
              .map(
                (stat, idx) =>
                  `&searchCriteria[filter_groups][1][filters][${idx}][condition_type]=eq` +
                  `&searchCriteria[filter_groups][1][filters][${idx}][field]=status` +
                  `&searchCriteria[filter_groups][1][filters][${idx}][value]=${stat}`
              )
              .join('')}`
          : `&searchCriteria[filter_groups][1][filters][0][condition_type]=eq` +
            '&searchCriteria[filter_groups][1][filters][0][field]=status' +
            `&searchCriteria[filter_groups][1][filters][0][value]=${status}`
        : ''
    }` +
    `${
      start
        ? `&searchCriteria[filter_groups][2][filters][0][condition_type]=gteq` +
          '&searchCriteria[filter_groups][2][filters][0][field]=created_at' +
          `&searchCriteria[filter_groups][2][filters][0][value]=${start}`
        : ''
    }` +
    `${
      end
        ? `&searchCriteria[filter_groups][3][filters][0][condition_type]=lteq` +
          '&searchCriteria[filter_groups][3][filters][0][field]=created_at' +
          `&searchCriteria[filter_groups][3][filters][0][value]=${end}`
        : ''
    }`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AMToken}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (response?.status !== 200) {
    if (response?.status)
      return res
        .status(response.status)
        .json({ error: data, status: response.status });

    return res.status(400).json({ error: data });
  }

  return res.status(200).json({ data });
}

export default function handlerHistoryOrderList(req, res) {
  const {
    cookies: { AMToken },
  } = req;

  if (!AMToken) {
    return res
      .status(400)
      .json("I'm sorry, you are not authorized to access this request");
  }

  return getAll(req, res);
}
