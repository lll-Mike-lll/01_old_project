from flask import Flask, jsonify,render_template
from pandas_datareader import data as pdr
import plotly
import plotly.graph_objects as go
import pandas as pd
from datetime import datetime
import numpy as np
import json

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




app = Flask(__name__)
a=3

df_y = pdr.DataReader('kbank.bk',data_source='yahoo',start='2018-01-01')
a = df_y.iloc[0]['High']


@app.route("/")
def index():
    bar = create_plot()
    return render_template('index.html',plot=bar)




if __name__ == "__main__":
    app.run(host = "127.0.0.1",port = 3000)
