import React, { useState, useEffect } from 'react';
import '../App.css';

const API_URL = 'https://api.ncmodernist.org/architects';

const Architect = (props) => {
  const [architect, setArchitect] = useState([]);

  useEffect(() => {
    const id = props.match.params.id
    console.log(id)
    fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(resJson => setArchitect(resJson)) 
    .catch(err => console.log(err))
  }, [])

  
  return (
    <div>
        { props.match.params.id === 'Ellen Cassilly' 
            ? (<div className="cassilly-info">
                <p>
                    <img src="https://www.ncmodernist.org/cassil9.jpg" alt="NCModernist" width="109" height="143" border="0" />
                    <img src="https://www.ncmodernist.org/cassil15.jpg" alt="NCModernist" width="115" height="143" border="0" />
                    <img src="https://www.ncmodernist.org/cassil22.jpg" alt="NCModernist" width="132" height="142" border="0" />
                    <img src="https://www.ncmodernist.org/cassillyphoto.jpg" alt="NCModernist" width="101" height="142" />
                    <img height="142" src="https://www.ncmodernist.org/cassilly-photo-6.jpg" alt="NCModernist" width="142" />
                </p>
                <h3 class="center">ELLEN CROZAT CASSILLY, FAIA (1960-)</h3>
                <p>Ellen Cassilly holds a 1983 Bachelor of Environmental Design degree from Texas A &amp; M University and a 1998 Master of Architecture degree from the University of Pennsylvania. She worked in Paris with Christian DePortzamarc, winner of the Pritzker Prize, from 1988-1992. After a six-week internship with Arata Isotaki in Tokyo, she worked for <a href="https://www.ncmodernist.org/lcdavis.htm">Lucy Carol Davis</a> and <a href="https://www.ncmodernist.org/harmon.htm">Frank Harmon</a>. At the latter, she did projects such as the North Carolina Museum of Art Amphitheater.</p>
                <p>Cassilly started her own firm, <a href="https://www.ellencassillyarchitect.com/">Ellen Cassilly Architect</a>, in 1999. She and her husband Frank Konhaus are extensively involved in the Durham arts scene, especially known for the spectacular <a href="https://www.indyweek.com/gyrobase/Content?oid=oid:156912">Rousse Project</a>. Each summer, she teaches the Design/Build Studio at the NCSU College of Design. She was featured in Mike Welton's book, <a href="https://www.amazon.com/Drawing-Practice-Architects-Meaning-Freehand/dp/0415725097">Drawing from Practice: Architects and the Meaning of Freehand</a>.</p>
                <p>
                    <img alt="NCModernist" src="https://www.ncmodernist.org/cassilly-cass-night.jpg" />
                </p>
                <p>Cassilly is most widely known for designing their personal residence, Cassilhaus, featuring unique living, creative, and gallery space for their very own artist-in-residence.</p>
                <p class="auto-style20">
                    <a href="https://vimeo.com/207942586">
                        <img src="https://www.ncmodernist.org/hd.vimeo.png" alt="NCModernist" width="80" height="15" class="auto-style24" />
                    </a> 2017 NCModernist Interview
                </p>
                <p>
                    <a href="https://www.ncmodernist.org/2013OxAmMagicCassilhaus.mp4">
                        <img src="https://www.ncmodernist.org/videos19.gif" alt="NCModernist" width="80" height="15" border="0" class="auto-style13" />
                    </a> 2013 <a href="https://www.oxfordamerican.org/articles/2013/jul/15/solost-magic-cassilhaus/">Oxford American interview</a>
                </p>
            </div> )
            : null 
        }
        { props.match.params.id === 'Katie Dyer' 
            ? (<div className="cassilly-info">
                <p>
                    <img height="360" src="https://www.ncmodernist.org/dyer-photo.JPG" width="240" alt="dyer"/>
                </p>
                <h3 class="center">KATIE IRONS DYER (1984-)</h3>
                <p>Dyer grew up in Greensboro NC and went to NW Guilford HS, graduating in 2002. She graduated from the Savannah College of Art and Design in 2007, interning with Stephen Jobe and Christan Sottile. She worked for <a href="https://www.ncmodernist.org/szostak.htm">Phil Szostak</a> (2007-2012) and New City Design (2012-2013) before launching her own firm in 2013.</p>
            </div> )
            : null
        }
        <div className="houses">
            { architect && architect.length 
                ? architect.map((house, i) => {
                    const images = formatImages(house.image);
                    return (
                    <div className="house-card" key={i}>
                        { images.map((image, i) => (
                            <img 
                                key={i} 
                                className="house-image"
                                src={image} 
                                alt={house.name}
                            ></img>
                        ))}
                        <h3>{house.name ? house.name : ''}</h3>
                        <address>{house.address}</address>
                        <p>{house.description}</p>
                    </div>
                    )
                })
                : (<h3>No data found for {props.match.params.id}</h3>)
            }
        </div>
    </div>
  );
}

export default Architect;


const formatImages = (imageString) => {
    let imageArray = imageString.split(',');
    return imageArray;
}