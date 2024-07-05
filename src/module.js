import {MODULE_FRIENDLY_NAME} from "./constants/moduleConstants";

Hooks.once("init", async () => {
    console.log(`${MODULE_FRIENDLY_NAME} is installed!`);
});


Hooks.once('ready', async () => {
    //Do Ready Stuff
    //Test
});
