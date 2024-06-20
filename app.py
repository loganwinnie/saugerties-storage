from flask import Flask, render_template
from config import FIVE_PRICE, TEN_PRICE, TWENTY_PRICE

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html", prices=[FIVE_PRICE, TEN_PRICE, TWENTY_PRICE])