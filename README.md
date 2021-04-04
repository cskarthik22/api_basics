# api_basics

** PROJECT STRUCTURE for both client & server in same domain or app
  Benfits:
    - No CORS setup 
    - Cookies included btw client app and server api automatically, since both requests are handled by the express server app.
    - In development environment ( Create react app + Proxy => will acts as proxy and handles serverapi routes )

- SEVER APP ( EXPRESS)
  - CLIENT APP ( REACT )
    - ADD setupProxy.js file in src folder
    - ** No Changes to Client Package.json
- Server Package of JSON 
  - Add Engines section
  - "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
  - In Index.js add the below code specially for heroku deployment
    ```
        if(process.env.NODE_ENV == 'production') {
            app.use(express.static("client/build"));
            const path = require('path');
            app.get('*', (req,res) => {
                res.sendFile(path.resolve(__dirname,'client','build','index.html'));
            });
        }
    ```

** STEPS for Heroku setup

brew install heroku
heroku -v
heroku login
heroku create

https://thawing-taiga-21841.herokuapp.com/ | https://git.heroku.com/thawing-taiga-21841.git

git remote add heroku https://git.heroku.com/thawing-taiga-21841.git

git push heroku master or main


https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=830694239381-4bani9200g6c6nheobgdusd7sfadsq61.apps.googleusercontent.com&flowName=GeneralOAuthFlow

http://localhost:8000/auth/google/callback?code=4%2F0AY0e-g7l44ZpJzMtU73HM3mIKtJM3DxSw6piAlLuu9CS2KdR1CisqRsnr8YOt3SpTq_D0A&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent#