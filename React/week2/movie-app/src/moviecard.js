import {Component} from 'react';

class MovieCard extends Component {
     render(){
        return(
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="Poster" src="https://images-cdn.ubuy.co.in/64020c032b88b367ca7410e3-anime-one-piece-poster-the-straw-hat.jpg"/>
                    </div>

                    <div className='right'>
                        <div className='title'>One Piece</div>
                        <div className='plot'>ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!</div>
                        <div className='price'>Rs. 0</div>

                        <div className='footer'>
                            <div className='rating'>9.2</div>
                            <div className='star-dis'>

                                    <img alt='decrease' src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className='str-btn'/>

                                    <img alt='star' src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className='stars'/>

                                    <img alt='increase' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className='str-btn'/>

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