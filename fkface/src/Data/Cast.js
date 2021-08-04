import { v4 as uuid } from "uuid";
 import Geoff from '../Assets/geoffRamsey.jpeg'
import Gavin from "../Assets/Gavin.jpeg";
 import Andrew from "../Assets/Andrew.jpeg";

export default [
  {
    id: uuid(),
    image: <img width={200} src={Geoff} />,
    name: "Geoff Ramsey",
    status: "Host",
    twitterHandle: "@GeoffLRamsey",
    instagramHandle: "@geofflramsey",
    otherProductions: ["Rooster Teeth", "Achievement Hunter", "Annual Pass"],
  },
  {
    id: uuid(),
    image: <img width={200} src={Gavin} />,
    name: "Gavin Free",
    status: "Co Host",
    twitterHandle: "@GavinFree",
    instagramHandle: "@gavinfree",
    otherProductions: [
      "Rooster Teeh",
      "Achievement Hunter",
      "The Slow Mo Guys",
    ],
  },
  {
    id: uuid(),
    image: <img width={200} src={Andrew} />,
    name: "Andrew Panton / Raymond Somer",
    status: "Co Host",
    twitterHandle: "@andrewpanton",
    instagramHandle: "Doesn't have one",
    otherProductions: [
      "Rooster Teeth",
      "Achievement Hunter",
      "Garfield Racing Champion",
      "Pencil Eater",
    ],
  },
];
