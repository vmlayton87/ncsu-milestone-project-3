from DnD.blueprints.note import note_bp
from DnD.blueprints.user import user_bp

def register_blueprints(app):
    app.register_blueprint(note_bp)
    app.register_blueprint(user_bp)