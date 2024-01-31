<script>
import BookCard from './utils/BookCard.vue';
export default {
    name: 'PushPage',
    props: {
        msg: String
    },
    data() {
        return {
            collapseActiveNames: '1'
        };
    },
    components: { BookCard }
};

</script>

<template>
  <el-collapse class="h-full w-full b-none" v-model="collapseActiveNames" accordion>
    <el-collapse-item name="1">
      <template #title>
        <div class="text-base px-12 font-bold">已收藏</div>
      </template>
      <div style="height:calc(100vh - 5 * var(--el-collapse-header-height) - 30px)">
        <el-scrollbar>
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
    </el-collapse-item>
    <el-collapse-item name="2">
      <template #title>
        <div class="text-base px-12 font-bold">购入中</div>
      </template>
      <div style="height:calc(100vh - 5 * var(--el-collapse-header-height) - 30px)">
        <el-scrollbar>
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
    </el-collapse-item>
    <el-collapse-item name="3" :disabled="true">
      <template #title>
        <div class="text-base px-12 font-bold">已购入</div>
      </template>
      <div style="height:calc(100vh - 5 * var(--el-collapse-header-height) - 30px)">
        <el-scrollbar>
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
    </el-collapse-item>
    <el-collapse-item name="4">
      <template #title>
        <div class="text-base px-12 font-bold">售出中</div>
      </template>
      <div style="height:calc(100vh - 5 * var(--el-collapse-header-height) - 30px)">
        <el-scrollbar>
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
    </el-collapse-item>
    <el-collapse-item name="5">
      <template #title>
        <div class="text-base px-12 font-bold">已售出</div>
      </template>
      <div style="height:calc(100vh - 5 * var(--el-collapse-header-height) - 30px)">
        <el-scrollbar>
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
    </el-collapse-item>
  </el-collapse>

  <!-- <div class="h-full w-full flex flex-col items-center">
    <div class="w-full px-7 mt-5 box-border flex items-center">
      
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
  </div> -->
</template>


<style>
div.el-collapse-item__wrap {
  border-bottom: none;
}
div.el-collapse-item__content {
  border-bottom: 1px solid var(--el-collapse-border-color);
}
</style>