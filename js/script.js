const banned_books = [
    {
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        reason: "Sexual content; political themes; LGBTQIA+ repesentation",
        description: "A dystopian story about the Republic of Gilead, a religious dictatorship that replaced the United States.",
        image: "images/handmaids_tale.jpg"
    },
    {
        title: "How to Be Ace: A Memoir of Growing Up Asexual",
        author: "Rebecca Burgess",
        reason: "Nudity; LGBTQIA+ representation",
        description: "A graphic memoir that explores asexuality, mental health, and coming of age in a sex-obsessed culture.",
        image: "images/how_to_be_ace.jpg"
    },
    {
        title: "Slaughterhouse-Five, or, the Children's Crusade: A Duty-Dance with Death",
        author: "Kurt Vonnegut",
        reason: "Obscenity; Violence; anti-authority",
        description: "Anti-war novel about a chaplain's assistant in World War II who becomes unstuck in time, surviving the firebombing of Dresden and getting abducted by aliens.",
        image: "images/slaughterhouse_five.jpg"
    },
    {
        title: "Different Seasons",
        author: "Stephen King",
        reason: "Obscenity; Offensive language",
        description: "Four novellas, including Rita Hayworth and Shawshank Redemption, and The Body.",
        image: "images/different_seasons.jpg"
    },
];

const container = document.getElementById("book-list");

banned_books.forEach(function (book) {
    // each book its own div
    const card = document.createElement("div");

    // for css
    card.className = "book-card";

    //fill in the card using the array
    card.innerHTML = `
        <img src="${book.image}" alt=${book.title} cover" class="book-image">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <p>Banned for: ${book.reason}</p>
        <p>About: ${book.description}</p>
    `;

    //add the card to the container    
    container.appendChild(card);

});
