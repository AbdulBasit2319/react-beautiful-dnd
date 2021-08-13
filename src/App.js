import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {
  const data = [
    {
      id: 1,
      name: "Test 1"
    },
    {
      id: 2,
      name: "Test 2"
    },
    {
      id: 3,
      name: "Test 3"
    },
    {
      id: 4,
      name: "Test 4"
    },
    {
      id: 5,
      name: "Test 5"
    }
  ]

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  
  const onEnd = (result) => {
    console.log('result', result);
    setList(reorder(list, result.source.index, result.destination.index  ))
  }

  const [list, setList] = useState(data);
  console.log('List', list);
  return (
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="droppable ">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.map((item, index) => (
              <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div>
                      {item.name}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )

        }
      </Droppable>

    </DragDropContext>

  );
}

export default App;
