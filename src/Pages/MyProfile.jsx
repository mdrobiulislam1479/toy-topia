import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Contexts/AuthContext";
import { auth } from "../../firebase.config";
import { FaUserEdit } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        console.log("✅ Profile updated successfully!");
        setEditMode(false);
      })
      .catch(() => {
        console.log("❌ Failed to update profile.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto  mt-15 md:mt-40 bg-primary/20 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:gap-20 items-center justify-center">
      <div className="md:pl-20">
        <img
          src={
            user?.photoURL ||
            "https://img.icons8.com/glyph-neue/64/user-male-circle.png"
          }
          alt="Profile"
          className="w-32 h-32 rounded-full border border-secondary object-cover mx-auto"
        />
      </div>

      <div className="flex-1 w-full md:w-auto">
        <h2 className="text-3xl font-semibold mt-6 md:mt-0 mb-6 text-center md:text-left">
          My Profile
        </h2>

        {!editMode ? (
          <>
            <p className="mb-2 text-center md:text-left">
              <span className="block text-gray-500 text-sm">Full Name</span>
              <span className="font-medium text-lg">
                {user?.displayName || "-"}
              </span>
            </p>

            <p className="mb-6 text-center md:text-left">
              <span className="block text-gray-500 text-sm">Email Address</span>
              <span className="font-medium">{user?.email}</span>
            </p>

            <button
              onClick={() => setEditMode(true)}
              className="bg-secondary/80 hover:bg-secondary text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 mx-auto md:mx-0"
            >
              <FaUserEdit /> Update Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-5  mx-auto">
            <div>
              <label
                className="block text-gray-600 font-semibold mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Update Name"
                className="w-full p-3 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-semibold mb-1"
                htmlFor="photoURL"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter Update photoURL"
                className="w-full p-3 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <button
              type="submit"
              className="bg-secondary/80 hover:bg-secondary text-white w-full py-3 rounded-md flex items-center justify-center gap-2"
            >
              <IoCheckmark />
              Done
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
