    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString('en-za', options);