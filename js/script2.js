$(document).ready(function () {
  console.log("ready!");

  function addArticles() {
    for (let i = 0; i < events.length; i++) {
      const description = events[i].short_desc.substring(0, 30);
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
  }

  //fetch data from data.js in data folder
  fetch("data/data.jason")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.events);
      events = data;
      addArticles();
    })
    .catch(function (error) {
      console.log(error);
    });

  //this will cause the articles to be change background color when clicked

  //this is to add click effect to the table
  $(".toggle1").click(function () {
    buttonId = this.id;
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

  // $(".toggle").click(function () {
  //   //console log to see if the button is clicked
  //   console.log(this.id);
  //   //replace the text with the full description

  //   //
  // });
  //   $(".toggle1").click(function () {
  //     buttonId = this.id;
  //     //this code will show the full description from the td with same id as the button
  //     $("#p-" + buttonId).show();
  //     //this code will hide the button

  //     console.log(buttonId);
  //   });

  //this function will add

  //this function will hide the text if it has classname of hidden
  function hideText() {
    $(".hidden").hide();
  }
  hideText();
});
$("#thank-you").hide();
$("#create-event").click(function () {
  console.log("clicked");

  //this will hide the id event-form-container and replace it with a thank you message
  $("#create-event-form").hide(1000);
  $("#thank-you").show(1000);

  // this will uppdate page after 5 seconds
  setTimeout(function () {
    location.reload();
  }, 5000);
  return false;
});

//this will code will run when the button is clicked
