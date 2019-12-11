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

  if (production !== `production`) {
    console.warn("non production environment");
  }
  if (!MERCHANT_ID) {
    console.error("No Merchant Id");
  }
  if (!PUBLIC_API_KEY) {
    console.error("No Public API Key");
  }

  setPostBodyComponents([openpayScript]);
};
