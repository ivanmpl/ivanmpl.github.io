$(document).ready(function () {

    $.getJSON("https://raw.githubusercontent.com/ivanmpl/ivanmpl.github.io/master/datastore/posts.json", function (data) {

        $.each(data.posts, function (index, item) {
            // add post to html dom
            addPost(item);
        });
    });

});

function addPost(post) {
    $("<article/>", {
        "class": "post-list",
        html: (post.title + "<br>" + post.date + "<br>" + post.content + "<br>" + "<a href=" + post.link + ">Implementation on Github </a>" + "<br>" + "<br>")
    }).appendTo(".blog-post-section");
}