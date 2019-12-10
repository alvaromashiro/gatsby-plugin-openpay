import uuidv4 from "uuid/v4"

export const onClientEntry = (_, pluginOptions) => {
  const { OpenPay } = window
  const { production, MERCHANT_ID, PUBLIC_API_KEY } = pluginOptions
  const isProduction = ["development", "sandbox"].includes(production)
  let sessionId = uuidv4()

  sessionId = sessionId.replace(/-/g, "").toLowerCase()
  window["sessionId"] = sessionId
  OpenPay.setId(MERCHANT_ID)
  OpenPay.setApiKey(PUBLIC_API_KEY)
  OpenPay.setSandboxMode(isProduction)
}
