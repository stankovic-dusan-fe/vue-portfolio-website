<template>
  <div
    class="fullscreen-container"
    id="hero-section"
  >
    <div class="hero-text">
      <h1>Ćao! I’m Dušan</h1>
      <p>Front<span>-</span>End<span>_</span>Developer<span>.</span></p>
    </div>
  </div>
  <div
    class="fullscreen-container"
    id="FFGeometry-section"
  >
    <FFGeometry />
  </div>

  <div
    class="maxwidth-container"
    id="projects-section"
  >
    <p id="projects-intro">These are my tech exploration projects, experimenting with different features and technologies</p>
    <Projects />
  </div>

  <div
    class="grey-background"
    id="tech-section"
  >
    <div class="maxwidth-container">
      <p>Technologies I've been using</p>
      <div class="technologies">
        <h3>Vue.js</h3>
        <h3>TypeScript</h3>
        <h3>Solidty</h3>
        <h3>Javascript</h3>
        <h3>React<sup>(limited)</sup></h3>
        <h3>HTML5</h3>
        <h3>CSS3</h3>
        <h3>Angular<sup>(elementary)</sup></h3>
        <h3>Tailwind</h3>
        <h3>Pinia</h3>
        <h3>Rest API</h3>
      </div>
    </div>
  </div>

  <div
    class="fullscreen-container"
    id="skills-section"
  >
    <div class="maxwidth-container">
      <p id="skills-intro">I’m always considering various factors during implementation:DOES IT MATCH THE DESIGN SOLUTION?Are there any edge cases that need to be covered? How can I ensure THAT code remains efficient as the system grows? Would the code easily understandable by other DEVELOPERS?</p>
      <Skills />
    </div>
  </div>

  <div
    class="maxwidth-container"
    id="bio-section"
  >
    <p>Currently working as a Solidtiy smart contract developer <a href="https://www.linkedin.com/company/moonstruck/">@Moonstruck</a>, on different blockchain projects<sup>(both, smart contracts and front)</sup>. My desire is to focus more on front-end development, with the knowledge I have to master more Vue, React...</p>
  </div>

  <div
    class="grey-background"
    id="contact-section"
  >
    <div class="maxwidth-container">
      <div class="contact-left">
        <h2>
          Let's create <br />
          <span>something great</span> <br />
          together
        </h2>
        <p><a href="mailto:stankovic_dusan@outlook.com">mailto:stankovic_dusan@outlook.com</a></p>
      </div>
      <div class="contact-right">
        <p><a href="https://www.linkedin.com/in/stankovic-dusan/">Linkedin <</a></p>
        <p><a href="https://github.com/stankovic-dusan-fe">Github <</a></p>
        <p>
          <a href="https://twitter.com/Dusan42088015"><s>Twitter</s> X <</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import FFGeometry from "@/components/FFGeometry.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
</script>

<style lang="scss">
.fullscreen-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.maxwidth-container {
  max-width: 1440px;
  margin: 80px auto;
}

.grey-background {
  background-color: #151515;
  padding: 108px 0;
}

#hero-section {
  background-image: url(../../assets/images/circle-bg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    position: absolute;
    z-index: -1;
  }

  .hero-text {
    z-index: 0;
    font-size: 1.5rem;
    text-align: right;
    p {
      span {
        color: #2472fc;
      }
    }
  }
}

#FFGeometry-section {
  display: none;
}

#projects-section {
  #projects-intro {
    width: 50%;
  }
}

#tech-section {
  p {
    text-align: right;
    align-self: flex-end;
    margin-bottom: 24px;
  }
  .technologies {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 24px;
    font-weight: 400;
  }
}

#skills-section {
  #skills-intro {
    width: 50%;
  }
}

#bio-section {
  width: 50%;
  padding: 160px 0;
  p {
    color: white;
    font-size: 28px;
    line-height: 56px;
    font-weight: 200;
    a {
      color: white;
    }
  }

  p:before {
    content: "/*";
    color: #8711c1;
    font-size: 120px;
    line-height: 120px;
    font-weight: 700;
  }
}

#contact-section {
  .maxwidth-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .contact-left {
    h2 {
      span {
        color: #2472fc;
      }
    }
  }

  .contact-right {
    text-align: right;
  }

  p {
    margin-top: 24px;
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 1550px) {
  .fullscreen-container,
  .maxwidth-container {
    padding: 0 50px;
  }

  #skills-section {
    #skills-intro {
      width: 100%;
    }
  }

  #bio-section {
    width: 80%;

    p:before {
      font-size: 80px;
    }
  }
}

@media screen and (max-width: 1250px) {
  #projects-section {
    #projects-intro {
      width: 100%;
    }
  }
}

@media screen and (max-width: 700px) {
  .fullscreen-container,
  .maxwidth-container {
    padding: 0 12px;
  }

  #projects-section {
    padding: 0 20px;
  }

  .grey-background {
    padding: 20px 0;
  }

  #skills-section {
    height: auto;

    #skills-intro {
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }

  #bio-section {
    padding: 0;
  }

  #bio-section {
    p {
      font-size: 20px;
      line-height: 44px;
    }

    p:before {
      line-height: 60px;
    }
  }

  #contact-section {
    padding: 12px;

    .maxwidth-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 24px;
    }
    .contact-right {
      width: 100%;
      text-align: left;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
