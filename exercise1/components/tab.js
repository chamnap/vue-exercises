Vue.component(
    'tab', 
    {
        template: `<div v-show="isActive"><slot></slot></div>`,
        data() {
          return {
            isActive: false
          };
        },
        props: {
            name: { required: true },
            selected: { default: false }
        },
        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        mounted() {
            this.isActive = this.selected;
        }
    }
)