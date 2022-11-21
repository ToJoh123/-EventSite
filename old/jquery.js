function createCardsJquery4() {
  for (let i = 0; i < shoes.length; i++) {
    const card = $(`
                      <div class="card">
                          <img src="${shoes[i].image}" alt="shoe">
                          <div class="card-info">
                              <h2>${shoes[i].name}</h2>
                              <p>${shoes[i].description}</p>
                              <p>${shoes[i].price} ${shoes[i].unit}</
                          </div>
                      </div>
                  `);
    $(".slideshow").append(card);
    card.addClass("card");
    card.hover(
      function () {
        $(this).css("box-shadow", "10px 10px 5px #888");
      },
      function () {
        $(this).css("box-shadow", "none");
      }
    );
    card.click(function () {
      $(this).toggleClass("selected");
      console.log(shoes[i].name);
      if ($(this).hasClass("selected")) {
        $(this).css("border", "2px solid black");
      } else {
        $(this).css("border", "none");
      }
      $(".card").not(this).removeClass("selected");
      $(".card").not(this).css("border", "none");
    });
  }
}
