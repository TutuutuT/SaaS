<template>
    <div class="w-full h-[100svh] flex justify-center items-center flex-col">
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