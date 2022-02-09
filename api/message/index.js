module.exports = async function (context, req) {
    //const { Connection, Request } = require("tedious");
    let x = 1;
    let y = 2;
    context.res.json({
        text: "Hello from the API 4" + (x+y)
    });
};