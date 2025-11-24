
<html>
<head>
  <title>Subject List Component</title>
</head>
<body>

  <div id="root"></div>

  <script>
    // Functional Component in plain JavaScript
    function SubjectList() {
      return(
        <h2>Subjects</h2>
        <ul>
          <li>Mathematics</li>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Biology</li>
          <li>Computer Science</li>
          <li>English</li>
        </ul>
      );
    }

    // Render into the webpage
    document.getElementById("root").innerHTML = SubjectList();
  </script>

</body>
</html>
