
$(document).ready(function() {

    $("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Data variables 
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    $.ajax({
        type: "POST",
        url: "send.php",
        data: "name="+ name + "&email="+ email + "&phone=" + phone + "&message="+ message,
        success: function() { 
            alert('email sent!');
        }
    });
    return false;
}

    
function  formSuccess(){
    $( "#msgSubmit").removeClass( "hidden");}
});



/*

}*/