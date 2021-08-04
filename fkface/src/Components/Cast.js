import React from "react";

const Cast = ({castArray}) => {
  console.log(castArray);
  return (
    <div>
      <h1>{castArray.map((cast, id) => {
        return (
          <div key={id}>
            {cast.name}
          </div>
        )
      })}</h1>
    </div>
  );
};

export default Cast;
