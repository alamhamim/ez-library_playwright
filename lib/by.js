var by = {
    xpath: function (sXpath) {
        return sXpath;
    },

    css: function (sCss) {
        return sCss;
    },

    id: function (sId) {
        return "[id='" + sId + "']";
    },

    name: function (sName) {
        return "[name='" + sName + "']";
    },

    buttonText: function (sButtonText) {
        return "//button[text()='" + sButtonText + "']";
    },

    className: function (sClassName) {
        return "[class='" + sClassName + "']";
    },

    text: function (sText) {
        return "//*[text()='" + sText + "']";
    },
}

module.exports = by;