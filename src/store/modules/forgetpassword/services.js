async function sendEmail(email) {
  try {
    const res = await fetch('/api/forget-password', {
      method: 'PUT',
      body: JSON.stringify({
        email,
        template: 'email_reset',
        websiteId: 1,
      }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function resetPassword(data) {
  try {
    const res = await fetch('/api/forget-password', {
      method: 'POST',
      body: JSON.stringify({ ...data }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

export default {
  sendEmail,
  resetPassword,
};
