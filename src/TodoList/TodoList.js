import React from 'react';
import './TodoList.css';
import { Container } from 'reactstrap';
export const TodoList = (props) => {

    
    const [mark, setmark] = React.useState(false);
    function tryMark({mark, setmark}) {
        return () => setmark(!mark);
      }
      function tryDelet() {
        console.log("Deleeeeeeete");
      }
      
    return (
        <>
            <Container>
                <p style={{textDecoration:mark ? 'line-through' : 'none', }}>{props.addTask}</p>
                <button className="btn btn-info" onClick={tryMark({mark, setmark})}>
                Mark
      </button>
      <button className="btn btn-info" onClick={tryDelet}>
                    Delete
      </button>
            </Container>

        </>
    )


}