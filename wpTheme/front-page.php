<?php

/**
 * Template Name: Front Page Template
 *
 * Description: A template for the front-page of your website
 * for this theme. 
 *
 */
?>
<!DOCTYPE html>
<html lang='<?php language_attributes(); ?>'>

<head>
    <meta http-equiv='content-type' content='text/html;charset=utf-8' charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title><?php wp_title('|', true, 'right'); ?></title>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <!-- Punto de montaje para la aplicacion de react -->
    <div id="root"></div>

    <?php wp_footer(); ?>
</body>

</html>