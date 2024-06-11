#import all blueprint here
from .user import user_bp
from .auth import auth_bp
#import the rest of the blueprints here

def register_blueprints(app):
    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)