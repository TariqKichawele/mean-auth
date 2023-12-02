import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { currentUser, loading, error }= useSelector((state) => state.user);
  const [ image, setImage] = useState(undefined);
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [ formData, setFormData] = useState({});
  const [ imagePercent, setImagePercent ] = useState(0);
  const [ imageError, setImageError ] = useState(false);
  const [ updateSuccess, setUpdateSuccess ] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" />
        <img 
          src={formData.profilePicture || currentUser.profilePicture} 
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2" 
        />
        <p>
          {imageError ? (
            <span>Error uploading image (file size must be less than 2MB)</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span>Uploading image... {imagePercent}%</span>
          ) : imagePercent === 100 ? (
            <span>Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>
        <input 
          type="text"
          defaultValue={currentUser.username}
          id="username"
          placeholder="Username"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg" 
        />
        <input 
          type="email" 
          defaultValue={currentUser.email}
          id="email"
          placeholder="Email"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input 
          type="passowrd"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg" 
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? (
            "Loading..."
          ) : (
            "Update Profile"
          )}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
      <p className="text-red-700 mt-5">
        {error && "Something went wrong. Please try again."}
      </p>
      <p className="text-red-700 mt-5">
        {updateSuccess && "Profile updated successfully"}
      </p>
    </div>
  )
}

export default Profile