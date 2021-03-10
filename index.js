const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '/input/polldata.json');

const polldata = JSON.parse(fs.readFileSync(input, { encoding: 'utf-8' }));

const offerIDs = Object.keys(polldata.timestamps);

offerIDs.forEach(id => {
    const offerData = polldata.offerData[id];

    if (offerData) {
        if (offerData.action) {
            offerData.action.meta = {};
        }

        if (offerData.actionTime) {
            delete offerData.actionTime;
        }

        if (offerData.attempts) {
            delete offerData.attempts;
        }

        if (offerData.actedOnConfirmation) {
            delete offerData.actedOnConfirmation;
        }

        if (offerData.actedOnConfirmationTimestamp) {
            delete offerData.actedOnConfirmationTimestamp;
        }

        if (offerData._dupeCheck) {
            delete offerData._dupeCheck;
        }
    }
});

const output = path.join(__dirname, '/output/polldata.json');

fs.writeFileSync(output, JSON.stringify(polldata), { encoding: 'utf-8' });

console.log('Done!');
