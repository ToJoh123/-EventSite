$(document).ready(function () {
  // addArticles();

  loadData();

  //async hade fungerat
  //then catch
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

  //this is to add click effect to the table

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
