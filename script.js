$.getJSON("./ports.json", function(data) {
    var items = [];
    $.each(data, function(key, val) {
        items.push("<li class='list-group-item' id='" + key + "'>" + val.path + "</li>");
    });

    $("<ul/>", {
        "class": "serial-ports list-group list-group-flush",
        html: items.join("")
    }).appendTo("div.content");
});