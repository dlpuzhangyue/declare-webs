<template>
    <div id="Login">
        <van-uploader v-model="fileList" multiple :after-read="onRead"/>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        fileList: []
      }
    },
    created () {},
    methods: {
      onRead(file) {
        let params = new FormData(); //创建form对象
        params.append("photo", file.file);
        this.$xhr('upload',params).success(res => {
          console.log(res)
        }).error(err => {
          this.$message.error(err)
        })
      },
    },
  }
</script>
<style scoped></style>
