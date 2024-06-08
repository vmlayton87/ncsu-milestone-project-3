from .. import db



#Create a 'Fact' Class
class Note(db.Model):
    #set table name
    __tablename__ = 'notes'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    text = db.Column(db.TEXT)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))
    
    #define relationships
    user = db.relationship('User', back_populates = 'notes')
    campaign = db.relationship('Campaign', back_populates = 'notes')
