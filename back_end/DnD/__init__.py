
# This file initializes the Flask app and registers the blueprints and extensions.

from flask import Flask 
from DnD.config import DatabaseConfig
from DnD.config.database_extension import db, migrate


def create_app(): 
    # initializing a flask application
    app = Flask(__name__)

    # load configuration settings for the database
    app.config.from_object(Config) 

    # initialize the database with the application
    db.init_app(app)

    # initialize the database with flask migrate
    migrate.init_app(app, db)

    

    return app
