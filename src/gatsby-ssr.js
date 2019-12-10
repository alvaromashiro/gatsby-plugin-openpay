import React from "react";

const openpayScript = (
  <script
    key={`gatsby-plugin-openpay`}
    type="text/javascript"
    src="https://openpay.s3.amazonaws.com/openpay.v1.min.js"
  ></script>
);
export const onRenderBody = ({ setPostBodyComponents }, configOptions) => {
  const { production, MERCHANT_ID, PUBLIC_API_KEY } = configOptions;
  console.log(MERCHANT_ID, PUBLIC_API_KEY, production);

  if (process.env.NODE_ENV !== `production`) {
    console.warn("non production environment");
  }
  if (!process.env.GATSBY_MERCHANT_ID || !MERCHANT_ID) {
    console.error("No Merchant Id");
  }
  if (!process.env.GATSBY_PUBLIC_API_KEY) {
    console.error("No Public API Key");
  }

  setPostBodyComponents([openpayScript]);
};
