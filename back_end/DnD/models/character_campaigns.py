from .. import db


character_campaigns = db.Table('character_campaigns',
    db.Column('character_id', db.Integer, db.ForeignKey('characters.id')),
    db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id'))
)