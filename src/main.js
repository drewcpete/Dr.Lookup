import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {popDoc} from "./doc.js"
import {Doc} from "./doc.js"

$(document).ready(function(){
  $("#lookupForm").submit(function(event) {
    event.preventDefaul();
    let query = $("#query").val("");
    const doctor = $("#doctorIn")

    let doctors = new Doctors
    console.log(query + " is the issue");

    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5170, -122.6733, 25&skip=0&limit=10&user_key=${process.env.apiKey}&query=${query}`;
    alert(url);

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
        console.log(response[0]);
        $("#doctorOut").append(response.data.practices.visit_address.street + response.data.practices.visit_address.street2)

      }

    }
  })
})
