<template>
  <el-card
    body-style="padding:0"
    shadow="hover"
  >
    <div class="w-full h-56 flex of-hidden">
      <el-image class="w-40 h-56" fit="cover" :src="src">
        <template #error>
          <div class="w-full h-full text-5xl flex items-center justify-center bg-gray-1">
            <i-ep-Picture/>
          </div>
        </template>
      </el-image>
      <div class="flex-1 h-full flex flex-col">
        <div class="mt-3 ml-3 text-xl font-bold">{{ title }}</div>
        <div v-if="author" class="mt-3 ml-3 text-sm">作者：{{ author }}</div>
        <div v-if="publisher" class="mt-3 ml-3 text-sm">出版社：{{ publisher }}</div>
        <div class="mt-3 ml-3 text-sm">价格：{{ price }}r</div>
        <div class="mt-3 ml-3 text-sm">书籍状况：{{ status }}</div>
        <div class="mt-3 ml-3 text-sm">取书地址：{{ address }}</div>
      </div>
      <div class="h-full flex flex-col items-end justify-between">
        <el-button v-btn link class="text-xl m-3">
          <i-ep-Star></i-ep-Star>
        </el-button>
        <div class="m-3 text-sm text-gray-3">{{ index }}</div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
  defineProps({
    index: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: ''
    },
    publisher: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  });
</script>