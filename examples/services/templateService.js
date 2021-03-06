const baseTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <base href="/">
    <link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Bootstrap 3.3.7 -->
    <link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <!-- Theme style -->
    <link href="//cdn.bootcss.com/admin-lte/2.3.11/css/AdminLTE.min.css" rel="stylesheet">
    <link href="//cdn.bootcss.com/admin-lte/2.3.11/css/skins/_all-skins.min.css" rel="stylesheet">
    <style>
      body {
        padding: 20px;
      }
    </style>
  </head>
  <body>
  {{htmlCode}}
  <script src="//cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
  <script src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="//cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  <script src="lib/vue-lte-ui.js"></script>
  <script>
    {{jsCode}}
  </script>
  </body>
</html>
`;

export const templateService = {
  buildHtmlForPreview(htmlCode, jsCode) {
    let html = baseTemplate;
    return html.replace('{{htmlCode}}', htmlCode).replace('{{jsCode}}', jsCode);
  }
};
