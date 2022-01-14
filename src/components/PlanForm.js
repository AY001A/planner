import React, {useState, useEffect, useRef} from 'react';

function PlanForm (props)  {
    const [input, setInput] = useState(props.edit ? props.edit.value :  '');

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

         props.onSubmit({
         id: Math.floor(Math.random() * 10000),
         text: input
            
         });

         setInput('');

    };

    return (
        <form className='plan-form' onSubmit={handleSubmit}>
             {props.edit ? ( 
            <>
            <input 
            type='text'
            placeholder='update plan'
            value={input}
            name='text'
            className='plan-input edit'
            onChange={handleChange}
            ref={inputRef}
             />
            
        <button className='plan-button edit'> update </button>
        
         </>
        ) :( 
        <>
        <input 
            type='text'
            placeholder='Add a plan'
            value={input}
            name='text'
            className='plan-input'
            onChange={handleChange}
            ref={inputRef}
             />
            
        <button className='plan-button'> Add plan </button>
        </>
        )
        }
            
        </form>
    )
}

export default PlanForm
