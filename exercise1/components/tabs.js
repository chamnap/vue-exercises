Vue.component('tabs', {
   template: `
    <div>
        <div class="tabs">
          <ul>
            <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
            </li>
          </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data() {
      return {
          tabs: []
      }  
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
               tab.isActive = (tab.href == selectedTab.href);
            });
        }
    },
    created() {
        this.tabs = this.$children;
    }
});