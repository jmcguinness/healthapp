import requests
import json

url = 'http://127.0.0.1:8000/api/liftingDashboard'

benchItems = []
benchTotal = 0
benchAvg = 0

response = requests.get(url)
data = response.json()

for item in data:
    benchItems.append(item['bench'])
    benchTotal = benchTotal + item['bench']

benchAvg = round(benchTotal / len(benchItems), 2)

print(benchTotal, benchAvg)