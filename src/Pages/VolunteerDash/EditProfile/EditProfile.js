import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { fs } from "../../../Firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "../../../Firebase/firebase.config";
export default function EditProfile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [updatedPhoto, setUpdatePhoto] = useState("");
  const [userEmail, setUserEmail] = useState(location.state.email);
  const [updatedPhone, setUpdatedPhone] = useState(location.state.phone);
  const [updatedAddress, setUpdatedAddress] = useState(location.state.address);
  const [updatedArea, setUpdatedArea] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [error, setError] = useState("");
  const [validate, setValidate] = useState(false);
  const [updatedName, setUpdatedName] = useState(location.state.name);
  const [userPhoto, setUserPhoto] = useState(null);
  const [availableArea, setUpdatedAvailableArea] = useState(null);
  useEffect(() => {
    getDownloadURL(ref(storage, `images/ProfilePictures/${updatedName}`))
      .then((photoUrl) => {
        console.log(photoUrl);
        setUserPhoto(photoUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSave = (event) => {
    event.preventDefault();
    // /*RegEx for input validation */
    // const namePattern = /^[a-zA-z .]+$/;
    // const phnPattern = /^(\+88)?-?01[3-9]\d{8}$/;

    // /**From input values */

    // let name = event.target.name;

    // let phone = event.target.phone;
    // console.log(name);
    // console.log("updated name", updatedName);

    const docRef = doc(fs, "volunteers", auth.currentUser.uid);
    updateDoc(docRef, {
      name: updatedName,
      phone: updatedPhone,
      address: updatedAddress,
      availableArea: availableArea,
    })
      .then(() => {
        alert("Profile Updated successfully!!");
        navigate("/volunteer/profile");
      })
      .catch((err) => alert({ err }));
  };

  function handleImgUpload(event) {
    const img = event.target.files[0];
    const imgName = event.target.files[0].name;
    document.getElementById("img-preview").style.display = "block";
    const imgOb = URL.createObjectURL(img);
    document.getElementById("img-preview").src = imgOb;

    // console.log(img);

    const storageRef = ref(storage, `images/ProfilePictures/${updatedName}`);

    uploadBytes(storageRef, img)
      .then((result) => {
        setUpdatePhoto(storageRef);
      })
      .catch((err) => console.log("Can not upload"));
  }

  return (
    <div className="d-flex justify-center mt-5 ">
      <div
        className="card w-75 mt-6 p-4"
        style={{
          boxShadow: "1px 1px  gray",
          backgroundColor: "white",
          borderRadius: 0,
          borderBottom: "5px solid gray",
        }}
      >
        <div className="d-flex justify-between">
          <div>My Profile</div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex flex-col justify-center ">
            <img
              src={userPhoto}
              className="card-img-top img-fluid mb-3 img-thumbnail"
              alt="Card image cap"
              id="img-preview"
              style={{ width: "300px", height: "250px" }}
            />

            <label className="btn" for="img-upload" id="img-label">
              upload image
            </label>
            <input
              id="img-upload"
              type="file"
              accept="image/jpg,image/png,image/jpeg"
              style={{ display: "none" }}
              onChange={handleImgUpload}
            />
          </div>
          <div className="col-md-8">
            <form className="card-body" onSubmit={handleSave}>
              <p className="card-text">Email:{userEmail}</p>

              <label>Name</label>
              <input
                type="text"
                className="border border-secondary"
                name="name"
                defaultValue={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <label>Phone Number</label>
              <input
                className="border border-secondary"
                defaultValue={updatedPhone}
                name="phone"
                onChange={(e) => setUpdatedPhone(e.target.value)}
              />

              <label>Address</label>
              <input
                className="border border-secondary"
                defaultValue={updatedAddress}
                name="address"
                onChange={(e) => setUpdatedAddress(e.target.value)}
              />
              <label>Available Area</label>
              <input
                className="border border-secondary"
                defaultValue={""}
                name="availableAra"
                onChange={(e) => setUpdatedAvailableArea(e.target.value)}
              />
              <button type="submit" className="bg-primary btn">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
