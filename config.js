const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~e35khCjJ#WFh-43iouHGWpU53rFNJ--3_su_BJN7p-eHwxfWX5Jg",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://kavindachamith13:20060705@cluster0.gcank.mongodb.net",

    
 
};
