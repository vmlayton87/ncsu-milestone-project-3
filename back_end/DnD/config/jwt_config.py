#import JWT library
from flask_jwt_extended import JWTManager

jwt_secret_key = os.getenv('JWT_SECRET_KEY')
app.config['JWT_SECRET_KEY'] = jwt_secret_key

    # Initialize JWT
jwt = JWTManager()