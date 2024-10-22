<template>
  <div class="fullscreen-container hero-section">
    <div class="hero-text">
      <h1>ĆAO! I’M DUŠAN</h1>
      <p>Front<span>-</span>End<span>_</span>Developer<span>.</span></p>
    </div>
    <div class="scroll-button">
      <svg
        @click="scrollToExplore()"
        width="24"
        height="60"
        viewBox="0 0 24 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="23"
          height="59"
          rx="11.5"
          stroke="white"
        />
        <circle
          cx="12"
          cy="12"
          r="7"
          fill="#D9D9D9"
        />
      </svg>

      <p>Scroll to explore</p>
    </div>
  </div>

  <div class="fullscreen-container FFGeometry-section">
    <FFGeometry />
  </div>

  <div class="fullscreen-container maxwidth-container projects-section">
    <p id="projects-header">These are my tech exploration projects, experimenting with different features and technologies</p>
    <Projects />
  </div>

  <div class="grey-background tech-section">
    <div class="maxwidth-container">
      <p>Technologies I've been using</p>
      <div class="technologies">
        <h3>Vue.js</h3>
        <h3>TypeScript</h3>
        <h3>Solidty</h3>
        <h3>Javascript</h3>
        <h3>Nuxt.js</h3>
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

  <div class="fullscreen-container skills-section">
    <div class="maxwidth-container">
      <p id="skills-intro">I’m always considering various factors during implementation:DOES IT MATCH THE DESIGN SOLUTION?Are there any edge cases that need to be covered? How can I ensure THAT code remains efficient as the system grows? Would the code easily understandable by other DEVELOPERS?</p>
      <Skills />
    </div>
  </div>

  <div class="maxwidth-container bio-section">
    <p>Currently working as a Solidtiy smart contract developer <a href="https://www.linkedin.com/company/moonstruck/">@Moonstruck</a>, on different blockchain projects<sup>(both, smart contracts and front)</sup>. My desire is to focus more on front-end development, with the knowledge I have to master more Vue, React...</p>
  </div>

  <div class="grey-background contact-section">
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
import { ref, onMounted } from "vue";

import FFGeometry from "@/components/FFGeometry.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";

const hello = ["Hello", "Hola", "你好", "こんにちは", "안녕하세요", "Здравствуйте", "Bonjour", "Hallo", "Ciao", "Olá", "CGiá", "Здраво", "Aloha", "Bok", "مرحبا", "नमस्ते", "สวัสดี", "Xin chào", "ਸਤ ਸ੍ਰੀ ਅਕਲ", "Ahoj", "Hej", "Sveiki", "Tere", "Kumusta", "Pozdravljeni", "Sawubona", "Kaixo"];

const greeting = ref("Ćao");
let index = 0;

const changeHello = () => {
  greeting.value = hello[index];
  index = (index + 1) % hello.length;
};

onMounted(() => {
  setInterval(changeHello, 1500);
});

const scrollToExplore = () => {
  document.querySelector(".FFGeometry-section").scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="scss">
.hero-section {
  background-image: url(../images/circle-bg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .hero-text {
    z-index: 0;
    text-align: right;

    p {
      span {
        color: #2472fc;
      }
    }
  }

  .scroll-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    position: absolute;
    bottom: 40px;
    cursor: pointer;

    svg {
      width: 20px;

      circle {
        animation: move 2s ease-in-out infinite;
      }
    }

    p {
      font-size: 14px;
      line-height: 14px;
      font-weight: 100;
      color: white;
    }
  }

  @keyframes move {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(36px);
    }
  }
}

.projects-section {
  min-height: 100vh;
  height: auto;
  align-items: flex-start;
  #projects-header {
    width: 50%;
  }
}

.tech-section {
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

.skills-section {
  height: auto;

  #skills-intro {
    margin-top: 100px;
    width: 75%;
  }
}

.bio-section {
  width: 75%;
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
    line-height: 100px;
    font-weight: 700;
  }
}

.contact-section {
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

@media screen and (max-width: 768px) {
  .hero-section {
    .scroll-button {
      -webkit-tap-highlight-color: transparent;
      gap: 4px;

      svg {
        width: 16px;
      }

      svg:hover {
        circle {
          transform: none !important;
        }
      }

      p {
        font-size: 12px;
      }
    }
  }

  .FFGeometry-section {
    height: 60vh;
    margin: 0;
    padding: 0;
  }

  .projects-section {
    margin-top: 0;
    padding: 0 12px;
    #projects-header {
      width: 100%;
    }
  }
  .tech-section {
    height: auto;
    padding: 27px 0;
  }

  .skills-section {
    height: auto;

    #skills-intro {
      margin: 0;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .bio-section {
    padding: 0;
  }

  .bio-section {
    width: 90%;

    p {
      font-size: 20px;
      line-height: 44px;
    }

    p:before {
      font-size: 48px;
      line-height: 60px;
      margin-right: 10px;
    }
  }

  .contact-section {
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
