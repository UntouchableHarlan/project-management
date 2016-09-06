// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var submitSignup = function(){
  $('#new_user').submit(function(event){
    event.preventDefault
    $.ajax({
      url: this.attr('action'),
      type: this.attr('method'),
      data: $(this).serialize(),
      success: function(){
        console.log('signed up');
      }// end success
    });// end ajax
  }); // edn submit
}; //end function

$(document).ready(function(){

});
