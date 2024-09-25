import find from "lodash.find";

export default {
  computed: {
    badgeExtraClasses: function () {
      if (!this.field.extraClasses) {
        return { foo: false };
      }

      return { [this.field.extraClasses]: true };
    },
  },
  methods: {
    displayValue: function () {
      if (this.field.useLabel) {
        let result = find(this.field.options, { value: this.field.value });
        if (result.label !== undefined) {
          return result.label;
        }
      }
      return this.field.value;
    },
  },
};
