const superSyan = require("./superSyan");
const {expect} = require("@playwright/test");
let sConsole;
var element = async function ({page}, sEle) {
    const superElem = await page.locator(sEle);
    await superSyan.waitTillVisible({page}, sEle).then(async function (bRes) {
        if (bRes) {
            sConsole = "Pass";
        } else {
            sConsole = "Fail";
        }
        console.info(sConsole);
        expect(sConsole).toContain("Pass");
    });
    return superElem;
};
module.exports = element;
