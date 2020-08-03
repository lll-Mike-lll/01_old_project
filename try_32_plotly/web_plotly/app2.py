from flask import Flask, redirect, url_for, render_template, request

app = Flask(__name__)

@app.route("/home")
def home(name = "mike"):
    return render_template("index.html",content = name)

@app.route("/", methods=["POST","GET"])
def login():
    if request.method == "POST":
        user_name = request.form["nm"]
        return redirect(url_for("user", usr=user_name))
    else:
        return render_template("login.html")

@app.route("/<usr>")
def user(usr):
    return render_template("show.html", usr = usr)


if __name__ == "__main__":
    app.run(debug=True)
