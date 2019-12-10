## Description

Integrate Openpay.js with gatsby project, generate device session id. Access to Openpay.js object from components.


Include a summary of what this plugin accomplishes. Is there a demo site that shows how this plugin operates? If so, include a link to the deployed demo site and/or its source code here.

### Dependencies (optional)

None

### Learning Resources (optional)

[OpenPay Doc](https://openpay.mx/docs/)


## How to install

    npm install --save alvaromashiro/gatsby-plugin-openpay

After install gatsby-plugin-openpay you cand add it to plugin list in ```gatsby-config.js```

    plugins: [
     {
       resolve: "gatsby-plugin-openpay",
       options: {
         MERCHANT_ID: process.env.GATSBY_MERCHANT_ID,
        PUBLIC_API_KEY: process.env.GATSBY_PUBLIC_API_KEY,
         production:
           process.env.GATSBY_ACTIVE_ENV ||
           process.env.NODE_ENV ||
           "development" ||
           "production"
       }
     }
   ]
## Available options (if any)

- production
- MERCHANT_ID
- PUBLIC_API_KEY

## When do I use this plugin?

- When you need tokenize a card.
- When you need a device session id.
- Get type card

## Examples of usage

This usually shows a code example showing how to include this plugin in a site's `config.js` file.

    code example

//See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) on how to format code examples.

This section could also include before-and-after examples of data when the plugin is enabled, if applicable.


## How to run tests

## How to develop locally

## How to contribute

If you have unanswered questions, would like help with enhancing or debugging the plugin, it is nice to include instructions for people who want to contribute to your plugin.

## TODO
* [] Update Readme
* [] Do tests
