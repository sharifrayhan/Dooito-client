import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../../Axios/useAxiosSecure";
import Swal from 'sweetalert2';
import { Context } from "../../../../Context/AllContext";

const AddTask = () => {
  const { user } = useContext(Context);
  const userName = user?.displayName;
  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure();
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState("Low"); 
  const [status, setStatus] = useState("To Do"); 

  const handleAddService = async (event) => {
    event.preventDefault();
    const form = event.target;
    const taskName = form.taskName.value;
    const taskDetails = form.taskDetails.value;

    const newTask = {
      userName,
      userEmail,
      taskName,
      taskDetails,
      dueDate,
      priority,
      status,
    };

    console.log(newTask)

    try {
      const url = '/tasks'; 
      const response = await axiosSecure.post(url, newTask);
      if (response.status === 201) {
        Swal.fire('Success!', 'Task added successfully!', 'success');
      } else {
        Swal.fire('Error', 'Failed to add task', 'error');
      }
    } catch (error) {
      console.error("Error adding task:", error);
      Swal.fire('Error', 'Failed to add task', 'error');
    }
  };

  return (
    <div>
      <div className=" ">
        <div className="min-w-[100px] mx-2 md:mx-10 lg:mx-24 mt-5 mb-10">
          <div className="w-full max-w-md mx-auto">
            <div className="py-10 px-14 bg-[#272638] rounded-md">
              <div className="text-center my-5">
                <h1 className="mb-6 text-[#a55e3f] font-garamond uppercase font-semibold text-3xl">Add New Task</h1>
                <p className="text-gray-200">You can add new tasks from here.</p>
              </div>

              <form onSubmit={handleAddService} className="">
                <div className="flex flex-col">
                  <div className="mb-4 ">
                    <label className="block font-semibold text-gray-200" htmlFor="taskName">
                      Task Name:
                    </label>
                    <input
                      type="text"
                      name="taskName"
                      required
                      placeholder="Enter Your Task Name"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="block font-semibold text-gray-200" htmlFor="taskDetails">
                      Task Details:
                    </label>
                    <textarea
                      name="taskDetails"
                      required
                      placeholder="Enter your task details"
                      className="w-full h-[42px] border rounded px-3 py-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="mb-4 ">
                    <label className="block font-semibold text-gray-200" htmlFor="dueDate">
                      Due Date:
                    </label>
                    <DatePicker
                      selected={dueDate}
                      onChange={(date) => setDueDate(date)}
                      dateFormat="MM/dd/yyyy"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="block font-semibold text-gray-200" htmlFor="priority">
                      Priority:
                    </label>
       
                    <select
                      name="priority"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full text-gray-800 border rounded px-3 py-2"
                    >
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
  
                    </select>
                  </div>
                  <div className="mb-4 ">
                    <label className="block font-semibold text-gray-200" htmlFor="status">
                      Status:
                    </label>
  
                    <select
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full text-gray-800 border rounded px-3 py-2"
                    >
                      <option value="To Do">To Do</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>

                <center>
                  <button
                    type="submit"
                    className="bg-red-500 my-3  hover:bg-red-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Task
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
