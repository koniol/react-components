var MovieTitle = React.createClass({
    propTypes: {
        movietitle: React.PropTypes.object.isRequired,
    },

    render: function () {
        return React.createElement('h1', {}, this.props.movietitle.title);
    }

});


var MovieDescription = React.createClass({
    propTypes: {
        movieDesc: React.PropTypes.object.isRequired,
    },

    render: function () {
        return React.createElement('p', {}, this.props.movieDesc.dscrpt);
    }

});



var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function () {
        return React.createElement('div', {id: this.props.movie.id, className: 'film-box'});
    }

});


var movie = {
	id: 1,
	name:'asdasd'
}

var movietitle = {
	title: 'First film'
}

var movieDesc = {
	dscrpt: 'Bla bla bla'
}


var element = React.createElement(Movie, {movie:movie},
				React.createElement(MovieTitle, {movietitle:movietitle}, 'Title'),
				React.createElement(MovieDescription, {movieDesc:movieDesc}, 'Title')
	);


ReactDOM.render(element, document.getElementById('react-app'));

// var Movie = React.createClass({
//     propTypes: {
//         data: React.PropTypes.object.isRequired,
//     },

//     render: function () {
//         return React.createElement('div', {className: 'film'}, 
//                     React.createElement('h1', {}, 'Filmy'),
//                     React.createElement('img', {
//                     	src: this.props.data.source, 
//                     	alt: this.props.data.alt
//                     })
//                 );
//     }

// });


// var data1 = 
//     {
//         header: 'Film',
//         source: './img/resident.jpeg',
//         alt: 'Bla bla bla',
//     };


// var element = React.createElement(Movie, {key: 1, className: 'd', data: data1});



// ReactDOM.render(element, document.getElementById('react-app'));
