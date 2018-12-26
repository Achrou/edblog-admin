<template>
  <d2-container>
    <main-editor ref="editor"/>
    <el-button type="primary" @click="xx" plain>保存</el-button>
  </d2-container>
</template>

<script>
import MainEditor from '../editor.md/MainEditor'
export default {
  // 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
  name: 'post-new',
  components: {
    MainEditor
  },
  methods: {
    xx () {
      console.log(this.$refs.editor.getMarkdown())
    }
  }
}
</script>
