<template>
  <el-config-provider size="large">
    <div class="h-full flex flex-cols justify-center">
      <div class="flex-1">
        1
      </div>
      <div class="w-120 p-10">
        <el-card class="w-full h-full" body-style="padding:2.5rem">
          <div class="my-5 flex items-center justify-center">
            <el-card class="w-40 h-40" shadow="hover" style="border-radius:50%" body-class="p-0 h-full flex items-center justify-center">
              <div class="text-7xl">
                <i-ep-User />
              </div>
            </el-card>
            <el-skeleton class="flex-1 p-7" :rows="4" />
          </div>
          <el-card class="w-full my-5" shadow="hover" body-class="py-0 px-5">
            <el-collapse class="w-full b-none" :model-value="['1']">
              <el-collapse-item name="1">
                <template #title>
                  <span class="text-lg">Block A</span>
                </template>
                <el-skeleton class="w-full mt-3" :rows="6" />
              </el-collapse-item>
            </el-collapse>
          </el-card>
          <el-card class="w-full my-5" shadow="hover" body-class="py-0 px-5">
            <el-collapse class="w-full b-none" :model-value="['1']">
              <el-collapse-item name="1">
                <template #title>
                  <span class="text-lg">Block B</span>
                </template>
                <el-skeleton class="w-full mt-3" :rows="6" />
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-card>
      </div>
    </div>
  </el-config-provider>
</template>

<script setup>
import { ref } from 'vue';
</script>