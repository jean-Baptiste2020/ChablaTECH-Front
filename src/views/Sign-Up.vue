<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div>
    <!-- Sign Up Image And Headings -->
    <div
      class="sign-up-header"
      style="background-image: url('images/bg3.webp')"
    >
      <div class="content">
        <h1 class="mb-5">S'inscrire</h1>
        <p class="text-lg">
          Utilisez ces formulaires impressionnants pour vous connecter ou créer
          un nouveau compte ChablaTech.
        </p>
      </div>
    </div>
    <!-- / Sign Up Image And Headings -->

    <!-- Sign Up Form -->
    <a-card
      :bordered="false"
      class="card-signup header-solid h-full"
      :bodyStyle="{ paddingTop: 0 }"
    >
      <template #title>
        <h5 class="font-semibold text-center">Inscrivez-vous avec</h5>
      </template>
      <div class="sign-up-gateways">
        <a-button>
          <img src="images/logos/logos-facebook.svg" alt="" />
        </a-button>
        <a-button>
          <img src="images/logos/logo-github.svg" alt="" />
        </a-button>
        <a-button>
          <img src="images/logos/Google__G__Logo.svg.png" alt="" />
        </a-button>
      </div>
      <p class="text-center my-25 font-semibold text-muted">Or</p>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [
                  { required: true, message: 'Veuillez saisir votre nom !' },
                ],
              },
            ]"
            placeholder="Nom"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: 'Veuillez saisir votre e-mail !' },
                ],
              },
            ]"
            placeholder="Email"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-5">
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Veuillez saisir votre mot de passe !',
                  },
                ],
              },
            ]"
            type="password"
            placeholder="Mot de passe"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            je suis d'accord avec les
            <a href="#" class="font-bold text-dark">Termes et conditions</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
          >
            S'INSCRIRE
          </a-button>
        </a-form-item>
      </a-form>
      <p class="font-semibold text-muted text-center">
        Vous avez déjà un compte?
        <router-link to="/sign-in" class="font-bold text-dark"
          >S'identifier</router-link
        >
      </p>
    </a-card>
    <!-- / Sign Up Form -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    // Handles input validation after submission.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>