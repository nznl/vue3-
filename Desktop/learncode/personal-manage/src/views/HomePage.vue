<template>
  <main>
    <aside :class="{'aside-width': isFlex}">
      侧边栏
    </aside>
    <div class="content">
      <header :class="{'header-height': isHasHead}">头部</header>
      <section :class="{'section-width': !isFlex, 'section-height': !isHasHead}">
        <button style="cursor: pointer;" @click="changeLayout">伸缩</button>
        <router-view v-slot="{ Component, route }">
            <transition mode="out-in">
              <div>
                <keep-alive>
                  <component :is="Component" ::key="route.fullPath"></component>
                </keep-alive>
              </div>
            </transition>
        </router-view>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isFlex = ref<boolean>(false); // 是否伸缩侧边栏
const isHasHead = ref<boolean>(false); 

function changeLayout() {
  isFlex.value = !isFlex.value;
  isHasHead.value = !isHasHead.value;
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  text-align: center;
  aside {
    width: 250px;
    height: 100%;
    overflow: auto;
    background: linear-gradient(to right bottom, rgb(236, 71, 134), rgb(185, 85, 164));
    transition: width 300ms ease-in-out;
  }
  .content {
    flex: 1 0 ;
    display: flex;
    flex-direction: column;
    header {
      height: 50px;
      background: linear-gradient(to right bottom, rgb(86, 205, 243), rgb(113, 157, 227));
      transition: height 300ms ease-in-out;
    }
    section {
      flex: 1 0;
      background: linear-gradient(to right bottom, rgb(252, 188, 37), rgb(246, 128, 87));
      transition: width 300ms ease-in-out, height 300ms ease-in-out;
      overflow: auto;
    }
    .section-height {
      transition: height 300ms ease-in-out;
    }
    .section-width {
      transition: width 300ms ease-in-out;
    }
    .header-height {
      height: 0;
      transition: height 300ms ease-in-out;
    }
  }
  
  .aside-width {
    width: 0;
    transition: width 300ms ease-in-out;
  }
}
</style>