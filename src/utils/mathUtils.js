export const moneySeparator = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const totalPrice = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let price = array[i].price * array[i].quantity;
    sum += price;
  }
  return moneySeparator(sum);
};
