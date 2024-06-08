from  DnD.blueprints.note import note_bp

def register_blueprints(app):
    app.register_blueprint(note_bp)