# This is the database configurations: the connection parameters

import os
from dotenv import (load_dotenv, find_dotenv)

load_dotenv(find_dotenv())

class DatabaseConfig:

    SQLALCHEMY_DATABASE_URI = os.getenv('DB_CONNECTION')
    SQLALCHEMY_TRACK_MODIFICATIONS = False 