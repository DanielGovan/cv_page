import React from "react";
import HeaderArea from "../components/HeaderArea";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import Layout from "../components/layout";
import Place from "../components/Place";
import SectionHeader from "../components/SectionHeader";
import SEO from "../components/seo";
import Skill from "../components/Skill";
import ColumnWrap from "../components/ColumnWrap";
import FooterLink from "../components/FooterLink";
import NoColWrap from "../components/NoColWrap";
import MainWrap from "../components/MainWrap";

const IndexPage = () => (
  <Layout>
    <SEO title="CV" />

    <MainWrap>
      <HeaderArea
        header="Dan Govan"
        intro="Veteran front end developer with a passion for UI/UX, looking for a React / Typescript based role in a collaborative, forward-thinking team."
      />

      <ColumnWrap>
        <SectionHeader>Front End Contractor since 2014</SectionHeader>
        <Place time="Apr 2021 to Jul 2021:" place="Festicket">
          Working in a small team building out a succession of new components
          &amp; portals in a large mostly React / Redux codebase using
          TypeScript, Redux Toolkit, React Testing Library, React-i18next &amp;
          Styled System.
        </Place>
        <Place time="Feb 2021:" place="BDH">
          Networked Interactive Presentation app, with React/Redux front end
          &amp; an express / sockets.io backend, building upon a MVP after user
          testing.
        </Place>
        <Place time="Sept 2020 to Mar 2021:" place="Jollywise">
          Converting a React / Redux site to a new design, &amp; new api &amp;
          with new components. Returned to style a christmas quiz, then to solo
          dev a React app with JS minigames.
        </Place>
        <Place time="Feb - Mar 2020:" place="EDD London">
          Built React UI for an e-commerce site, then lead on upgrading from
          desktop-only to device agnostic.
        </Place>
        <Place time="Oct 2019 - Feb 2020:" place="Rehab Agency">
          Built 8 localisations of 6 iterations of an educational tool. Used
          React, hooks, CSS modules, JSON, SCORM &amp; Sketch. Advised on
          bringing parallel projects up to speed.
        </Place>
        <Place time="May-Aug 2019:" place="YunoJuno">
          Using React, modular scss &amp; Storybook to implement a new
          registration &amp; onboarding system.
        </Place>
        <Place time="May &amp; Sept-Oct 2018:" place="22 design">
          Projects included a banner for the front page of Talk Talk in HTML 5,
          prototyping a JS 360 spinner, updating an Opencart website &amp;
          building a interactive quiz module.
        </Place>
        <Place time="May to Sept 2018:" place="KoffeeCup">
          Tackled a legacy Angular / Cordova app for onsite tablet &amp; kiosk;
          reworking content, assets &amp; structure.
        </Place>
        <Place
          time="Jul 2015 to Dec 2017: Front end Contractor"
          place="YunoJuno"
        >
          Building an evolving UX &amp; Front End, taming sprawling legacy CSS
          &amp; maintaining an extensive design system using practical BEM,
          Stylus/SASS, Django templating &amp; later React. A highlight was a
          complete sitewide redesign using only a CSS retheme.
        </Place>
        <Place
          time="Jul 2014 to Jun 2015: Creative Technologist (part time)"
          place="MetaBroadcast"
        >
          Building UIs consuming a back end team's prototype metadata APIs.
        </Place>
        <Place
          time="Feb 2014 to Jun 2015: Front end Contractor"
          place="VooDooBytes"
        >
          Initally the front end to agreatplacetobe with Mixture, Liquid, Sass
          &amp; jQ for integration to Umbraco. Later projects included
          Cameraworks, Heineken, &amp; Blossom Hill.
        </Place>
        <Place time="Feb to Apr 2014" place="Maynard Malone">
          Quickly picking up Drupal, I used PHP, CSS &amp; jQ to implement new
          sections of the Organix site.
        </Place>
        <NoColWrap>
          <SectionHeader>Permanent roles: 2006 to 2014</SectionHeader>
          <Place
            time="2012-2014: Senior Interactive Web Developer"
            place="VML London"
          >
            Responsive builds from microsites to enterprise-level CQ builds, for
            Colgate, Premier Inn &amp; Premier League including a fluid mobile
            site that got 500k uniques a day &amp; 3mil in revenue a week.
            <br /> I also organised knowledge-sharing workshops, was on the
            social media committee, &amp; portraits &amp; events photographer.
          </Place>
        </NoColWrap>
        <Place time="2011-2012: Interface Developer" place="MRM Meteorite">
          Microsites for Vauxhall &amp; Nationwide, an Intel facebook campaign,
          iPad site for Regus, a Phonegapped iphone app for The Mall &amp;
          championed responsive &amp; parallax design.
        </Place>
        <Place
          time="2006-2011: Front end developer"
          place="MRM
            London"
        >
          I worked in HTML, CSS &amp; later jQ, reconciling the work of
          copywriters, designers &amp; back-end devs to produce sites,
          localisations &amp; HTML emails for clients like Intel, Vauxhall, Sky
          Movies, MSN &amp; MasterCard.
          <br />
          Away from the keyboard I led initiatives in improving communication
          between the tech &amp; creative departments, &amp; presented on
          company values &amp; best practice.
        </Place>
        <div class="Appendix-skills">
          <SectionHeader>Appendix</SectionHeader>
          <Skill title="2020 covid downtime">
            Designed &amp; built a Gatsby (React, GraphQL, Jamstack) photography
            website. Took courses in JavaScript Algorithms, Data Structures,
            React Native, Redux &amp; Node.js etc.
          </Skill>
          <Skill title="Scripting">
            JavaScript: ES6 &amp; beyond, React.js focus, dabbled in Node.js
            &amp; React Native, previously worked with Angular 2, PHP &amp; a
            variety of back ends.
          </Skill>
          <Skill title="Markup">
            Semantic HTML with a mind to accessibility, SEO, scalability &amp;
            localisation. The practical challenges of performant device-agnostic
            websites, as well as mobile &amp; tablet-specific solutions.
          </Skill>
          <Skill title="Styling">
            CSS3 (Sass, LESS, Stylus), BEM / SMACSS-based architecture, then
            js-wrapped modules, styled components etc.
          </Skill>
          {/* <Skill title="Responsive">
           
          </Skill> */}
          <Skill title="Design">
            Talking to creatives on their own terms, adding interstitial layouts
            &amp; interactions that creative comps don't cover, identifying UX
            breakdowns early.
          </Skill>
          <Skill title="Tooling">
            VS Code, Webpack, Yarn / NPM, Git, CI with github &amp; Jenkins,
            Jira, Trello, Netlify etc
          </Skill>
          {/* <Skill title="Education">
            BEng (Mechanical) at Warwick University
          </Skill> */}
        </div>

        <div class="Appendix-links">
          <SectionHeader>Contact</SectionHeader>
          <FooterLink
            print="www.linkedin.com/in/daniel-govan-9227511"
            href="https://www.linkedin.com/in/%F0%9F%91%8D-daniel-govan-9227511/"
            flag="noprint"
          >
            <FaLinkedin />
            LinkedIn
          </FooterLink>

          <FooterLink
            print="github.com/danielgovan/"
            href="https://github.com/danielgovan/"
          >
            <FaGithubAlt />
            Github
          </FooterLink>
          <FooterLink
            print="danielgovan@gmail.com"
            href="mailto:danielgovan@gmail.com"
          >
            <GrMail />
            Email
          </FooterLink>
        </div>
      </ColumnWrap>
    </MainWrap>
  </Layout>
);

export default IndexPage;
