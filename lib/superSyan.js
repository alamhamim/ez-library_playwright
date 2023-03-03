/*var superSyan = async function ({page}, ele) {
    const isVisible = await page.locator(ele).isVisible();
    return isVisible ? true : false;
};
module.exports = superSyan;*/

var superSyan = {
    clearClick: async function ({page}, sEle) {
        const isTrue = await page.locator(sEle).isEnabled();
        if (isTrue) {
            await page.locator(sEle).click();
            return true;
        } else {
            return false;
        }
    },
    waitAndClick: async function ({page}, sEle) {
        await page.waitFor(5000);
        const isTrue = await page.locator(sEle).isEnabled();
        if (isTrue) {
            await page.locator(sEle).click();
            return true;
        } else {
            return false;
        }
    },
    waitTillVisible: async function ({page}, sEle) {
        const isVisible = await page.locator(ele).isVisible();
        return isVisible ? true : false;
    },

}
module.exports = superSyan;
