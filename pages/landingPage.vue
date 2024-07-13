<template>
    <div class="w-full h-[100svh] flex justify-center items-center flex-col">
        <div class="absolute z-0 w-full justify-center grid grid-cols-1 grid-rows-1">
            <canvas id="roundCanvas" class="w-full h-full grid-span-1 "/>
            <div class="w-full h-full bg-gradient-to-t from-[#7F5EFF] to-[#997FFF] grid-span-1"/>
        </div>
      <h1 class="z-10">PromptPilot</h1>
      <button class="OneButton">Découvrir PrompPilot</button>
    </div>
    <section>
        <div>weshezaekzapke</div>
    </section>
  </template>
  
  <script setup>
  
  definePageMeta({
          layout: 'landingPage'
      })
  
  </script>

<script>
export default {
  mounted() {
    const myCanvas = document.getElementById("roundCanvas");
    const originalHeight = myCanvas.height;
    const originalWidth = myCanvas.width;
render();
    function render() {
    const dimensions = getObjectFitSize(
        true,
        myCanvas.clientWidth,
        myCanvas.clientHeight,
        myCanvas.width,
        myCanvas.height
    );
    myCanvas.width = dimensions.width;
    myCanvas.height = dimensions.height;

    const ctx = myCanvas.getContext("2d");
    const ratio = Math.min(
        myCanvas.clientWidth / originalWidth,
        myCanvas.clientHeight / originalHeight
    );
    ctx.scale(ratio, ratio); //adjust this!
    ctx.beginPath();
    ctx.arc(150, 65, 30, 0, 2 * Math.PI);
    ctx.arc(150, 65, 100, 0, 2 * Math.PI);
    ctx.arc(150, 65, 65, 0, 2 * Math.PI);
    ctx.stroke();
    }

    // adapted from: https://www.npmjs.com/package/intrinsic-scale
    function getObjectFitSize(
    contains /* true = contain, false = cover */,
    containerWidth,
    containerHeight,
    width,
    height
    ) {
    const doRatio = width / height;
    const cRatio = containerWidth / containerHeight;
    let targetWidth = 0;
    let targetHeight = 0;
    const test = contains ? doRatio > cRatio : doRatio < cRatio;

    if (test) {
        targetWidth = containerWidth;
        targetHeight = targetWidth / doRatio;
    } else {
        targetHeight = containerHeight;
        targetWidth = targetHeight * doRatio;
    }

    return {
        width: targetWidth,
        height: targetHeight,
        x: (containerWidth - targetWidth) / 2,
        y: (containerHeight - targetHeight) / 2
    };
    }
    }
}

</script>
  
  <style scoped>
      h1 {
          margin-bottom: 20px;
          font-size: 165px;
          font-weight: bold;
          width: fit-content;
      }
      p {
         
      }
      .OneButton{
          @apply text-white border-[2px] border-[#A089FF] bg-gradient-to-t from-[#7F5EFF] to-[#997FFF] rounded-2xl px-8 py-3 text-xl mt-8;
          box-shadow: inset 0 -2px 2px 0.5px #6C50E0,inset 0 0px 2px 1.5px rgba(94, 94, 94, 0.2);
      }

      .animation-360{
        animation-name: spin;
        animation-duration: 4s;
        animation-iteration-count: infinite;
      }

      @keyframes spin { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    }
  </style> 