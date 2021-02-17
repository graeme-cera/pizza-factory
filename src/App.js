import './App.css';
import {ComponentFactory} from './components/componentFactory';

const formConfiguration = {
  sections: [

    { name:'clientBio', label:'My Biography',
      questions: [
        { type: 'narrativeQuestion', name : 'clientBio_lifeHistory', label: 'My Life History and Expectations for the Future'},
        { type: 'narrativeQuestion', name : 'clientBio_culturalNeeds', label: 'My Religious and Cultural Needs'},
        { type: 'narrativeQuestion', name : 'clientBio_interests', label: 'My Interests & Hobbies'},
      ]
    },

    { name:'clientOutcomes', label:'My Planned Route to Meet the Outcomes I want to Achieve',
      questions: [
        { type: 'outcomeQuestion', name : 'clientOutcome_01', label: 'My first outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_02', label: 'My second outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_03', label: 'My third outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_04', label: 'My fourth outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_05', label: 'My fifth outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_06', label: 'My sixth outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_07', label: 'My seventh outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_08', label: 'My eight outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_09', label: 'My ninth outcome'},
        { type: 'outcomeQuestion', name : 'clientOutcome_10', label: 'My tenth outcome'}
      ]
    },
    { name:'commissionedOutcomes', label:'Commissioned Outcomes',
      questions: [
        { type: 'outcomeQuestion', name : 'commissionedOutcome_01', label: 'First commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_02', label: 'Second commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_03', label: 'Third commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_04', label: 'Fourth commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_05', label: 'Fifth commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_06', label: 'Sixth commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_07', label: 'Seventh commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_08', label: 'Eight commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_09', label: 'Ninth commissioned outcome'},
        { type: 'outcomeQuestion', name : 'commissionedOutcome_10', label: 'Tenth commissioned outcome'}
      ]
    },
    { name:'visitSchedule', label:'My visit schedule',
      questions: [
        { type: 'visitScheduleQuestion', name : 'visitSchedule_monday', label: 'Monday'},
        { type: 'visitScheduleQuestion', name : 'visitSchedule_tuesday', label: 'Tuesday'},
        { type: 'visitScheduleQuestion', name : 'visitSchedule_wednesday', label: 'Wednesday'},
        { type: 'visitScheduleQuestion', name : 'visitSchedule_thursday', label: 'Thursday'},
        { type: 'visitScheduleQuestion', name : 'visitSchedule_friday', label: 'Friday'},
        { type: 'visitScheduleQuestion', name : 'visitSchedule_saturday', label: 'Saturday'},
        { type: 'visitScheduleQuestion', name : 'visitSchedule_sunday', label: 'Sunday'},
      ]
    },
    { name:'decisionsAroundMyCare', label:'Decisions around my care',
      questions: [
        { type: 'narrativeQuestion', name : 'decisionsAroundCare_allDecisions', label: 'I am able to make decisions on all aspects of my life including day to day decisions, finance and welfare decisions'},
        { type: 'narrativeQuestion', name : 'decisionsAroundCare_informalDecisions', label: 'I am usually able to make day-to-day informal decisions about my care and support'},
        { type: 'narrativeQuestion', name : 'decisionsAroundCare_formalDecisions', label: 'I may need support to make more formal, complex decisions such as consent to my care plan (Undertake a mental capacity assessment and best interest consultation if applicable)'},
        { type: 'narrativeQuestion', name : 'decisionsAroundCare_powerOfAttorney', label: 'I have a Lasting Power of Attorney (if yes, specify if it for finance, health & welfare or both - put reference number in details box)'},
      ]
    },
    { name:'dailyRoutine', label:'Daily routine',
      questions: [
        {  type: 'narrativeQuestion', name : 'dailyRoutine_needsSummary', label: 'Summary of My Needs and Conditions and how this affects My Daily Routine'},
        {  type: 'narrativeQuestion', name : 'dailyRoutine_selfSuffiency', label: 'What I can do for myself'},
        {  type: 'riskAssessedActivityQuestion', name : 'dailyRoutine_morning', label: 'My Mornings'},
        {  type: 'riskAssessedActivityQuestion', name : 'dailyRoutine_noon', label: 'My Lunch'},
        {  type: 'riskAssessedActivityQuestion', name : 'dailyRoutine_afternoon', label: 'My Afternoons'},
        {  type: 'riskAssessedActivityQuestion', name : 'dailyRoutine_evening', label: 'My Evenings'},
        {  type: 'riskAssessedActivityQuestion', name : 'dailyRoutine_night', label: 'My Nights'},

        { type: 'narrativeQuestion', name : 'dailyRoutine_liveinBreaks', label: 'How Will Live In Breaks be Facilitated?'},
        { type: 'narrativeQuestion', name : 'dailyRoutine_shopping', label: 'My Shopping'},
        { type: 'narrativeQuestion', name : 'dailyRoutine_houseKeeping', label: 'My Housekeeping Preferences'},
        { type: 'narrativeQuestion', name : 'dailyRoutine_liveinCarerFoodArrangements', label: 'Agreed Live In Carer Food Arrangements'},

        { type: 'financialRequirementsQuestion', name : 'financial_requirements', label: 'My Financial Requirements'},
        { type: 'clientDependencyLevelQuestion', name : 'client_dependencyLevel', label: 'Dependency Level'},
        
      ]
    },
    { name:'communicationNeeds', label:'My Communication Needs',
      questions: [
        { type: 'languageQuestion', name : 'communicationNeeds_preferredLanguage', label: 'Languages'},
        { type: 'narrativeQuestion', name : 'communicationNeeds_assistedHearing', label: 'Do you use a hearing aid? '},
        { type: 'narrativeQuestion', name : 'communicationNeeds_assistedSight', label: 'Do you need to wear glasses? '},
        { type: 'narrativeQuestion', name : 'communicationNeeds_specialNeeds', label: 'Do you have any specialist communication needs? (consider sign language, braille, makaton etc.)'},
        { type: 'narrativeQuestion', name : 'communicationNeeds_documentationFormat', label: 'Do you need information to be provided to you in any particular format for example in large print?'},
     ]
    },

    { name:'medicationNeeds', label:'Medication Needs',
      helpText: 'Summarise directions for carers including actions identified by medication needs assessment below and how and when the Client takes their medication. Always refer to the MAR chart and complete / refer to PRN directions where relevant. Notify management immediately of: any changes to my medication, side effects, concerns, lack of clarity about medication or doses to give.',
      questions: [
        { type: 'medicationNeeds', name : 'medicationNeeds_details', label: 'Detailed medical needs.'},
      ]
    },

    { name:'medicationRiskAssessment', label:'My Medication Risk Assessment', 
      helpText: 'The assessor will make a decision regarding the level of risk related to medication support using answers to the above questions identifying any control measures that need to be implemented.',
      questions: [
        { type: 'riskQuestion', name : 'medicationRisk_allergies', label: 'Allergies'},
        { type: 'riskQuestion', name : 'medicationRisk_anticoagulants', label: 'Anticoagulants'},
        { type: 'riskQuestion', name : 'medicationRisk_storage', label: 'Storage'},
        { type: 'riskQuestion', name : 'medicationRisk_monitoredDosageSystem', label: 'Use of monitored dosage system'},
        { type: 'riskQuestion', name : 'medicationRisk_PRNMedicines', label: 'One or more PRN medicines'},
        { type: 'riskQuestion', name : 'medicationRisk_painRelief', label: 'One or more of medicines are for pain relief'},
        { type: 'riskQuestion', name : 'medicationRisk_timeSensitive', label: 'One or more medicines are time-sensitive'},
        { type: 'riskQuestion', name : 'medicationRisk_covertMedication', label: 'One or more medicines are covert'},
        { type: 'riskQuestion', name : 'medicationRisk_BIDecision', label: 'Has BI decision been made including GP?'},
        { type: 'riskQuestion', name : 'medicationRisk_homelyRemedies', label: 'Non-prescribed medication (homely remedies)'},
        { type: 'riskQuestion', name : 'medicationRisk_orderArrangements', label: 'Order, collect or arrange delivery of medication'},
      ]
    },

    { name:'handlingNeeds', label:'My Moving & Handling Needs',
      questions: [
        { type: 'movingAndHandlingNeeds', name : 'handlingNeeds_details', label: 'Detailed moving & handling needs.'},
        { type: 'narrativeQuestion', name : 'handlingNeeds_careDelivery', label: 'My Mobility & Effect on Delivery of Care.'},
      ]
    },
    { name:'handlingRiskAssessment', label:'My Moving & Handling Risk Assessment',
      questions: [
        {type: 'personalRiskQuestion', name : 'handlingRisk_standing', label: 'Standing'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_walking', label: 'Walking'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_inAndOutOfBed', label: 'In / out of bed'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_bathing', label: 'Bathing / showering'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_washingAndDressing', label: 'Washing / Dressing'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_toileting', label: 'Toileting'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_usingTheStairs', label: 'Using the stairs'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_inAndOutOfCar', label: 'In/out of car'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_stiffness', label: 'Stiffness'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_paralysis', label: 'Paralysis'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_skinDamage', label: 'Skin damage'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_fragileSkin', label: 'Fragile skin'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_muscularSpasams', label: 'Muscular Spasams'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_weakness', label: 'Weakness (please state)'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_balanceSittingAndStanding', label: 'Cannot balance sitting / standing'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_localisedPain', label: 'Localised pain'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_sightImpairment', label: 'Sight Impairment'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_hearingImpairment', label: 'Hearing Impairment'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_speechImpairment', label: 'Speech Impairment'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_behaviour', label: 'Variable / aggressive behaviour'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_confusion', label: 'Confusion'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_cooperation', label: 'Co-operation'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_comprehension', label: 'Understanding / comprehension'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_understandsLimitations', label: 'Understand own limitations'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_confidenceLoss', label: 'Loss of confidence'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_additionalFactors', label: 'Additional factors (e.g. MRSA, Covid-19)'},
        { type: 'personalRiskQuestion', name : 'handlingRisk_otherFactors', label: 'Other (please state)'}
      ]
    }
  ], 
  shortCodes: {
    RMHT : 'Risk of musculoskeletal injuries, if correct moving and handling training and training techniques are not followed.\n',
    PCMH : 'Professional Carer to f ollow their moving and handling training and training techniques.\n\nProfessional Carer to follow safe transfer guidance.\n',

    RMEQ : 'Risk of musculoskeletal/soft tissue injuries due incorrect use of equipment.\n',
    PCEQ : 'Professional Carer to ensure equipment services are in date and they undertake a visual check of equipment prior to use.\n',

    RMWF : 'Risk of musculoskeletal injuries from slips and falls on wet floor.\n',
    RCCP : 'Use of products for cleaning may result in skin irritation.\n',
    PCWG : 'Carers to wear gloves whilst undertaking cleaning tasks.\n',

    RCOVID : 'Contracting COVID-19 which could lead to serious illness, hospital admission or death.\n',
    PCOVID : 'Professional Carers to wear correct PPE in line with Government Guidance at all times.\n\nProfessional Carer to practice good hand hygiene at all times.\n\nProfessional Carers to be fully trained in infection control procedures.\n\nProfessional Carers to follow Government Guidance on self-isolation if they experience symptoms of COVID-19.\n\nProfessional Carers to refer to Covid 19 RAs for service delivery and service delivery for a confirmed or suspected Client with Covid 19.\n',
    
    RFLU : 'Contracting seasonal flu which could lead to serious illness, hospital admission or death.\n',
    PFLU : 'Encourage Clients and Professional Carers to have the seasonal flu jab.\n\nFollow infection control processes.\n\nEnsure infection control training is up to date.\n',
  
    PCMT : 'Professional Carer to follow their medication training and remember the 6 R’s.\n',
    MARC : 'The MAR chart must be read and completed.\n',

    PCBW : 'Professional Carers are to assist him with a bed wash and report concerns to the office and in the comms log.\n',
    PCHI : 'Carers to ensure that Client has hearing aids in.\n\nCarers to check that Client has heard and understood what is going on in relation to moving and handling.\n',
    PCRR : 'Carers should ensure that they explain what is going on and keep repeating this and offering reassurance.\n',
    PCLD : 'Carers should record in the daily log any signs of distress.\n',
    PCIO : 'Carers should inform the office of any concerns or issues.\n',
    PCCG : 'Carers to ensure that the Client always has their glasses with them and that they are cleaned everyday.\n',
    PCRS : 'Ensure that there is a condition factsheet in the care plan so carers are aware of signs and symptoms.\n\nCarers to ring 999 if they suspect that the Client is having stroke.\n',
    PCLL : 'Professional Carers are to ensure the Client is left with their lifeline on and this is recorded in the Clients comms log at the end of every visit.\n',
    
    IUMI : 'I am unable to mobilise independently.\n',
    CCUD : 'Client may become confused and not understand what is happening which could lead to distress.\n',
    NA : 'Not applicable',
    ANA : 'Assessed - not applicable',
    CNA : 'Checked - not applicable',

    NR : 'No significant risk',
    ANR : 'Assessed - no significant risk',
    CNR : 'Checked - no significant risk',

    NCI: 'No carer involvement',

    OCFOOD: 'I enjoy the food and drinks I like and receive the support I need to eat, drink and stay healthy.',
    OCMOVE: 'I am supported to move around safely as and when needed.',
    OCCARE: 'I receive the personal care and support I need and feel respected and valued.',
    OCWELL: 'I receive the care and support I need to support my emotional well-being.',
    OCMEDS: 'I receive the care and support I need to live well with my long term conditions.',
    OCINFO: 'I receive and understand information and advice in a format or language that is right for me.',
  }
};

const formResponses = {
  responses: [
    {name : 'clientBio_lifeHistory_details', value: 'I was born and raised in Peckham Rye and moved to Waterloo 35 years ago. I have seen a lot of changes to the area within this time but I love living in the city.\n\nI worked as a Postman in a neighbouring London Borough for 30 years however I have long retired.\n\nI was married to my wife, Joan, who passed away in 2018 I have two children, a son called George and a daughter called Donna. I have a great relationship with both my children and they come and visit me every week. My children really support me to carry on living at home. Both my children live nearby.\n\nI used to really enjoy my summer holidays and we would often go abroad, our favourite countries to visit were Cyprus and the Greek islands. I loved to feel the sun on my back.\n\nI really want to remain living at home and to be visited regularly by my children and grandchildren.'},
    {name : 'clientBio_culturalNeeds_details', value: 'I am a Christian and used to go to church regularly, due to a decline in my mobility I am no longer able to attend church but like to watch ‘Songs of praise’ on the BBC on a Sunday.'},
    {name : 'clientBio_interests_details', value: 'I really enjoy watching the races on TV. I enjoy the odd flutter and place a bet on my favourite horse. I don’t have much luck but I don’t actually bet that much money, I just love the thrill.\n\nI also enjoy watching TV programmes such as the Chase and First Dates, which reminds me of how I first courted Joan.\n\nSometimes my friend, Mavis, comes round to watch TV with me.\n\nI enjoy spending time with Donna and every couple of weeks we go out in her car (which takes my wheelchair) and we go shopping and pop into the local pub for lunch and a beer.'},
    
    {name : 'decisionsAroundCare_informalDecisions_details', value: 'I have been diagnosed with dementia, and need lots of support to eat and drink.\n\nI am unable to always make choices about what I would like to eat.\n\nI struggle to make choices on what to wear so will need my carers to support me with this.'},
    {name : 'decisionsAroundCare_formalDecisions_details', value: 'I have been diagnosed with dementia, and therefore I often find it difficult to understand complex decisions.'},
    {name : 'decisionsAroundCare_powerOfAttorney_details', value: 'XX334466749\nBoth'},
    
    {name: 'dailyRoutine_needsSummary_details', value: 'I suffered a serious stroke in 2015, this has resulted in me being unable to weight bear so I need to use a hoist for all transfers.\n\nThe stroke has also left me with some right sided weakness.\n\nI was diagnosed with dementia at the beginning of 2018 - this has meant that I need support to make some day to day decisions and will need to be encouraged to receive personal care and to eat and drink.'},
    {name: 'dailyRoutine_selfSuffiency_details', value: 'I am able to wash my face if my carer hands me the flannel and towel.\n\nI can hold my electric shaver so I am able to still shave my face every morning\n\nI am able to hold cutlery to eat with but I will need prompting to eat and drink.'},

    {name : 'dailyRoutine_shopping_details', value: 'No carer involvement. My daughter Donna does the shopping.'},
    {name : 'dailyRoutine_houseKeeping_details', value: 'My carer is to leave the bathroom clean and tidy.\n\nMy carer is to leave the kitchen clean and tidy after meal preparation.\n\nI have a cleaner twice a week who cleans the house.'},

    {name : 'communicationNeeds_assistedHearing_details', value: 'I wear a hearing aid in both ears, I will need support to put them in and switch them on.\n\nPlease make sure the battery is working.'},
    {name : 'communicationNeeds_assistedSight_details', value: 'I wear glasses for watching TV please ensure that they are positioned close to me so I can put them on. Please ensure that they are cleaned every morning.'},

    {name : 'handlingRisk_muscularSpasams_riskToCarer', value: 'Risk of musculoskeletal/soft tissue injuries due incorrect use of equipment.'},
    {name : 'handlingRisk_muscularSpasams_riskToClient', value: 'Risk of musculoskeletal injuries, if correct moving and handling training and training techniques are not followed.'},
    {name : 'handlingRisk_muscularSpasams_initialRiskLevel', value: 'H'},
    {name : 'handlingRisk_muscularSpasams_riskControlMeasures', value: 'Professional Carer to ensure equipment services are in date and they undertake a visual check of equipment prior to use.\n\nProfessional Carer to follow their moving and handling training and training techniques.\n\nProfessional Carer to follow safe transfer guidance.'},
    {name : 'handlingRisk_muscularSpasams_residualRiskLevel', value: 'M'},

    {name : 'visitSchedule_monday_morning_startTime', value: '09:00'},
    {name : 'visitSchedule_monday_morning_endTime', value: '10:00'},
    {name : 'visitSchedule_monday_morning_numberOfCarers', value: '2'},
    {name : 'visitSchedule_monday_noon_startTime', value: '12:30'},
    {name : 'visitSchedule_monday_noon_endTime', value: '13:00'},
    {name : 'visitSchedule_monday_noon_numberOfCarers', value: '2'},    
    {name : 'visitSchedule_monday_evening_startTime', value: '17:30'},
    {name : 'visitSchedule_monday_evening_endTime', value: '18:00'},
    {name : 'visitSchedule_monday_evening_numberOfCarers', value: '2'},
    {name : 'visitSchedule_monday_night_startTime', value: '21:30'},
    {name : 'visitSchedule_monday_night_endTime', value: '22:00'},
    {name : 'visitSchedule_monday_night_numberOfCarers', value: '2'},

    {name : 'visitSchedule_tuesday_morning_startTime', value: '09:00'},
    {name : 'visitSchedule_tuesday_morning_endTime', value: '10:00'},
    {name : 'visitSchedule_tuesday_morning_numberOfCarers', value: '2'},
    {name : 'visitSchedule_tuesday_noon_startTime', value: '12:30'},
    {name : 'visitSchedule_tuesday_noon_endTime', value: '13:00'},
    {name : 'visitSchedule_tuesday_noon_numberOfCarers', value: '2'},    
    {name : 'visitSchedule_tuesday_evening_startTime', value: '17:30'},
    {name : 'visitSchedule_tuesday_evening_endTime', value: '18:00'},
    {name : 'visitSchedule_tuesday_evening_numberOfCarers', value: '2'},
    {name : 'visitSchedule_tuesday_night_startTime', value: '21:30'},
    {name : 'visitSchedule_tuesday_night_endTime', value: '22:00'},
    {name : 'visitSchedule_tuesday_night_numberOfCarers', value: '2'},

    {name : 'visitSchedule_wednesday_morning_startTime', value: '09:00'},
    {name : 'visitSchedule_wednesday_morning_endTime', value: '10:00'},
    {name : 'visitSchedule_wednesday_morning_numberOfCarers', value: '2'},
    {name : 'visitSchedule_wednesday_noon_startTime', value: '12:30'},
    {name : 'visitSchedule_wednesday_noon_endTime', value: '13:00'},
    {name : 'visitSchedule_wednesday_noon_numberOfCarers', value: '2'},    
    {name : 'visitSchedule_wednesday_evening_startTime', value: '17:30'},
    {name : 'visitSchedule_wednesday_evening_endTime', value: '18:00'},
    {name : 'visitSchedule_wednesday_evening_numberOfCarers', value: '2'},
    {name : 'visitSchedule_wednesday_night_startTime', value: '21:30'},
    {name : 'visitSchedule_wednesday_night_endTime', value: '22:00'},
    {name : 'visitSchedule_wednesday_night_numberOfCarers', value: '2'},

    {name : 'visitSchedule_thursday_morning_startTime', value: '09:00'},
    {name : 'visitSchedule_thursday_morning_endTime', value: '10:00'},
    {name : 'visitSchedule_thursday_morning_numberOfCarers', value: '2'},
    {name : 'visitSchedule_thursday_noon_startTime', value: '12:30'},
    {name : 'visitSchedule_thursday_noon_endTime', value: '13:00'},
    {name : 'visitSchedule_thursday_noon_numberOfCarers', value: '2'},    
    {name : 'visitSchedule_thursday_evening_startTime', value: '17:30'},
    {name : 'visitSchedule_thursday_evening_endTime', value: '18:00'},
    {name : 'visitSchedule_thursday_evening_numberOfCarers', value: '2'},
    {name : 'visitSchedule_thursday_night_startTime', value: '21:30'},
    {name : 'visitSchedule_thursday_night_endTime', value: '22:00'},
    {name : 'visitSchedule_thursday_night_numberOfCarers', value: '2'},

    {name : 'visitSchedule_friday_morning_startTime', value: '09:00'},
    {name : 'visitSchedule_friday_morning_endTime', value: '10:00'},
    {name : 'visitSchedule_friday_morning_numberOfCarers', value: '2'},
    {name : 'visitSchedule_friday_noon_startTime', value: '12:30'},
    {name : 'visitSchedule_friday_noon_endTime', value: '13:00'},
    {name : 'visitSchedule_friday_noon_numberOfCarers', value: '2'},    
    {name : 'visitSchedule_friday_evening_startTime', value: '17:30'},
    {name : 'visitSchedule_friday_evening_endTime', value: '18:00'},
    {name : 'visitSchedule_friday_evening_numberOfCarers', value: '2'},
    {name : 'visitSchedule_friday_night_startTime', value: '21:30'},
    {name : 'visitSchedule_friday_night_endTime', value: '22:00'},
    {name : 'visitSchedule_friday_night_numberOfCarers', value: '2'},

    {name : 'visitSchedule_saturday_morning_startTime', value: '09:00'},
    {name : 'visitSchedule_saturday_morning_endTime', value: '10:00'},
    {name : 'visitSchedule_saturday_morning_numberOfCarers', value: '2'},
    {name : 'visitSchedule_saturday_noon_startTime', value: '12:30'},
    {name : 'visitSchedule_saturday_noon_endTime', value: '13:00'},
    {name : 'visitSchedule_saturday_noon_numberOfCarers', value: '2'},    
    {name : 'visitSchedule_saturday_evening_startTime', value: '17:30'},
    {name : 'visitSchedule_saturday_evening_endTime', value: '18:00'},
    {name : 'visitSchedule_saturday_evening_numberOfCarers', value: '2'},
    {name : 'visitSchedule_saturday_night_startTime', value: '21:30'},
    {name : 'visitSchedule_saturday_night_endTime', value: '22:00'},
    {name : 'visitSchedule_saturday_night_numberOfCarers', value: '2'},

    {name : 'visitSchedule_sunday_morning_startTime', value: '09:00'},
    {name : 'visitSchedule_sunday_morning_endTime', value: '10:00'},
    {name : 'visitSchedule_sunday_morning_numberOfCarers', value: '2'},
    {name : 'visitSchedule_sunday_noon_startTime', value: '12:30'},
    {name : 'visitSchedule_sunday_noon_endTime', value: '13:00'},
    {name : 'visitSchedule_sunday_noon_numberOfCarers', value: '2'},    
    {name : 'visitSchedule_sunday_evening_startTime', value: '17:30'},
    {name : 'visitSchedule_sunday_evening_endTime', value: '18:00'},
    {name : 'visitSchedule_sunday_evening_numberOfCarers', value: '2'},
    {name : 'visitSchedule_sunday_night_startTime', value: '21:30'},
    {name : 'visitSchedule_sunday_night_endTime', value: '22:00'},
    {name : 'visitSchedule_sunday_night_numberOfCarers', value: '2'},

    {name : 'clientOutcome_01_clientOutcome', value: 'I enjoy the food and drinks I like and receive the support I need to eat, drink and stay healthy.'},
    {name : 'clientOutcome_01_actionPlan', value: 'John will be supported to prepare meals. Ensuring fluid is always available to keep him hydrated.\n\nJohn’s likes and dislikes will be captured during assessment.'},
    {name : 'clientOutcome_01_howAndWhen', value: 'Carers will provide John with his breakfast, lunch and tea in line with his preferences and ensure that he has access to drinks throughout the day. Carers will ensure that John has his eating aids at every meal.'},
    
    {name : 'clientOutcome_02_clientOutcome', value: 'I am supported to move around safely as and when needed.'},
    {name : 'clientOutcome_02_actionPlan', value: 'John will have a moving and handling plan that recognises what he can do independently and what he needs to be supported with and what equipment he needs to mobilise safely.'},
    {name : 'clientOutcome_02_howAndWhen', value: 'Carers will follow the plan at each care visit and ensure that they follow the safe transfer guidance.'},
    
    {name : 'clientOutcome_03_clientOutcome', value: 'I receive the personal care and support I need and feel respected and valued.'},
    {name : 'clientOutcome_03_actionPlan', value: 'We will establish by talking to John and his family, how he wishes to be supported, what he is able to do independently and what aspects he may need support with. John’s care plan will reflect his preferences.'},
    {name : 'clientOutcome_03_howAndWhen', value: 'Carers will follow the ‘my routine’ in the care plan to ensure that John is supported to have a wash everyday and is able to present himself in the way he wishes.'},
    
    {name : 'clientOutcome_04_clientOutcome', value: 'I receive the care and support I need to support my emotional well-being.'},
    {name : 'clientOutcome_04_actionPlan', value: 'We will work with John to reduce his levels of anxiety and stress caused by his dementia.'},
    {name : 'clientOutcome_04_howAndWhen', value: 'Carers will follow the guidance in the routine section of the care plan to understand how John needs to be supported to promote his emotional well-being.'},
    
    {name : 'clientOutcome_05_clientOutcome', value: 'I receive the care and support I need to live well with my long term conditions.'},
    {name : 'clientOutcome_05_actionPlan', value: 'John’s requires support to take his medication with the use of a MAR chart in line with his prescription.'},
    {name : 'clientOutcome_05_howAndWhen', value: 'Carers will support John to receive his medication safely to promote his health.'},

    {name : 'clientOutcome_06_clientOutcome', value: 'I receive and understand information and advice in a format or language that is right for me.'},
    {name : 'clientOutcome_06_actionPlan', value: 'John’s does not have any specific communication needs. His preferred method of communication as established via this assessment is verbal.'},
    {name : 'clientOutcome_06_howAndWhen', value: 'Carers will explain to John verbally face to face any information as this is his preferred method of communication.'},


  ]
};

// inject responses into the matching questions
const hydrateConfig = (configuration, answers) => {
  configuration.sections.map( section => 
    section.questions.map( question => question.responses = answers && answers.responses ? answers.responses.filter(r => r.name.indexOf(`${question.name}_`)===0) : [])
  );
}

function App() {

  hydrateConfig(formConfiguration, formResponses);

  return (
    <div className="App">
      <form method="post">
        <input type="submit"/>
        <ComponentFactory config={formConfiguration}/>
      </form>
    </div>
  );
}

export default App;
