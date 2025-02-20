# Google Chrome Extension Deploy

To publishing the Chrome Extension through GitHub you need to use "chrome-webstore-upload-cli".   
It requires a Client authentication with ID, Secret and Refresh Token.  
It also requires the Extension ID.  
  
The suggested Client authentication is the OAuth, that requires a Google Cloud Platfor project and "web access consent" done.    
Setting up your OAuth consent screen: <https://console.cloud.google.com/apis/credentials/consent>.  

Google documentation about the aujtomation of publishing a Chrome Extension simply does not exist.   
For publishing through GitHub Actions, you'll need to:
  1. First manually upload your extension to get an Item ID
  2. Then set up automated publishing with GitHub Actions

## Get the refresh token


Use a "Desktop app" OAuth Client.  

```bash
CHROME_WEB_CLIENT_ID="188141145544-ptg9shameor87q311j0b6a608a7ecvth.apps.googleusercontent.com"
CHROME_WEB_SECRET=""

AUTH_URL="https://accounts.google.com/o/oauth2/v2/auth?client_id=$CHROME_WEB_CLIENT_ID&response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&redirect_uri=http://127.0.0.1"
echo "$AUTH_URL"

URL="https://accounts.google.com/o/oauth2/auth?client_id=$CHROME_WEB_CLIENT_ID&redirect_uri=http://127.0.0.1&scope=profile&email&response_type=code&include_granted_scopes=true&access_type=offline&state=state_parameter_passthrough_value"

echo $URL
open it i nhe browser and select the Google Account if required. 
Accept and continue.
You will be redirect to a URL like this:
http://127.0.0.1/?state=state_parameter_passthrough_value&code=4%2F0ASVgi3JOArc8C-jfstofT80a2Vkl0NwRH3wiZHoVQGCwjx653BeHDsVKafwwyd5CLmewYA&scope=profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile


CODE=4%2F0ASVgi3JOArc8C-jfstofT80a2Vkl0NwRH3wiZHoVQGCwjx653BeHDsVKafwwyd5CLmewYA

curl -X POST https://oauth2.googleapis.com/token \
-d "code=<CODE>&client_id=<CLIENT-ID>&client_secret=<CLIENT-SECRET>&redirect_uri=<REDIRECT-URI>&access_type=offline&grant_type=authorization_code"

https://accounts.google.com/o/oauth2/v2/auth?client_id=188141145544-ptg9shameor87q311j0b6a608a7ecvth.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/chromewebstore

# Step 1: Get the device and user codes

RESPONSE=$(curl -s -d "client_id=$CHROME_WEB_CLIENT_ID" \
 -d "scope=https://www.googleapis.com/auth/chromewebstore" \
 https://accounts.google.com/o/oauth2/device/code)

RESPONSE=$(curl -s -d "client_id=$CHROME_WEB_CLIENT_ID" \
-d "scope=https://www.googleapis.com/auth/chromewebstore" \
https://accounts.google.com/o/oauth2/device/code)

echo "$RESPONSE"

# TODO check that it didn't returned an error
# eccho $RESPONSE

# Extract the important parts
USER_CODE=$(echo $RESPONSE | grep -o '"user_code" *: *"[^"]*"' | cut -d '"' -f 4)
DEVICE_CODE=$(echo $RESPONSE | grep -o '"device_code" *: *"[^"]*"' | cut -d '"' -f 4)
VERIFICATION_URL=$(echo $RESPONSE | grep -o '"verification_url" *: *"[^"]*"' | cut -d '"' -f 4)

# Display instructions
echo "Go to $VERIFICATION_URL and enter code: $USER_CODE"
echo "Press Enter after you've completed authorization..."
read

# Step 2: Exchange device code for tokens
TOKEN_RESPONSE=$(curl -s -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=$CHROME_DESKTOP_CLIENT_ID" \
  -d "device_code=$DEVICE_CODE" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
  https://oauth2.googleapis.com/token)

# Extract and display the refresh token
REFRESH_TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"refresh_token" *: *"[^"]*"' | cut -d '"' -f 4)
echo "Your refresh token: $REFRESH_TOKEN"

```
URL="https://accounts.google.com/o/oauth2/auth/?client_id=${CHROME_CLIENT_ID}&response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&redirect_uri=urn:ietf:wg:oauth:2.0:oob"
# echo open it in a browser
echo $URL
```
open in a browser
```




Here's how to get your refresh token:
  1. Create an OAuth Client ID in Google Developer Console (Web Application is correct)
  2. Run this script locally to get your refresh token:

```sh
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret

curl GET 
```


  ```javascript
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Your OAuth client credentials
const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback';

app.get('/', (req, res) => {
  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&redirect_uri=${REDIRECT_URI}`;
  res.redirect(authUrl);
});

app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;
  
  try {
    const tokenResponse = await axios.post('https://accounts.google.com/o/oauth2/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI
    });
    
    // This is your refresh token!
    console.log('Refresh Token:', tokenResponse.data.refresh_token);
    res.send('Check your console for the refresh token');
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).send('Error getting token');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
  ```


Google Web Dashboard: <https://chrome.google.com/webstore/devconsole>
You can updated an "Item" in tha "Items" page on Google Web Developer website.  
To publish the item Google will require a lot of information, depending on the extension permission and other factors.  
  
I still don't know if publishing it for the first time on the Google Chrome Web Store is mandatory or not.  

**Description**
Removes cookies settings dialogs and ads and restore the page scrolling wjhen disabled.  


Permissions:
- **Scripting**
  ...
- **Hosts**
  ...
