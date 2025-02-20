const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~zuwmgICa#r3H5ZvAFSi1WEN5rWzUbCBi_TV0JYbQERD1xH8oavAc",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://kavindachamith13:20060705@cluster0.gcank.mongodb.net",

    
 
};
