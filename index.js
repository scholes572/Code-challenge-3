function displayPosts() {
    fetch("http://localhost:3000/posts")
       .then(function(response) {
        return response.json();
    })
       .then(function(posts) {
        let postlist = document.getElementById("post list");
        postlist.innerHTML = "";

        for (let p = 0; p < posts.length; p++) {
            let post = posts[p];
            let postBox = document.createElement("div");
            let title = document.createElement("p");
            title.textContent = post.title;
            let image = document.createElement("img");
            image.src = post.image;

            postBox.appendChild(title);
            postBox.appendChild(image);
            postlist.appendChild(postBox);
        }
    });
}