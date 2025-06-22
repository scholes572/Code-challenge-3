function displayPosts() {
    fetch("http://localhost:3000/posts")
       .then(function(response) {
        return response.json()
    })
}