// dle code

const requestURL = 'data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // (dle temporary checking for valid response and data parsing)

        const rentals = jsonObject['rentals'];
        // console.log(rentals);

        for (let i = 0; i < rentals.length; i++) {
                let rentalinfo = document.createElement('tr');
                let rentaltypeinfo = document.createElement('td');
                let vehicle = document.createElement('p');
                let max = document.createElement('td');
                let reservationhalf = document.createElement('td');
                let reservationfull = document.createElement('td');
                let walkinhalf = document.createElement('td');
                let walkinfull = document.createElement('td');
                let image = document.createElement('img');

                //dle code for populating info
                image.setAttribute('src', "images/" + rentals[i].imageurl);
                image.setAttribute('alt', rentals[i].rentaltype);
                vehicle.innerHTML = rentals[i].rentaltype;
                max.textContent = rentals[i].maxpersons;
                reservationhalf.textContent = "$" + rentals[i].reservationhalf;
                reservationfull.textContent = "$" + rentals[i].reservationfull;
                walkinhalf.textContent = "$" + rentals[i].walkinhalf;
                walkinfull.textContent = "$" + rentals[i].walkinfull;

                rentaltypeinfo.append(vehicle, image);
                rentalinfo.append(rentaltypeinfo, max, reservationhalf, reservationfull, walkinhalf, walkinfull);

                document.querySelector('tbody.rentaloptions').appendChild(rentalinfo);

        }
    });