function cleanTable() {
    $.ajax({
        type: "POST",
        url: "controller-servlet",
        success: function () {
            window.location.reload();
        },
        error: function (xhr, textStatus, err) {
            alert("readyState: " + xhr.readyState + "\n" +
                "responseText: " + xhr.responseText + "\n" +
                "status: " + xhr.status + "\n" +
                "text status: " + textStatus + "\n" +
                "error: " + err);
        }
    })
}