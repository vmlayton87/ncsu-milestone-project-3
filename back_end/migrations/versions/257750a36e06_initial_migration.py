"""Initial migration.

Revision ID: 257750a36e06
Revises: 
Create Date: 2024-06-13 20:18:06.723760

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '257750a36e06'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=250), nullable=True),
    sa.Column('user_name', sa.String(length=250), nullable=True),
    sa.Column('hashed_password', sa.String(length=250), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('campaigns',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=250), nullable=True),
    sa.Column('dm', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=250), nullable=True),
    sa.Column('description', sa.TEXT(), nullable=True),
    sa.Column('image_url', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['dm'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('characters',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('image', sa.String(length=250), nullable=True),
    sa.Column('name', sa.String(length=250), nullable=True),
    sa.Column('classLevel', sa.String(length=250), nullable=True),
    sa.Column('background', sa.String(length=250), nullable=True),
    sa.Column('playerName', sa.String(length=250), nullable=True),
    sa.Column('faction', sa.String(length=250), nullable=True),
    sa.Column('race', sa.String(length=250), nullable=True),
    sa.Column('alignment', sa.String(length=250), nullable=True),
    sa.Column('xp', sa.String(length=250), nullable=True),
    sa.Column('dciNo', sa.String(length=250), nullable=True),
    sa.Column('str', sa.String(length=250), nullable=True),
    sa.Column('dex', sa.String(length=250), nullable=True),
    sa.Column('con', sa.String(length=250), nullable=True),
    sa.Column('int', sa.String(length=250), nullable=True),
    sa.Column('wis', sa.String(length=250), nullable=True),
    sa.Column('cha', sa.String(length=250), nullable=True),
    sa.Column('inspiration', sa.String(length=250), nullable=True),
    sa.Column('proficiencyBonus', sa.String(length=250), nullable=True),
    sa.Column('strSave', sa.String(length=250), nullable=True),
    sa.Column('strSaveChecked', sa.Boolean(), nullable=True),
    sa.Column('dexSave', sa.String(length=250), nullable=True),
    sa.Column('dexSaveChecked', sa.Boolean(), nullable=True),
    sa.Column('conSave', sa.String(length=250), nullable=True),
    sa.Column('conSaveChecked', sa.Boolean(), nullable=True),
    sa.Column('intSave', sa.String(length=250), nullable=True),
    sa.Column('intSaveChecked', sa.Boolean(), nullable=True),
    sa.Column('wisSave', sa.String(length=250), nullable=True),
    sa.Column('wisSaveChecked', sa.Boolean(), nullable=True),
    sa.Column('chaSave', sa.String(length=250), nullable=True),
    sa.Column('chaSaveChecked', sa.Boolean(), nullable=True),
    sa.Column('skillAcrobatics', sa.String(length=250), nullable=True),
    sa.Column('skillAcrobaticsChecked', sa.Boolean(), nullable=True),
    sa.Column('skillAnimalHandling', sa.String(length=250), nullable=True),
    sa.Column('skillAnimalHandling_checked', sa.Boolean(), nullable=True),
    sa.Column('skillArcana', sa.String(length=250), nullable=True),
    sa.Column('skillArcanaChecked', sa.Boolean(), nullable=True),
    sa.Column('skillAthletics', sa.String(length=250), nullable=True),
    sa.Column('skillAthleticsChecked', sa.Boolean(), nullable=True),
    sa.Column('skillDeception', sa.String(length=250), nullable=True),
    sa.Column('skillDeceptionChecked', sa.Boolean(), nullable=True),
    sa.Column('skillHistory', sa.String(length=250), nullable=True),
    sa.Column('skillHistoryChecked', sa.Boolean(), nullable=True),
    sa.Column('skillInsight', sa.String(length=250), nullable=True),
    sa.Column('skillInsightChecked', sa.Boolean(), nullable=True),
    sa.Column('skillIntimidation', sa.String(length=250), nullable=True),
    sa.Column('skillIntimidationChecked', sa.Boolean(), nullable=True),
    sa.Column('skillInvestigation', sa.String(length=250), nullable=True),
    sa.Column('skillInvestigationChecked', sa.Boolean(), nullable=True),
    sa.Column('skillMedicine', sa.String(length=250), nullable=True),
    sa.Column('skillMedicineChecked', sa.Boolean(), nullable=True),
    sa.Column('skillNature', sa.String(length=250), nullable=True),
    sa.Column('skillNatureChecked', sa.Boolean(), nullable=True),
    sa.Column('skillPerception', sa.String(length=250), nullable=True),
    sa.Column('skillPerceptionChecked', sa.Boolean(), nullable=True),
    sa.Column('skillPerformance', sa.String(length=250), nullable=True),
    sa.Column('skillPerformanceChecked', sa.Boolean(), nullable=True),
    sa.Column('skillPersuasion', sa.String(length=250), nullable=True),
    sa.Column('skillPersuasionChecked', sa.Boolean(), nullable=True),
    sa.Column('skillReligion', sa.String(length=250), nullable=True),
    sa.Column('skillReligionChecked', sa.Boolean(), nullable=True),
    sa.Column('skillSlightOfHand', sa.String(length=250), nullable=True),
    sa.Column('skillSlightOfHandChecked', sa.Boolean(), nullable=True),
    sa.Column('skillStealth', sa.String(length=250), nullable=True),
    sa.Column('skillStealthChecked', sa.Boolean(), nullable=True),
    sa.Column('skillSurvival', sa.String(length=250), nullable=True),
    sa.Column('skillSurvivalChecked', sa.Boolean(), nullable=True),
    sa.Column('passivePerception', sa.String(length=250), nullable=True),
    sa.Column('otherProficiencies', sa.String(length=250), nullable=True),
    sa.Column('ac', sa.String(length=250), nullable=True),
    sa.Column('init', sa.String(length=250), nullable=True),
    sa.Column('speed', sa.String(length=250), nullable=True),
    sa.Column('maxHp', sa.String(length=250), nullable=True),
    sa.Column('hp', sa.String(length=250), nullable=True),
    sa.Column('tempHp', sa.String(length=250), nullable=True),
    sa.Column('hitDiceMax', sa.String(length=250), nullable=True),
    sa.Column('hitDice', sa.String(length=250), nullable=True),
    sa.Column('deathsaveSuccesses', sa.Integer(), nullable=True),
    sa.Column('deathsaveFailures', sa.Integer(), nullable=True),
    sa.Column('attacks', sa.Text(), nullable=True),
    sa.Column('attacksText', sa.Text(), nullable=True),
    sa.Column('cp', sa.String(length=250), nullable=True),
    sa.Column('sp', sa.String(length=250), nullable=True),
    sa.Column('ep', sa.String(length=250), nullable=True),
    sa.Column('gp', sa.String(length=250), nullable=True),
    sa.Column('pp', sa.String(length=250), nullable=True),
    sa.Column('equipment', sa.Text(), nullable=True),
    sa.Column('equipment2', sa.Text(), nullable=True),
    sa.Column('personalityTraits', sa.Text(), nullable=True),
    sa.Column('ideals', sa.Text(), nullable=True),
    sa.Column('bonds', sa.Text(), nullable=True),
    sa.Column('flaws', sa.Text(), nullable=True),
    sa.Column('featuresTraits', sa.Text(), nullable=True),
    sa.Column('age', sa.String(length=250), nullable=True),
    sa.Column('height', sa.String(length=250), nullable=True),
    sa.Column('weight', sa.String(length=250), nullable=True),
    sa.Column('eyes', sa.String(length=250), nullable=True),
    sa.Column('skin', sa.String(length=250), nullable=True),
    sa.Column('hair', sa.String(length=250), nullable=True),
    sa.Column('appearance', sa.Text(), nullable=True),
    sa.Column('backstory', sa.Text(), nullable=True),
    sa.Column('factionImg', sa.String(length=250), nullable=True),
    sa.Column('factionRank', sa.String(length=250), nullable=True),
    sa.Column('allies', sa.Text(), nullable=True),
    sa.Column('allies2', sa.Text(), nullable=True),
    sa.Column('additionalFeatures', sa.Text(), nullable=True),
    sa.Column('additionalFeatures2', sa.Text(), nullable=True),
    sa.Column('totalNonConsumableMagicItems', sa.String(length=250), nullable=True),
    sa.Column('treasure', sa.Text(), nullable=True),
    sa.Column('treasure2', sa.Text(), nullable=True),
    sa.Column('spellcastingClass', sa.String(length=250), nullable=True),
    sa.Column('preparedSpellsTotal', sa.String(length=250), nullable=True),
    sa.Column('spellSaveDc', sa.String(length=250), nullable=True),
    sa.Column('spellAttackBonus', sa.String(length=250), nullable=True),
    sa.Column('cantrips', sa.Text(), nullable=True),
    sa.Column('lvl1SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl1SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl1Spells', sa.Text(), nullable=True),
    sa.Column('lvl2SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl2SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl2Spells', sa.Text(), nullable=True),
    sa.Column('lvl3SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl3SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl3Spells', sa.Text(), nullable=True),
    sa.Column('lvl4SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl4SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl4Spells', sa.Text(), nullable=True),
    sa.Column('lvl5SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl5SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl5Spells', sa.Text(), nullable=True),
    sa.Column('lvl6SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl6SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl6Spells', sa.Text(), nullable=True),
    sa.Column('lvl7SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl7SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl7Spells', sa.Text(), nullable=True),
    sa.Column('lvl8SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl8SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl8Spells', sa.Text(), nullable=True),
    sa.Column('lvl9SpellSlotsTotal', sa.String(length=250), nullable=True),
    sa.Column('lvl9SpellSlotsUsed', sa.Integer(), nullable=True),
    sa.Column('lvl9Spells', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('character_campaigns',
    sa.Column('character_id', sa.Integer(), nullable=False),
    sa.Column('campaign_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['campaign_id'], ['campaigns.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['character_id'], ['characters.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('character_id', 'campaign_id')
    )
    op.create_table('notes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=250), nullable=True),
    sa.Column('text', sa.TEXT(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('campaign_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['campaign_id'], ['campaigns.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_campaigns',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('campaign_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['campaign_id'], ['campaigns.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('user_id', 'campaign_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_campaigns')
    op.drop_table('notes')
    op.drop_table('character_campaigns')
    op.drop_table('characters')
    op.drop_table('campaigns')
    op.drop_table('users')
    # ### end Alembic commands ###