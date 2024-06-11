from .auth import auth_bp
from .note import note_bp
from .user import user_bp
from .campaign import campaign_bp
from .character import char_bp


def register_blueprints(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(note_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(campaign_bp) 
    app.register_blueprint(char_bp)