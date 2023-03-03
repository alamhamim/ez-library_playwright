const fs = require('fs');
const path = require('path');
const libPath = path.join(__dirname, 'lib');

const exported = {};
fs.readdirSync(libPath).forEach(file => {
    if (file.match(/.*\.js$/)) {
        const name = file.replace('.js', '');
        exported[name] = require(path.join(libPath, file));
    }
});

module.exports = exported;