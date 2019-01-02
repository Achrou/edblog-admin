<template>
  <d2-container class="page">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-input v-model="input" placeholder="在此输入标题" class="input-demo-200"></el-input>
        <main-editor ref="editor"/>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>发布</span>
              </div>
              <div >
                <div class="text item">
                  <i class="fa fa-eye"></i> 公开度
                </div>
                <el-button style="float: right;margin: 5px 0" type="primary" size="medium" @click="xx" plain>发布</el-button>
              </div>
            </el-card>
          </el-form-item>
          <el-form-item>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>分类目录</span>
              </div>
              <div class="text item">
                <el-checkbox label="美食" name="type"></el-checkbox>
              </div>
              <div class="text item">
                <el-checkbox label="地推活动" name="type"></el-checkbox>
              </div>
              <div class="text item">
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              </div>
              <div class="text item">
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </div>
            </el-card>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import MainEditor from '../editor.md/MainEditor'
export default {
  // 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
  name: 'post-edit',
  components: {
    MainEditor
  },
  methods: {
    log (arg1 = 'log', ...logs) {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach(e => {
          console.log(e)
        })
        console.groupEnd()
      }
    },
    xx () {
      console.log(this.$refs.editor.getMarkdown())
    }
  }
}
</script>
<style lang="scss" scoped>
.clearfix {
  height: 2px;
  line-height: 2px;
}
.box-card{
  color: #606266;
  font-size: 14px;
}
</style>
