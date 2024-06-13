# users table in Tome Tracker
from sqlalchemy.inspection import inspect
from ..config import db

class User(db.Model):
    #set table name
    __tablename__ = 'users'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250))
    user_name = db.Column(db.String(250))
    hashed_password = db.Column(db.String(250))
    
    #DEFINE RELATIONSHIPS
    # one-to-many relationship with notes and characters: one user can have many notes, and one user can have many characters
    notes = db.relationship('Note', back_populates = 'user', cascade='all, delete-orphan', lazy='dynamic')
    # db.relationship: characters attribute is a list of characters associated with the user
    characters = db.relationship('Character', back_populates = 'user', cascade='all, delete-orphan', lazy='dynamic')

    # many-to-many relationship with campaigns: one user can be in many campaigns, and one campaign can have many users
    campaigns = db.relationship('UserCampaigns', back_populates = 'user', cascade='all, delete-orphan', lazy='dynamic')

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        data = {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}
        # data['notes'] = [note.to_dict() for note in self.notes]
        # data['characters'] = [char.to_dict() for char in self.characters]
        # data['campaigns'] = [user_campaign.campaign.to_dict() for user_campaign in self.campaigns]
        return data
        
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
    
    
    
  