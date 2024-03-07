const cardcontainer = document.getElementById("card-posts");
if (localStorage.getItem("storage")) {
  let cardList = [];
  cardList = JSON.parse(localStorage.getItem("storage"));
  if (cardList.length > 0) {
    for (let i = 0; i < cardList.length; i++) {
      let singleCard = ` <div class="cards">
      <div class="card-img">
        <img src="${cardList[i].blogImage}" alt="blog post" />
      </div>
      <div class="card-body">
        <a href="blog.html?blog_id=${i}" class="blog-post"
          >${cardList[i].blogTitle}</a
        >
        <p class="post">
    ${cardList[i].intro}
        </p>
      </div>
      <div class="card-footer">
        <a href="#"> 30<i class="fas fa-thumbs-up"></i></a>
        <a href="#">60<i class="fas fa-comment"></i></a>
      </div>
    </div> `;
      cardcontainer.insertAdjacentHTML("beforeend", singleCard);
    }
  }
} else {
  alert("No cards to be displayed");
}
