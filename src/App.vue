<template>
  <el-config-provider size="large">
    <div class="h-full flex flex-cols justify-center">
      <div class="w-40 p-5">
        <el-menu default-active="1" class="b-r-0" @open="SelectMenu" :unique-opened="true">
          <el-menu-item index="1" class="text-lg">
            <i-ep-Search></i-ep-Search>
            <span class="ml-3">探索</span>
          </el-menu-item>
          <el-menu-item index="2" class="text-lg">
            <i-ep-House></i-ep-House>
            <span class="ml-3">我的</span>
          </el-menu-item>
          <el-menu-item index="3" class="text-lg">
            <i-ep-DocumentAdd></i-ep-DocumentAdd>
            <span class="ml-3">发布</span>
          </el-menu-item>
          <el-menu-item index="4" class="text-lg">
            <i-ep-Setting></i-ep-Setting>
            <span class="ml-3">设置</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="flex-1 b-l-solid b-l b-l-slate-3">
        <HomePage msg="1" v-if="vSubpage == '1'"></HomePage>
        <PullPage msg="2" v-else-if="vSubpage == '2'"></PullPage>
        <PushPage msg="3" v-else-if="vSubpage == '3'"></PushPage>
        <SettingPage msg="4" v-else-if="vSubpage == '4'"></SettingPage>
      </div>
    </div>
  </el-config-provider>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      vSubpage: '1'
    };
  },
  methods: {
    SelectMenu(key) {
      this.vSubpage = key;
    }
  }
};

</script>