from .. import db


class User_campaign(db.Model):
    #set table name
    __tablename__ = 'user_campaigns'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))

# user_campaigns = db.Table(
#     'user_campaigns',
#     db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
#     db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id'))
# )