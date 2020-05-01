$(document).ready(function () {

    $.getJSON("https://raw.githubusercontent.com/ivanmpl/ivanmpl.github.io/master/datastore/posts.json", function (data) {

        $.each(data.posts, function (index, item) {
            // add post to html dom
            addPost(item);
        });
    });

});

// TODO: Use moment.js for date formatting
function addPost(post) {
    $("<article/>", {
        "class": "blog-post",
        html: ("<h2>" + post.title + "</h2>" + "<h5>" + (new Date(post.date).getMonth() + 1) + "/" + new Date(post.date).getDate() + "/" + new Date(post.date).getFullYear() + "</h5>" + "<p>" + post.content + "</p>" + "<p>" + "<a href=" + post.link + ">Implementation on Github </a>" + "</p>")
    }).appendTo(".blog-post-section");
}