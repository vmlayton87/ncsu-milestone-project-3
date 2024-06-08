from .. import db


#Create a 'Fact' Class
class User(db.Model):
    #set table name
    __tablename__ = 'users'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(250))
    hashed_password = db.Column(db.String(250))
    
    #define relationship to Note
    notes = db.relationship('Note', back_populates = 'user')
    characters = db.relationship('Character', back_populates = 'user')
    campaigns = db.relationship('Campaign', secondary= 'user_campaigns', back_populates = 'users')