<template>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">
        <ol>
          <li><a href="/">Acceuil</a></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li>Blog Single</li>
        </ol>
        <h2>Blog Single</h2>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- ======= Blog Single Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-8 entries">
            <article class="entry entry-single">
              <div class="entry-img">
                <img
                  src="assets/img/blog/blog-1.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>

              <h2 class="entry-title">
                <router-link to="/blog-single"
                  >Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia</router-link
                >
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-person"></i>
                    <router-link to="/blog-single">John Doe</router-link>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-clock"></i>
                    <router-link to="/blog-single"
                      ><time datetime="2020-01-01"
                        >Jan 1, 2020</time
                      ></router-link
                    >
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-chat-dots"></i>
                    <router-link to="/blog-single">12 Commentaires</router-link>
                  </li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </p>

                <p>
                  Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                  reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
                  numquam nihil cumque odio. Et voluptate cupiditate.
                </p>

                <blockquote>
                  <p>
                    Et vero doloremque tempore voluptatem ratione vel aut.
                    Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                    autem quos.
                  </p>
                </blockquote>

                <p>
                  Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                  dicta inventore tempore provident voluptas mollitia aliquid.
                  Id repellendus quia. Asperiores nihil magni dicta est suscipit
                  perspiciatis. Voluptate ex rerum assumenda dolores nihil
                  quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut
                  at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum
                  exercitationem harum qui qui blanditiis neque. Iusto autem
                  itaque. Repudiandae hic quae aspernatur ea neque qui.
                  Architecto voluptatem magni. Vel magnam quod et tempora
                  deleniti error rerum nihil tempora.
                </p>

                <h3>Et quae iure vel ut odit alias.</h3>
                <p>
                  Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                  in qui quos fugit ut rerum atque. Optio provident dolores
                  atque voluptatem rem excepturi molestiae qui. Voluptatem
                  laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                  Voluptatum est libero eum nesciunt aliquid qui. Quia et
                  suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt
                  accusamus quia aut ratione aspernatur dolor. Sint harum
                  eveniet dicta exercitationem minima. Exercitationem omnis
                  asperiores natus aperiam dolor consequatur id ex sed.
                  Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                  minima sunt libero soluta sapiente in rem assumenda. Et qui
                  odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus
                  mollitia aut atque aut.
                </p>
                <img
                  src="assets/img/blog/blog-inside-post.jpg"
                  class="img-fluid"
                  alt=""
                />

                <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                <p>
                  Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                  porro amet nostrum. In assumenda quia quae a id praesentium.
                  Quos deleniti libero sed occaecati aut porro autem.
                  Consectetur sed excepturi sint non placeat quia repellat
                  incidunt labore. Autem facilis hic dolorum dolores vel.
                  Consectetur quasi id et optio praesentium aut asperiores eaque
                  aut. Explicabo omnis quibusdam esse. Ex libero illum iusto
                  totam et ut aut blanditiis. Veritatis numquam ut illum ut a
                  quam vitae.
                </p>
                <p>
                  Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                  enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                  nisi asperiores est veniam.
                </p>
              </div>

              <div class="entry-footer">
                <i class="bi bi-folder"></i>
                <ul class="cats">
                  <li><router-link to="/blog-single">Business</router-link></li>
                </ul>

                <i class="bi bi-tags"></i>
                <ul class="tags">
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>
            </article>
            <!-- End blog entry -->

            <div class="blog-author d-flex align-items-center">
              <img
                src="assets/img/blog/blog-author.jpg"
                class="rounded-circle float-left"
                alt=""
              />
              <div>
                <h4>Jane Smith</h4>
                <div class="social-links">
                  <a href="https://twitters.com/#"
                    ><i class="bi bi-twitter"></i
                  ></a>
                  <a href="https://facebook.com/#"
                    ><i class="bi bi-facebook"></i
                  ></a>
                  <a href="https://instagram.com/#"
                    ><i class="biu bi-instagram"></i
                  ></a>
                </div>
                <p>
                  Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum
                  sed possimus accusantium. Quas repellat voluptatem officia
                  numquam sint aspernatur voluptas. Esse et accusantium ut unde
                  voluptas.
                </p>
              </div>
            </div>
            <!-- End blog author bio -->

            <div class="blog-comments">
              <h4 class="comments-count">8 Commentaires</h4>

              <div id="comment-1" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                    <img src="assets/img/blog/comments-1.jpg" alt="" />
                  </div>
                  <div>
                    <h5>
                      <a href="">Georgia Reader</a>
                      <a href="#" class="reply"
                        ><i class="bi bi-reply-fill"></i> répondre</a
                      >
                    </h5>
                    <time datetime="2020-01-01">01 Jan, 2020</time>
                    <p>
                      Et rerum totam nisi. Molestiae vel quam dolorum vel
                      voluptatem et et. Est ad aut sapiente quis molestiae est
                      qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam
                      placeat ex qui. Sint qui facilis et.
                    </p>
                  </div>
                </div>
              </div>
              <!-- End comment #1 -->

              <div id="comment-2" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                    <img src="assets/img/blog/comments-2.jpg" alt="" />
                  </div>
                  <div>
                    <h5>
                      <a href="">Aron Alvarado</a>
                      <a href="#" class="reply"
                        ><i class="bi bi-reply-fill"></i> répondre</a
                      >
                    </h5>
                    <time datetime="2020-01-01">01 Jan, 2020</time>
                    <p>
                      Ipsam tempora sequi voluptatem quis sapiente non. Autem
                      itaque eveniet saepe. Officiis illo ut beatae.
                    </p>
                  </div>
                </div>

                <div id="comment-reply-1" class="comment comment-reply">
                  <div class="d-flex">
                    <div class="comment-img">
                      <img src="assets/img/blog/comments-3.jpg" alt="" />
                    </div>
                    <div>
                      <h5>
                        <a href="">Lynda Small</a>
                        <a href="#" class="reply"
                          ><i class="bi bi-reply-fill"></i> répondre</a
                        >
                      </h5>
                      <time datetime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Enim ipsa eum fugiat fuga repellat. Commodi quo quo
                        dicta. Est ullam aspernatur ut vitae quia mollitia id
                        non. Qui ad quas nostrum rerum sed necessitatibus aut
                        est. Eum officiis sed repellat maxime vero nisi natus.
                        Amet nesciunt nesciunt qui illum omnis est et dolor
                        recusandae. Recusandae sit ad aut impedit et. Ipsa
                        labore dolor impedit et natus in porro aut. Magnam qui
                        cum. Illo similique occaecati nihil modi eligendi.
                        Pariatur distinctio labore omnis incidunt et illum.
                        Expedita et dignissimos distinctio laborum minima
                        fugiat. Libero corporis qui. Nam illo odio beatae enim
                        ducimus. Harum reiciendis error dolorum non autem
                        quisquam vero rerum neque.
                      </p>
                    </div>
                  </div>

                  <div id="comment-reply-2" class="comment comment-reply">
                    <div class="d-flex">
                      <div class="comment-img">
                        <img src="assets/img/blog/comments-4.jpg" alt="" />
                      </div>
                      <div>
                        <h5>
                          <a href="">Sianna Ramsay</a>
                          <a href="#" class="reply"
                            ><i class="bi bi-reply-fill"></i> répondre</a
                          >
                        </h5>
                        <time datetime="2020-01-01">01 Jan, 2020</time>
                        <p>
                          Et dignissimos impedit nulla et quo distinctio ex
                          nemo. Omnis quia dolores cupiditate et. Ut unde qui
                          eligendi sapiente omnis ullam. Placeat porro est
                          commodi est officiis voluptas repellat quisquam
                          possimus. Perferendis id consectetur necessitatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- End comment reply #2-->
                </div>
                <!-- End comment reply #1-->
              </div>
              <!-- End comment #2-->

              <div id="comment-3" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                    <img src="assets/img/blog/comments-5.jpg" alt="" />
                  </div>
                  <div>
                    <h5>
                      <a href="">Nolan Davidson</a>
                      <a href="#" class="reply"
                        ><i class="bi bi-reply-fill"></i> répondre</a
                      >
                    </h5>
                    <time datetime="2020-01-01">01 Jan, 2020</time>
                    <p>
                      Distinctio nesciunt rerum reprehenderit sed. Iste omnis
                      eius repellendus quia nihil ut accusantium tempore.
                      Nesciunt expedita id dolor exercitationem aspernatur aut
                      quam ut. Voluptatem est accusamus iste at. Non aut et et
                      esse qui sit modi neque. Exercitationem et eos aspernatur.
                      Ea est consequuntur officia beatae ea aut eos soluta. Non
                      qui dolorum voluptatibus et optio veniam. Quam officia sit
                      nostrum dolorem.
                    </p>
                  </div>
                </div>
              </div>
              <!-- End comment #3 -->

              <div id="comment-4" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                    <img src="assets/img/blog/comments-6.jpg" alt="" />
                  </div>
                  <div>
                    <h5>
                      <a href="">Kay Duggan</a>
                      <a href="#" class="reply"
                        ><i class="bi bi-reply-fill"></i> répondre</a
                      >
                    </h5>
                    <time datetime="2020-01-01">01 Jan, 2020</time>
                    <p>
                      Dolorem atque aut. Omnis doloremque blanditiis quia eum
                      porro quis ut velit tempore. Cumque sed quia ut maxime.
                      Est ad aut cum. Ut exercitationem non in fugiat.
                    </p>
                  </div>
                </div>
              </div>
              <!-- End comment #4 -->

              <div class="reply-form">
                <h4>Laisser une réponse</h4>
                <p>
                  Votre adresse email ne sera pas publiée. Les champs
                  obligatoires sont marqué *
                </p>
                <form action="">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        placeholder="votre nom*"
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        name="email"
                        type="text"
                        class="form-control"
                        placeholder="Votre e-mail*"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col form-group">
                      <input
                        name="website"
                        type="text"
                        class="form-control"
                        placeholder="Votre site web"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col form-group">
                      <textarea
                        name="comment"
                        class="form-control"
                        placeholder="Votre commentaire*"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Poster un commentaire
                  </button>
                </form>
              </div>
            </div>
            <!-- End blog comments -->
          </div>
          <!-- End blog entries list -->

          <div class="col-lg-4">
            <div class="sidebar">
              <h3 class="sidebar-title">Search</h3>
              <div class="sidebar-item search-form">
                <form action="">
                  <input type="text" />
                  <button type="submit"><i class="bi bi-search"></i></button>
                </form>
              </div>
              <!-- End sidebar search formn-->

              <h3 class="sidebar-title">Catégories</h3>
              <div class="sidebar-item categories">
                <ul>
                  <li>
                    <a href="#">Générale <span>(25)</span></a>
                  </li>
                  <li>
                    <a href="#">Mode de vie <span>(12)</span></a>
                  </li>
                  <li>
                    <a href="#">Voyager <span>(5)</span></a>
                  </li>
                  <li>
                    <a href="#">Concevoir <span>(22)</span></a>
                  </li>
                  <li>
                    <a href="#">Créative<span>(8)</span></a>
                  </li>
                  <li>
                    <a href="#">Éducation <span>(14)</span></a>
                  </li>
                </ul>
              </div>
              <!-- End sidebar categories-->

              <h3 class="sidebar-title">Publications récentes</h3>
              <div class="sidebar-item recent-posts">
                <div class="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-1.jpg" alt="" />
                  <h4>
                    <router-link to="/blog-single"
                      >Nihil blanditiis at in nihil autem</router-link
                    >
                  </h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-2.jpg" alt="" />
                  <h4>
                    <router-link to="/blog-single"
                      >Quidem autem et impedit</router-link
                    >
                  </h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-3.jpg" alt="" />
                  <h4>
                    <router-link to="/blog-single"
                      >Id quia et et ut maxime similique occaecati
                      ut</router-link
                    >
                  </h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-4.jpg" alt="" />
                  <h4>
                    <router-link to="/blog-single"
                      >Laborum corporis quo dara net para</router-link
                    >
                  </h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-5.jpg" alt="" />
                  <h4>
                    <router-link to="/blog-single"
                      >Et dolores corrupti quae illo quod dolor</router-link
                    >
                  </h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              <!-- End sidebar recent posts-->

              <h3 class="sidebar-title">Tags</h3>
              <div class="sidebar-item tags">
                <ul>
                  <li><a href="#">Application</a></li>
                  <li><a href="#">CE</a></li>
                  <li><a href="#">Entreprise</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Concevoir</a></li>
                  <li><a href="#">Bureau</a></li>
                  <li><a href="#">Créative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Intelligente</a></li>
                  <li><a href="#">Des astuces</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>
              <!-- End sidebar tags-->
            </div>
            <!-- End sidebar -->
          </div>
          <!-- End blog sidebar -->
        </div>
      </div>
    </section>
    <!-- End Blog Single Section -->
    <script
      type="application/javascript"
      src="assets/vendor/bootstrap/js/bootstrap.bundle.js"
    ></script>
    <script
      type="application/javascript"
      src="assets/vendor/swiper/swiper-bundle.min.js"
    ></script>
    <script
      type="application/javascript"
      src="assets/vendor/purecounter/purecounter.js"
    ></script>
    <script
      type="application/javascript"
      src="assets/vendor/isotope-layout/isotope.pkgd.min.js"
    ></script>
    <script
      type="application/javascript"
      src="assets/vendor/glightbox/js/glightbox.min.js"
    ></script>
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
</style>