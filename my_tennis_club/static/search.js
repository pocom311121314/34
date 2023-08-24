let products = {
  data: [
    {
      id: "1",
      title: "jbl",
      category: "headphone",
      price: "300",
      image: "/static/1.jpg", 
      purchase: "https://api.whatsapp.com/send?phone=919679432975&text=i_want_to_buy_sony_cx239",
    },
    {
      id: "2",
      title: "boat",
      category: "headphone",
      price: "300",
      image: "/static/1.jpg",
      purchase: "https://api.whatsapp.com/send?phone=919679432975&text=i_want_to_buy_sony_cx239",
    },
    {
      id: "3",
      title: "boat",
      category: "headphone",
      price: "300",
      image: "/static/1.jpg",
      purchase: "https://api.whatsapp.com/send?phone=919679432975&text=i_want_to_buy_sony_cx239",
    },
    {
      id: "4",
      title: "boat",
      category: "earbud",
      price: "300",
      image: "/static/1.jpg",
      purchase: "https://api.whatsapp.com/send?phone=919679432975&text=i_want_to_buy_sony_cx239",
    },
    
    
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product id
  let id = document.createElement("h5");
  id.innerText = "# " + i.id;
  container.appendChild(id);
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.title.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "₹ " + i.price;
  container.appendChild(price);
  //purchase link
  let purchase = document.createElement("a");
  purchase.setAttribute("href", i.purchase);
  purchase.innerText = "BUY NOW" ;
  container.appendChild(purchase);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
