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
                    React.createElement(MovieTitle,{movietitle: this.props.movie}),
                    React.createElement('img', {id: this.props.movie.id , 
                                       className: 'film-box',
                                       src: this.props.movie.src}),
                    
                    React.createElement(MovieDescription,{movieDesc: this.props.movie})
        ));
    }

});


var movies =
    {
        id: 1,
        name:'asdasd',
        src: "./img/cube.jpeg",
        title: "BBOBOOB",
        dscrpt: "Lorem ipsun dotor bla bla bla",
   };

var movietitle = {
    title: 'First film'
}

var movieDesc = {
    dscrpt: 'Bla bla bla'
}


var element = React.createElement(Movie, {movie:movies});


ReactDOM.render(element, document.getElementById('react-app'));