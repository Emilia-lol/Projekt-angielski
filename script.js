const posts = [
    {
        user: "ErenFan99",
        content: "Just finished Attack on Titan and I am not okay.",
        likes: 120
    },
    {
        user: "SakuraLover",
        content: "Naruto changed my childhood forever.",
        likes: 85
    }
];

const feed = document.getElementById("feed");

posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
        <h3>${post.user}</h3>
        <p>${post.content}</p>
        <p>❤️ ${post.likes}</p>
        <button onclick="likePost(this)">Like</button>
    `;

    feed.appendChild(div);
});

function likePost(button) {
    const likesText = button.previousElementSibling;
    let likes = parseInt(likesText.innerText.replace("❤️ ", ""));
    likes++;
    likesText.innerText = "❤️ " + likes;
}
