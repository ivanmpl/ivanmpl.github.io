$(document).ready(function () {

    // Your code here.
    console.log("welcome");

    $.getJSON("file:///posts.json", function (data) {
        console.log("success");
        var items = [];
        $.each(data, function (key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });

});