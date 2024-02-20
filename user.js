const postListEL = document.querySelector(".post-list");


async function main() {
    const id = localStorage.getItem("id") // 3) since the id is saved in local storage, this pulls that information to use in this file/window
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json(); 
    console.log(postsData)
    

    postListEL.innerHTML = postsData.map(post => postHTML(post))

}

main()

function postHTML(post) {
    return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
    ${post.body}
    </p>
  </div>`
}
