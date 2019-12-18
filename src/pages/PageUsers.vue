<template>
  <q-page class="flex">
    <h5>Page User</h5>
    <div class="box-data">
      <croppa
        v-if="crop.value === 1"
        v-model="myCroppa"
        :width="113.4"
        :height="151.2"
        placeholder="Choose an image"
        :placeholder-font-size="0"
        :disable="false"
        :preview-white-space="false"
        >
      </croppa>
      <croppa
        v-else
        v-model="myCroppa"
        :width="151.2"
        :height="113.4"
        placeholder="Choose an image"
        :placeholder-font-size="0"
        :disable="false"
        :preview-white-space="false"
        >
      </croppa>
      <q-select v-model="crop" :options="options" label="Standard" />
      <!-- <div  @click="click">Klik</div> -->
      <q-btn @click="generateImage">Generate</q-btn>
      <br>
      <q-img :src="imgUrl"/>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      myCroppa: null,
      imgUrl: '',
      crop: '4 x 3',
      options: [
        {
          value: 1,
          label: '3 x 4'
        },
        {
          value: 2,
          label: '4 x 3'
        }
      ],
      size: false
    }
  },
  methods: {
    generateImage () {
      let url = this.myCroppa.generateDataUrl()
      if (!url) {
        alert('no img')
        return
      }
      this.imgUrl = url
    }
    // click () {
    //   debugger
    // }
    // changeFlag (e) {
    //   if (e) {
    //     console.log('masukk')
    //   } else {
    //     console.log('masukk')
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
.croppa-container
  background-color #f3f3f3
  // border 2px solid grey
  &:hover
    cursor pointer
.box-data
  // margin 50px 0
  margin auto
</style>
