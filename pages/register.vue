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
                  <p>Registro de usuarios</p>
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
                      >
                        <input
                          type="text"
                          name="email"
                          placeholder="Nombre de Usuario"
                        
                          class="form-control"
                          :class="{
                            'border border-danger boder-solid': errors[0],
                          }"
                          id="email"
                          v-model="email"
                          
                        />
                        <RevealText> 
                        <p class="text-xs text-danger mt-1">{{ errors[0] }}</p>
                        </RevealText>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label class="sr-only" for="form-password"
                        >Password</label
                      >
                      <ValidationProvider
                        rules="required|min:6"
                        v-slot="{ errors }"
                      >
                        <input
                          type="password"
                          name="pass"
                          placeholder="Contraseña"
                          :class="{
                            'border border-danger boder-solid': errors[0],
                          }"
                          class="form-password form-control"
                          id="password"
                          v-model="password"
                        />
                        <RevealText> 
                        <p class="text-xs text-danger mt-1">{{ errors[0] }}</p>
                        </RevealText> 
                      </ValidationProvider>
                    </div>
                    <button type="submit" class="btn" id="login">
                      Ingresar!
                    </button>
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
        const response = await this.$axios.post("/api/users", {
          email: this.email,
          password: this.password,
        });

        this.$store.commit("SET_USER", response.data);
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
