# blueprint/routes for the note table
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

# import the model for this blueprint
from ..models import Character, User

# import database
from ..config import db

# initialize the blueprint named notes
char_bp = Blueprint('character', __name__, url_prefix='/characters')

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# gets all characters after logging in
@char_bp.route('/', methods=['GET'])
@jwt_required()
def get_chars():
    try:
        user_id = get_jwt_identity()['userId']
        user = User.query.get(user_id)
        characters = [char.to_dict() for char in user.characters]
        return jsonify(characters)
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve characters'}), 500


# create character after logging in
@char_bp.route('/', methods=['POST'])
@jwt_required()
def create_char():
    try:
        data = request.get_json() #get_json gets the json request.
        # get the user id from the jwt
        user_id = get_jwt_identity()['userId']

        # get the user
        user = User.query.get(user_id)

        # create a new character
        new_char = Character(**data)

        # add the character to the user
        user.characters.append(new_char)
        
        db.session.add(new_char)
        db.session.commit()

        return jsonify(new_char.to_dict())
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to create character'}), 500


# add character to campaign
@char_bp.route('/<int:char_id>/campaigns/<int:campaign_id>', methods=['POST'])
@jwt_required()
def add_char_to_camp(char_id, campaign_id):
    try:
        data = request.get_json()
        user_id = get_jwt_identity()['userId']
        user = User.query.get(user_id)

        character = Character.query.get(char_id)
        campaign = Campaign.query.get(campaign_id)
        
        campaign.characters.append(character)

        db.session.commit()
        return jsonify(character.to_dict())
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to add character to campaign'}), 500


# # GET route
# @char_bp.route('/', methods=['GET'])
# # get all notes and turn it in a json object
# def get_chars():
    
#     try:
#         results = Character.query.all()
#         # itierates through the results object, then gets the attributes and puts them in a list using a method defined in the model
#         char_data = [result.to_dict() for result in results]
#         return jsonify(char_data)
        
#     except Exception as err:
#         print(f"Error: {err}")
#         return jsonify({'error': 'Failed to retrieve characters'}), 500
    
# # GET route for a single character
# @char_bp.route('/<int:char_id>', methods=['GET'])
# def get_char(char_id):
#     try:
#         result = Character.query.get(char_id)
#         return jsonify(result.to_dict())
#     except Exception as err:
#         print(f"Error: {err}")
#         return jsonify({'error': 'Failed to retrieve character'}), 500

# # POST route
# @char_bp.route('/', methods=['POST'])
# # post a new character
# def new_char():
#     try:
#         data = request.get_json() #get_json gets the json request.
#         new_char = Character(**data)  # the ** unpacks the dictionary data and passes its key value pairs as arguments 
#         db.session.add(new_char)
#         db.session.commit()
#         # print('testing what new_char looks like: ', new_char)
#         return jsonify(new_char.to_dict()) #returns the new_char
#     except Exception as err:
#         print(f"Error: {err}")
#         return jsonify({'error': 'Failed to create character'}), 500

# # PUT route
# @char_bp.route('/<int:char_id>', methods=['PUT'])
# def update_char(char_id):
#     data = request.get_json() #get_json gets the json request.
#     character = Character.query.get(char_id)
#     try:
#         Character.query.filter_by(id=char_id).update(data)
#         db.session.commit()
#         updated_char = Character.query.get(char_id)
#         return jsonify(updated_char.to_dict())
#     except Exception as err:
#             print(f"Error: {err}")
#             return jsonify({'error': 'Failed to update character'}), 500

# # DELETE route
# @char_bp.route('/<int:char_id>', methods=['DELETE'])
# def delete_char(char_id):
#     try:
#         Character.query.filter_by(id=char_id).delete()
#         db.session.commit()
#         return jsonify({'message': 'Character deleted successfully'})
#     except Exception as err:
#         print(f"Error: {err}")
#         return jsonify({'error': 'Failed to delete character'}), 500
    