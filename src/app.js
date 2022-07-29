/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = domainGenerator();
  });
  console.log("Hello Rigo from the console!");
};

let domainGenerator = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".us", ".net", ".io"];

  let índicePronoun = Math.floor(Math.random() * pronoun.length);
  let índiceAdj = Math.floor(Math.random() * adj.length);
  let índiceNoun = Math.floor(Math.random() * noun.length);
  let índiceDomain = Math.floor(Math.random() * domain.length);

  return `${pronoun[índicePronoun]}${adj[índiceAdj]}${noun[índiceNoun]}${domain[índiceDomain]}`;
};
