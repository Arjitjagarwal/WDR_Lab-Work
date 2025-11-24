<!DOCTYPE html>
<html>
<head>
  <title>Functional Component - Ordered List</title>
</head>
<body>

  <div id="root"></div>

  <script>
    // Functional Component (Plain JS)
    function OrderedListComponent() {
      return `
        <ol>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
          <li>Item Five</li>
        </ol>
      `;
    }

    // Render component into the page
    document.getElementById("root").innerHTML = OrderedListComponent();
  </script>

</body>
</html>
