<template>
    <div class="w-full h-[100svh] flex justify-center items-center flex-col">
        <div class="absolute z-0 w-full flex justify-center">
            <div class="flex justify-center absolute -top-60">
                <svg width="416" height="416" viewBox="0 0 416 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="208" cy="208" r="207.5" stroke="#292929"/>
                </svg>
            </div>
            <div class="flex justify-center absolute -top-60 animation-360">
                <svg width="416" height="417" viewBox="0 0 416 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M257.538 6.74445C228.997 0.774981 196.214 -1.84672 152.549 8.25491" stroke="url(#paint0_linear_8_7)" stroke-linecap="round"/>
                <defs>
                <linearGradient id="paint0_linear_8_7" x1="257.495" y1="3.74478" x2="152.505" y2="5.25521" gradientUnits="userSpaceOnUse">
                <stop stop-color="#146EF5" stop-opacity="0"/>
                <stop offset="0.5" stop-color="#146EF5"/>
                <stop offset="1" stop-color="#146EF5" stop-opacity="0"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
        </div>
      <h1 class="z-10">PromptPilot</h1>
      <button class="OneButton">Découvrir PrompPilot</button>
    </div>
  </template>
  
  <script setup>
  
  definePageMeta({
          layout: 'home'
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