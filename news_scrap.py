from bs4 import BeautifulSoup
import requests


#Scrap online English News
def news_en():
	
	#For Online khabar
	ok_news={}
	res=requests.get("https://english.onlinekhabar.com/last-24-hours").text
	soup_oken = BeautifulSoup(res, 'lxml')
	onlineK = soup_oken.find_all('div', class_='ok-news-post ltr-post')

	for i,news in enumerate(onlineK):
		title=news.find('div',class_='ok-post-contents').find('a')
		img= news.find('a',class_='ok-post-image').find('img')['src']
		res_=requests.get(title['href']).text
		soup_oken_ = BeautifulSoup(res_, 'lxml')
		snip = soup_oken_.find('div', class_='post-content-wrap').find_all('p')
		#print(detail)
		ok_news[i]={'title':title.text.strip(),'url':title['href'],'snip':snip[1].text,'img':img,'id':i}
	
	root='https://kathmandupost.com'
	res=requests.get(root).text
	soup_kp = BeautifulSoup(res, 'lxml')
	kP = soup_kp.find('div', class_='block--morenews').find_all('article',class_='article-image')

	#For Kathmandu post
	for j,news in enumerate(kP):
		title=news.find_all('a')[1]
		img= news.find('img')['data-src'].split('&')[0]
		#print(img)
		snip = news.find('p').text
		#print(snip)
		ok_news[i+j]={'title':title.text,'url':root+title['href'],'snip':snip,'img':img,'id':i+j}
	
	return ok_news

#onlineKhabar Nepali
def oK_np():
	news_np={}
	res=requests.get("https://www.onlinekhabar.com/content/news").text
	soup_oknp = BeautifulSoup(res, 'html.parser')
	ok_np = soup_oknp.find_all('div', class_='relative list__post show_grid--view')

	for i,news in enumerate(ok_np):
		title=news.find('div', class_='item__wrap').find('a')
		snip=news.find_all('p')[1].text
		img= news.find('div',class_='item hasImg').find('img')['src']

		news_np[i]={'title':title.text,'url':title['href'],'img':img, 'snip':snip,'id':i}

	return news_np
'''
def ek():
	res=requests.get("https://ekantipur.com/news").text
	soup_ek = BeautifulSoup(res, 'lxml')
	ek_ = soup_ek.find_all('div', class_='teaser offset')

	for i,news in enumerate(ek_):
		title=news.find('a').string.strip().encode()
		text=title.decode("utf-8")
		title=news.find('a').text.strip()
		print(text,i)
'''
