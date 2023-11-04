from flask import Blueprint, render_template

routes = Blueprint("routes","/")

@routes.route("/", methods=["GET"])
def index():
    return render_template("index.html")