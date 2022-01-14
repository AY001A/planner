import React,{useState} from 'react'
import PlanForm from './PlanForm'
import {BsTrash } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

function Plan({plans, completePlan, removePlan, updatePlan}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updatePlan(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

   const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'medium' }).format(new Date())

if (edit.id) {
    return<PlanForm edit={edit} onSubmit={submitUpdate}/>;
}


    return plans.map((plan, index) => (
      

        
        <div className={plan.isComplete ? 'plan-row complete':'plan-row'} 
        key={index}
        >
            <div className='details'>

            <div key={plan.id} onClick={() => completePlan(plan.id)}>
                {plan.text}
            </div>

            <div className='date'>
                {date}
            </div>
            </div>
            
          
           <div className='icons'>

           <BsFillPencilFill onClick={() => setEdit({id: plan.id, value: plan.text})}
            className='edit-icon'/>
            <BsTrash
            onClick={() => removePlan(plan.id)}
            className='delete-icon'
            />
            </div>
            

        </div>
        
    ))
}

export default Plan
