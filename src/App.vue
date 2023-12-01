<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <div class="my-3 text-center">Center</div>
  </el-config-provider>
  <i-ep-menu></i-ep-menu>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>