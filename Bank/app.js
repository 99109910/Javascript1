localStorage.setItem("Balance", 10000);
let balance = localStorage.getItem("Balance");

$("#kytBtn").click(function () {
    let kytkadi = $("#kytkadi").val();
    let kytsifre = $("#kytsifre").val();
    localStorage.setItem("kadi", kytkadi);
    localStorage.setItem("sifre", kytsifre)
    setTimeout(() => {
        window.location.href = "login.html"
    })
});

$("#girisBtn").click(function () { 
    let girilenkadi = $("#giriskadi").val();
    let girilensfire = $("#girissifre").val();
    let kadi = localStorage.getItem("kadi");
    let sifre = localStorage.getItem("sifre");
    if (girilenkadi == kadi && girilensfire == sifre) {
        $("#info").html("Successfull log in, you are directed to main page");
        $("#info").css("color", "green");
        setTimeout(() => {
            window.location.href="mainPage.html";
        }, 3000)
    }
    else{
        $("#info").html("Username or password is invalid");
        $("#info").css("color", "red");
    }
});

setTimeout(() => {
    $("#karsilama").css("display","none")
}, 5000)

$("#Balance").html("Balance: " + balance);

$("#pcek").click(function () { 
    $(this).hide();
    $("#pgonder").hide();
    $("#cekinp").show();
    $("#cek").show();
    $("#geribtn").show();
});

$("#geribtn").click(function () { 
    window.location.href = "mainPage.html"
});

$("#cek").click(function () { 
    let tutar = + $("#cekinp").val();
    let balance = localStorage.getItem("Balance");
    if (balance >= tutar && tutar >= 0) {
        let sonuc = balance - tutar;
        localStorage.setItem("Balance", sonuc)
        $("#Balance").html("Balance: " + sonuc);
        $("#info").html("Transaction is Successful");

    }
    else{
        $("#info").html("Insufficient Balance");
    }
});

$("#pgonder").click(function () { 
    $("#cekinp").show();
    $("#ibaninp").show();
    $("#geribtn").show();
    $("#gonder").show();
    $(this).hide();
    $("#pcek").hide();
});

$("#gonder").click(function () {
    let tutar = + $("#cekinp").val()
    let balance = localStorage.getItem("Balance");
    let iban = $("#ibaninp").val();
    if (iban.length == 26) {
        if (balance > tutar && tutar > 0) {
            let sonuc = balance - tutar;
            localStorage.setItem("Balance", sonuc);
            $("#Balance").html("Balance: " + sonuc);
            $("#info").html("Transaction is Successful");
        }
        else{
            $("#info").html("Insufficient Balance");
        }
    }
    else{
        $("#info").html("Iban number is wrong");
    }
    
});