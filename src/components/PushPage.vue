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
            price: '',
            address: '',
            status01: 0,
            status23: 0,
            status45: 0,
            status6: 0,
            status7: 0
          })
        };
    }
};

</script>

<template>
  <div class="my-10 text-lg font-bold ml-10">新增书籍售出</div>
  <el-form :model="form" label-width="100px" class="my-10 ml-5 mr-10">
    <el-form-item label="书名" prop="name" :rules="[
        { required: true, message: '必须填入书名' }
      ]">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="出版社" prop="publisher">
      <el-input v-model="form.publisher" />
    </el-form-item>
    <el-form-item label="作者" prop="author" :rules="[
        { required: true, message: '必须填入作者' }
      ]">
      <el-input v-model="form.author" />
    </el-form-item>
    <el-form-item label="译者" prop="translator">
      <el-input v-model="form.translator" />
    </el-form-item>
    <el-form-item label="纸张新旧">
      <el-radio-group v-model.number="form.status01">
        <el-radio :label="0">九成新</el-radio>
        <el-radio :label="1">七成新</el-radio>
        <el-radio :label="2">五成新</el-radio>
        <el-radio :label="3">三成新</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="勾画程度">
      <el-radio-group v-model.number="form.status23">
        <el-radio :label="0">无勾画</el-radio>
        <el-radio :label="1">微勾画</el-radio>
        <el-radio :label="2">少量勾画</el-radio>
        <el-radio :label="3">大量勾画</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="封面完整性">
      <el-radio-group v-model.number="form.status45">
        <el-radio :label="0">九成</el-radio>
        <el-radio :label="1">七成</el-radio>
        <el-radio :label="2">五成</el-radio>
        <el-radio :label="3">三成</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="污渍">
      <el-radio-group v-model.number="form.status6">
        <el-radio :label="0">无</el-radio>
        <el-radio :label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="缺页">
      <el-radio-group v-model.number="form.status7">
        <el-radio :label="0">无</el-radio>
        <el-radio :label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="价格" prop="price" :rules="[
        { required: true, message: '必须填入价格' },
        { type: 'number', message: '价格必须是一个数字' },
        { min: 0, message: '价格必须大于或等于0' },
      ]">
      <el-input v-model.number="form.price" />
    </el-form-item>
    <el-form-item label="交接地址" prop="address" :rules="[
        { required: true, message: '必须填入交接地址' }
      ]">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认</el-button>
    </el-form-item>
  </el-form>
</template>

