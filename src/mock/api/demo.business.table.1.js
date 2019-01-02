export default [
  {
    path: '/api/demo/business/table/1/fetch.*',
    method: 'get',
    handle ({ params, Repeat }) {
      let { size } = params
      return {
        code: 0,
        msg: '获取数据成功',
        data: {
          page: {
            total: 1000
          },
          list: Repeat(size, {
            'title': '@cparagraph(1, 3)',
            'author': '@cname',
            'category': '自学教程',
            'tag': '-',
            'comment': '-',
            'modified': '@datetime',
            'pic': 'https://picsum.photos/400/200/?image=@integer(1,960)'
          })
        }
      }
    }
  }
]
