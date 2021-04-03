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
