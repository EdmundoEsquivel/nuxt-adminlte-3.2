<template>
  <div>
    <nuxt class="content-wrapper" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "assets/js/jquery-1.11.1.min.js", body: true },
        { src: "assets/bootstrap/js/bootstrap.min.js", body: true },
        { src: "assets/js/jquery.backstretch.min.js", body: true },
        { src: "assets/js/scripts.js", body: true },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:400,100,300,500",
        },
        { rel: "stylesheet", href: "assets/bootstrap/css/bootstrap.min.css" },
        {
          rel: "stylesheet",
          href: "assets/font-awesome/css/font-awesome.min.css",
        },
        { rel: "stylesheet", href: "assets/css/form-elements.css" },
        { rel: "stylesheet", href: "assets/css/style.css" },
      ],
    };
  },
};
</script>
