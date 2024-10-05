import "./styles.css";

import { initialPageLoad } from "./homepage";
import { menuLoad } from "./menu";
import { aboutPageLoad } from "./about";

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

window.addEventListener('DOMContentLoaded', aboutPageLoad);

homeBtn.addEventListener('click', initialPageLoad);
menuBtn.addEventListener('click', menuLoad);
aboutBtn.addEventListener('click', aboutPageLoad);
