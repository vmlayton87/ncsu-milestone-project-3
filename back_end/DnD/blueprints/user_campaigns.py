# blueprint/routes for the note table
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
# import the model for this blueprint
from ..models import User, Campaign

# import database
from ..config import db

# initialize the blueprint named notes
usercamp_bp = Blueprint('usercamp', __name__, url_prefix='/usercamp')

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# POST route
# create a new campaign and add it to the logged in user
@usercamp_bp.route('/', methods=['POST'])
@jwt_required()
def create_camp():
    try:
        data = request.get_json()
        # get the user id from the jwt
        user_id = get_jwt_identity()['userId']

        # get the user
        user = User.query.get(user_id)

        # create a new campaign
        new_camp = Campaign(**data)

        # add the campaign to the user
        user.campaigns.append(new_camp)
        
        db.session.add(new_camp)
        db.session.commit()

        return jsonify(new_camp.to_dict())
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to create campaign'}), 500

# GET route
# get all campaigns for the logged in user
@usercamp_bp.route('/', methods=['GET'])
@jwt_required()
def get_camps():
    try:
        user_id = get_jwt_identity()['userId']
        user = User.query.get(user_id)
        if not user:
            print("User not found")
            return jsonify({'error': 'User not found'}), 404
        # get the campaigns
        campaigns = user.campaigns
        print('checking campaigns: ', campaigns)
        # return the campaigns as a json object
        return jsonify([camp.to_dict() for camp in campaigns])

        
    except Exception as err:
        print(f"Error5533: {err}")
        return jsonify({'error': 'Failed to retrieve campaigns'}), 500