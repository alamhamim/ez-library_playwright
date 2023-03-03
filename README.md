# @ez-lib/playwright

@ez-lib/playwright for automation testing with webdriverIO

## Installation

Use the package manager NPM to install 

```bash
npm install @ez-library/playwright
```

## **** How to implement ****

## #1
```javascript
const {test, expect} = require('@playwright/test');
const {ez} = require("@ez-library/playwright");
test('has title', async ({page}) => {
    await page.goto('https://demo.com/');
    expect(await ez.clickByXpath({page}, "//xpath")).toContain("Pass");
    expect(await ez.clickById({page}, "#someid")).toContain("Pass");
});



```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
