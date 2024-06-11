# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

# import the model for this blueprint
from DnD.models import Campaign

# import database
from DnD.config.database_extension import db

# initialize the blueprint named notes
campaign_bp = Blueprint('campaign', __name__, url_prefix='/campaigns')

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# GET route
@campaign_bp.route('/', methods=['GET'])
# get all notes and turn it in a json object
def get_campaigns():
    
    try:
        results = Campaign.query.all()
        # itierates through the results object, then gets the attributes and puts them in a list using a method defined in the model
        campaign_data = [result.to_dict() for result in results]
        return jsonify(campaign_data)
        
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve campaigns'}), 500
    
# GET route for a single campaign
@campaign_bp.route('/<int:campaign_id>', methods=['GET'])
def get_user(campaign_id):
    try:
        result = Campaign.query.get(campaign_id)
        return jsonify(result.to_dict())
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve campaign'}), 500

# POST route
@campaign_bp.route('/', methods=['POST'])
# post a new campaign
def new_campaign():
    try:
        
        data = request.get_json() #get_json gets the json request.
        
        new_campaign = Campaign(**data)  # the ** unpacks the dictionary data and passes its key value pairs as arguments 
        db.session.add(new_campaign)
        db.session.commit()
        # print('testing what new_campaign looks like: ', new_campaign)
        return jsonify(new_campaign.to_dict()) #returns the new_campaign
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to create campaign'}), 500

# PUT route
@campaign_bp.route('/<int:campaign_id>', methods=['PUT'])
def update_user(campaign_id):
    data = request.get_json() #get_json gets the json request.
    campaign = Campaign.query.get(campaign_id)
    try:
        Campaign.query.filter_by(id=campaign_id).update(data)
        db.session.commit()
        updated_campaign = Campaign.query.get(campaign_id)
        return jsonify(updated_campaign.to_dict())
    except Exception as err:
            print(f"Error: {err}")
            return jsonify({'error': 'Failed to update campaign'}), 500

# DELETE route
@campaign_bp.route('/<int:campaign_id>', methods=['DELETE'])
def delete_campaign(campaign_id):
    try:
        Campaign.query.filter_by(id=campaign_id).delete()
        db.session.commit()
        return jsonify({'message': 'Campaign deleted successfully'})
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to delete campaign'}), 500
    