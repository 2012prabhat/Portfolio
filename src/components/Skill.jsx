import React from 'react'
import htmlImg from "../images/html.png"
import firebaseImg from "../images/firebase.png"
import nodeImg from "../images/node.png"
import cssImg from "../images/css.png"
import reactImg from "../images/react.png"
import jsImg from "../images/js.png"
import mongoImg from "../images/mongo.png"

function Skill() {
  return (
    <section className='skill'>
      <div className='skillHead'>What I Do</div>
      <div className='about'>I am a Computer Science Engineer and I am currently working in Global Survey Solutions as a Web Developer.</div>
      <div className='skillContPar'>
        <div className='skillTagCont'>
          <div className='skillTag'>Skills</div>
        </div>
        <div className='skillsCont'>
        <div className='skillCard'>
            <img src={htmlImg} alt="" />
            <div>HTML</div>
          </div>
          <div className='skillCard'>
            <img src={cssImg} alt="" />
            <div>CSS</div>
          </div>
          <div className='skillCard'>
            <img src={jsImg} alt="" />
            <div>Javascript</div>
          </div>
          <div className='skillCard'>
            <img src={reactImg} alt="" />
            <div>React Js</div>
          </div>
          <div className='skillCard'>
            <img src={nodeImg} alt="" />
            <div>Node Js</div>
          </div>
          <div className='skillCard'>
            <img src={mongoImg} alt="" />
            <div>MongoDB</div>
          </div>
          <div className='skillCard'>
            <img src={firebaseImg} alt="" />
            <div>Firebase</div>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Skill