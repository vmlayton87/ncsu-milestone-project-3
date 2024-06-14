# campaigns table in Tome Tracker
from sqlalchemy.inspection import inspect
from ..config import db

class Campaign(db.Model):
    #set table name
    __tablename__ = 'campaigns'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(250))
    dm = db.Column(db.Integer, db.ForeignKey('users.id')) # only one DM per campaign.
    name = db.Column(db.String(250))
    description = db.Column(db.TEXT)
    image_url = db.Column(db.String(250))
    
    
    # many-to-many relationship for user_campaigns. this creates a bidirectional relationship.
    users = db.relationship('UserCampaigns', back_populates = 'campaign',cascade='all, delete-orphan', lazy='dynamic')

    # many-to-many relationship for character_campaigns. this creates a bidirectional relationship. 
    characters = db.relationship('CharacterCampaigns', back_populates = 'campaign', cascade='all, delete-orphan', lazy='dynamic')

    # one-to-many relationship with notes.
    notes = db.relationship('Note', back_populates = 'campaign', cascade='all, delete-orphan', lazy='dynamic')

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        data = {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}
        # data['users'] = [user_campaign.user.to_dict() for user_campaign in self.users]
        # data['characters'] = [char_campaign.character.to_dict() for char_campaign in self.characters]
        # data['notes'] = [note.to_dict() for note in self.notes]
        return data