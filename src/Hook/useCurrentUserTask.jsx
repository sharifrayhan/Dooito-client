import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../Axios/useAxiosSecure';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/AllContext';

export const useCurrentUserTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(Context);
  const userEmail = user?.email;
  const [currentUserTasks, setCurrentUsersTask] = useState([])

  const queryClient = useQueryClient();

  const { data: userTasks, isLoading, error, refetch } = useQuery({
    queryKey: ['userTasks'],
    queryFn: async () => {
      const response = await axiosSecure.get('/tasks');
      return response.data;
    },
  });

  useEffect(() => {
    const cUserTasks = userTasks?.filter((task) => task?.userEmail === userEmail);
    setCurrentUsersTask(cUserTasks);
  }, [userEmail, userTasks]);

  console.log(userTasks);

  const updateTaskStatus = async (taskId, currentStatus) => {
    try {
        console.log(taskId)
        console.log(currentStatus)
      const response = await axiosSecure.put(`/tasks/${taskId}`, { status: currentStatus });
      if (response.status === 200) {
        // Manually update the userTasks data and trigger a refetch
        const updatedTasks = userTasks.map((task) =>
          task.id === taskId ? { ...task, status: currentStatus } : task
        );

        queryClient.setQueryData(['userTasks'], updatedTasks);
        queryClient.invalidateQueries(['userTasks']);
      } else {
        console.error('Failed to update task status:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };


  console.log(currentUserTasks)

const todoTasks = currentUserTasks?.filter((task) => task?.status === 'To Do');
  const ongoingTasks = currentUserTasks?.filter((task) => task?.status === 'Ongoing');
  const completedTasks = currentUserTasks?.filter((task) => task?.status === 'Completed');

  console.log(todoTasks)
  console.log(completedTasks)

  return {userTasks, todoTasks, ongoingTasks, completedTasks, isLoading, error, refetch, updateTaskStatus };
};
