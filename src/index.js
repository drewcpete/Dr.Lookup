 import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import {Docs} from "./doc.js"

$(document).ready(function(){
  $("#queryBtn").click(function() {
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
            $("#docList").append(`<li id="doc${i}"><strong>Name: </strong>${drData[i].profile.first_name + " " + drData[i].profile.last_name}<ul><li><strong>Address: </strong>
            ${drData[i].practices[0].visit_address.street}  ${drData[i].practices[0].visit_address.street2}</li><li><strong>Website: </strong> ${drData[i].practices[0].website} </li><li><strong>Phone Number: </strong> ${drData[i].practices[0].phones[0].number}</li></ul>`);
            if(drData[i].practices[0].accepts_new_patients === true){
              $(`#doc${i}`).append("<ul><li><strong>This practice accepts new patients.</strong></li></ul>");
            }
          } 
          
        }
    }, function(error){
      $(".showErrors").text(`There was an error processing your request: ${error.message}`)
    });
  });
});
