import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const Card = ({ name, picture }) => {
  return (
    <div>
      <Box className="card-box">
        <Box sx={{ width: "70%" }}>
          <h1>{`${name.title}. ${name.first} ${name.last}`}</h1>
        </Box>
        <Avatar
          sx={{
            width: "10vw",
            height: "10vw",
            maxWidth: 82,
            maxHeight: 82,
            minWidth: 52,
            minHeight: 52,
          }}
          alt={`${name.first} ${name.last}`}
          src={`${picture.medium}`}
        />
      </Box>
    </div>
  );
};

export default Card;
