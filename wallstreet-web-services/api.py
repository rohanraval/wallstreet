import scraper
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from json import dumps

app = Flask(__name__)
api = Api(app)
CORS(app)


class CompanyName_Meta(Resource):
    def get(self, ticker):
        return dumps(scraper.getCompanyNameFromTicker(ticker)).replace('\"', "")

class IncomeStatement_Meta(Resource):
    def get(self, ticker):
        #Perform scraping and return JSON data
        is_data = scraper.getIncomeStatement(ticker)
        return dumps(is_data).replace('\"', "")

class BalanceSheet_Meta(Resource):
    def get(self, ticker):
        #Perform scraping and return JSON data
        bs_data = scraper.getBalanceSheet(ticker)
        return dumps(bs_data).replace('\"', "")

class CashFlow_Meta(Resource):
    def get(self, ticker):
        #Perform scraping and return JSON data
        cf_data = scraper.getCashFlowStatement(ticker)
        return dumps(cf_data).replace('\"', "")
 
api.add_resource(CompanyName_Meta, '/<string:ticker>')
api.add_resource(IncomeStatement_Meta, '/<string:ticker>/incomeStatement')
api.add_resource(BalanceSheet_Meta, '/<string:ticker>/balanceSheet')
api.add_resource(CashFlow_Meta, '/<string:ticker>/cashFlow')

if __name__ == '__main__':
     app.run()