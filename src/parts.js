import { useState } from "react";

const Parts = () => {

    const [parts, setParts] = useState([
        {name: 'Fundamentals of React', exercises: 10, id: 1},
        {name: 'Using props to pass data', exercises: 7, id: 2},
        {name: 'State of a component', exercises: 14, id: 3},
        {name: 'Redux', exercises: 11, id: 4},
    ]);

    const total = parts.reduce((s, part) => {
        return s + part.exercises;
    }, 0)


    return(
        <div className="parts">
            <h1>Half Stack application development</h1>
            {parts.map((part) => (
                <div className="part-review" key = {part.id}>
                    <h3>{ part.name }  { part.exercises}</h3>
                </div>
            ))}
            <h3>total is {total} exercises</h3>

        
        </div>

        
    );
}


export default Parts;