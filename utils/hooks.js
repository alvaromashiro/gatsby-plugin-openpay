const { OpenPay } = window

export const getTypeCard = card => {
  return OpenPay.card.cardType(card)
}
