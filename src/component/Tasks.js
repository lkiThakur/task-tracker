import {useState} from 'react'
const tasks=[
    {
        id:2,
        text:'Passing Endsems',
        day:'17 march 5 pm',
    },
    {
        id:0,
        text:'Playing Holi',
        day:'29 march 9 pm',
    },
]
const Tasks = () => {
    return (
        <>
         {tasks.map(t=>(<h3 key={t.id}>{t.text}</h3>))}   
        </>
    )
}

export default Tasks
