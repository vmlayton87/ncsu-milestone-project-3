from flask import Flask 
#import SQLAlchemy from flask_sqlalchemy
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv
import os
load_dotenv()

# Initialize SQLAlchemy
db = SQLAlchemy()

# Import models
from .models.user import User
from .models.campaign import Campaign
from .models.note import Note
from .models.character import Character

# Import association tables
from .models.user_campaigns import user_campaigns
from .models.character_campaigns import character_campaigns

#app factory
def create_app():
    app = Flask(__name__)
    
    #config sql database(need to create a database in postgres first)
    sql_password = os.getenv('SQL_PASSWORD')
    app.config['SQLALCHEMY_DATABASE_URI'] = sql_password
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize database
    db.init_app(app)

    # Import and configure Flask-Migrate
    from flask_migrate import Migrate
    migrate = Migrate(app, db)

    #register blueprints here

    @app.route('/')
    def index():
        return 'Hello, this is Reptiles API very first index page!'


    return app