<template>
  <!-- Layout Header ( Navbar ) -->
  <a-layout-header style="position: fixed; width: 100%; z-index: 50">
    <div class="header-col header-brand">
      <h6>ChablaTech</h6>

      <!-- Trigger Button For Navigation Menu For Small Screens -->
      <a-button
        type="link"
        @click="collapseNav = collapseNav ? 0 : 1"
        class="btn-menu-trigger"
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </a-button>
      <!-- Trigger Button For Navigation Menu For Small Screens -->
    </div>
    <div class="header-col header-nav">
      <!-- Navigation Menu de l'interface Desktop -->
      <a-menu mode="horizontal" class="menu-large">
        <a-menu-item>
          <router-link
            to="/"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>Acceuil</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="this.$route.name == 'Home'">
          <router-link
            to="#about"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>A Propos</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="this.$route.name == 'Home'">
          <router-link
            to="#services"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>Services</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="this.$route.name == 'Home'">
          <router-link
            to="#portfolio"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>Portefolio</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="this.$route.name == 'Home'">
          <router-link
            to="#team"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>Equipes</span>
          </router-link>
        </a-menu-item>

        <a-menu-item>
          <router-link
            to="#recent-blog-posts"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>Blog</span>
          </router-link>
        </a-menu-item>

        <a-menu-item>
          <router-link
            to="/dashboard"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-muted"
                d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
                fill="#111827"
              />
              <path
                class="fill-muted"
                d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
                fill="#111827"
              />
              <path
                class="fill-muted"
                d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
                fill="#111827"
              />
            </svg>
            <span>Dashboard</span>
          </router-link>
        </a-menu-item>

        <a-menu-item>
          <router-link
            to="/profile"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-muted"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
                fill="#111827"
              />
            </svg>
            <span>Profile</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="this.$route.name != 'S\'identifier'">
          <router-link
            to="/sign-in"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-muted"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                fill="#111827"
              />
            </svg>
            <span>S'identifier</span>
          </router-link>
        </a-menu-item>
        <a-menu-item v-if="this.$route.name == 'S\'identifier'">
          <router-link
            to="/sign-up"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-muted"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                fill="#111827"
              />
            </svg>
            <span>S'inscrire</span>
          </router-link>
        </a-menu-item>
      </a-menu>
      <!-- / Navigation Menu For Large Screens -->

      <!-- Collapsible Navigation Menu For Small Screens -->
      <div class="menu-small">
        <!-- Collapsible Component For Navigation Menu For Small Screens -->
        <a-collapse v-model="collapseNav" accordion>
          <a-collapse-panel key="1">
            <!-- Navigation Menu pour les petits ecrans -->
            <a-menu mode="vertical">
              <a-menu-item>
                <router-link
                  to="/"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <span>Acceuil</span>
                </router-link>
              </a-menu-item>

              <a-menu-item v-if="this.$route.name == 'Home'">
                <router-link
                  to="#about"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <span>A Propos</span>
                </router-link>
              </a-menu-item>

              <a-menu-item v-if="this.$route.name == 'Home'">
                <router-link
                  to="#services"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <span>Services</span>
                </router-link>
              </a-menu-item>

              <a-menu-item v-if="this.$route.name == 'Home'">
                <router-link
                  to="#portfolio"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <span>Portefolio</span>
                </router-link>
              </a-menu-item>

              <a-menu-item v-if="this.$route.name == 'Home'">
                <router-link
                  to="#team"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <span>Equipes</span>
                </router-link>
              </a-menu-item>

              <a-menu-item>
                <router-link
                  to="/#recent-blog-posts"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <span>Blog</span>
                </router-link>
              </a-menu-item>

              <a-menu-item>
                <router-link
                  to="/dashboard"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-muted"
                      d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
                      fill="#111827"
                    />
                    <path
                      class="fill-muted"
                      d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
                      fill="#111827"
                    />
                    <path
                      class="fill-muted"
                      d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
                      fill="#111827"
                    />
                  </svg>
                  <span>Dashboard</span>
                </router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link
                  to="/profile"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-muted"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
                      fill="#111827"
                    />
                  </svg>
                  <span>Profile</span>
                </router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link
                  to="/sign-in"
                  class="nav-link"
                  @click="(e) => e.preventDefault()"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-muted"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                      fill="#111827"
                    />
                  </svg>
                  <span>S'identifier</span>
                </router-link>
              </a-menu-item>
            </a-menu>
            <!-- / Navigation Menu For Small Screens -->
          </a-collapse-panel>
        </a-collapse>
        <!-- / Collapsible Component For Navigation Menu For Small Screens -->
      </div>
      <!-- / Collapsible Navigation Menu For Small Screens -->
    </div>
    <div class="header-col header-btn">
      <a-dropdown>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">
            <a-icon type="flag" theme="outlined" /> Français
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="flag" theme="outlined" /> Anglais
          </a-menu-item>
          <a-menu-item key="3"> <a-icon type="flag" />Japonais </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          Traductions <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
  </a-layout-header>
  <!-- / Layout Header ( Navbar ) -->
</template>

<script>
export default {
  data() {
    return {
      // Collapse navigation value.
      // Binded model property for "Collapsible Navigation Menu" collapsed status .
      collapseNav: 0,
    };
  },
  methods: {
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link svg {
  margin-right: 5px;
  vertical-align: middle;
}
.nav-link span {
  vertical-align: middle;
}
.ant-menu-submenu-popup {
  width: 100%;
}
</style>