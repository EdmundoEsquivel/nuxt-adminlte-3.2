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
                    <strong>Vamos a ganar</strong>
                  </h1>
                  <p>SUI - Sistema Unico de Información</p>
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
                      placeholder="Nombre de Usuario"
                      class="form-username form-control"
                      id="email"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="form-password">Password</label>
                    <input
                      type="password"
                      name="pass"
                      placeholder="Contraseña"
                      class="form-password form-control"
                      id="password"
                      v-model="password"
                    />
                  </div>
                  <button type="submit" class="btn" id="login">
                    Ingresar!
                  </button>
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
export default {
  layout: "loginTemplate",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      console.log("esta dando click");
      this.$axios
        .post('/api/users', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {},
};
</script>
