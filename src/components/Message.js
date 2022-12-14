import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full `,
  name: `fixed mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

// const [user] = useAuthState(auth);
// console.log(user);
function Message({ message }) {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>Khan</p>
        <p> {message.text} </p>
      </div>
    </div>
  );
}

export default Message;
