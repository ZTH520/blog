<script setup lang="ts">
import { ref } from 'vue'

interface IBookItem {
  title: string
  checked: boolean
}
interface IListItem {
  type: string
  books: IBookItem[]
}

const list = ref<IListItem[]>([
  {
    type: '心理',
    books: [
      { title: '社会心理学', checked: false },
      { title: '山茶文具店', checked: false },
      { title: '非暴力沟通', checked: false },
      { title: '沟通的艺术', checked: false },
      { title: '面纱', checked: false },
    ],
  },
  {
    type: '理财',
    books: [
      { title: '富爸爸穷爸爸', checked: false },
      { title: '富人的逻辑', checked: false },
    ],
  },
  {
    type: '逻辑',
    books: [
      { title: '学会提问', checked: false },
    ],
  },
])
</script>

<template>
  <div class="tip custom-block">
    <div v-for="item, index in list" :key="index" class="item">
      <div class="item__title">
        {{ item.type }}
      </div>
      <div class="checkbox-group">
        <label v-for="book, idx in item.books" :key="idx" class="checkbox" :class="book.checked ? 'is-checked' : ''">
          <input type="checkbox" class="checkbox__former">
          <span class="checkbox__input" />
          <span class="checkbox__label">《{{ book.title }}》</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  &__title {
    font-size: 16px;
    margin-bottom: 4px;
    font-weight: 500;
  }
}
.checkbox-group {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 16px;
  .checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    &__former {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      outline: 0;
      appearance: none;
    }
    &__input {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      border: 1px solid rgb(220, 220, 220);
      border-radius: 3px;
      background-color: #ffffff;
      box-sizing: border-box;
      &::after {
        content: "";
        position: absolute;
        opacity: 0;
        box-sizing: border-box;
      }
    }
    &__label {
      display: inline-block;
      margin-left: 8px;
      vertical-align: middle;
      font-size: 14px;
    }
    &.is-checked {
      .checkbox__input {
        border-color: #4582e6;
        background-color: #4582e6;
        transition: background-color .2s cubic-bezier(.82,0,1,.9);
        &::after {
          opacity: 1;
          top: 6px;
          left: 3px;
          width: 5px;
          height: 9px;
          border: 2px solid #f3f3f3;
          border-radius: 0 0 1px;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg) scale(1) translate(-50%,-50%);
          background: transparent;
        }
      }
    }
  }
}
</style>
