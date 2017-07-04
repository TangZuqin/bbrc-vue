<template>
  <div>
    <div class="row">
      <div class="hero">
      <div class="item">
        <div class="content">
          <DeseaseSearch></DeseaseSearch>
          <div class="container" style="background-color:rgba(255,255,255,.85);width:500px;height:240px;border-radius:3px;z-index: 1;">
            <div class="description" style="padding-top:20px">
              浏览样本库
            </div>
            <div class="sub header" style="align-items:center">
              目前收录北京市辖区16个样本库
            </div>
            <div class="action" style="padding-top:50px">
              <router-link :to="{ name: 'Bar'}" class="logo">
                <span class="btn btn-primary bg-blue">进入样本库</span>
              </router-link>
            </div>
          </div>
        </div>
        <img class="image" src="../assets/background.jpg" alt="">
    </div>
  </div>
</div>
</div>
</template>


<script>

import DeseaseSearch from './DeseaseSearch'
export default {
  name: 'Foo',
  components: {
    DeseaseSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .hero {
    .image{
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 80vh;
      object-fit: cover;
      max-height: 750px;
      min-height: 350px;
    }
    .item {
    position: relative;
    overflow: hidden;
      .content{
        // height: 600px;
        display: flex;
        align-items: center;
        height: 80vh;
        max-height: 750px;
        min-height: 350px;
      }
    }
  }
</style>
