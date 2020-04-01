import React from "react"
import { Link } from "gatsby"

import ghost from '../images/ghost.png'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section class="parallax section2">
      <div class="text desc">
        <p>
          The Specter is somewhat of a modified and/or revamped Aegir/Ghost.
          <br />
          Its 4 primary weapon slots make it just as deadly, as well as having a
          U'tool pre-installed. This state-of-the-art vessel is used by all
          known members of the Black Guard.
        </p>
      </div>
    </section>

    <section class="section3">
        <div class="grid-image parallax">
        </div>
        <div class="grid-text">
          <p class="text">It is a great ship for roaming around. Its high firepower and armor can help in tough situations.</p>
        </div>
      </section>

        <section class="section3">
          <div class="grid-text">
            <p class="text">Its uncommonly flat design could only be realized by leaving out additional equipment slots. In compensation, there is a U'tool cloaking device preinstalled.</p>
          </div>

          <div class="grid-image parallax">
          </div>
        </section>
        <section class="section4 parallax">
        </section>

        <section class="section5"> 
          <p class="text">The Specter is considered as one of the most powerful ships</p>
        </section>

        <section class="section6">
          <div class="grid-text">
            <p class="text">The prototype of the Specter is the <a href="https://galaxyonfire.fandom.com/wiki/Ghost">Ghost</a>. </p>
          </div>

          <div class="image6">
            <img class="image6" src={ghost} style={{width:`100%`, borderRadius:`20px`}}></img>
          </div>
        </section>

         
        
        <section class="section7">
          <div class="image7">
          </div>
          <div class="grid-text">
            <p class="text">It is the best ship the Nivelians have made. </p>
          </div>

          
        </section>

        <section class="section8">
          <div class="grid-text">
            <p class="text">It has a similar design to the Aegir and the Ghost.</p>
          </div>
          <div class="image8">
          </div>
        </section>

        <section style={{marginBottom:`40px`}}>
          <div class='text'>
            <h3>Discover more</h3>
            <div style={{margin: `0 auto`}}>
            <ul style={{textAlign:`center`}}>
              <li><a class='button' href='https://play.google.com/store/apps/details?id=net.fishlabs.gof2hdallandroid2012&hl=en_US' target='_blank' rel='noopener noreferrer'>GOF 2 on Android</a></li>
              <li><a class='button' href='https://apps.apple.com/gb/app/galaxy-on-fire-2-hd/id465072566' target='_blank' rel='noopener noreferrer'>GOF 2 on iOS</a></li>
              <li><a class='button' href='https://galaxyonfire.fandom.com/wiki/Specter' target='_blank' rel='noopener noreferrer'>More on Wiki</a></li>
            </ul>
            </div>            
          </div>
          <div style={{clear: `both`}}></div>
        </section>


  </Layout>
)

export default IndexPage
