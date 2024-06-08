from flask import Flask 

from dotenv import load_dotenv
import os
load_dotenv()

#import SQLAlchemy from flask_sqlalchemy
from flask_sqlalchemy import SQLAlchemy

# Initialize SQLAlchemy
db = SQLAlchemy()

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

     # Import models
    from .models.user import User
    from .models.campaign import Campaign
    from .models.note import Note
    from .models.character import Character

    # Import association tables
    from .models.character_campaigns import Character_campaign
    from .models.user_campaigns import User_campaign
    

    #register blueprints here

    @app.route('/')
    def index():
        return 'Hello, this is DnD APIs very first index page!'


    return app