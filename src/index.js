 import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import {Docs} from "./doc.js"

$(document).ready(function(){
  $("#queryBtn").click(function() {
    // event.preventDefaul();
    const query = $("#queryIn").val();
    $("#queryIn").val("");
    const doctor = new Docs();
    console.log(doctor.query + query + " is the searched query");

    let promise = doctor.getDocIssue();

    promise.then(function(response){
      const body = JSON.parse(response);
      console.log(body.data.profile);
      let profile = body.data.profile;
      let address = body.data.visit_address;
      $("#doctorOut").append("<ul id='docList'></ul>")
      for (var i = 0; i < newArray.length; i++) {

        $("#docList").append(`<li><strong>Name:</strong>${newArray[i].profile.first_name} ${newArray[i].profile.last_name}</li>`);
        $("#docList").append(`<li><strong>Address:</strong>${newArray[i].visit_address.street}, ${newArray[i].visit_address.street2}, ${newArray[i].visit_address.city}, ${newArray[i].phones.number}</li>`)
      }
    });
    let docData = doctor.getDocIssue(query);
    console.log(docData);

  })
  $("#nameBtn").click(function(){
    const docName = $("#nameIn").val()
    $("#nameIn").val("")
    const doctor = new Docs(docName)
    console.log(docName + " is the searched name")
  })
})


    // let request = new XMLHttpRequest();
    // const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5170, -122.6733, 25&skip=0&limit=10&user_key=${process.env.apiKey}&query=${query}`;
    // alert(url);
    //
    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     getElements(response);
    //     console.log(response);
    //     console.log(response[0]);
    //     $("#doctorOut").append(response.data.practices.visit_address.street + response.data.practices.visit_address.street2)
    //
    //   }
    //
    // }
