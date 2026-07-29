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
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        reason: "Political views; Obscenity",
        description: "Dystopian novel about a fireman whose job is to burn books in a society that outlaws reading, values shallow mass media, and suppresses independent thought.",
        image: "images/fahrenheit_451.jpg"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        reason: "Racism; Obscenity; Rape or Sexual abuse",
        description: "Novel told through the eyes of a young girl named Scout Finch, whose father, a lawyer named Atticus, defends a Black man falsely accused of a terrible crime.",
        image: "images/to_kill_a_mockingbird.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        reason: "Political views; Obscenity",
        description: "Dystopian novel about totalitarianism, mass surveillance, and absolute government control.",
        image: "images/1984.jpg"
    },
    {
        title: "The Bluest Eye",
        author: "Toni Morrison",
        reason: "Obscenity; Rape or Sexual abuse",
        description: "Set in Lorain, Ohio, the novel follows Pecola Breedlove, Claudia MacTeer, and Cholly Breedlove through themes of racism, trauma, and identity.",
        image: "images/the_bluest_eye.jpg"
    },
    {
        title: "The Giver",
        author: "Lois Lowry",
        reason: "Violence; occult/satanic content",
        description: "Dystopian young adult novel about Jonas, a 12-year-old boy who lives in a seemingly perfect society that has eliminated pain, fear, and color through Sameness.",
        image: "images/the_giver.jpg"
    }

];
//shuffle the array
function shuffle_array(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const container = document.getElementById("book-list");

//slice out 6 books and put in new variable random_six
const random_six = shuffle_array([...banned_books]).slice(0, 6);

random_six.forEach(function (book) {
    // each book its own div
    const card = document.createElement("div");

    // for css
    card.className = "book-card";

    //fill in the card using the array
    card.innerHTML = `
        <img src="${book.image}" alt="${book.title} cover" class="book-image">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <p>Banned for: ${book.reason}</p>
        <p>About: ${book.description}</p>
    `;

    //add the card to the container    
    container.appendChild(card);
    document.querySelector('.book-loading').style.display = 'none';

});

//updates the change for a screenreader
document.querySelector('.book-status').textContent = '6 recommended books are now displayed.';
