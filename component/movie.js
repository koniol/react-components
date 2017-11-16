var MovieTitle = React.createClass({
    propTypes: {
        movietitle: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (React.createElement('h1', {}, this.props.movietitle.title));
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

    render: function(){
        return (React.createElement('li',{},
                    React.createElement('img', {id: this.props.movie.id , 
                                       className: 'film-box',
                                       src: this.props.movie.src})
        ));
    }

});


var movies =
    {
        id: 1,
        name:'asdasd',
        src: "./img/cube.jpeg",
   };

var movietitle = {
    title: 'First film'
}

var movieDesc = {
    dscrpt: 'Bla bla bla'
}


var element = React.createElement('div', {},
                React.createElement(MovieTitle,{movietitle:movietitle}),
                React.createElement(Movie, {movie:movies}),
                React.createElement(MovieDescription, {movieDesc:movieDesc})
              );


ReactDOM.render(element, document.getElementById('react-app'));