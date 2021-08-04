import { v4 as uuid } from "uuid";
// import Geoff from "../Assets/geoffRamsey";
// import Gavin from "../Assets/Gavin";
// import Andrew from "../Assets/Andrew";

export default [
  {
    id: uuid(),
    //image: Geoff,
    name: "Geoff Ramsey",
    status: "Host",
    twitterHandle: "@GeoffLRamsey",
    instagramHandle: "@geofflramsey",
    otherProductions: ["Rooster Teeth", "Achievement Hunter", "Annual Pass"],
  },
  {
    id: uuid(),
    //image: Gavin,
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
    //image: Andrew,
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
