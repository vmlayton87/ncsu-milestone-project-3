# assiciation table fo character_campaigns in Tome Tracker

from DnD.config.database_extension import db

character_campaigns = db.Table(
    'character_campaigns',
    db.Column('character_id', db.Integer, db.ForeignKey('characters.id', ondelete='CASCADE'), primary_key=True),
    db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id', ondelete='CASCADE'), primary_key=True)
)