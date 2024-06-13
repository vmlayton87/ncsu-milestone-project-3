# to connect to Postgresql
from flask_sqlalchemy import SQLAlchemy

# to connect the models to the database and migrate changes
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()
