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
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form
                    role="form"
                    @submit.prevent="handleSubmit(submitForm)"
                    class="login-form"
                  >
                    <div class="form-group">
                      <label class="sr-only" for="form-username"
                        >Username</label
                      >
                      <ValidationProvider
                        rules="required|email"
                        v-slot="{ errors }"
                        name="Correo Electronico"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre de Usuario"
                          class="form-username form-control"
                          :class="{
                            'border border-danger boder-solid': errors[0],
                          }"
                          id="email"
                          v-model="email"
                        />
                        <p class="text-xs text-danger mt-1">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label class="sr-only" for="form-password"
                        >Password</label
                      >
                      <ValidationProvider
                        rules="required|min:6"
                        v-slot="{ errors }"
                        name="Contraseña"
                      >
                        <input
                          type="password"
                          name="pass"
                          placeholder="Contraseña"
                          class="form-password form-control"
                          :class="{
                            'border border-danger boder-solid': errors[0],
                          }"
                          id="password"
                          v-model="password"
                        />
                        <p class="text-xs text-danger mt-1">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>
                    <button type="submit" class="btn" id="login">
                      Ingresar!
                    </button>
                    <div style="padding-top: 20px">
                      <nuxt-link
                        class="text-sm"
                        style="color: white"
                        to="reset-password"
                        >Recordar Password</nuxt-link
                      >
                    </div>
                  </form>
                </ValidationObserver>
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
      password: "",
    };
  },
  fetch({ store, redirect }) {
    if (store.state.user) {
      return redirect("/");
    }
  },
  methods: {
    async submitForm() {
      // console.log("esta dando click");
      try {
        const response = await this.$axios.post("/api/users/login", {
          email: this.email,
          password: this.password,
        });

        // console.log(response)
        this.$store.commit("SET_USER", response.data);
        // this.$router.push({
        //   path: "/",
        //   // prefetch: "false",
        //   // replace: 'true'
        // });
        // fetch({ response, redirect });
        // if (response) {
        //   return redirect("/");
        // }
        this.$router.push("/");
        // return (location = "/");
      } catch ({ response }) {
        swal({
          title: "Error!",
          text: response.data.message,
          icon: "error",
        });
      }
    },
  },
  components: {},
};
</script>
