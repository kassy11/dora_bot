import requests
from fastapi import FastAPI, Response, status, Request, Depends
from starlette.middleware.cors import CORSMiddleware # 追加

API_URL = "http://50dd-34-125-39-251.ngrok-free.app/gen"

text = "こんにちは"

headers = {'ngrok-skip-browser-warning': 'true'}
data = requests.get(f"{API_URL}?text={text}", headers=headers)

res_text = data.text

print(res_text)

