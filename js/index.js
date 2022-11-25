$(document).ready(function () {
  // addArticles();
  $("#thank-you-contact").hide();
  loadData();

  //async hade fungerat
  //then catch
  async function loadData() {
    const response = await fetch("data/data.json");
    const data = await response.json();
    const events = data.events;
    const featured = [];
    //this code will loop through the data and add the and add the data to a featured array
    for (let i = 0; i < events.length; i++) {
      if (events[i].featured === true) {
        featured.push(events[i]);
      }
    }
    console.log(featured);
    addArticles(featured);
    hideText();
  }

  function addArticles(events) {
    for (let i = 0; i < events.length; i++) {
      const table = $(`
    <article id="${["article" + i]}">
        <img src="${events[i].image}" alt="image">
              <table>
                <tr>
                    <th>Name</th>
                    <td>${events[i].name}</td>
                </tr>
                <tr>
                    <th>Datum</th>
                    <td>${events[i].date}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td><button class="toggle1" id="${[
                      i,
                    ]}">Show text</button></td>
                    <div class="hidden" id="p-${[i]}"><h3>📖</h3><p>${
        events[i].short_desc
      }</p></div>
                </tr>
                <tr>
                    <th>Category</th>
                    <td>${events[i].category}</td>
                </tr>
                <tr>
                    <th>Link</th>
                    <td><a href="${events[i].link}">Länk</a></td>
                </tr>
              </table>
        </article>
          `);
      $(".articles").append(table);
    }
    const buttons = $(".toggle1");
    console.log("buttons", buttons);
    $(".toggle1").click(function () {
      console.log("clicked");
      const buttonId = this.id;
      $(this).toggleClass("clicked");
      if ($(this).hasClass("clicked")) {
        $("#p-" + buttonId).show();
        $(this).text("hide text");
      } else {
        $("#p-" + buttonId).hide();
        //   $("#p-" + buttonId).text();
        $(this).text("Show text");
      }
    });
  }
  //this function will hide the text if it has classname of hidden
  function hideText() {
    $(".hidden").hide();
  }
  $("#send-message-btn").click(function () {
    $("#message-form").hide(1000);
    $("#thank-you-contact").show(1000);

    // this will uppdate page after 5 seconds
    setTimeout(function () {
      location.reload();
    }, 5000);
    return false;
  }); //end of send-message click function
}); //end of document ready
