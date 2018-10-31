<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>tenzer</title>
  <meta name="description" content="tenzer">
  <meta name="keywords" content="tenzer">
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <div id="app" :class="{ grid: isActiveGrid }">
    <router-view></router-view>
  </div>

  <script src="js/app.js"></script>
</body>
</html>