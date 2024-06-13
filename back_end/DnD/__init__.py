
# This file initializes the Flask app and registers the blueprints and extensions.

from flask import Flask 
from flask_jwt_extended import JWTManager
from .config import DatabaseConfig, db, migrate, JWTConfig

from .blueprints import register_blueprints


def create_app(): 
    # initializing a flask application
    app = Flask(__name__)

    # load configuration settings for the database
    app.config.from_object(DatabaseConfig)
    app.config.from_object(jwt) 
    
    # initialize the database with the application
    db.init_app(app)
    
    #Enable CORS
    CORS(app)

    # Initialize JWT
    jwt = JWTManager(app)

    # initialize the database with flask migrate
    migrate.init_app(app, db)

    # register the blueprints/routes
    register_blueprints(app)
    

    return app
