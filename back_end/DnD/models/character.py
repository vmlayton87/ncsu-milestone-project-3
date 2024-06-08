from .. import db



#Create a 'Fact' Class
class Character(db.Model):
    #set table name
    __tablename__ = 'characters'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    ###NEED TO ADD ALL OTHER COLUMNS FOR CHARACTER###
    
    
    #define relationships
    user = db.relationship('User', back_populates = 'characters')
    campaigns = db.relationship('Campaign', secondary = 'character_campaigns', back_populates = 'characters')