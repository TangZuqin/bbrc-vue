<template>
<div>
  <ol class="breadcrumb">
    <li><a href="starter0.html"><i class="fa fa-dashboard"></i> 首页</a></li>
    <li class="active">样本库</li>
  </ol>
  <section class="content">
    <div class="row">
      <div class="col-md-3">
        <a href="starter0.html" class="btn btn-primary btn-block margin-bottom">返回首页</a>
        <div class="box box-solid">
          <div class="box-header with-border">
            <h3 class="box-title">建立年份</h3>

            <div class="box-tools">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                  </button>
            </div>
          </div>
          <div class="box-body no-padding">
            <ul class="nav nav-pills nav-stacked">
              <li class="active"><a href="#"><i class="fa fa-inbox"></i> 1990年之前
                    <span class="label label-primary pull-right">3</span></a></li>
              <li><a href="#"><i class="fa fa-envelope-o"></i> 1991年至2000年<span class="label label-success pull-right">4</span></a></li>
              <li><a href="#"><i class="fa fa-file-text-o"></i> 2001年至2010年<span class="label label-info pull-right">5</span></a></li>
              <li><a href="#"><i class="fa fa-filter"></i> 2011年至今 <span class="label label-warning pull-right">6</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box box-solid">
          <div class="box-header with-border">
            <h3 class="box-title">规模</h3>
            <div class="box-tools">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                  </button>
            </div>
          </div>
          <div class="box-body no-padding">
            <ul class="nav nav-pills nav-stacked">
              <li><a href="#"><i class="fa fa-circle-o text-red"></i> &lt;10000<span class="label label-primary pull-right">2</span></a></li>
              <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> 10000 -100000<span class="label label-success pull-right">4</span></a></li>
              <li><a href="#"><i class="fa fa-circle-o text-light-blue"></i> &gt;100000<span class="label label-info pull-right">6</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">样本集</h3>
            <div class="box-tools pull-right">
              <div class="has-feedback">
                <input type="text" class="form-control input-sm" placeholder="搜索...">
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>
          <div class="box-body no-padding">
            <div class="table-responsive mailbox-messages">
              <section class="content container-fluid">
                <div id="box"></div>
              </section>
            </div>
          </div>
          <div class="box-footer no-padding">
            <div class="mailbox-controls">
              <button type="button" class="btn btn-default btn-sm"><i class="fa fa-refresh"></i></button>
              <div class="pull-right">
                1-50/200
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'Bar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
