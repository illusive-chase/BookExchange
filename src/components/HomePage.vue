<script>
import BookCard from './utils/BookCard.vue';
export default {
    name: 'HomePage',
    props: {
        msg: String
    },
    data() {
        return {
            vBookName: '',
            vBookNameSuggestion: [
                { value: '远山淡影' },
                { value: '橘子不是唯一的水果' },
                { value: '数学分析' },
            ],
            vAuthor: [],
            vAuthorSuggestion: [
                { value: '石黑一雄' },
                { value: '珍妮特·温特森' },
                { value: '伍胜健' }
            ],
            vCountry: [],
            vCountrySuggestion: [
                { value: '英国' },
                { value: '中国' },
            ],
            vPublisher: [],
            vPublisherSuggestion: [
                { value: '上海译文出版社' },
                { value: '北京联合出版公司' },
                { value: '北京大学出版社' }
            ]
        };
    },
    methods: {
        querySearch(query, callback) {
            callback(this.vBookNameSuggestion);
        },
    },
    components: { BookCard }
};

</script>

<template>
  <div class="h-full w-full flex flex-col items-center">
    <div class="w-full px-7 mt-5 box-border flex items-center">
      <el-autocomplete
        v-model="vBookName"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input flex-1 ml-5 text-lg"
        placeholder="输入书名进行查询"
        elect-when-unmatched
      />
      <el-button class="mx-5" v-btn>搜索</el-button>
    </div>
    <div class="w-full px-7 mt-5 box-border flex items-center">
      <Filter
        class="ml-5"
        v-model="vAuthor"
        :suggestion="vAuthorSuggestion"
        placeholder="不限作者"
      />
      <Filter
        class="ml-5"
        v-model="vCountry"
        :suggestion="vCountrySuggestion"
        placeholder="不限国家和地区"
      />
      <Filter
        class="ml-5"
        v-model="vPublisher"
        :suggestion="vPublisherSuggestion"
        placeholder="不限出版社"
      />
    </div>
    <el-scrollbar class="w-full flex-1 my-7">
      <div v-for="item in 20" :key="item" class="mx-12 my-7 flex">
        <BookCard
          title="远山淡影"
          class="flex-1"
          index="#00001"
          info="xxx"
          :price="10"
          author="石黑一雄"
          publisher="上海译文出版社"
          address="38号楼"
          status="全新"
        />
        <BookCard
          class="flex-1 ml-5"
          title="橘子不是唯一的水果"
          index="#00002"
          info="xxx"
          :price="10"
          author="珍妮特·温特森"
          publisher="北京联合出版公司"
          address="35号楼"
          status="七成新；有少量勾画"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

