<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    .page {
      width: 1350px;
      margin: auto;
    }
  </style>
</head>
<body>
  <div id="app">
    <app-head>
      <app-nav :list="navList"></app-nav>
    </app-head>

    <div class="page">
      <router-view></router-view>
    </div>
  </div>

  <script src="js/build.js"></script>
</body>
</html>