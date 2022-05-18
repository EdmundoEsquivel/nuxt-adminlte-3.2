<template>
  <div>
    <section v-if="$store.state.user">
      <div>Este es el perfil</div>
      <div>este es el correo: {{ $store.state.user.email }}</div>
    </section>
  </div>
</template>

<script>
export default {
  fetch({ store, redirect }) {
    if (
      !store.state.user ||
      (store.state.user && store.state.user.isAuthenticated === false)
    ) {
      return redirect("/");
    }
  },
  layout: "adminLte",
};
</script>
