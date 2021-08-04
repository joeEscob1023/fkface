import { v4 as uuid } from "uuid";
 import Geoff from '../Assets/geoffRamsey.jpeg'
import Gavin from "../Assets/Gavin.jpeg";
 import Andrew from "../Assets/Andrew.jpeg";

export default [
  {
    id: uuid(),
    image: <img width={300} src={Geoff} className="image-margin"/>,
    name: "Geoff Ramsey",
    status: "Host",
    twitterHandle: "GeoffLRamsey",
    instagramHandle: "geofflramsey",
    otherProductions: ["Rooster Teeth | ", "Achievement Hunter | ", "Annual Pass"],
  },
  {
    id: uuid(),
    image: <img width={300} src={Gavin} className="image-margin"/>,
    name: "Gavin Free",
    status: "Co Host",
    twitterHandle: "GavinFree",
    instagramHandle: "gavinfree",
    otherProductions: [
      "Rooster Teeth | ",
      "Achievement Hunter | ",
      "The Slow Mo Guys",
    ],
  },
  {
    id: uuid(),
    image: <img width={300} src={Andrew} className="image-margin"/>,
    name: "Andrew Panton / Raymond Somer",
    status: "Co Host",
    twitterHandle: "andrewpanton",
    instagramHandle: "fuckfacepod",
    otherProductions: [
      "Rooster Teeth | ",
      "Achievement Hunter | ",
      "Garfield Racing Champion | ",
      "Pencil Eater",
    ],
  },
];
