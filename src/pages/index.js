import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";
import "../styles.css";

const IndexPage = () => (
  <Layout>
    <SEO title="CV" />
    <header class="intro">
      <div class="lhs">
        <h1>Dan Govan</h1>
      </div>
      <div class="rhs">
        <p class="blurb">
          Front end developer since 2006 with a passion for UI/UX, looking for a
          hands-on role in the React ecosystem with a collaborative,
          forward-thinking team.
        </p>
      </div>
    </header>

    <section class="lhs">
      <h2>Front End Contractor since 2014</h2>
      <ul>
        <li>
          <h3>
            <span class="dateText">From Sept 2020:</span> Jollywise
          </h3>
          <p>
            Converting a React / Redux site to a new design, updating redux
            according to a new api &amp; adding new components and
            functionality. CI with github &amp; Jenkins. Returned for a quick
            client christmas card quiz microsite, and again for a React
            microsite with several simple JS minigames.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">Feb - Mar 2020:</span> EDD London
          </h3>
          <p>
            Working again with some of the VooDooBytes team I came on to build
            out the UI for an e-commerce site in React, first implementing new
            components, then leading on upgrading from a rigid desktop site to
            being responsive and device agnostic.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">Oct 2019 - Feb 2020:</span> Rehab Agency
          </h3>
          <p>
            4 months building 6 iterations of an educational microsite, each
            translated into 8 languages. Used React, JSON, hooks, css modules,
            SCORM &amp; Sketch. Mentored other devs to bring parallel projects
            up to speed.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">May-Aug 2019:</span> YunoJuno
          </h3>
          <p>
            Using React, modular scss &amp; Storybook to implement a new
            registration &amp; onboarding system.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">May and Sept-Oct 2018:</span> 22 design
          </h3>
          <p>
            Projects included a banner for the front page of Talk Talk in HTML
            5, prototyping a JS 360 spinner, updating an Opencart website and
            building a interactive quiz module.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">May to Sept 2018:</span> KoffeeCup
          </h3>
          <p>
            Tackled a legacy Angular / Cordova app for onsite tablet and kiosk;
            reworking content, assets &amp; structure for an annual refresh with
            tight turnarounds. Returned to lay the groundwork for a Red Bull
            project that unfortunately never left the ground.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">
              Jul 2015 to Dec 2017: Front end Contractor
            </span>
            YunoJuno
          </h3>
          <p>
            Rapid prototyping &amp; building of a constantly evolving UX &amp;
            Front end, taming sprawling legacy CSS &amp; maintaining an
            extensive design system using practical BEM, Stylus/SASS, Django
            templating &amp; later React. A highlight was a complete site
            redesign using only a CSS retheme.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">
              Jul 2014 to Jun 2015: Creative Technologist (part time)
            </span>
            MetaBroadcast
          </h3>
          <p>
            Joining a software engineering team this was my first
            JavaScript-centric role, prototyping UIs for metadata API tools for
            the BBC. I also contributed to the company blog &amp; spoke at
            monthly meetups.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">
              Feb 2014 to Jun 2015: Front end Contractor
            </span>
            VooDooBytes
          </h3>
          <p>
            Built the front end to agreatplacetobe using Mixture, Liquid, Sass
            &amp; jQ for integration to Umbraco. Following projects included
            Cameraworks, Rex &amp; Mariano, Eris Industries, Heineken, DMB
            Represents, &amp; Blossom Hill.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">Feb to Apr 2014</span> Maynard Malone
          </h3>
          <p>
            Quickly picking up Drupal, I used PHP, CSS &amp; jQ to implement new
            sections of the Organix site.
          </p>
        </li>
      </ul>
    </section>

    <section class="rhs">
      <h2>Permanent roles: 2006 to 2014</h2>
      <ul>
        <li>
          <h3>
            <span class="dateText">
              2012-2014: Senior Interactive Web Developer
            </span>
            VML London
          </h3>
          <p>
            Responsive builds from microsites to enterprise-level CQ builds, for
            Colgate, Premier Inn &amp; Premier League including a fluid mobile
            site that got 500k uniques a day &amp; 3mil in revenue a week.
            Interim front end lead then focused to CSS &amp; UX as the team
            upscaled from 6 devs to 20.
          </p>
          <p>
            I also organised knowledge-sharing workshops, was on the social
            media committee as tech voice, &amp; was in-house photographer for
            portraits &amp; events.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">2011-2012: Interface Developer</span> MRM
            Meteorite
          </h3>
          <p>
            Microsites for Vauxhall &amp; Nationwide, an Intel facebook
            campaign, iPad site for Regus, a Phonegapped iphone app for The Mall
            &amp; championed responsive &amp; parallax design.
          </p>
        </li>
        <li>
          <h3>
            <span class="dateText">2006-2011: Front end developer</span> MRM
            London
          </h3>
          <p>
            I worked in HTML, CSS &amp; later jQ, reconciling the work of
            copywriters, designers &amp; back-end devs to produce sites,
            localisations &amp; HTML emails for clients like Intel, Vauxhall,
            Sky Movies, MSN &amp; MasterCard.
          </p>
          <p>
            Away from the keyboard I led initiatives in improving communication
            between the tech &amp; creative departments, &amp; presented on
            company values &amp; best practice.
          </p>
        </li>
      </ul>
      <div class="Appendix-skills">
        <h2>Appendix</h2>
        <ul>
          <li>
            <strong>2020 covid downtime:</strong> Designed and built a Gatsby
            (React, GraphQL, Jamstack) photography website. Also took courses in
            "JavaScript Algorithms &amp; Data Structures", React Native, Redux,
            Node.js etc.
          </li>
          <li>
            <strong>Scripting:</strong> JavaScript: ES6 and beyond, React.js
            focus, dabbled in Node.js and React Native, previously worked with
            Angular 2, PHP &amp; a variety of back ends.
          </li>
          <li>
            <strong>Markup:</strong> Semantic HTML with a mind to accessibility,
            SEO, scalability &amp; localisation.
          </li>
          <li>
            <strong>Styling:</strong> CSS3 (Sass, LESS or Stylus), historically
            Semi-OO approach for modularity, nearer SMACSS-based architecture,
            now js-wrapped modules, styled components etc.
          </li>
          <li>
            <strong>Responsive:</strong> The practical cross-disciplinary
            challenges of performant device-agnostic websites, as well as mobile
            &amp; tablet-specific solutions.
          </li>
          <li>
            <strong>Design:</strong> Talking to creatives on their own terms,
            adding interstitial layouts &amp; interactions that creative comps
            don't cover, identifying UX breakdowns early.
          </li>
          <li>
            <strong>Tooling:</strong> VS Code, Webpack, Yarn / NPM, Git, github,
            Jira, Trello, Jenkins, Netlify. Agile &amp; Waterfall but mostly a
            mix.
          </li>
          <li>
            <strong>Education:</strong> BEng (Mechanical) at Warwick University
          </li>
        </ul>
      </div>

      <div class="Appendix-links">
        <h2>Contact</h2>
        <ul class="inline">
          <li
            class="noprint"
            data-print="www.linkedin.com/in/daniel-govan-9227511"
          >
            <strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/%F0%9F%91%8D-daniel-govan-9227511/"
              >
                LinkedIn
              </a>
            </strong>
          </li>
          <li data-print="github.com/danielgovan/">
            <strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/danielgovan/"
              >
                Github
              </a>
            </strong>
          </li>
          <li data-print="danielgovan@gmail.com">
            <strong>
              <a target="_blank" rel="noreferrer" href="danielgovan@gmail.com">
                Email
              </a>
            </strong>
          </li>
          <li class="noweb" data-print="07880 704509">
            <strong>
              <a target="_blank" rel="noreferrer" href="tel:07880 704509">
                Phone
              </a>
            </strong>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;