const flag = () => typeof window !== "undefined";

let OpenPay;
const getTypeCard = card => {
  return getOpenPay.card.cardType(card);
};

const getOpenPay = () => {
  if (flag()) {
    return window.OpenPay;
  }
  return OpenPay;
};

export { flag, getTypeCard, getOpenPay };
