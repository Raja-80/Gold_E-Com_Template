<template>
  <div>
    <svg aria-label="loader icon" width="150" height="150" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"
      class="circle-loader">
      <!-- Background circle with transparent fill -->
      <circle cx="50" cy="50" r="30" fill="transparent" stroke="none" stroke-width="2" />

      <!-- Gradients definitions -->
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: var(--primary-color); stop-opacity: 1" />
          <stop offset="100%" style="stop-color: var(--primary-color); stop-opacity: 0" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: var(--secondary-color); stop-opacity: 1" />
          <stop offset="100%" style="stop-color: var(--secondary-color); stop-opacity: 0" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: var(--tertiary-color); stop-opacity: 1" />
          <stop offset="100%" style="stop-color: var(--tertiary-color); stop-opacity: 0" />
        </linearGradient>
      </defs>

      <!-- Three arc parts -->
      <path ref="arc1" stroke="url(#grad1)" fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
        stroke-miterlimit="10" />
      <path ref="arc2" stroke="url(#grad2)" fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
        stroke-miterlimit="10" />
      <path ref="arc3" stroke="url(#grad3)" fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
        stroke-miterlimit="10" />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arcPaths: [
        { angleStart: 0, angleEnd: 120 },
        { angleStart: 120, angleEnd: 240 },
        { angleStart: 240, angleEnd: 360 }
      ]
    };
  },
  mounted() {
    this.initializePaths();
  },
  methods: {
    initializePaths() {
      this.arcPaths.forEach((path, index) => {
        const pathElement = this.$refs[`arc${index + 1}`];
        pathElement.setAttribute('d', this.describeArc(50, 50, 30, path.angleStart, path.angleEnd));
        pathElement.style.animation = `rotate-${index + 1} 2s linear infinite`;
      });
    },
    describeArc(x, y, radius, startAngle, endAngle) {
      const start = this.polarToCartesian(x, y, radius, endAngle);
      const end = this.polarToCartesian(x, y, radius, startAngle);

      const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

      const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
      ].join(" ");

      return d;
    },
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    }
  }
};
</script>

<style scoped>
.circle-loader {
  animation: rotate 2s linear infinite;
}

@keyframes rotate-1 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-2 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-3 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>





<!-- <template>
  <div>
    <svg aria-label="loader icon" width="200" height="100" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet" class="infinite-loader">
      <path stroke="var(--primary-color)" id="outline" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
      <path stroke="var(--primary-color)" id="outline-bg" opacity="0.05" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
    </svg>
  </div>
</template>

<style scoped>
#outline {
  stroke-dasharray: 2.42777px, 242.77666px;
  stroke-dashoffset: 0;
  -webkit-animation: anim 1s linear infinite;
  animation: anim 1s linear infinite;
}

@-webkit-keyframes anim {
  12.5% {
    stroke-dasharray: 33.98873px, 242.77666px;
    stroke-dashoffset: -26.70543px;
  }

  43.75% {
    stroke-dasharray: 84.97183px, 242.77666px;
    stroke-dashoffset: -84.97183px;
  }

  100% {
    stroke-dasharray: 2.42777px, 242.77666px;
    stroke-dashoffset: -240.34889px;
  }
}

@keyframes anim {
  12.5% {
    stroke-dasharray: 33.98873px, 242.77666px;
    stroke-dashoffset: -26.70543px;
  }

  43.75% {
    stroke-dasharray: 84.97183px, 242.77666px;
    stroke-dashoffset: -84.97183px;
  }

  100% {
    stroke-dasharray: 2.42777px, 242.77666px;
    stroke-dashoffset: -240.34889px;
  }
}
</style>
 -->