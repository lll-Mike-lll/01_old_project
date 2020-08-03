from flask import Flask,jsonify,render_template,redirect,url_for,request
from pandas_datareader import data as pdr
import plotly
import plotly.graph_objects as go
import pandas as pd
from datetime import datetime
import numpy as np
import json


app = Flask(__name__)


def create_plot():
    N = 40
    x = np.linspace(0, 1, N)
    y = np.random.randn(N)
    df = pd.DataFrame({'x': x, 'y': y}) # creating a sample dataframe
    data = [
        go.Bar(
            x=df['x'], # assign x as the dataframe column 'x'
            y=df['y']
        )
    ]
    graphJSON = json.dumps(data, cls=plotly.utils.PlotlyJSONEncoder)
    return graphJSON

def create_plot_financial(stock_name):
    df_y = pdr.DataReader(str(stock_name)+'.bk',data_source='yahoo',start='2018-01-01')
    # a = df_y.iloc[0]['High']
    data=[go.Candlestick(x=df_y.index,
                open=df_y['Open'],
                high=df_y['High'],
                low=df_y['Low'],
                close=df_y['Close'])]
    graphJSON = json.dumps(data, cls=plotly.utils.PlotlyJSONEncoder)
    return graphJSON

# fig.add_trace(
# go.Candlestick(x=df_y.index,
                # open=df_y['Open'],
                # high=df_y['High'],
                # low=df_y['Low'],
                # close=df_y['Close'])
# )

@app.route("/", methods=["POST","GET"])
def home():
    if request.method == "POST":
        s_name = str(request.form["get_name"])
        return redirect(url_for("graph_page",stock_name=s_name))
    else:
        return render_template("index2.html")



@app.route("/<stock_name>", methods=["POST","GET"])
def graph_page(stock_name):
    if request.method == "POST":
        # bar = create_plot()
        s_name = str(request.form["get_name"])
        finance = create_plot_financial(s_name)
        s = str(s_name).upper()
        return render_template('index1.html',plot=finance,name = s)
    else:
        # bar = create_plot()
        # s_name = str(request.form["get_name"])
        finance = create_plot_financial(stock_name)
        s = str(stock_name).upper()
        return render_template('index1.html',plot=finance,name = s)




if __name__ == "__main__":
    app.run(host = "127.0.0.1",port = 3000)
