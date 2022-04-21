import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div className="home">
      <div className="home__grid">
          <div className="home__slider">
            <div className="slider">
              <ul>
                <li className="index s1">
                  <img alt="Karta Citi z bonusem" src="https://a.allegroimg.com/original/121115/667f45aa4936810198d418ee6422" ></img>
                </li>
                <li className="index s2">
                  <img alt="Skuteczna ochrona" src="https://a.allegroimg.com/original/0a740e/d366771342889cbb10d3bb51207b"></img>
                </li>
                <li className="index s3">
                  <img alt="Cegiełka dla Ukrainy" src="https://a.allegroimg.com/original/1292d7/7c48e7a24224b0844faa3633638f"></img>
                </li>
                <li className="index s4">
                  <img alt="Tydzień dla Ziemi" src="https://a.allegroimg.com/original/12c982/6df0a78c4ccd9e401e2cb2a24ee4"></img>
                </li>
                <li className="index s5">
                <img alt="Thermomix w super cenie" src="https://a.allegroimg.com/original/122c7d/e7e5510c43ca92125a6b622b3425"></img>
                </li>
              </ul>
            </div>
            <div className="buttons">
              <div className="but s1"><p >Karta City z bonusem</p></div>
              <div className="but s2"><p >Skuteczna ochrona</p></div>
              <div className="but s3"><p >Cegiełka dla Ukrainy</p></div>
              <div className="but s4"><p >Tydzień dla Ziemi</p></div>
              <div className="but s5"><p >Termomix w super cenie</p></div>
            </div>
          </div>
          <div className="home__premium">

          </div>
          <div className="home__popular">
            <p><b>Warto zobaczyć</b></p>
            <div className="options">
              <div className="opt">
                <img src="https://a.allegroimg.com/original/12a594/eae6120245b1bfa539c62359fd07" alt="" />
                <p>Як створити обліковий запис i купувати на Allegro?</p>
              </div>
              <div className="opt">
                <img src="https://a.allegroimg.com/original/127691/6eace0094a379a210653e8fde78e" alt="" />
                <p>Darmowe dostawy</p>
              </div>
              <div className="opt">
                <img src="https://a.allegroimg.com/original/12e66a/ab03260c433182c1165b734c4a1d" alt="" />
                <p>Wiosną wybór kwitnie</p>
              </div>
              <div className="opt">
                <img src="https://a.allegroimg.com/original/12cafd/df0beed34b2ab669fbc994b1247e" alt="" />
                <p>Działaj naturalnie</p>
              </div>
            </div>
          </div>
          
          <div className="home__foryou">

          </div>
      </div>
    </div>
    </>
  )
}

export default Home