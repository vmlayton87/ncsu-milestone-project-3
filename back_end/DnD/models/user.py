# users table in Tome Tracker
from sqlalchemy.inspection import inspect
from .config import db

class User(db.Model):
    #set table name
    __tablename__ = 'users'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250))
    username = db.Column(db.String(250))
    password = db.Column(db.String(250))
    
    #DEFINE RELATIONSHIPS
    # one-to-many relationship with notes and characters: one user can have many notes, and one user can have many characters
    notes = db.relationship('Note', back_populates = 'user')
    characters = db.relationship('Character', back_populates = 'user')

    # many-to-many relationship with campaigns: one user can be in many campaigns, and one campaign can have many users
    campaigns = db.relationship('Campaign', secondary= 'user_campaigns', back_populates = 'users', lazy='dynamic')

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}

        
    #create a method to convert to dictionary for json that explicitly states each key value pair
    # def to_dict(self):
    #         return {
    #             'id': self.id,
    #             'user_name': self.user_name,
    #             'hashed_password': self.hashed_password
    #         }
    # this looks for a key and value that does not start with an underscore, and returns a dictionary of those key value pairs. the __dict__ method returns a dictionary of all the attributes and their values. python allows a one line way to write out ifs and fors that are nested. this did not work as I had intended. 
    # def to_dict(self):
    #     return {key: value for key, value in self.__dict__.items() if not key.startswith('_')}
    
    
    
  