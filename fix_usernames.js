const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const target = 'this.identifiedUser = null;';
const injection = "this.identifiedUser = null;\n        this.usernamesList = ['julia', 'ariana', 'marta', 'alejandro', 'maria', 'alejandro_maria'];";

if (code.includes(target) && !code.includes("this.usernamesList = ['julia'")) {
    code = code.replace(target, injection);
    fs.writeFileSync('script.js', code);
    console.log('Fixed usernamesList without regex');
} else {
    console.log('Already fixed or target not found');
}
