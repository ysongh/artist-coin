import React from 'react';

import UserImage from '../../img/taylorSwift.jpeg';

const ArtistSideDrawer = () => {
    return(
        <div className="artistSideDrawer">
            <img src={UserImage} alt="Artist" className="artistSideDrawer__img"/>
            <div className="bio">
                <p>Taylor Swift</p>
                <p>Pop Music</p>
                <br></br>
                <p> 
                    Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. 
                    She is known for narrative songs about her personal life, which have received widespread media coverage. 
                    At age 14, she became the youngest artist signed by the Sony/ATV Music publishing house and, at 15, she signed with label Big Machine Records. 
                    Her 2006 eponymous debut album was the longest-charting album of the 2000s in the U.S. and its third single, 
                    "Our Song", made her the youngest person to single-handedly write and perform a number-one song on the Billboard Hot Country Songs chart. Swift's second album, Fearless, was released in 2008. Buoyed by the pop crossover success of the singles "Love Story" and "You Belong with Me", it became the US' best-selling album of 2009. The album won four Grammy Awards, and 
                    Swift became the youngest Album of the Year winner.
                </p>
            </div>
        </div>
    );
};

export default ArtistSideDrawer;