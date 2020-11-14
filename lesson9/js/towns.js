// dle code

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // (dle temporary checking for valid response and data parsing)

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let towninfodenise = document.createElement('section');
                let textcontainer = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                //dle code for populating info
                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', towns[i].name);

                textcontainer.append(h2, motto, founded, population, rain);
                towninfodenise.append(textcontainer, image);

                document.querySelector('div.towns').appendChild(towninfodenise);
            }

        }
    });