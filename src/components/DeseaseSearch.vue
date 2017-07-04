<template>
  <div class="container">
    <div class="description" style="padding-top:20px">
      疾病搜索
    </div>
    <div class="form-group">
        <select id="diseaseType" class="form-control select2" multiple="multiple" data-placeholder="请选择诊断描述 " style="width: 100%;" ref="diseaseType">
      <option value=""></option>
  </select>
    </div>
  <div class="action">
  <a id="index-search" href="javascript:void(0)" class="btn btn-primary bg-blue">开始检索</a>
  </div>
</div>
</template>

<script>
import $ from 'jQuery'
export default {
  name: 'DeseaseSearch',
  created: function () {
    this.$nextTick(() => {
      function formatRepo (repo) {
        if (repo.loading) return repo.text
        var markup = "<div class='select2-result-repository clearfix'>" + "<div class='select2-result-repository__meta'>" + "<div class='select2-result-repository__title'>" + repo.text + '</div>'
        if (repo.description) {
          markup += "<div class='select2-result-repository__description'>" + repo.text + '</div>'
        }
        markup += "<div class='select2-result-repository__statistics'>" +
          "<div class='select2-result-repository__forks'><i class='fa fa-star'></i> " + repo.id + '</div>' +
        '</div>' +
        '</div></div>'
        return markup
      }
      function formatRepoSelection (repo) {
        return repo.text || repo.text
      }
      $('.select2').select2({
        ajax: { url: 'http://222.29.188.6/WebAPI/api/Condition/GetOption',
          dataType: 'json',
          delay: 100,
          data: function (params) {
            return {
              id: params.term,
              type: 'diseasetype',
              page: params.page
            }
          },
          processResults: function (data, params) {
            params.page = params.page || 1
            data = JSON.parse(data)
            var text = []
            for (var i = 0; i < 19; i++) { text.push(data.rows[i].text) } console.log(text)
            return {
              results: data.rows,
              pagination: {
                more: (params.page * 30) < data.total
              }
            }
          },
          cache: true
        },
        escapeMarkup: function (markup) { return markup },
        minimumInputLength: 1,
        templateResult: formatRepo,
        templateSelection: formatRepoSelection
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  background-color:rgba(255,255,255,.85);
  width:500px;
  height:240px;
  border-radius:3px;
  z-index: 1;
  .description {
    font-size: 18px;
    margin-bottom: 32px;
    font-weight: 600;
  }
  .action {
    margin-bottom: 32px;
  }
  .select2-result-repository { padding-top: 4px; padding-bottom: 3px; }
  .select2-result-repository__avatar { float: left; width: 60px; margin-right: 10px; }
  .select2-result-repository__avatar img { width: 100%; height: auto; border-radius: 2px; }
  .select2-result-repository__meta { margin-left: 70px; }
  .select2-result-repository__title { color: black; font-weight: bold; word-wrap: break-word; line-height: 1.1; margin-bottom: 4px; }
  .select2-result-repository__forks, .select2-result-repository__stargazers { margin-right: 1em; }
  .select2-result-repository__forks, .select2-result-repository__stargazers, .select2-result-repository__watchers { display: inline-block; color: #aaa; font-size: 11px; }
  .select2-result-repository__description { font-size: 13px; color: #777; margin-top: 4px; }
}
</style>
