import React from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './taylor_swift.jpeg'
import './TinderCards.css'

function TinderCards() {
                         /* 
  OLD WAY:
    const people = [] 
    people.push('sonny', 'qazi')

  REACT WAY:
  setPeople([...people, 'sonny', 'qazi])
  */
const [people, setPeople] = useState([
  {
    name: "Kamala Harris",
    url:
      "https://www.biography.com/.image/t_share/MTYxNDYxMDc1NDYyNTk2NTIw/kamala-harris-d-ca-speaks-to-reporters-after-announcing-her-candidacy-for-president-of-the-united-states-photo-by-al-dragogetty-images.jpg",
  },
  {
    name: "Donald Trump",
    url:
      "https://thehill.com/sites/default/files/styles/article_full/public/trumpdonald_080620getty_memo.jpg?itok=xI0H74KF",
  },
  {
    name: "Taylor Swift",
    url:
      "https://www.rollingstone.com/wp-content/uploads/2019/12/TaylorSwiftTimIngham.jpg",
  },
  {
    name: "Neymar",
    url:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article18136659.ece/ALTERNATES/s1200c/0_Neymar-1173947358.jpg",
  },
  {
    name: "Beyonce",
    url:
      "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/ORP/beyonce8-3-2018-20180803065033397.jpg",
  },
  {
    name: "Selena Gomez",
    url:
      "https://i.pinimg.com/originals/c7/5c/d6/c75cd6d1bdebbae6ae1f6d2637cc913b.jpg",
  },
  {
    name: "Dwayne Johnson",
    url:
      "https://image-cdn.essentiallysports.com/wp-content/uploads/20200606234145/Dwayne-Johnson-1-640x360-1.jpg",
  },
  {
    name: "Kim Kardashian",
    url:
      "https://media1.popsugar-assets.com/files/thumbor/mzUiLo-8Y10peZM55u_w6Loa-h4/612x451:2344x2183/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/007/n/1922398/d3c823415dd4769f7d9263.82518194_/i/Kim-Kardashian.jpg",
  },
  {
    name: "Eminem",
    url:
      "https://www.biography.com/.image/t_share/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg",
  },
]);
    return (
      <div>
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
    }

export default TinderCards
