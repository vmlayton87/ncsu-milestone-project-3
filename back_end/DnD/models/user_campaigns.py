# association table for user_campaigns in Tome Tracker

from DnD.config.database_extension import db

        
user_campaigns = db.Table(
    'user_campaigns',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), primary_key=True),
    db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id', ondelete='CASCADE'), primary_key=True)
)