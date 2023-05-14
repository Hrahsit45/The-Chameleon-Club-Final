import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useSubmit } from "react-router-dom";

function SnTwo({ id, imgSrc, name, memberCount, userId , profile}) {
  const navi = useNavigate();

  // console.log(userId + " and " + id)

  const [data, setData] = useState([{}]);

  console.log(userId);

  const handleChange = async () => {
    
    if(id !== userId)
    {
    await axios
      .get("http://localhost:5000/user/fetchUserid/" + userId)
      .then((docs) => {
        setData(docs.data);
      });

    await axios
      .get("http://localhost:5000/user/fetchUserid/" + id)
      .then((res) => {
        navi("/otherProfile", {
          state: {
            rdata: data,
            data: res.data._id,
            uid: userId,
            id: data._id,
          },
        });
      })
      .catch((err) => {});
    }
  };
  return (
    <div className="uSn-two-ctn-body" onClick={handleChange}>
      <div className="uSn-two-one">
        <img src={profile} alt="image" className="uSn-two-img" />
      </div>
      <div className="uSn-two-two">
        <div className="uSn-two-two-1">{name}</div>
        <div className="uSn-two-two-2">{memberCount}</div>
      </div>
    </div>
  );
}

export default SnTwo;
