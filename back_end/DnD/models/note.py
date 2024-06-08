# notes table in Tome Tracker

from DnD.config.database_extension import db

class Note(db.Model):
    # adding a table named facts
    __tablename__ = 'notes'

    # adding items to the table
    id = db.Column(db.Integer, primary_key = True) # adds id
    title = db.Column(db.String) # adds a title
    note = db.Column(db.Text) # adds a note