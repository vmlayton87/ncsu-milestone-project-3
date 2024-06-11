# campaigns table in Tome Tracker
from sqlalchemy.inspection import inspect
from DnD.config.database_extension import db

class Campaign(db.Model):
    #set table name
    __tablename__ = 'campaigns'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(250))
    dm = db.Column(db.Integer, db.ForeignKey('users.id')) # only one DM per campaign.
    
    
    # many-to-many relationship for user_campaigns. this creates a bidirectional relationship.
    users = db.relationship('User', secondary = 'user_campaigns', back_populates = 'campaigns', lazy='dynamic')

    # many-to-many relationship for character_campaigns. this creates a bidirectional relationship. 
    characters = db.relationship('Character', secondary = 'character_campaigns', back_populates = 'campaigns', lazy='dynamic')

    # one-to-many relationship with notes.
    notes = db.relationship('Note', back_populates = 'campaign')

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}