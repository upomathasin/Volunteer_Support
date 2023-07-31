import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { fs } from "../Firebase/firebase.config";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
const auth = getAuth();

export default function VolunteerProfile() {
  // const [volunteers, setVolunteers] = useState([]);
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((volunteer) => {
      if (volunteer) {
        {
          getDocs(collection(fs, "volunteers")).then((querySnapshot) => {
            const usersInfo = [];
            querySnapshot.forEach((doc) => {
              const userInfo = {
                name: doc.data().name,
                email: doc.data().email,
                phone: doc.data().phone,
                address: doc.data().address,
              };

              usersInfo.push(userInfo);
            });
            //console.log(usersInfo);
          });
        }
        const docRef = doc(fs, "volunteers", volunteer.uid);
        getDoc(docRef)
          .then((doc) => {
            setUser(doc.data());
          })
          .catch((err) => console.log(err));
      } else {
        setUser({});
      }
    });
  }, []);
  return (
    <div className="d-flex justify-center mt-5 ">
      <div class="card w-75 mt-6 p-4">
        <div className="row">
          <div className="col-md-4 d-flex flex-col justify-center ">
            <img
              class="card-img-top img-fluid mb-3"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="Card image cap"
            />
            <button className="btn btn-primary">Upload Photo</button>
          </div>
          <div className="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Name:{user.name}</h5>
              <p class="card-text">Email:{user.email}</p>
              <p class="card-text">Phone Number: {user.phone}</p>
              <p class="card-text">Address: {user.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
