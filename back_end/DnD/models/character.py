# characters table in Tome Tracker
from sqlalchemy.inspection import inspect
from DnD.config.database_extension import db

#Create a 'Fact' Class
class Character(db.Model):
    #set table name
    __tablename__ = 'characters'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    ###NEED TO ADD ALL OTHER COLUMNS FOR CHARACTER###
    
    
    #define relationships
    user = db.relationship('User', back_populates = 'characters')
    campaigns = db.relationship('Campaign', secondary = 'character_campaigns', back_populates = 'characters')

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}