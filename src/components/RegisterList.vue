<script>
import { timestampToDateTime } from '../utils/date_operations'

import IcoMarihuana from '@/assets/marihuana.png'
import ChevronRight from './icons/ChevronRight.vue'

export default {
  name: 'RegisterList',
  components: {
    ChevronRight
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      IcoMarihuana
    }
  },
  methods: {
    timestampToDateTime
  }
}
</script>

<template>
  <ul className="list">
    <li class="list--item" v-for="(itemList, index) in list" v-bind:key="index">
      <div className="cbd__card--img">
        <div className="bg--img">
          <img :src="IcoMarihuana" alt="Marihuana" />
        </div>
      </div>
      <div className="cbd__card--info">
        <p className="space--between">
          <small>Toma diaria de CBD</small>
          <small>{{ timestampToDateTime(itemList.timestamp) }}</small>
        </p>

        <p>
          <strong>{{ itemList.portion }}</strong> gota
        </p>
      </div>
      <div className="cbd__card--show">
        <ChevronRight />
      </div>
    </li>
  </ul>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.list--item {
  display: grid;
  grid-template-columns: 56px 1fr 32px;
  border: 1px solid rgb(98, 98, 98);
  border-radius: 12px;
  cursor: pointer;
}

.cbd__card {
  display: grid;
  grid-template-columns: 56px 1fr 32px;
  border: 1px solid rgb(98, 98, 98);
  border-radius: 12px;
  cursor: pointer;
}

.cbd__card--img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg--img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(3, 23, 2);

  & img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
}

.cbd__card--info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.9rem;
}

.cbd__card--show {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
