from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from news_scrap import news_en,oK_np

app=Flask(__name__)
#api=Api(app)
CORS(app)

@app.route("/en")
def eng():
	en=news_en()
	#print(kp_news)
	#print(ok_news)
	return en

@app.route("/np")
def nep():
	ok_news=oK_np()
	#print(ok_news)
	return ok_news

#api.add_resource(eng,'/en')

if __name__ == '__main__':
	app.run(debug=True)