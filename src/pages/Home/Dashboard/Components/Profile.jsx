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
          className="mt-1 h-[65px] w-[65px] rounded-full"
          src={userPhoto}
          alt="userPhoto"
        />
        <p className="text-base ">{userName}</p>
        <h1 className="text-sm">{userEmail}</h1>
      </div>
    </div>
  );
};

export default Profile;
