<template>
  <el-select
    multiple
    collapse-tags
    popper-class="custom-header"
    v-model="value"
    class="ml-5"
    :placeholder="placeholder"
    :max-collapse-tags="1"
  >
    <template #header>
      <el-checkbox
        v-model="checkAll"
        :indeterminate="indeterminate"
        @change="handleCheckAll"
      >
        全部
      </el-checkbox>
    </template>
    <el-option
      v-for="item in suggestion"
      :key="item.value"
      :label="item.value"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>

import { ref, computed } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
  suggestion: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Array,
    required: true
  },
});
const emit = defineEmits(['update:modelValue']);

const checkAll = ref(false);
const indeterminate = ref(false);
const value = computed({
  get() { return props.modelValue; },
  set(val) {
    emit('update:modelValue', val);
    if (val.length === 0) {
      checkAll.value = false;
      indeterminate.value = false;
    } else if (val.length === props.suggestion.length) {
      checkAll.value = true;
      indeterminate.value = false;
    } else {
      indeterminate.value = true;
    }
  }
});

const handleCheckAll = (val) => {
  indeterminate.value = false;
  if (val) {
    emit('update:modelValue', props.suggestion.map(x => x.value));
  } else {
    emit('update:modelValue', []);
  }
};
</script>

<style lang="css">
.custom-header .el-checkbox {
  display: flex;
  height: unset;
}
</style>