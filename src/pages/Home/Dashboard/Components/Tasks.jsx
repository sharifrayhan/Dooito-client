import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';
import { useCurrentUserTask } from '../../../../Hook/useCurrentUserTask';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

import useAxiosSecure from '../../../../Axios/useAxiosSecure';
import { useEffect } from 'react';


const DraggableTask = ({ task, onDrop }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'TASK',
      item: { id: task?._id, status: task?.status },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const [{ isOver }, drop] = useDrop({
      accept: 'TASK',
      drop: (item) => onDrop(item?.id, task?.status),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });

    const { refetch} = useCurrentUserTask();
    const axiosSecure = useAxiosSecure();

    const handleDelete= async (id) =>{
      try {
        const deleteid = id;
        const response = await axiosSecure.delete(`/tasks/${deleteid}`);

        if (response.status === 200) {
            refetch()
            Swal.fire({
        icon: 'success',
        title: 'Task Deleted!',
        showConfirmButton: false,
        timer: 1500,
      });
        } else {
          console.error('Failed to delete task:', response.statusText);
        }
      } catch (error) {
        console.error('Error delete task:', error);
      }
    }
  
    const handleEdit = () => {
      Swal.fire({
        title: 'Edit Task',
        html: `
        <div class="mb-4">
    <label for="taskName" class="block text-sm font-medium text-gray-600">Task Name</label>
    <input id="taskName" class="swal2-input" value="${task?.taskName}" required>
</div>

<div class="mb-4">
    <label for="status" class="block text-sm font-medium text-gray-600">Status</label>
    <select id="status" class="swal2-input" required>
        <option value="To Do" ${task?.status === 'To Do' ? 'selected' : ''}>To Do</option>
        <option value="Ongoing" ${task?.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
        <option value="Completed" ${task?.status === 'Completed' ? 'selected' : ''}>Completed</option>
    </select>
</div>

<div class="mb-4">
    <label for="dueDate" class="block text-sm font-medium text-gray-600">Due Date</label>
    <input id="dueDate" class="swal2-input" type="date" value="${task?.dueDate}" required>
</div>

<div class="mb-4">
    <label for="priority" class="block text-sm font-medium text-gray-600">Priority</label>
    <select id="priority" class="swal2-input" required>
        <option value="Low" ${task?.priority === 'Low' ? 'selected' : ''}>Low</option>
        <option value="Medium" ${task?.priority === 'Medium' ? 'selected' : ''}>Medium</option>
        <option value="High" ${task?.priority === 'High' ? 'selected' : ''}>High</option>
    </select>
</div>

        
      `,
        focusConfirm: false,
        preConfirm: async () => {
            const editedTask = {
                taskName: Swal.getPopup().querySelector('#taskName').value,
                status: Swal.getPopup().querySelector('#status').value,
                dueDate: Swal.getPopup().querySelector('#dueDate').value,
                priority: Swal.getPopup().querySelector('#priority').value,
              };
  
          try {
            const response = await axiosSecure.put(`/tasks/${task?._id}`, editedTask);
  
            if (response.status === 200) {
                refetch()
                Swal.fire({
            icon: 'success',
            title: 'Task Updated!',
            showConfirmButton: false,
            timer: 1500,
          });
            } else {
              console.error('Failed to update task:', response.statusText);
            }
          } catch (error) {
            console.error('Error updating task:', error);
          }
        },
      });
    };
  
   return (
    <tr
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: isOver ? '2px solid red' : 'none',
        cursor: 'move',
      }}
    >
      <td>

    
            <div className="font-bold">{task?.taskName}</div>
     
    
      </td>
      
      <td>
      {task?.dueDate?.substring(0, 10)}
      </td>
      <td>{task?.priority}</td>
      <td>{task?.status}</td>
      <th>
        <button className="btn btn-ghost btn-xs" onClick={handleEdit}>
          Edit
        </button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs" onClick={()=>handleDelete(task?._id)}>
          Delete
        </button>
      </th>
    </tr>
  );
};

const TaskTable = ({ tasks, title, onDrop }) => {
  return (
    <div className=' mb-5 border bg-[#262538] border-white border-3 p-5 rounded-lg'>
      <h2 className={`font-bold ${title=="Completed"&& "bg-[#00C875]" } ${title=="Ongoing"&& "bg-[#FDAB3D]"} ${title=="To Do"&& "bg-[#E2445C]"} py-1 rounded-sm  px-2 `}  >{title}</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs lg:table-sm">
          <thead>
            <tr className=' text-white'>
              <th>Name</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks?.length > 0 ? (
              tasks.map((task) => <DraggableTask key={task?._id} task={task} onDrop={onDrop} />)
            ) : (
              <tr>
                <td colSpan="5">No tasks available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Tasks = () => {
  const { todoTasks, ongoingTasks, completedTasks, updateTaskStatus } = useCurrentUserTask();

  useEffect(() => {
    const thereAreTasksToDo = todoTasks?.length;

    if (thereAreTasksToDo) {
    
        toast.info(`You have ${thereAreTasksToDo} tasks left to do!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
     
    }
  }, [todoTasks]);

  const handleDrop = (taskId, currentStatus) => {
    updateTaskStatus(taskId, currentStatus);
  };

  return (
    <>
    <ToastContainer></ToastContainer>
    <DndProvider backend={HTML5Backend}>
      <div>
        <TaskTable tasks={todoTasks} title="To Do" onDrop={handleDrop} />
        <TaskTable tasks={ongoingTasks} title="Ongoing" onDrop={handleDrop} />
        <TaskTable tasks={completedTasks} title="Completed" onDrop={handleDrop} />
      </div>
    </DndProvider>
    </>
  );
};

export default Tasks;