# association table for user_campaigns in Tome Tracker For querying it is better to have a model and not just an association table

from sqlalchemy.inspection import inspect
from ..config import db

class UserCampaigns(db.Model):

    __tablename__ = 'user_campaigns'

    # define columns/attributes
    user_id = db.Column( db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), primary_key=True)

    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id', ondelete='CASCADE'), primary_key=True)

    # define relationships
    user = db.relationship('User', back_populates = 'campaigns')
    
    campaign = db.relationship('Campaign', back_populates = 'users')

    # define method for data conversion to a dictionary
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}


# from ..config import db

        
# user_campaigns = db.Table(
#     'user_campaigns',
#     db.Column('user_id', db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), primary_key=True),
#     db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id', ondelete='CASCADE'), primary_key=True)
# )