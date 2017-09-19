<?php include 'builder/header.php'; ?>
        <main>
            <div class="wrapper">
            <?php include 'builder/title_v1.php'; ?>
                <form class="contacts_page__block">
                    <input type="text" placeholder="Ваше имя">
                    <input type="text" placeholder="Ваш e-mail">
                    <input type="text" placeholder="Тема">
                    <textarea cols="30" rows="10" placeholder="Введите текст сообщения"></textarea>
                    <div>
                        <div class="captcha">
                            <span>Введите число 5+5=</span>
                            <input type="text">
                        </div><!-- END .captcha -->
                        <button>Отправить</button>
                    </div>
                </form><!-- END .contacts_page__block -->
            </div><!-- END .wrapper -->
        </main>

  <?php include 'builder/footer.php'; ?>
          <link rel="stylesheet" href="css/contacts_page.css">
    </body>
</html>