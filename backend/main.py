from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return jsonify({
        "message": "response generated successfully",
        "value": "Welcome to my portfolio"
    })

if __name__ == '__main__':
    app.run(debug=True)