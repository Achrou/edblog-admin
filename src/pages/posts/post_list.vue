<template>
  <d2-container :filename="filename">
    <demo-page-header
      slot="header"
      @submit="handleSubmit"
      ref="header"/>
    <demo-page-main
      :table-data="table"
      :loading="loading"/>
    <demo-page-footer
      slot="footer"
      :current="page.current"
      :size="page.size"
      :total="page.total"
      @change="handlePaginationChange"/>
  </d2-container>
</template>

<script>
import { BusinessTable1List } from '@/api/demo.business.table.1'
export default {
  name: 'post-list',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter')
  },
  data () {
    return {
      filename: __filename,
      table: [],
      loading: false,
      page: {
        current: 1,
        size: 10,
        total: 0
      }
    }
  },
  created () {
    this.handleSubmit()
  },
  methods: {
    handlePaginationChange (val) {
      this.page = val
      // nextTick 只是为了优化示例中 notify 的显示
      this.$nextTick(() => {
        this.$refs.header.handleFormSubmit()
      })
    },
    handleSubmit (form) {
      this.loading = true
      // this.$notify({
      //   title: '开始请求模拟表格数据'
      // })
      BusinessTable1List({
        ...form,
        ...this.page
      })
        .then(res => {
          this.loading = false
          // this.$notify({
          //   title: '模拟表格数据请求完毕'
          // })
          this.table = res.body.data
          this.page.total = res.body.count
        })
        .catch(err => {
          this.loading = false
          this.$notify({
            title: '模拟表格数据请求异常'
          })
          console.log('err', err)
        })
    }
  }

}
</script>
