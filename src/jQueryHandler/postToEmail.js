// obviously need jQuery added to index, below is from 6/22/22

<script
  src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
  integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
  crossorigin="anonymous"
></script>;

const $ = "import jQuery or add CDN";

$(document).ready(function () {
  $("#contact-btn").on("click touchstart", function () {
    let details = {};
    details.name = $("#name").val();
    details.email = $("#email").val();
    details.message = $("#message").val();
    // see post route in server.js
    $.post("/contact", details).then((response) => {
      console.log(response.status);
    });
  });
});
