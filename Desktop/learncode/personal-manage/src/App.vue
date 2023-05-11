<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { getTestApi } from '@/service';
import { Console } from 'console';
getTestApi().then(res => {
  console.log(res);
})


class Employee {
  private _fullName: string;
  private password: string | null;

  constructor(password: string | null) {
    this.password = password;
  }
  get fullName(): string {
    return this._fullName;
  }

  set fullName(name: string) {
    if (this.password && this.password === '123') {
      this._fullName = name;
      console.log(123, this._fullName);
    } else {
      console.log("权限不足！");
    }
  }
}

const a = new Employee(null);
a.fullName = "test";
const b = new Employee("123");
b.fullName = 'wu';

interface Test {
  <T>(a: T): T
}

const test: Test = function <T>(a: T): T {
  return a;
}

enum Direction {
  UP,
  DOWN
}

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for(let id in first) {
      (<T>result)[id] = (<T>first)[id];
    }
    return result;
}
console.log(Direction.UP);
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition>
      <div>
        <keep-alive>
          <component :is="Component" ::key="route.fullPath"></component>
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>

<style scoped>

</style>
