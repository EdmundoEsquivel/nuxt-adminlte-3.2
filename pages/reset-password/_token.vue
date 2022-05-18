<template>
  <div>
    <div class="top-content">
      <div class="inner-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3 form-box">
              <div class="form-top">
                <div class="form-top-left">
                  <h3 style="margin-bottom: -5px; color: #ffffff">
                    <strong>Ingresa tu nueva contraseña</strong>
                  </h3>
                  <p>Welcome back USER_MIL_HERE.</p>
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
                    <label class="sr-only" for="form-username">Password</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ingresa tu nueva contraseña"
                      class="form-username form-control"
                      id="password"
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
const moment =require ('moment')
export default {
  layout: "loginTemplate",
  async asyncData({ $axios, params, redirect }) {
    try {
      console.log(params.token);
      const { data } = await $axios.get(`/api/users/tokens/${params.token}`);
      if (
        moment() > moment(data.resetPasswordTokenExpiration) 
      ) {
        redirect("/");
      }
      // console.log(moment())
      console.log(data.resetPasswordTokenExpiration);

      // return {
      //   user: data,
      // };
    } catch (err) {
      if (err) redirect("/");
      // console.log(err)
    }
  },
};
</script>

<style></style>
