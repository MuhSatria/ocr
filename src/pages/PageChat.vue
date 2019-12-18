<template>
  <q-page class="flex column">
    <!-- <h5>Page Chat</h5> -->
    <div class="label">Input Message</div>
    <div class="q-ma-md column col justify-end">
      <q-chat-message
        name="me"
        :text="['hey, how are you?']"
        sent
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <!-- <q-toolbar-title>Footer</q-toolbar-title> -->
        <q-form class="window-width">
          <q-input v-model="text" bg-color="white" placeholder="Label" dense>
            <template v-slot:after>
              <q-btn round dense flat icon="send" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
</style>
