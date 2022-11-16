const shoes = [
  {
    name: "Nike Air Force 1",
    date: "1 jan 2020",
    short_desc:
      "this shoes are mostly for long shoes but can also be short if you cut them.",
    category: "sneakers",
    link: "https://www.nike.com/t/air-force-1-07-shoe-1J7X3C/AT6174-100",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/200",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 2",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/201",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 3",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/202",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 4",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/203",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 5",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/204",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 6",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/205",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 7",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/206",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 8",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/207",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 9",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/208",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
];
const events = [
  {
    name: "Air force jam",
    date: "1 jan 2020",
    short_desc: "this party is for short shoes unless you have tall ones.",
    category: "sneakers",
    link: "https://www.nike.com/",
    image: "https://picsum.photos/200",
  },
  {
    name: "blockfeet party",
    date: "1 jan 2020",
    short_desc: "this party is for crypto shoes,bring your blockfeetScanner",
    category: "sneakers",
    link: "https://www.nike.com/",
    image: "https://picsum.photos/200",
  },
  {
    name: "Ground force jammed",
    date: "1 jan 2020",
    short_desc: "if youre not wearing shoes you cant come",
    category: "shoeless",
    link: "https://sv.wikipedia.org/wiki/Tr%C3%A4sk",
    image: "https://picsum.photos/200",
  },
  {
    name: "vs code party",
    date: "1 jan 2020",
    short_desc: " this event is for all who dont know what shoes are",
    category: "code",
    link: "https://www.microsoft.com/sv-se/",
    image: "https://picsum.photos/200",
  },
  {
    name: "shoelace party",
    date: "1 jan 2050",
    short_desc: "this party is for all who have shoelaces",
    category: "shoelaces",
    link: "https://yarnpkg.com/",
    image: "https://picsum.photos/200",
  },
  {
    name: "sole party",
    date: "1 jan 2040",
    short_desc: "this party is for all who have soles",
    category: "soles",
    link: "https://www.kia.com/se/nya-bilar/e-soul/specifications/",
    image:
      "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/e-Soul/specfication/kia-e-soul-my19-slide-list-01-w.png",
  },
  {
    name: "javascript party",
    date: "1 jan 2030",
    short_desc: "this party is for all who have javascript",
    category: "javascript",
    link: "https://www.javascript.com/",
    image: "https://picsum.photos/200",
  },
  {
    name: "react party",
    date: "1 jan 2020",
    short_desc: "this party is for all who have react",
    category: "react",
    link: "https://reactjs.org/",
    image: "https://picsum.photos/200",
  },
  {
    name: "node party",
    date: "1 jan 2020",
    short_desc: "this party is for all who have node",
    category: "node",
    link: "https://nodejs.org/en/",
    image: "https://picsum.photos/200",
  },
  {
    name: "express party",
    date: "1 jan 2020",
    short_desc: "this party is for all who have express",
    category: "express",
    link: "https://expressjs.com/",
    image: "https://picsum.photos/200",
  },
  {
    name: "mongo party",
    date: "1 jan 2020",
    short_desc: "this party is for all who have mongo",
    category: "mongo",
    link: "https://www.mongodb.com/",
    image: "https://picsum.photos/200",
  },
  {
    name: "mongoose party",
    date: "1 jan 2020",
    short_desc: "this party is for all who have mongoose",
    category: "mongoose",
    link: "https://mongoosejs.com/",
    image: "https://picsum.photos/200",
  },
  {
    name: "html party",
    date: "1 jan 2020",
    short_desc: "this party is for all who have html",
    category: "html",
    link: "https://www.w3schools.com/html/",
    image: "https://picsum.photos/200",
  },
];

/* <section id="events">
<img src="https://picsum.photos/200/200" alt="" />
<article>
  <!-- table with name, date, short description, category,link to event -->
  <table>
    <tr>
      <th>Name</th>
      <td>Eventet</td>
    </tr>
    <tr>
      <th>Datum</th>
      <td>1 January</td>
    </tr>
    <tr>
      <th>Short description</th>
      <td>Detta är ett event</td>
    </tr>
    <tr>
      <th>Category</th>
      <td>Afterwork</td>
    </tr>
    <tr>
      <th>Link</th>
      <td><a href="">Länk</a></td>
    </tr>
  </table>
</article>
</section> 
this function will display the data in the events array using the template above to display the data in the html
*/

// function displayEvents() {
//   const eventSection = document.getElementById("events");
//   events.forEach((event) => {
//     const eventDiv = document.createElement("div");
//     eventDiv.innerHTML = `
//         <img src="${event.image}" alt="" />
//         <article>
//         <!-- table with name, date, short description, category,link to event -->
//         <table>
//             <tr>
//             <th>Name</th>
//             <td>${event.name}</td>
//             </tr>
//             <tr>
//             <th>Datum</th>
//             <td>${event.date}</td>
//             </tr>
//             <tr>
//             <th>Short description</th>
//             <td>${event.short_desc}</td>
//             </tr>
//             <tr>
//             <th>Category</th>
//             <td>${event.category}</td>
//             </tr>
//             <tr>
//             <th>Link</th>
//             <td><a href="${event.link}">Länk</a></td>
//             </tr>
//         </table>
//         </article>
//         `;
//     eventSection.appendChild(eventDiv);
//   });
// }

var obj = [
  {
    key: "apple",
    value: 1.9,
  },
  {
    key: "berry",
    value: 1.7,
  },
  {
    key: "banana",
    value: 1.5,
  },
  {
    key: "cherry",
    value: 1.2,
  },
];
var globalCounter = 0;
var tbody = document.getElementById("tbody");
for (var i = 0; i < Object.keys(obj).length; i++) {
  var tr = "<tr>";
  if (
    obj[i].value
      .toString()
      .substring(
        obj[i].value.toString().indexOf("."),
        obj[i].value.toString().length
      ) < 2
  )
    obj[i].value += "0";

  tr +=
    "<td>" +
    obj[i].key +
    "</td>" +
    "<td>$" +
    obj[i].value.toString() +
    "</td></tr>";
  tbody.innerHTML += tr;
}
