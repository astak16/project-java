// components/spu-preview/index.js
import array from "../../miniprogram_npm/lin-ui/common/async-validator/validator/array";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
  },
  observers: {
    data(data) {
      if (!data) return
      if (!data.tags) return
      const tags = data.tags.split("$")
      this.setData({
        tags
      })
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    tags: Array
  },
  
  /**
   * 组件的方法列表
   */
  methods: {}
})
