<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handleClick">点击</button>

    <van-button type="info">信息按钮</van-button>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
      渐变色按钮
    </van-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      const params = {
        username: "xupengpeng",
        password: "7k5458"
      };
      // 进行接口请求
      this.$api.postAccountLogin({ params }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  h1 {
    font-size: 36px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
