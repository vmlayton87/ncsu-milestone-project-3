
# This file initializes the Flask app and registers the blueprints and extensions.

from flask import Flask 
from DnD.config.database_config import DatabaseConfig
from DnD.config.database_extension import db, migrate
from DnD.blueprints import register_blueprints


def create_app(): 
    # initializing a flask application
    app = Flask(__name__)

    # load configuration settings for the database
    app.config.from_object(DatabaseConfig) 

    # initialize the database with the application
    db.init_app(app)

    # initialize the database with flask migrate
    migrate.init_app(app, db)

    # register the blueprints/routes
    register_blueprints(app)
    

    return app
