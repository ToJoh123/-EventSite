// events = [
//   {
//     name: "Air force jam",
//     date: "1 jan 2020",
//     short_desc: "this party is for short shoes unless you have tall ones.",
//     category: "sneakers",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "blockfeet party",
//     date: "1 jan 2020",
//     short_desc: "this party is for crypto shoes,bring your blockfeet",
//     category: "sneakers",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "Ground force jammed",
//     date: "1 jan 2020",
//     short_desc: "if youre not wearing shoes you cant come",
//     category: "shoeless",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "vs code party",
//     date: "1 jan 2020",
//     short_desc: " this event is for all who dont know what shoes are",
//     category: "code",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "shoelace party",
//     date: "1 jan 2050",
//     short_desc: "this party is for all who have shoelaces",
//     category: "shoelaces",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "sole party",
//     date: "1 jan 2040",
//     short_desc: "this party is for all who have soles",
//     category: "soles",
//     link: "details.html",
//     image:
//       "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/e-Soul/specfication/kia-e-soul-my19-slide-list-01-w.png",
//   },
//   {
//     name: "javascript party",
//     date: "1 jan 2030",
//     short_desc: "this party is for all who have javascript",
//     category: "javascript",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "react party",
//     date: "1 jan 2020",
//     short_desc: "this party is for all who have react",
//     category: "react",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "node party",
//     date: "1 jan 2020",
//     short_desc: "this party is for all who have node",
//     category: "node",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "express party",
//     date: "1 jan 2020",
//     short_desc: "this party is for all who have express",
//     category: "express",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "mongo party",
//     date: "1 jan 2020",
//     short_desc: "this party is for all who have mongo",
//     category: "mongo",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "mongoose party",
//     date: "1 jan 2020",
//     short_desc: "this party is for all who have mongoose",
//     category: "mongoose",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
//   {
//     name: "html party",
//     date: "1 jan 2020",
//     short_desc: "this party is for all who have html",
//     category: "html",
//     link: "details.html",
//     image: "https://picsum.photos/200",
//   },
// ];

$(document).ready(function () {
  // addArticles();

  loadData();

  async function loadData() {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    //parse the json data
    console.log(data.events);
    addArticles(data.events);
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
  }

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

  //this function will hide the text if it has classname of hidden
  function hideText() {
    $(".hidden").hide();
  }
  //this function will show the text if it has classname of hidden
  $("#thank-you").hide();

  $("#create-event").click(function () {
    //this will hide the id event-form-container and replace it with a thank you message
    $("#create-event-form").hide(1000);
    $("#thank-you").show(1000);

    // this will uppdate page after 5 seconds
    setTimeout(function () {
      location.reload();
    }, 5000);
    return false;
  }); //end of create-event click function

  $("#send-message-btn").click(function () {
    // append the message to the body
    const message = $("#message").val();
    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const messageContainer = $(`
    <div class="message-container">
    <h3>Message from ${name}</h3>
    <p>${message}</p>
    <p>${email}</p>
    <p>${phone}</p>
    </div>
    `);

    // this will uppdate page after 5 seconds
    setTimeout(function () {
      location.reload();
    }, 5000);
    return false;
  }); //end of send-message click function
}); //end of document ready
