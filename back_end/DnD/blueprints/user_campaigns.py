# blueprint/routes for the note table
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
# import the model for this blueprint
from ..models import User, Campaign, UserCampaigns

# import database
from ..config import db

# initialize the blueprint named notes
usercamp_bp = Blueprint('usercamp', __name__, url_prefix='/usercamp')

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# POST route
# logged in, create new campaign
@usercamp_bp.route('/', methods=['POST'])
@jwt_required()
def create_camp():
    try:
        data = request.get_json()
        print('testing what data looks like: ', data)
        # get the user id from the jwt
        user_id = get_jwt_identity()['userId']
        print('testing what user_id looks like: ', user_id)
        # get the user
        user = User.query.get(user_id)
        # user = user.to_dict()
        print('testing what user looks like: ', user)
        # create a new campaign
        new_camp = Campaign(**data)
        print('testing what new_camp looks like: ', new_camp)

        # adds the campaign and user info to the user_campaign table
        user_campaign = UserCampaigns(user_id=user_id, campaign_id=new_camp.id, user=user, campaign=new_camp)

        db.session.add(user_campaign)
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
        # get the campaigns
        campaigns = [campaign.to_dict() for campaign in user.campaigns]
        print('checking campaigns: ', campaigns)
        # return the campaigns as a json object
        return jsonify(campaigns)

        
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve campaigns'}), 500

# join a campaign
@usercamp_bp.route('/join', methods=['PUT'])
@jwt_required()
def join_camp(campaign_id):
    
    try:
        data = request.get_json()
        campaign_id = data.get('campaign_id')
        password = data.get('password')

        user_id = get_jwt_identity()['userId']
        user = User.query.get(user_id)

        
        campaign = Campaign.query.get(campaign_id)

        if campaign.password == password:
            user.campaigns.append(campaign)

            user_campaign = UserCampaigns(user_id=user_id, campaign_id=new_camp.id, user=user, campaign=new_camp)
            db.session.commit()
            return jsonify(campaign.to_dict())
        else:
            return jsonify({'error': 'Incorrect password'}), 400
        
        


        
        user.campaigns.append(campaign)


        db.session.commit()
        return jsonify(campaign.to_dict())
    except Exception as err:
        print(f"Error: {err}")