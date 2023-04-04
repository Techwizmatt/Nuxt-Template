<template>
  <div>
    <v-app-bar ref="navbar" class="navbar transparent" color="transparent" elevation="0" :height="navHeight">
      <div class="px-4 ml-4 mr-12 d-flex align-center">
        <unixity-logo-text width="80px" class="show-cursor" @click="doNavigate('/')"></unixity-logo-text>
      </div>

      <div class="ml-16 hidden-md-and-down" v-if="!searchDrawer">
        <span class="ml-2" v-for="(item, indexA) in navigation" :key="indexA">
          <span v-if="'children' in item">
            <v-menu open-on-hover class="rounded-0">
              <template v-slot:activator="{ props, isActive }">
                <v-btn variant="outlined" v-bind="props" :class="isActive ? 'rounded-b-0 nav-btn' : 'nav-btn'">
                  <span>{{ item.title }}</span>
                </v-btn>
              </template>

              <v-list elevation="0" :class="navTransparent ? 'rounded-0 child-nav-list rounded-be-lg' : 'scrolled rounded-0 child-nav-list rounded-be-lg'" style="border-left: solid thin;">
                <v-list-item v-for="(childrenItem, indexB) in item.children" :key="indexB">
                  <v-list-item-title class="show-cursor child-nav-title" @click="doNavigate(item.to)">{{ childrenItem.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
          <span v-else>
            <v-btn class="nav-btn" variant="outlined" @click="doNavigate(item.to)">
              {{ item.title }}
            </v-btn>
          </span>

        </span>
      </div>


      <template v-slot:append>
        <div class="hidden-md-and-down">
          <v-btn variant="text" @click="doToggleSearchDrawer" class="mr-4">
            <span v-if="searchDrawer">
              Close
            </span>
            <span v-else>
              Search
            </span>
          </v-btn>
        </div>
        <div class="hidden-lg-and-up mr-2">
          <animated-menu-button @doClick="doToggleNavDrawer" :is-open="navDrawer"></animated-menu-button>
        </div>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="navDrawer" permanent location="right" color="background" :width="navDrawerWidth" style="top: 0 !important; height: 100% !important; border-left: 0 !important;">
      <template v-slot:prepend>
        <v-sheet :height="navHeight" width="100%" color="background"></v-sheet>
      </template>
      <div>
        <v-expansion-panels variant="accordion">
          <v-divider :thickness="2" class="border-opacity-100"></v-divider>
          <v-expansion-panel v-for="(item, indexA) in navigation" :key="indexA" class="border-0" color="background" bg-color="background" elevation="0">
            <v-expansion-panel-title v-if="'children' in item" expand-icon="plus" collapse-icon="minus">
              {{ item.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-title v-else expand-icon="arrow-right" disabled @click="doNavigate(item.to)">
              {{ item.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="scrolled" v-if="'children' in item">
              <v-list elevation="0" style="border-left: solid thin;">
                <v-list-item v-for="(childrenItem, indexB) in item.children" :key="indexB">
                  <v-list-item-title class="show-cursor child-nav-title" @click="doNavigate(item.to)">{{ childrenItem.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
            <v-divider :thickness="2" class="border-opacity-100"></v-divider>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="full-width" style="position: absolute; bottom: 0;">
        <div class="d-inline-flex justify-center align-center full-width">
          <v-form @submit.prevent="doSearch">
            <v-text-field class="mx-2" label="Search" variant="outlined" v-model="searchQuery"></v-text-field>
            <v-btn variant="outlined" class="mb-5 mx-2 rounded" style="width:54px; height: 54px;" icon="magnifying-glass" type="submit"></v-btn>
          </v-form>
        </div>
      </div>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="searchDrawer" permanent location="top" color="background" width="100%" style="top: 0 !important; height: 200px !important;">
      <div class="full-width" style="position: absolute; bottom: 0;">
        <v-form @submit.prevent="doSearch">
          <v-row class="mx-4 justify-center" align="center">
            <v-col>
              <v-text-field class="full-width" label="Search" variant="outlined" v-model="searchQuery"></v-text-field>
            </v-col>
            <v-col md="2">
              <v-btn variant="outlined" block class="pa-6 mb-5" type="submit">Search</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  data: () => ({
    navTransparent: true,
    navDrawer: false,
    navHeight: 80,
    navDrawerWidth: 400,
    searchDrawer: false,
    logoColor: 'white',
    searchQuery: String(),
    navigation: [
      {
        title: 'About',
        icon: '',
        to: '/about'
      },
      {
        title: 'Children',
        icon: '',
        to: '',
        children: [
          {
            title: 'Testing long title',
            icon: '',
            to: ''
          },
          {
            title: 'Test B',
            icon: '',
            to: ''
          },
        ]
      }
    ]
  }),
  mounted () {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        this.$refs.navbar.$el.classList.add('scrolled')
        this.navTransparent = false
      } else {
        this.$refs.navbar.$el.classList.remove('scrolled')
        this.navTransparent = true
      }
    }

    window.onresize = () => {
      this.doScreenSizing()
    }

    this.doScreenSizing()
  },
  methods: {
    doScreenSizing () {
      this.navDrawerWidth = window.innerWidth < 600 ? window.innerWidth : 400

      if (this.navDrawer) {
        this.navDrawer = (window.innerWidth < 1264)
      }

      if (this.searchDrawer) {
        this.searchDrawer = !(window.innerWidth < 1264)
      }
    },
    doToggleNavDrawer () {
      this.navDrawer = !this.navDrawer
    },
    doToggleSearchDrawer() {
      this.searchDrawer = !this.searchDrawer
    },
    async doNavigate (to) {
      await navigateTo({ path: to })
    },
    doSearch () {
      alert(`This would search for: ${this.searchQuery}`)
    }
  }
}
</script>

<style scoped lang="scss">

.transparent {
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
}

.child-nav-list {
  background-color: transparent !important;
  transition: background-color 0.2s ease-in-out;
}

.scrolled {
  background-color: rgb(var(--v-theme-background)) !important; /* replace with your theme's background color */
}

.child-nav-title:hover {
  text-decoration: underline;
}

.v-expansion-panel-title--active > .v-expansion-panel-title__overlay{
  opacity: 0 !important;
}
</style>