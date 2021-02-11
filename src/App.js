import './App.css';
import {PizzaFactory} from './components/pizzaFactory';

const order = [
  // { id: 'ghsjdgs', crust : 'stuffed', size: 'family', type: 'meatFeast',  'quantity' : 1},
  // { id: 'wudhksd', crust : 'thin', size: 'individual', type: 'veggiegross',  'quantity' : 1},
  // { id: 'xowisjw', crust : 'stuffed', size: 'family', type: 'hawiian', 'quantity' : 1},
  // { id: 'kljnchi', crust : 'taditional', size: 'individual', type: 'veggie', 'quantity' : 1},
  { id: 'riskq1', type: 'personalRiskQuestion', sectionName : 'movingAndHandling', questionName : 'standing', questionText: 'Standing', helpText : 'Risks associated with standing'},
  { id: 'riskq2', type: 'personalRiskQuestion', sectionName : 'movingAndHandling', questionName : 'walking', questionText: 'Walking', helpText : 'Risks associated with walking'},
  { id: 'riskq3', type: 'riskQuestion', sectionName : 'movingAndHandling', questionName : 'inAndOutOfBed', questionText: 'In/Out of Bed', helpText : 'Risks associated with getting in and out of bed'},
  { id: 'riskq4', type: 'riskQuestion', sectionName : 'movingAndHandling', questionName : 'washingAnddressing', questionText: 'Washing and Dressing', helpText : 'Risks associated with getting bathing, shaving, getting dressed'},
  { id: 'riskq5', type: 'yesNoDetails', sectionName : 'nutritionAndHydration', questionName : 'allergies', questionText: 'Food Allergies', helpText : 'Do you have any food allergies or intolerances'},
  { id: 'riskq6', type: 'yesNoDetails', sectionName : 'nutritionAndHydration', questionName : 'swallowing', questionText: 'Problems Swallowing', helpText : 'Do you experience swallowing difficulties'},
  { id: 'riskq7', type: 'yesNoDetails', sectionName : 'nutritionAndHydration', questionName : 'specialistDiet', questionText: 'Specialist Diet', helpText : 'Do you require a specialist diet e.g. soft or pureed food'},
  { id: 'riskq8', type: 'summaryQuestion', sectionName : 'dailyRoutine', questionName : 'needsAndConditionsSummary', colour: 'green', questionText: 'Needs and Conditions', helpText : 'Summary of my needs and conditions and how this affects my daily routine'}
]

function App() {
  return (
    <div className="App">
      <PizzaFactory order={order}/>
    </div>
  );
}

export default App;
