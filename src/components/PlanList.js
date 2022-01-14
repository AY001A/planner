import React, {useState} from 'react'
import PlanForm from './PlanForm'
import Plan from './Plan';

function PlanList() {

const [plans, setPlans] = useState([]); 

const addPlan = plan => {
    if(!plan.text || /^\s*$/.test(plan.text)) { 
        return;

    }
    const newPlans = [plan, ...plans]; 

    setPlans(newPlans);

};

const updatePlan = (planId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)) { 
    return;

}

setPlans(prev =>prev.map(item => (item.id === planId ? newValue : item)));

};

const removePlan = id => {
    const removeArr = [...plans].filter(plan => plan.id !==id)

setPlans(removeArr); 
};



const completePlan = id =>{
let updatedPlans = plans.map(plan =>{ 
if (plans.id === id) {
    plans.isComplete = !plans.isComplete
}
return plans

});
setPlans(updatedPlans);
};


    return (
        <>
            <h1>PLANNER</h1>
            <PlanForm onSubmit={addPlan}/>
            <Plan plans={plans} completePlan={completePlan} removePlan=
            {removePlan} updatePlan={updatePlan} /> 
        </>
    );
    }

export default PlanList;
