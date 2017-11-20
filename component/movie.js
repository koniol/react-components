var MovieTitle = React.createClass({
    propTypes: {
        movietitle: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (React.createElement('h1', {}, this.props.movietitle));
    }

});

var MovieDescription = React.createClass({
    propTypes: {
        movieDesc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.createElement('p', {}, this.props.movieDesc);
    }

});

var MovieImage = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function(){
        return (React.createElement('li',{},
                    React.createElement('img', {id: this.props.movie.id , 
                                       className: 'film-box',
                                       src: this.props.movie.src})
                   
        ));
    }

});


var movies = [
    {
        id: 1,
        name:'asdasd',
        src: "./img/krp.jpeg",
        title: "Karmazynowy przypływ",
        dscrpt: "Nam convallis, felis sed euismod imperdiet, ante ex commodo lacus, vel sodales est felis sit amet elit. Donec mollis tortor elit, nec laoreet sapien volutpat sit amet. ",
    },
    {
            id: 2,
            name:'Władca',
            src: "./img/wlad.jpeg",
            title: "Władca pierścieni",
            dscrpt: "Integer vitae arcu odio. Nunc tortor massa, fringilla et consequat et, euismod non sem. In pulvinar elit pulvinar, pharetra eros eget, consectetur lacus. Morbi viverra feugiat turpis id porta. Mauris vel ante eu sem accumsan malesuada. Sed et eros at nulla lobortis varius. Mauris porta vulputate tellus, a sollicitu",
    },
    {
        id: 3,
        name:'Cube: triller',
        src: "./img/cube.jpeg",
        title: "Cube I",
        dscrpt: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tellus sem, pharetra quis pellentesque ege",
    },
];

var moviesRe = movies.map(movie =>{
    return React.createElement('div', {key: movie.id, className: 'movie'}, 
                 React.createElement(MovieTitle, {movietitle: movie.title}),
                 React.createElement(MovieImage, {movie: movie}),
                    React.createElement(MovieDescription, {movieDesc: movie.dscrpt}),
        );
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Moje filmy'),
    React.createElement('ul', {}, moviesRe)
);


ReactDOM.render(element, document.getElementById('react-app'));