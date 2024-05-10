<template>
  <div class="skills">
    <div class="skill">
      <p>Clean code</p>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 361 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="46.333"
          y="45.5"
          width="269"
          height="269"
          fill="#0F0F0F"
          stroke="#8711C1"
        />
        <rect
          x="45.833"
          y="135"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="45.833"
          y="225"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="135.833"
          y="45"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="135.833"
          y="135"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="135.833"
          y="225"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="225.833"
          y="45"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="225.833"
          y="135"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="225.833"
          y="225"
          width="90"
          height="90"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="45.833"
          y="45"
          width="90"
          height="90"
          fill="#081B3D"
          stroke="#2472FC"
          stroke-width="3"
        />
      </svg>
    </div>
    <div class="skill">
      <p>Pixel perfect</p>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 361 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="46.5"
          y="46"
          width="268"
          height="268"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="76.3496"
          y="46.0127"
          width="240"
          height="240"
          transform="rotate(7.14159 76.3496 46.0127)"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="108.557"
          y="49.4707"
          width="210"
          height="210"
          transform="rotate(15.9155 108.557 49.4707)"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="139.484"
          y="58.8184"
          width="180"
          height="180"
          transform="rotate(26.0918 139.484 58.8184)"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="168.684"
          y="73.9756"
          width="150"
          height="150"
          transform="rotate(38.417 168.684 73.9756)"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="192.801"
          y="95.2949"
          width="120"
          height="120"
          transform="rotate(53.1354 192.801 95.2949)"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="138.5"
          y="138"
          width="84"
          height="84"
          fill="#081B3D"
          stroke="#2472FC"
          stroke-width="3"
        />
      </svg>
    </div>
    <div class="skill">
      <p>Responsive</p>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 361 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="45.166"
          y="45"
          width="270"
          height="270"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="45.166"
          y="104"
          width="210"
          height="211"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="45.166"
          y="165"
          width="150"
          height="150"
          fill="#0F0F0F"
          stroke="#8711C1"
          stroke-width="2"
        />
        <rect
          x="45.166"
          y="165"
          width="90"
          height="149"
          fill="#081B3D"
          stroke="#2472FC"
          stroke-width="3"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-top: 80px;

  .skill {
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
    }
  }
}
</style>
