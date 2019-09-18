 import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import {Docs} from "./doc.js"

$(document).ready(function(){
  $("#queryBtn").click(function() {
    // event.preventDefaul();
    const query = $("#queryIn").val();
    const name  = $("#nameIn").val();
    $("#nameIn").val("")
    $("#queryIn").val("");
    const doctor = new Docs();
    let promise = doctor.getDocIssue(query, name);

    promise.then(function(response){
      const body = JSON.parse(response);
      let drData = body.data;
      console.log(drData[0].profile.first_name);

      $("#doctorOut").append(`<ul id='docList'></ul>`)

        if (drData.length === 0) {
          $("#docList").text("Sorry but we couldn't find any doctors meeting your requirements.")
        } else {
          for (var i = 0; i < drData.length; i++) {
            $("#docList").append(`<li id="doc${i}"><strong>Name: </strong>${drData[i].profile.first_name + " " + drData[i].profile.last_name}<br><strong>Address: </strong>
            ${drData[i].practices[0].visit_address.street}  ${drData[i].practices[0].visit_address.street2}</li>`);
        }
      }
      if (body.meta.length <= 0) {
        $("#doctorOut").append("We couldn't find any doctors with that name")
      } else {
        $("#doctorOut").append(body.meta)
      }
    });
  });

  $("#nameBtn").click(function(){
    const name = $("#nameIn").val();
    $("#nameIn").val("");
    $("#doctorOut").append(`<ul id='docList'></ul>`);
    const doctor = new Docs(name);
    let promise = doctor.getDocIssue(doctor.name);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let drData = body.data;
      for (var i = 0; i < body.data.meta.length; i++) {
        if (drData[i].profile.first_name + " " + drData[i].profile.last_name === name) {
          console.log(name);
          console.log(drData[i].profile.first_name + " " + drData[i].profile.last_name);
          $("#docList").append(`<li id="doc${i}"><strong>Name: </strong>${drData[i].profile.first_name + " " + drData[i].profile.last_name}<br><strong>Address: </strong> ${drData[i].practices[0].visit_address.street}  ${drData[i].practices[0].visit_address.street2}</li>`);
        }
      }
    });
  });
});
