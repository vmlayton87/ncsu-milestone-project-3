# characters table in Tome Tracker

from ..config import db

#Create a 'Fact' Class
class Character(db.Model):
    #set table name
    __tablename__ = 'characters'
    
    #set columns with data types
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) # only one user per character
    name = db.Column(db.String(100))

    # Additional columns
    name = db.Column(db.String(250))
    classLevel = db.Column(db.String(250))
    background = db.Column(db.String(250))
    playerName = db.Column(db.String(250))
    faction = db.Column(db.String(250))
    race = db.Column(db.String(250))
    alignment = db.Column(db.String(250))
    xp = db.Column(db.String(250))
    dciNo = db.Column(db.String(250))

    str = db.Column(db.String(250))
    dex = db.Column(db.String(250))
    con = db.Column(db.String(250))
    int = db.Column(db.String(250))
    wis = db.Column(db.String(250))
    cha = db.Column(db.String(250))

    inspiration = db.Column(db.String(250))
    proficiencyBonus = db.Column(db.String(250))

    strSave = db.Column(db.String(250))
    strSaveChecked = db.Column(db.Boolean, default=False)
    dexSave = db.Column(db.String(250))
    dexSaveChecked = db.Column(db.Boolean, default=False)
    conSave = db.Column(db.String(250))
    conSaveChecked = db.Column(db.Boolean, default=False)
    intSave = db.Column(db.String(250))
    intSaveChecked = db.Column(db.Boolean, default=False)
    wisSave = db.Column(db.String(250))
    wisSaveChecked = db.Column(db.Boolean, default=False)
    chaSave = db.Column(db.String(250))
    chaSaveChecked = db.Column(db.Boolean, default=False)

    skillAcrobatics = db.Column(db.String(250))
    skillAcrobaticsChecked = db.Column(db.Boolean, default=False)
    skillAnimalHandling = db.Column(db.String(250))
    skillAnimalHandling_checked = db.Column(db.Boolean, default=False)
    skillArcana = db.Column(db.String(250))
    skillArcanaChecked = db.Column(db.Boolean, default=False)
    skillAthletics = db.Column(db.String(250))
    skillAthleticsChecked = db.Column(db.Boolean, default=False)
    skillDeception = db.Column(db.String(250))
    skillDeceptionChecked = db.Column(db.Boolean, default=False)
    skillHistory = db.Column(db.String(250))
    skillHistoryChecked = db.Column(db.Boolean, default=False)
    skillInsight = db.Column(db.String(250))
    skillInsightChecked = db.Column(db.Boolean, default=False)
    skillIntimidation = db.Column(db.String(250))
    skillIntimidationChecked = db.Column(db.Boolean, default=False)
    skillInvestigation = db.Column(db.String(250))
    skillInvestigationChecked = db.Column(db.Boolean, default=False)
    skillMedicine = db.Column(db.String(250))
    skillMedicineChecked = db.Column(db.Boolean, default=False)
    skillNature = db.Column(db.String(250))
    skillNatureChecked = db.Column(db.Boolean, default=False)
    skillPerception = db.Column(db.String(250))
    skillPerceptionChecked = db.Column(db.Boolean, default=False)
    skillPerformance = db.Column(db.String(250))
    skillPerformanceChecked = db.Column(db.Boolean, default=False)
    skillPersuasion = db.Column(db.String(250))
    skillPersuasionChecked = db.Column(db.Boolean, default=False)
    skillReligion = db.Column(db.String(250))
    skillReligionChecked = db.Column(db.Boolean, default=False)
    skillSlightOfHand = db.Column(db.String(250))
    skillSlightOfHandChecked = db.Column(db.Boolean, default=False)
    skillStealth = db.Column(db.String(250))
    skillStealthChecked = db.Column(db.Boolean, default=False)
    skillSurvival = db.Column(db.String(250))
    skillSurvivalChecked = db.Column(db.Boolean, default=False)

    passivePerception = db.Column(db.String(250))
    otherProficiencies = db.Column(db.String(250))

    ac = db.Column(db.String(250))
    init = db.Column(db.String(250))
    speed = db.Column(db.String(250))

    maxHp = db.Column(db.String(250))
    hp = db.Column(db.String(250))
    tempHp = db.Column(db.String(250))

    hitDiceMax = db.Column(db.String(250))
    hitDice = db.Column(db.String(250))

    deathsaveSuccesses = db.Column(db.Integer)
    deathsaveFailures = db.Column(db.Integer)

    attacks = db.Column(db.Text)
    attacksText = db.Column(db.Text)

    cp = db.Column(db.String(250))
    sp = db.Column(db.String(250))
    ep = db.Column(db.String(250))
    gp = db.Column(db.String(250))
    pp = db.Column(db.String(250))
    equipment = db.Column(db.Text)
    equipment2 = db.Column(db.Text)

    personalityTraits = db.Column(db.Text)
    ideals = db.Column(db.Text)
    bonds = db.Column(db.Text)
    flaws = db.Column(db.Text)

    featuresTraits = db.Column(db.Text)

    age = db.Column(db.String(250))
    height = db.Column(db.String(250))
    weight = db.Column(db.String(250))
    eyes = db.Column(db.String(250))
    skin = db.Column(db.String(250))
    hair = db.Column(db.String(250))

    appearance = db.Column(db.Text)
    backstory = db.Column(db.Text)

    factionImg = db.Column(db.String(250))
    factionRank = db.Column(db.String(250))
    allies = db.Column(db.Text)
    allies2 = db.Column(db.Text)

    additionalFeatures = db.Column(db.Text)
    additionalFeatures2 = db.Column(db.Text)

    totalNonConsumableMagicItems = db.Column(db.String(250))
    treasure = db.Column(db.Text)
    treasure2 = db.Column(db.Text)

    spellcastingClass = db.Column(db.String(250))
    preparedSpellsTotal = db.Column(db.String(250))
    spellSaveDc = db.Column(db.String(250))
    spellAttackBonus = db.Column(db.String(250))

    cantrips = db.Column(db.Text)

    lvl1SpellSlotsTotal = db.Column(db.String(250))
    lvl1SpellSlotsUsed = db.Column(db.Integer)
    lvl1Spells = db.Column(db.Text)

    lvl2SpellSlotsTotal = db.Column(db.String(250))
    lvl2SpellSlotsUsed = db.Column(db.Integer)
    lvl2Spells = db.Column(db.Text)

    lvl3SpellSlotsTotal = db.Column(db.String(250))
    lvl3SpellSlotsUsed = db.Column(db.Integer)
    lvl3Spells = db.Column(db.Text)

    lvl4SpellSlotsTotal = db.Column(db.String(250))
    lvl4SpellSlotsUsed = db.Column(db.Integer)
    lvl4Spells = db.Column(db.Text)

    lvl5SpellSlotsTotal = db.Column(db.String(250))
    lvl5SpellSlotsUsed = db.Column(db.Integer)
    lvl5Spells = db.Column(db.Text)

    lvl6SpellSlotsTotal = db.Column(db.String(250))
    lvl6SpellSlotsUsed = db.Column(db.Integer)
    lvl6Spells = db.Column(db.Text)

    lvl7SpellSlotsTotal = db.Column(db.String(250))
    lvl7SpellSlotsUsed = db.Column(db.Integer)
    lvl7Spells = db.Column(db.Text)

    lvl8SpellSlotsTotal = db.Column(db.String(250))
    lvl8SpellSlotsUsed = db.Column(db.Integer)
    lvl8Spells = db.Column(db.Text)

    lvl9SpellSlotsTotal = db.Column(db.String(250))
    lvl9SpellSlotsUsed = db.Column(db.Integer)
    lvl9Spells = db.Column(db.Text)
    
    # name = db.Column(db.String(250))
    # cahracter_class = db.Column(db.String(250))
    # level = db.Column(db.Integer)
    # strength = db.Column(db.String(250))
    # dexterity = db.Column(db.String(250))
    # constitution = db.Column(db.String(250))
    # intelligence = db.Column(db.String(250))
    # wisdom = db.Column(db.String(250))
    # charisma = db.Column(db.String(250))
    # currentHP = db.Column(db.String(250))
    # maxHP = db.Column(db.String(250))
    # armor_class = db.Column(db.String(250))
    # speed = db.Column(db.String(250))
    # passive_perception = db.Column(db.String(250))
    # image_url = db.Column(db.String(250))
    
    #DEFINE RELATIONSHIPS
    # one-to-many relationship with user. this allows for bidirectional relationships between user and character. One user can have many characters.
    user = db.relationship('User', back_populates = 'characters')

    # association relationship for character_campaigns. this allows for bidirectional relationships between character and campaign.
    campaigns = db.relationship('Campaign', secondary = 'character_campaigns', back_populates = 'characters', lazy='dynamic')

    # uses the inspect module to get the column attributes, then it creates a dictionary of those key value pairs. inpsect is a module that allows you to get the attributes of an object in python. This does work as intended. 
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}