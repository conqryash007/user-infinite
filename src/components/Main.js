import React, { useState, useEffect } from "react";
import axios from "axios";
import InfinitScroll from "react-infinite-scroll-component";

import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

import Card from "./Card";

export const Main = () => {
  // STATE VARIABLE

  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  // USEEFFECT
  useEffect(() => {
    const call = async () => {
      try {
        const result = await axios.get(
          `https://randomuser.me/api/?page=1&results=10&seed=yash&inc=picture,gender,name`
        );

        let newArr = result.data.results;
        setUserData(newArr);
      } catch (err) {
        console.log(err.message);
      }
    };
    call();

    return function () {
      setUserData([]);
    };
  }, []);

  const timer = () => {
    return new Promise((resolve, revert) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  // FUNCTION

  const fetchNextUsers = async () => {
    try {
      await timer();
      let x = page + 1;
      setPage(x);
      let result = await axios.get(
        `https://randomuser.me/api/?page=${x}&results=10&seed=yash&inc=picture,gender,name`
      );
      result = result.data.results;

      let newArr = [...userData, ...result];
      setUserData(newArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mainContainer">
      <InfinitScroll
        dataLength={userData.length}
        next={fetchNextUsers}
        hasMore={true}
        loader={
          <>
            {new Array(4).fill(1).map((curr, index) => {
              return (
                <div key={index} className="skl-main">
                  <Skeleton variant="rectangular" width="100%">
                    <div className="skl-div" />
                  </Skeleton>
                  <Skeleton variant="circular">
                    <Avatar
                      sx={{
                        width: "5vw",
                        height: "5vw",
                      }}
                    />
                  </Skeleton>
                </div>
              );
            })}
          </>
        }
      >
        {!userData[0]?.name?.first
          ? null
          : userData.map((curr, idx) => {
              return (
                <Card key={idx} name={curr.name} picture={curr.picture}></Card>
              );
            })}
      </InfinitScroll>
    </div>
  );
};
