import {Component} from 'react';

class MovieCard extends Component {
    constructor(){
        super();
        this.state = {
            title : "One Piece",
            plot :"ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!",
            price : 0,
            rating : 8.9,
            stars : 0
        }

        // One way of bind globally 
        //this.addStars = this.addStars.bind(this);
    }

    // new function to click
    // addStars(){
    //     this.setState({
    //         rating : this.state.rating + 1
    //     })
    // }\
    addStars(){
        //this.state.stars += 0.5;
        //console.log("this", this) ;

        //1st way
        //this.setState({
        //    stars : this.state.stars + 0.5
        //})

        //2nd way
        this.setState((prevState)=>{
            if(this.state.stars >=5){
                return;
            }
            return{
                stars : prevState.stars + 0.5
            }
            //below is the call back function to test async
        }, () => console.log("stars", this.state.stars));
    }

    // rating is not in negative range
    decStars(){
        if(this.state.stars <=0){
            return;
        }
        this.setState({
            stars : this.state.stars - 0.5
            //below is the call back function to test async
        }, () => console.log("stars", this.state.stars));
    }

     render(){
        const {title, plot, price, rating, stars} = this.state;
        return(
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="Poster" src="https://images-cdn.ubuy.co.in/64020c032b88b367ca7410e3-anime-one-piece-poster-the-straw-hat.jpg"/>
                    </div>

                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>

                                    <img alt='decrease' src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className='str-btn' onClick={this.decStars.bind(this)}/>

                                    <img alt='star' src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className='stars'/>

                                    <img alt='increase' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className='str-btn' onClick={this.addStars.bind(this)}/>

                                    <span className='starCount'>{stars}</span>

                            </div>
                            <button className='fav-btn'>Favourite</button>
                            <button className='cart-btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
     }
}

export default MovieCard;