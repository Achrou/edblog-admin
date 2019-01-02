<template>
  <div>
    <el-table
      :data="currentTableData"
      v-loading="loading"
      size="mini"
      stripe
      style="width: 100%;"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column label="标题" sortable="true" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <a :href="scope.row.pic"
            target="_blank">{{scope.row.title}}</a>
        </template>
      </el-table-column>

      <el-table-column label="作者" align="center">
        <template slot-scope="scope">
          <a :href="scope.row.pic" target="_blank">
            <el-tag
              size="mini"
              type="success">
              {{scope.row.author}}
            </el-tag>
          </a>
        </template>
      </el-table-column>
      <el-table-column label="分类目录" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <a :href="scope.row.pic"
            target="_blank">{{scope.row.category}}</a>
        </template>
      </el-table-column>
      <el-table-column label="标签" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.tag}}
        </template>
      </el-table-column>
      <el-table-column label="评论" sortable="true" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.comment}}
        </template>
      </el-table-column>
      <el-table-column label="修改时间" sortable="true" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.modified}}
        </template>
      </el-table-column>
      <el-table-column label="FIFU" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <img :src="scope.row.pic" height="64"/>
        </template>
      </el-table-column>
      <el-table-column label="标签" width="70" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.tag}}
        </template>
      </el-table-column>
      <el-table-column label="标签" width="70" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.tag}}
        </template>
      </el-table-column>
      <el-table-column label="标签" width="50" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.tag}}
        </template>
      </el-table-column>
      <el-table-column label="标签" width="50" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.tag}}
        </template>
      </el-table-column>
      <el-table-column label="点击数" width="70" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.tag}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleClick(scope.row.id)" type="text" size="small">编辑</el-button>
        </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    tableData: {
      default: () => []
    },
    loading: {
      default: false
    }
  },
  data () {
    return {
      currentTableData: [],
      multipleSelection: []
    }
  },
  watch: {
    tableData: {
      handler (val) {
        this.currentTableData = val
      },
      immediate: true
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleClick (id) {
      console.log(id)
    }
  }
}
</script>
