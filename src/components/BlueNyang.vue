<script setup lang="ts">
import BlueNyang from '@/assets/BlueNyang.png';
import LeftEye from '@/assets/BlueNyang-Eyes-Left.png';
import RightEye from '@/assets/BlueNyang-Eyes-Right.png';
import { ref, onMounted, onUnmounted, type Ref } from 'vue';

const bluenyangImg = ref<HTMLElement | null>(null);
const ImgContainer = ref<HTMLElement | null>(null);

const ORIGIN_WIDTH: number = 1200;
const ORIGIN_HEIGHT: number = 650;

interface Pos {
  x: number;
  y: number;
}

const LEFT_STD_POS: Pos = { x: 449, y: 295 };
const RIGHT_STD_POS: Pos = { x: 555, y: 292 };

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
const containerWMargin: Ref<number> = ref(0);

const leftPos = ref<Pos>({ x: 0, y: 0 });
const rightPos = ref<Pos>({ x: 0, y: 0 });

let imgObserver: ResizeObserver | null = null;
let ContainerObserver: ResizeObserver | null = null;

onMounted(() => {
  if (bluenyangImg.value) {
    imgObserver = new ResizeObserver((entries): void => {
      const entry = entries[0];
      if (entry) {
        imgW.value = Math.floor(entry.contentRect.width);
        imgH.value = Math.floor(entry.contentRect.height);
        Ratio.value = imgW.value / ORIGIN_WIDTH;

        // 눈 초기 위치 보정 + 이미지 크기에 따라 위치 조정
        const leftX = 11 * Ratio.value;
        const leftY = 2 * Ratio.value;
        const rightX = 12 * Ratio.value;
        const rightY = 1 * Ratio.value;

        leftPos.value = {
          x: LEFT_RATIO_POS.x * imgW.value + leftX, //11,
          y: LEFT_RATIO_POS.y * imgH.value - leftY, //2,
        };

        rightPos.value = {
          x: RIGHT_RATIO_POS.x * imgW.value - rightX, //12,
          y: RIGHT_RATIO_POS.y * imgH.value - rightY, //1,
        };
      }
    });

    ContainerObserver = new ResizeObserver((entries): void => {
      const entry = entries[0];
      if (entry) {
        const containerW = entry.contentRect.width;
        containerWMargin.value = (containerW - imgW.value) / 2;
        console.log(
          `Container Width: ${containerW}, ImgWidth: ${imgW.value}, Margin: ${containerWMargin.value}`,
        );
      }
    });

    imgObserver.observe(bluenyangImg.value);
    if (ImgContainer.value) {
      ContainerObserver.observe(ImgContainer.value);
    }
  }
});

onUnmounted((): void => {
  if (imgObserver) {
    imgObserver.disconnect();
  }
  if (ContainerObserver) {
    ContainerObserver.disconnect();
  }
});

function getEyeDynamicPos(mousePos: Pos): void {
  let radius: number = 10;

  // 창의 크기와 이미지 크기에 따라 반지름을 조정
  if (imgW.value > 0 && imgH.value > 0) {
    // 이미지의 가로 세로 비율을 유지하면서 반지름을 조정
    radius = Math.min(imgW.value, imgH.value) * 0.02;
  }

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
  const xMargin = document.body.clientWidth * 0.1 + containerWMargin.value;
  // 상단 여백을 보정(padding-top: 16 * --spacing(tailwind) = 4rem = 64px)
  const yMargin = 64 + 20;

  // 스크롤 위치를 고려하여 마우스 위치를 계산
  const mousePos: Pos = {
    x: event.clientX - xMargin + window.scrollX,
    y: event.clientY - yMargin + window.scrollY,
  };

  getEyeDynamicPos(mousePos);
}

document.addEventListener('mousemove', handleMouseMove);
</script>

<template>
  <div
    class="flex relative w-4/5 mx-auto pt-16 justify-center items-center"
    ref="ImgContainer"
  >
    <div class="flex relative bg-white w-fit">
      <img
        :src="BlueNyang"
        ref="bluenyangImg"
        alt="BlueNyang"
        loading="lazy"
        decoding="async"
        data-slot="icon"
      />
      <img
        :src="LeftEye"
        class="absolute top-0 left-0"
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
        class="absolute top-0 left-0"
        :style="{
          width: `${Ratio * 75}px`,
          height: `${Ratio * 70}px`,
          transform: `translate(${rightPos.x}px, ${rightPos.y}px)`,
        }"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</template>
