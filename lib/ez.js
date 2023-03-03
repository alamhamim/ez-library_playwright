const superSyan = require("./superSyan");
const by = require("./by");
let sConsole;
var ez = {
    clickByXpath: async function ({page}, sEle) {
        let hoga = by.xpath(sEle);
        return await superSyan.clearClick({page}, hoga).then(async function (bRes) {
            if(bRes)
                sConsole = "Pass";
            else
                sConsole = "Fail";
            console.info(sConsole);
            return sConsole;
        });
    },
    clickById: async function ({page}, sEle) {
        let hoga = by.id(sEle);
        return await superSyan.clearClick({page}, hoga).then(async function (bRes) {
            if(bRes)
                sConsole = "Pass";
            else
                sConsole = "Fail";
            console.info(sConsole);
            return sConsole;
        });
    },

    clickByCss: async function ({page}, sEle) {
        let hoga = by.css(sEle);
        return await superSyan.clearClick({page}, hoga).then(async function (bRes) {
            if(bRes)
                sConsole = "Pass";
            else
                sConsole = "Fail";
            console.info(sConsole);
            return sConsole;
        });
    },

    clickByButtonText: async function ({page}, sEle) {
        let hoga = by.buttonText(sEle);
        return await superSyan.clearClick({page}, hoga).then(async function (bRes) {
            if(bRes)
                sConsole = "Pass";
            else
                sConsole = "Fail";
            console.info(sConsole);
            return sConsole;
        });
    },

    clickByText: async function ({page}, sEle) {
        let hoga = by.text(sEle);
        return await superSyan.clearClick({page}, hoga).then(async function (bRes) {
            if(bRes)
                sConsole = "Pass";
            else
                sConsole = "Fail";
            console.info(sConsole);
            return sConsole;
        });
    },
    clickByName: async function ({page}, sEle) {
        let hoga = by.name(sEle);
        return await superSyan.clearClick({page}, hoga).then(async function (bRes) {
            if(bRes)
                sConsole = "Pass";
            else
                sConsole = "Fail";
            console.info(sConsole);
            return sConsole;
        });
    },
}
module.exports = ez;