import React from "react";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getDocs,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { fs } from "../Firebase/firebase.config";
import { collection } from "firebase/firestore";
import ChatBubble from "react-chat-bubble";

const auth = getAuth();

export default function Chats() {
  const currentUserId = auth.currentUser.uid;
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);
  const [volunteer, setVolunteer] = useState(null);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((volunteer) => {
      if (volunteer) {
        setVolunteer(volunteer);
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
  }, [selectedUser]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    console.log("selected user : ", user);
  };

  const handleSendMessage = async () => {
    if (selectedUser && newMessage.trim() !== "") {
      const chatRoomId = [currentUserId, selectedUser.uid].sort().join("_");

      const messageData = {
        text: newMessage,
        sender: currentUserId,
        timestamp: serverTimestamp(),
      };

      const messagesRef = collection(fs, "chats", chatRoomId, "messages");
      await addDoc(messagesRef, messageData);

      setNewMessage("");
    }
  };

  useEffect(() => {
    const chatRoomId = [currentUserId, selectedUser.uid].sort().join("_");

    onSnapshot(
      query(
        collection(fs, "chats", chatRoomId, "messages"),
        orderBy("timestamp", "asc")
      ),
      (querySnapshot) => {
        let mes = [];
        querySnapshot.forEach((doc) => {
          let messageInfo = doc.data();
          mes.push(messageInfo);
        });

        setMessages(mes);
      }
    );
  }, [selectedUser]);
  {
  }
  return (
    <div className="p-4 m-4  bg-slate-500  max-h-100  ">
      <div className="p-4">
        <div>
          <h1 className="text-center h3 bg-slate-600 text-white p-2">
            Messaging
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4  ">
          <div className="  p-2   ">
            Chats
            <ul>
              {users
                .filter((user) => user.uid !== volunteer.uid)
                .map((user) => (
                  <li
                    key={user.uid}
                    className=" p-4 bg-slate-400 mt-2  "
                    onClick={() => {
                      handleSelectUser(user);
                    }}
                  >
                    {" "}
                    <button>{user.name}</button>
                    {console.log(user.uid)}
                  </li>
                ))}
            </ul>
          </div>

          <div>
            {selectedUser ? (
              <div style={{ width: "100%" }}>
                <h3 className="py-4 h5 border-b-2 text-center">
                  <span className="  font-bold" style={{ color: "wheat" }}>
                    {selectedUser.name}
                  </span>
                </h3>
                <div>
                  <ul className="d-flex flex-col p-4 overflow-y-scroll  h-96  ">
                    {messages.map((message, index) => (
                      <li
                        className={`${
                          currentUserId === message.sender
                            ? " bg-indigo-300 mb-2  ml-auto "
                            : " bg-indigo-500 mb-2 "
                        }`}
                        style={{
                          padding: "10px",
                          borderRadius: `${
                            currentUserId === message.sender
                              ? "20px 20px 0px 20px"
                              : "0px 20px 20px 20px"
                          }`,

                          width: "50%",
                        }}
                        key={index}
                      >
                        {message.sender === currentUserId ? (
                          <span className="font-bold">You: </span>
                        ) : (
                          <span className="font-bold">
                            {selectedUser.name}:{" "}
                          </span>
                        )}
                        <span>{message.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="w-full rounded p-2">
                    {" "}
                    <input
                      style={{ borderRadius: "20px 00px 0px 20px" }}
                      placeholder="Enter Messages"
                      className=" w-96 p-3"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                      className=" bg-slate-600 p-3 text-white"
                      style={{ borderRadius: "0px 20px 20px 0px" }}
                      onClick={handleSendMessage}
                    >
                      Send
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <p>Select a user to start chatting.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
