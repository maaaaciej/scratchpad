import React from 'react'

const Todo = (props) => {
    return(
      <div onDoubleClick={() => {props.onDelete(props.id)}} className='list-item'>
        {props.content}
      </div>
    );
  }

  export default Todo