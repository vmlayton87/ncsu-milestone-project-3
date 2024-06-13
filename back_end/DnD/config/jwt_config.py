#import JWT library

import os
import secrets

class JWTConfig:

    # jwt_secret_key = os.getenv('JWT_SECRET_KEY')
    JWT_SECRET_KEY = secrets.token_hex(32)
    
