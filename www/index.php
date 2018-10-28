<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/news">news</router-link>

    <router-view></router-view>
  </div>

  <script src="js/build.js"></script>
</body>
</html>