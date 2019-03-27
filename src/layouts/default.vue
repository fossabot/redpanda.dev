<template lang="pug">
  v-app(:dark="darkMode")#top
    v-content
      v-container(fluid)
        v-layout(align-space-around justify-center column fill-height)
          nuxt
</template>

<script>
export default {
  name: 'RedpandaDev',
  data: () => ({
    darkMode: true
  })
}
</script>
