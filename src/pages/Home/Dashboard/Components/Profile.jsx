import { useContext } from "react";
import { Context } from "../../../../Context/AllContext";

const Profile = () => {
  const { user } = useContext(Context);

  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;

  return (
    <div>
      <div className=" flex flex-col items-center mb-1">
        <img
          className="mt-1 h-[200px] w-[200px] rounded-full"
          src={userPhoto}
          alt="userPhoto"
        />
        <p className="text-lg font-bold mt-3 ">{userName}</p>
        <h1 className="text-sm">{userEmail}</h1>
      </div>
    </div>
  );
};

export default Profile;
