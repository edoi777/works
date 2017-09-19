<?php include 'builder/header.php'; ?>
<main>
<div class="wrapper products_wrapper">
  <?php include 'builder/title_v3.php'; ?>
  <?php include 'builder/sidebar_v1.php'; ?>
  <div class="after_sidebar_wrapper">
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/pruduct_cart_v_1_fill_heart.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>
    <?php include 'builder/product_cart_v_1.php'; ?>

    <div class="bottom_wrapper">
      <?php include 'builder/pagination.php'; ?>
      <div class="products_size">
        <p>Кол-во товаров на странице:</p>
        <select>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        </div><!-- END .product_size -->
        </div><!-- END .bottom_wrapper -->
        </div><!-- END .after_sidebar_wrapper -->
        </div><!-- END .wrapper -->
        <?php include 'builder/slider_marks.php'; ?>
                        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
                <link rel="stylesheet" href="css/slider_marks.css">
                
                <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
        <script type="text/javascript" src="js/slider_marks.js"></script>
        <?php include 'builder/news_block.php'; ?>
        <?php include 'builder/description_footer_block.php'; ?>
        </main>
        <?php include 'builder/footer.php'; ?>
        <script src="js/4_page.js"></script>
      </body>
    </html>