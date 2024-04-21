import requests;
import json;

# Using flask to make an api 
# import necessary libraries and functions 
from flask import Flask, jsonify, request 

def getFromAPI() :
    response = requests.get("http://localhost:3000/") 
    data = response.json()
    print(data)
    with open('./Hello.txt') as f:
        json_data = json.load(f)
        print(json_data)
    return json_data


  
# creating a Flask app 
app = Flask(__name__) 
  
# on the terminal type: curl http://127.0.0.1:5000/ 
# returns hello world when we use GET. 
# returns the data that we send when we use POST. 
@app.route('/', methods = ['GET']) 
def home(): 
    if(request.method == 'GET'): 
  
        return getFromAPI()
  
  
# driver function 
if __name__ == '__main__': 
  
    app.run(host='0.0.0.0')