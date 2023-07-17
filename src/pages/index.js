import React from "react";
import HeaderArea from "../components/HeaderArea";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";

import Layout from "../components/layout";
import Place from "../components/Place";
import SectionHeader from "../components/SectionHeader";
import SEO from "../components/seo";
import Skill from "../components/Skill";
import FooterLink from "../components/FooterLink";
import MainWrap from "../components/MainWrap";
import Para from "../components/Para";
import ColumnWrap from "../components/ColumnWrap";
import NoColWrap from "../components/NoColWrap";

// const StyledColumnWrap = styled.div`
//   @media screen and (min-width: 1000px) {
//     column-count: 2;
//     column-width: 200px;
//   }
//   @media print {
//     column-count: 2;
//     column-width: 200px;
//   }
// `;

// const ColumnWrap = ({ children }) => {
//   return <StyledColumnWrap>{children}</StyledColumnWrap>;
// };

// const StyledNoColWrap = styled.div`
//   --webkit-column-break-inside: avoid;
//   break-inside: avoid;
// `;

// const NoColWrap = ({ children }) => {
//   return <StyledNoColWrap>{children}</StyledNoColWrap>;
// };

const StyledSection = styled.div`
  @media screen and (min-width: 1000px) {
  }
  @media print {
    /* margin-top: 1rem; */
  }
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

const IndexPage = () => (
  <Layout>
    <SEO title="CV" />

    <MainWrap>
      <HeaderArea
        header="Dan Govan"
        intro="Veteran senior front end developer with a passion for UI/UX, looking for a React / Typescript role in a collaborative, forward-thinking team."
      />
      <Section>
        <SectionHeader>Elevator pitch</SectionHeader>
        <Para>
          As an agency-side web developer from 2006, I had the opportunity to
          work on a range of brochure-wear sites for big names; always building
          with a mind to fidelity, accessibility and internationalisation. As
          the front end was always the linchpin between back end, design and
          copy I was able to collaborate with and learn from professionals from
          a range of disciplines, something I still enjoy today.
        </Para>
        <Para>
          In 2014 I transitioned into contracting, expanding my scope to work
          with smaller agencies as well as in-house teams. The agency pace
          proved invaluable as I became well versed in quickly picking up new
          frameworks, design patterns and legacy codebases to work on sites and
          apps of all sizes from SPAs to complex product platforms. As I pushed
          my skill set forward my work became increasingly JavaScript, with the
          last five years being focused on React, and the last two working in
          Typescript.
        </Para>
        <Para>
          Now I aspire to join a curious, diverse, collaborative and
          forward-looking team, supported by modern testing and devops, in
          building a high quality, impactful product.
        </Para>
      </Section>
      <SectionHeader>Experience</SectionHeader>
      <ColumnWrap>
        {/* <SectionHeader>Front End Contractor 2014 - 2023</SectionHeader> */}
        <Place time="Jul 2022 - Apr 2023" place="EDD London">
          <Para>
            An agency role on a series of projects included two booking
            platforms and one CMSd showcase site for the agency itself (which I
            also did the photography for). All of them involved prototyping
            components in Typescript and React and Storybook before integrating
            them into a dynamic SSR Next.JS app.
          </Para>
          <Para>
            Built a UI library extending Chakra UI with custom components to
            take advantage of their theming system and laying the groundwork for
            a white label offering.
          </Para>
          <Para>
            Forms with React Hook Forms, mocking with Faker &amp; MSW, state and
            data fetching with React Query, animation with framer motion, and
            for the CMS content we consumed a custom Headless CMS. Also lead two
            developers on building out React components.
          </Para>
        </Place>
        {/* <Place time="Nov 2022 to Jan 2023" place="Side project">
          <Para>
            Designed and built a photography showcase site in Typescript with
            Gatsby/GraphQL autodeploying from Git via serverless Netlify,
            running polls and forms with Formik and Firebase.
          </Para>
        </Place> */}
        <Place time="Apr 2021 - Jul 2022" place="Festicket">
          {
            // What was Festicket offering?
            // we swapped between teams
          }
          <Para>
            An in-house role on the product side of an event ticket marketplace
            platform, building interfaces to increase transparency to partners
            on fees and sales performance. Working in small teams we built out a
            succession of portals and other components in a large mostly React /
            Redux codebase.
          </Para>
          <Para>
            Learned TypeScript and Redux Toolkit, carried out a lot of testing
            with Jest / React Testing Library. Integrated with React-i18next
            etc. Also touched on some PHP templating with Twig, while avoiding
            legacy PHPTal.
          </Para>
        </Place>
        {/* <Place time="Feb 2021" place="BDH">
          Networked Interactive Presentation app, with React / Redux &amp;
          express / sockets.io, making improvements to a MVP after a round of
          user testing.
        </Place> */}
        <Place time="Sept 2020 - Mar 2021" place="Jollywise">
          <Para>
            Agency role, firstly working on updating a React / Redux
            content-driven site for a TV show to a new design, api and
            components.
          </Para>
          <Para>
            Later projects were smaller SPAs including a company Christmas quiz,
            and a set of React / JS dragon-themed mini games.
          </Para>
        </Place>
        <Place time="Feb - Mar 2020 / Jun 2020" place="EDD London">
          <Para>
            Agency role on a camera rental e-commerce site; brought onto an
            existing project to replace an ill team member, first built some
            missing React UI components then lead on overhauling the layout from
            desktop-specific to device-agnostic.
          </Para>
        </Place>
        <Place time="Oct 2019 - Feb 2020  / Jun 2020" place="Rehab Agency">
          <Para>
            Working on a SCORM-based anti-phishing educational tool, I built 8
            localisations of 6 iterations, consuming a great deal of copy in
            JSON form. Ended up leading the field and advising parallel projects
            to bring them up to speed. Used React, hooks, CSS modules, JSON,
            SCORM &amp; Sketch.
          </Para>
        </Place>
        <Place time="May - Aug 2019" place="YunoJuno">
          <Para>
            Returning to this in-house product team for my first React-based
            role, we used it with modular scss &amp; Storybook to prototype and
            implement a new registration &amp; onboarding system to their
            freelancer platform.
          </Para>
        </Place>
        <Place time="May - Oct 2018" place="22 design">
          <Para>
            Boutique agency role where projects included an HTML5 banner for the
            front page of Talk Talk, prototyping a JS 360 spinner, simple
            updates to an Opencart ecommerce site &amp; building a interactive
            quiz.
          </Para>
        </Place>
        <Place time="May - Sept 2018" place="KoffeeCup">
          <Para>
            An oil company conference needed their kiosk/tablet app updated, so
            the challenge was getting up to speed on a legacy Angular / Cordova
            app, then updating it with a new year of content, assets &amp;
            structure for an on-site tablet &amp; kiosk deployment.
          </Para>
        </Place>
        <Place time="Jul 2015 - Dec 2017" place="YunoJuno">
          <Para>
            A long running in-house role working on a platform to connect the
            best freelancers with forward thinking companies. On the product
            team building out an evolving UX &amp; Front End for the platform,
            taming sprawling legacy CSS &amp; built in the startup years,
            maintaining an extensive design system using practical BEM,
            Stylus/SASS and Django templating &amp; later moving to React.
          </Para>
          <Para>
            A highlight was carrying out a complete platform-wide redesign using
            a single CSS retheme for a seamless transition, and leaving the old
            site intact for any rollbacks.
          </Para>
        </Place>
        <Place time="Jul 2014 - Jun 2015" place="MetaBroadcast">
          <Para>
            An in-house Creative Technologist role acting as a front end
            consultant to a entirely back-end engineering team, brought on for
            rapid prototyping, creating UIs to test and consume their extensive
            experimental TV-based metadata APIs for the BBC.
          </Para>
          <Para>
            My first JavaScript centric role, I was also able to contribute to
            the company blog and speak at monthly meetups.
          </Para>
        </Place>
        <Place time="Feb 2014 - Jun 2015" place="VooDooBytes">
          <Para>
            Long-running team up with a small agency on a series of
            content-based and ecommerce sites including agreatplacetobe,
            Cameraworks, Heineken, Rex &amp; Mariano, DMB represents &amp;
            Blossom Hill, using Mixture, Liquid, Sass &amp; jQ for integration
            to Umbraco.
          </Para>
        </Place>
        <Place time="Feb - Apr 2014" place="Maynard Malone">
          <Para>
            An agency role on a content-based Organix site, where I was quickly
            able to pick up Drupal and used PHP, CSS &amp; jQ to implement new
            sections of the site.
          </Para>
        </Place>
        <NoColWrap>
          {/* <SectionHeader>Permanent roles: 2006 to 2014</SectionHeader> */}
          <Place time="2012 - 2014: " place="VML London">
            <Para>
              Senior Interactive Web Developer specialising in responsive
              builds, from microsites to enterprise-level CQ builds, for
              Colgate, Premier Inn &amp; Premier League.
            </Para>
            <Para>
              My longest project was 6-months building a fluid mobile site that
              receives 500k uniques a day and 3mil in revenue a week. As the
              team increased from 6 devs to 20 I started out as Front-end lead
              then specialised to CSS and UX Lead.
            </Para>
            <Para>
              I also organised knowledge-sharing workshops, was on the social
              media committee as tech voice, &amp; was in-house photographer for
              portraits & events.
            </Para>
          </Place>
        </NoColWrap>
        <Place time="2011 - 2012: " place="MRM Meteorite">
          <Para>
            Interface Developer building microsites for Vauxhall &amp;
            Nationwide, an Intel facebook campaign, iPad site for Regus, a
            PhoneGap'd iphone app for The Mall &amp; championed responsive &amp;
            parallax design.
          </Para>
        </Place>
        <Place
          time="2006 - 2011: "
          place="MRM
            London"
        >
          <Para>
            Starting as an Associate Front End Developer before promotion, I
            worked in HTML, CSS &amp; later jQ, reconciling the work of
            copywriters, designers &amp; back-end devs to produce sites,
            localisations &amp; HTML emails for clients like Intel, Vauxhall,
            Sky Movies, MSN &amp; MasterCard.
          </Para>
          <Para>
            Away from the keyboard I led initiatives in improving communication
            between the tech &amp; creative departments, and presented on
            company values &amp; best practice.
          </Para>
        </Place>
      </ColumnWrap>
      <SectionHeader>Skills</SectionHeader>
      <div class="Appendix-skills">
        <ColumnWrap>
          {
            // Add a bit about how I learned React myself
          }

          <Skill title="React">
            I picked up React between contracts in 2018 and it's been my focus
            ever since. Recent work has included forms with React Hook Form or
            Formik, mocking with faker and msw, state management with
            react-query or redux toolkit, animation with framer-motion, SSR with
            Next.js or gatsby. Previously used Redux and Redux Toolkit for data
            fetching and state management.
          </Skill>

          <Skill title="Scripting">
            I've been working with JS since 2014 and my last 2 years have had a
            Typescript focus. Mostly front end with React but I'm used to
            chipping in with bits of Node.js. I've also dabbled with React
            Native, express, sockets.io etc, and previously with Angular 2, PHP
            &amp; a variety of back ends.
          </Skill>

          <Skill title="Markup">
            Semantic HTML with a mind to accessibility, SEO, scalability &amp;
            localisation. The practical challenges of keeping apps and websites
            performant and device-agnostic.
          </Skill>

          <Skill title="Styling">
            My first job in 2006 was reducing the size of the CSS file for a
            well trafficked Intel site so it's influenced my background. CSS3
            (Sass, LESS, Stylus), BEM / SMACSS-based architecture, then
            js-wrapped modules, styled components, styled system, styled jsx,
            JSS, TSS etc.
          </Skill>

          <Skill title="Design">
            Talking to creatives on their own terms, translating and pulling
            assets out of creative comps in Photoshop or Figma, adding
            interstitial layouts &amp; interactions that those don't cover,
            identifying UX breakdowns early.
          </Skill>

          <Skill title="Tooling">
            {
              // CI
            }
            VS Code, Docker, Webpack, Figma, Fibery, Azure, Chromatic, Yarn /
            NPM, Git, CI with GitHub &amp; Jenkins, Travis and Semaphore, Jira,
            Trello, Netlify etc
          </Skill>

          {/* <Skill title="Side projects">
          Designed &amp; built a Gatsby (React, GraphQL, Jamstack) photography
          website, later rebuild in Typescript & Chakra. Took courses in
          JavaScript Algorithms, Data Structures, React Native, Redux &amp;
          Node.js.
        </Skill> */}

          {/* <Skill title="Education">
            BEng (Mechanical) at Warwick University
          </Skill> */}
        </ColumnWrap>
      </div>
      <Section>
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
      </Section>
    </MainWrap>
  </Layout>
);

export default IndexPage;
