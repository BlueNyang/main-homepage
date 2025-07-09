<script setup lang="ts">
import BlueNyang from '@/assets/BlueNyang.png';
import LeftEye from '@/assets/BlueNyang-Eyes-Left.png';
import RightEye from '@/assets/BlueNyang-Eyes-Right.png';
import { ref, onMounted, onUnmounted, type Ref } from 'vue';

const bluenyangImg = ref<HTMLElement | null>(null);

const ORIGIN_WIDTH: number = 1200;
const ORIGIN_HEIGHT: number = 650;

interface Pos {
  x: number;
  y: number;
}

const LEFT_STD_POS: Pos = { x: 447, y: 295 };
const RIGHT_STD_POS: Pos = { x: 552, y: 292 };

const LEFT_RATIO_POS: Pos = {
  x: LEFT_STD_POS.x / ORIGIN_WIDTH,
  y: LEFT_STD_POS.y / ORIGIN_HEIGHT,
};

const RIGHT_RATIO_POS: Pos = {
  x: RIGHT_STD_POS.x / ORIGIN_WIDTH,
  y: RIGHT_STD_POS.y / ORIGIN_HEIGHT,
};

const imgW: Ref<number> = ref(0);
const imgH: Ref<number> = ref(0);
const Ratio: Ref<number> = ref(1);

const leftPos = ref<Pos>({ x: 0, y: 0 });
const rightPos = ref<Pos>({ x: 0, y: 0 });

let observer: ResizeObserver | null = null;

onMounted(() => {
  if (bluenyangImg.value) {
    observer = new ResizeObserver((entries): void => {
      const entry = entries[0];
      if (entry) {
        imgW.value = entry.contentRect.width;
        imgH.value = entry.contentRect.height;
        Ratio.value = imgW.value / ORIGIN_WIDTH;

        leftPos.value = {
          x: LEFT_RATIO_POS.x * imgW.value,
          y: LEFT_RATIO_POS.y * imgH.value,
        };

        rightPos.value = {
          x: RIGHT_RATIO_POS.x * imgW.value,
          y: RIGHT_RATIO_POS.y * imgH.value,
        };
      }
    });

    observer.observe(bluenyangImg.value);
  }
});

onUnmounted((): void => {
  if (observer) {
    observer.disconnect();
  }
});

function getEyeDynamicPos(mousePos: Pos): void {
  const radius: number = 10;
  // left x = cos(ansgle) * radius
  // left y = sin(angle) * radius
  const angleL: number = Math.atan2(
    mousePos.y - LEFT_STD_POS.y * Ratio.value,
    mousePos.x - LEFT_STD_POS.x * Ratio.value,
  );

  leftPos.value.x = LEFT_STD_POS.x * Ratio.value + Math.cos(angleL) * radius;
  leftPos.value.y = LEFT_STD_POS.y * Ratio.value + Math.sin(angleL) * radius;

  // right x = cos(ansgle) * radius
  // right y = sin(angle) * radius
  const angleR: number = Math.atan2(
    mousePos.y - RIGHT_STD_POS.y * Ratio.value,
    mousePos.x - RIGHT_STD_POS.x * Ratio.value,
  );

  rightPos.value.x = RIGHT_STD_POS.x * Ratio.value + Math.cos(angleR) * radius;
  rightPos.value.y = RIGHT_STD_POS.y * Ratio.value + Math.sin(angleR) * radius;
}

function handleMouseMove(event: MouseEvent): void {
  // 이미지는 80% 크기이므로 좌측 여백을 보정
  const mouseToImageX = document.body.clientWidth * 0.1;
  // 상단 여백을 보정(padding-top: 16 * --spacing(tailwind) = 4rem = 64px)
  const mouseToImageY = 64 + 20;

  const mousePos: Pos = {
    x: event.clientX - mouseToImageX,
    y: event.clientY - mouseToImageY,
  };
  getEyeDynamicPos(mousePos);
}

document.addEventListener('mousemove', handleMouseMove);
</script>

<template>
  <div
    class="flex relative justify-center bg-white items-center w-4/5 pt-16 mx-auto z-100"
  >
    <img
      :src="BlueNyang"
      alt="BlueNyang"
      ref="bluenyangImg"
      class="z-50"
      loading="lazy"
      decoding="async"
      data-slot="icon"
    />
    <img
      :src="LeftEye"
      class="absolute left-1/3 top-1/3 z-40 top-16 left-[0]"
      :style="{
        width: `${Ratio * 75}px`,
        height: `${Ratio * 70}px`,
        transform: `translate(${leftPos.x}px, ${leftPos.y}px)`,
      }"
      loading="lazy"
      decoding="async"
    />
    <img
      :src="RightEye"
      class="absolute right-1/3 top-1/3 z-40 top-16 left-[0]"
      :style="{
        width: `${Ratio * 75}px`,
        height: `${Ratio * 70}px`,
        transform: `translate(${rightPos.x}px, ${rightPos.y}px)`,
      }"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>
