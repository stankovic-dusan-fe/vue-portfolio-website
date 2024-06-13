<template>
  <div class="skills">
    <div class="skill">
      <p>Clean code</p>
      <img
        src="../assets/images/skills-svg/clean-code.svg"
        alt="skill-clean-code"
      />
    </div>
    <div
      class="skill"
      id="skill-middle"
    >
      <p>Pixel perfect</p>
      <img
        src="../assets/images/skills-svg/pixel-perfect.svg"
        alt="skill-pixel-perfect"
      />
    </div>
    <div
      class="skill"
      id="skill-last"
    >
      <p>Responsive</p>
      <img
        src="../assets/images/skills-svg/responsive.svg"
        alt="skill-responsive"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-top: 80px;

  .skill {
    width: 100%;
    margin: 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 0;

    p {
      font-family: "Unbounded", sans-serif;
      color: white;
      font-size: 28px;
      line-height: 40px;
      font-weight: 900;
      white-space: nowrap;
    }
  }

  #skill-middle {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 1100px) {
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0;

    .skill {
      width: 50%;
    }

    #skill-middle {
      flex-direction: column;
    }
  }
}

@media screen and (max-width: 700px) {
  .skills {
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin-top: 40px;

    .skill {
      margin: 0 auto;
      width: 70%;
    }

    .skill p {
      font-size: 24px;
    }
  }
}
</style>
