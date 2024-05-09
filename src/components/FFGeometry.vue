<template>
  <div class="ff-container">
    <div class="frame frame-left">
      <h2>Form</h2>
      <svg
        width="640"
        height="640"
        viewBox="0 0 640 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="320"
          cy="320"
          r="319"
          stroke="#8711C1"
          stroke-width="2"
        />
        <circle
          cx="280"
          cy="320"
          r="279"
          stroke="#8711C1"
          stroke-width="2"
        />
        <circle
          cx="240"
          cy="320"
          r="239"
          stroke="#8711C1"
          stroke-width="2"
        />
        <circle
          cx="200"
          cy="316"
          r="199"
          stroke="#8711C1"
          stroke-width="2"
        />
        <circle
          cx="160"
          cy="320"
          r="159"
          stroke="#8711C1"
          stroke-width="2"
        />
        <circle
          cx="120"
          cy="320"
          r="119"
          fill="#2E0045"
          stroke="#8711C1"
          stroke-width="2"
        />
      </svg>
    </div>
    <div class="frame frame-center">
      <span>+</span>
    </div>
    <div class="frame frame-right">
      <h2>Function</h2>
      <svg
        width="640"
        height="640"
        viewBox="0 0 640 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="638"
          height="638"
          stroke="#2472FC"
          stroke-width="2"
        />
        <rect
          x="81"
          y="1"
          width="558"
          height="638"
          stroke="#2472FC"
          stroke-width="2"
        />
        <rect
          x="161"
          y="1"
          width="478"
          height="638"
          stroke="#2472FC"
          stroke-width="2"
        />
        <rect
          x="241"
          y="1"
          width="398"
          height="638"
          stroke="#2472FC"
          stroke-width="2"
        />
        <rect
          x="321"
          y="1"
          width="318"
          height="638"
          stroke="#2472FC"
          stroke-width="2"
        />
        <rect
          x="401"
          y="1"
          width="238"
          height="638"
          fill="#081B3D"
          stroke="#2472FC"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.ff-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .frame {
    position: relative;
    width: 640px;
    height: 640px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      position: absolute;
      z-index: 4;
    }
  }

  .frame-left {
    margin-right: -80px;
    z-index: 2;
  }

  .frame-center {
    width: 80px;
    z-index: 3;
  }

  .frame-right {
    margin-left: -80px;
    z-index: 1;
  }

  .frame-right::after {
    content: "I believe it’s crucial to make interfaces look great and work well. Simple as that";
    position: absolute;
    bottom: -64px;
    right: 0;
    color: #60606c;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
