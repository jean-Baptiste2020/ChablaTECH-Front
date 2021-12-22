<template>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">
        <ol>
          <li><a href="/">Acceuil</a></li>
          <li>Détails du Portfolio</li>
        </ol>
        <h2>Détails du Portfolio</h2>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <a-carousel autoplay>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                </div>
              </a-carousel>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Renseignements sur le projet</h3>
              <ul>
                <li><strong>Catégorie</strong>: création de sites web</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Date du projet</strong>: 01 Mars, 2020</li>
                <li>
                  <strong>URL du projet</strong>:
                  <a href="#">www.example.com</a>
                </li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Ceci est un exemple de détail de portefeuille</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->
  </main>
  <!-- End #main -->
  <!-- End #main -->
</template>

<script>
export default {};
</script>

<style>
@import url("../assets/css/style.css");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i");
@import url("../assets/vendor/bootstrap/css/bootstrap.min.css");
@import url("../assets/vendor/bootstrap-icons/bootstrap-icons.css");
@import url("../assets/vendor/remixicon/remixicon.css");
@import url("../assets/vendor/swiper/swiper-bundle.min.css");

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide img {
  color: #fff;
}
</style>