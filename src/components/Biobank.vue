<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="starter.html"><i class="fa fa-dashboard"></i> 首页</a></li>
      <li class="active">生物银行</li>
    </ol>
    <section class="content container-fluid">
        <div class="row" id="main">
          <div class="col-md-3">
              <a href="starter0.html" class="btn btn-primary btn-block margin-bottom">重新检索</a>
              <div class="box box-solid">
                <div class="box-header with-border">
                 <i class="fa fa-list"></i>
                 <div class="box-tools">
                   <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                   </button>
                 </div>
                </div>
                <div class="box-body no-padding">
                 <div id="sample-menu">
                  <ul class="sidebar-menu" data-widget="tree">
                   <li v-for="(sampleSetItem,index) in sampleSetItems" :class="sampleSetItem.active+' treeview'" @click="makeActive(sampleSetItem,index)">
                    <a href="javascript:void(0)" id="search-btn">
                     <i class="fa fa-pie-chart"></i>
                     {{ sampleSetItem.text }}
                    </a>
                   </li>
                  </ul>
                 </div>
                </div>
              </div>
          </div>
            <div class="col-md-9">
              <div class="content-wrapper">
                 <invoice v-bind:data="sampleSetItemInfo"></invoice>
              </div>
            </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Biobank'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
