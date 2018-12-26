<template>
  <div id="editor-md" class="main-editor">
    <textarea></textarea>
  </div>
</template>

<script>
import $script from 'scriptjs'
export default {
  name: 'EditDocMainEditor',
  props: {
    editorPath: {
      type: String,
      default: '/lib/editor.md/examples/'
    },
    editorConfig: {
      type: Object,
      default () {
        return {
          width: '100%',
          height: 510,
          path: '/lib/editor.md/lib/',
          codeFold: true,
          saveHTMLToTextarea: true,
          searchReplace: true,
          htmlDecode: 'style,script,iframe|on*',
          emoji: true,
          taskList: true,
          tocm: true,
          tex: true,
          flowChart: true,
          sequenceDiagram: true,
          imageUpload: true,
          imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
          imageUploadURL: 'examples/php/upload.php',
          onload: () => {
            // eslint-disable-next-line
            console.log('onload', this);
          }
        }
      }
    }
  },
  data () {
    return {
      editor: null
    }
  },
  created () {
  },
  mounted () {
    // async loading js dependencies
    // editormd depdend on jquery and zepto
    $script([
      `${this.editorPath}js/jquery.min.js`,
      `${this.editorPath}js/zepto.min.js`
    ], () => {
      $script(`/lib/editor.md/editormd.min.js`, () => {
        this.initEditor()
      })
    })
  },
  beforeDestroy () {
  },
  methods: {
    initEditor () {
      console.log(window.editormd)
      // eslint-disable-next-line
      this.$nextTick((editorMD = window.editormd) => {
        if (editorMD) {
          // Vue 异步执行 DOM 更新，template 里面的 script 标签异步创建
          // 所以，只能在 nextTick 里面初始化 editor.md
          this.editor = editorMD('editor-md', this.editorConfig)
        }
      })
    },
    getEditor: function () {
      return this.editor
    },
    watch: function () {
      return this.editor.watch()
    },
    unwatch: function () {
      return this.editor.unwatch()
    },
    previewing: function () {
      return this.editor.previewing()
    },
    getHTML: function () {
      return this.editor.getHTML()
    },
    getMarkdown: function () {
      return this.editor.getMarkdown()
    },
    setMarkdown: function (markdown) {
      return this.editor.setMarkdown(markdown)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-editor {
  width: 100%;
  height: 100%;
  margin-top: 20px;
}
</style>
