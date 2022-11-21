$(document).ready(function () {
  console.log("ready!");

  const events = [
    {
      name: "Air force jam",
      date: "1 jan 2020",
      short_desc: "this party is for short shoes unless you have tall ones.",
      category: "sneakers",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "blockfeet party",
      date: "1 jan 2020",
      short_desc: "this party is for crypto shoes,bring your blockfeet",
      category: "sneakers",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "Ground force jammed",
      date: "1 jan 2020",
      short_desc: "if youre not wearing shoes you cant come",
      category: "shoeless",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "vs code party",
      date: "1 jan 2020",
      short_desc: " this event is for all who dont know what shoes are",
      category: "code",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "shoelace party",
      date: "1 jan 2050",
      short_desc: "this party is for all who have shoelaces",
      category: "shoelaces",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "sole party",
      date: "1 jan 2040",
      short_desc: "this party is for all who have soles",
      category: "soles",
      link: "details.html",
      image:
        "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/e-Soul/specfication/kia-e-soul-my19-slide-list-01-w.png",
    },
    {
      name: "javascript party",
      date: "1 jan 2030",
      short_desc: "this party is for all who have javascript",
      category: "javascript",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "react party",
      date: "1 jan 2020",
      short_desc: "this party is for all who have react",
      category: "react",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "node party",
      date: "1 jan 2020",
      short_desc: "this party is for all who have node",
      category: "node",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "express party",
      date: "1 jan 2020",
      short_desc: "this party is for all who have express",
      category: "express",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "mongo party",
      date: "1 jan 2020",
      short_desc: "this party is for all who have mongo",
      category: "mongo",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "mongoose party",
      date: "1 jan 2020",
      short_desc: "this party is for all who have mongoose",
      category: "mongoose",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
    {
      name: "html party",
      date: "1 jan 2020",
      short_desc: "this party is for all who have html",
      category: "html",
      link: "details.html",
      image: "https://picsum.photos/200",
    },
  ];

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
                    <td><button class="toggle1" id="${[i]}">More</button></td>
                    <td class="hidden" id="p-${[i]}">${
        events[i].short_desc
      }</td>
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

  addArticles();

  //this will cause the articles to be change background color when clicked

  //this is to add click effect to the table
  $(".toggle1").click(function () {
    buttonId = this.id;
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      $("#p-" + buttonId).show();
      $(this).text("less");
    } else {
      $("#p-" + buttonId).hide();
      //   $("#p-" + buttonId).text();
      $(this).text("More");
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
//this will code will run when the button is clicked
