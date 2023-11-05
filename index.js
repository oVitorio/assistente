const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const requestBody = req.body;

    // Extract action from the request body
    const action = requestBody.queryResult.intent.displayName;

    switch (action) {
        case 'ola':
            // Code to execute for this intent
            const fulfillmentText = 'Olá, mundo!';
            const responseJson = {
                fulfillmentText: fulfillmentText,
                outputContexts: requestBody.queryResult.outputContexts,
                source: 'webhookdata',
            };
            res.status(200).send(responseJson);
            break;
        default:
            // Code to execute for unrecognized intent
            console.log('Unknown Intent');
            res.status(200).send({});
    }
});

app.listen(8080, () => {
    console.log('Webhook service is listening on port 8080');
});