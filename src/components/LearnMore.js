import React from 'react';
import { NavLink } from 'react-router-dom';

const LearnMore = () => (
    <div class="container mb-4 ">
        <div class="row mt-5 pt-5">
            <div class="col-12 col-sm-7 bg-light rounded mb-2">
                <div class="container px-3">

                    <h2 class="font-weight-bold">How it Started?</h2>
                    <ul>
                        <li><h5>Overview of basketball leading into women playing in this tournament</h5></li>
                    </ul>
                    <p>Basketball started in 1891 and was invented by James Naismith. Less than a year later women were playing the game across the country. Not everyone was exited about women playing basketball. Many argued that women that participated in the game were unladylike and the game was too demanding for females.</p>
                    <p>Few colleges had intercollegiate teams and the game was struggling to get female teams in high schools. For those women who could play they were forced to compete under htr rules that limited their ability to run the entire court.</p>
                    <p>Since women could not compete in college ball, they also played for businesses. These games were to boost morale and to promote companies' products. But even with this in mind companies still would schedule beauty contests that would concurrently compete with tournaments.</p>
                    
                </div>
            </div>
            <div class="col-12 col-sm-5 text-center">
            <img className='img-fluid' src='#' />
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12 col-sm-7 bg-light rounded mb-2">
                <div class="container px-3">
                    <h2 class="font-weight-bold">The Tournament Itself</h2>
                    <ul>
                        <li><h5>How the did this come to be?</h5></li>
                        <li><h5>Were there more tournaments after?</h5></li>
                    </ul>
                    <p>Game came to be because of competition between schools and some claiming the “pocket” when they had the best record. To settle the score Harry Apostle Coach of the boys team sent a questionnaire to all the districts of the school.</p>
                    <p>The game was played by women but with some modified rules. These rules were in place ti make sure the girls wouldn’t get hurt. They played a modified version of the same game the boys played. 6 on 6 and they didnt have full mobility over the court.</p>
                    <p> Lots of hard fought games with close scores. Some of the games going as far as double overtime! The winners of the tournament were Mt. Vernon team. More tournaments did happen after this <NavLink to="/workcited">(reference the book)</NavLink></p>
                    
                </div>
            </div>
            <div class="col-12 col-sm-5 text-center">
            <img className='img-fluid' src='#' />
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12 col-sm-7 bg-light rounded mb-2">
                <div class="container px-3">
                    <h2 class="font-weight-bold">What Other Influences Had The Game Made</h2>
                    <ul>
                        <li><h5>What happened after the game and how the game changed since then</h5></li>
                    </ul>
                    <p>After the tournament the game was played by women all over the world. From parks and recreation leagues, to high school and colleges, womens games were held all over, most notably in the Olympics and in the professional Women's National Basketball Association</p>
                    <p>Women now play the same game as men and dont have any restrictions on their playstyle. A huge bump in more women playing the game was in 1972 when title IX was passed. This meant that for sports in colleges there would be equal opportunity to play, earn scholarships, and receive treatment.</p>
                    
                </div>
            </div>
            <div class="col-12 col-sm-5 text-center">
            <img className='img-fluid' src='#' />
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12 col-sm-7 bg-light rounded mb-2">
                <div class="container px-3">
                    <h2 class="font-weight-bold">Conclusion</h2>
                    <p>It was very hard and troublesome for women to play the game. No one wanted to play, not even women because of the belief that they weren't strong enough.</p>
                    <p>The game happened and it was an amazing show. Since then womens basketball is another example of being offer equal opportunities for women in society and having the ability to play the game they fought so hard for it was an amazing win.</p>
                    
                </div>
            </div>
            <div class="col-12 col-sm-5 text-center">
            <img className='img-fluid' src='#' />
            </div>
        </div>

    </div>
);

export default LearnMore;