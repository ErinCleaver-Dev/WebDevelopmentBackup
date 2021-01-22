<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container"> 
            <nav>
                <ul>
                    <li><a href="index.html" >Main Page</a></li>
                    <li><a href="about.html">About US</a></li>
                    <li><a href="registration.html">Create New Profile</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li id="contctus" class="disabled"><a href="contactus.html">Contact US</a></li>
                </ul>
            </nav>
            <img class="logo" src="Logo.jpg">
            <h4>
                <p class="companyName">Freshly Brewed Coffie</p>
            </h4>

            <p><span>Name:</span> <?php echo $_GET["name"]; ?></p>
            <p>Email: <?php echo $_GET["email"]; ?> </p>
            <p>Phone: <?php echo $_GET["phone"]; ?></p>
            <p>Address: <?php echo $_GET["address"]; ?></p>

    </div>
</body>
</html>