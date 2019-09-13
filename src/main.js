import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {popDoc} from "./doc.js"
// import {array} from "./dino.js"

$(document).ready(function(){
  $("#lookupForm").submit(function(event) {
    event.preventDefaul();
    let query = $("#query").val("");
    $('#query').val("");
    console.log(query + " is the issue");

    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5170%2C%20-122.6733%2C%2025%26&skip=0&limit=10&user_key=$${process.env.exports.apiKey}&query=${query}`;
    console.log(url);

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
        console.log(response[0]);
        $("#doctorOut").append(response[0])

      }

    }
  })
})
