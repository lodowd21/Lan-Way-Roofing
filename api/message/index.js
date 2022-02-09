module.exports = async function (context, req) {
    const { Connection, Request } = require("tedious");

    context.res.json({
        text: "Hello from the API 3"
    });
};