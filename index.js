

var favFilms = [
    {
        id : 1,
        title : "Karmazynowy przypływ",
        price : '25.99',
        img : './img/krp.jpeg',
        dscrpt : "Sed id consectetur ligula. Donec pellentesque, purus non molestie rhoncus, mi libero lacinia nibh, non dignissim lectus neque quis lorem."    
    },
    {
        id : 2,
        title : "Cube",
        price : '15.99',
        img : './img/cube.jpeg',
        dscrpt : "Sed id consectetur ligula. Donec pellentesque, purus non molestie rhoncus, mi libero lacinia nibh, non dignissim lectus neque quis lorem."    

    },
    {
        id : 3,
        title : "Resident evil",
        price : '15.99',
        img : './img/resident.jpeg',
        dscrpt : "Sed id consectetur ligula. Donec pellentesque, purus non molestie rhoncus, mi libero lacinia nibh, non dignissim lectus neque quis lorem."    

    },
    {
        id : 4,
        title : "Władca pirścieni osiem wierz",
        price : '225.99',
        img : './img/wlad.jpeg',
        dscrpt : "Sed id consectetur ligula. Donec pellentesque, purus non molestie rhoncus, mi libero lacinia nibh, non dignissim lectus neque quis lorem."    

    }
];

var films = favFilms.map(movie =>{
    return React.createElement('div', {key: movie.id, className: 'box noDecoration'}, 
            React.createElement('h1', {className: 'title'}, movie.title),
            React.createElement('p', {}, 'Cena ' + movie.price + ' PLN'),
            React.createElement('img', {src: movie.img}),
            React.createElement('p', {className: 'toggle'}, movie.dscrpt),
            React.createElement('button', {className: 'show'}, 'Pokaz')
        );
});

// var data = 
//     {
//         header: 'Film',
//         source: './img/resident.jpeg',
//         alt: 'Bla bla bla',
//     };


// var element =  React.createElement(Movie, {data: data});

// ReactDOM.render(element, document.getElementById('react-app'));
