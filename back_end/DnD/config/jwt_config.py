#import JWT library
from flask_jwt_extended import JWTManager
import os

class JWTConfig:

    jwt_secret_key = os.getenv('JWT_SECRET_KEY')
    ['JWT_SECRET_KEY'] = jwt_secret_key

    # Initialize JWT
jwt = JWTManager()