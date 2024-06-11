# character_campaigns table in Tome Tracker
from sqlalchemy.inspection import inspect
from DnD.config.database_extension import db

class Character_campaign(db.Model):
    #set table name
    __tablename__ = 'character_campaigns'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    character_id = db.Column(db.Integer, db.ForeignKey('characters.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}

# character_campaigns = db.Table(
#     'character_campaigns',
#     db.Column('character_id', db.Integer, db.ForeignKey('characters.id')),
#     db.Column('campaign_id', db.Integer, db.ForeignKey('campaigns.id'))
# )