<script>
import { reactive } from 'vue';

export default {
    name: 'PushPage',
    props: {
        msg: String
    },
    data() {
        return {
          form: reactive({
            name: '',
            publisher: '',
            author: '',
            translator: '',
            price: 0,
            address: '',
            status01: '',
            status23: '',
            status45: '',
            status6: '',
            status7: ''
          })
        };
    }
};

</script>

<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="书名" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="出版社" prop="publisher">
      <el-input v-model="form.publisher" />
    </el-form-item>
    <el-form-item label="作者" prop="author">
      <el-input v-model="form.author" />
    </el-form-item>
    <el-form-item label="译者" prop="translator">
      <el-input v-model="form.translator" />
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input v-model.number="form.price" />
    </el-form-item>
    <el-form-item label="取书地址" prop="address">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item label="纸张新旧">
      <el-radio-group v-model="form.status01">
        <el-radio label="九成新" />
        <el-radio label="七成新" />
        <el-radio label="五成新" />
        <el-radio label="三成新" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="勾画程度">
      <el-radio-group v-model="form.status23">
        <el-radio label="无勾画" />
        <el-radio label="微勾画" />
        <el-radio label="少量勾画" />
        <el-radio label="大量勾画" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="封面完整性">
      <el-radio-group v-model="form.status45">
        <el-radio label="九成" />
        <el-radio label="七成" />
        <el-radio label="五成" />
        <el-radio label="三成" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="液体污渍">
      <el-radio-group v-model="form.status6">
        <el-radio label="无" />
        <el-radio label="有" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="缺页">
      <el-radio-group v-model="form.status7">
        <el-radio label="无" />
        <el-radio label="有" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

