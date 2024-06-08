from .. import db

class Character_campaign(db.Model):
    #set table name
    __tablename__ = 'character_campaigns'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    character_id = db.Column(db.Integer, db.ForeignKey('characters.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))


# character_campaigns = db.Table(
#     'character_campaigns',
#     db.Column('character_id', db.Integer, db.ForeignKey('characters.id')),
#     db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id'))
# )