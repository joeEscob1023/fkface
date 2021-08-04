import React from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import fflogo from '../Assets/ffaceLogo.png'

const Cast = ({castArray}) => {
  console.log(castArray);
  return (
    <div>
      {/* <img className="ffbackground" src={fflogo} alt="logo" /> */}
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
            <CardLink target="_blank" href={`https://twitter.com/${cast.twitterHandle}`}><i class="fab fa-twitter"></i>{cast.twitterHandle}</CardLink>
            <CardLink target="_blank" href={`https://www.instagram.com/${cast.instagramHandle}/?hl=en`}><i class="fab fa-instagram"></i>{cast.instagramHandle}</CardLink>
          </CardBody>
        </Card>
        )
      })}
    </div>
  );
};

export default Cast;
