<!DOCTYPE html>
<html lang="en">
<head>
  <title>tenzer</title>
  <meta charset="UTF-8">
  <meta name="description" content="tenzer">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  
  <meta name="apple-mobile-web-app-capable" content="yes">

  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <div id="app" :class="{ grid: isActiveGrid }">
    <router-view></router-view>
  </div>

  <script src="js/app.js"></script>
</body>
</html>