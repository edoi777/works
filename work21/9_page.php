<?php include 'builder/header.php'; ?>
        <main>
            <div class="wrapper">
   			<?php include 'builder/title_v4.php'; ?>
   			<div class="search_order_block">
   				<input type="text" placeholder="Номер заказа">
   				<input type="text" placeholder="Наименование заказа">
   				<button>Искать</button>
   			</div>
   			<div class="sortirovka__order">
   				<a href="#" class="active">Наименование зказа</a>
   				<a href="#">Статус заказа</a>
   				<a href="#">Дополнительно</a>
   			</div>
   			<?php include 'builder/order-item.php'; ?>
   			<?php include 'builder/pagination.php'; ?>
            </div><!-- END .wrapper -->
        </main>


<?php include 'builder/footer.php'; ?>
<link rel="stylesheet" href="css/9_page.css">
</body>
</html>