# polldata size reducer

## Reduce your `polldata.json` file size by removing polldata property keys:

`actionTime`
`attempts`
`actedOnConfirmation`
`actedOnConfirmationTimestamp`
`_dupeCheck`
`action.meta`

## Steps

- Temporarily and properly stop your bot, and once stop, put the `polldata.json` file into the `input` folder.
- Start the script with `node index.js`
- Get the reduced `polldata.json` in the `output` folder and copy and paste them into your bot files folder and restart your bot.
