<template>
  <div>
    <div class="top-content">
      <div class="inner-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3 form-box">
              <div class="form-top">
                <div class="form-top-left">
                  <h1 style="margin-bottom: -5px">
                    <strong>Recordar tu contraseña</strong>
                  </h1>
                  <p>sistema Vamos a Ganar, ingresa tu correo</p>
                </div>
                <div class="form-top-right">
                  <i class="fa fa-lock"></i>
                </div>
              </div>
              <div class="form-bottom">
                <div class="err" id="add_err" style="color: #fff"></div>
                <form
                  role="form"
                  @submit.prevent="submitForm"
                  class="login-form"
                >
                  <div class="form-group">
                    <label class="sr-only" for="form-username">Username</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ingresa tu correo"
                      class="form-username form-control"
                      id="email"
                      v-model="email"
                    />
                  </div>

                  <button type="submit" class="btn" id="login">
                    recordar contraseña!
                  </button>
                  <div style="padding-top: 20px">
                    <nuxt-link class="text-sm" style="color: white" to="login"
                      >ingresa con tu contraseña</nuxt-link
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  layout: "loginTemplate",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post("/api/users/resetPassword", {
          email: this.email,
        });
        console.log(response);
      } catch ({ response }) {
        swal({
          title: "Error!",
          text: response.data.message,
          icon: "error",
        });
      }s
    },
  },
};
</script>

<style></style>
