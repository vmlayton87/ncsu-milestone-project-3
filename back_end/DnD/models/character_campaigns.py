# assiciation table for character_campaigns in Tome Tracker. For querying it is better to have a model and not just an association table

from sqlalchemy.inspection import inspect
from ..config import db

class CharacterCampaigns(db.Model):

    __tablename__ = 'character_campaigns'

    # define columns/attributes
    character_id = db.Column('character_id', db.Integer, db.ForeignKey('characters.id', ondelete='CASCADE'), primary_key=True),
    campaign_id = db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id', ondelete='CASCADE'), primary_key=True)

    # define relationships
    character = db.relationship('Character', back_populates = 'campaigns')
    campaign = db.relationship('Campaign', back_populates = 'characters')

    # define method for data conversion to a dictionary
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}
