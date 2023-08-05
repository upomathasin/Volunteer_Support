import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { fs } from "../../../Firebase/firebase.config";
import { useEffect } from "react";
import { collection } from "firebase/firestore";
import { storage } from "../../../Firebase/firebase.config";
import { getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { ref } from "firebase/storage";
const auth = getAuth();

export default function AllVolunteers() {
  const [users, setUsers] = useState([]);
  const [userPhoto, setUserPhoto] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((volunteer) => {
      if (volunteer) {
        getDocs(collection(fs, "volunteers")).then((querySnapshot) => {
          const usersInfo = [];
          querySnapshot.forEach((doc) => {
            const userInfo = {
              uid: doc.data().uid,
              name: doc.data().name,
              email: doc.data().email,
              phone: doc.data().phone,
              address: doc.data().address,
              imageRef: doc.data().imageRef,
              availableArea: doc.data().availableArea,
            };

            usersInfo.push(userInfo);
            setUsers(usersInfo);
          });
          console.log(usersInfo[0]);
        });
      }
    });
  }, []);

  return (
    <div
      className="container "
      style={{ maxHeight: "100vh", overflowY: "scroll" }}
    >
      <h1 className="h1 text-blue-900 my-auto text-center">Volunteers </h1>
      <div className="row gap-4 justify-center">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Available Area</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          {user.imageRef ? (
                            <img
                              src={user.imageRef}
                              className="img-fluid rounded w-100 h-40"
                              alt="Album"
                            />
                          ) : (
                            <img
                              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                              className="img-fluid rounded w-100 h-40"
                              alt="Album"
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{user.phone}</p>
                  </td>
                  <td>
                    <p className="text-green-800 font-bold">
                      {user.availableArea}
                    </p>
                  </td>
                  <th>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="btn btn-ghost btn-xs">
                      Details
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg py-2">
                          Name: {user.name}
                        </h3>
                        <p>Email: {user.email}</p>
                        <p>Phone Number: {user.phone}</p>
                        <p>Address: {user.address}</p>
                        <p className=" text-green-800">
                          Available Area: {user.availableArea}
                        </p>
                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn">
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
