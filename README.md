# WALLSTREET
## Financial analysis and visualization suite

Gain powerful data-driven insights into any publicly-traded company's finances with this tool.

### Overview

<img src="/assets/ss3.png" alt="Screenshot" style="height: 100px;"/>
<img src="/assets/ss2.png" alt="Screenshot" style="height: 100px;"/>
<img src="/assets/ss1.png" alt="Screenshot" style="height: 100px;"/>

### Setup
1. Clone the repo
2. To setup the API:
    * `cd src/wallstreet-web-services`
    * Install backend packages using pip (If you don't have pip, use a virtualenv or download it from the [source](https://pip.pypa.io/en/stable/installing/)):
        * `pip install flask`
        * `pip install flask-restful`
        * `pip install flask-cors`
        * `pip install beautifulsoup4`
        * `pip install yahoo-finance`
    * Run `python api.py`
    * The API is now running on port `5000`
3. To setup the frontend:
    * `cd src/wallstreet-ui`
    * run `yarn` and then `yarn start` (or `npm start`)
    * The app is now running on port `3000`
4. You can now use the app by going to http://localhost:3000

### Rohan S Raval, 2017
