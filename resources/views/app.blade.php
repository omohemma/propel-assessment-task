<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Propel | Profile</title>

    <link href="{{URL::asset('favicon.png')}}" rel="shortcut icon" type="image/x-icon">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Luxurious+Script&display=swap" rel="stylesheet">


    @vite('resources/css/app.css')
</head>
<body class="antialiased">
    <div id="app"></div>
    @vite('resources/js/app.js')
</body>
</html>
