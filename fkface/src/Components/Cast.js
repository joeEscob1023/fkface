import React from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cast = ({castArray}) => {
  console.log(castArray);
  return (
    <div>
      {castArray.map((cast, id) => {
        return (
          <Card key={id}>
          <CardBody>
            <CardTitle tag="h5">{cast.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{cast.status}</CardSubtitle>
          </CardBody>
          {/* <img width="100%" src={cast.image} alt="Card image cap" /> */}
          {cast.image}
          <CardBody>
            <CardText>{cast.otherProductions}</CardText>
            <CardLink href={`https://twitter.com/${cast.twitterHandle}`}>@{cast.twitterHandle}</CardLink>
            <CardLink href={`https://www.instagram.com/${cast.instagramHandle}/?hl=en`}>@{cast.instagramHandle}</CardLink>
          </CardBody>
        </Card>
        )
      })}
    </div>
  );
};

export default Cast;
