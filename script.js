let posts = [
    {
        user: "ErenFan99",
        content: "Just finished Attack on Titan and I am not okay.",
        likes: 120,
        comments: ["😭😭😭", "Best anime ever!"]
    },
    {
        user: "SakuraLover",
        content: "Naruto changed my childhood forever.",
        likes: 85,
        comments: ["Same here!", "Legendary!"]
    }
];

const feed = document.getElementById("feed");

function renderPosts() {
    feed.innerHTML = ""; // wyczyść feed
    posts.forEach((post, index) => {
        const div = document.createElement("div");
        div.className = "post";

        let commentsHTML = "";
        post.comments.forEach(c => {
            commentsHTML += `<p>💬 ${c}</p>`;
        });

        div.innerHTML = `
            <h3>${post.user}</h3>
            <p>${post.content}</p>
            <p>❤️ ${post.likes}</p>
            <button onclick="likePost(${index})">Like</button>
            <h4>Comments</h4>
            ${commentsHTML}
            <input type="text" id="comment-${index}" placeholder="Write a comment">
            <button onclick="addComment(${index})">Comment</button>
        `;

        feed.appendChild(div);
    });
}

function likePost(index) {
    posts[index].likes++;
    renderPosts();
}

function addComment(index) {
    const input = document.getElementById(`comment-${index}`);
    if(input.value.trim() !== "") {
        posts[index].comments.push(input.value);
        input.value = "";
        renderPosts();
    }
}

function addPost() {
    const user = document.getElementById("username").value.trim();
    const content = document.getElementById("content").value.trim();
    if(user && content) {
        posts.unshift({user, content, likes: 0, comments: []});
        document.getElementById("username").value = "";
        document.getElementById("content").value = "";
        renderPosts();
    }
}

renderPosts();
