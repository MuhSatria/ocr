<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Chat Message
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // computed: {
  //   title () {
  //     console.log(this.$route)
  //     let currentPath = this.$route.fullPath
  //     if (currentPath === '/') return 'Chat Message'
  //     else if (currentPath === '/chat') return 'Chat'
  //     else if (currentPath === '/auth') return 'Login'
  //   }
  // }
}
</script>
