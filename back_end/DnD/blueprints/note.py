# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

# import the model for this blueprint
from DnD.models import Note

# import database
from DnD.config.database_extension import db

# initialize the blueprint named notes
note_bp = Blueprint('note', __name__)

# GET route
@note_bp.route('/notes', methods=['GET'])
# get all notes and turn it in a json object
def get_notes():
    return 'Get notes route'

# POST route
@note_bp.route('/notes', methods=['POST'])
# post a new note
def new_note():
    return 'Post notes route'

# PUT route
@note_bp.route('/notes', methods=['PUT'])
# update a note
def update_note():
    return 'Update notes route'

# DELETE route
@note_bp.route('/notes', methods=['DELETE'])
# delete a note
def delete_note():
    return 'Delete notes route'