<template>
  <div
    class="fullscreen-container"
    id="hero-section"
  >
    <img
      src="../../assets/images/circle-bg.svg"
      alt="circle-background"
    />
    <div class="hero-text">
      <h1>Ćao! I’m Dušan</h1>
      <p>Front<span>-</span>End<span>_</span>Developer<span>.</span></p>
    </div>
  </div>
  <div class="fullscreen-container">
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
        <h3>Rust<sup>(limited)</sup></h3>
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
    <p>Currently working <a href="https://www.linkedin.com/company/moonstruck/">@Moonstruck</a>, on different blockchain projects<sup>(both, smart contracts and UI)</sup> using a lot of TypeScript. My desire is to focus more on front-end development, with the knowledge I have to master more Vue, React...</p>
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
        <p><a href="#">Linkedin <</a></p>
        <p><a href="#">Github <</a></p>
        <p>
          <a href="#"><s>Twitter</s> X <</a>
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
  img {
    position: absolute;
    z-index: 0;
  }

  .hero-text {
    z-index: 1;
    font-size: 1.5rem;
    text-align: right;

    p {
      span {
        color: #2472fc;
      }
    }
  }
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
</style>
