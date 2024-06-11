# user_campaigns table in Tome Tracker

from DnD.config.database_extension import db

class User_campaign(db.Model):
    #set table name
    __tablename__ = 'user_campaigns'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}
        
# user_campaigns = db.Table(
#     'user_campaigns',
#     db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
#     db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id'))
# )