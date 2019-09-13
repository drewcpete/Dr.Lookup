import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {createHTML} from "./dino.js"
import {array} from "./dino.js"


    $('#query').val("");
    console.log(teamNum + " submit");
    let request = new XMLHttpRequest();
    const url = `http://dinoipsum.herokuapp.com/api?format=json&paragraphs=${teamNum}&words=${memberNum}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response[0]);
        console.log(response.sort());
      }
