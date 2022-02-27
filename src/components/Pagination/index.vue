/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div class="pagination" >
    <button :disabled="pageNo==1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-if="startNumEndNum.start >=2" @click="$emit('getPageNo', 1)" :class="{active: pageNo==1}">1</button>
    <button v-if="startNumEndNum.start >2">···</button>
    <span v-for="page in startNumEndNum.end" :key="page" >
      <button  v-if="page>=startNumEndNum.start" @click="$emit('getPageNo', page)" :class="{active: pageNo==page}">{{page}}</button>
    </span>
    <button v-if="(totalPage - startNumEndNum.end) >1">···</button>
    <button v-if="totalPage !== startNumEndNum.end" @click="$emit('getPageNo', totalPage)" :class="{active: pageNo==totalPage}">{{totalPage}}</button>
    <button :disabled="pageNo==totalPage"  @click="$emit('getPageNo', pageNo + 1)">下一页</button>
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize)
    },
    startNumEndNum () {
      let start = 0; let end = 0
      if (this.continues > this.totalPage) {
        start = 1
        end = this.totalPage
      } else {
        if (this.pageNo < (this.continues / 2)) {
          start = 1
          end = start + this.continues - 1
        } else if ((this.totalPage - this.pageNo) < (this.continues / 2)) {
          end = this.totalPage
          start = end - this.continues + 1
        } else {
          start = this.pageNo - parseInt(this.continues / 2)
          end = this.pageNo + parseInt(this.continues / 2)
        }
      }
      return { start, end }
    }
  }
}
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
