import React from 'react';
// import { NavLink } from 'react-router-dom';

const Home = () => (
    <div className='container bg-light rounded mb-5'>
        <div className="row">
            <div class="col-12 col-sm-5 my-auto">
                <img class="rounded img-fluid" src={process.env.PUBLIC_URL + '/images/old-basketball-cort.jpg'} />
            </div>
            <div className="col-12 col-sm-7">
                <div className="row my-5 p-2 pt-4">
                    <div class="col-12">
                        <p style={{fontSize: '20px'}}>Women's Basketball has been a sport of interest since the beginning, Although it was not until 1926 that the first girls’ basketball tournament was held. The Turnamit was a wild ride & obviously has been something to remember. Before the tournament though women’s basketball was not even close to what it is today. It was more a player on the sidelines left out of the game. But here we are today and women’s basketball is well in a sense in the game!</p> 
                    </div>
                    <div className="col-12">
                        <p style={{fontSize: '20px'}}>Womens basketball has a long history of people fighting for the right to get on the court. Though lots of games were played it was not until 1926 that the first girls’ basketball tournament was held. The Turnamit was a wild ride & obviously has been something to remember. Before the tournament though women’s basketball was not even close to what it is today. Shamed and pushed away the women's game was more of a side show rather than athletes competing.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;