from .. import db


class Campaign(db.Model):
    #set table name
    __tablename__ = 'campaigns'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(250))
    dm = db.Column(db.Integer, db.ForeignKey('users.id'))
    
    
    #define relationship to Note
    users = db.relationship('User', secondary = 'user_campaigns', back_populates = 'campaigns')
    characters = db.relationship('Character', secondary = 'character_campaigns', back_populates = 'campaigns')
    notes = db.relationship('Note', back_populates = 'campaign')