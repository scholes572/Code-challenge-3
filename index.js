function displayPosts() {
    fetch("http://localhost:3000/posts")
       .then(function(response) {
        return response.json();
    })
       .then(function(posts) {
        let postlist = document.getElementById("postlist");
        postlist.innerHTML = "";

        for (let p = 0; p < posts.length; p++) {
            let post = posts[p];
            let postBox = document.createElement("div");
            let title = document.createElement("p");
            title.textContent = post.title;
            let image = document.createElement("img");
            image.src = post.image;


            title.addEventListener("click", function() {
                let postDetail = document.getElementById("post detail");
                postDetail.innerHTML =
                 `<h2>${post.title}<h2>
                  <p>${post.content}</p>
                  <p><strong>Author:</strong> ${post.author}</p2>`
            });

            postBox.appendChild(title);
            postBox.appendChild(image);
            postlist.appendChild(postBox);
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    displayPosts();
});

function newPostListener() {
    const form = document.getElementById("A new post form");
    form.addEventListener("submit", function(e) {
        const title = document.getElementById("new title").value;
        const image = document.getElementById("new image").value;
        const content = document.getElementById("new content").value;
        const author = document.getElementById("new author").value;
        const newPost = {
            title: title,
            image: image,
            content: content,
            author: author
        };

        const postlist = document.getElementById("postlist");
        const postBox = document.createElement("div");
        const titleElement = document.createElement("p");
        titleElement.textContent = newPost.title;

        const imageElement = document.createElement("img");
        imageElement.src = newPost.image;



    titleEl.addEventListener("click", function() {
      const detail = document.getElementById("postdetail");
      detail.innerHTML = `
        <h2>${newPost.title}</h2>
        <p>${newPost.content}</p>
        <p><strong>Author:</strong> ${newPost.author}</p>
      `;
    });
    postBox.appendChild(titleElement);
    postBox.appendChild(imageElement);
    postList.appendChild(postBox);

    form.reset();
    })
}
document.addEventListener("DOMContentLoaded", function main() {
  displayPosts();
  addNewPostListener();
});


