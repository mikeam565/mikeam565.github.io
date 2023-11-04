from flask import Flask
from config import Config

app = Flask(__name__.split(".", maxsplit=1)[0])
app.config.from_object(Config)

from application.routes import routes
app.register_blueprint(routes)