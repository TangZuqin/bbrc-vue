<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="javascript:void(0)"><i class="fa fa-dashboard">数据门户</i></a></li>
      <li class="active">查询</li>
  </ol>
  <section class="content container-fluid">
  <div class="row">
   <div class="col-md-3">
     <a href="starter0.html" class="btn btn-primary btn-block margin-bottom">重新检索</a>
     <div class="box box-solid">
       <div class="box-header with-border">
         <h3 class="box-title">查询条件</h3>

         <div class="box-tools">
           <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
           </button>
         </div>
       </div>
       <div class="box-body no-padding">
        <ul class="sidebar-menu" data-widget="tree">
         <li class="treeview">
          <a href="javascript:void(0)" id="search-btn">
           <i class="fa fa-refresh"></i>
            <span>刷新</span>
        </a>

         </li>
          <li class="treeview">
            <a href="javascript:void(0)" id="diseaseTypeMenu">
              <i class="fa fa-files-o"></i>
              <span>诊断</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <small class="label pull-right bg-light-blue">10</small>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><select id="diseaseType" class="form-control select2" multiple="multiple" data-placeholder="请选择诊断描述 " style="width: 100%;" data-tags="true" data-data=''>
            <option value=""></option>
                        </select></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="javascript:void(0)" id="sampleSetMenu">
              <i class="fa fa-pie-chart"></i>
              <span>样本集</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <small class="label pull-right bg-yellow">16</small>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><select id="sampleCollection" class="form-control select2" multiple="multiple" data-placeholder="请选择样本集" style="width: 100%;">
              <option value=""></option>
          </select></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="javascript:void(0)" id="ageMenu">
              <i class="fa fa-bullseye"></i>
              <span>年龄</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <small class="label pull-right bg-red"></small>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><select id="age" class="form-control select2" multiple="multiple" data-placeholder="请选择年龄" style="width: 100%;"></select></li>
            </ul>
          </li>

          <li class="treeview">
            <a href="javascript:void(0)" id="genderMenu">
              <i class="fa fa-venus-mars"></i>
              <span>性别</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <small class="label pull-right bg-red"></small>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><select id="sex" class="form-control select2" multiple="multiple" data-placeholder="请选择性别" style="width: 100%;"></select></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="javascript:void(0)" id="materialTypeMenu">
              <i class="fa fa-edit"></i> <span>样本类型</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <small class="label pull-right bg-blue">8760</small>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><select id="materialType" class="form-control select2" multiple="multiple" data-placeholder="请选择样本类型" style="width: 100%;">                                     <option value=""></option>
          </select></li>
            </ul>
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
      <div class="col-md-6">
        <div class="box-body" id="canvasAge" style="width: 360px;height:240px;">
        </div>
      </div>

      <div class="col-md-6">
              <div class="box-body" id="canvasSex" style="width: 360px;height:240px;">
              </div>
          </div>
      <div class="col-md-6">
            <div class="box-body" id="canvasMeterialtype" style="width: 360px;height:450px;">
            </div>
        </div>
      <div class="col-md-6">
              <div class="box-body" id="canvasDiseasetype" style="width: 360px;height:450px;">
              </div>
      </div>
      <div class="col-md-12" id="totaltabel">
          <div class="box box-danger">
              <div class="box-header with-border">
                <i class="fa fa-th"></i>
                  <h3 class="box-title">机构样本数据统计</h3>
                  <div class="box-tools pull-right">
                      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                      <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                  </div>
              </div>
              <div class="box-body">
                  <table class="table table-bordered table-hover table-condensed" style="margin-bottom: 0;">
                      <thead>
                          <tr id="head" class="active">
                          </tr>
                      </thead>
                      <tbody id="templatesTable" class="templateNode">
                      </tbody>
                  </table>
                  <table id="viewHead">
                      <tr id="viewNode" class="c-tr">
                          <td class="n-id" nowrap><a href="javascript:;" data-toggle="modal" data-target="#myModal"></a></td>
                          <td class="n-name" nowrap></td>
                          <td class="n-zname" nowrap></td>
                          <td class="n-username" nowrap></td>
                      </tr>
                  </table>
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
  name: 'DataPortal'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
