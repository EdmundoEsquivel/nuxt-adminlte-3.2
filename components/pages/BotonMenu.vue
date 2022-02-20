<template>
  <li class="nav-item">
    <a :href="link" :class="status">
      <i :class="icon"></i>
      <p>{{ nameMenu }}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: 'BotonMenu',
  props: ['nameMenu','status','link','icon'],
};
</script>
