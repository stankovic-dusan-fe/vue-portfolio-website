<template>
  <div
    class="ff-container"
    @mousemove="onMouseMove"
  >
    <div class="frame frame-left">
      <div class="svg-container">
        <svg
          id="animatedSvg"
          :width="svgWidth"
          :height="svgHeight"
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            v-for="(circle, index) in circles"
            :key="index"
            :cx="circle.cx"
            :cy="circle.cy"
            :r="circle.r"
            :stroke="circle.stroke"
            :stroke-width="circle.strokeWidth"
            :fill="circle.fill"
          />
        </svg>
      </div>
      <h2>Form</h2>
    </div>
    <div class="frame frame-center">+</div>
    <div class="frame frame-right">
      <div class="svg-container">
        <svg
          ref="animatedSvg"
          width="640"
          height="640"
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            v-for="(rect, index) in rects"
            :key="index"
            :id="'rect' + (index + 1)"
            :x="rect.x"
            :y="rect.y"
            :width="rect.width"
            :height="rect.height"
            :fill="rect.fill || 'none'"
            :stroke="rect.stroke"
            :stroke-width="rect.strokeWidth"
          />
        </svg>
      </div>
      <h2>Function</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgWidth: 640,
      svgHeight: 640,

      circles: [
        { cx: 320, cy: 320, r: 319, stroke: "#8711C1", strokeWidth: 2, fill: "none" },
        { cx: 280, cy: 320, r: 279, stroke: "#8711C1", strokeWidth: 2, fill: "none" },
        { cx: 240, cy: 320, r: 239, stroke: "#8711C1", strokeWidth: 2, fill: "none" },
        { cx: 200, cy: 316, r: 199, stroke: "#8711C1", strokeWidth: 2, fill: "none" },
        { cx: 160, cy: 320, r: 159, stroke: "#8711C1", strokeWidth: 2, fill: "none" },
        { cx: 120, cy: 320, r: 119, stroke: "#8711C1", strokeWidth: 2, fill: "#2E0045" },
      ],

      rects: [
        { x: 401, y: 1, width: 238, height: 638, fill: "#081B3D", stroke: "#2472FC", strokeWidth: 2 },
        { x: 321, y: 1, width: 318, height: 638, stroke: "#2472FC", strokeWidth: 2 },
        { x: 241, y: 1, width: 398, height: 638, stroke: "#2472FC", strokeWidth: 2 },
        { x: 161, y: 1, width: 478, height: 638, stroke: "#2472FC", strokeWidth: 2 },
        { x: 81, y: 1, width: 558, height: 638, stroke: "#2472FC", strokeWidth: 2 },
        { x: 1, y: 1, width: 638, height: 638, stroke: "#2472FC", strokeWidth: 2 },
      ],
    };
  },

  methods: {
    onMouseMove(event) {
      if (window.innerWidth > 1024) {
        this.onMouseMoveCircles(event);
        this.onMouseMoveRectangle(event);
      }
    },

    onMouseMoveCircles(event) {
      this.shouldAnimate = false;

      const svg = this.$el.querySelector("svg");
      const boundingRect = svg.getBoundingClientRect();
      const mouseX = event.clientX - boundingRect.left;
      const mouseY = event.clientY - boundingRect.top;

      this.circles.forEach((circle, index) => {
        if (index === 0) return;

        const parentCircle = this.circles[index - 1];
        const radius = circle.r;
        const parentRadius = parentCircle.r;

        const maxOffset = parentRadius - radius;

        let dx = mouseX - parentCircle.cx;
        let dy = mouseY - parentCircle.cy;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > maxOffset) {
          dx = (dx / distance) * maxOffset;
          dy = (dy / distance) * maxOffset;
        }

        circle.cx = parentCircle.cx + dx;
        circle.cy = parentCircle.cy + dy;
      });
    },

    onMouseMoveRectangle(event) {
      const svg = this.$refs.animatedSvg;
      const rects = Array.from(svg.querySelectorAll("rect"));
      const boundingRect = svg.getBoundingClientRect();
      const mouseX = event.clientX - boundingRect.left;
      const viewportWidth = boundingRect.width;

      const percentage = mouseX / viewportWidth;

      for (let i = rects.length - 2; i >= 0; i--) {
        const outerRect = rects[i + 1];
        const innerRect = rects[i];

        const outerWidth = parseFloat(outerRect.getAttribute("width"));
        const newWidth = outerWidth * (1 - percentage);

        const outerRight = parseFloat(outerRect.getAttribute("x")) + outerWidth;
        const newX = outerRight - newWidth;

        innerRect.setAttribute("width", newWidth);
        innerRect.setAttribute("x", newX);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ff-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;

  .frame {
    position: relative;
    width: 640px;
    height: 640px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      pointer-events: none;
      position: absolute;
      z-index: 4;
    }
  }

  .frame-left {
    margin-right: -80px;
    z-index: 1;
  }

  .frame-center {
    width: 80px;
    z-index: 2;
    height: auto;
  }

  .frame-right {
    margin-left: -80px;
    z-index: 1;
  }

  .frame-right::after {
    content: "I believe it’s crucial to make interfaces look great and work well. Simple as that";
    position: absolute;
    bottom: -60px;
    right: 0;
    color: #60606c;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 28px;
  }
}

.svg-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1240px) {
  .ff-container {
    .frame {
      width: 54%;
      height: 54%;
    }
    .frame-left {
      margin-right: -80px;
      z-index: 1;
    }

    .frame-center {
      width: 80px;
      z-index: 2;
      height: auto;
    }

    .frame-right {
      margin-left: -80px;
      z-index: 1;
    }
    .frame-right::after {
      bottom: 0;
      right: 0;
    }
  }
}

@media screen and (max-width: 1024px) {
  .ff-container {
    .frame {
      h2 {
        font-size: 2rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .ff-container {
    .frame {
      h2 {
        font-size: 1.5rem;
      }
    }
    .frame-right::after {
      display: none;
    }
  }
}

@media screen and (max-width: 425px) {
  .ff-container {
    .frame {
      margin: -8%;
      h2 {
        font-size: 1rem;
      }
    }
  }
}

// @media screen and (max-width: 1024px) {
//   .ff-container {
//     .frame {
//       width: 50%;
//       height: 50%;
//     }
//     .frame-left {
//       margin-right: -80px;
//       z-index: 1;
//     }

//     .frame-center {
//       width: 80px;
//       z-index: 2;
//       height: auto;
//     }

//     .frame-right {
//       margin-left: -80px;
//       z-index: 1;
//     }
//   }
// }

// @media screen and (max-width: 425px) {
//   .ff-container {
//     height: auto;
//     .frame {
//       width: 200px;
//       height: 200px;
//     }
//     .frame-left {
//       margin-right: -10px;
//       z-index: 1;
//     }

//     .frame-center {
//       width: 10px;
//       z-index: 2;
//       height: auto;
//     }

//     .frame-right {
//       margin-left: -10px;
//       z-index: 1;
//     }
//     .frame-right::after {
//       display: none;
//       bottom: -64px;
//       font-size: 12px;
//       line-height: 14px;
//     }
//   }

//   h2 {
//     font-size: 16px;
//   }
// }
</style>
