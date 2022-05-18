<template>
  <li class="nav-item">
    <nuxt-link :to="link" :class="status">
      <i :class="icon"></i>
      <p>{{ nameMenu }}</p>
    </nuxt-link>
    
  </li>
</template>

<script>
export default {
  name: 'BotonMenu',
  props: ['nameMenu','status','link','icon'],
};
</script>
