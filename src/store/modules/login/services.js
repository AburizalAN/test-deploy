async function login(username, password) {
  try {
    const res = await fetch('/api/customer-token', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

export default {
  login,
};
