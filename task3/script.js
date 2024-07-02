document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const messageDiv = document.getElementById('message');

    function sanitizeInput(input) {
        const tempDiv = document.createElement('div');
        tempDiv.textContent = input;
        return tempDiv.innerHTML;
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = sanitizeInput(document.getElementById('username').value);
        const email = sanitizeInput(document.getElementById('email').value);
        const password = sanitizeInput(document.getElementById('password').value);
        const number = sanitizeInput(document.getElementById('number').value);

        if (validateForm(username, email, password, number)) {
            messageDiv.textContent = 'Form submitted successfully!';
            messageDiv.style.color = 'green';
            messageDiv.style.fontSize = '20px';
            return event.stopPropagation();

        } else {
            messageDiv.textContent = 'Please correct the errors in the form.';
            messageDiv.style.color = 'red';
            messageDiv.style.fontSize = '20px';
        }
    });

    function validateForm(username, email, password, number) {
        let isValid = true;

        if (!username || username.length < 3) {
            alert('Username must be at least 3 characters long.');
            isValid = false;
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (!password || password.length < 6) {
            alert('Password must be at least 6 characters long.');
            isValid = false;
        }

        if (!number || number.length < 10) {
            alert('Correct your phone number ');
            isValid = false;
        }

        return isValid;
    }

});


// api integrating


const art = document.querySelector("#con1");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");


function api() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const random = getRandomInt(50);

    // const url = "https://api.quotable.io/quotes";
    const url1 = "https://api.openbrewerydb.org/v1/breweries"
    function quote() {
        fetch(url1).then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            console.log(random);
            console.log(`brewery_type => ${data[random].brewery_type} `);
            console.log(`country => ${data[random].country}`);
            console.log(`website_url => ${data[random].website_url}`);
            console.log(`name => ${data[random].name}`);
            console.log(`state => ${data[random].state}`);
            p1.innerHTML = `brewery_type => ${data[random].brewery_type}`;
            p2.innerHTML = `country => ${data[random].country}`;
            p3.innerHTML = `website_url => ${data[random].website_url}`;
            p4.innerHTML = `name => ${data[random].name}`;
            p5.innerHTML = `state => ${data[random].state}`;
        })
    }
    quote();

}
api();

setInterval(() => {
    api();
}, 5000);