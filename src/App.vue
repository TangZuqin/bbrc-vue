<template>
  <div id="app">
    <div class="wrapper">
      <img src="./assets/logo.png">
      <header class="main-header">
        <nav class="navbar navbar-static-top" role="navigation" style="background-color:#024a9e">
          <div class="navbar-custom-menu pull-left">
            <router-link :to="{ name: 'Foo'}" class="logo">
              <i class="fa fa-home"></i>首页
            </router-link>
          </div>
          <div class="navbar-custom-menu pull-left">
            <router-link :to="{ name: 'Bar'}" class="logo">
              <i class="fa fa-database"></i>数据门户
            </router-link>
          </div>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li class="dropdown user user-menu" >
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                  <span class="hidden-xs" >您好！请登陆</span>
                  <ul class="user_op">
                    <li>
                      <router-link :to="{ name: 'User',params: { id: 1}}"><i class="fa fa fa-user text-success"></i>个人空间</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name:'User',params: { id: 0}}"><i class="fa fa fa-sign-out text-danger"></i>退出</router-link>
                    </li>
                  </ul>
                </a>
            <!-- </router-link> -->
          </li>
        </ul>
        </div>
        </nav>
      </header>
      <div class="content-wrapper">
<!--
    <h1>Hello App!</h1>
    <p>
      <router-link :to="{ name: 'Foo'}">Go to foo</router-link>
      <router-link :to="{ name: 'Bar'}">Go to bar</router-link>
      <router-link :to="{ name: 'User', params: { id: 1}}">Go to User</router-link>
    </p> -->
    <router-view></router-view>
  </div>
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
      </div>
      <strong>Copyright &copy; 2016 <a href="#">北京市科学技术委员会</a>.</strong> All rights reserved 备案号:京ICP备09033005号.
    </footer>
  </div>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
.skin-blue{
  .wrapper {
    background-color: #fff;
    .main-header {
      .navbar{
        margin-left: 0px;
        .logo{
          background-color: #024a9e;
          border-right:1px solid;
          i{
            margin: 0 6px 6px 0;
          }
        }
      }
      .user:hover .user_op {
          top: 50px;
          opacity: 1;
        }
      .user_op {
        width: 100%;position: absolute;top: 0;
        left: 0px;opacity: 0;background: #fff;
        border: 1px solid #eee;
        transition: 0.5s all ease;
        i{
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
