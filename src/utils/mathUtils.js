export const moneySeparator = (number) => {
  if (number > 999)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return number;
};

export const totalPrice = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let price = array[i].price * array[i].quantity;
    sum += price;
  }
  return moneySeparator(sum);
};
