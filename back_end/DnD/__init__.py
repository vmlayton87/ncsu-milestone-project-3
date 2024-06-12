from flask import Flask 

from dotenv import load_dotenv
import os
load_dotenv()

#import SQLAlchemy from flask_sqlalchemy
from flask_sqlalchemy import SQLAlchemy

#import JWT library
from flask_jwt_extended import JWTManager

#Import CORS
from flask_cors import CORS

# Initialize SQLAlchemy
db = SQLAlchemy()

#Import secrets module
import secrets

#import blueprint registration function
from .blueprints import register_blueprints

#app factory
def create_app():
    app = Flask(__name__)
    
    #config sql database(need to create a database in postgres first)
    sql_password = os.getenv('SQL_PASSWORD')
    jwt_secret_key = os.getenv('JWT_SECRET_KEY')
    app.config['SQLALCHEMY_DATABASE_URI'] = sql_password
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = secrets.token_hex(32)

    # Initialize database
    db.init_app(app)

    #Enable CORS
    CORS(app)

    # Initialize JWT
    jwt = JWTManager(app)

    # Import and configure Flask-Migrate
    from flask_migrate import Migrate
    migrate = Migrate(app, db)

     # Import models
    from .models.user import User
    from .models.campaign import Campaign
    from .models.note import Note
    from .models.character import Character

    # Import association tables
    from .models.character_campaigns import Character_campaign
    from .models.user_campaigns import User_campaign
    

    #register blueprints here
    register_blueprints(app)

    @app.route('/')
    def index():
        return 'Hello, this is DnD APIs very first index page!'


    return app