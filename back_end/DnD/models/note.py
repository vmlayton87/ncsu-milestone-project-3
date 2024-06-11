# notes table in Tome Tracker
from sqlalchemy.inspection import inspect
from .config import db


#Create a 'Note' Class
class Note(db.Model):
    #set table name
    __tablename__ = 'notes'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    text = db.Column(db.TEXT)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) # one user per note
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id')) # one campaign per note
    
    #define relationships
    user = db.relationship('User', back_populates = 'notes')
    campaign = db.relationship('Campaign', back_populates = 'notes')

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}