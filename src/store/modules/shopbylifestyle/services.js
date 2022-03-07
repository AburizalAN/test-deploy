async function getProductdietByLifestyle() {
  return await fetch('/api/productdiet/lifestyle').then((res) => res.json());
}
export default { getProductdietByLifestyle };
