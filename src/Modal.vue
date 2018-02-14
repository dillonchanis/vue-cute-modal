<script>
import CuteModal from './index'

export default {
  name: 'cute-modal',
  props: {
    bodyClass: {
      type: String
    },
    containerClass: {
      type: String
    },
    footerClass: {
      type: String
    },
    headerClass: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    overlayClass: {
      type: String
    },
    transition: {
      type: String
    },
    width: {
      type: String
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    CuteModal.event.$on('toggle', this.toggle)
  },
  methods: {
    hide (name) {
      this.$emit('cute:hide')
      this.isOpen = false
    },

    toggle (name) {
      if (this.name === name) {
        this.$emit('cute:toggle')
        this.isOpen = !this.isOpen
      }
    }
  },
  render (h) {
    if (!this.isOpen) return

    const {
      transition,
      overlay,
      container,
      header,
      body,
      footer,
      width
    } = this.$cuteModal.options()

    return (
      <transition name={this.transition || transition}>
        <div class='cute-modal'>
          <div class={this.overlayClass || overlay} on-click={this.hide} />
          <div class={this.containerClass || container}
            style={{ width: this.width || width }}>
            {
              this.$slots.header
                ? (<header class={this.headerClass || header}>{this.$slots.header}</header>)
                : null
            }

            <div class={this.bodyClass || body}>
              {this.$slots.default}
            </div>

            {
              this.$slots.footer
                ? (<footer class={this.footerClass || footer}>{this.$slots.footer}</footer>)
                : null
            }
          </div>
        </div>
      </transition>
    )
  }
}
</script>

<style lang="scss" scoped>
$padding: 0.5rem 1rem;
$border: 1px solid #ccc;

/* Default Styles */
.cute-modal,
.cute-modal__overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.cute-modal {
  overflow: auto;

  &__body {
    padding: 0.75rem 1rem;
    background-color: #f1f5f8;
  }

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    border: 1px solid #dae1e7;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 40px 0 rgba(62,57,107,0.07), 0 2px 9px 0 rgba(62,57,107,0.06);
    z-index: 9999;
  }

  &__footer {
    padding: $padding;
  }

  &__header {
    padding: $padding;
    background-color: #fff;
  }

  &__overlay {
    background-color: #333;
    opacity: 0.25;
    z-index: 9990;
  }
}

/* Default Transition */
.cm-enter {
  opacity: 0;
}

.cm-leave-active {
  opacity: 0;
}

.cm-enter .cute-modal,
.cm-leave-active .cute-modal {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
