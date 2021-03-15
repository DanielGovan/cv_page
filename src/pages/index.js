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
        intro="Veteran front end developer &amp; middleweight React engineer with a passion for UI/UX, looking for a JS based role in a collaborative, forward-thinking team."
      />

      <ColumnWrap>
        <SectionHeader>Front End Contractor since 2014</SectionHeader>
        <Place time="Feb 2021:" place="BDH">
          Networked Interactive Presentation Website, using a React/Redux front
          end and users kept in sync with an express / sockets.io backend, to
          fix and improve upon a MVP protoype after user testing.
        </Place>
        <Place time="Sept 2020 to March 2021:" place="Jollywise">
          Converting a React / Redux site to a new design, updating redux
          according to a new api &amp; with new components etc. CI with github
          &amp; Jenkins. Returned for a quick client christmas card quiz
          microsite, then again for a React microsite with several JS minigames.
        </Place>

        <Place time="Feb - Mar 2020:" place="EDD London">
          Came onboard to build new React UI components for an e-commerce site,
          also leading on upgrading from a rigid desktop site to being
          responsive and device agnostic.
        </Place>
        <Place time="Oct 2019 - Feb 2020:" place="Rehab Agency">
          4 months building 6 iterations of an educational microsite, each
          translated into 8 languages. Used React, JSON, hooks, css modules,
          SCORM &amp; Sketch. Mentored other devs to bring parallel projects up
          to speed.
        </Place>
        <Place time="May-Aug 2019:" place="YunoJuno">
          Using React, modular scss &amp; Storybook to implement a new
          registration &amp; onboarding system.
        </Place>
        <Place time="May and Sept-Oct 2018:" place="22 design">
          Projects included a banner for the front page of Talk Talk in HTML 5,
          prototyping a JS 360 spinner, updating an Opencart website and
          building a interactive quiz module.
        </Place>
        <Place time="May to Sept 2018:" place="KoffeeCup">
          Tackled a legacy Angular / Cordova app for onsite tablet and kiosk;
          reworking content, assets &amp; structure for an annual refresh with
          tight turnarounds.
        </Place>
        <Place
          time="Jul 2015 to Dec 2017: Front end Contractor"
          place="YunoJuno"
        >
          Rapid prototyping &amp; building of a constantly evolving UX &amp;
          Front end, taming sprawling legacy CSS &amp; maintaining an extensive
          design system using practical BEM, Stylus/SASS, Django templating
          &amp; later React. A highlight was a complete site redesign using only
          a CSS retheme.
        </Place>
        <Place
          time="Jul 2014 to Jun 2015: Creative Technologist (part time)"
          place="MetaBroadcast"
        >
          Joining a software engineering team to prototyping UIs for metadata
          API tools for the BBC. I also wrote on the company blog &amp; spoke at
          monthly meetups.
        </Place>
        <Place
          time="Feb 2014 to Jun 2015: Front end Contractor"
          place="VooDooBytes"
        >
          Built the front end to agreatplacetobe using Mixture, Liquid, Sass
          &amp; jQ for integration to Umbraco. Following projects included
          Cameraworks, Rex &amp; Mariano, Eris Industries, Heineken, DMB
          Represents, &amp; Blossom Hill.
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
            Interim front end lead then focused to CSS &amp; UX as the team
            upscaled from 6 devs to 20.
            <br /> I also organised knowledge-sharing workshops, was on the
            social media committee as tech voice, &amp; was in-house
            photographer for portraits &amp; events.
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
            Designed and built a Gatsby (React, GraphQL, Jamstack) photography
            website. Took courses in JavaScript Algorithms, Data Structures,
            React Native, Redux and Node.js etc.
          </Skill>
          <Skill title="Scripting">
            JavaScript: ES6 and beyond, React.js focus, dabbled in Node.js and
            React Native, previously worked with Angular 2, PHP &amp; a variety
            of back ends.
          </Skill>
          <Skill title="Markup">
            Semantic HTML with a mind to accessibility, SEO, scalability &amp;
            localisation.
          </Skill>
          <Skill title="Styling">
            CSS3 (Sass, LESS or Stylus), historically Semi-OO approach for
            modularity, nearer SMACSS-based architecture, now js-wrapped
            modules, styled components etc.
          </Skill>
          <Skill title="Responsive">
            The practical cross-disciplinary challenges of performant
            device-agnostic websites, as well as mobile &amp; tablet-specific
            solutions.
          </Skill>
          <Skill title="Design">
            Talking to creatives on their own terms, adding interstitial layouts
            &amp; interactions that creative comps don't cover, identifying UX
            breakdowns early.
          </Skill>
          <Skill title="Tooling">
            VS Code, Webpack, Yarn / NPM, Git, github, Jira, Trello, Jenkins,
            Netlify. Agile &amp; Waterfall but mostly a mix.
          </Skill>
          <Skill title="Education">
            BEng (Mechanical) at Warwick University
          </Skill>
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
