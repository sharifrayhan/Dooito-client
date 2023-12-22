
import { useDrag, useDrop } from 'react-dnd';

const DraggableTask = ({ task, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDrop(item.id, task.status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: isOver ? '2px solid red' : 'none',
        padding: '8px',
        margin: '8px',
        backgroundColor: 'white',
        cursor: 'move',
      }}
    >
      <div>
        <strong>{task?.taskName}</strong>
      </div>
      <div>
        {/* <p>{task?.taskDetails}</p> */}
        <p>Due Date: {task?.dueDate}</p>
        <p>Priority: {task?.priority}</p>
        <p>Status: {task?.status}</p>
      </div>
    </div>
  );
};

export default DraggableTask;
