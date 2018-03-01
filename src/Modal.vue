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
    height: {
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
    hide () {
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
    const {
      body,
      container,
      footer,
      header,
      height,
      overlay,
      transition,
      width
    } = this.$cuteModal.options()

    return (
      <transition name={this.transition || transition}>
        {this.isOpen ? (
          <div>
            <div class={this.overlayClass || overlay} on-click={this.hide} />
            <div class='cute-modal'>
              <div class={this.containerClass || container}
                style={{ width: (this.width || width), height: (this.height || height) }}>
                {
                  this.$slots.header
                    ? (<header class={this.headerClass || header}>{this.$slots.header}</header>)
                    : null
                }

                <div class={this.bodyClass || body}>
                  {this.$slots.default}
                </div>

                {
                  this.$scopedSlots.footer
                    ? (<footer class={this.footerClass || footer}>{this.$scopedSlots.footer({ $hide: this.hide })}</footer>)
                    : null
                }
              </div>
            </div>
          </div>
        ) : null}
      </transition>
    )
  }
}
</script>

<style lang="scss" scoped>
/* Variables */
$padding: 0.5rem 1rem;
$border: 1px solid #ccc;
$transition: opacity 0.3s ease, transform 0.3s ease;

/* Default Styles */
.cute-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  &__body {
    height: 100%;
    padding: 0.75rem 1rem;
    background-color: #f1f5f8;
  }

  &__container {
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 10px 40px 0 rgba(62,57,107,0.07), 0 2px 9px 0 rgba(62,57,107,0.06);
    transition: all 0.3s ease;
  }

  &__footer {
    padding: $padding;
  }

  &__header {
    padding: $padding;
    background-color: #fff;
  }

  &__overlay {
    position: absolute;
    z-index: 9990;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }
}

/* Default Transition */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .cute-modal__container,
.modal-leave-active .cute-modal__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
