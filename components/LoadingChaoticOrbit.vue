<template>
  <div class="chaotic-orbit"></div>
</template>

<style>
.chaotic-orbit {
  --uib-size: 20px;
  /* --uib-color: black; */
  --uib-speed: 1.5s;
  --uib-dot-size: calc(var(--uib-size) * 0.4);
  height: var(--uib-size);
  width: var(--uib-size);
  animation: rotate calc(var(--uib-speed) * 1.667) infinite linear;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chaotic-orbit::before,
.chaotic-orbit::after {
  content: "";
  position: absolute;
  height: var(--uib-dot-size);
  width: var(--uib-dot-size);
  border-radius: 50%;
  background-color: var(--primary);
  flex-shrink: 0;
  transition: background-color 0.3s ease;
}

.chaotic-orbit::before {
  animation: orbit var(--uib-speed) linear infinite;
}

.chaotic-orbit::after {
  animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2) infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes orbit {
  0% {
    transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
    opacity: 0.65;
  }
  5% {
    transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.684208);
    opacity: 0.58;
  }
  10% {
    transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.631576);
    opacity: 0.51;
  }
  15% {
    transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.578944);
    opacity: 0.44;
  }
  20% {
    transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.526312);
    opacity: 0.37;
  }
  25% {
    transform: translateX(0%) scale(0.47368);
    opacity: 0.3;
  }
  30% {
    transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.526312);
    opacity: 0.37;
  }
  35% {
    transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.578944);
    opacity: 0.44;
  }
  40% {
    transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.631576);
    opacity: 0.51;
  }
  45% {
    transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.684208);
    opacity: 0.58;
  }
  50% {
    transform: translateX(calc(var(--uib-size) * -0.25)) scale(0.73684);
    opacity: 0.65;
  }
  55% {
    transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.789472);
    opacity: 0.72;
  }
  60% {
    transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.842104);
    opacity: 0.79;
  }
  65% {
    transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.894736);
    opacity: 0.86;
  }
  70% {
    transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.947368);
    opacity: 0.93;
  }
  75% {
    transform: translateX(0%) scale(1);
    opacity: 1;
  }
  80% {
    transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.947368);
    opacity: 0.93;
  }
  85% {
    transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.894736);
    opacity: 0.86;
  }
  90% {
    transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.842104);
    opacity: 0.79;
  }
  95% {
    transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.789472);
    opacity: 0.72;
  }
  100% {
    transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
    opacity: 0.65;
  }
}
</style>
