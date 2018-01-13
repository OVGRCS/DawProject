$(document).ready(function () {
    $('#login').click(function () {
        var containerAux = document.getElementById("LogDiv");
        var user = $('#user').val();
        var password = $('#password').val();

        $.getJSON("https://api.myjson.com/bins/vvi0b", function (data) {
            $.each(data, function (key, value) {
                if(user == value.user_name && password == value.password){
                    var htmlString = "<p>" + "Bienvenido " + value.user_name + "</p>";
                    containerAux.insertAdjacentHTML('afterbegin', htmlString);
                    $('#UserButton').hide();
                    $('#prueba').hide();
                    $('#Recordar').hide();
                    $('#Recordarme').hide();
                    $('#user').hide();
                    $('#password').hide();
                    $('#login').hide();
                    return;
                }
            });

            $('#container').slideUp('slow').slideDown('slow');
            $('#user').val('');
            $('#password').val('');
        });
        return false;
    });
});