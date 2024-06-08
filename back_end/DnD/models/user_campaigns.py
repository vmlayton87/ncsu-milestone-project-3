from .. import db


character_campaigns = db.Table('user_campaigns',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id'))
)