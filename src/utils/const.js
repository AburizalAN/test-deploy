export const STATUSES = (value) => {
  switch (value) {
    case 'pending_payment':
    case 'payment_review':
      return { label: 'MENUNGGU', color: '#6F6F6F' };
    case 'pending_complain':
      return { label: 'DIKOMPLAIN', color: '#B42519' };
    case 'processing':
      return { label: 'DIPROSES', color: '#E9B632' };
    case 'shipping':
      return { label: 'DIKIRIM', color: '#A0C16B' };
    case 'success':
      return { label: 'SUKSES', color: '#A0C16B' };
    case 'received':
      return { label: 'DITERIMA', color: '#A0C16B' };
    case 'complete':
      return { label: 'SELESAI', color: '#A0C16B' };
    case 'canceled':
      return { label: 'DIBATALKAN', color: '#B42519' };
    default:
      return { label: 'UNKNOWN', color: 'grey' };
  }
};

export const ARRAY_OF_DAYS = [
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  "Jum'at",
  'Sabtu',
];
