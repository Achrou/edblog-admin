<template>
  <el-form
    :inline="true"
    :model="form"
    :rules="rules"
    ref="form"
    size="mini"
    style="margin-bottom: -18px;">

    <el-form-item label="" prop="type">
      <el-select
        v-model="form.type"
        placeholder="请选择日期"
        style="width: 120px;">
        <el-option label="全部日期" value="1"/>
        <el-option label="2018-12-29" value="2"/>
        <el-option label="状态 3" value="3"/>
        <el-option label="状态 4" value="4"/>
        <el-option label="状态 5" value="5"/>
      </el-select>
    </el-form-item>
    <el-form-item label="" prop="type">
      <el-select
        v-model="form.type"
        placeholder="请选择分类目录"
        style="width: 120px;">
        <el-option label="所有分类目录" value="1"/>
        <el-option label="状态 2" value="2"/>
        <el-option label="状态 3" value="3"/>
        <el-option label="状态 4" value="4"/>
        <el-option label="状态 5" value="5"/>
      </el-select>
    </el-form-item>

    <el-form-item label="" prop="note">
      <el-input
        v-model="form.note"
        placeholder="请输入标题"
        style="width: 200px;"/>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="handleFormSubmit">
        <d2-icon name="search"/>
        筛选
      </el-button>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleFormReset">
        <d2-icon name="refresh"/>
        重置
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        type: '1',
        user: 'FairyEver',
        key: '',
        note: ''
      },
      rules: {
        type: [ { required: true, message: '请选择一个状态', trigger: 'change' } ],
        user: [ { required: true, message: '请输入用户', trigger: 'change' } ]
      }
    }
  },
  methods: {
    handleFormSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          this.$notify.error({
            title: '错误',
            message: '表单校验失败'
          })
          return false
        }
      })
    },
    handleFormReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
