import React from "react";

function myprofile({ params }) {
  return (
    <div>
      <div>myprofile</div>
      <p>{params.id}</p>
    </div>
  );
}

export default myprofile;
