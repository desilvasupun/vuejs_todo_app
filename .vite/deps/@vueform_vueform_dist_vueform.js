import {
  Fragment,
  Teleport,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  getCurrentInstance,
  guardReactiveProps,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  toRefs,
  vModelCheckbox,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XSWAMETM.js";
import "./chunk-UURD7IY7.js";

// node_modules/@vueform/vueform/dist/vueform.mjs
var script$26 = {
  data() {
    return {
      merge: true,
      defaultClasses: {
        form: ""
      }
    };
  }
};
function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormElements = resolveComponent("FormElements");
  return openBlock(), createElementBlock(
    "form",
    {
      class: normalizeClass(_ctx.classes.form),
      onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.submit && _ctx.submit(...args), ["prevent"]))
    },
    [
      renderSlot(_ctx.$slots, "empty", { classes: _ctx.classes }, () => [
        _ctx.showMessages ? (openBlock(), createBlock(resolveDynamicComponent("FormMessages"), { key: 0 })) : createCommentVNode("v-if", true),
        _ctx.showErrors ? (openBlock(), createBlock(resolveDynamicComponent("FormErrors"), { key: 1 })) : createCommentVNode("v-if", true),
        _ctx.showLanguages ? (openBlock(), createBlock(resolveDynamicComponent("FormLanguages"), { key: 2 })) : createCommentVNode("v-if", true),
        _ctx.showTabs ? (openBlock(), createBlock(resolveDynamicComponent("FormTabs"), { key: 3 })) : createCommentVNode("v-if", true),
        _ctx.showSteps ? (openBlock(), createBlock(resolveDynamicComponent("FormSteps"), { key: 4 })) : createCommentVNode("v-if", true),
        createVNode(_component_FormElements, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }),
        _ctx.showStepsControls ? (openBlock(), createBlock(resolveDynamicComponent("FormStepsControls"), { key: 5 })) : createCommentVNode("v-if", true)
      ])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
script$26.render = render$_;
script$26.__file = "themes/blank/templates/Vueform.vue";
var script$25 = {
  name: "Vueform",
  render: script$26.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        form: ""
      }
    };
  }
};
script$25.__file = "themes/vueform/templates/Vueform.vue";
var script$24 = {
  name: "FormErrors",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        error: ""
      }
    };
  }
};
var _hoisted_1$K = ["innerHTML"];
function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(_ctx.errors, (error, key, index2) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(_ctx.classes.error),
            innerHTML: error,
            key: index2
          }, null, 10, _hoisted_1$K);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
script$24.render = render$Z;
script$24.__file = "themes/blank/templates/FormErrors.vue";
var script$23 = {
  name: "FormErrors",
  render: script$24.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-errors",
        container_sm: "vf-errors-sm",
        container_md: "",
        container_lg: "vf-errors-lg",
        error: "",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
function styleInject(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$_ = ".vf-errors {\n  background: var(--vf-bg-danger);\n  color: var(--vf-color-danger);\n  border-radius: var(--vf-radius-input);\n  margin-bottom: var(--vf-gutter);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-errors.vf-errors-sm {\n  border-radius: var(--vf-radius-input-sm);\n  margin-bottom: var(--vf-gutter-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-errors.vf-errors-lg {\n  border-radius: var(--vf-radius-input-lg);\n  margin-bottom: var(--vf-gutter-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n  padding: 0.75rem 1rem;\n}";
styleInject(css_248z$_);
script$23.__file = "themes/vueform/templates/FormErrors.vue";
var script$22 = {
  name: "FormMessages",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        message: ""
      }
    };
  }
};
var _hoisted_1$J = ["innerHTML"];
function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(_ctx.messages, (message, key, index2) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(_ctx.classes.message),
            innerHTML: message,
            key: index2
          }, null, 10, _hoisted_1$J);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
script$22.render = render$Y;
script$22.__file = "themes/blank/templates/FormMessages.vue";
var script$21 = {
  name: "FormMessages",
  render: script$22.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-messages",
        container_sm: "vf-messages-sm",
        container_md: "",
        container_lg: "vf-messages-lg",
        message: "",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$Z = ".vf-messages {\n  background: var(--vf-bg-success);\n  color: var(--vf-color-success);\n  border-radius: var(--vf-radius-input);\n  margin-bottom: var(--vf-gutter);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-messages.vf-messages-sm {\n  border-radius: var(--vf-radius-input-sm);\n  margin-bottom: var(--vf-gutter-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-messages.vf-messages-lg {\n  border-radius: var(--vf-radius-input-lg);\n  margin-bottom: var(--vf-gutter-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n  padding: 0.75rem 1rem;\n}";
styleInject(css_248z$Z);
script$21.__file = "themes/vueform/templates/FormMessages.vue";
var script$20 = {
  name: "FormLanguages",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormLanguage = resolveComponent("FormLanguage");
  return openBlock(), createElementBlock(
    "ul",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.languages, (lang, code, key) => {
            return openBlock(), createBlock(_component_FormLanguage, {
              language: lang,
              code,
              key,
              onSelect: _ctx.handleSelect
            }, null, 8, ["language", "code", "onSelect"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ],
    2
    /* CLASS */
  );
}
script$20.render = render$X;
script$20.__file = "themes/blank/templates/FormLanguages.vue";
var script$1$ = {
  name: "FormLanguages",
  render: script$20.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-languages",
        container_sm: "vf-languages-sm",
        container_md: "",
        container_lg: "vf-languages-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$Y = ".vf-languages {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-languages.vf-languages-sm {\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-languages.vf-languages-lg {\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}";
styleInject(css_248z$Y);
script$1$.__file = "themes/vueform/templates/FormLanguages.vue";
var script$1_ = {
  name: "FormLanguage",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "li",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode(
        "a",
        {
          href: "#",
          class: normalizeClass(_ctx.classes.wrapper),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.select && _ctx.select(...args), ["prevent"]))
        },
        toDisplayString(_ctx.language),
        3
        /* TEXT, CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
script$1_.render = render$W;
script$1_.__file = "themes/blank/templates/FormLanguage.vue";
var script$1Z = {
  name: "FormLanguage",
  render: script$1_.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-language",
        wrapper: "vf-language-wrapper",
        wrapper_sm: "vf-language-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-language-wrapper-lg",
        wrapper_active: "vf-language-wrapper-active",
        wrapper_inactive: "",
        $wrapper: (classes2, { selected, Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          selected ? classes2.wrapper_active : classes2.wrapper_inactive
        ]
      }
    };
  }
};
var css_248z$X = ".vf-language {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.vf-language-wrapper {\n  padding: 0.5rem 1rem;\n  display: block;\n  margin-left: 1px;\n  margin-right: 1px;\n  text-decoration: none;\n  border-bottom: 2px solid transparent;\n  color: var(--vf-color-input);\n  text-align: center;\n}\n\n.vf-language-wrapper:hover {\n  text-decoration: none;\n}\n\n.vf-language-wrapper.vf-language-wrapper-sm {\n  padding: 0.375rem 0.875rem;\n}\n\n.vf-language-wrapper.vf-language-wrapper-lg {\n  padding: 0.5rem 1rem;\n}\n\n.vf-language-wrapper.vf-language-wrapper-active {\n  border-color: var(--vf-primary);\n}\n\n.vf-language-wrapper.vf-language-wrapper-invalid {\n  border-color: var(--vf-danger);\n  color: var(--vf-color-danger);\n}";
styleInject(css_248z$X);
script$1Z.__file = "themes/vueform/templates/FormLanguage.vue";
var script$1Y = {
  name: "FormTabs",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormTab = resolveComponent("FormTab");
  return openBlock(), createElementBlock(
    "ul",
    {
      class: normalizeClass(_ctx.classes.container),
      role: "tablist"
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.tabs, (tab, name, i2) => {
            return openBlock(), createBlock(_component_FormTab, mergeProps({ ref_for: true }, tab, {
              name,
              index: i2,
              key: name
            }), null, 16, ["name", "index"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ],
    2
    /* CLASS */
  );
}
script$1Y.render = render$V;
script$1Y.__file = "themes/blank/templates/FormTabs.vue";
var script$1X = {
  name: "FormTabs",
  render: script$1Y.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-tabs",
        container_sm: "vf-tabs-sm",
        container_md: "",
        container_lg: "vf-tabs-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$W = ".vf-tabs {\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  padding: 0;\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-tabs.vf-tabs-sm {\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-tabs.vf-tabs-lg {\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}";
styleInject(css_248z$W);
script$1X.__file = "themes/vueform/templates/FormTabs.vue";
var script$1W = {
  name: "FormTab",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$I = ["aria-selected"];
var _hoisted_2$r = { key: 0 };
var _hoisted_3$g = ["innerHTML"];
function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock(
    "li",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper),
        tabindex: "0",
        role: "tab",
        "aria-selected": _ctx.active,
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.select && _ctx.select(...args), ["prevent"])),
        onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.select && _ctx.select(...args), ["prevent"]), ["enter", "space"]))
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createCommentVNode(" If label is a component "),
          _ctx.isLabelComponent ? (openBlock(), createElementBlock("span", _hoisted_2$r, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.tabLabel), { form$: _ctx.form$ }, null, 8, ["form$"]))
          ])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createCommentVNode(" If label is HTML "),
              createBaseVNode("span", { innerHTML: _ctx.tabLabel }, null, 8, _hoisted_3$g)
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          ))
        ])
      ], 42, _hoisted_1$I)
    ],
    2
    /* CLASS */
  )), [
    [vShow, _ctx.visible]
  ]);
}
script$1W.render = render$U;
script$1W.__file = "themes/blank/templates/FormTab.vue";
var script$1V = {
  name: "FormTab",
  render: script$1W.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-tab",
        wrapper: "vf-tab-wrapper",
        wrapper_active: "vf-tab-wrapper-active",
        wrapper_inactive: "",
        wrapper_valid: "",
        wrapper_invalid: "vf-tab-wrapper-invalid",
        wrapper_sm: "vf-tab-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-tab-wrapper-lg",
        $container: (classes2, {}) => [
          classes2.container
        ],
        $wrapper: (classes2, { active, invalid, Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          active ? classes2.wrapper_active : classes2.wrapper_inactive,
          invalid ? classes2.wrapper_invalid : classes2.wrapper_valid
        ]
      }
    };
  }
};
var css_248z$V = ".vf-tab-wrapper {\n  padding: 0.5rem 1rem;\n  display: block;\n  margin-left: 1px;\n  margin-right: 1px;\n  text-decoration: none;\n  border-bottom: 2px solid transparent;\n  color: var(--vf-color-input);\n}\n\n.vf-tab-wrapper:hover {\n  text-decoration: none;\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-sm {\n  padding: 0.375rem 0.875rem;\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-lg {\n  padding: 0.5rem 1rem;\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-active {\n  border-color: var(--vf-primary);\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-invalid {\n  border-color: var(--vf-danger);\n  color: var(--vf-color-danger);\n}";
styleInject(css_248z$V);
script$1V.__file = "themes/vueform/templates/FormTab.vue";
var script$1U = {
  name: "FormSteps",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormStep = resolveComponent("FormStep");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container),
      role: "tablist"
    },
    [
      createBaseVNode(
        "ul",
        {
          class: normalizeClass(_ctx.classes.wrapper)
        },
        [
          renderSlot(_ctx.$slots, "default", {}, () => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.steps, (step, name) => {
                return openBlock(), createBlock(_component_FormStep, mergeProps({ ref_for: true }, step, {
                  name,
                  key: name
                }), null, 16, ["name"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
script$1U.render = render$T;
script$1U.__file = "themes/blank/templates/FormSteps.vue";
var script$1T = {
  name: "FormSteps",
  render: script$1U.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-steps-container",
        container_sm: "vf-steps-container-sm",
        container_md: "",
        container_lg: "vf-steps-container-lg",
        wrapper: "vf-steps-wrapper",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$U = '.vf-steps-container {\n  width: 100%;\n  position: relative;\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-steps-container:before {\n  content: " ";\n  display: inline-block;\n  background: var(--vf-bg-passive);\n  position: absolute;\n  top: 0.375rem;\n  left: 0.125rem;\n  right: 0.125rem;\n  height: 0.25rem;\n}\n\n.vf-steps-container.vf-steps-container-sm {\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-steps-container.vf-steps-container-lg {\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-steps-wrapper {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  overflow-x: auto;\n}';
styleInject(css_248z$U);
script$1T.__file = "themes/vueform/templates/FormSteps.vue";
var script$1S = {
  name: "FormStepsControls",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormStepsControl = resolveComponent("FormStepsControl");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createVNode(_component_FormStepsControl, {
        type: "previous",
        labels: _ctx.labels
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "previous")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["labels"]),
      createVNode(_component_FormStepsControl, {
        type: "next",
        labels: _ctx.labels
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "next")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["labels"]),
      createVNode(_component_FormStepsControl, {
        type: "finish",
        labels: _ctx.labels
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "finish")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["labels"])
    ],
    2
    /* CLASS */
  );
}
script$1S.render = render$S;
script$1S.__file = "themes/blank/templates/FormStepsControls.vue";
var script$1R = {
  name: "FormStepsControls",
  render: script$1S.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-steps-controls",
        container_sm: "vf-steps-controls-sm",
        container_md: "",
        container_lg: "vf-steps-controls-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$T = ".vf-steps-controls {\n  display: flex;\n  justify-content: space-between;\n  margin: var(--vf-gutter-lg) 0 0 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-steps-controls.vf-steps-controls-sm {\n  margin: var(--vf-gutter) 0 0 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-md);\n}\n\n.vf-steps-controls.vf-steps-controls-lg {\n  margin: var(--vf-gutter-lg) 0 0 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}";
styleInject(css_248z$T);
script$1R.__file = "themes/vueform/templates/FormStepsControls.vue";
var script$1Q = {
  name: "FormStepsControl",
  data() {
    return {
      merge: true,
      defaultClasses: {
        button: ""
      }
    };
  }
};
var _hoisted_1$H = ["disabled"];
var _hoisted_2$q = ["innerHTML", "disabled"];
var _hoisted_3$f = ["disabled"];
function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" If label is a component "),
      _ctx.visible && _ctx.label && _ctx.isLabelComponent ? (openBlock(), createElementBlock("button", {
        key: 0,
        disabled: _ctx.isDisabled,
        class: normalizeClass(_ctx.classes.button),
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"])),
        onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"]), ["enter", "space"]))
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.label), { step$: _ctx.current$ }, null, 8, ["step$"]))
      ], 42, _hoisted_1$H)) : _ctx.visible && _ctx.label ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" If label is HTML "),
          createBaseVNode("button", {
            innerHTML: _ctx.label,
            disabled: _ctx.isDisabled,
            class: normalizeClass(_ctx.classes.button),
            onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"])),
            onKeypress: _cache[3] || (_cache[3] = withKeys(withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"]), ["enter", "space"]))
          }, null, 42, _hoisted_2$q)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : _ctx.visible ? (openBlock(), createElementBlock(
        Fragment,
        { key: 2 },
        [
          createCommentVNode(" If label is a slot "),
          createBaseVNode("button", {
            disabled: _ctx.isDisabled,
            class: normalizeClass(_ctx.classes.button),
            onClick: _cache[4] || (_cache[4] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"])),
            onKeypress: _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"]), ["enter", "space"]))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 42, _hoisted_3$f)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
script$1Q.render = render$R;
script$1Q.__file = "themes/blank/templates/FormStepsControl.vue";
var script$1P = {
  name: "FormStepsControl",
  render: script$1Q.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        button: "vf-btn",
        button_previous: "",
        button_previous_enabled: "vf-btn-secondary",
        button_previous_disabled: "vf-btn-secondary vf-btn-disabled",
        button_next: "",
        button_next_enabled: "vf-btn-primary",
        button_next_disabled: "vf-btn-primary vf-btn-disabled",
        button_next_loading: "vf-btn-loading vf-btn-loading-primary",
        button_finish: "",
        button_finish_enabled: "vf-btn-primary",
        button_finish_disabled: "vf-btn-primary vf-btn-disabled",
        button_finish_loading: "vf-btn-loading vf-btn-loading-primary",
        button_sm: "vf-btn-sm",
        button_md: "",
        button_lg: "vf-btn-lg",
        $button: (classes2, { isDisabled, isLoading, type, Size }) => [
          classes2.button,
          classes2[`button_${Size}`],
          classes2[`button_${type}`],
          isDisabled ? classes2[`button_${type}_disabled`] : classes2[`button_${type}_enabled`],
          isLoading ? classes2[`button_${type}_loading`] : null
        ]
      }
    };
  }
};
script$1P.__file = "themes/vueform/templates/FormStepsControl.vue";
var script$1O = {
  name: "FormStep",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$G = ["tabindex", "aria-selected"];
var _hoisted_2$p = { key: 0 };
var _hoisted_3$e = ["innerHTML"];
function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock(
    "li",
    {
      key: 0,
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode("a", {
        href: "",
        class: normalizeClass(_ctx.classes.wrapper),
        tabindex: _ctx.isDisabled ? -1 : 0,
        role: "tab",
        "aria-selected": _ctx.active,
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.select && _ctx.select(...args), ["prevent"])),
        onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.select && _ctx.select(...args), ["prevent"]), ["enter", "space"]))
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createCommentVNode(" If label is a component "),
          _ctx.isLabelComponent ? (openBlock(), createElementBlock("span", _hoisted_2$p, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.stepLabel), { form$: _ctx.form$ }, null, 8, ["form$"]))
          ])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createCommentVNode(" If label is HTML "),
              createBaseVNode("span", { innerHTML: _ctx.stepLabel }, null, 8, _hoisted_3$e)
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          ))
        ])
      ], 42, _hoisted_1$G)
    ],
    2
    /* CLASS */
  )) : createCommentVNode("v-if", true);
}
script$1O.render = render$Q;
script$1O.__file = "themes/blank/templates/FormStep.vue";
var script$1N = {
  name: "FormStep",
  render: script$1O.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-step",
        wrapper: "",
        container_active: "vf-step-active",
        container_inactive: "",
        container_invalid: "vf-step-invalid",
        container_valid: "",
        container_disabled: "vf-step-disabled",
        container_enabled: "",
        container_completed: "vf-step-completed",
        container_incompleted: "",
        container_pending: "vf-step-pending",
        $container: (classes2, { active, isDisabled, completed, invalid, pending }) => [
          classes2.container,
          active ? classes2.container_active : classes2.container_inactive,
          isDisabled ? classes2.container_disabled : classes2.container_enabled,
          completed ? classes2.container_completed : classes2.container_incompleted,
          invalid ? classes2.container_invalid : classes2.container_valid,
          pending ? classes2.container_pending : null
        ]
      }
    };
  }
};
var css_248z$S = `.vf-step {
  display: block;
  position: relative;
  white-space: nowrap;
  flex: 1 1;
  text-align: center;
  padding: 1.25rem 0.625rem 0;
}

.vf-step a {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:hover, .vf-step a:focus, .vf-step a:active {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:before {
  content: " ";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  position: absolute;
  background: var(--vf-primary);
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
}

.vf-step a:after {
  content: " ";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  background: #FFFFFF;
  border-radius: 50%;
  left: calc(50% - 0.25rem);
  transform: scale(0);
  top: 0.25rem;
  transition: transform 0.3s ease-in-out;
}

.vf-step:first-of-type {
  padding-left: 0;
  text-align: left;
}

.vf-step:first-of-type:before {
  display: none;
}

.vf-step:first-of-type:after {
  left: 0;
}

.vf-step:first-of-type a:before {
  left: 0;
  transform: none;
}

.vf-step:first-of-type a:after {
  left: 0.25rem;
  transform: scale(0);
}

.vf-step:last-of-type {
  padding-right: 0;
  text-align: right;
}

.vf-step:last-of-type:after {
  display: none;
}

.vf-step:last-of-type:before {
  right: 0;
}

.vf-step:last-of-type a:before {
  right: 0;
  left: auto;
  left: initial;
  transform: none;
}

.vf-step:last-of-type a:after {
  left: auto;
  left: initial;
  transform: scale(0);
  right: 0.25rem;
}

.vf-step.vf-step-disabled:before {
  background: var(--vf-bg-passive);
  left: -100%;
}

.vf-step.vf-step-disabled a {
  color: var(--vf-color-passive);
}

.vf-step.vf-step-disabled a:before {
  background: var(--vf-bg-passive);
}

.vf-step.vf-step-completed + .vf-step:not(.vf-step-completed):before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 50%;
  height: 0.25rem;
}

.vf-step.vf-step-completed + .vf-step:last-of-type:before {
  right: 0px;
}

.vf-step.vf-step-completed:before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 0px;
  height: 0.25rem;
}

.vf-step.vf-step-completed a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-on-primary);
  border-radius: 0;
  transform: scale(1);
}

.vf-step.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  top: 0.25rem;
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-invalid a {
  color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:before {
  background-color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-btn-danger);
  width: 0.5rem;
  height: 0.5rem;
  top: 0.25rem;
  border-radius: 0;
}

.vf-step.vf-step-invalid.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-pending a:after {
  animation: 1s linear infinite step-loading;
  background: var(--vf-color-btn-danger);
  top: 0.25rem;
  border-radius: 50%;
}

@keyframes step-loading {
  0% {
    transform: scale(0.5);
  }

  20% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.5);
  }
}`;
styleInject(css_248z$S);
script$1N.__file = "themes/vueform/templates/FormStep.vue";
var script$1M = {
  name: "FormElements",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.schema, (element, name) => {
            return openBlock(), createBlock(resolveDynamicComponent(_ctx.component(element)), mergeProps({ ref_for: true }, element, {
              name,
              key: name
            }), null, 16, ["name"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ],
    2
    /* CLASS */
  );
}
script$1M.render = render$P;
script$1M.__file = "themes/blank/templates/FormElements.vue";
var script$1L = {
  name: "FormElements",
  render: script$1M.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-row",
        container_sm: "vf-row-sm",
        container_md: "",
        container_lg: "vf-row-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$R = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$R);
script$1L.__file = "themes/vueform/templates/FormElements.vue";
var script$1K = {
  name: "ElementLayout",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        outerWrapper: "",
        innerContainer: "",
        innerWrapperBefore: "",
        innerWrapper: "",
        innerWrapperAfter: ""
      }
    };
  }
};
function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabel = resolveComponent("ElementLabel");
  const _component_ElementText = resolveComponent("ElementText");
  const _component_ElementDescription = resolveComponent("ElementDescription");
  const _component_ElementError = resolveComponent("ElementError");
  const _component_ElementMessage = resolveComponent("ElementMessage");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(_ctx.classes.outerWrapper)
        },
        [
          createVNode(_component_ElementLabel, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "label")
            ]),
            info: withCtx(() => [
              renderSlot(_ctx.$slots, "info")
            ]),
            _: 3
            /* FORWARDED */
          }),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.classes.innerContainer)
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(_ctx.classes.innerWrapperBefore)
                },
                [
                  createVNode(_component_ElementText, { type: "before" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "before")
                    ]),
                    _: 3
                    /* FORWARDED */
                  })
                ],
                2
                /* CLASS */
              ),
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(_ctx.classes.innerWrapper)
                },
                [
                  renderSlot(_ctx.$slots, "element")
                ],
                2
                /* CLASS */
              ),
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(_ctx.classes.innerWrapperAfter)
                },
                [
                  createVNode(_component_ElementText, { type: "between" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "between")
                    ]),
                    _: 3
                    /* FORWARDED */
                  }),
                  createVNode(_component_ElementDescription, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "description")
                    ]),
                    _: 3
                    /* FORWARDED */
                  }),
                  createVNode(_component_ElementError),
                  createVNode(_component_ElementMessage),
                  createVNode(_component_ElementText, { type: "after" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "after")
                    ]),
                    _: 3
                    /* FORWARDED */
                  })
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  )), [
    [vShow, _ctx.visible]
  ]);
}
script$1K.render = render$O;
script$1K.__file = "themes/blank/templates/ElementLayout.vue";
var script$1J = {
  name: "ElementLayout",
  render: script$1K.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-element-layout",
        container_sm: "vf-element-layout-sm",
        container_md: "",
        container_lg: "vf-element-layout-lg",
        container_error: "vf-element-layout-error",
        outerWrapper: "vf-element-layout-outer-wrapper",
        innerContainer: "vf-layout-inner-container",
        innerWrapperBefore: "vf-layout-inner-wrapper-before",
        innerWrapper: "vf-layout-inner-wrapper",
        innerWrapperAfter: "vf-layout-inner-wrapper-after",
        $container: (classes2, { el$, Size }) => [
          classes2.container,
          classes2[`container_${Size}`],
          el$.columnsClasses.container,
          el$.classes.container,
          !el$.isStatic && el$.errors && !!el$.errors.length ? classes2.container_error : null
        ],
        $innerContainer: (classes2, { el$ }) => [
          classes2.innerContainer,
          el$.columnsClasses.innerContainer
        ],
        $innerWrapper: (classes2, { el$ }) => [
          classes2.innerWrapper,
          el$.columnsClasses.wrapper
        ]
      }
    };
  }
};
var css_248z$Q = "/* Some styles are contained in Vueform.vue */\n\n.vf-element-layout {\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-element-layout.vf-element-layout-sm {\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-element-layout.vf-element-layout-lg {\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-layout-inner-container {\n  flex: 1 1 0%;\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n\n.vf-layout-inner-container .vf-layout-inner-wrapper,\n.vf-layout-inner-container .vf-layout-inner-wrapper-before,\n.vf-layout-inner-container .vf-layout-inner-wrapper-after {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.vf-layout-inner-wrapper-before,\n.vf-layout-inner-wrapper-after {\n  grid-column: span 12/span 12;\n  padding-left: var(--vf-gutter);\n  padding-right: var(--vf-gutter);\n}\n\n.vf-element-layout-outer-wrapper {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}";
styleInject(css_248z$Q);
script$1J.__file = "themes/vueform/templates/ElementLayout.vue";
var script$1I = {
  name: "ElementLayoutInline",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabel = resolveComponent("ElementLabel");
  const _component_ElementText = resolveComponent("ElementText");
  const _component_ElementDescription = resolveComponent("ElementDescription");
  const _component_ElementError = resolveComponent("ElementError");
  const _component_ElementMessage = resolveComponent("ElementMessage");
  return withDirectives((openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createVNode(_component_ElementLabel, null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "label")
        ]),
        _: 3
        /* FORWARDED */
      }),
      createVNode(_component_ElementText, { type: "before" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "before")
        ]),
        _: 3
        /* FORWARDED */
      }),
      renderSlot(_ctx.$slots, "element"),
      createVNode(_component_ElementText, { type: "between" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "between")
        ]),
        _: 3
        /* FORWARDED */
      }),
      createVNode(_component_ElementDescription, null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "description")
        ]),
        _: 3
        /* FORWARDED */
      }),
      createVNode(_component_ElementError),
      createVNode(_component_ElementMessage),
      createVNode(_component_ElementText, { type: "after" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "after")
        ]),
        _: 3
        /* FORWARDED */
      })
    ],
    2
    /* CLASS */
  )), [
    [vShow, _ctx.visible]
  ]);
}
script$1I.render = render$N;
script$1I.__file = "themes/blank/templates/ElementLayoutInline.vue";
var script$1H = {
  name: "ElementLayoutInline",
  render: script$1I.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-inline-layout",
        container_error: "has-error",
        $container: (classes2, { el$ }) => [
          classes2.container,
          !el$.isStatic && el$.errors && !!el$.errors.length ? classes2.container_error : null
        ]
      }
    };
  }
};
var css_248z$P = ".vf-inline-layout {\n  display: flex;\n}";
styleInject(css_248z$P);
script$1H.__file = "themes/vueform/templates/ElementLayoutInline.vue";
var script$1G = {
  name: "ElementLoader",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        loader: ""
      }
    };
  }
};
function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode(
        "span",
        {
          class: normalizeClass(_ctx.classes.loader)
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
script$1G.render = render$M;
script$1G.__file = "themes/blank/templates/ElementLoader.vue";
var script$1F = {
  name: "ElementLoader",
  render: script$1G.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-element-loader-container",
        loader: "vf-element-loader",
        loader_sm: "vf-element-loader-sm",
        loader_md: "",
        loader_lg: "vf-element-loader-lg",
        $loader: (classes2, { Size }) => [
          classes2.loader,
          classes2[`loader_${Size}`]
        ]
      }
    };
  }
};
var css_248z$O = '.vf-element-loader-container {\n  position: relative;\n  z-index: 1;\n  order: 1;\n}\n\n.vf-element-loader {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  display: block;\n  right: var(--vf-px-input);\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.vf-element-loader:before, .vf-element-loader:after {\n  position: absolute;\n  content: "";\n  top: 50%;\n  left: 50%;\n  margin: -0.5rem 0 0 -0.5rem;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-color: var(--vf-primary) transparent transparent;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: 0 0 0 1px transparent;\n  box-sizing: border-box;\n}\n\n.vf-element-loader:before {\n  animation: vf-element-loader 2.4s infinite cubic-bezier(0.41, 0.26, 0.2, 0.62);\n}\n\n.vf-element-loader:after {\n  animation: vf-element-loader 2.4s infinite cubic-bezier(0.51, 0.09, 0.21, 0.8);\n}\n\n.vf-element-loader.vf-element-loader-sm {\n  right: var(--vf-px-input-sm);\n}\n\n.vf-element-loader.vf-element-loader-lg {\n  right: var(--vf-px-input-lg);\n}\n\n@keyframes vf-element-loader {\n  from {\n    transform: rotate(0);\n  }\n\n  to {\n    transform: rotate(2turn);\n  }\n}';
styleInject(css_248z$O);
script$1F.__file = "themes/vueform/templates/ElementLoader.vue";
var script$1E = {
  name: "ElementLabelFloating",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        label: ""
      }
    };
  }
};
var _hoisted_1$F = ["innerHTML"];
function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode("span", {
        class: normalizeClass(_ctx.classes.label),
        innerHTML: _ctx.floating
      }, null, 10, _hoisted_1$F)
    ],
    2
    /* CLASS */
  );
}
script$1E.render = render$L;
script$1E.__file = "themes/blank/templates/ElementLabelFloating.vue";
var script$1D = {
  name: "ElementLabelFloating",
  render: script$1E.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-floating-wrapper",
        label: "vf-floating-label",
        label_enabled: "",
        label_disabled: "vf-floating-label-disabled",
        label_danger: "vf-floating-label-danger",
        label_success: "vf-floating-label-success",
        label_focused: "vf-floating-label-focus",
        label_sm: "vf-floating-label-sm",
        label_md: "",
        label_lg: "vf-floating-label-lg",
        label_invisible: "",
        label_visible: "vf-floating-label-visible",
        $label: (classes2, { visible, Size, el$ }) => [
          classes2.label,
          classes2[`label_${Size}`],
          visible ? classes2.label_visible : classes2.label_invisible,
          el$.focused ? classes2.label_focused : null,
          !el$.isDisabled && !el$.isDanger && !el$.isSuccess ? classes2.label_enabled : null,
          el$.isDisabled ? classes2.label_disabled : null,
          el$.isDanger ? classes2.label_danger : null,
          el$.isSuccess ? classes2.label_success : null
        ]
      }
    };
  }
};
var css_248z$N = ".vf-floating-wrapper {\n  position: relative;\n}\n\n.vf-floating-label {\n  position: absolute;\n  z-index: 1;\n  left: var(--vf-px-input);\n  font-size: 0.6875rem;\n  background-color: var(--vf-bg-input);\n  padding: 0 1px;\n  line-height: 1px;\n  transition-property: box-shadow, color, background-color, border-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  opacity: 0;\n  visibility: hidden;\n  white-space: nowrap;\n  color: var(--vf-color-floating);\n  margin-top: var(--vf-floating-top);\n}\n\n.vf-floating-label.vf-floating-label-visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n.vf-floating-label.vf-floating-label-sm {\n  left: var(--vf-px-input-sm);\n  margin-top: var(--vf-floating-top-sm);\n}\n\n.vf-floating-label.vf-floating-label-lg {\n  left: var(--vf-px-input-lg);\n  margin-top: var(--vf-floating-top-lg);\n  background-color: transparent !important;\n}\n\n.vf-floating-label.vf-floating-label-disabled {\n  background-color: var(--vf-bg-disabled);\n}\n\n.vf-floating-label.vf-floating-label-focus {\n  background-color: var(--vf-bg-input-focus);\n  color: var(--vf-color-floating-focus);\n}\n\n.vf-floating-label.vf-floating-label-danger {\n  background-color: var(--vf-bg-input-danger);\n  color: var(--vf-color-floating-danger);\n}\n\n.vf-floating-label.vf-floating-label-success {\n  background-color: var(--vf-bg-input-success);\n  color: var(--vf-color-floating-success);\n}\n\n.vf-input-group .vf-floating-label {\n  top: calc(var(--vf-border-width-input-t) * -1);\n}\n\n[dir=rtl] .vf-floating-label {\n  left: auto;\n  right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-floating-label.vf-floating-label-sm {\n  left: auto;\n  right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-floating-label.vf-floating-label-lg {\n  left: auto;\n  right: var(--vf-px-input-lg);\n}";
styleInject(css_248z$N);
script$1D.__file = "themes/vueform/templates/ElementLabelFloating.vue";
var script$1C = {
  name: "ElementLabel",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$E = ["for", "id"];
var _hoisted_2$o = ["for", "id"];
var _hoisted_3$d = ["innerHTML"];
var _hoisted_4$8 = ["for", "id"];
var _hoisted_5$6 = ["for", "id"];
function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementInfo = resolveComponent("ElementInfo");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" If label is a component "),
      _ctx.label && _ctx.isLabelComponent ? (openBlock(), createElementBlock("label", {
        key: 0,
        class: normalizeClass(_ctx.classes.container),
        for: _ctx.name,
        id: _ctx.id
      }, [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            _ctx.isLabelComponent ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.label), { key: 0 })) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        ),
        createVNode(_component_ElementInfo, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "info")
          ]),
          _: 3
          /* FORWARDED */
        })
      ], 10, _hoisted_1$E)) : _ctx.label ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" If label is HTML "),
          createBaseVNode("label", {
            class: normalizeClass(_ctx.classes.container),
            for: _ctx.name,
            id: _ctx.id
          }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.classes.wrapper),
              innerHTML: _ctx.label
            }, null, 10, _hoisted_3$d),
            createVNode(_component_ElementInfo, null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "info")
              ]),
              _: 3
              /* FORWARDED */
            })
          ], 10, _hoisted_2$o)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : _ctx.isSlot ? (openBlock(), createElementBlock(
        Fragment,
        { key: 2 },
        [
          createCommentVNode(" If label is a slot "),
          createBaseVNode("label", {
            class: normalizeClass(_ctx.classes.container),
            for: _ctx.name,
            id: _ctx.id
          }, [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(_ctx.classes.wrapper)
              },
              [
                renderSlot(_ctx.$slots, "default")
              ],
              2
              /* CLASS */
            ),
            createVNode(_component_ElementInfo, null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "info")
              ]),
              _: 3
              /* FORWARDED */
            })
          ], 10, _hoisted_4$8)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : _ctx.hasLabel ? (openBlock(), createElementBlock(
        Fragment,
        { key: 3 },
        [
          createCommentVNode(" If labels are forced but has no value "),
          createBaseVNode("label", {
            class: normalizeClass(_ctx.classes.container),
            for: _ctx.name,
            id: _ctx.id
          }, null, 10, _hoisted_5$6)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
script$1C.render = render$K;
script$1C.__file = "themes/blank/templates/ElementLabel.vue";
var script$1B = {
  name: "ElementLabel",
  render: script$1C.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-label",
        container_sm: "vf-label-sm",
        container_md: "",
        container_lg: "vf-label-lg",
        container_horizontal_sm: "vf-horizontal-label-sm",
        container_horizontal_md: "vf-horizontal-label",
        container_horizontal_lg: "vf-horizontal-label-lg",
        container_vertical_sm: "vf-vertical-label-sm",
        container_vertical_md: "vf-vertical-label",
        container_vertical_lg: "vf-vertical-label-lg",
        wrapper: "",
        $container: (classes2, { el$, Size }) => [
          classes2.container,
          classes2[`container_${Size}`],
          !el$.inline ? el$.columnsClasses.label : null,
          el$.cols.default.label < 12 ? classes2[`container_horizontal_${Size}`] : classes2[`container_vertical_${Size}`],
          ...Object.keys(el$.cols).length > 1 ? (el$.$vueform.config.breakpoints || ["sm", "md", "lg", "xl", "2xl"]).map((breakpoint) => {
            var _a;
            if (!((_a = el$.cols[breakpoint]) == null ? void 0 : _a.label)) {
              return null;
            }
            return el$.cols[breakpoint].label < 12 ? classes2[`container_horizontal_${Size}`].map((c2) => `vf-${breakpoint}:${c2}`).join(" ") : classes2[`container_vertical_${Size}`].map((c2) => `vf-${breakpoint}:${c2}`).join(" ");
          }) : []
        ]
      }
    };
  }
};
var css_248z$M = "/* Styles can be found at scss/_label.scss */";
styleInject(css_248z$M);
script$1B.__file = "themes/vueform/templates/ElementLabel.vue";
var script$1A = {
  name: "ElementInfo",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        content: ""
      }
    };
  }
};
var _hoisted_1$D = ["id"];
var _hoisted_2$n = ["innerHTML"];
function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.info || _ctx.isSlot ? (openBlock(), createElementBlock(
    "span",
    {
      key: 0,
      class: normalizeClass(_ctx.classes.container),
      onMouseover: _cache[0] || (_cache[0] = (...args) => _ctx.handleMouseOver && _ctx.handleMouseOver(...args))
    },
    [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper),
        id: _ctx.id
      }, [
        _ctx.isSlot ? (openBlock(), createElementBlock(
          "span",
          {
            key: 0,
            class: normalizeClass(_ctx.classes.content)
          },
          [
            renderSlot(_ctx.$slots, "default")
          ],
          2
          /* CLASS */
        )) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(_ctx.classes.content),
          innerHTML: _ctx.info
        }, null, 10, _hoisted_2$n))
      ], 10, _hoisted_1$D)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )) : createCommentVNode("v-if", true);
}
script$1A.render = render$J;
script$1A.__file = "themes/blank/templates/ElementInfo.vue";
var script$1z = {
  name: "ElementInfo",
  render: script$1A.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-element-info",
        wrapper: "vf-element-info-wrapper",
        wrapper_left: "vf-element-info-wrapper-left",
        wrapper_right: "vf-element-info-wrapper-right",
        wrapper_top: "vf-element-info-wrapper-top",
        wrapper_bottom: "vf-element-info-wrapper-bottom",
        content: "vf-element-info-content",
        $wrapper: (classes2, { position }) => [
          classes2.wrapper,
          classes2[`wrapper_${position}`]
        ]
      }
    };
  }
};
var css_248z$L = `.vf-element-info {
  margin-left: 0.25rem;
  position: relative;
  top: 1px;
  cursor: pointer;
}

.vf-element-info:before {
  content: "";
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-passive);
  width: 0.875rem;
  height: 0.875rem;
  display: inline-block;
}

.vf-element-info:hover .vf-element-info-wrapper {
  opacity: 1;
  visibility: visible;
}

.vf-element-info-wrapper {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 1000;
  width: 12.5rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-left {
  top: -0.5625rem;
  right: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-right {
  top: -0.5625rem;
  left: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-top {
  bottom: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-wrapper.vf-element-info-wrapper-bottom {
  top: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-content {
  background: rgba(0, 0, 0, 0.85);
  color: #FFFFFF;
  border-radius: var(--vf-radius-small);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: 0.3125rem 0.625rem;
  font-style: normal;
  display: inline-block;
  position: relative;
}

.vf-element-info-content:after {
  right: 100%;
  top: 0.625rem;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0.85);
  border-width: 5px;
}`;
styleInject(css_248z$L);
script$1z.__file = "themes/vueform/templates/ElementInfo.vue";
var script$1y = {
  name: "ElementDescription",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
var _hoisted_1$C = ["innerHTML", "id"];
var _hoisted_2$m = ["id"];
function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" If description is HTML "),
      _ctx.description ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.classes.container),
        innerHTML: _ctx.description,
        id: _ctx.id
      }, null, 10, _hoisted_1$C)) : _ctx.isSlot ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" If description is a slot "),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.classes.container),
            id: _ctx.id
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 10, _hoisted_2$m)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
script$1y.render = render$I;
script$1y.__file = "themes/blank/templates/ElementDescription.vue";
var script$1x = {
  name: "ElementDescription",
  render: script$1y.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-description",
        container_sm: "vf-description-sm",
        container_md: "",
        container_lg: "vf-description-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$K = ".vf-description {\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  color: var(--vf-color-muted);\n  margin-top: 0.25rem;\n}\n\n.vf-description.vf-description-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: 0.125rem;\n}\n\n.vf-description.vf-description-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n}";
styleInject(css_248z$K);
script$1x.__file = "themes/vueform/templates/ElementDescription.vue";
var script$1w = {
  name: "ElementError",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
var _hoisted_1$B = ["id", "innerHTML"];
function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.error ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.classes.container),
    id: _ctx.id,
    "aria-live": "assertive",
    innerHTML: _ctx.error
  }, null, 10, _hoisted_1$B)) : createCommentVNode("v-if", true);
}
script$1w.render = render$H;
script$1w.__file = "themes/blank/templates/ElementError.vue";
var script$1v = {
  name: "ElementError",
  render: script$1w.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-element-error",
        container_sm: "vf-element-error-sm",
        container_md: "",
        container_lg: "vf-element-error-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$J = ".vf-element-error {\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  color: var(--vf-color-danger);\n  margin-top: 0.25rem;\n}\n\n.vf-element-error.vf-element-error-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: 0.125rem;\n}\n\n.vf-element-error.vf-element-error-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n}";
styleInject(css_248z$J);
script$1v.__file = "themes/vueform/templates/ElementError.vue";
var script$1u = {
  name: "ElementMessage",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
var _hoisted_1$A = ["innerHTML"];
function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.message ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.classes.container),
    innerHTML: _ctx.message
  }, null, 10, _hoisted_1$A)) : createCommentVNode("v-if", true);
}
script$1u.render = render$G;
script$1u.__file = "themes/blank/templates/ElementMessage.vue";
var script$1t = {
  name: "ElementMessage",
  render: script$1u.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-element-message",
        container_sm: "vf-element-message-sm",
        container_md: "",
        container_lg: "vf-element-message-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$I = ".vf-element-message {\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  color: var(--vf-color-success);\n  margin-top: 0.25rem;\n}\n\n.vf-element-message.vf-element-message-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: 0.125rem;\n}\n\n.vf-element-message.vf-element-message-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n}";
styleInject(css_248z$I);
script$1t.__file = "themes/vueform/templates/ElementMessage.vue";
var script$1s = {
  name: "ElementText",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
var _hoisted_1$z = ["innerHTML"];
function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" If content is HTML "),
      _ctx.content ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.classes.container),
        innerHTML: _ctx.content
      }, null, 10, _hoisted_1$z)) : _ctx.isSlot ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" If content is a slot "),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.classes.container)
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
script$1s.render = render$F;
script$1s.__file = "themes/blank/templates/ElementText.vue";
var script$1r = {
  name: "ElementText",
  render: script$1s.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        container_before: "",
        container_between: "",
        container_after: "",
        $container: (classes2, { type }) => [
          classes2.container,
          classes2[`container_${type}`]
        ]
      }
    };
  }
};
script$1r.__file = "themes/vueform/templates/ElementText.vue";
var script$1q = {
  name: "ElementAddon",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$y = ["innerHTML"];
function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" If addon is a component "),
      _ctx.addon && _ctx.isAddonComponent ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(_ctx.classes.container)
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.classes.wrapper)
            },
            [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.addon)))
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : _ctx.addon ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" If addon is HTML "),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.classes.container)
            },
            [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.classes.wrapper),
                innerHTML: _ctx.addon
              }, null, 10, _hoisted_1$y)
            ],
            2
            /* CLASS */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : _ctx.isSlot ? (openBlock(), createElementBlock(
        Fragment,
        { key: 2 },
        [
          createCommentVNode(" If addon is a slot "),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.classes.container)
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(_ctx.classes.wrapper)
                },
                [
                  renderSlot(_ctx.$slots, "default")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
script$1q.render = render$E;
script$1q.__file = "themes/blank/templates/ElementAddon.vue";
var script$1p = {
  name: "ElementAddon",
  render: script$1q.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-addon",
        container_before: "vf-addon-before",
        container_after: "vf-addon-after",
        container_sm: "vf-addon-sm",
        container_md: "",
        container_lg: "vf-addon-lg",
        container_before_sm: "",
        container_before_md: "",
        container_before_lg: "",
        container_after_sm: "",
        container_after_md: "",
        container_after_lg: "",
        wrapper: "vf-addon-wrapper",
        $container: (classes2, { type, Size }) => [
          classes2.container,
          classes2[`container_${Size}`],
          classes2[`container_${type}`],
          classes2[`container_${type}_${Size}`]
        ]
      }
    };
  }
};
var css_248z$H = ".vf-addon {\n  background: var(--vf-bg-addon);\n  color: var(--vf-color-addon);\n  border-radius: var(--vf-radius-input);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 0%;\n}\n\n.vf-addon.vf-addon-before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 0 var(--vf-space-addon) 0 var(--vf-px-input);\n}\n\n.vf-addon.vf-addon-before.vf-addon-sm {\n  padding: 0 var(--vf-space-addon-sm) 0 var(--vf-px-input-sm);\n}\n\n.vf-addon.vf-addon-before.vf-addon-lg {\n  padding: 0 var(--vf-space-addon-lg) 0 var(--vf-px-input-lg);\n}\n\n.vf-addon.vf-addon-after {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: 0 var(--vf-px-input) 0 var(--vf-space-addon);\n  order: 2;\n}\n\n.vf-addon.vf-addon-after.vf-addon-sm {\n  padding: 0 var(--vf-px-input-sm) 0 var(--vf-space-addon-sm);\n}\n\n.vf-addon.vf-addon-after.vf-addon-lg {\n  padding: 0 var(--vf-px-input-lg) 0 var(--vf-space-addon-lg);\n}\n\n.vf-addon-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}";
styleInject(css_248z$H);
script$1p.__file = "themes/vueform/templates/ElementAddon.vue";
var script$1o = {
  name: "ElementAddonOptions",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        caret: "",
        dropdown: "",
        option: ""
      }
    };
  }
};
var _hoisted_1$x = ["aria-expanded", "aria-controls", "aria-label"];
var _hoisted_2$l = ["innerHTML"];
var _hoisted_3$c = ["innerHTML"];
var _hoisted_4$7 = ["innerHTML"];
var _hoisted_5$5 = ["innerHTML"];
var _hoisted_6$4 = ["data-dropdown-for", "id"];
var _hoisted_7$2 = ["innerHTML", "data-index", "data-selected", "onMouseover", "onClick", "tabindex", "aria-selected"];
var _hoisted_8$1 = ["innerHTML", "data-index", "data-selected", "onMouseover", "onClick", "tabindex", "aria-selected"];
function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleSelectorClick && _ctx.handleSelectorClick(...args)),
        onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.handleSelectorKeydown && _ctx.handleSelectorKeydown(...args)),
        ref: "selector",
        "aria-expanded": _ctx.isOpen,
        "aria-haspopup": "listbox",
        "aria-controls": `dropdown-${_ctx.el$.fieldId}`,
        "aria-label": _ctx.form$.translations.vueform.elements.phone.ariaLabel,
        role: "button",
        tabindex: "0"
      }, [
        Object.keys(_ctx.selected).length ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            _ctx.selected.valueDisplay && typeof _ctx.selected.valueDisplay === "object" && [_ctx.selected.valueDisplay.render || _ctx.selected.valueDisplay.template] ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.selected.valueDisplay), {
              key: 0,
              el$: _ctx.el$,
              option: _ctx.selected
            }, null, 8, ["el$", "option"])) : _ctx.selected.valueDisplay && typeof _ctx.selected.valueDisplay === "function" ? (openBlock(), createElementBlock("div", {
              key: 1,
              innerHTML: _ctx.selected.valueDisplay(_ctx.selected, _ctx.el$)
            }, null, 8, _hoisted_2$l)) : (openBlock(), createElementBlock("div", {
              key: 2,
              innerHTML: _ctx.selected.label
            }, null, 8, _hoisted_3$c))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            _ctx.placeholder && typeof _ctx.placeholder === "object" && [_ctx.placeholder.render || _ctx.placeholder.template] ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.placeholder), {
              key: 0,
              el$: _ctx.el$,
              option: _ctx.selected
            }, null, 8, ["el$", "option"])) : _ctx.placeholder && typeof _ctx.placeholder === "function" ? (openBlock(), createElementBlock("div", {
              key: 1,
              innerHTML: _ctx.placeholder(_ctx.selected, _ctx.el$)
            }, null, 8, _hoisted_4$7)) : (openBlock(), createElementBlock("div", {
              key: 2,
              innerHTML: _ctx.placeholder
            }, null, 8, _hoisted_5$5))
          ],
          64
          /* STABLE_FRAGMENT */
        )),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.caret)
          },
          null,
          2
          /* CLASS */
        ),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          _ctx.isOpen ? (openBlock(), createElementBlock("div", {
            key: 0,
            "data-dropdown-for": _ctx.el$.fieldId,
            id: `dropdown-${_ctx.el$.fieldId}`,
            class: normalizeClass(_ctx.classes.dropdown),
            style: normalizeStyle(_ctx.style),
            ref: "dropdown",
            role: "listbox",
            tabindex: "-1"
          }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.options, (option, index2) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    class: normalizeClass(_ctx.classes.optionWrapper),
                    key: option.value
                  },
                  [
                    option.display && typeof option.display === "object" && [option.display.render || option.display.template] ? (openBlock(), createBlock(resolveDynamicComponent(option.display), {
                      key: 0,
                      el$: _ctx.el$,
                      option,
                      index: index2,
                      selected: _ctx.selected.index === option.index,
                      pointed: _ctx.pointed.index === option.index,
                      "data-index": option.index,
                      "data-selected": _ctx.selected.index === option.index,
                      onMouseover: ($event) => _ctx.handleOptionPoint(option),
                      onClick: ($event) => _ctx.handleOptionClick(option),
                      role: "option",
                      tabindex: _ctx.pointed.index === option.index ? 0 : -1,
                      "aria-selected": _ctx.selected.index === option.index
                    }, null, 40, ["el$", "option", "index", "selected", "pointed", "data-index", "data-selected", "onMouseover", "onClick", "tabindex", "aria-selected"])) : option.display && typeof option.display === "function" ? (openBlock(), createElementBlock("div", {
                      key: 1,
                      innerHTML: option.display(option, index2, _ctx.selected.index === option.index, _ctx.pointed.index === option.index, _ctx.el$),
                      class: normalizeClass(_ctx.classes.option(option, index2, _ctx.el$)),
                      "data-index": option.index,
                      "data-selected": _ctx.selected.index === option.index,
                      onMouseover: ($event) => _ctx.handleOptionPoint(option),
                      onClick: ($event) => _ctx.handleOptionClick(option),
                      role: "option",
                      tabindex: _ctx.pointed.index === option.index ? 0 : -1,
                      "aria-selected": _ctx.selected.index === option.index
                    }, null, 42, _hoisted_7$2)) : (openBlock(), createElementBlock("div", {
                      key: 2,
                      innerHTML: option.label,
                      class: normalizeClass(_ctx.classes.option(option, index2, _ctx.el$)),
                      "data-index": option.index,
                      "data-selected": _ctx.selected.index === option.index,
                      onMouseover: ($event) => _ctx.handleOptionPoint(option),
                      onClick: ($event) => _ctx.handleOptionClick(option),
                      role: "option",
                      tabindex: _ctx.pointed.index === option.index ? 0 : -1,
                      "aria-selected": _ctx.selected.index === option.index
                    }, null, 42, _hoisted_8$1))
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 14, _hoisted_6$4)) : createCommentVNode("v-if", true)
        ]))
      ], 42, _hoisted_1$x)
    ],
    2
    /* CLASS */
  );
}
script$1o.render = render$D;
script$1o.__file = "themes/blank/templates/ElementAddonOptions.vue";
var script$1n = {
  name: "ElementAddonOptions",
  render: script$1o.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-addon-options",
        container_sm: "vf-addon-options-sm",
        container_md: "",
        container_lg: "vf-addon-options-lg",
        container_disabled: "vf-addon-options-disabled",
        wrapper: "vf-addon-options-wrapper",
        caret: "vf-addon-options-caret",
        dropdown: "vf-addon-options-dropdown",
        option: "vf-addon-options-option",
        option_active: "vf-addon-options-option-active",
        $container: (classes2, { Size, el$ }) => [
          classes2.container,
          classes2[`container_${Size}`],
          el$.isDisabled || el$.readonly ? classes2.container_disabled : null
        ],
        $option: (classes2, { selected, pointed }) => (option) => [
          classes2.option,
          selected.index === option.index || pointed.index === option.index ? classes2.option_active : null
        ]
      }
    };
  }
};
var css_248z$G = `.vf-addon-options {
  display: flex;
  align-items: center;
  margin-left: var(--vf-px-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-addon-options.vf-addon-options-sm {
  margin-left: var(--vf-px-input-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-addon-options.vf-addon-options-lg {
  margin-left: var(--vf-px-input-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-addon-options.vf-addon-options-disabled {
  opacity: 0.5;
  cursor: initial;
  pointer-events: none;
}

.vf-addon-options-wrapper {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 4px;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: none;
}

.vf-addon-options-wrapper:hover, .vf-addon-options-wrapper:focus {
  background: var(--vf-bg-selected);
}

.vf-addon-options-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  color: var(--vf-color-input);
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  margin-left: 0.5rem;
}

.vf-addon-options-dropdown {
  background-color: var(--vf-bg-input);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-dropdown);
  color: var(--vf-color-input);
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  z-index: 1002;
  overflow-x: scroll;
}

.vf-addon-options-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem 0.75rem;
  white-space: nowrap;
}

.vf-addon-options-option-active {
  background: var(--vf-bg-selected);
}

[dir=rtl] .vf-addon-options {
  margin-left: 0;
  margin-right: var(--vf-px-input);
}

[dir=rtl] .vf-addon-options.vf-addon-options-sm {
  margin-left: 0;
  margin-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-addon-options.vf-addon-options-lg {
  margin-left: 0;
  margin-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-addon-options-caret {
  margin-left: 0;
  margin-right: 0.5rem;
}`;
styleInject(css_248z$G);
script$1n.__file = "themes/vueform/templates/ElementAddonOptions.vue";
var script$1m = {
  name: "ButtonElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        button: ""
      }
    };
  }
};
var _hoisted_1$w = ["tabindex", "disabled"];
var _hoisted_2$k = ["innerHTML", "tabindex", "disabled"];
var _hoisted_3$b = ["tabindex", "disabled"];
var _hoisted_4$6 = ["tabindex"];
var _hoisted_5$4 = ["innerHTML", "tabindex"];
var _hoisted_6$3 = ["tabindex"];
function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createCommentVNode(" Use `button` tag "),
        _ctx.buttonType === "button" ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createCommentVNode(" Use it as a component "),
            _ctx.buttonLabel && _ctx.isButtonLabelComponent ? (openBlock(), createElementBlock("button", mergeProps({ key: 0 }, {
              ..._ctx.button,
              ..._ctx.aria
            }, {
              tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : void 0,
              disabled: _ctx.isDisabled,
              class: _ctx.classes.button,
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"]))
            }), [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.buttonLabel)))
            ], 16, _hoisted_1$w)) : _ctx.buttonLabel ? (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createCommentVNode(" Use it as HTML "),
                createBaseVNode("button", mergeProps({
                  ..._ctx.button,
                  ..._ctx.aria
                }, {
                  innerHTML: _ctx.buttonLabel,
                  tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : void 0,
                  class: _ctx.classes.button,
                  disabled: _ctx.isDisabled,
                  onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"]))
                }), null, 16, _hoisted_2$k)
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )) : (openBlock(), createElementBlock(
              Fragment,
              { key: 2 },
              [
                createCommentVNode(" Use it as slot "),
                createBaseVNode("button", mergeProps({
                  ..._ctx.button,
                  ..._ctx.aria
                }, {
                  tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : void 0,
                  class: _ctx.classes.button,
                  disabled: _ctx.isDisabled,
                  onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"]))
                }), [
                  renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8, ["el$"]))
                  ])
                ], 16, _hoisted_3$b)
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" Use `anchor` tag "),
            createCommentVNode(" Use it as a component "),
            _ctx.buttonLabel && _ctx.isButtonLabelComponent ? (openBlock(), createElementBlock("a", mergeProps({ key: 0 }, {
              ..._ctx.button,
              ..._ctx.aria
            }, {
              tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : void 0,
              class: _ctx.classes.button,
              onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
            }), [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.buttonLabel)))
            ], 16, _hoisted_4$6)) : _ctx.buttonLabel ? (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createCommentVNode(" Use it as HTML "),
                createBaseVNode("a", mergeProps({
                  ..._ctx.button,
                  ..._ctx.aria
                }, {
                  innerHTML: _ctx.buttonLabel,
                  tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : void 0,
                  class: _ctx.classes.button,
                  onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
                }), null, 16, _hoisted_5$4)
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )) : (openBlock(), createElementBlock(
              Fragment,
              { key: 2 },
              [
                createCommentVNode(" Use it as slot "),
                createBaseVNode("a", mergeProps({
                  ..._ctx.button,
                  ..._ctx.aria
                }, {
                  tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : void 0,
                  class: _ctx.classes.button,
                  onClick: _cache[5] || (_cache[5] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
                }), [
                  renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8, ["el$"]))
                  ])
                ], 16, _hoisted_6$3)
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$1m.render = render$C;
script$1m.__file = "themes/blank/templates/elements/ButtonElement.vue";
var script$1l = {
  name: "ButtonElement",
  render: script$1m.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        button: "vf-btn",
        button_enabled: "",
        button_disabled: "vf-btn-disabled",
        button_loading: "vf-btn-loading",
        button_loading_primary: "vf-btn-loading-primary",
        button_loading_secondary: "vf-btn-loading-secondary",
        button_loading_danger: "vf-btn-loading-danger",
        button_primary: "vf-btn-primary",
        button_secondary: "vf-btn-secondary",
        button_danger: "vf-btn-danger",
        button_full: "vf-btn-full",
        button_not_full: "",
        button_left: "vf-btn-left",
        button_center: "vf-btn-center",
        button_right: "vf-btn-right",
        button_sm: "vf-btn-sm",
        button_md: "",
        button_lg: "vf-btn-lg",
        $button: (classes2, { isDisabled, isLoading, buttonClass, Size, danger, secondary, full, align }) => [
          classes2.button,
          danger ? classes2.button_danger : null,
          secondary ? classes2.button_secondary : null,
          !danger && !secondary ? classes2.button_primary : null,
          classes2[`button_${Size}`],
          isDisabled ? classes2.button_disabled : null,
          !isDisabled && !isLoading ? classes2.button_enabled : null,
          isLoading ? classes2.button_loading : null,
          isLoading && danger ? classes2.button_loading_danger : null,
          isLoading && secondary ? classes2.button_loading_secondary : null,
          isLoading && !secondary && !danger ? classes2.button_loading_primary : null,
          full ? classes2.button_full : classes2.button_not_full,
          align === "left" ? classes2.button_left : null,
          align === "center" ? classes2.button_center : null,
          align === "right" ? classes2.button_right : null,
          buttonClass
        ]
      }
    };
  }
};
var css_248z$F = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$F);
script$1l.__file = "themes/vueform/templates/elements/ButtonElement.vue";
var script$1k = {
  name: "CaptchaElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        captcha: ""
      }
    };
  }
};
var _hoisted_1$v = ["id"];
function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        _ctx.shouldVerify ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            createBaseVNode("div", {
              id: _ctx.fieldId,
              class: normalizeClass(_ctx.classes.captcha),
              ref: "input"
            }, null, 10, _hoisted_1$v)
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$1k.render = render$B;
script$1k.__file = "themes/blank/templates/elements/CaptchaElement.vue";
var script$1j = {
  name: "CaptchaElement",
  render: script$1k.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        captcha: ""
      }
    };
  }
};
script$1j.__file = "themes/vueform/templates/elements/CaptchaElement.vue";
var script$1i = {
  name: "CheckboxElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        input: "",
        text: ""
      }
    };
  }
};
var _hoisted_1$u = ["name", "id", "true-value", "false-value", "disabled"];
var _hoisted_2$j = ["innerHTML"];
function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "label",
          {
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            withDirectives(createBaseVNode("input", mergeProps({
              type: "checkbox",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event)
            }, _ctx.aria, {
              class: _ctx.classes.input,
              name: _ctx.path,
              id: _ctx.fieldId,
              "true-value": _ctx.trueValue,
              "false-value": _ctx.falseValue,
              disabled: _ctx.isDisabled,
              ref: "input"
            }), null, 16, _hoisted_1$u), [
              [vModelCheckbox, _ctx.value]
            ]),
            createCommentVNode(" If label is HTML "),
            _ctx.Text ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.classes.text),
              innerHTML: _ctx.Text
            }, null, 10, _hoisted_2$j)) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createCommentVNode(" If label is slot "),
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.text)
                  },
                  [
                    renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8, ["el$"]))
                    ])
                  ],
                  2
                  /* CLASS */
                )
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$1i.render = render$A;
script$1i.__file = "themes/blank/templates/elements/CheckboxElement.vue";
var script$1h = {
  name: "CheckboxElement",
  render: script$1i.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-contains-link",
        wrapper: "vf-checkbox-wrapper",
        wrapper_sm: "vf-checkbox-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-checkbox-wrapper-lg",
        wrapper_left: "vf-checkbox-wrapper-left",
        wrapper_right: "vf-checkbox-wrapper-right",
        input: "vf-checkbox",
        input_enabled: "",
        input_disabled: "",
        input_danger: "vf-checkbox-danger",
        input_sm: "vf-checkbox-sm",
        input_md: "",
        input_lg: "vf-checkbox-lg",
        input_left: "vf-checkbox-left",
        input_right: "vf-checkbox-right",
        text: "vf-checkbox-text",
        text_left: "vf-checkbox-text-left",
        text_right: "vf-checkbox-text-right",
        $wrapper: (classes2, { Size, align }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          align === "left" ? classes2.wrapper_left : null,
          align === "right" ? classes2.wrapper_right : null
        ],
        $input: (classes2, { isDisabled, Size, isDanger, align }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : classes2.input_enabled,
          !isDisabled && isDanger ? classes2.input_danger : null,
          align === "left" ? classes2.input_left : null,
          align === "right" ? classes2.input_right : null
        ],
        $text: (classes2, { align }) => [
          classes2.text,
          align === "left" ? classes2.text_left : null,
          align === "right" ? classes2.text_right : null
        ]
      }
    };
  }
};
var css_248z$E = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$E);
script$1h.__file = "themes/vueform/templates/elements/CheckboxElement.vue";
var script$1g = {
  name: "CheckboxgroupElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$t = ["aria-labelledby"];
function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckboxgroupCheckbox = resolveComponent("CheckboxgroupCheckbox");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classes.wrapper),
          "aria-labelledby": _ctx.labelId,
          role: "group"
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.resolvedOptions, (item, index2, key) => {
              return openBlock(), createBlock(_component_CheckboxgroupCheckbox, {
                items: _ctx.resolvedOptions,
                index: index2,
                item,
                value: item.value,
                key,
                attrs: _ctx.aria
              }, {
                default: withCtx((scope2) => [
                  renderSlot(_ctx.$slots, "checkbox", mergeProps({ ref_for: true }, scope2, { el$: _ctx.el$ }), () => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.checkbox), mergeProps({ ref_for: true }, scope2, { el$: _ctx.el$ }), null, 16, ["el$"]))
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["items", "index", "item", "value", "attrs"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 10, _hoisted_1$t)
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$1g.render = render$z;
script$1g.__file = "themes/blank/templates/elements/CheckboxgroupElement.vue";
var script$1f = {
  name: "CheckboxgroupElement",
  render: script$1g.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-checkboxgroup-wrapper",
        wrapper_sm: "vf-checkboxgroup-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-checkboxgroup-wrapper-lg",
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$D = ".vf-checkboxgroup-wrapper {\n  cursor: pointer;\n}\n\n.vf-checkboxgroup-wrapper .vf-checkbox-container {\n  padding-top: 0;\n}";
styleInject(css_248z$D);
script$1f.__file = "themes/vueform/templates/elements/CheckboxgroupElement.vue";
var script$1e = {
  name: "CheckboxgroupElement_tabs",
  render: script$1g.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-checkboxgroup-tabs-wrapper",
        wrapper_sm: "vf-checkboxgroup-tabs-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-checkboxgroup-tabs-wrapper-lg",
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$C = ".vf-checkboxgroup-tabs-wrapper {\n  display: grid;\n  grid-auto-flow: column;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$C);
script$1e.__file = "themes/vueform/templates/elements/CheckboxgroupElement_tabs.vue";
var script$1d = {
  name: "CheckboxgroupElement_blocks",
  render: script$1g.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-checkboxgroup-blocks-wrapper",
        wrapper_sm: "vf-checkboxgroup-blocks-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-checkboxgroup-blocks-wrapper-lg",
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$B = ".vf-checkboxgroup-blocks-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$B);
script$1d.__file = "themes/vueform/templates/elements/CheckboxgroupElement_blocks.vue";
var script$1c = {
  name: "DateElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        inputWrapper: "",
        input: ""
      }
    };
  }
};
function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_DatepickerWrapper = resolveComponent("DatepickerWrapper");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.inputContainer)
          },
          [
            _ctx.hasAddonBefore ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-before"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasAddonAfter ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-after"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(_ctx.classes.inputWrapper)
              },
              [
                createVNode(_component_DatepickerWrapper, {
                  value: _ctx.model,
                  options: _ctx.fieldOptions,
                  id: _ctx.fieldId,
                  class: normalizeClass(_ctx.classes.input),
                  placeholder: _ctx.Placeholder,
                  disabled: _ctx.isDisabled,
                  readonly: _ctx.readonly,
                  attrs: _ctx.aria,
                  onChange: _ctx.handleChange,
                  ref: "input"
                }, null, 8, ["value", "options", "id", "class", "placeholder", "disabled", "readonly", "attrs", "onChange"])
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$1c.render = render$y;
script$1c.__file = "themes/blank/templates/elements/DateElement.vue";
var script$1b = {
  name: "DateElement",
  render: script$1c.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        inputWrapper: "vf-datepicker-wrapper",
        input: "vf-input-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$A = "/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */\n\n.vf-datepicker-wrapper {\n  display: block;\n  width: 100%;\n  height: 100%;\n}";
styleInject(css_248z$A);
script$1b.__file = "themes/vueform/templates/elements/DateElement.vue";
var script$1a = {
  name: "DatesElement",
  render: script$1c.render,
  staticRenderFns: script$1c.staticRenderFns,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        input: ""
      }
    };
  }
};
script$1a.__file = "themes/blank/templates/elements/DatesElement.vue";
var script$19 = {
  name: "DatesElement",
  render: script$1a.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        inputWrapper: "vf-datepicker-wrapper",
        input: "vf-input-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$z = "/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */";
styleInject(css_248z$z);
script$19.__file = "themes/vueform/templates/elements/DatesElement.vue";
var script$18 = {
  name: "FileElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        button: ""
      }
    };
  }
};
var _hoisted_1$s = ["aria-labelledby", "aria-placeholder"];
var _hoisted_2$i = ["id", "accept"];
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DragAndDrop = resolveComponent("DragAndDrop");
  const _component_FilePreview = resolveComponent("FilePreview");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createCommentVNode(" Drag n drop "),
        _ctx.drop && _ctx.canDrop && _ctx.canSelect ? (openBlock(), createBlock(_component_DragAndDrop, {
          key: 0,
          title: _ctx.form$.translations.vueform.elements[_ctx.type].dndTitle,
          description: _ctx.form$.translations.vueform.elements[_ctx.type].dndDescription,
          disabled: _ctx.isDisabled,
          onClick: _ctx.handleClick,
          onDrop: _ctx.handleDrop
        }, null, 8, ["title", "description", "disabled", "onClick", "onDrop"])) : _ctx.canSelect ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" Upload button "),
            createBaseVNode("div", mergeProps(_ctx.aria, {
              class: _ctx.classes.button,
              "aria-labelledby": _ctx.labelId,
              "aria-placeholder": _ctx.form$.translations.vueform.elements[_ctx.type].select,
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"])),
              onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["enter", "space"])),
              role: "button",
              tabindex: "0"
            }), toDisplayString(_ctx.form$.translations.vueform.elements[_ctx.type].select), 17, _hoisted_1$s)
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" Hidden file input "),
        _ctx.canSelect && !_ctx.isDisabled && !_ctx.preparing ? withDirectives((openBlock(), createElementBlock("input", {
          key: 2,
          id: _ctx.fieldId,
          type: "file",
          accept: _ctx.accept,
          onChange: _cache[2] || (_cache[2] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
          ref: "input"
        }, null, 40, _hoisted_2$i)), [
          [vShow, false]
        ]) : createCommentVNode("v-if", true),
        createCommentVNode(" Preview "),
        renderSlot(_ctx.$slots, "preview", {}, () => [
          (openBlock(), createBlock(_component_FilePreview, {
            key: _ctx.view,
            attrs: _ctx.aria
          }, null, 8, ["attrs"]))
        ])
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$18.render = render$x;
script$18.__file = "themes/blank/templates/elements/FileElement.vue";
var script$17 = {
  name: "FileElement",
  render: script$18.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-file vf-text-type",
        container_removing: "vf-file-removing",
        button: "vf-btn vf-btn-secondary",
        button_enabled: "",
        button_disabled: "vf-btn-disabled",
        button_sm: "vf-btn-sm",
        button_md: "",
        button_lg: "vf-btn-lg",
        assertiveText: "vf-assertive-text",
        $container: (classes2, { removing }) => [
          classes2.container,
          removing ? classes2.container_removing : null
        ],
        $button: (classes2, { isDisabled, preparing, Size }) => [
          classes2.button,
          classes2[`button_${Size}`],
          !isDisabled && !preparing ? classes2.button_enabled : null,
          isDisabled || preparing ? classes2.button_disabled : null
        ]
      }
    };
  }
};
var css_248z$y = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$y);
script$17.__file = "themes/vueform/templates/elements/FileElement.vue";
var script$16 = {
  name: "GroupElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$r = ["aria-labelledby"];
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    {
      multiple: true,
      ref: "container"
    },
    createSlots({
      element: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classes.wrapper),
          role: "group",
          "aria-labelledby": _ctx.labelId
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.children, (element, name) => {
                return openBlock(), createBlock(resolveDynamicComponent(_ctx.component(element)), mergeProps({ ref_for: true }, element, {
                  name,
                  key: name
                }), null, 16, ["name"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ], 10, _hoisted_1$r)
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$16.render = render$w;
script$16.__file = "themes/blank/templates/elements/GroupElement.vue";
var script$15 = {
  name: "GroupElement",
  render: script$16.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-row",
        wrapper_sm: "vf-row-sm",
        wrapper_md: "",
        wrapper_lg: "vf-row-lg",
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$x = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$x);
script$15.__file = "themes/vueform/templates/elements/GroupElement.vue";
var script$14 = {
  name: "HiddenElement",
  data() {
    return {
      merge: true,
      defaultClasses: {}
    };
  }
};
var _hoisted_1$q = {
  key: 0,
  ref: "container"
};
var _hoisted_2$h = ["name", "id"];
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.meta ? (openBlock(), createElementBlock(
    "span",
    _hoisted_1$q,
    [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
        type: "hidden",
        name: _ctx.name,
        id: _ctx.fieldId,
        ref: "input"
      }, null, 8, _hoisted_2$h), [
        [vModelText, _ctx.value]
      ])
    ],
    512
    /* NEED_PATCH */
  )) : createCommentVNode("v-if", true);
}
script$14.render = render$v;
script$14.__file = "themes/blank/templates/elements/HiddenElement.vue";
var script$13 = {
  name: "HiddenElement",
  render: script$14.render,
  data() {
    return {
      merge: true,
      defaultClasses: {}
    };
  }
};
script$13.__file = "themes/vueform/templates/elements/HiddenElement.vue";
var script$12 = {
  name: "ListElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        list: "",
        listItem: "",
        handle: "",
        handleIcon: "",
        remove: "",
        removeIcon: "",
        add: ""
      }
    };
  }
};
var _hoisted_1$p = ["aria-labelledby"];
var _hoisted_2$g = ["data-id"];
var _hoisted_3$a = ["aria-roledescription", "id", "onClick", "onKeypress"];
var _hoisted_4$5 = ["id", "innerHTML"];
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createCommentVNode(" Sorting container "),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classes.list),
          role: "list",
          "aria-labelledby": _ctx.labelId,
          ref: "list"
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.value, (val, i2) => {
              return openBlock(), createElementBlock("div", {
                key: i2,
                class: normalizeClass(_ctx.classes.listItem),
                role: "listitem",
                "data-id": `${_ctx.path}-${i2}`
              }, [
                renderSlot(_ctx.$slots, "default", { index: i2 }, () => [
                  _ctx.prototype.type ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.component(_ctx.prototype)), mergeProps({
                    key: 0,
                    ref_for: true
                  }, _ctx.prototype, {
                    name: i2,
                    key: i2
                  }), null, 16, ["name"])) : createCommentVNode("v-if", true)
                ]),
                createCommentVNode(" Sort handle "),
                _ctx.hasSort ? (openBlock(), createElementBlock(
                  "span",
                  {
                    key: 0,
                    class: normalizeClass(_ctx.classes.handle),
                    "data-handle": ""
                  },
                  [
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(_ctx.classes.handleIcon)
                      },
                      null,
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true),
                createCommentVNode(" Remove button "),
                _ctx.hasRemove ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  "aria-roledescription": _ctx.form$.translations.vueform.a11y.list.remove,
                  class: normalizeClass(_ctx.classes.remove),
                  id: `${_ctx.path}-${i2}-remove-button`,
                  onClick: withModifiers(($event) => _ctx.handleRemove(i2), ["prevent"]),
                  onKeypress: withKeys(($event) => _ctx.handleRemove(i2), ["space", "enter"]),
                  role: "button",
                  tabindex: "0"
                }, [
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(_ctx.classes.removeIcon)
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ], 42, _hoisted_3$a)) : createCommentVNode("v-if", true)
              ], 10, _hoisted_2$g);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 10, _hoisted_1$p),
        createCommentVNode(" Add button "),
        _ctx.hasAdd ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.classes.add),
          id: `${_ctx.fieldId}-add-button`,
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleAdd && _ctx.handleAdd(...args), ["prevent"])),
          onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.handleAdd && _ctx.handleAdd(...args), ["enter", "space"])),
          innerHTML: _ctx.addLabel,
          role: "button",
          tabindex: "0"
        }, null, 42, _hoisted_4$5)) : createCommentVNode("v-if", true)
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$12.render = render$u;
script$12.__file = "themes/blank/templates/elements/ListElement.vue";
var script$11 = {
  name: "ListElement",
  render: script$12.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        list: "vf-rowset",
        list_sm: "vf-rowset-sm",
        list_md: "",
        list_lg: "vf-rowset-lg",
        list_disabled: "vf-list-disabled",
        list_sorting: "vf-list-sorting",
        listItem: "vf-row",
        listItem_sm: "vf-row-sm",
        listItem_md: "",
        listItem_lg: "vf-row-lg",
        handle: "vf-list-handle",
        handle_sm: "vf-list-handle-sm",
        handle_md: "",
        handle_lg: "vf-list-handle-lg",
        handleIcon: "vf-list-handle-icon",
        remove: "vf-list-remove",
        removeIcon: "vf-list-remove-icon",
        add: "vf-btn vf-btn-primary vf-btn-small vf-btn-list-add",
        add_sm: "vf-btn-small-sm vf-btn-list-add-sm",
        add_md: "",
        add_lg: "vf-btn-small-lg vf-btn-list-add-lg",
        $list: (classes2, { isDisabled, sorting, Size }) => [
          classes2.list,
          classes2[`list_${Size}`],
          isDisabled ? classes2.list_disabled : null,
          sorting ? classes2.list_sorting : null
        ],
        $listItem: (classes2, { Size }) => [
          classes2.listItem,
          classes2[`listItem_${Size}`]
        ],
        $handle: (classes2, { Size }) => [
          classes2.handle,
          classes2[`handle_${Size}`]
        ],
        $add: (classes2, { Size }) => [
          classes2.add,
          classes2[`add_${Size}`]
        ]
      }
    };
  }
};
var css_248z$w = `/* Some styles are contained in Vueform.vue */

.vf-rowset > .vf-row {
  position: relative;
}

.vf-rowset > .vf-row:hover > .vf-list-remove, .vf-rowset > .vf-row:hover > .vf-list-handle {
  visibility: visible;
  opacity: 1;
}

.vf-rowset.vf-list-sorting > div:hover .vf-list-handle, .vf-rowset.vf-list-sorting > div:hover .vf-list-remove {
  visibility: hidden;
  opacity: 0;
}

.vf-list-remove, .vf-list-handle {
  opacity: 0;
  transition: 0.3s;
}

.vf-list-remove span, .vf-list-handle span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
}

.vf-list-remove {
  position: absolute;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
  top: 0;
  z-index: 999;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-list-remove:hover {
  filter: brightness(0.9);
}

.vf-list-remove:focus {
  opacity: 1;
}

.vf-list-remove-icon {
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  justify-content: center;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  z-index: 999;
}

.vf-list-handle:active {
  cursor: grabbing;
}

.vf-list-handle-icon {
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle-sm .vf-list-handle-icon {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-list-handle-lg .vf-list-handle-icon {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-btn-list-add {
  margin-top: var(--vf-gutter);
}

.vf-btn-list-add.vf-btn-list-add-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-btn-list-add.vf-btn-list-add-lg {
  margin-top: var(--vf-gutter-lg);
}

.sortable-ghost {
  opacity: 0.6;
}`;
styleInject(css_248z$w);
script$11.__file = "themes/vueform/templates/elements/ListElement.vue";
var script$10 = {
  name: "LocationElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        input: ""
      }
    };
  }
};
var _hoisted_1$o = ["name", "id", "placeholder", "disabled", "readonly", "aria-labelledby"];
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.inputContainer)
          },
          [
            _ctx.hasAddonBefore ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-before"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasAddonAfter ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-after"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
            createBaseVNode("input", mergeProps({
              type: "search",
              name: _ctx.name,
              id: _ctx.fieldId,
              class: _ctx.classes.input,
              placeholder: _ctx.Placeholder,
              disabled: _ctx.isDisabled,
              readonly: _ctx.readonly,
              "aria-labelledby": _ctx.labelId,
              autocomplete: "off"
            }, _ctx.attrs, {
              ref: "input",
              onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.handleLocationBlur && _ctx.handleLocationBlur(...args))
            }), null, 16, _hoisted_1$o)
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$10.render = render$t;
script$10.__file = "themes/blank/templates/elements/LocationElement.vue";
var script$$ = {
  name: "LocationElement",
  render: script$10.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        input: "vf-input-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$v = `/* Google */

.pac-container {
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
}

.pac-item {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  cursor: pointer;
}

.pac-item > span:last-of-type {
  font-size: 0.75rem;
  color: var(--vf-color-muted);
}

.pac-item:hover, .pac-item.pac-item-selected {
  background: var(--vf-bg-selected);
}

.pac-item-query {
  font-size: 0.875rem;
  line-height: 1;
  margin-right: 0.25rem;
  padding-right: 0.25rem;
  color: var(--vf-color-input);
}

.pac-icon-marker {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background: var(--vf-bg-icon);
  width: 0.875rem;
  width: 0.875rem;
  margin-right: 0.75rem;
  margin-top: 0;
  padding-top: 1px;
  padding-bottom: 1px;
  box-sizing: content-box;
  flex-shrink: 0;
}

.pac-logo:after {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
}

.pac-icon, .hdpi .pac-icon {
  background-image: none;
}`;
styleInject(css_248z$v);
script$$.__file = "themes/vueform/templates/elements/LocationElement.vue";
var script$_ = {
  name: "MultifileElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        list: "",
        listItem: "",
        handle: "",
        handleIcon: "",
        dnd: "",
        button: ""
      }
    };
  }
};
var _hoisted_1$n = ["aria-labelledby", "aria-placeholder"];
var _hoisted_2$f = ["id", "accept", "disabled"];
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DragAndDrop = resolveComponent("DragAndDrop");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    {
      multiple: true,
      ref: "container"
    },
    createSlots({
      element: withCtx(() => [
        createCommentVNode(" Drag n drop "),
        _ctx.drop && _ctx.canDrop && _ctx.hasAdd ? (openBlock(), createBlock(_component_DragAndDrop, {
          key: 0,
          title: _ctx.form$.translations.vueform.elements[_ctx.type].dndTitle,
          description: _ctx.form$.translations.vueform.elements[_ctx.type].dndDescription,
          disabled: _ctx.isDisabled,
          class: normalizeClass(_ctx.classes.dnd),
          onClick: _ctx.handleClick,
          onDrop: _ctx.handleDrop
        }, null, 8, ["title", "description", "disabled", "class", "onClick", "onDrop"])) : _ctx.hasAdd ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" Upload button "),
            createBaseVNode("div", mergeProps(_ctx.aria, {
              class: _ctx.classes.button,
              "aria-labelledby": _ctx.labelId,
              "aria-placeholder": _ctx.form$.translations.vueform.elements.multifile.uploadButton,
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"])),
              onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["enter", "space"])),
              role: "button",
              tabindex: "0"
            }), toDisplayString(_ctx.form$.translations.vueform.elements.multifile.uploadButton), 17, _hoisted_1$n)
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" Actual input field "),
        withDirectives(createBaseVNode("input", {
          multiple: "",
          id: _ctx.fieldId,
          type: "file",
          onChange: _cache[2] || (_cache[2] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
          accept: _ctx.accept,
          disabled: _ctx.isDisabled,
          ref: "input"
        }, null, 40, _hoisted_2$f), [
          [vShow, false]
        ]),
        withDirectives((openBlock(), createElementBlock(
          "div",
          {
            class: normalizeClass(_ctx.classes.list),
            key: `${_ctx.fieldId}-${_ctx.length}`,
            ref: "list"
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.value, (val, i2) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    key: i2,
                    class: normalizeClass(_ctx.classes.listItem)
                  },
                  [
                    _ctx.prototype.type ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.component(_ctx.prototype)), mergeProps({
                      key: 0,
                      ref_for: true
                    }, _ctx.prototype, {
                      disabled: !_ctx.hasRemove,
                      embed: true,
                      name: i2,
                      onRemove: ($event) => _ctx.remove(i2)
                    }), null, 16, ["disabled", "name", "onRemove"])) : createCommentVNode("v-if", true),
                    createCommentVNode(" Sort handle "),
                    _ctx.hasSort ? (openBlock(), createElementBlock(
                      "span",
                      {
                        key: 1,
                        class: normalizeClass(_ctx.classes.handle),
                        "data-handle": ""
                      },
                      [
                        createBaseVNode(
                          "span",
                          {
                            class: normalizeClass(_ctx.classes.handleIcon)
                          },
                          null,
                          2
                          /* CLASS */
                        )
                      ],
                      2
                      /* CLASS */
                    )) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )), [
          [vShow, !_ctx.empty]
        ])
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$_.render = render$s;
script$_.__file = "themes/blank/templates/elements/MultifileElement.vue";
var script$Z = {
  name: "MultifileElement",
  render: script$_.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        list: "vf-multifile-list",
        list_sm: "vf-multifile-list-sm",
        list_md: "",
        list_lg: "vf-multifile-list-lg",
        list_file: "vf-multifile-list-file",
        list_file_sm: "",
        list_file_md: "",
        list_file_lg: "",
        list_image: "vf-multifile-list-image",
        list_image_sm: "vf-multifile-list-image-sm",
        list_image_md: "",
        list_image_lg: "vf-multifile-list-image-lg",
        list_gallery: "vf-multifile-list-gallery",
        list_gallery_sm: "vf-multifile-list-gallery-sm",
        list_gallery_md: "",
        list_gallery_lg: "vf-multifile-list-gallery-lg",
        list_disabled: "vf-multifile-list-disabled",
        list_sorting: "vf-multifile-list-sorting",
        listItem: "",
        handle: "",
        handle_file: "vf-multifile-handle-file",
        handle_file_sm: "vf-multifile-handle-file-sm",
        handle_file_md: "",
        handle_file_lg: "vf-multifile-handle-file-lg",
        handle_image: "vf-multifile-handle-image",
        handle_image_sm: "vf-multifile-handle-image-sm",
        handle_image_md: "",
        handle_image_lg: "vf-multifile-handle-image-lg",
        handle_gallery: "vf-multifile-handle-gallery",
        handle_gallery_sm: "",
        handle_gallery_md: "",
        handle_gallery_lg: "",
        handleIcon: "",
        handleIcon_file: "vf-multifile-handle-icon-file",
        handleIcon_image: "vf-multifile-handle-icon-image",
        handleIcon_gallery: "vf-multifile-handle-icon-gallery",
        dnd: "",
        button: "vf-btn vf-btn-secondary",
        button_enabled: "",
        button_disabled: "vf-btn-disabled",
        button_sm: "vf-btn-sm",
        button_md: "",
        button_lg: "vf-btn-lg",
        $list: (classes2, { isDisabled, sorting, view, Size }) => [
          classes2.list,
          classes2[`list_${Size}`],
          isDisabled ? classes2.list_disabled : null,
          sorting ? classes2.list_sorting : null,
          classes2[`list_${view}`],
          classes2[`list_${view}_${Size}`]
        ],
        $handle: (classes2, { view, Size }) => [
          classes2.handle,
          classes2[`handle_${view}`],
          classes2[`handle_${view}_${Size}`]
        ],
        $handleIcon: (classes2, { view }) => [
          classes2.handleIcon,
          classes2[`handleIcon_${view}`]
        ],
        $button: (classes2, { isDisabled, preparing, Size }) => [
          classes2.button,
          classes2[`button_${Size}`],
          !isDisabled && !preparing ? classes2.button_enabled : null,
          isDisabled || preparing ? classes2.button_disabled : null
        ]
      }
    };
  }
};
var css_248z$u = `/* Some styles are contained in Vueform.vue */

.vf-multifile-list {
  margin-top: var(--vf-gutter);
}

.vf-multifile-list.vf-multifile-list-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-multifile-list.vf-multifile-list-lg {
  margin-top: var(--vf-gutter-lg);
}

.vf-multifile-list-file,
.vf-multifile-list-image {
  display: grid;
}

.vf-multifile-list-file > .vf-row,
.vf-multifile-list-image > .vf-row {
  position: relative;
}

.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-image,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-image {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-file {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-image {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-gallery.vf-multifile-list-sorting > div:hover .vf-multifile-handle-gallery {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-gallery > div {
  position: relative;
}

.vf-multifile-list-gallery > div:hover .vf-multifile-handle-gallery {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-handle-file,
.vf-multifile-handle-image {
  position: absolute;
  left: var(--vf-gutter);
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.vf-multifile-handle-file:active,
.vf-multifile-handle-image:active {
  cursor: grabbing;
}

.vf-multifile-handle-icon-file,
.vf-multifile-handle-icon-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: currentColor;
}

.vf-multifile-handle-file.vf-multifile-handle-file-sm .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-file.vf-multifile-handle-file-lg .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-image.vf-multifile-handle-image-sm .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-image.vf-multifile-handle-image-lg .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-gallery {
  position: absolute;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  border-radius: 999px;
  left: 0.1875rem;
  top: 0.1875rem;
  transform: none;
  background: var(--vf-gray-200);
}

.vf-multifile-handle-gallery:active {
  cursor: grabbing;
}

.vf-multifile-handle-gallery:hover {
  background-color: var(--vf-gray-300);
}

.vf-multifile-handle-icon-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: 1rem;
  height: 1rem;
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-gray-600);
}

.sortable-ghost {
  opacity: 0.6;
}`;
styleInject(css_248z$u);
script$Z.__file = "themes/vueform/templates/elements/MultifileElement.vue";
function isNullish$1(val) {
  return [null, void 0].indexOf(val) !== -1;
}
function useData(props, context, dep) {
  const { object, valueProp, mode } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const update = (val, triggerInput = true) => {
    iv.value = makeInternal(val);
    const externalVal = makeExternal(val);
    context.emit("change", externalVal, $this);
    if (triggerInput) {
      context.emit("input", externalVal);
      context.emit("update:modelValue", externalVal);
    }
  };
  const makeExternal = (val) => {
    if (object.value) {
      return val;
    }
    if (isNullish$1(val)) {
      return val;
    }
    return !Array.isArray(val) ? val[valueProp.value] : val.map((v2) => v2[valueProp.value]);
  };
  const makeInternal = (val) => {
    if (isNullish$1(val)) {
      return mode.value === "single" ? {} : [];
    }
    return val;
  };
  return {
    update
  };
}
function useValue$3(props, context) {
  const { value, modelValue, mode, valueProp } = toRefs(props);
  const iv = ref(mode.value !== "single" ? [] : {});
  const ev = computed(() => {
    return modelValue && modelValue.value !== void 0 ? modelValue.value : value.value;
  });
  const plainValue = computed(() => {
    return mode.value === "single" ? iv.value[valueProp.value] : iv.value.map((v2) => v2[valueProp.value]);
  });
  const textValue = computed(() => {
    return mode.value !== "single" ? iv.value.map((v2) => v2[valueProp.value]).join(",") : iv.value[valueProp.value];
  });
  return {
    iv,
    internalValue: iv,
    ev,
    externalValue: ev,
    textValue,
    plainValue
  };
}
function useSearch(props, context, dep) {
  const { regex } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const search = ref(null);
  const clearSearch = () => {
    search.value = "";
  };
  const handleSearchInput = (e2) => {
    search.value = e2.target.value;
  };
  const handleKeypress = (e2) => {
    if (regex && regex.value) {
      let regexp = regex.value;
      if (typeof regexp === "string") {
        regexp = new RegExp(regexp);
      }
      if (!e2.key.match(regexp)) {
        e2.preventDefault();
      }
    }
  };
  const handlePaste = (e2) => {
    if (regex && regex.value) {
      let clipboardData = e2.clipboardData || /* istanbul ignore next */
      window.clipboardData;
      let pastedData = clipboardData.getData("Text");
      let regexp = regex.value;
      if (typeof regexp === "string") {
        regexp = new RegExp(regexp);
      }
      if (!pastedData.split("").every((c2) => !!c2.match(regexp))) {
        e2.preventDefault();
      }
    }
    context.emit("paste", e2, $this);
  };
  watch(search, (val) => {
    if (!isOpen.value && val) {
      open();
    }
    context.emit("search-change", val, $this);
  });
  return {
    search,
    clearSearch,
    handleSearchInput,
    handleKeypress,
    handlePaste
  };
}
function usePointer$1(props, context, dep) {
  const { groupSelect, mode, groups, disabledProp } = toRefs(props);
  const pointer = ref(null);
  const setPointer = (option) => {
    if (option === void 0 || option !== null && option[disabledProp.value]) {
      return;
    }
    if (groups.value && option && option.group && (mode.value === "single" || !groupSelect.value)) {
      return;
    }
    pointer.value = option;
  };
  const clearPointer = () => {
    setPointer(null);
  };
  return {
    pointer,
    setPointer,
    clearPointer
  };
}
function normalize(str, strict = true) {
  return strict ? String(str).toLowerCase().trim() : String(str).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g), "ae").replace(new RegExp(/œ/g), "oe").replace(new RegExp(/ø/g), "o").replace(new RegExp("\\p{Diacritic}", "gu"), "");
}
function isObject(variable) {
  return Object.prototype.toString.call(variable) === "[object Object]";
}
function arraysEqual$1(array1, array2) {
  const array2Sorted = array2.slice().sort();
  return array1.length === array2.length && array1.slice().sort().every(function(value, index2) {
    return value === array2Sorted[index2];
  });
}
function useOptions(props, context, dep) {
  const {
    options,
    mode,
    trackBy: trackBy_,
    limit: limit2,
    hideSelected,
    createTag,
    createOption: createOption_,
    label,
    appendNewTag,
    appendNewOption: appendNewOption_,
    multipleLabel,
    object,
    loading,
    delay,
    resolveOnLoad,
    minChars,
    filterResults,
    clearOnSearch,
    clearOnSelect,
    valueProp,
    allowAbsent,
    groupLabel,
    canDeselect,
    max: max2,
    strict,
    closeOnSelect,
    closeOnDeselect,
    groups: groupped,
    reverse,
    infinite,
    groupOptions,
    groupHideEmpty,
    groupSelect,
    onCreate,
    disabledProp,
    searchStart,
    searchFilter
  } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const ev = dep.ev;
  const search = dep.search;
  const clearSearch = dep.clearSearch;
  const update = dep.update;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const focus = dep.focus;
  const deactivate = dep.deactivate;
  const close = dep.close;
  const localize = dep.localize;
  const ap = ref([]);
  const ro = ref([]);
  const resolving = ref(false);
  const searchWatcher = ref(null);
  const offset2 = ref(infinite.value && limit2.value === -1 ? 10 : limit2.value);
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false;
  });
  const appendNewOption = computed(() => {
    if (appendNewTag.value !== void 0) {
      return appendNewTag.value;
    } else if (appendNewOption_.value !== void 0) {
      return appendNewOption_.value;
    }
    return true;
  });
  const eo = computed(() => {
    if (groupped.value) {
      let groups = eg.value || /* istanbul ignore next */
      [];
      let eo2 = [];
      groups.forEach((group) => {
        optionsToArray(group[groupOptions.value]).forEach((option) => {
          eo2.push(Object.assign({}, option, group[disabledProp.value] ? { [disabledProp.value]: true } : {}));
        });
      });
      return eo2;
    } else {
      let eo2 = optionsToArray(ro.value || /* istanbul ignore next */
      []);
      if (ap.value.length) {
        eo2 = eo2.concat(ap.value);
      }
      return eo2;
    }
  });
  const pfo = computed(() => {
    let options2 = eo.value;
    if (reverse.value) {
      options2 = options2.reverse();
    }
    if (createdOption.value.length) {
      options2 = createdOption.value.concat(options2);
    }
    return filterOptions(options2);
  });
  const fo = computed(() => {
    let options2 = pfo.value;
    if (offset2.value > 0) {
      options2 = options2.slice(0, offset2.value);
    }
    return options2;
  });
  const eg = computed(() => {
    if (!groupped.value) {
      return [];
    }
    let eg2 = [];
    let groups = ro.value || /* istanbul ignore next */
    [];
    if (ap.value.length) {
      eg2.push({
        [groupLabel.value]: " ",
        [groupOptions.value]: [...ap.value],
        __CREATE__: true
      });
    }
    return eg2.concat(groups);
  });
  const pfg = computed(() => {
    let groups = [...eg.value].map((g2) => ({ ...g2 }));
    if (createdOption.value.length) {
      if (groups[0] && groups[0].__CREATE__) {
        groups[0][groupOptions.value] = [...createdOption.value, ...groups[0][groupOptions.value]];
      } else {
        groups = [{
          [groupLabel.value]: " ",
          [groupOptions.value]: [...createdOption.value],
          __CREATE__: true
        }].concat(groups);
      }
    }
    return groups;
  });
  const fg = computed(() => {
    if (!groupped.value) {
      return [];
    }
    let options2 = pfg.value;
    return filterGroups((options2 || /* istanbul ignore next */
    []).map((group, index2) => {
      const arrayOptions = optionsToArray(group[groupOptions.value]);
      return {
        ...group,
        index: index2,
        group: true,
        [groupOptions.value]: filterOptions(arrayOptions, false).map((o2) => Object.assign({}, o2, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
        __VISIBLE__: filterOptions(arrayOptions).map((o2) => Object.assign({}, o2, group[disabledProp.value] ? { [disabledProp.value]: true } : {}))
      };
    }));
  });
  const hasSelected = computed(() => {
    switch (mode.value) {
      case "single":
        return !isNullish$1(iv.value[valueProp.value]);
      case "multiple":
      case "tags":
        return !isNullish$1(iv.value) && iv.value.length > 0;
    }
  });
  const multipleLabelText = computed(() => {
    return multipleLabel !== void 0 && multipleLabel.value !== void 0 ? multipleLabel.value(iv.value, $this) : iv.value && iv.value.length > 1 ? `${iv.value.length} options selected` : `1 option selected`;
  });
  const noOptions = computed(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length;
  });
  const noResults = computed(() => {
    return eo.value.length > 0 && fo.value.length == 0 && (search.value && groupped.value || !groupped.value);
  });
  const createdOption = computed(() => {
    if (createOption.value === false || !search.value) {
      return [];
    }
    if (getOptionByTrackBy(search.value) !== -1) {
      return [];
    }
    return [{
      [valueProp.value]: search.value,
      [trackBy.value[0]]: search.value,
      [label.value]: search.value,
      __CREATE__: true
    }];
  });
  const trackBy = computed(() => {
    return trackBy_.value ? Array.isArray(trackBy_.value) ? trackBy_.value : [trackBy_.value] : [label.value];
  });
  const nullValue = computed(() => {
    switch (mode.value) {
      case "single":
        return null;
      case "multiple":
      case "tags":
        return [];
    }
  });
  const busy = computed(() => {
    return loading.value || resolving.value;
  });
  const select = (option) => {
    if (typeof option !== "object") {
      option = getOption(option);
    }
    switch (mode.value) {
      case "single":
        update(option);
        break;
      case "multiple":
      case "tags":
        update(iv.value.concat(option));
        break;
    }
    context.emit("select", finalValue(option), option, $this);
  };
  const deselect = (option) => {
    if (typeof option !== "object") {
      option = getOption(option);
    }
    switch (mode.value) {
      case "single":
        clear();
        break;
      case "tags":
      case "multiple":
        update(Array.isArray(option) ? iv.value.filter((v2) => option.map((o2) => o2[valueProp.value]).indexOf(v2[valueProp.value]) === -1) : iv.value.filter((v2) => v2[valueProp.value] != option[valueProp.value]));
        break;
    }
    context.emit("deselect", finalValue(option), option, $this);
  };
  const finalValue = (option) => {
    return object.value ? option : option[valueProp.value];
  };
  const remove = (option) => {
    deselect(option);
  };
  const handleTagRemove = (option, e2) => {
    if (e2.button !== 0) {
      e2.preventDefault();
      return;
    }
    remove(option);
  };
  const clear = () => {
    update(nullValue.value);
    context.emit("clear", $this);
  };
  const isSelected = (option) => {
    if (option.group !== void 0) {
      return mode.value === "single" ? false : areAllSelected(option[groupOptions.value]) && option[groupOptions.value].length;
    }
    switch (mode.value) {
      case "single":
        return !isNullish$1(iv.value) && iv.value[valueProp.value] == option[valueProp.value];
      case "tags":
      case "multiple":
        return !isNullish$1(iv.value) && iv.value.map((o2) => o2[valueProp.value]).indexOf(option[valueProp.value]) !== -1;
    }
  };
  const isDisabled = (option) => {
    return option[disabledProp.value] === true;
  };
  const isMax = () => {
    if (max2 === void 0 || max2.value === -1 || !hasSelected.value && max2.value > 0) {
      return false;
    }
    return iv.value.length >= max2.value;
  };
  const handleOptionClick = (option) => {
    if (isDisabled(option)) {
      return;
    }
    if (onCreate && onCreate.value && !isSelected(option) && option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
      option = onCreate.value(option, $this);
      if (option instanceof Promise) {
        resolving.value = true;
        option.then((result) => {
          resolving.value = false;
          handleOptionSelect(result);
        });
        return;
      }
    }
    handleOptionSelect(option);
  };
  const handleOptionSelect = (option) => {
    if (option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
    }
    switch (mode.value) {
      case "single":
        if (option && isSelected(option)) {
          if (canDeselect.value) {
            deselect(option);
          }
          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return;
        }
        if (option) {
          handleOptionAppend(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (closeOnSelect.value) {
          clearPointer();
          close();
        }
        if (option) {
          select(option);
        }
        break;
      case "multiple":
        if (option && isSelected(option)) {
          deselect(option);
          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return;
        }
        if (isMax()) {
          context.emit("max", $this);
          return;
        }
        if (option) {
          handleOptionAppend(option);
          select(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (hideSelected.value) {
          clearPointer();
        }
        if (closeOnSelect.value) {
          close();
        }
        break;
      case "tags":
        if (option && isSelected(option)) {
          deselect(option);
          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return;
        }
        if (isMax()) {
          context.emit("max", $this);
          return;
        }
        if (option) {
          handleOptionAppend(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (option) {
          select(option);
        }
        if (hideSelected.value) {
          clearPointer();
        }
        if (closeOnSelect.value) {
          close();
        }
        break;
    }
    if (!closeOnSelect.value) {
      focus();
    }
  };
  const handleGroupClick = (group) => {
    if (isDisabled(group) || mode.value === "single" || !groupSelect.value) {
      return;
    }
    switch (mode.value) {
      case "multiple":
      case "tags":
        if (areAllEnabledSelected(group[groupOptions.value])) {
          deselect(group[groupOptions.value]);
        } else {
          select(
            group[groupOptions.value].filter((o2) => iv.value.map((v2) => v2[valueProp.value]).indexOf(o2[valueProp.value]) === -1).filter((o2) => !o2[disabledProp.value]).filter((o2, k2) => iv.value.length + 1 + k2 <= max2.value || max2.value === -1)
          );
        }
        if (hideSelected.value && pointer.value) {
          setPointer(fg.value.filter((g2) => !g2[disabledProp.value])[pointer.value.index]);
        }
        break;
    }
    if (closeOnSelect.value) {
      deactivate();
    }
  };
  const handleOptionAppend = (option) => {
    if (getOption(option[valueProp.value]) === void 0 && createOption.value) {
      context.emit("tag", option[valueProp.value], $this);
      context.emit("option", option[valueProp.value], $this);
      context.emit("create", option[valueProp.value], $this);
      if (appendNewOption.value) {
        appendOption(option);
      }
      clearSearch();
    }
  };
  const selectAll = () => {
    if (mode.value === "single") {
      return;
    }
    select(fo.value.filter((o2) => !o2.disabled && !isSelected(o2)));
  };
  const areAllEnabledSelected = (options2) => {
    return options2.find((o2) => !isSelected(o2) && !o2[disabledProp.value]) === void 0;
  };
  const areAllSelected = (options2) => {
    return options2.find((o2) => !isSelected(o2)) === void 0;
  };
  const getOption = (val) => {
    return eo.value[eo.value.map((o2) => String(o2[valueProp.value])).indexOf(String(val))];
  };
  const getOptionByTrackBy = (val) => {
    return eo.value.findIndex((o2) => {
      return trackBy.value.some((track) => {
        return (parseInt(o2[track]) == o2[track] ? parseInt(o2[track]) : o2[track]) === (parseInt(val) == val ? parseInt(val) : val);
      });
    });
  };
  const shouldHideOption = (option) => {
    return ["tags", "multiple"].indexOf(mode.value) !== -1 && hideSelected.value && isSelected(option);
  };
  const appendOption = (option) => {
    ap.value.push(option);
  };
  const filterGroups = (groups) => {
    return groupHideEmpty.value ? groups.filter(
      (g2) => search.value ? g2.__VISIBLE__.length : g2[groupOptions.value].length
    ) : groups.filter((g2) => search.value ? g2.__VISIBLE__.length : true);
  };
  const filterOptions = (options2, excludeHideSelected = true) => {
    let fo2 = options2;
    if (search.value && filterResults.value) {
      let filter = searchFilter.value;
      if (!filter) {
        filter = (option, query, $this2) => {
          return trackBy.value.some((track) => {
            let target = normalize(localize(option[track]), strict.value);
            return searchStart.value ? target.startsWith(normalize(query, strict.value)) : target.indexOf(normalize(query, strict.value)) !== -1;
          });
        };
      }
      fo2 = fo2.filter((o2) => {
        return filter(o2, search.value, $this);
      });
    }
    if (hideSelected.value && excludeHideSelected) {
      fo2 = fo2.filter((option) => !shouldHideOption(option));
    }
    return fo2;
  };
  const optionsToArray = (options2) => {
    let uo = options2;
    if (isObject(uo)) {
      uo = Object.keys(uo).map((key) => {
        let val = uo[key];
        return { [valueProp.value]: key, [trackBy.value[0]]: val, [label.value]: val };
      });
    }
    uo = uo.map((val) => {
      return typeof val === "object" ? val : { [valueProp.value]: val, [trackBy.value[0]]: val, [label.value]: val };
    });
    return uo;
  };
  const initInternalValue = () => {
    if (!isNullish$1(ev.value)) {
      iv.value = makeInternal(ev.value);
    }
  };
  const resolveOptions = (callback) => {
    resolving.value = true;
    return new Promise((resolve, reject) => {
      options.value(search.value, $this).then((response) => {
        ro.value = response || [];
        if (typeof callback == "function") {
          callback(response);
        }
        resolving.value = false;
      }).catch((e2) => {
        console.error(e2);
        ro.value = [];
        resolving.value = false;
      }).finally(() => {
        resolve();
      });
    });
  };
  const refreshLabels = () => {
    if (!hasSelected.value) {
      return;
    }
    if (mode.value === "single") {
      let option = getOption(iv.value[valueProp.value]);
      if (option !== void 0) {
        let newLabel = option[label.value];
        iv.value[label.value] = newLabel;
        if (object.value) {
          ev.value[label.value] = newLabel;
        }
      }
    } else {
      iv.value.forEach((val, i2) => {
        let option = getOption(iv.value[i2][valueProp.value]);
        if (option !== void 0) {
          let newLabel = option[label.value];
          iv.value[i2][label.value] = newLabel;
          if (object.value) {
            ev.value[i2][label.value] = newLabel;
          }
        }
      });
    }
  };
  const refreshOptions = (callback) => {
    resolveOptions(callback);
  };
  const makeInternal = (val) => {
    if (isNullish$1(val)) {
      return mode.value === "single" ? {} : [];
    }
    if (object.value) {
      return val;
    }
    return mode.value === "single" ? getOption(val) || (allowAbsent.value ? {
      [label.value]: val,
      [valueProp.value]: val,
      [trackBy.value[0]]: val
    } : {}) : val.filter((v2) => !!getOption(v2) || allowAbsent.value).map((v2) => getOption(v2) || {
      [label.value]: v2,
      [valueProp.value]: v2,
      [trackBy.value[0]]: v2
    });
  };
  const initSearchWatcher = () => {
    searchWatcher.value = watch(search, (query) => {
      if (query.length < minChars.value || !query && minChars.value !== 0) {
        return;
      }
      resolving.value = true;
      if (clearOnSearch.value) {
        ro.value = [];
      }
      setTimeout(() => {
        if (query != search.value) {
          return;
        }
        options.value(search.value, $this).then((response) => {
          if (query == search.value || !search.value) {
            ro.value = response;
            pointer.value = fo.value.filter((o2) => o2[disabledProp.value] !== true)[0] || null;
            resolving.value = false;
          }
        }).catch(
          /* istanbul ignore next */
          (e2) => {
            console.error(e2);
          }
        );
      }, delay.value);
    }, { flush: "sync" });
  };
  if (mode.value !== "single" && !isNullish$1(ev.value) && !Array.isArray(ev.value)) {
    throw new Error(`v-model must be an array when using "${mode.value}" mode`);
  }
  if (options && typeof options.value == "function") {
    if (resolveOnLoad.value) {
      resolveOptions(initInternalValue);
    } else if (object.value == true) {
      initInternalValue();
    }
  } else {
    ro.value = options.value;
    initInternalValue();
  }
  if (delay.value > -1) {
    initSearchWatcher();
  }
  watch(delay, (value, old) => {
    if (searchWatcher.value) {
      searchWatcher.value();
    }
    if (value >= 0) {
      initSearchWatcher();
    }
  });
  watch(ev, (newValue) => {
    if (isNullish$1(newValue)) {
      update(makeInternal(newValue), false);
      return;
    }
    switch (mode.value) {
      case "single":
        if (object.value ? newValue[valueProp.value] != iv.value[valueProp.value] : newValue != iv.value[valueProp.value]) {
          update(makeInternal(newValue), false);
        }
        break;
      case "multiple":
      case "tags":
        if (!arraysEqual$1(object.value ? newValue.map((o2) => o2[valueProp.value]) : newValue, iv.value.map((o2) => o2[valueProp.value]))) {
          update(makeInternal(newValue), false);
        }
        break;
    }
  }, { deep: true });
  watch(options, (n2, o2) => {
    if (typeof props.options === "function") {
      if (resolveOnLoad.value && (!o2 || n2 && n2.toString() !== o2.toString())) {
        resolveOptions();
      }
    } else {
      ro.value = props.options;
      if (!Object.keys(iv.value).length) {
        initInternalValue();
      }
      refreshLabels();
    }
  });
  watch(label, refreshLabels);
  watch(limit2, (n2, o2) => {
    offset2.value = infinite.value && n2 === -1 ? 10 : n2;
  });
  return {
    pfo,
    fo,
    filteredOptions: fo,
    hasSelected,
    multipleLabelText,
    eo,
    extendedOptions: eo,
    eg,
    extendedGroups: eg,
    fg,
    filteredGroups: fg,
    noOptions,
    noResults,
    resolving,
    busy,
    offset: offset2,
    select,
    deselect,
    remove,
    selectAll,
    clear,
    isSelected,
    isDisabled,
    isMax,
    getOption,
    handleOptionClick,
    handleGroupClick,
    handleTagRemove,
    refreshOptions,
    resolveOptions,
    refreshLabels
  };
}
function usePointer(props, context, dep) {
  const {
    valueProp,
    showOptions,
    searchable,
    groupLabel,
    groups: groupped,
    mode,
    groupSelect,
    disabledProp,
    groupOptions
  } = toRefs(props);
  const fo = dep.fo;
  const fg = dep.fg;
  const handleOptionClick = dep.handleOptionClick;
  const handleGroupClick = dep.handleGroupClick;
  const search = dep.search;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const multiselect = dep.multiselect;
  const isOpen = dep.isOpen;
  const options = computed(() => {
    return fo.value.filter((o2) => !o2[disabledProp.value]);
  });
  const groups = computed(() => {
    return fg.value.filter((g2) => !g2[disabledProp.value]);
  });
  const canPointGroups = computed(() => {
    return mode.value !== "single" && groupSelect.value;
  });
  const isPointerGroup = computed(() => {
    return pointer.value && pointer.value.group;
  });
  const currentGroup = computed(() => {
    return getParentGroup(pointer.value);
  });
  const prevGroup = computed(() => {
    const group = isPointerGroup.value ? pointer.value : (
      /* istanbul ignore next */
      getParentGroup(pointer.value)
    );
    const groupIndex = groups.value.map((g2) => g2[groupLabel.value]).indexOf(group[groupLabel.value]);
    let prevGroup2 = groups.value[groupIndex - 1];
    if (prevGroup2 === void 0) {
      prevGroup2 = lastGroup.value;
    }
    return prevGroup2;
  });
  const nextGroup = computed(() => {
    let nextIndex = groups.value.map((g2) => g2.label).indexOf(isPointerGroup.value ? pointer.value[groupLabel.value] : getParentGroup(pointer.value)[groupLabel.value]) + 1;
    if (groups.value.length <= nextIndex) {
      nextIndex = 0;
    }
    return groups.value[nextIndex];
  });
  const lastGroup = computed(() => {
    return [...groups.value].slice(-1)[0];
  });
  const currentGroupFirstEnabledOption = computed(() => {
    return pointer.value.__VISIBLE__.filter((o2) => !o2[disabledProp.value])[0];
  });
  const currentGroupPrevEnabledOption = computed(() => {
    const options2 = currentGroup.value.__VISIBLE__.filter((o2) => !o2[disabledProp.value]);
    return options2[options2.map((o2) => o2[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1];
  });
  const currentGroupNextEnabledOption = computed(() => {
    const options2 = getParentGroup(pointer.value).__VISIBLE__.filter((o2) => !o2[disabledProp.value]);
    return options2[options2.map((o2) => o2[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1];
  });
  const prevGroupLastEnabledOption = computed(() => {
    return [...prevGroup.value.__VISIBLE__.filter((o2) => !o2[disabledProp.value])].slice(-1)[0];
  });
  const lastGroupLastEnabledOption = computed(() => {
    return [...lastGroup.value.__VISIBLE__.filter((o2) => !o2[disabledProp.value])].slice(-1)[0];
  });
  const isPointed = (option) => {
    return !!pointer.value && (!option.group && pointer.value[valueProp.value] === option[valueProp.value] || option.group !== void 0 && pointer.value[groupLabel.value] === option[groupLabel.value]) ? true : void 0;
  };
  const setPointerFirst = () => {
    setPointer(options.value[0] || null);
  };
  const selectPointer = () => {
    if (!pointer.value || pointer.value[disabledProp.value] === true) {
      return;
    }
    if (isPointerGroup.value) {
      handleGroupClick(pointer.value);
    } else {
      handleOptionClick(pointer.value);
    }
  };
  const forwardPointer = () => {
    if (pointer.value === null) {
      setPointer((groupped.value && canPointGroups.value ? !groups.value[0].__CREATE__ ? groups.value[0] : options.value[0] : options.value[0]) || null);
    } else if (groupped.value && canPointGroups.value) {
      let nextPointer = isPointerGroup.value ? currentGroupFirstEnabledOption.value : currentGroupNextEnabledOption.value;
      if (nextPointer === void 0) {
        nextPointer = nextGroup.value;
        if (nextPointer.__CREATE__) {
          nextPointer = nextPointer[groupOptions.value][0];
        }
      }
      setPointer(nextPointer || /* istanbul ignore next */
      null);
    } else {
      let next = options.value.map((o2) => o2[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1;
      if (options.value.length <= next) {
        next = 0;
      }
      setPointer(options.value[next] || null);
    }
    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };
  const backwardPointer = () => {
    if (pointer.value === null) {
      let prevPointer = options.value[options.value.length - 1];
      if (groupped.value && canPointGroups.value) {
        prevPointer = lastGroupLastEnabledOption.value;
        if (prevPointer === void 0) {
          prevPointer = lastGroup.value;
        }
      }
      setPointer(prevPointer || null);
    } else if (groupped.value && canPointGroups.value) {
      let prevPointer = isPointerGroup.value ? prevGroupLastEnabledOption.value : currentGroupPrevEnabledOption.value;
      if (prevPointer === void 0) {
        prevPointer = isPointerGroup.value ? prevGroup.value : currentGroup.value;
        if (prevPointer.__CREATE__) {
          prevPointer = prevGroupLastEnabledOption.value;
          if (prevPointer === void 0) {
            prevPointer = prevGroup.value;
          }
        }
      }
      setPointer(prevPointer || /* istanbul ignore next */
      null);
    } else {
      let prevIndex = options.value.map((o2) => o2[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1;
      if (prevIndex < 0) {
        prevIndex = options.value.length - 1;
      }
      setPointer(options.value[prevIndex] || null);
    }
    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };
  const getParentGroup = (option) => {
    return groups.value.find((group) => {
      return group.__VISIBLE__.map((o2) => o2[valueProp.value]).indexOf(option[valueProp.value]) !== -1;
    });
  };
  const adjustWrapperScrollToPointer = () => {
    let pointedOption = multiselect.value.querySelector(`[data-pointed]`);
    if (!pointedOption) {
      return;
    }
    let wrapper = pointedOption.parentElement.parentElement;
    if (groupped.value) {
      wrapper = isPointerGroup.value ? pointedOption.parentElement.parentElement.parentElement : pointedOption.parentElement.parentElement.parentElement.parentElement;
    }
    if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight;
    }
    if (pointedOption.offsetTop < wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop;
    }
  };
  watch(search, (val) => {
    if (searchable.value) {
      if (val.length && showOptions.value) {
        setPointerFirst();
      } else {
        clearPointer();
      }
    }
  });
  watch(isOpen, (val) => {
    if (val && (multiselect == null ? void 0 : multiselect.value)) {
      let firstSelected = multiselect.value.querySelectorAll(`[data-selected]`)[0];
      if (!firstSelected) {
        return;
      }
      let wrapper = firstSelected.parentElement.parentElement;
      nextTick(() => {
        if (wrapper.scrollTop > 0) {
          return;
        }
        wrapper.scrollTop = firstSelected.offsetTop;
      });
    }
  });
  return {
    pointer,
    canPointGroups,
    isPointed,
    setPointerFirst,
    selectPointer,
    forwardPointer,
    backwardPointer
  };
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$1(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$1,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper = popperGenerator({
  defaultModifiers
});
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i3) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i3).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i2 = numberOfChecks; _i2 > 0; _i2--) {
      var _ret = _loop(_i2);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function useDropdown(props, context, dep) {
  const { disabled, appendTo, appendToBody, openDirection } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const multiselect = dep.multiselect;
  const dropdown = dep.dropdown;
  const isOpen = ref(false);
  const popper2 = ref(null);
  const forcedPlacement = ref(null);
  const appended = computed(() => {
    return appendTo.value || appendToBody.value;
  });
  const placement = computed(() => {
    return openDirection.value === "top" && forcedPlacement.value === "bottom" || openDirection.value === "bottom" && forcedPlacement.value !== "top" ? "bottom" : "top";
  });
  const open = () => {
    if (isOpen.value || disabled.value) {
      return;
    }
    isOpen.value = true;
    context.emit("open", $this);
    if (appended.value) {
      nextTick(() => {
        updatePopper();
      });
    }
  };
  const close = () => {
    if (!isOpen.value) {
      return;
    }
    isOpen.value = false;
    context.emit("close", $this);
  };
  const updatePopper = () => {
    if (!popper2.value) {
      return;
    }
    let borderTopWidth = parseInt(window.getComputedStyle(dropdown.value).borderTopWidth.replace("px", ""));
    let borderBottomWidth = parseInt(window.getComputedStyle(dropdown.value).borderBottomWidth.replace("px", ""));
    popper2.value.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        {
          name: "offset",
          options: {
            offset: [0, (placement.value === "top" ? borderTopWidth : borderBottomWidth) * -1]
          }
        }
      ]
    }));
    popper2.value.update();
  };
  const hasFixedParent = (element) => {
    while (element && element !== document.body) {
      const style = getComputedStyle(element);
      if (style.position === "fixed") {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  };
  onMounted(() => {
    if (!appended.value) {
      return;
    }
    popper2.value = createPopper(multiselect.value, dropdown.value, {
      strategy: hasFixedParent(multiselect.value) ? (
        /* istanbul ignore next: UI feature */
        "fixed"
      ) : void 0,
      placement: openDirection.value,
      modifiers: [
        preventOverflow$1,
        flip$1,
        {
          name: "sameWidth",
          enabled: true,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`;
          },
          effect: ({ state }) => {
            state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
          }
        },
        {
          name: "toggleClass",
          enabled: true,
          phase: "write",
          fn({ state }) {
            forcedPlacement.value = state.placement;
          }
        }
      ]
    });
  });
  onBeforeUnmount(() => {
    if (!appended.value || !popper2.value) {
      return;
    }
    popper2.value.destroy();
    popper2.value = null;
  });
  return {
    popper: popper2,
    isOpen,
    open,
    close,
    placement,
    updatePopper
  };
}
function useMultiselect(props, context, dep) {
  const { searchable, disabled, clearOnBlur } = toRefs(props);
  const input = dep.input;
  const open = dep.open;
  const close = dep.close;
  const clearSearch = dep.clearSearch;
  const isOpen = dep.isOpen;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isActive = ref(false);
  const mouseClicked = ref(false);
  const tabindex = computed(() => {
    return searchable.value || disabled.value ? -1 : 0;
  });
  const blur = () => {
    if (searchable.value) {
      input.value.blur();
    }
    wrapper.value.blur();
  };
  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus();
    }
  };
  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return;
    }
    isActive.value = true;
    if (shouldOpen) {
      open();
    }
  };
  const deactivate = () => {
    isActive.value = false;
    setTimeout(() => {
      if (!isActive.value) {
        close();
        if (clearOnBlur.value) {
          clearSearch();
        }
      }
    }, 1);
  };
  const handleFocusIn = (e2) => {
    if (e2.target.closest("[data-tags]") && e2.target.nodeName !== "INPUT" || e2.target.closest("[data-clear]")) {
      return;
    }
    activate(mouseClicked.value);
  };
  const handleFocusOut = () => {
    deactivate();
  };
  const handleCaretClick = () => {
    deactivate();
    blur();
  };
  const handleMousedown = (e2) => {
    mouseClicked.value = true;
    if (isOpen.value && (e2.target.isEqualNode(wrapper.value) || e2.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate();
      }, 0);
    } else if (!isOpen.value && (document.activeElement.isEqualNode(wrapper.value) || document.activeElement.isEqualNode(input.value))) {
      activate();
    }
    setTimeout(() => {
      mouseClicked.value = false;
    }, 0);
  };
  return {
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown
  };
}
function useKeyboard(props, context, dep) {
  const {
    mode,
    addTagOn,
    openDirection,
    searchable,
    showOptions,
    valueProp,
    groups: groupped,
    addOptionOn: addOptionOn_,
    createTag,
    createOption: createOption_,
    reverse
  } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const update = dep.update;
  const deselect = dep.deselect;
  const search = dep.search;
  const setPointer = dep.setPointer;
  const selectPointer = dep.selectPointer;
  const backwardPointer = dep.backwardPointer;
  const forwardPointer = dep.forwardPointer;
  const multiselect = dep.multiselect;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const blur = dep.blur;
  const fo = dep.fo;
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false;
  });
  const addOptionOn = computed(() => {
    if (addTagOn.value !== void 0) {
      return addTagOn.value;
    } else if (addOptionOn_.value !== void 0) {
      return addOptionOn_.value;
    }
    return ["enter"];
  });
  const preparePointer = () => {
    if (mode.value === "tags" && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map((o2) => o2[valueProp.value]).indexOf(search.value)]);
    }
  };
  const handleKeydown = (e2) => {
    context.emit("keydown", e2, $this);
    let tagList;
    let activeIndex;
    if (["ArrowLeft", "ArrowRight", "Enter"].indexOf(e2.key) !== -1 && mode.value === "tags") {
      tagList = [...multiselect.value.querySelectorAll(`[data-tags] > *`)].filter((e3) => e3 !== tags.value);
      activeIndex = tagList.findIndex((e3) => e3 === document.activeElement);
    }
    switch (e2.key) {
      case "Backspace":
        if (mode.value === "single") {
          return;
        }
        if (searchable.value && [null, ""].indexOf(search.value) === -1) {
          return;
        }
        if (iv.value.length === 0) {
          return;
        }
        let deselectables = iv.value.filter((v2) => !v2.disabled && v2.remove !== false);
        if (deselectables.length) {
          deselect(deselectables[deselectables.length - 1]);
        }
        break;
      case "Enter":
        e2.preventDefault();
        if (e2.keyCode === 229) {
          return;
        }
        if (activeIndex !== -1 && activeIndex !== void 0) {
          update([...iv.value].filter((v2, k2) => k2 !== activeIndex));
          if (activeIndex === tagList.length - 1) {
            if (tagList.length - 1) {
              tagList[tagList.length - 2].focus();
            } else if (searchable.value) {
              tags.value.querySelector("input").focus();
            } else {
              wrapper.value.focus();
            }
          }
          return;
        }
        if (addOptionOn.value.indexOf("enter") === -1 && createOption.value) {
          return;
        }
        preparePointer();
        selectPointer();
        break;
      case " ":
        if (!createOption.value && !searchable.value) {
          e2.preventDefault();
          preparePointer();
          selectPointer();
          return;
        }
        if (!createOption.value) {
          return false;
        }
        if (addOptionOn.value.indexOf("space") === -1 && createOption.value) {
          return;
        }
        e2.preventDefault();
        preparePointer();
        selectPointer();
        break;
      case "Tab":
      case ";":
      case ",":
        if (addOptionOn.value.indexOf(e2.key.toLowerCase()) === -1 || !createOption.value) {
          return;
        }
        preparePointer();
        selectPointer();
        e2.preventDefault();
        break;
      case "Escape":
        blur();
        break;
      case "ArrowUp":
        e2.preventDefault();
        if (!showOptions.value) {
          return;
        }
        if (!isOpen.value) {
          open();
        }
        backwardPointer();
        break;
      case "ArrowDown":
        e2.preventDefault();
        if (!showOptions.value) {
          return;
        }
        if (!isOpen.value) {
          open();
        }
        forwardPointer();
        break;
      case "ArrowLeft":
        if (searchable.value && tags.value && tags.value.querySelector("input").selectionStart || e2.shiftKey || mode.value !== "tags" || !iv.value || !iv.value.length) {
          return;
        }
        e2.preventDefault();
        if (activeIndex === -1) {
          tagList[tagList.length - 1].focus();
        } else if (activeIndex > 0) {
          tagList[activeIndex - 1].focus();
        }
        break;
      case "ArrowRight":
        if (activeIndex === -1 || e2.shiftKey || mode.value !== "tags" || !iv.value || !iv.value.length) {
          return;
        }
        e2.preventDefault();
        if (tagList.length > activeIndex + 1) {
          tagList[activeIndex + 1].focus();
        } else if (searchable.value) {
          tags.value.querySelector("input").focus();
        } else if (!searchable.value) {
          wrapper.value.focus();
        }
        break;
    }
  };
  const handleKeyup = (e2) => {
    context.emit("keyup", e2, $this);
  };
  return {
    handleKeydown,
    handleKeyup,
    preparePointer
  };
}
function useClasses$2(props, context, dependencies) {
  const {
    classes: classes_,
    disabled,
    showOptions,
    breakTags
  } = toRefs(props);
  const isOpen = dependencies.isOpen;
  const isPointed = dependencies.isPointed;
  const isSelected = dependencies.isSelected;
  const isDisabled = dependencies.isDisabled;
  const isActive = dependencies.isActive;
  const canPointGroups = dependencies.canPointGroups;
  const resolving = dependencies.resolving;
  const fo = dependencies.fo;
  const placement = dependencies.placement;
  const classes2 = computed(() => ({
    container: "multiselect",
    containerDisabled: "is-disabled",
    containerOpen: "is-open",
    containerOpenTop: "is-open-top",
    containerActive: "is-active",
    wrapper: "multiselect-wrapper",
    singleLabel: "multiselect-single-label",
    singleLabelText: "multiselect-single-label-text",
    multipleLabel: "multiselect-multiple-label",
    search: "multiselect-search",
    tags: "multiselect-tags",
    tag: "multiselect-tag",
    tagWrapper: "multiselect-tag-wrapper",
    tagWrapperBreak: "multiselect-tag-wrapper-break",
    tagDisabled: "is-disabled",
    tagRemove: "multiselect-tag-remove",
    tagRemoveIcon: "multiselect-tag-remove-icon",
    tagsSearchWrapper: "multiselect-tags-search-wrapper",
    tagsSearch: "multiselect-tags-search",
    tagsSearchCopy: "multiselect-tags-search-copy",
    placeholder: "multiselect-placeholder",
    caret: "multiselect-caret",
    caretOpen: "is-open",
    clear: "multiselect-clear",
    clearIcon: "multiselect-clear-icon",
    spinner: "multiselect-spinner",
    inifinite: "multiselect-inifite",
    inifiniteSpinner: "multiselect-inifite-spinner",
    dropdown: "multiselect-dropdown",
    dropdownTop: "is-top",
    dropdownHidden: "is-hidden",
    options: "multiselect-options",
    optionsTop: "is-top",
    group: "multiselect-group",
    groupLabel: "multiselect-group-label",
    groupLabelPointable: "is-pointable",
    groupLabelPointed: "is-pointed",
    groupLabelSelected: "is-selected",
    groupLabelDisabled: "is-disabled",
    groupLabelSelectedPointed: "is-selected is-pointed",
    groupLabelSelectedDisabled: "is-selected is-disabled",
    groupOptions: "multiselect-group-options",
    option: "multiselect-option",
    optionPointed: "is-pointed",
    optionSelected: "is-selected",
    optionDisabled: "is-disabled",
    optionSelectedPointed: "is-selected is-pointed",
    optionSelectedDisabled: "is-selected is-disabled",
    noOptions: "multiselect-no-options",
    noResults: "multiselect-no-results",
    fakeInput: "multiselect-fake-input",
    assist: "multiselect-assistive-text",
    spacer: "multiselect-spacer",
    ...classes_.value
  }));
  const showDropdown = computed(() => {
    return !!(isOpen.value && showOptions.value && (!resolving.value || resolving.value && fo.value.length));
  });
  const classList = computed(() => {
    const c2 = classes2.value;
    return {
      container: [c2.container].concat(disabled.value ? c2.containerDisabled : []).concat(showDropdown.value && placement.value === "top" ? c2.containerOpenTop : []).concat(showDropdown.value && placement.value !== "top" ? c2.containerOpen : []).concat(isActive.value ? c2.containerActive : []),
      wrapper: c2.wrapper,
      spacer: c2.spacer,
      singleLabel: c2.singleLabel,
      singleLabelText: c2.singleLabelText,
      multipleLabel: c2.multipleLabel,
      search: c2.search,
      tags: c2.tags,
      tag: [c2.tag].concat(disabled.value ? c2.tagDisabled : []),
      tagWrapper: [c2.tagWrapper, breakTags.value ? c2.tagWrapperBreak : null],
      tagDisabled: c2.tagDisabled,
      tagRemove: c2.tagRemove,
      tagRemoveIcon: c2.tagRemoveIcon,
      tagsSearchWrapper: c2.tagsSearchWrapper,
      tagsSearch: c2.tagsSearch,
      tagsSearchCopy: c2.tagsSearchCopy,
      placeholder: c2.placeholder,
      caret: [c2.caret].concat(isOpen.value ? c2.caretOpen : []),
      clear: c2.clear,
      clearIcon: c2.clearIcon,
      spinner: c2.spinner,
      inifinite: c2.inifinite,
      inifiniteSpinner: c2.inifiniteSpinner,
      dropdown: [c2.dropdown].concat(placement.value === "top" ? c2.dropdownTop : []).concat(!isOpen.value || !showOptions.value || !showDropdown.value ? c2.dropdownHidden : []),
      options: [c2.options].concat(placement.value === "top" ? c2.optionsTop : []),
      group: c2.group,
      groupLabel: (g2) => {
        let groupLabel = [c2.groupLabel];
        if (isPointed(g2)) {
          groupLabel.push(isSelected(g2) ? c2.groupLabelSelectedPointed : c2.groupLabelPointed);
        } else if (isSelected(g2) && canPointGroups.value) {
          groupLabel.push(isDisabled(g2) ? c2.groupLabelSelectedDisabled : c2.groupLabelSelected);
        } else if (isDisabled(g2)) {
          groupLabel.push(c2.groupLabelDisabled);
        }
        if (canPointGroups.value) {
          groupLabel.push(c2.groupLabelPointable);
        }
        return groupLabel;
      },
      groupOptions: c2.groupOptions,
      option: (o2, g2) => {
        let option = [c2.option];
        if (isPointed(o2)) {
          option.push(isSelected(o2) ? c2.optionSelectedPointed : c2.optionPointed);
        } else if (isSelected(o2)) {
          option.push(isDisabled(o2) ? c2.optionSelectedDisabled : c2.optionSelected);
        } else if (isDisabled(o2) || g2 && isDisabled(g2)) {
          option.push(c2.optionDisabled);
        }
        return option;
      },
      noOptions: c2.noOptions,
      noResults: c2.noResults,
      assist: c2.assist,
      fakeInput: c2.fakeInput
    };
  });
  return {
    classList,
    showDropdown
  };
}
function useScroll(props, context, dep) {
  const {
    limit: limit2,
    infinite
  } = toRefs(props);
  const isOpen = dep.isOpen;
  const offset2 = dep.offset;
  const search = dep.search;
  const pfo = dep.pfo;
  const eo = dep.eo;
  const observer = ref(null);
  const infiniteLoader = ref(null);
  const hasMore = computed(() => {
    return offset2.value < pfo.value.length;
  });
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0];
    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;
      offset2.value += limit2.value == -1 ? 10 : limit2.value;
      nextTick(() => {
        parent.scrollTop = scrollTop;
      });
    }
  };
  const observe = () => {
    if (isOpen.value && offset2.value < pfo.value.length) {
      observer.value.observe(infiniteLoader.value);
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect();
    }
  };
  watch(isOpen, () => {
    if (!infinite.value) {
      return;
    }
    observe();
  });
  watch(search, () => {
    if (!infinite.value) {
      return;
    }
    offset2.value = limit2.value;
    observe();
  }, { flush: "post" });
  watch(eo, () => {
    if (!infinite.value) {
      return;
    }
    observe();
  }, { immediate: false, flush: "post" });
  onMounted(() => {
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver);
    }
  });
  return {
    hasMore,
    infiniteLoader
  };
}
function useA11y(props, context, dep) {
  const {
    placeholder,
    id,
    valueProp,
    label: labelProp,
    mode,
    groupLabel,
    aria,
    searchable
  } = toRefs(props);
  const pointer = dep.pointer;
  const iv = dep.iv;
  const hasSelected = dep.hasSelected;
  const multipleLabelText = dep.multipleLabelText;
  const label = ref(null);
  const ariaAssist = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("assist");
    return texts.join("-");
  });
  const ariaControls = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-options");
    return texts.join("-");
  });
  const ariaActiveDescendant = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    if (pointer.value) {
      texts.push(pointer.value.group ? "multiselect-group" : "multiselect-option");
      texts.push(pointer.value.group ? pointer.value.index : pointer.value[valueProp.value]);
      return texts.join("-");
    }
  });
  const ariaPlaceholder = computed(() => {
    return placeholder.value;
  });
  const ariaMultiselectable = computed(() => {
    return mode.value !== "single";
  });
  const ariaLabel = computed(() => {
    let ariaLabel2 = "";
    if (mode.value === "single" && hasSelected.value) {
      ariaLabel2 += iv.value[labelProp.value];
    }
    if (mode.value === "multiple" && hasSelected.value) {
      ariaLabel2 += multipleLabelText.value;
    }
    if (mode.value === "tags" && hasSelected.value) {
      ariaLabel2 += iv.value.map((v2) => v2[labelProp.value]).join(", ");
    }
    return ariaLabel2;
  });
  const arias = computed(() => {
    let arias2 = { ...aria.value };
    if (searchable.value) {
      arias2["aria-labelledby"] = arias2["aria-labelledby"] ? `${ariaAssist.value} ${arias2["aria-labelledby"]}` : ariaAssist.value;
      if (ariaLabel.value && arias2["aria-label"]) {
        arias2["aria-label"] = `${ariaLabel.value}, ${arias2["aria-label"]}`;
      }
    }
    return arias2;
  });
  const ariaOptionId = (option) => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-option");
    texts.push(option[valueProp.value]);
    return texts.join("-");
  };
  const ariaGroupId = (option) => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-group");
    texts.push(option.index);
    return texts.join("-");
  };
  const ariaOptionLabel = (label2) => {
    let texts = [];
    texts.push(label2);
    return texts.join(" ");
  };
  const ariaGroupLabel = (label2) => {
    let texts = [];
    texts.push(label2);
    return texts.join(" ");
  };
  const ariaTagLabel = (label2) => {
    return `${label2} ❎`;
  };
  onMounted(() => {
    if (id && id.value && document && document.querySelector) {
      let forTag = document.querySelector(`[for="${id.value}"]`);
      label.value = forTag ? forTag.innerText : null;
    }
  });
  return {
    arias,
    ariaLabel,
    ariaAssist,
    ariaControls,
    ariaPlaceholder,
    ariaMultiselectable,
    ariaActiveDescendant,
    ariaOptionId,
    ariaOptionLabel,
    ariaGroupId,
    ariaGroupLabel,
    ariaTagLabel
  };
}
function useI18n(props, context, dep) {
  const {
    locale,
    fallbackLocale
  } = toRefs(props);
  const localize = (target) => {
    if (!target || typeof target !== "object") {
      return target;
    }
    if (target && target[locale.value]) {
      return target[locale.value];
    } else if (target && locale.value && target[locale.value.toUpperCase()]) {
      return target[locale.value.toUpperCase()];
    } else if (target && target[fallbackLocale.value]) {
      return target[fallbackLocale.value];
    } else if (target && fallbackLocale.value && target[fallbackLocale.value.toUpperCase()]) {
      return target[fallbackLocale.value.toUpperCase()];
    } else if (target && Object.keys(target)[0]) {
      return target[Object.keys(target)[0]];
    } else {
      return "";
    }
  };
  return {
    localize
  };
}
function useRefs(props, context, dep) {
  const multiselect = ref(null);
  const wrapper = ref(null);
  const tags = ref(null);
  const input = ref(null);
  const dropdown = ref(null);
  return {
    multiselect,
    wrapper,
    tags,
    input,
    dropdown
  };
}
function resolveDeps(props, context, features, deps = {}) {
  features.forEach((composable) => {
    if (composable) {
      deps = {
        ...deps,
        ...composable(props, context, deps)
      };
    }
  });
  return deps;
}
var script$Y = {
  name: "Multiselect",
  emits: [
    "paste",
    "open",
    "close",
    "select",
    "deselect",
    "input",
    "search-change",
    "tag",
    "option",
    "update:modelValue",
    "change",
    "clear",
    "keydown",
    "keyup",
    "max",
    "create"
  ],
  props: {
    value: {
      required: false
    },
    modelValue: {
      required: false
    },
    options: {
      type: [Array, Object, Function],
      required: false,
      default: () => []
    },
    id: {
      type: [String, Number],
      required: false
    },
    name: {
      type: [String, Number],
      required: false,
      default: "multiselect"
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: "label"
    },
    trackBy: {
      type: [String, Array],
      required: false,
      default: void 0
    },
    valueProp: {
      type: String,
      required: false,
      default: "value"
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    mode: {
      type: String,
      required: false,
      default: "single"
      // single|multiple|tags
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    limit: {
      type: Number,
      required: false,
      default: -1
    },
    hideSelected: {
      type: Boolean,
      required: false,
      default: true
    },
    createTag: {
      type: Boolean,
      required: false,
      default: void 0
    },
    createOption: {
      type: Boolean,
      required: false,
      default: void 0
    },
    appendNewTag: {
      type: Boolean,
      required: false,
      default: void 0
    },
    appendNewOption: {
      type: Boolean,
      required: false,
      default: void 0
    },
    addTagOn: {
      type: Array,
      required: false,
      default: void 0
    },
    addOptionOn: {
      type: Array,
      required: false,
      default: void 0
    },
    caret: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    noOptionsText: {
      type: [String, Object],
      required: false,
      default: "The list is empty"
    },
    noResultsText: {
      type: [String, Object],
      required: false,
      default: "No results found"
    },
    multipleLabel: {
      type: Function,
      required: false
    },
    object: {
      type: Boolean,
      required: false,
      default: false
    },
    delay: {
      type: Number,
      required: false,
      default: -1
    },
    minChars: {
      type: Number,
      required: false,
      default: 0
    },
    resolveOnLoad: {
      type: Boolean,
      required: false,
      default: true
    },
    filterResults: {
      type: Boolean,
      required: false,
      default: true
    },
    clearOnSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    clearOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    canDeselect: {
      type: Boolean,
      required: false,
      default: true
    },
    canClear: {
      type: Boolean,
      required: false,
      default: true
    },
    max: {
      type: Number,
      required: false,
      default: -1
    },
    showOptions: {
      type: Boolean,
      required: false,
      default: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    openDirection: {
      type: String,
      required: false,
      default: "bottom"
    },
    nativeSupport: {
      type: Boolean,
      required: false,
      default: false
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    strict: {
      type: Boolean,
      required: false,
      default: true
    },
    closeOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    closeOnDeselect: {
      type: Boolean,
      required: false,
      default: false
    },
    autocomplete: {
      type: String,
      required: false
    },
    groups: {
      type: Boolean,
      required: false,
      default: false
    },
    groupLabel: {
      type: String,
      required: false,
      default: "label"
    },
    groupOptions: {
      type: String,
      required: false,
      default: "options"
    },
    groupHideEmpty: {
      type: Boolean,
      required: false,
      default: false
    },
    groupSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    inputType: {
      type: String,
      required: false,
      default: "text"
    },
    attrs: {
      required: false,
      type: Object,
      default: () => ({})
    },
    onCreate: {
      required: false,
      type: Function
    },
    disabledProp: {
      type: String,
      required: false,
      default: "disabled"
    },
    searchStart: {
      type: Boolean,
      required: false,
      default: false
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    },
    regex: {
      type: [Object, String, RegExp],
      required: false,
      default: void 0
    },
    rtl: {
      type: Boolean,
      required: false,
      default: false
    },
    infinite: {
      type: Boolean,
      required: false,
      default: false
    },
    aria: {
      required: false,
      type: Object,
      default: () => ({})
    },
    clearOnBlur: {
      required: false,
      type: Boolean,
      default: true
    },
    locale: {
      required: false,
      type: String,
      default: null
    },
    fallbackLocale: {
      required: false,
      type: String,
      default: "en"
    },
    searchFilter: {
      required: false,
      type: Function,
      default: null
    },
    allowAbsent: {
      required: false,
      type: Boolean,
      default: false
    },
    appendToBody: {
      required: false,
      type: Boolean,
      default: false
    },
    closeOnScroll: {
      required: false,
      type: Boolean,
      default: false
    },
    breakTags: {
      required: false,
      type: Boolean,
      default: false
    },
    appendTo: {
      required: false,
      type: String
    }
  },
  setup(props, context) {
    return resolveDeps(props, context, [
      useRefs,
      useI18n,
      useValue$3,
      usePointer$1,
      useDropdown,
      useSearch,
      useData,
      useMultiselect,
      useOptions,
      useScroll,
      usePointer,
      useKeyboard,
      useClasses$2,
      useA11y
    ]);
  },
  beforeMount() {
    var _a, _b;
    if (((_b = (_a = this.$root.constructor) == null ? void 0 : _a.version) == null ? void 0 : _b.match(/^2\./)) || this.vueVersionMs === 2) {
      if (!this.$options.components.Teleport) {
        this.$options.components.Teleport = {
          render() {
            return this.$slots.default ? this.$slots.default[0] : null;
          }
        };
      }
    }
  }
};
var _hoisted_1$m = ["id", "dir"];
var _hoisted_2$e = ["tabindex", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable", "role"];
var _hoisted_3$9 = ["type", "modelValue", "value", "autocomplete", "id", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
var _hoisted_4$4 = ["onKeyup", "aria-label"];
var _hoisted_5$3 = ["onClick"];
var _hoisted_6$2 = ["type", "modelValue", "value", "id", "autocomplete", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
var _hoisted_7$1 = ["innerHTML"];
var _hoisted_8 = ["id"];
var _hoisted_9 = ["id"];
var _hoisted_10 = ["id", "aria-label", "aria-selected"];
var _hoisted_11 = ["data-pointed", "onMouseenter", "onMousedown"];
var _hoisted_12 = ["innerHTML"];
var _hoisted_13 = ["aria-label"];
var _hoisted_14 = ["data-pointed", "data-selected", "onMouseenter", "onMousedown", "id", "aria-selected", "aria-label"];
var _hoisted_15 = ["data-pointed", "data-selected", "onMouseenter", "onMousedown", "id", "aria-selected", "aria-label"];
var _hoisted_16 = ["innerHTML"];
var _hoisted_17 = ["innerHTML"];
var _hoisted_18 = ["value"];
var _hoisted_19 = ["name", "value"];
var _hoisted_20 = ["name", "value"];
var _hoisted_21 = ["id"];
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "multiselect",
    class: normalizeClass(_ctx.classList.container),
    id: $props.searchable ? void 0 : $props.id,
    dir: $props.rtl ? "rtl" : void 0,
    onFocusin: _cache[12] || (_cache[12] = (...args) => _ctx.handleFocusIn && _ctx.handleFocusIn(...args)),
    onFocusout: _cache[13] || (_cache[13] = (...args) => _ctx.handleFocusOut && _ctx.handleFocusOut(...args)),
    onKeyup: _cache[14] || (_cache[14] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args)),
    onKeydown: _cache[15] || (_cache[15] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    createBaseVNode("div", mergeProps({
      class: _ctx.classList.wrapper,
      onMousedown: _cache[9] || (_cache[9] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
      ref: "wrapper",
      tabindex: _ctx.tabindex,
      "aria-controls": !$props.searchable ? _ctx.ariaControls : void 0,
      "aria-placeholder": !$props.searchable ? _ctx.ariaPlaceholder : void 0,
      "aria-expanded": !$props.searchable ? _ctx.isOpen : void 0,
      "aria-activedescendant": !$props.searchable ? _ctx.ariaActiveDescendant : void 0,
      "aria-multiselectable": !$props.searchable ? _ctx.ariaMultiselectable : void 0,
      role: !$props.searchable ? "combobox" : void 0
    }, !$props.searchable ? _ctx.arias : {}), [
      createCommentVNode(" Search "),
      $props.mode !== "tags" && $props.searchable && !$props.disabled ? (openBlock(), createElementBlock("input", mergeProps({
        key: 0,
        type: $props.inputType,
        modelValue: _ctx.search,
        value: _ctx.search,
        class: _ctx.classList.search,
        autocomplete: $props.autocomplete,
        id: $props.searchable ? $props.id : void 0,
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.handleSearchInput && _ctx.handleSearchInput(...args)),
        onKeypress: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
        onPaste: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handlePaste && _ctx.handlePaste(...args), ["stop"])),
        ref: "input",
        "aria-controls": _ctx.ariaControls,
        "aria-placeholder": _ctx.ariaPlaceholder,
        "aria-expanded": _ctx.isOpen,
        "aria-activedescendant": _ctx.ariaActiveDescendant,
        "aria-multiselectable": _ctx.ariaMultiselectable,
        role: "combobox"
      }, {
        ...$props.attrs,
        ..._ctx.arias
      }), null, 16, _hoisted_3$9)) : createCommentVNode("v-if", true),
      createCommentVNode(" Tags (with search) "),
      $props.mode == "tags" ? (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          class: normalizeClass(_ctx.classList.tags),
          "data-tags": ""
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.iv, (option, i2, key) => {
              return renderSlot(_ctx.$slots, "tag", {
                option,
                handleTagRemove: _ctx.handleTagRemove,
                disabled: $props.disabled
              }, () => [
                (openBlock(), createElementBlock("span", {
                  class: normalizeClass([
                    _ctx.classList.tag,
                    option.disabled ? _ctx.classList.tagDisabled : null
                  ]),
                  tabindex: "-1",
                  onKeyup: withKeys(($event) => _ctx.handleTagRemove(option, $event), ["enter"]),
                  key,
                  "aria-label": _ctx.ariaTagLabel(_ctx.localize(option[$props.label]))
                }, [
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(_ctx.classList.tagWrapper)
                    },
                    toDisplayString(_ctx.localize(option[$props.label])),
                    3
                    /* TEXT, CLASS */
                  ),
                  !$props.disabled && !option.disabled ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(_ctx.classList.tagRemove),
                    onClick: withModifiers(($event) => _ctx.handleTagRemove(option, $event), ["stop"])
                  }, [
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(_ctx.classList.tagRemoveIcon)
                      },
                      null,
                      2
                      /* CLASS */
                    )
                  ], 10, _hoisted_5$3)) : createCommentVNode("v-if", true)
                ], 42, _hoisted_4$4))
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          )),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.classList.tagsSearchWrapper),
              ref: "tags"
            },
            [
              createCommentVNode(" Used for measuring search width "),
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.classList.tagsSearchCopy)
                },
                toDisplayString(_ctx.search),
                3
                /* TEXT, CLASS */
              ),
              createCommentVNode(" Actual search input "),
              $props.searchable && !$props.disabled ? (openBlock(), createElementBlock("input", mergeProps({
                key: 0,
                type: $props.inputType,
                modelValue: _ctx.search,
                value: _ctx.search,
                class: _ctx.classList.tagsSearch,
                id: $props.searchable ? $props.id : void 0,
                autocomplete: $props.autocomplete,
                onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleSearchInput && _ctx.handleSearchInput(...args)),
                onKeypress: _cache[4] || (_cache[4] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
                onPaste: _cache[5] || (_cache[5] = withModifiers((...args) => _ctx.handlePaste && _ctx.handlePaste(...args), ["stop"])),
                ref: "input",
                "aria-controls": _ctx.ariaControls,
                "aria-placeholder": _ctx.ariaPlaceholder,
                "aria-expanded": _ctx.isOpen,
                "aria-activedescendant": _ctx.ariaActiveDescendant,
                "aria-multiselectable": _ctx.ariaMultiselectable,
                role: "combobox"
              }, {
                ...$props.attrs,
                ..._ctx.arias
              }), null, 16, _hoisted_6$2)) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      createCommentVNode(" Single label "),
      $props.mode == "single" && _ctx.hasSelected && !_ctx.search && _ctx.iv ? renderSlot(_ctx.$slots, "singlelabel", {
        key: 2,
        value: _ctx.iv
      }, () => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classList.singleLabel)
          },
          [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(_ctx.classList.singleLabelText)
              },
              toDisplayString(_ctx.localize(_ctx.iv[$props.label])),
              3
              /* TEXT, CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Multiple label "),
      $props.mode == "multiple" && _ctx.hasSelected && !_ctx.search ? renderSlot(_ctx.$slots, "multiplelabel", {
        key: 3,
        values: _ctx.iv
      }, () => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classList.multipleLabel),
          innerHTML: _ctx.multipleLabelText
        }, null, 10, _hoisted_7$1)
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Placeholder "),
      $props.placeholder && !_ctx.hasSelected && !_ctx.search ? renderSlot(_ctx.$slots, "placeholder", { key: 4 }, () => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classList.placeholder),
            "aria-hidden": "true"
          },
          toDisplayString($props.placeholder),
          3
          /* TEXT, CLASS */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Spinner "),
      $props.loading || _ctx.resolving ? renderSlot(_ctx.$slots, "spinner", { key: 5 }, () => [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classList.spinner),
            "aria-hidden": "true"
          },
          null,
          2
          /* CLASS */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Clear "),
      _ctx.hasSelected && !$props.disabled && $props.canClear && !_ctx.busy ? renderSlot(_ctx.$slots, "clear", {
        key: 6,
        clear: _ctx.clear
      }, () => [
        createBaseVNode(
          "span",
          {
            "aria-hidden": "true",
            tabindex: "0",
            role: "button",
            "data-clear": "",
            "aria-roledescription": "❎",
            class: normalizeClass(_ctx.classList.clear),
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.clear && _ctx.clear(...args)),
            onKeyup: _cache[7] || (_cache[7] = withKeys((...args) => _ctx.clear && _ctx.clear(...args), ["enter"]))
          },
          [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(_ctx.classList.clearIcon)
              },
              null,
              2
              /* CLASS */
            )
          ],
          34
          /* CLASS, NEED_HYDRATION */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Caret "),
      $props.caret && $props.showOptions ? renderSlot(_ctx.$slots, "caret", {
        key: 7,
        handleCaretClick: _ctx.handleCaretClick,
        isOpen: _ctx.isOpen
      }, () => [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classList.caret),
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.handleCaretClick && _ctx.handleCaretClick(...args)),
            "aria-hidden": "true"
          },
          null,
          2
          /* CLASS */
        )
      ]) : createCommentVNode("v-if", true)
    ], 16, _hoisted_2$e),
    createCommentVNode(" Options "),
    (openBlock(), createBlock(Teleport, {
      to: $props.appendTo || "body",
      disabled: !$props.appendToBody && !$props.appendTo
    }, [
      createBaseVNode("div", {
        id: $props.id ? `${$props.id}-dropdown` : void 0,
        class: normalizeClass(_ctx.classList.dropdown),
        tabindex: "-1",
        ref: "dropdown",
        onFocusin: _cache[10] || (_cache[10] = (...args) => _ctx.handleFocusIn && _ctx.handleFocusIn(...args)),
        onFocusout: _cache[11] || (_cache[11] = (...args) => _ctx.handleFocusOut && _ctx.handleFocusOut(...args))
      }, [
        renderSlot(_ctx.$slots, "beforelist", { options: _ctx.fo }),
        createBaseVNode("ul", {
          class: normalizeClass(_ctx.classList.options),
          id: _ctx.ariaControls,
          role: "listbox"
        }, [
          $props.groups ? (openBlock(true), createElementBlock(
            Fragment,
            { key: 0 },
            renderList(_ctx.fg, (group, i2, key) => {
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(_ctx.classList.group),
                key,
                id: _ctx.ariaGroupId(group),
                "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                "aria-selected": _ctx.isSelected(group),
                role: "option"
              }, [
                !group.__CREATE__ ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.classList.groupLabel(group)),
                  "data-pointed": _ctx.isPointed(group),
                  onMouseenter: ($event) => _ctx.setPointer(group, i2),
                  onMousedown: withModifiers(($event) => _ctx.handleGroupClick(group), ["prevent"])
                }, [
                  renderSlot(_ctx.$slots, "grouplabel", {
                    group,
                    isSelected: _ctx.isSelected,
                    isPointed: _ctx.isPointed
                  }, () => [
                    createBaseVNode("span", {
                      innerHTML: _ctx.localize(group[$props.groupLabel])
                    }, null, 8, _hoisted_12)
                  ])
                ], 42, _hoisted_11)) : createCommentVNode("v-if", true),
                createBaseVNode("ul", {
                  class: normalizeClass(_ctx.classList.groupOptions),
                  "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                  role: "group"
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(group.__VISIBLE__, (option, i3, key2) => {
                      return openBlock(), createElementBlock("li", {
                        class: normalizeClass(_ctx.classList.option(option, group)),
                        "data-pointed": _ctx.isPointed(option),
                        "data-selected": _ctx.isSelected(option) || void 0,
                        key: key2,
                        onMouseenter: ($event) => _ctx.setPointer(option),
                        onMousedown: withModifiers(($event) => _ctx.handleOptionClick(option), ["prevent"]),
                        id: _ctx.ariaOptionId(option),
                        "aria-selected": _ctx.isSelected(option),
                        "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                        role: "option"
                      }, [
                        renderSlot(_ctx.$slots, "option", {
                          option,
                          isSelected: _ctx.isSelected,
                          isPointed: _ctx.isPointed,
                          search: _ctx.search
                        }, () => [
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(_ctx.localize(option[$props.label])),
                            1
                            /* TEXT */
                          )
                        ])
                      ], 42, _hoisted_14);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 10, _hoisted_13)
              ], 10, _hoisted_10);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : (openBlock(true), createElementBlock(
            Fragment,
            { key: 1 },
            renderList(_ctx.fo, (option, i2, key) => {
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(_ctx.classList.option(option)),
                "data-pointed": _ctx.isPointed(option),
                "data-selected": _ctx.isSelected(option) || void 0,
                key,
                onMouseenter: ($event) => _ctx.setPointer(option),
                onMousedown: withModifiers(($event) => _ctx.handleOptionClick(option), ["prevent"]),
                id: _ctx.ariaOptionId(option),
                "aria-selected": _ctx.isSelected(option),
                "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                role: "option"
              }, [
                renderSlot(_ctx.$slots, "option", {
                  option,
                  isSelected: _ctx.isSelected,
                  isPointed: _ctx.isPointed,
                  search: _ctx.search
                }, () => [
                  createBaseVNode(
                    "span",
                    null,
                    toDisplayString(_ctx.localize(option[$props.label])),
                    1
                    /* TEXT */
                  )
                ])
              ], 42, _hoisted_15);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 10, _hoisted_9),
        _ctx.noOptions ? renderSlot(_ctx.$slots, "nooptions", { key: 0 }, () => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.classList.noOptions),
            innerHTML: _ctx.localize($props.noOptionsText)
          }, null, 10, _hoisted_16)
        ]) : createCommentVNode("v-if", true),
        _ctx.noResults ? renderSlot(_ctx.$slots, "noresults", { key: 1 }, () => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.classList.noResults),
            innerHTML: _ctx.localize($props.noResultsText)
          }, null, 10, _hoisted_17)
        ]) : createCommentVNode("v-if", true),
        $props.infinite && _ctx.hasMore ? (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(_ctx.classList.inifinite),
            ref: "infiniteLoader"
          },
          [
            renderSlot(_ctx.$slots, "infinite", {}, () => [
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.classList.inifiniteSpinner)
                },
                null,
                2
                /* CLASS */
              )
            ])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "afterlist", { options: _ctx.fo })
      ], 42, _hoisted_8)
    ], 8, ["to", "disabled"])),
    createCommentVNode(" Hacky input element to show HTML5 required warning "),
    $props.required ? (openBlock(), createElementBlock("input", {
      key: 0,
      class: normalizeClass(_ctx.classList.fakeInput),
      tabindex: "-1",
      value: _ctx.textValue,
      required: ""
    }, null, 10, _hoisted_18)) : createCommentVNode("v-if", true),
    createCommentVNode(" Native input support "),
    $props.nativeSupport ? (openBlock(), createElementBlock(
      Fragment,
      { key: 1 },
      [
        $props.mode == "single" ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "hidden",
          name: $props.name,
          value: _ctx.plainValue !== void 0 ? _ctx.plainValue : ""
        }, null, 8, _hoisted_19)) : (openBlock(true), createElementBlock(
          Fragment,
          { key: 1 },
          renderList(_ctx.plainValue, (v2, i2) => {
            return openBlock(), createElementBlock("input", {
              type: "hidden",
              name: `${$props.name}[]`,
              value: v2,
              key: i2
            }, null, 8, _hoisted_20);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true),
    createCommentVNode(" Screen reader assistive text "),
    $props.searchable && _ctx.hasSelected ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(_ctx.classList.assist),
      id: _ctx.ariaAssist,
      "aria-hidden": "true"
    }, toDisplayString(_ctx.ariaLabel), 11, _hoisted_21)) : createCommentVNode("v-if", true),
    createCommentVNode(" Create height for empty input "),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.classList.spacer)
      },
      null,
      2
      /* CLASS */
    )
  ], 42, _hoisted_1$m);
}
script$Y.render = render$r;
script$Y.__file = "node_modules/@vueform/multiselect/src/Multiselect.vue";
var script$X = {
  name: "MultiselectElement",
  components: {
    Multiselect: script$Y
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        input: "",
        inputWrapper: "",
        select: {
          container: "",
          containerDisabled: "",
          containerOpen: "",
          containerOpenTop: "",
          containerActive: "",
          multipleLabel: "",
          search: "",
          placeholder: "",
          caret: "",
          caretOpen: "",
          clear: "",
          clearIcon: "",
          spinner: "",
          dropdown: "",
          dropdownTop: "",
          dropdownHidden: "",
          options: "",
          optionsTop: "",
          group: "",
          groupLabel: "",
          groupLabelPointable: "",
          groupLabelPointed: "",
          groupLabelSelected: "",
          groupLabelDisabled: "",
          groupLabelSelectedPointed: "",
          groupLabelSelectedDisabled: "",
          groupOptions: "",
          option: "",
          optionPointed: "",
          optionSelected: "",
          optionDisabled: "",
          optionSelectedPointed: "",
          optionSelectedDisabled: "",
          noOptions: "",
          noResults: "",
          fakeInput: "",
          spacer: ""
        }
      }
    };
  }
};
var _hoisted_1$l = ["name", "id", "disabled"];
var _hoisted_2$d = ["value"];
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_Multiselect = resolveComponent("Multiselect");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
          key: 0,
          visible: !_ctx.empty
        }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
        createCommentVNode(" Native select "),
        _ctx.isNative ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(_ctx.classes.inputWrapper)
          },
          [
            withDirectives(createBaseVNode("select", mergeProps({
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
              class: _ctx.classes.input,
              name: _ctx.name,
              id: _ctx.fieldId,
              multiple: true,
              disabled: _ctx.isDisabled
            }, {
              ..._ctx.attrs,
              ..._ctx.aria
            }, { ref: "input" }), [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.resolvedOptions, (option, index2) => {
                  return openBlock(), createElementBlock("option", {
                    value: option.value,
                    key: index2
                  }, toDisplayString(option.label), 9, _hoisted_2$d);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 16, _hoisted_1$l), [
              [vModelSelect, _ctx.value]
            ]),
            _ctx.placeholder && _ctx.empty && !_ctx.isDisabled && _ctx.type == "select" ? (openBlock(), createElementBlock(
              "span",
              {
                key: 0,
                class: normalizeClass(_ctx.classes.inputPlaceholder)
              },
              toDisplayString(_ctx.placeholder),
              3
              /* TEXT, CLASS */
            )) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )) : (openBlock(), createElementBlock(
          Fragment,
          { key: 2 },
          [
            createCommentVNode(" @vueform/multiselect copmonent "),
            createVNode(_component_Multiselect, mergeProps(_ctx.fieldOptions, {
              modelValue: _ctx.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.value = $event),
              classes: _ctx.classes.select,
              id: _ctx.fieldId,
              name: _ctx.name,
              options: _ctx.resolvedOptions,
              disabled: _ctx.isDisabled,
              placeholder: _ctx.Placeholder,
              attrs: _ctx.attrs,
              aria: _ctx.aria,
              locale: _ctx.form$.locale$,
              onSelect: _ctx.handleSelect,
              onDeselect: _ctx.handleDeselect,
              onSearchChange: _ctx.handleSearchChange,
              onTag: _ctx.handleTag,
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              onClear: _ctx.handleClear,
              onPaste: _ctx.handlePaste,
              ref: "input"
            }), createSlots({
              _: 2
              /* DYNAMIC */
            }, [
              renderList({
                option: "option",
                noresults: "no-results",
                nooptions: "no-options",
                afterlist: "after-list",
                beforelist: "before-list",
                placeholder: "placeholder",
                grouplabel: "group-label",
                caret: "caret",
                clear: "clear",
                spinner: "spinner",
                default: "default"
              }, (slotName, slotKey) => {
                return {
                  name: slotKey,
                  fn: withCtx((props) => [
                    renderSlot(_ctx.$slots, slotName, mergeProps(props, { el$: _ctx.el$ }), () => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots[slotName]), mergeProps(props, { el$: _ctx.el$ }), null, 16, ["el$"]))
                    ])
                  ])
                };
              }),
              _ctx.fieldOptions.mode == "multiple" ? {
                name: "multiplelabel",
                fn: withCtx(({ values }) => [
                  renderSlot(_ctx.$slots, "multiple-label", {
                    values,
                    el$: _ctx.el$
                  }, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["multiple-label"]), {
                      values,
                      el$: _ctx.el$
                    }, null, 8, ["values", "el$"]))
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1040, ["modelValue", "classes", "id", "name", "options", "disabled", "placeholder", "attrs", "aria", "locale", "onSelect", "onDeselect", "onSearchChange", "onTag", "onOpen", "onClose", "onClear", "onPaste"])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        ))
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$X.render = render$q;
script$X.__file = "themes/blank/templates/elements/MultiselectElement.vue";
var script$W = {
  name: "MultiselectElement",
  components: {
    Multiselect: script$Y
  },
  render: script$X.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        input: "vf-input",
        input_enabled: "",
        input_disabled: "",
        input_success: "vf-input-success",
        input_danger: "vf-input-danger",
        input_sm: "vf-input-sm",
        input_md: "",
        input_lg: "vf-input-lg",
        inputWrapper: "",
        select: {
          multipleLabel: "vf-multiselect-multiple-label",
          multipleLabel_sm: "vf-multiselect-multiple-label-sm",
          multipleLabel_md: "",
          multipleLabel_lg: "vf-multiselect-multiple-label-lg",
          multipleLabel_noClear: "vf-multiselect-multiple-label-no-clear",
          multipleLabel_noCaret: "vf-multiselect-multiple-label-no-caret",
          container: "vf-multiselect",
          container_enabled: "",
          container_disabled: "vf-multiselect-disabled",
          container_success: "vf-multiselect-success",
          container_danger: "vf-multiselect-danger",
          container_sm: "vf-multiselect-sm",
          container_md: "",
          container_lg: "vf-multiselect-lg",
          containerDisabled: "",
          containerOpen: "vf-multiselect-open",
          containerOpenTop: "vf-multiselect-open-top",
          containerActive: "vf-multiselect-active",
          containerActive_enabled: "",
          wrapper: "vf-multiselect-wrapper",
          wrapper_sm: "vf-multiselect-wrapper-sm",
          wrapper_md: "",
          wrapper_lg: "vf-multiselect-wrapper-lg",
          search: "vf-multiselect-search",
          search_sm: "vf-multiselect-search-sm",
          search_md: "",
          search_lg: "vf-multiselect-search-lg",
          placeholder: "vf-multiselect-placeholder",
          placeholder_sm: "vf-multiselect-placeholder-sm",
          placeholder_md: "",
          placeholder_lg: "vf-multiselect-placeholder-lg",
          caret: "vf-multiselect-caret",
          caret_sm: "vf-multiselect-caret-sm",
          caret_md: "",
          caret_lg: "vf-multiselect-caret-lg",
          caretOpen: "vf-multiselect-caret-open",
          clear: "vf-multiselect-clear",
          clear_sm: "vf-multiselect-clear-sm",
          clear_md: "",
          clear_lg: "vf-multiselect-clear-lg",
          clearIcon: "vf-multiselect-clear-icon",
          spinner: "vf-multiselect-spinner",
          spinner_sm: "vf-multiselect-spinner-sm",
          spinner_md: "",
          spinner_lg: "vf-multiselect-spinner-lg",
          infinite: "vf-multiselect-infinite",
          infinite_sm: "vf-multiselect-infinite-sm",
          infinite_md: "",
          infinite_lg: "vf-multiselect-infinite-lg",
          infiniteSpinner: "vf-multiselect-infinite-spinner",
          dropdown: "vf-multiselect-dropdown",
          dropdown_sm: "vf-multiselect-dropdown-sm",
          dropdown_md: "",
          dropdown_lg: "vf-multiselect-dropdown-lg",
          dropdownTop: "vf-multiselect-dropdown-top",
          dropdownTop_sm: "vf-multiselect-dropdown-top-sm",
          dropdownTop_md: "",
          dropdownTop_lg: "vf-multiselect-dropdown-top-lg",
          dropdownHidden: "vf-multiselect-dropdown-hidden",
          options: "vf-multiselect-options",
          optionsTop: "vf-multiselect-options-top",
          group: "vf-multiselect-group",
          groupLabel: "vf-multiselect-group-label",
          groupLabel_sm: "vf-multiselect-group-label-sm",
          groupLabel_md: "",
          groupLabel_lg: "vf-multiselect-group-label-lg",
          groupLabelPointable: "vf-multiselect-group-label-pointable",
          groupLabelPointed: "vf-multiselect-group-label-pointed",
          groupLabelSelected: "vf-multiselect-group-label-selected",
          groupLabelDisabled: "vf-multiselect-group-label-disabled",
          groupLabelSelectedPointed: "vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",
          groupLabelSelectedDisabled: "vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",
          groupOptions: "vf-multiselect-group-options",
          option: "vf-multiselect-option",
          option_sm: "vf-multiselect-option-sm",
          option_md: "",
          option_lg: "vf-multiselect-option-lg",
          optionPointed: "vf-multiselect-option-pointed",
          optionSelected: "vf-multiselect-option-selected",
          optionDisabled: "vf-multiselect-option-disabled",
          optionSelectedPointed: "vf-multiselect-option-selected vf-multiselect-option-pointed",
          optionSelectedDisabled: "vf-multiselect-option-selected vf-multiselect-option-disabled",
          noOptions: "vf-multiselect-no-options",
          noOptions_sm: "vf-multiselect-no-options-sm",
          noOptions_md: "",
          noOptions_lg: "vf-multiselect-no-options-lg",
          noResults: "vf-multiselect-no-results",
          noResults_sm: "vf-multiselect-no-results-sm",
          noResults_md: "",
          noResults_lg: "vf-multiselect-no-results-lg",
          fakeInput: "vf-multiselect-fake-input",
          assist: "vf-assistive-text",
          spacer: "vf-multiselect-spacer",
          spacer_sm: "vf-multiselect-spacer-sm",
          spacer_md: "",
          spacer_lg: "vf-multiselect-spacer-lg",
          $container: (classes2, { Size, isDanger, isSuccess, isDisabled }) => [
            classes2.select.container,
            classes2.select[`container_${Size}`],
            isDisabled ? classes2.select.container_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes2.select.container_enabled : null,
            !isDisabled && isDanger ? classes2.select.container_danger : null,
            !isDisabled && isSuccess ? classes2.select.container_success : null
          ],
          $containerActive: (classes2, { Size, isDanger, isSuccess, isDisabled }) => [
            classes2.select.containerActive,
            classes2.select[`container_${Size}`],
            !isDisabled && !isSuccess && !isDanger ? classes2.select.containerActive_enabled : null
          ],
          $wrapper: (classes2, { Size }) => [
            classes2.select.wrapper,
            classes2.select[`wrapper_${Size}`]
          ],
          $search: (classes2, { Size }) => [
            classes2.select.search,
            classes2.select[`search_${Size}`]
          ],
          $placeholder: (classes2, { Size }) => [
            classes2.select.placeholder,
            classes2.select[`placeholder_${Size}`]
          ],
          $caret: (classes2, { Size }) => [
            classes2.select.caret,
            classes2.select[`caret_${Size}`]
          ],
          $clear: (classes2, { Size }) => [
            classes2.select.clear,
            classes2.select[`clear_${Size}`]
          ],
          $spinner: (classes2, { Size }) => [
            classes2.select.spinner,
            classes2.select[`spinner_${Size}`]
          ],
          $infinite: (classes2, { Size }) => [
            classes2.select.infinite,
            classes2.select[`infinite_${Size}`]
          ],
          $dropdown: (classes2, { Size }) => [
            classes2.select.dropdown,
            classes2.select[`dropdown_${Size}`]
          ],
          $dropdownTop: (classes2, { Size }) => [
            classes2.select.dropdownTop,
            classes2.select[`dropdownTop_${Size}`]
          ],
          $groupLabel: (classes2, { Size }) => [
            classes2.select.groupLabel,
            classes2.select[`groupLabel_${Size}`]
          ],
          $option: (classes2, { Size }) => [
            classes2.select.option,
            classes2.select[`option_${Size}`]
          ],
          $spacer: (classes2, { Size }) => [
            classes2.select.spacer,
            classes2.select[`spacer_${Size}`]
          ],
          $noOptions: (classes2, { Size }) => [
            classes2.select.noOptions,
            classes2.select[`noOptions_${Size}`]
          ],
          $noResults: (classes2, { Size }) => [
            classes2.select.noResults,
            classes2.select[`noResults_${Size}`]
          ],
          $multipleLabel: (classes2, { Size, canClear, caret }) => [
            classes2.select.multipleLabel,
            classes2.select[`multipleLabel_${Size}`],
            !canClear ? classes2.select[`multipleLabel_noClear`] : null,
            !caret ? classes2.select[`multipleLabel_noCaret`] : null
          ]
        },
        $input: (classes2, { isDisabled, Size, isDanger, isSuccess }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.input_enabled : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$t = "/* Some styles are contained in Vueform.vue & SelectElement.vue */\n\n.vf-multiselect-multiple-label {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  background: transparent;\n  padding-left: var(--vf-px-input);\n  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {\n  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-right: var(--vf-px-input);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 20px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {\n  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-right: var(--vf-px-input-sm);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {\n  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-right: var(--vf-px-input-lg);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-multiple-label,\n.vf-floating-wrapper ~ div .vf-multiselect-multiple-label {\n  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);\n  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-multiple-label-sm,\n.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-sm {\n  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);\n  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-multiple-label-lg,\n.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-lg {\n  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);\n  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label {\n  padding-left: calc(var(--vf-px-input) * 2.5 + 20px);\n  padding-right: var(--vf-px-input);\n  left: auto;\n  right: 0;\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {\n  padding-left: calc(var(--vf-px-input) * 1.5 + 10px);\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-left: var(--vf-px-input);\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {\n  padding-left: calc(var(--vf-px-input-sm) * 2.5 + 20px);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {\n  padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {\n  padding-left: calc(var(--vf-px-input-lg) * 2.5 + 20px);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {\n  padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n}";
styleInject(css_248z$t);
script$W.__file = "themes/vueform/templates/elements/MultiselectElement.vue";
var script$V = {
  name: "ObjectElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$k = ["aria-labelledby"];
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    {
      multiple: true,
      ref: "container"
    },
    createSlots({
      element: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classes.wrapper),
          role: "group",
          "aria-labelledby": _ctx.labelId
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.children, (element, name) => {
                return openBlock(), createBlock(resolveDynamicComponent(_ctx.component(element)), mergeProps({ ref_for: true }, element, {
                  embed: _ctx.embed,
                  name,
                  key: name,
                  onRemove: _cache[0] || (_cache[0] = (e2) => _ctx.$emit("remove", e2))
                }), null, 16, ["embed", "name"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ], 10, _hoisted_1$k)
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$V.render = render$p;
script$V.__file = "themes/blank/templates/elements/ObjectElement.vue";
var script$U = {
  name: "ObjectElement",
  render: script$V.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-row",
        wrapper_sm: "vf-row-sm",
        wrapper_md: "",
        wrapper_lg: "vf-row-lg",
        wrapper_embed: "vf-row-embed",
        $wrapper: (classes2, { Size, embed }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          embed ? classes2.wrapper_embed : null
        ]
      }
    };
  }
};
var css_248z$s = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$s);
script$U.__file = "themes/vueform/templates/elements/ObjectElement.vue";
var script$T = {
  name: "PhoneElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        input: ""
      }
    };
  }
};
var _hoisted_1$j = ["value", "type", "name", "id", "placeholder", "autocomplete", "disabled", "readonly"];
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddonOptions = resolveComponent("ElementAddonOptions");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_ElementLoader = resolveComponent("ElementLoader");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.inputContainer)
          },
          [
            createVNode(_component_ElementAddonOptions, {
              options: _ctx.addonOptions,
              placeholder: _ctx.addonPlaceholder,
              onSelect: _ctx.handleOptionSelect,
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              ref: "options$"
            }, null, 8, ["options", "placeholder", "onSelect", "onOpen", "onClose"]),
            _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 0,
              visible: !_ctx.empty
            }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
            _ctx.isLoading ? (openBlock(), createBlock(_component_ElementLoader, { key: 1 })) : createCommentVNode("v-if", true),
            createBaseVNode("input", mergeProps({
              value: _ctx.model,
              type: _ctx.inputType,
              name: _ctx.name,
              id: _ctx.fieldId,
              class: _ctx.classes.input,
              placeholder: _ctx.Placeholder,
              autocomplete: _ctx.autocomplete,
              disabled: _ctx.isDisabled,
              readonly: _ctx.readonly
            }, {
              ..._ctx.attrs,
              ..._ctx.aria
            }, {
              onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
              onInput: _cache[1] || (_cache[1] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
              onSelect: _cache[2] || (_cache[2] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              ref: "input"
            }), null, 16, _hoisted_1$j)
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$T.render = render$o;
script$T.__file = "themes/blank/templates/elements/PhoneElement.vue";
var script$S = {
  name: "PhoneElement",
  render: script$T.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        input: "vf-input-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        optionWrapper: "",
        option: "vf-phone-option",
        option_active: "vf-phone-option-active",
        optionWrapper: "vf-phone-option-wrapper",
        flag: "vf-phone-flag",
        country: "vf-phone-country",
        number: "vf-phone-number",
        placeholder: "vf-phone-flag vf-phone-flag-placeholder",
        $option: (classes2) => (active) => [
          classes2.option,
          active ? classes2.option_active : null
        ],
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$r = '/* Some styles are contained in Vueform.vue */\n\n.vf-phone-option {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 0.3125rem 0.75rem;\n  white-space: nowrap;\n}\n\n.vf-phone-option-active {\n  background: var(--vf-bg-selected);\n}\n\n.vf-phone-option-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.vf-phone-flag {\n  background: no-repeat 0 0;\n  background-image: url("data:image/png;base64,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");\n  background-size: 24px 4716px;\n  width: 24px;\n  height: 16px;\n  overflow: hidden;\n}\n\n.vf-phone-flag-placeholder {\n  opacity: 0.6;\n}\n\n.vf-phone-country {\n  margin-left: 0.75rem;\n  font-weight: 600;\n  font-size: 15px;\n  display: flex;\n}\n\n.vf-phone-number {\n  margin-left: 0.5rem;\n  color: var(--vf-color-muted);\n}\n\n[dir=rtl] .vf-phone-country {\n  margin-left: 0;\n  margin-right: 0.75rem;\n}\n\n[dir=rtl] .vf-phone-number {\n  margin-left: 0;\n  margin-right: 0.5rem;\n}';
styleInject(css_248z$r);
script$S.__file = "themes/vueform/templates/elements/PhoneElement.vue";
var script$R = {
  name: "RadioElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        input: "",
        text: ""
      }
    };
  }
};
var _hoisted_1$i = ["value", "name", "id", "disabled"];
var _hoisted_2$c = ["innerHTML"];
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "label",
          {
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            withDirectives(createBaseVNode("input", mergeProps({
              type: "radio",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event)
            }, _ctx.aria, {
              value: _ctx.radioValue,
              class: _ctx.classes.input,
              name: _ctx.inputName,
              id: _ctx.fieldId,
              disabled: _ctx.isDisabled,
              ref: "input"
            }), null, 16, _hoisted_1$i), [
              [vModelRadio, _ctx.value]
            ]),
            createCommentVNode(" If label is HTML "),
            _ctx.Text ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.classes.text),
              innerHTML: _ctx.Text
            }, null, 10, _hoisted_2$c)) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createCommentVNode(" If label is slot "),
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.text)
                  },
                  [
                    renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8, ["el$"]))
                    ])
                  ],
                  2
                  /* CLASS */
                )
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$R.render = render$n;
script$R.__file = "themes/blank/templates/elements/RadioElement.vue";
var script$Q = {
  name: "RadioElement",
  render: script$R.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-radio-wrapper",
        wrapper_sm: "vf-radio-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-radio-wrapper-lg",
        wrapper_left: "vf-radio-wrapper-left",
        wrapper_right: "vf-radio-wrapper-right",
        input: "vf-radio",
        input_enabled: "",
        input_disabled: "",
        input_danger: "vf-radio-danger",
        input_sm: "vf-radio-sm",
        input_md: "",
        input_lg: "vf-radio-lg",
        input_left: "vf-radio-left",
        input_right: "vf-radio-right",
        text: "vf-radio-text",
        text_left: "vf-radio-text-left",
        text_right: "vf-radio-text-right",
        $wrapper: (classes2, { Size, align }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          align === "left" ? classes2.wrapper_left : null,
          align === "right" ? classes2.wrapper_right : null
        ],
        $input: (classes2, { isDisabled, Size, isDanger, align }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : classes2.input_enabled,
          !isDisabled && isDanger ? classes2.input_danger : null,
          align === "left" ? classes2.input_left : null,
          align === "right" ? classes2.input_right : null
        ],
        $text: (classes2, { align }) => [
          classes2.text,
          align === "left" ? classes2.text_left : null,
          align === "right" ? classes2.text_right : null
        ]
      }
    };
  }
};
var css_248z$q = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$q);
script$Q.__file = "themes/vueform/templates/elements/RadioElement.vue";
var script$P = {
  name: "RadiogroupElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: ""
      }
    };
  }
};
var _hoisted_1$h = ["aria-labelledby"];
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RadiogroupRadio = resolveComponent("RadiogroupRadio");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classes.wrapper),
          "aria-labelledby": _ctx.labelId,
          role: "radiogroup"
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.resolvedOptions, (item, index2, key) => {
              return openBlock(), createBlock(_component_RadiogroupRadio, {
                items: _ctx.resolvedOptions,
                index: index2,
                item,
                value: item.value,
                key,
                attrs: _ctx.aria
              }, {
                default: withCtx((scope2) => [
                  renderSlot(_ctx.$slots, "radio", mergeProps({ ref_for: true }, scope2, { el$: _ctx.el$ }), () => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.radio), mergeProps({ ref_for: true }, scope2, { el$: _ctx.el$ }), null, 16, ["el$"]))
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["items", "index", "item", "value", "attrs"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 10, _hoisted_1$h)
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$P.render = render$m;
script$P.__file = "themes/blank/templates/elements/RadiogroupElement.vue";
var script$O = {
  name: "RadiogroupElement",
  render: script$P.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-radiogroup-wrapper",
        wrapper_sm: "vf-radiogroup-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-radiogroup-wrapper-lg",
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$p = ".vf-radiogroup-wrapper {\n  cursor: pointer;\n}\n\n.vf-radiogroup-wrapper .vf-radio-container {\n  padding-top: 0;\n}";
styleInject(css_248z$p);
script$O.__file = "themes/vueform/templates/elements/RadiogroupElement.vue";
var script$N = {
  name: "RadiogroupElement",
  render: script$P.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-radiogroup-tabs-wrapper",
        wrapper_sm: "vf-radiogroup-tabs-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-radiogroup-tabs-wrapper-lg",
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$o = ".vf-radiogroup-tabs-wrapper {\n  display: grid;\n  grid-auto-flow: column;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$o);
script$N.__file = "themes/vueform/templates/elements/RadiogroupElement_tabs.vue";
var script$M = {
  name: "RadiogroupElement",
  render: script$P.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-radiogroup-blocks-wrapper",
        wrapper_sm: "vf-radiogroup-blocks-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-radiogroup-blocks-wrapper-lg",
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$n = ".vf-radiogroup-blocks-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$n);
script$M.__file = "themes/vueform/templates/elements/RadiogroupElement_blocks.vue";
var script$L = {
  name: "SelectElement",
  components: {
    Multiselect: script$Y
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        input: "",
        inputWrapper: "",
        inputPlaceholder: "",
        inputCaret: "",
        select: {
          container: "",
          containerDisabled: "",
          containerOpen: "",
          containerOpenTop: "",
          containerActive: "",
          singleLabel: "",
          singleLabelText: "",
          search: "",
          placeholder: "",
          caret: "",
          caretOpen: "",
          clear: "",
          clearIcon: "",
          spinner: "",
          dropdown: "",
          dropdownTop: "",
          dropdownHidden: "",
          options: "",
          optionsTop: "",
          group: "",
          groupLabel: "",
          groupLabelPointable: "",
          groupLabelPointed: "",
          groupLabelSelected: "",
          groupLabelDisabled: "",
          groupLabelSelectedPointed: "",
          groupLabelSelectedDisabled: "",
          groupOptions: "",
          option: "",
          optionPointed: "",
          optionSelected: "",
          optionDisabled: "",
          optionSelectedPointed: "",
          optionSelectedDisabled: "",
          noOptions: "",
          noResults: "",
          fakeInput: "",
          spacer: ""
        }
      }
    };
  }
};
var _hoisted_1$g = ["name", "id", "disabled"];
var _hoisted_2$b = ["value"];
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_Multiselect = resolveComponent("Multiselect");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
          key: 0,
          visible: !_ctx.empty
        }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
        createCommentVNode(" Native select "),
        _ctx.isNative ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(_ctx.classes.inputWrapper)
          },
          [
            withDirectives(createBaseVNode("select", mergeProps({
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
              class: _ctx.classes.input,
              name: _ctx.name,
              id: _ctx.fieldId,
              disabled: _ctx.isDisabled
            }, {
              ..._ctx.attrs,
              ..._ctx.aria
            }, { ref: "input" }), [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.resolvedOptions, (option, index2) => {
                  return openBlock(), createElementBlock("option", {
                    value: option.value,
                    key: index2
                  }, toDisplayString(option.label), 9, _hoisted_2$b);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 16, _hoisted_1$g), [
              [vModelSelect, _ctx.value]
            ]),
            _ctx.placeholder && _ctx.empty && !_ctx.isDisabled && _ctx.type == "select" ? (openBlock(), createElementBlock(
              "span",
              {
                key: 0,
                class: normalizeClass(_ctx.classes.inputPlaceholder)
              },
              toDisplayString(_ctx.placeholder),
              3
              /* TEXT, CLASS */
            )) : createCommentVNode("v-if", true),
            createBaseVNode(
              "span",
              {
                class: normalizeClass(_ctx.classes.inputCaret)
              },
              null,
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )) : (openBlock(), createElementBlock(
          Fragment,
          { key: 2 },
          [
            createCommentVNode(" @vueform/multiselect copmonent "),
            createVNode(_component_Multiselect, mergeProps(_ctx.fieldOptions, {
              modelValue: _ctx.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.value = $event),
              classes: _ctx.classes.select,
              id: _ctx.fieldId,
              name: _ctx.name,
              options: _ctx.resolvedOptions,
              disabled: _ctx.isDisabled,
              placeholder: _ctx.Placeholder,
              attrs: _ctx.attrs,
              aria: _ctx.aria,
              locale: _ctx.form$.locale$,
              onSelect: _ctx.handleSelect,
              onDeselect: _ctx.handleDeselect,
              onSearchChange: _ctx.handleSearchChange,
              onTag: _ctx.handleTag,
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              onClear: _ctx.handleClear,
              onPaste: _ctx.handlePaste,
              ref: "input"
            }), createSlots({
              _: 2
              /* DYNAMIC */
            }, [
              renderList({
                option: "option",
                noresults: "no-results",
                nooptions: "no-options",
                afterlist: "after-list",
                beforelist: "before-list",
                placeholder: "placeholder",
                grouplabel: "group-label",
                caret: "caret",
                clear: "clear",
                spinner: "spinner",
                default: "default"
              }, (slotName, slotKey) => {
                return {
                  name: slotKey,
                  fn: withCtx((props) => [
                    renderSlot(_ctx.$slots, slotName, mergeProps(props, { el$: _ctx.el$ }), () => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots[slotName]), mergeProps(props, { el$: _ctx.el$ }), null, 16, ["el$"]))
                    ])
                  ])
                };
              }),
              _ctx.fieldOptions.mode == "single" ? {
                name: "singlelabel",
                fn: withCtx(({ value }) => [
                  renderSlot(_ctx.$slots, "single-label", {
                    value,
                    el$: _ctx.el$
                  }, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["single-label"]), {
                      value,
                      el$: _ctx.el$
                    }, null, 8, ["value", "el$"]))
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1040, ["modelValue", "classes", "id", "name", "options", "disabled", "placeholder", "attrs", "aria", "locale", "onSelect", "onDeselect", "onSearchChange", "onTag", "onOpen", "onClose", "onClear", "onPaste"])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        ))
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$L.render = render$l;
script$L.__file = "themes/blank/templates/elements/SelectElement.vue";
var script$K = {
  name: "SelectElement",
  render: script$L.render,
  components: {
    Multiselect: script$Y
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        input: "vf-input vf-native-select",
        input_enabled: "",
        input_disabled: "",
        input_success: "vf-input-success",
        input_danger: "vf-input-danger",
        input_sm: "vf-input-sm",
        input_md: "",
        input_lg: "vf-input-lg",
        inputWrapper: "vf-native-select-wrapper",
        inputWrapper_sm: "vf-native-select-wrapper-sm",
        inputWrapper_md: "",
        inputWrapper_lg: "vf-native-select-wrapper-lg",
        inputPlaceholder: "vf-native-select-placeholder",
        inputPlaceholder_sm: "vf-native-select-placeholder-sm",
        inputPlaceholder_md: "",
        inputPlaceholder_lg: "vf-native-select-placeholder-lg",
        inputCaret: "vf-native-select-caret",
        inputCaret_sm: "vf-native-select-caret-sm",
        inputCaret_md: "",
        inputCaret_lg: "vf-native-select-caret-lg",
        select: {
          singleLabel: "vf-multiselect-single-label",
          singleLabel_sm: "vf-multiselect-single-label-sm",
          singleLabel_md: "",
          singleLabel_lg: "vf-multiselect-single-label-lg",
          singleLabel_noClear: "vf-multiselect-single-label-no-clear",
          singleLabel_noCaret: "vf-multiselect-single-label-no-caret",
          singleLabelText: "vf-multiselect-single-label-text",
          singleLabelText_truncate: "vf-multiselect-single-label-text-truncate",
          container: "vf-multiselect",
          container_enabled: "",
          container_disabled: "vf-multiselect-disabled",
          container_success: "vf-multiselect-success",
          container_danger: "vf-multiselect-danger",
          container_sm: "vf-multiselect-sm",
          container_md: "",
          container_lg: "vf-multiselect-lg",
          containerDisabled: "",
          containerOpen: "vf-multiselect-open",
          containerOpenTop: "vf-multiselect-open-top",
          containerActive: "vf-multiselect-active",
          containerActive_enabled: "",
          wrapper: "vf-multiselect-wrapper",
          wrapper_sm: "vf-multiselect-wrapper-sm",
          wrapper_md: "",
          wrapper_lg: "vf-multiselect-wrapper-lg",
          search: "vf-multiselect-search",
          search_sm: "vf-multiselect-search-sm",
          search_md: "",
          search_lg: "vf-multiselect-search-lg",
          placeholder: "vf-multiselect-placeholder",
          placeholder_sm: "vf-multiselect-placeholder-sm",
          placeholder_md: "",
          placeholder_lg: "vf-multiselect-placeholder-lg",
          caret: "vf-multiselect-caret",
          caret_sm: "vf-multiselect-caret-sm",
          caret_md: "",
          caret_lg: "vf-multiselect-caret-lg",
          caretOpen: "vf-multiselect-caret-open",
          clear: "vf-multiselect-clear",
          clear_sm: "vf-multiselect-clear-sm",
          clear_md: "",
          clear_lg: "vf-multiselect-clear-lg",
          clearIcon: "vf-multiselect-clear-icon",
          spinner: "vf-multiselect-spinner",
          spinner_sm: "vf-multiselect-spinner-sm",
          spinner_md: "",
          spinner_lg: "vf-multiselect-spinner-lg",
          infinite: "vf-multiselect-infinite",
          infinite_sm: "vf-multiselect-infinite-sm",
          infinite_md: "",
          infinite_lg: "vf-multiselect-infinite-lg",
          infiniteSpinner: "vf-multiselect-infinite-spinner",
          dropdown: "vf-multiselect-dropdown",
          dropdown_sm: "vf-multiselect-dropdown-sm",
          dropdown_md: "",
          dropdown_lg: "vf-multiselect-dropdown-lg",
          dropdownTop: "vf-multiselect-dropdown-top",
          dropdownTop_sm: "vf-multiselect-dropdown-top-sm",
          dropdownTop_md: "",
          dropdownTop_lg: "vf-multiselect-dropdown-top-lg",
          dropdownHidden: "vf-multiselect-dropdown-hidden",
          options: "vf-multiselect-options",
          optionsTop: "vf-multiselect-options-top",
          group: "vf-multiselect-group",
          groupLabel: "vf-multiselect-group-label",
          groupLabel_sm: "vf-multiselect-group-label-sm",
          groupLabel_md: "",
          groupLabel_lg: "vf-multiselect-group-label-lg",
          groupLabelPointable: "vf-multiselect-group-label-pointable",
          groupLabelPointed: "vf-multiselect-group-label-pointed",
          groupLabelSelected: "vf-multiselect-group-label-selected",
          groupLabelDisabled: "vf-multiselect-group-label-disabled",
          groupLabelSelectedPointed: "vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",
          groupLabelSelectedDisabled: "vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",
          groupOptions: "vf-multiselect-group-options",
          option: "vf-multiselect-option",
          option_sm: "vf-multiselect-option-sm",
          option_md: "",
          option_lg: "vf-multiselect-option-lg",
          optionPointed: "vf-multiselect-option-pointed",
          optionSelected: "vf-multiselect-option-selected",
          optionDisabled: "vf-multiselect-option-disabled",
          optionSelectedPointed: "vf-multiselect-option-selected vf-multiselect-option-pointed",
          optionSelectedDisabled: "vf-multiselect-option-selected vf-multiselect-option-disabled",
          noOptions: "vf-multiselect-no-options",
          noOptions_sm: "vf-multiselect-no-options-sm",
          noOptions_md: "",
          noOptions_lg: "vf-multiselect-no-options-lg",
          noResults: "vf-multiselect-no-results",
          noResults_sm: "vf-multiselect-no-results-sm",
          noResults_md: "",
          noResults_lg: "vf-multiselect-no-results-lg",
          fakeInput: "vf-multiselect-fake-input",
          assist: "vf-assistive-text",
          spacer: "vf-multiselect-spacer",
          spacer_sm: "vf-multiselect-spacer-sm",
          spacer_md: "",
          spacer_lg: "vf-multiselect-spacer-lg",
          $container: (classes2, { Size, isDanger, isSuccess, isDisabled }) => [
            classes2.select.container,
            classes2.select[`container_${Size}`],
            isDisabled ? classes2.select.container_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes2.select.container_enabled : null,
            !isDisabled && isDanger ? classes2.select.container_danger : null,
            !isDisabled && isSuccess ? classes2.select.container_success : null
          ],
          $containerActive: (classes2, { Size, isDanger, isSuccess, isDisabled }) => [
            classes2.select.containerActive,
            classes2.select[`container_${Size}`],
            !isDisabled && !isSuccess && !isDanger ? classes2.select.containerActive_enabled : null
          ],
          $wrapper: (classes2, { Size }) => [
            classes2.select.wrapper,
            classes2.select[`wrapper_${Size}`]
          ],
          $search: (classes2, { Size }) => [
            classes2.select.search,
            classes2.select[`search_${Size}`]
          ],
          $placeholder: (classes2, { Size }) => [
            classes2.select.placeholder,
            classes2.select[`placeholder_${Size}`]
          ],
          $caret: (classes2, { Size }) => [
            classes2.select.caret,
            classes2.select[`caret_${Size}`]
          ],
          $clear: (classes2, { Size }) => [
            classes2.select.clear,
            classes2.select[`clear_${Size}`]
          ],
          $spinner: (classes2, { Size }) => [
            classes2.select.spinner,
            classes2.select[`spinner_${Size}`]
          ],
          $infinite: (classes2, { Size }) => [
            classes2.select.infinite,
            classes2.select[`infinite_${Size}`]
          ],
          $dropdown: (classes2, { Size }) => [
            classes2.select.dropdown,
            classes2.select[`dropdown_${Size}`]
          ],
          $dropdownTop: (classes2, { Size }) => [
            classes2.select.dropdownTop,
            classes2.select[`dropdownTop_${Size}`]
          ],
          $groupLabel: (classes2, { Size }) => [
            classes2.select.groupLabel,
            classes2.select[`groupLabel_${Size}`]
          ],
          $option: (classes2, { Size }) => [
            classes2.select.option,
            classes2.select[`option_${Size}`]
          ],
          $spacer: (classes2, { Size }) => [
            classes2.select.spacer,
            classes2.select[`spacer_${Size}`]
          ],
          $noOptions: (classes2, { Size }) => [
            classes2.select.noOptions,
            classes2.select[`noOptions_${Size}`]
          ],
          $noResults: (classes2, { Size }) => [
            classes2.select.noResults,
            classes2.select[`noResults_${Size}`]
          ],
          $singleLabel: (classes2, { Size, canClear, caret }) => [
            classes2.select.singleLabel,
            classes2.select[`singleLabel_${Size}`],
            !canClear ? classes2.select[`singleLabel_noClear`] : null,
            !caret ? classes2.select[`singleLabel_noCaret`] : null
          ],
          $singleLabelText: (classes2, { truncate }) => [
            classes2.select.singleLabelText,
            truncate ? classes2.select[`singleLabelText_truncate`] : null
          ]
        },
        $input: (classes2, { isDisabled, Size, isDanger, isSuccess, caret }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.input_enabled : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ],
        $inputWrapper: (classes2, { Size }) => [
          classes2.inputWrapper,
          classes2[`inputWrapper_${Size}`]
        ],
        $inputPlaceholder: (classes2, { Size }) => [
          classes2.inputPlaceholder,
          classes2[`inputPlaceholder_${Size}`]
        ],
        $inputCaret: (classes2, { Size }) => [
          classes2.inputCaret,
          classes2[`inputCaret_${Size}`]
        ]
      }
    };
  }
};
var css_248z$m = `.vf-native-select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.vf-native-select::-webkit-search-decoration, .vf-native-select::-webkit-search-cancel-button, .vf-native-select::-webkit-search-results-button, .vf-native-select::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-input.vf-native-select {
  padding-right: calc(var(--vf-px-input) * 2);
}

.vf-input-sm.vf-native-select {
  padding-right: calc(var(--vf-px-input-sm) * 2);
}

.vf-input-lg.vf-native-select {
  padding-right: calc(var(--vf-px-input-lg) * 2);
}

.vf-native-select-wrapper {
  position: relative;
}

.vf-native-select-wrapper.vf-native-select-wrapper-sm:before {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-native-select-wrapper.vf-native-select-wrapper-lg:before {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-native-select-placeholder {
  position: absolute;
  top: 0;
  left: var(--vf-px-input);
  bottom: 0;
  display: flex;
  align-items: center;
  margin-left: 1px;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: var(--vf-color-placeholder);
  cursor: default;
  pointer-events: none;
}

.vf-native-select-placeholder.vf-native-select-placeholder-sm {
  left: var(--vf-px-input-sm);
}

.vf-native-select-placeholder.vf-native-select-placeholder-lg {
  left: var(--vf-px-input-lg);
}

.vf-native-select-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  box-sizing: content-box;
  display: inline-block;
  pointer-events: none;
  transform: translateY(-50%);
  transition: transform 150ms ease-in-out;
  margin-right: var(--vf-px-input);
}

.vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: var(--vf-px-input-sm);
}

.vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: var(--vf-px-input-lg);
}

/* @vueform/multiselect styles */

.vf-multiselect {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-input);
  min-height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-input);
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: solid;
}

.vf-multiselect.vf-multiselect-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect.vf-multiselect-open-top {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect.vf-multiselect-disabled {
  cursor: default;
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  pointer-events: none;
}

.vf-multiselect.vf-multiselect-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-input-success);
  border-color: var(--vf-border-color-input-success);
}

.vf-multiselect.vf-multiselect-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-input-danger);
  border-color: var(--vf-border-color-input-danger);
}

.vf-multiselect:hover {
  box-shadow: var(--vf-shadow-input-hover);
}

.vf-multiselect:hover:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
  border-color: var(--vf-border-color-input-hover);
}

.vf-multiselect.vf-multiselect-active {
  box-shadow: var(--vf-shadow-input-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-multiselect.vf-multiselect-active:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  border-color: var(--vf-border-color-input-focus);
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-input-focus);
}

.vf-multiselect.vf-multiselect-sm {
  min-height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-input-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect.vf-multiselect-lg {
  min-height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-input-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-multiselect-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  min-height: calc(var(--vf-min-height-input) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-sm {
  min-height: calc(var(--vf-min-height-input-sm) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-lg {
  min-height: calc(var(--vf-min-height-input-lg) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-single-label,
.vf-multiselect-placeholder {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  max-width: 100%;
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-sm);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label,
.vf-floating-wrapper ~ div .vf-multiselect-single-label {
  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);
  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-sm,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);
  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-lg,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-placeholder {
  color: var(--vf-color-placeholder);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label-text {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  max-width: 100%;
}

.vf-multiselect-single-label-text-truncate {
  text-overflow: ellipsis;
}

.vf-multiselect-search {
  width: 100%;
  height: 100%; /* for FF */
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  outline: none;
  box-sizing: border-box;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-family: inherit;
  background: transparent;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  border-radius: var(--vf-radius-input);
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
  color: var(--vf-color-input);
}

.vf-multiselect-search::-webkit-search-decoration, .vf-multiselect-search::-webkit-search-cancel-button, .vf-multiselect-search::-webkit-search-results-button, .vf-multiselect-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-search.vf-multiselect-search-sm {
  border-radius: var(--vf-radius-input-sm);
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-search.vf-multiselect-search-lg {
  border-radius: var(--vf-radius-input-lg);
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-search-lg,
.vf-floating-wrapper ~ div .vf-multiselect-search-lg,
.vf-floating-wrapper ~ span .vf-multiselect-search-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  margin: 0 var(--vf-px-input) 0 0;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-inifite {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: var(--vf-min-height-input);
}

.vf-multiselect-inifite.vf-multiselect-inifite-sm {
  height: var(--vf-min-height-input-sm);
}

.vf-multiselect-inifite.vf-multiselect-inifite-lg {
  height: var(--vf-min-height-input-lg);
}

.vf-multiselect-inifite-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-clear {
  margin: 0 var(--vf-px-input) 0 0px;
  position: relative;
  opacity: 1;
  transition: 0.3s;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
}

.vf-multiselect-clear:hover .vf-multiselect-clear-icon {
  opacity: 1;
}

.vf-multiselect-clear.vf-multiselect-clear-sm {
  margin: 0 var(--vf-px-input-sm) 0 0px;
}

.vf-multiselect-clear.vf-multiselect-clear-lg {
  margin: 0 var(--vf-px-input-lg) 0 0px;
}

.vf-multiselect-clear-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  display: inline-block;
  transition: 0.3s;
  opacity: 0.5;
}

.vf-multiselect-caret {
  transform: rotate(0deg);
  transition: 0.3s transform;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  margin: 0 var(--vf-px-input) 0 0;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  pointer-events: none;
}

.vf-multiselect-caret.vf-multiselect-caret-open {
  transform: rotate(180deg);
  pointer-events: auto;
}

.vf-multiselect-caret.vf-multiselect-caret-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-caret.vf-multiselect-caret-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-dropdown {
  position: absolute;
  left: calc(var(--vf-border-width-input-l) * -1);
  right: calc(var(--vf-border-width-input-r) * -1);
  bottom: 0;
  transform: translateY(100%);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  margin-top: calc(var(--vf-border-width-input-t) * -1);
  max-height: 15rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  background: var(--vf-bg-input);
  display: flex;
  flex-direction: column;
  border-radius: var(--vf-radius-input);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  outline: none;
  box-shadow: var(--vf-shadow-dropdown);
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-top {
  transform: translateY(-100%);
  top: 0;
  margin-top: 0;
  bottom: auto;
  border-radius: var(--vf-radius-input);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-hidden {
  display: none;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm.vf-multiselect-dropdown-top-sm {
  border-radius: var(--vf-radius-input-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg.vf-multiselect-dropdown-top-lg {
  border-radius: var(--vf-radius-input-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-options {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: var(--vf-color-input);
}

.vf-multiselect-group {
  padding: 0;
  margin: 0;
}

.vf-multiselect-group-label {
  font-weight: 600;
  color: #374151;
  cursor: default;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: calc(var(--vf-py-input) * 0.5) var(--vf-px-input);
  color: var(--vf-color-input);
  background: var(--vf-bg-selected);
  filter: brightness(0.9);
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointable {
  cursor: pointer;
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointed {
  filter: brightness(0.95);
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected {
  background: var(--vf-primary-darker);
  color: var(--vf-color-on-primary);
  filter: brightness(1);
}

.vf-multiselect-group-label.vf-multiselect-group-label-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-pointed {
  opacity: 0.9;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-disabled {
  opacity: 0.5;
}

.vf-multiselect-group-label.vf-multiselect-group-label-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  padding: calc(var(--vf-py-input-sm) * 0.5) var(--vf-px-input-sm);
}

.vf-multiselect-group-label.vf-multiselect-group-label-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  padding: calc(var(--vf-py-input-lg) * 0.5) var(--vf-px-input-lg);
}

.vf-multiselect-group-options {
  padding: 0;
  margin: 0;
}

.vf-multiselect-option {
  padding: calc(var(--vf-py-input) + var(--vf-border-width-input-t)) var(--vf-px-input) calc(var(--vf-py-input) + var(--vf-border-width-input-t));
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.vf-multiselect-option.vf-multiselect-option-pointed {
  background: var(--vf-bg-selected);
  color: var(--vf-color-input);
}

.vf-multiselect-option.vf-multiselect-option-selected {
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
}

.vf-multiselect-option.vf-multiselect-option-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-pointed {
  opacity: 0.9;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-disabled {
  opacity: 0.5;
}

.vf-multiselect-option.vf-multiselect-option-sm {
  padding: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t)) var(--vf-px-input-sm) calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
}

.vf-multiselect-option.vf-multiselect-option-lg {
  padding: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t)) var(--vf-px-input-lg) calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
}

.vf-multiselect-no-options,
.vf-multiselect-no-results {
  padding: var(--vf-py-input) var(--vf-px-input);
  color: var(--vf-color-muted);
}

.vf-multiselect-no-options.vf-multiselect-no-options-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-options.vf-multiselect-no-options-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-no-results.vf-multiselect-no-results-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-results.vf-multiselect-no-results-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-fake-input {
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  border: 0;
  padding: 0;
  font-size: 0;
  outline: none;
}

.vf-multiselect-fake-input:active, .vf-multiselect-fake-input:focus {
  outline: none;
}

.vf-multiselect-spacer {
  display: none;
}

[dir=rtl] .vf-input.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input) * 2);
}

[dir=rtl] .vf-input-sm.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-sm) * 2);
}

[dir=rtl] .vf-input-lg.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-lg) * 2);
}

[dir=rtl] .vf-native-select-placeholder {
  left: auto;
  right: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret {
  right: auto;
  left: 0;
  margin-right: 0;
  margin-left: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: 0;
  margin-left: var(--vf-px-input-sm);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: 0;
  margin-left: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label {
  padding-left: calc(var(--vf-px-input) * 4);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input) * 2);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: calc(var(--vf-px-input-sm) * 4);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-sm) * 2);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: calc(var(--vf-px-input-lg) * 4);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-lg) * 2);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-placeholder {
  padding-left: var(--vf-min-height-input);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: calc(1.25rem + var(--vf-px-input-sm) * 3);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: calc(1.25rem + var(--vf-px-input-lg) * 3);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-search {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-spinner {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-caret {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-clear {
  padding: 0 0 0 var(--vf-px-input);
}

@keyframes multiselect-spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}`;
styleInject(css_248z$m);
script$K.__file = "themes/vueform/templates/elements/SelectElement.vue";
function isNullish(val) {
  return [null, void 0, false].indexOf(val) !== -1;
}
function useValue$2(props, context, dependencies) {
  const { value: baseValue, modelValue, min: min2 } = toRefs(props);
  let value = modelValue && modelValue.value !== void 0 ? modelValue : baseValue;
  const initialValue = ref(value.value);
  if (isNullish(value.value)) {
    value = ref(min2.value);
  }
  if (Array.isArray(value.value) && value.value.length == 0) {
    throw new Error("Slider v-model must not be an empty array");
  }
  return {
    value,
    initialValue
  };
}
function useClasses$1(props, context, dependencies) {
  const {
    classes: classes_,
    showTooltip,
    tooltipPosition,
    orientation
  } = toRefs(props);
  const classes2 = computed(() => ({
    target: "slider-target",
    focused: "slider-focused",
    tooltipFocus: "slider-tooltip-focus",
    tooltipDrag: "slider-tooltip-drag",
    ltr: "slider-ltr",
    rtl: "slider-rtl",
    horizontal: "slider-horizontal",
    vertical: "slider-vertical",
    textDirectionRtl: "slider-txt-dir-rtl",
    textDirectionLtr: "slider-txt-dir-ltr",
    base: "slider-base",
    connects: "slider-connects",
    connect: "slider-connect",
    origin: "slider-origin",
    handle: "slider-handle",
    handleLower: "slider-handle-lower",
    handleUpper: "slider-handle-upper",
    touchArea: "slider-touch-area",
    tooltip: "slider-tooltip",
    tooltipTop: "slider-tooltip-top",
    tooltipBottom: "slider-tooltip-bottom",
    tooltipLeft: "slider-tooltip-left",
    tooltipRight: "slider-tooltip-right",
    tooltipHidden: "slider-tooltip-hidden",
    active: "slider-active",
    draggable: "slider-draggable",
    tap: "slider-state-tap",
    drag: "slider-state-drag",
    // Unimplemented
    pips: "slider-pips",
    pipsHorizontal: "slider-pips-horizontal",
    pipsVertical: "slider-pips-vertical",
    marker: "slider-marker",
    markerHorizontal: "slider-marker-horizontal",
    markerVertical: "slider-marker-vertical",
    markerNormal: "slider-marker-normal",
    markerLarge: "slider-marker-large",
    markerSub: "slider-marker-sub",
    value: "slider-value",
    valueHorizontal: "slider-value-horizontal",
    valueVertical: "slider-value-vertical",
    valueNormal: "slider-value-normal",
    valueLarge: "slider-value-large",
    valueSub: "slider-value-sub",
    ...classes_.value
  }));
  const classList = computed(() => {
    const classList2 = { ...classes2.value };
    Object.keys(classList2).forEach((className) => {
      classList2[className] = Array.isArray(classList2[className]) ? classList2[className].filter((c2) => c2 !== null).join(" ") : classList2[className];
    });
    if (showTooltip.value !== "always") {
      classList2.target += ` ${showTooltip.value === "drag" ? classList2.tooltipDrag : classList2.tooltipFocus}`;
    }
    if (orientation.value === "horizontal") {
      classList2.tooltip += tooltipPosition.value === "bottom" ? ` ${classList2.tooltipBottom}` : ` ${classList2.tooltipTop}`;
    }
    if (orientation.value === "vertical") {
      classList2.tooltip += tooltipPosition.value === "right" ? ` ${classList2.tooltipRight}` : ` ${classList2.tooltipLeft}`;
    }
    return classList2;
  });
  return {
    classList
  };
}
var wNumb = { exports: {} };
(function(module, exports) {
  (function(factory) {
    {
      module.exports = factory();
    }
  })(function() {
    var FormatOptions = [
      "decimals",
      "thousand",
      "mark",
      "prefix",
      "suffix",
      "encoder",
      "decoder",
      "negativeBefore",
      "negative",
      "edit",
      "undo"
    ];
    function strReverse(a2) {
      return a2.split("").reverse().join("");
    }
    function strStartsWith(input, match) {
      return input.substring(0, match.length) === match;
    }
    function strEndsWith(input, match) {
      return input.slice(-1 * match.length) === match;
    }
    function throwEqualError(F2, a2, b2) {
      if ((F2[a2] || F2[b2]) && F2[a2] === F2[b2]) {
        throw new Error(a2);
      }
    }
    function isValidNumber(input) {
      return typeof input === "number" && isFinite(input);
    }
    function toFixed(value, exp) {
      value = value.toString().split("e");
      value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
      value = value.toString().split("e");
      return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
    }
    function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
      var originalInput = input, inputIsNegative, inputPieces, inputBase, inputDecimals = "", output = "";
      if (encoder) {
        input = encoder(input);
      }
      if (!isValidNumber(input)) {
        return false;
      }
      if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
        input = 0;
      }
      if (input < 0) {
        inputIsNegative = true;
        input = Math.abs(input);
      }
      if (decimals !== false) {
        input = toFixed(input, decimals);
      }
      input = input.toString();
      if (input.indexOf(".") !== -1) {
        inputPieces = input.split(".");
        inputBase = inputPieces[0];
        if (mark) {
          inputDecimals = mark + inputPieces[1];
        }
      } else {
        inputBase = input;
      }
      if (thousand) {
        inputBase = strReverse(inputBase).match(/.{1,3}/g);
        inputBase = strReverse(inputBase.join(strReverse(thousand)));
      }
      if (inputIsNegative && negativeBefore) {
        output += negativeBefore;
      }
      if (prefix) {
        output += prefix;
      }
      if (inputIsNegative && negative) {
        output += negative;
      }
      output += inputBase;
      output += inputDecimals;
      if (suffix) {
        output += suffix;
      }
      if (edit) {
        output = edit(output, originalInput);
      }
      return output;
    }
    function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
      var inputIsNegative, output = "";
      if (undo) {
        input = undo(input);
      }
      if (!input || typeof input !== "string") {
        return false;
      }
      if (negativeBefore && strStartsWith(input, negativeBefore)) {
        input = input.replace(negativeBefore, "");
        inputIsNegative = true;
      }
      if (prefix && strStartsWith(input, prefix)) {
        input = input.replace(prefix, "");
      }
      if (negative && strStartsWith(input, negative)) {
        input = input.replace(negative, "");
        inputIsNegative = true;
      }
      if (suffix && strEndsWith(input, suffix)) {
        input = input.slice(0, -1 * suffix.length);
      }
      if (thousand) {
        input = input.split(thousand).join("");
      }
      if (mark) {
        input = input.replace(mark, ".");
      }
      if (inputIsNegative) {
        output += "-";
      }
      output += input;
      output = output.replace(/[^0-9\.\-.]/g, "");
      if (output === "") {
        return false;
      }
      output = Number(output);
      if (decoder) {
        output = decoder(output);
      }
      if (!isValidNumber(output)) {
        return false;
      }
      return output;
    }
    function validate(inputOptions) {
      var i2, optionName, optionValue, filteredOptions = {};
      if (inputOptions["suffix"] === void 0) {
        inputOptions["suffix"] = inputOptions["postfix"];
      }
      for (i2 = 0; i2 < FormatOptions.length; i2 += 1) {
        optionName = FormatOptions[i2];
        optionValue = inputOptions[optionName];
        if (optionValue === void 0) {
          if (optionName === "negative" && !filteredOptions.negativeBefore) {
            filteredOptions[optionName] = "-";
          } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
            filteredOptions[optionName] = ".";
          } else {
            filteredOptions[optionName] = false;
          }
        } else if (optionName === "decimals") {
          if (optionValue >= 0 && optionValue < 8) {
            filteredOptions[optionName] = optionValue;
          } else {
            throw new Error(optionName);
          }
        } else if (optionName === "encoder" || optionName === "decoder" || optionName === "edit" || optionName === "undo") {
          if (typeof optionValue === "function") {
            filteredOptions[optionName] = optionValue;
          } else {
            throw new Error(optionName);
          }
        } else {
          if (typeof optionValue === "string") {
            filteredOptions[optionName] = optionValue;
          } else {
            throw new Error(optionName);
          }
        }
      }
      throwEqualError(filteredOptions, "mark", "thousand");
      throwEqualError(filteredOptions, "prefix", "negative");
      throwEqualError(filteredOptions, "prefix", "negativeBefore");
      return filteredOptions;
    }
    function passAll(options, method, input) {
      var i2, args = [];
      for (i2 = 0; i2 < FormatOptions.length; i2 += 1) {
        args.push(options[FormatOptions[i2]]);
      }
      args.push(input);
      return method.apply("", args);
    }
    function wNumb2(options) {
      if (!(this instanceof wNumb2)) {
        return new wNumb2(options);
      }
      if (typeof options !== "object") {
        return;
      }
      options = validate(options);
      this.to = function(input) {
        return passAll(options, formatTo, input);
      };
      this.from = function(input) {
        return passAll(options, formatFrom, input);
      };
    }
    return wNumb2;
  });
})(wNumb);
var wnumb = wNumb.exports;
function useTooltip(props, context, dependencies) {
  const { format, step } = toRefs(props);
  const value = dependencies.value;
  const classList = dependencies.classList;
  const tooltipFormat = computed(() => {
    if (!format || !format.value) {
      return wnumb({ decimals: step.value >= 0 ? 0 : 2 });
    }
    if (typeof format.value == "function") {
      return { to: format.value };
    }
    return wnumb({ ...format.value });
  });
  const tooltipsFormat = computed(() => {
    return Array.isArray(value.value) ? value.value.map((v2) => tooltipFormat.value) : tooltipFormat.value;
  });
  const tooltipsMerge = (slider, threshold, separator) => {
    var textIsRtl = getComputedStyle(slider).direction === "rtl";
    var isRtl = slider.noUiSlider.options.direction === "rtl";
    var isVertical = slider.noUiSlider.options.orientation === "vertical";
    var tooltips = slider.noUiSlider.getTooltips();
    var origins = slider.noUiSlider.getOrigins();
    tooltips.forEach(function(tooltip, index2) {
      if (tooltip) {
        origins[index2].appendChild(tooltip);
      }
    });
    slider.noUiSlider.on("update", function(values, handle, unencoded, tap, positions) {
      var pools = [[]];
      var poolPositions = [[]];
      var poolValues = [[]];
      var atPool = 0;
      if (tooltips[0]) {
        pools[0][0] = 0;
        poolPositions[0][0] = positions[0];
        poolValues[0][0] = tooltipFormat.value.to(parseFloat(values[0]));
      }
      for (var i2 = 1; i2 < values.length; i2++) {
        if (!tooltips[i2] || values[i2] - values[i2 - 1] > threshold) {
          atPool++;
          pools[atPool] = [];
          poolValues[atPool] = [];
          poolPositions[atPool] = [];
        }
        if (tooltips[i2]) {
          pools[atPool].push(i2);
          poolValues[atPool].push(tooltipFormat.value.to(parseFloat(values[i2])));
          poolPositions[atPool].push(positions[i2]);
        }
      }
      pools.forEach(function(pool, poolIndex) {
        var handlesInPool = pool.length;
        for (var j2 = 0; j2 < handlesInPool; j2++) {
          var handleNumber = pool[j2];
          if (j2 === handlesInPool - 1) {
            var offset2 = 0;
            poolPositions[poolIndex].forEach(function(value2) {
              offset2 += 1e3 - value2;
            });
            var direction = isVertical ? "bottom" : "right";
            var last = isRtl ? 0 : handlesInPool - 1;
            var lastOffset = 1e3 - poolPositions[poolIndex][last];
            offset2 = (textIsRtl && !isVertical ? 100 : 0) + offset2 / handlesInPool - lastOffset;
            tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
            tooltips[handleNumber].style.display = "block";
            tooltips[handleNumber].style[direction] = offset2 + "%";
            classList.value.tooltipHidden.split(" ").forEach((c2) => {
              if (tooltips[handleNumber].classList.contains(c2)) {
                tooltips[handleNumber].classList.remove(c2);
              }
            });
          } else {
            tooltips[handleNumber].style.display = "none";
            classList.value.tooltipHidden.split(" ").forEach((c2) => {
              tooltips[handleNumber].classList.add(c2);
            });
          }
        }
      });
    });
  };
  return {
    tooltipFormat,
    tooltipsFormat,
    tooltipsMerge
  };
}
var PipsMode;
(function(PipsMode2) {
  PipsMode2["Range"] = "range";
  PipsMode2["Steps"] = "steps";
  PipsMode2["Positions"] = "positions";
  PipsMode2["Count"] = "count";
  PipsMode2["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function(PipsType2) {
  PipsType2[PipsType2["None"] = -1] = "None";
  PipsType2[PipsType2["NoValue"] = 0] = "NoValue";
  PipsType2[PipsType2["LargeValue"] = 1] = "LargeValue";
  PipsType2[PipsType2["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
function isValidFormatter(entry) {
  return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
  return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
  el.parentElement.removeChild(el);
}
function isSet(value) {
  return value !== null && value !== void 0;
}
function preventDefault(e2) {
  e2.preventDefault();
}
function unique(array) {
  return array.filter(function(a2) {
    return !this[a2] ? this[a2] = true : false;
  }, {});
}
function closest(value, to) {
  return Math.round(value / to) * to;
}
function offset(elem, orientation) {
  var rect = elem.getBoundingClientRect();
  var doc = elem.ownerDocument;
  var docElem = doc.documentElement;
  var pageOffset = getPageOffset(doc);
  if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
    pageOffset.x = 0;
  }
  return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
function isNumeric(a2) {
  return typeof a2 === "number" && !isNaN(a2) && isFinite(a2);
}
function addClassFor(element, className, duration) {
  if (duration > 0) {
    addClass(element, className);
    setTimeout(function() {
      removeClass(element, className);
    }, duration);
  }
}
function limit(a2) {
  return Math.max(Math.min(a2, 100), 0);
}
function asArray(a2) {
  return Array.isArray(a2) ? a2 : [a2];
}
function countDecimals(numStr) {
  numStr = String(numStr);
  var pieces = numStr.split(".");
  return pieces.length > 1 ? pieces[1].length : 0;
}
function addClass(el, className) {
  if (el.classList && !/\s/.test(className)) {
    el.classList.add(className);
  } else {
    el.className += " " + className;
  }
}
function removeClass(el, className) {
  if (el.classList && !/\s/.test(className)) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }
}
function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
function getPageOffset(doc) {
  var supportPageOffset = window.pageXOffset !== void 0;
  var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
  var x2 = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
  var y2 = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
  return {
    x: x2,
    y: y2
  };
}
function getActions() {
  return window.navigator.pointerEnabled ? {
    start: "pointerdown",
    move: "pointermove",
    end: "pointerup"
  } : window.navigator.msPointerEnabled ? {
    start: "MSPointerDown",
    move: "MSPointerMove",
    end: "MSPointerUp"
  } : {
    start: "mousedown touchstart",
    move: "mousemove touchmove",
    end: "mouseup touchend"
  };
}
function getSupportsPassive() {
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e2) {
  }
  return supportsPassive;
}
function getSupportsTouchActionNone() {
  return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
function subRangeRatio(pa, pb) {
  return 100 / (pb - pa);
}
function fromPercentage(range, value, startRange) {
  return value * 100 / (range[startRange + 1] - range[startRange]);
}
function toPercentage(range, value) {
  return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
function isPercentage(range, value) {
  return value * (range[1] - range[0]) / 100 + range[0];
}
function getJ(value, arr) {
  var j2 = 1;
  while (value >= arr[j2]) {
    j2 += 1;
  }
  return j2;
}
function toStepping(xVal, xPct, value) {
  if (value >= xVal.slice(-1)[0]) {
    return 100;
  }
  var j2 = getJ(value, xVal);
  var va = xVal[j2 - 1];
  var vb = xVal[j2];
  var pa = xPct[j2 - 1];
  var pb = xPct[j2];
  return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
function fromStepping(xVal, xPct, value) {
  if (value >= 100) {
    return xVal.slice(-1)[0];
  }
  var j2 = getJ(value, xPct);
  var va = xVal[j2 - 1];
  var vb = xVal[j2];
  var pa = xPct[j2 - 1];
  var pb = xPct[j2];
  return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
function getStep(xPct, xSteps, snap, value) {
  if (value === 100) {
    return value;
  }
  var j2 = getJ(value, xPct);
  var a2 = xPct[j2 - 1];
  var b2 = xPct[j2];
  if (snap) {
    if (value - a2 > (b2 - a2) / 2) {
      return b2;
    }
    return a2;
  }
  if (!xSteps[j2 - 1]) {
    return value;
  }
  return xPct[j2 - 1] + closest(value - xPct[j2 - 1], xSteps[j2 - 1]);
}
var Spectrum = (
  /** @class */
  function() {
    function Spectrum2(entry, snap, singleStep) {
      this.xPct = [];
      this.xVal = [];
      this.xSteps = [];
      this.xNumSteps = [];
      this.xHighestCompleteStep = [];
      this.xSteps = [singleStep || false];
      this.xNumSteps = [false];
      this.snap = snap;
      var index2;
      var ordered = [];
      Object.keys(entry).forEach(function(index3) {
        ordered.push([asArray(entry[index3]), index3]);
      });
      ordered.sort(function(a2, b2) {
        return a2[0][0] - b2[0][0];
      });
      for (index2 = 0; index2 < ordered.length; index2++) {
        this.handleEntryPoint(ordered[index2][1], ordered[index2][0]);
      }
      this.xNumSteps = this.xSteps.slice(0);
      for (index2 = 0; index2 < this.xNumSteps.length; index2++) {
        this.handleStepPoint(index2, this.xNumSteps[index2]);
      }
    }
    Spectrum2.prototype.getDistance = function(value) {
      var distances = [];
      for (var index2 = 0; index2 < this.xNumSteps.length - 1; index2++) {
        distances[index2] = fromPercentage(this.xVal, value, index2);
      }
      return distances;
    };
    Spectrum2.prototype.getAbsoluteDistance = function(value, distances, direction) {
      var xPct_index = 0;
      if (value < this.xPct[this.xPct.length - 1]) {
        while (value > this.xPct[xPct_index + 1]) {
          xPct_index++;
        }
      } else if (value === this.xPct[this.xPct.length - 1]) {
        xPct_index = this.xPct.length - 2;
      }
      if (!direction && value === this.xPct[xPct_index + 1]) {
        xPct_index++;
      }
      if (distances === null) {
        distances = [];
      }
      var start_factor;
      var rest_factor = 1;
      var rest_rel_distance = distances[xPct_index];
      var range_pct = 0;
      var rel_range_distance = 0;
      var abs_distance_counter = 0;
      var range_counter = 0;
      if (direction) {
        start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
      } else {
        start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
      }
      while (rest_rel_distance > 0) {
        range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
        if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
          rel_range_distance = range_pct * start_factor;
          rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
          start_factor = 1;
        } else {
          rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
          rest_factor = 0;
        }
        if (direction) {
          abs_distance_counter = abs_distance_counter - rel_range_distance;
          if (this.xPct.length + range_counter >= 1) {
            range_counter--;
          }
        } else {
          abs_distance_counter = abs_distance_counter + rel_range_distance;
          if (this.xPct.length - range_counter >= 1) {
            range_counter++;
          }
        }
        rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
      }
      return value + abs_distance_counter;
    };
    Spectrum2.prototype.toStepping = function(value) {
      value = toStepping(this.xVal, this.xPct, value);
      return value;
    };
    Spectrum2.prototype.fromStepping = function(value) {
      return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum2.prototype.getStep = function(value) {
      value = getStep(this.xPct, this.xSteps, this.snap, value);
      return value;
    };
    Spectrum2.prototype.getDefaultStep = function(value, isDown, size) {
      var j2 = getJ(value, this.xPct);
      if (value === 100 || isDown && value === this.xPct[j2 - 1]) {
        j2 = Math.max(j2 - 1, 1);
      }
      return (this.xVal[j2] - this.xVal[j2 - 1]) / size;
    };
    Spectrum2.prototype.getNearbySteps = function(value) {
      var j2 = getJ(value, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[j2 - 2],
          step: this.xNumSteps[j2 - 2],
          highestStep: this.xHighestCompleteStep[j2 - 2]
        },
        thisStep: {
          startValue: this.xVal[j2 - 1],
          step: this.xNumSteps[j2 - 1],
          highestStep: this.xHighestCompleteStep[j2 - 1]
        },
        stepAfter: {
          startValue: this.xVal[j2],
          step: this.xNumSteps[j2],
          highestStep: this.xHighestCompleteStep[j2]
        }
      };
    };
    Spectrum2.prototype.countStepDecimals = function() {
      var stepDecimals = this.xNumSteps.map(countDecimals);
      return Math.max.apply(null, stepDecimals);
    };
    Spectrum2.prototype.hasNoSize = function() {
      return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    Spectrum2.prototype.convert = function(value) {
      return this.getStep(this.toStepping(value));
    };
    Spectrum2.prototype.handleEntryPoint = function(index2, value) {
      var percentage;
      if (index2 === "min") {
        percentage = 0;
      } else if (index2 === "max") {
        percentage = 100;
      } else {
        percentage = parseFloat(index2);
      }
      if (!isNumeric(percentage) || !isNumeric(value[0])) {
        throw new Error("noUiSlider: 'range' value isn't numeric.");
      }
      this.xPct.push(percentage);
      this.xVal.push(value[0]);
      var value1 = Number(value[1]);
      if (!percentage) {
        if (!isNaN(value1)) {
          this.xSteps[0] = value1;
        }
      } else {
        this.xSteps.push(isNaN(value1) ? false : value1);
      }
      this.xHighestCompleteStep.push(0);
    };
    Spectrum2.prototype.handleStepPoint = function(i2, n2) {
      if (!n2) {
        return;
      }
      if (this.xVal[i2] === this.xVal[i2 + 1]) {
        this.xSteps[i2] = this.xHighestCompleteStep[i2] = this.xVal[i2];
        return;
      }
      this.xSteps[i2] = fromPercentage([this.xVal[i2], this.xVal[i2 + 1]], n2, 0) / subRangeRatio(this.xPct[i2], this.xPct[i2 + 1]);
      var totalSteps = (this.xVal[i2 + 1] - this.xVal[i2]) / this.xNumSteps[i2];
      var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
      var step = this.xVal[i2] + this.xNumSteps[i2] * highestStep;
      this.xHighestCompleteStep[i2] = step;
    };
    return Spectrum2;
  }()
);
var defaultFormatter = {
  to: function(value) {
    return value === void 0 ? "" : value.toFixed(2);
  },
  from: Number
};
var cssClasses = {
  target: "target",
  base: "base",
  origin: "origin",
  handle: "handle",
  handleLower: "handle-lower",
  handleUpper: "handle-upper",
  touchArea: "touch-area",
  horizontal: "horizontal",
  vertical: "vertical",
  background: "background",
  connect: "connect",
  connects: "connects",
  ltr: "ltr",
  rtl: "rtl",
  textDirectionLtr: "txt-dir-ltr",
  textDirectionRtl: "txt-dir-rtl",
  draggable: "draggable",
  drag: "state-drag",
  tap: "state-tap",
  active: "active",
  tooltip: "tooltip",
  pips: "pips",
  pipsHorizontal: "pips-horizontal",
  pipsVertical: "pips-vertical",
  marker: "marker",
  markerHorizontal: "marker-horizontal",
  markerVertical: "marker-vertical",
  markerNormal: "marker-normal",
  markerLarge: "marker-large",
  markerSub: "marker-sub",
  value: "value",
  valueHorizontal: "value-horizontal",
  valueVertical: "value-vertical",
  valueNormal: "value-normal",
  valueLarge: "value-large",
  valueSub: "value-sub"
};
var INTERNAL_EVENT_NS = {
  tooltips: ".__tooltips",
  aria: ".__aria"
};
function testStep(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'step' is not numeric.");
  }
  parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
  }
  parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
  }
  parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
  }
  parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
  if (typeof entry !== "object" || Array.isArray(entry)) {
    throw new Error("noUiSlider: 'range' is not an object.");
  }
  if (entry.min === void 0 || entry.max === void 0) {
    throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
  }
  parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
  entry = asArray(entry);
  if (!Array.isArray(entry) || !entry.length) {
    throw new Error("noUiSlider: 'start' option is incorrect.");
  }
  parsed.handles = entry.length;
  parsed.start = entry;
}
function testSnap(parsed, entry) {
  if (typeof entry !== "boolean") {
    throw new Error("noUiSlider: 'snap' option must be a boolean.");
  }
  parsed.snap = entry;
}
function testAnimate(parsed, entry) {
  if (typeof entry !== "boolean") {
    throw new Error("noUiSlider: 'animate' option must be a boolean.");
  }
  parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
  if (typeof entry !== "number") {
    throw new Error("noUiSlider: 'animationDuration' option must be a number.");
  }
  parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
  var connect = [false];
  var i2;
  if (entry === "lower") {
    entry = [true, false];
  } else if (entry === "upper") {
    entry = [false, true];
  }
  if (entry === true || entry === false) {
    for (i2 = 1; i2 < parsed.handles; i2++) {
      connect.push(entry);
    }
    connect.push(false);
  } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
    throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
  } else {
    connect = entry;
  }
  parsed.connect = connect;
}
function testOrientation(parsed, entry) {
  switch (entry) {
    case "horizontal":
      parsed.ort = 0;
      break;
    case "vertical":
      parsed.ort = 1;
      break;
    default:
      throw new Error("noUiSlider: 'orientation' option is invalid.");
  }
}
function testMargin(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'margin' option must be numeric.");
  }
  if (entry === 0) {
    return;
  }
  parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'limit' option must be numeric.");
  }
  parsed.limit = parsed.spectrum.getDistance(entry);
  if (!parsed.limit || parsed.handles < 2) {
    throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
  }
}
function testPadding(parsed, entry) {
  var index2;
  if (!isNumeric(entry) && !Array.isArray(entry)) {
    throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
  }
  if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
    throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
  }
  if (entry === 0) {
    return;
  }
  if (!Array.isArray(entry)) {
    entry = [entry, entry];
  }
  parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
  for (index2 = 0; index2 < parsed.spectrum.xNumSteps.length - 1; index2++) {
    if (parsed.padding[0][index2] < 0 || parsed.padding[1][index2] < 0) {
      throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
    }
  }
  var totalPadding = entry[0] + entry[1];
  var firstValue = parsed.spectrum.xVal[0];
  var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
  if (totalPadding / (lastValue - firstValue) > 1) {
    throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
  }
}
function testDirection(parsed, entry) {
  switch (entry) {
    case "ltr":
      parsed.dir = 0;
      break;
    case "rtl":
      parsed.dir = 1;
      break;
    default:
      throw new Error("noUiSlider: 'direction' option was not recognized.");
  }
}
function testBehaviour(parsed, entry) {
  if (typeof entry !== "string") {
    throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
  }
  var tap = entry.indexOf("tap") >= 0;
  var drag = entry.indexOf("drag") >= 0;
  var fixed = entry.indexOf("fixed") >= 0;
  var snap = entry.indexOf("snap") >= 0;
  var hover = entry.indexOf("hover") >= 0;
  var unconstrained = entry.indexOf("unconstrained") >= 0;
  var dragAll = entry.indexOf("drag-all") >= 0;
  var smoothSteps = entry.indexOf("smooth-steps") >= 0;
  if (fixed) {
    if (parsed.handles !== 2) {
      throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
    }
    testMargin(parsed, parsed.start[1] - parsed.start[0]);
  }
  if (unconstrained && (parsed.margin || parsed.limit)) {
    throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
  }
  parsed.events = {
    tap: tap || snap,
    drag,
    dragAll,
    smoothSteps,
    fixed,
    snap,
    hover,
    unconstrained
  };
}
function testTooltips(parsed, entry) {
  if (entry === false) {
    return;
  }
  if (entry === true || isValidPartialFormatter(entry)) {
    parsed.tooltips = [];
    for (var i2 = 0; i2 < parsed.handles; i2++) {
      parsed.tooltips.push(entry);
    }
  } else {
    entry = asArray(entry);
    if (entry.length !== parsed.handles) {
      throw new Error("noUiSlider: must pass a formatter for all handles.");
    }
    entry.forEach(function(formatter) {
      if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
        throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
      }
    });
    parsed.tooltips = entry;
  }
}
function testHandleAttributes(parsed, entry) {
  if (entry.length !== parsed.handles) {
    throw new Error("noUiSlider: must pass a attributes for all handles.");
  }
  parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
  if (!isValidPartialFormatter(entry)) {
    throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
  }
  parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
  if (!isValidFormatter(entry)) {
    throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  }
  parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
  if (typeof entry !== "boolean") {
    throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
  }
  parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
  parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
  if (typeof entry !== "string" && entry !== false) {
    throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
  }
  parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
  if (typeof entry !== "object") {
    throw new Error("noUiSlider: 'cssClasses' must be an object.");
  }
  if (typeof parsed.cssPrefix === "string") {
    parsed.cssClasses = {};
    Object.keys(entry).forEach(function(key) {
      parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
    });
  } else {
    parsed.cssClasses = entry;
  }
}
function testOptions(options) {
  var parsed = {
    margin: null,
    limit: null,
    padding: null,
    animate: true,
    animationDuration: 300,
    ariaFormat: defaultFormatter,
    format: defaultFormatter
  };
  var tests = {
    step: { r: false, t: testStep },
    keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
    keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
    keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
    start: { r: true, t: testStart },
    connect: { r: true, t: testConnect },
    direction: { r: true, t: testDirection },
    snap: { r: false, t: testSnap },
    animate: { r: false, t: testAnimate },
    animationDuration: { r: false, t: testAnimationDuration },
    range: { r: true, t: testRange },
    orientation: { r: false, t: testOrientation },
    margin: { r: false, t: testMargin },
    limit: { r: false, t: testLimit },
    padding: { r: false, t: testPadding },
    behaviour: { r: true, t: testBehaviour },
    ariaFormat: { r: false, t: testAriaFormat },
    format: { r: false, t: testFormat },
    tooltips: { r: false, t: testTooltips },
    keyboardSupport: { r: true, t: testKeyboardSupport },
    documentElement: { r: false, t: testDocumentElement },
    cssPrefix: { r: true, t: testCssPrefix },
    cssClasses: { r: true, t: testCssClasses },
    handleAttributes: { r: false, t: testHandleAttributes }
  };
  var defaults = {
    connect: false,
    direction: "ltr",
    behaviour: "tap",
    orientation: "horizontal",
    keyboardSupport: true,
    cssPrefix: "noUi-",
    cssClasses,
    keyboardPageMultiplier: 5,
    keyboardMultiplier: 1,
    keyboardDefaultStep: 10
  };
  if (options.format && !options.ariaFormat) {
    options.ariaFormat = options.format;
  }
  Object.keys(tests).forEach(function(name) {
    if (!isSet(options[name]) && defaults[name] === void 0) {
      if (tests[name].r) {
        throw new Error("noUiSlider: '" + name + "' is required.");
      }
      return;
    }
    tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
  });
  parsed.pips = options.pips;
  var d2 = document.createElement("div");
  var msPrefix = d2.style.msTransform !== void 0;
  var noPrefix = d2.style.transform !== void 0;
  parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
  var styles = [
    ["left", "top"],
    ["right", "bottom"]
  ];
  parsed.style = styles[parsed.dir][parsed.ort];
  return parsed;
}
function scope(target, options, originalOptions) {
  var actions = getActions();
  var supportsTouchActionNone = getSupportsTouchActionNone();
  var supportsPassive = supportsTouchActionNone && getSupportsPassive();
  var scope_Target = target;
  var scope_Base;
  var scope_Handles;
  var scope_Connects;
  var scope_Pips;
  var scope_Tooltips;
  var scope_Spectrum = options.spectrum;
  var scope_Values = [];
  var scope_Locations = [];
  var scope_HandleNumbers = [];
  var scope_ActiveHandlesCount = 0;
  var scope_Events = {};
  var scope_Document = target.ownerDocument;
  var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
  var scope_Body = scope_Document.body;
  var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
  function addNodeTo(addTarget, className) {
    var div = scope_Document.createElement("div");
    if (className) {
      addClass(div, className);
    }
    addTarget.appendChild(div);
    return div;
  }
  function addOrigin(base, handleNumber) {
    var origin = addNodeTo(base, options.cssClasses.origin);
    var handle = addNodeTo(origin, options.cssClasses.handle);
    addNodeTo(handle, options.cssClasses.touchArea);
    handle.setAttribute("data-handle", String(handleNumber));
    if (options.keyboardSupport) {
      handle.setAttribute("tabindex", "0");
      handle.addEventListener("keydown", function(event) {
        return eventKeydown(event, handleNumber);
      });
    }
    if (options.handleAttributes !== void 0) {
      var attributes_1 = options.handleAttributes[handleNumber];
      Object.keys(attributes_1).forEach(function(attribute) {
        handle.setAttribute(attribute, attributes_1[attribute]);
      });
    }
    handle.setAttribute("role", "slider");
    handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
    if (handleNumber === 0) {
      addClass(handle, options.cssClasses.handleLower);
    } else if (handleNumber === options.handles - 1) {
      addClass(handle, options.cssClasses.handleUpper);
    }
    origin.handle = handle;
    return origin;
  }
  function addConnect(base, add) {
    if (!add) {
      return false;
    }
    return addNodeTo(base, options.cssClasses.connect);
  }
  function addElements(connectOptions, base) {
    var connectBase = addNodeTo(base, options.cssClasses.connects);
    scope_Handles = [];
    scope_Connects = [];
    scope_Connects.push(addConnect(connectBase, connectOptions[0]));
    for (var i2 = 0; i2 < options.handles; i2++) {
      scope_Handles.push(addOrigin(base, i2));
      scope_HandleNumbers[i2] = i2;
      scope_Connects.push(addConnect(connectBase, connectOptions[i2 + 1]));
    }
  }
  function addSlider(addTarget) {
    addClass(addTarget, options.cssClasses.target);
    if (options.dir === 0) {
      addClass(addTarget, options.cssClasses.ltr);
    } else {
      addClass(addTarget, options.cssClasses.rtl);
    }
    if (options.ort === 0) {
      addClass(addTarget, options.cssClasses.horizontal);
    } else {
      addClass(addTarget, options.cssClasses.vertical);
    }
    var textDirection = getComputedStyle(addTarget).direction;
    if (textDirection === "rtl") {
      addClass(addTarget, options.cssClasses.textDirectionRtl);
    } else {
      addClass(addTarget, options.cssClasses.textDirectionLtr);
    }
    return addNodeTo(addTarget, options.cssClasses.base);
  }
  function addTooltip(handle, handleNumber) {
    if (!options.tooltips || !options.tooltips[handleNumber]) {
      return false;
    }
    return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
  }
  function isSliderDisabled() {
    return scope_Target.hasAttribute("disabled");
  }
  function isHandleDisabled(handleNumber) {
    var handleOrigin = scope_Handles[handleNumber];
    return handleOrigin.hasAttribute("disabled");
  }
  function disable(handleNumber) {
    if (handleNumber !== null && handleNumber !== void 0) {
      scope_Handles[handleNumber].setAttribute("disabled", "");
      scope_Handles[handleNumber].handle.removeAttribute("tabindex");
    } else {
      scope_Target.setAttribute("disabled", "");
      scope_Handles.forEach(function(handle) {
        handle.handle.removeAttribute("tabindex");
      });
    }
  }
  function enable(handleNumber) {
    if (handleNumber !== null && handleNumber !== void 0) {
      scope_Handles[handleNumber].removeAttribute("disabled");
      scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
    } else {
      scope_Target.removeAttribute("disabled");
      scope_Handles.forEach(function(handle) {
        handle.removeAttribute("disabled");
        handle.handle.setAttribute("tabindex", "0");
      });
    }
  }
  function removeTooltips() {
    if (scope_Tooltips) {
      removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
      scope_Tooltips.forEach(function(tooltip) {
        if (tooltip) {
          removeElement(tooltip);
        }
      });
      scope_Tooltips = null;
    }
  }
  function tooltips() {
    removeTooltips();
    scope_Tooltips = scope_Handles.map(addTooltip);
    bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function(values, handleNumber, unencoded) {
      if (!scope_Tooltips || !options.tooltips) {
        return;
      }
      if (scope_Tooltips[handleNumber] === false) {
        return;
      }
      var formattedValue = values[handleNumber];
      if (options.tooltips[handleNumber] !== true) {
        formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
      }
      scope_Tooltips[handleNumber].innerHTML = formattedValue;
    });
  }
  function aria() {
    removeEvent("update" + INTERNAL_EVENT_NS.aria);
    bindEvent("update" + INTERNAL_EVENT_NS.aria, function(values, handleNumber, unencoded, tap, positions) {
      scope_HandleNumbers.forEach(function(index2) {
        var handle = scope_Handles[index2];
        var min2 = checkHandlePosition(scope_Locations, index2, 0, true, true, true);
        var max2 = checkHandlePosition(scope_Locations, index2, 100, true, true, true);
        var now = positions[index2];
        var text = String(options.ariaFormat.to(unencoded[index2]));
        min2 = scope_Spectrum.fromStepping(min2).toFixed(1);
        max2 = scope_Spectrum.fromStepping(max2).toFixed(1);
        now = scope_Spectrum.fromStepping(now).toFixed(1);
        handle.children[0].setAttribute("aria-valuemin", min2);
        handle.children[0].setAttribute("aria-valuemax", max2);
        handle.children[0].setAttribute("aria-valuenow", now);
        handle.children[0].setAttribute("aria-valuetext", text);
      });
    });
  }
  function getGroup(pips2) {
    if (pips2.mode === PipsMode.Range || pips2.mode === PipsMode.Steps) {
      return scope_Spectrum.xVal;
    }
    if (pips2.mode === PipsMode.Count) {
      if (pips2.values < 2) {
        throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
      }
      var interval = pips2.values - 1;
      var spread = 100 / interval;
      var values = [];
      while (interval--) {
        values[interval] = interval * spread;
      }
      values.push(100);
      return mapToRange(values, pips2.stepped);
    }
    if (pips2.mode === PipsMode.Positions) {
      return mapToRange(pips2.values, pips2.stepped);
    }
    if (pips2.mode === PipsMode.Values) {
      if (pips2.stepped) {
        return pips2.values.map(function(value) {
          return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
        });
      }
      return pips2.values;
    }
    return [];
  }
  function mapToRange(values, stepped) {
    return values.map(function(value) {
      return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
    });
  }
  function generateSpread(pips2) {
    function safeIncrement(value, increment) {
      return Number((value + increment).toFixed(7));
    }
    var group = getGroup(pips2);
    var indexes = {};
    var firstInRange = scope_Spectrum.xVal[0];
    var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
    var ignoreFirst = false;
    var ignoreLast = false;
    var prevPct = 0;
    group = unique(group.slice().sort(function(a2, b2) {
      return a2 - b2;
    }));
    if (group[0] !== firstInRange) {
      group.unshift(firstInRange);
      ignoreFirst = true;
    }
    if (group[group.length - 1] !== lastInRange) {
      group.push(lastInRange);
      ignoreLast = true;
    }
    group.forEach(function(current, index2) {
      var step;
      var i2;
      var q2;
      var low = current;
      var high = group[index2 + 1];
      var newPct;
      var pctDifference;
      var pctPos;
      var type;
      var steps;
      var realSteps;
      var stepSize;
      var isSteps = pips2.mode === PipsMode.Steps;
      if (isSteps) {
        step = scope_Spectrum.xNumSteps[index2];
      }
      if (!step) {
        step = high - low;
      }
      if (high === void 0) {
        high = low;
      }
      step = Math.max(step, 1e-7);
      for (i2 = low; i2 <= high; i2 = safeIncrement(i2, step)) {
        newPct = scope_Spectrum.toStepping(i2);
        pctDifference = newPct - prevPct;
        steps = pctDifference / (pips2.density || 1);
        realSteps = Math.round(steps);
        stepSize = pctDifference / realSteps;
        for (q2 = 1; q2 <= realSteps; q2 += 1) {
          pctPos = prevPct + q2 * stepSize;
          indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
        }
        type = group.indexOf(i2) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
        if (!index2 && ignoreFirst && i2 !== high) {
          type = 0;
        }
        if (!(i2 === high && ignoreLast)) {
          indexes[newPct.toFixed(5)] = [i2, type];
        }
        prevPct = newPct;
      }
    });
    return indexes;
  }
  function addMarking(spread, filterFunc, formatter) {
    var _a, _b;
    var element = scope_Document.createElement("div");
    var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, _a);
    var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, _b);
    var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
    var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
    addClass(element, options.cssClasses.pips);
    addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
    function getClasses(type, source) {
      var a2 = source === options.cssClasses.value;
      var orientationClasses = a2 ? valueOrientationClasses : markerOrientationClasses;
      var sizeClasses = a2 ? valueSizeClasses : markerSizeClasses;
      return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
    }
    function addSpread(offset2, value, type) {
      type = filterFunc ? filterFunc(value, type) : type;
      if (type === PipsType.None) {
        return;
      }
      var node = addNodeTo(element, false);
      node.className = getClasses(type, options.cssClasses.marker);
      node.style[options.style] = offset2 + "%";
      if (type > PipsType.NoValue) {
        node = addNodeTo(element, false);
        node.className = getClasses(type, options.cssClasses.value);
        node.setAttribute("data-value", String(value));
        node.style[options.style] = offset2 + "%";
        node.innerHTML = String(formatter.to(value));
      }
    }
    Object.keys(spread).forEach(function(offset2) {
      addSpread(offset2, spread[offset2][0], spread[offset2][1]);
    });
    return element;
  }
  function removePips() {
    if (scope_Pips) {
      removeElement(scope_Pips);
      scope_Pips = null;
    }
  }
  function pips(pips2) {
    removePips();
    var spread = generateSpread(pips2);
    var filter = pips2.filter;
    var format = pips2.format || {
      to: function(value) {
        return String(Math.round(value));
      }
    };
    scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
    return scope_Pips;
  }
  function baseSize() {
    var rect = scope_Base.getBoundingClientRect();
    var alt = "offset" + ["Width", "Height"][options.ort];
    return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
  }
  function attachEvent(events, element, callback, data) {
    var method = function(event) {
      var e2 = fixEvent(event, data.pageOffset, data.target || element);
      if (!e2) {
        return false;
      }
      if (isSliderDisabled() && !data.doNotReject) {
        return false;
      }
      if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
        return false;
      }
      if (events === actions.start && e2.buttons !== void 0 && e2.buttons > 1) {
        return false;
      }
      if (data.hover && e2.buttons) {
        return false;
      }
      if (!supportsPassive) {
        e2.preventDefault();
      }
      e2.calcPoint = e2.points[options.ort];
      callback(e2, data);
      return;
    };
    var methods = [];
    events.split(" ").forEach(function(eventName) {
      element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
      methods.push([eventName, method]);
    });
    return methods;
  }
  function fixEvent(e2, pageOffset, eventTarget) {
    var touch = e2.type.indexOf("touch") === 0;
    var mouse = e2.type.indexOf("mouse") === 0;
    var pointer = e2.type.indexOf("pointer") === 0;
    var x2 = 0;
    var y2 = 0;
    if (e2.type.indexOf("MSPointer") === 0) {
      pointer = true;
    }
    if (e2.type === "mousedown" && !e2.buttons && !e2.touches) {
      return false;
    }
    if (touch) {
      var isTouchOnTarget = function(checkTouch) {
        var target2 = checkTouch.target;
        return target2 === eventTarget || eventTarget.contains(target2) || e2.composed && e2.composedPath().shift() === eventTarget;
      };
      if (e2.type === "touchstart") {
        var targetTouches = Array.prototype.filter.call(e2.touches, isTouchOnTarget);
        if (targetTouches.length > 1) {
          return false;
        }
        x2 = targetTouches[0].pageX;
        y2 = targetTouches[0].pageY;
      } else {
        var targetTouch = Array.prototype.find.call(e2.changedTouches, isTouchOnTarget);
        if (!targetTouch) {
          return false;
        }
        x2 = targetTouch.pageX;
        y2 = targetTouch.pageY;
      }
    }
    pageOffset = pageOffset || getPageOffset(scope_Document);
    if (mouse || pointer) {
      x2 = e2.clientX + pageOffset.x;
      y2 = e2.clientY + pageOffset.y;
    }
    e2.pageOffset = pageOffset;
    e2.points = [x2, y2];
    e2.cursor = mouse || pointer;
    return e2;
  }
  function calcPointToPercentage(calcPoint) {
    var location = calcPoint - offset(scope_Base, options.ort);
    var proposal = location * 100 / baseSize();
    proposal = limit(proposal);
    return options.dir ? 100 - proposal : proposal;
  }
  function getClosestHandle(clickedPosition) {
    var smallestDifference = 100;
    var handleNumber = false;
    scope_Handles.forEach(function(handle, index2) {
      if (isHandleDisabled(index2)) {
        return;
      }
      var handlePosition = scope_Locations[index2];
      var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
      var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
      var isCloser = differenceWithThisHandle < smallestDifference;
      var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
      if (isCloser || isCloserAfter || clickAtEdge) {
        handleNumber = index2;
        smallestDifference = differenceWithThisHandle;
      }
    });
    return handleNumber;
  }
  function documentLeave(event, data) {
    if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
      eventEnd(event, data);
    }
  }
  function eventMove(event, data) {
    if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
      return eventEnd(event, data);
    }
    var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
    var proposal = movement * 100 / data.baseSize;
    moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
  }
  function eventEnd(event, data) {
    if (data.handle) {
      removeClass(data.handle, options.cssClasses.active);
      scope_ActiveHandlesCount -= 1;
    }
    data.listeners.forEach(function(c2) {
      scope_DocumentElement.removeEventListener(c2[0], c2[1]);
    });
    if (scope_ActiveHandlesCount === 0) {
      removeClass(scope_Target, options.cssClasses.drag);
      setZindex();
      if (event.cursor) {
        scope_Body.style.cursor = "";
        scope_Body.removeEventListener("selectstart", preventDefault);
      }
    }
    if (options.events.smoothSteps) {
      data.handleNumbers.forEach(function(handleNumber) {
        setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
      });
      data.handleNumbers.forEach(function(handleNumber) {
        fireEvent("update", handleNumber);
      });
    }
    data.handleNumbers.forEach(function(handleNumber) {
      fireEvent("change", handleNumber);
      fireEvent("set", handleNumber);
      fireEvent("end", handleNumber);
    });
  }
  function eventStart(event, data) {
    if (data.handleNumbers.some(isHandleDisabled)) {
      return;
    }
    var handle;
    if (data.handleNumbers.length === 1) {
      var handleOrigin = scope_Handles[data.handleNumbers[0]];
      handle = handleOrigin.children[0];
      scope_ActiveHandlesCount += 1;
      addClass(handle, options.cssClasses.active);
    }
    event.stopPropagation();
    var listeners = [];
    var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
      // The event target has changed so we need to propagate the original one so that we keep
      // relying on it to extract target touches.
      target: event.target,
      handle,
      connect: data.connect,
      listeners,
      startCalcPoint: event.calcPoint,
      baseSize: baseSize(),
      pageOffset: event.pageOffset,
      handleNumbers: data.handleNumbers,
      buttonsProperty: event.buttons,
      locations: scope_Locations.slice()
    });
    var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
      target: event.target,
      handle,
      listeners,
      doNotReject: true,
      handleNumbers: data.handleNumbers
    });
    var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
      target: event.target,
      handle,
      listeners,
      doNotReject: true,
      handleNumbers: data.handleNumbers
    });
    listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
    if (event.cursor) {
      scope_Body.style.cursor = getComputedStyle(event.target).cursor;
      if (scope_Handles.length > 1) {
        addClass(scope_Target, options.cssClasses.drag);
      }
      scope_Body.addEventListener("selectstart", preventDefault, false);
    }
    data.handleNumbers.forEach(function(handleNumber) {
      fireEvent("start", handleNumber);
    });
  }
  function eventTap(event) {
    event.stopPropagation();
    var proposal = calcPointToPercentage(event.calcPoint);
    var handleNumber = getClosestHandle(proposal);
    if (handleNumber === false) {
      return;
    }
    if (!options.events.snap) {
      addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
    }
    setHandle(handleNumber, proposal, true, true);
    setZindex();
    fireEvent("slide", handleNumber, true);
    fireEvent("update", handleNumber, true);
    if (!options.events.snap) {
      fireEvent("change", handleNumber, true);
      fireEvent("set", handleNumber, true);
    } else {
      eventStart(event, { handleNumbers: [handleNumber] });
    }
  }
  function eventHover(event) {
    var proposal = calcPointToPercentage(event.calcPoint);
    var to = scope_Spectrum.getStep(proposal);
    var value = scope_Spectrum.fromStepping(to);
    Object.keys(scope_Events).forEach(function(targetEvent) {
      if ("hover" === targetEvent.split(".")[0]) {
        scope_Events[targetEvent].forEach(function(callback) {
          callback.call(scope_Self, value);
        });
      }
    });
  }
  function eventKeydown(event, handleNumber) {
    if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
      return false;
    }
    var horizontalKeys = ["Left", "Right"];
    var verticalKeys = ["Down", "Up"];
    var largeStepKeys = ["PageDown", "PageUp"];
    var edgeKeys = ["Home", "End"];
    if (options.dir && !options.ort) {
      horizontalKeys.reverse();
    } else if (options.ort && !options.dir) {
      verticalKeys.reverse();
      largeStepKeys.reverse();
    }
    var key = event.key.replace("Arrow", "");
    var isLargeDown = key === largeStepKeys[0];
    var isLargeUp = key === largeStepKeys[1];
    var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
    var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
    var isMin = key === edgeKeys[0];
    var isMax = key === edgeKeys[1];
    if (!isDown && !isUp && !isMin && !isMax) {
      return true;
    }
    event.preventDefault();
    var to;
    if (isUp || isDown) {
      var direction = isDown ? 0 : 1;
      var steps = getNextStepsForHandle(handleNumber);
      var step = steps[direction];
      if (step === null) {
        return false;
      }
      if (step === false) {
        step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
      }
      if (isLargeUp || isLargeDown) {
        step *= options.keyboardPageMultiplier;
      } else {
        step *= options.keyboardMultiplier;
      }
      step = Math.max(step, 1e-7);
      step = (isDown ? -1 : 1) * step;
      to = scope_Values[handleNumber] + step;
    } else if (isMax) {
      to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
    } else {
      to = options.spectrum.xVal[0];
    }
    setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
    fireEvent("slide", handleNumber);
    fireEvent("update", handleNumber);
    fireEvent("change", handleNumber);
    fireEvent("set", handleNumber);
    return false;
  }
  function bindSliderEvents(behaviour) {
    if (!behaviour.fixed) {
      scope_Handles.forEach(function(handle, index2) {
        attachEvent(actions.start, handle.children[0], eventStart, {
          handleNumbers: [index2]
        });
      });
    }
    if (behaviour.tap) {
      attachEvent(actions.start, scope_Base, eventTap, {});
    }
    if (behaviour.hover) {
      attachEvent(actions.move, scope_Base, eventHover, {
        hover: true
      });
    }
    if (behaviour.drag) {
      scope_Connects.forEach(function(connect, index2) {
        if (connect === false || index2 === 0 || index2 === scope_Connects.length - 1) {
          return;
        }
        var handleBefore = scope_Handles[index2 - 1];
        var handleAfter = scope_Handles[index2];
        var eventHolders = [connect];
        var handlesToDrag = [handleBefore, handleAfter];
        var handleNumbersToDrag = [index2 - 1, index2];
        addClass(connect, options.cssClasses.draggable);
        if (behaviour.fixed) {
          eventHolders.push(handleBefore.children[0]);
          eventHolders.push(handleAfter.children[0]);
        }
        if (behaviour.dragAll) {
          handlesToDrag = scope_Handles;
          handleNumbersToDrag = scope_HandleNumbers;
        }
        eventHolders.forEach(function(eventHolder) {
          attachEvent(actions.start, eventHolder, eventStart, {
            handles: handlesToDrag,
            handleNumbers: handleNumbersToDrag,
            connect
          });
        });
      });
    }
  }
  function bindEvent(namespacedEvent, callback) {
    scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
    scope_Events[namespacedEvent].push(callback);
    if (namespacedEvent.split(".")[0] === "update") {
      scope_Handles.forEach(function(a2, index2) {
        fireEvent("update", index2);
      });
    }
  }
  function isInternalNamespace(namespace) {
    return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
  }
  function removeEvent(namespacedEvent) {
    var event = namespacedEvent && namespacedEvent.split(".")[0];
    var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
    Object.keys(scope_Events).forEach(function(bind) {
      var tEvent = bind.split(".")[0];
      var tNamespace = bind.substring(tEvent.length);
      if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
        if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
          delete scope_Events[bind];
        }
      }
    });
  }
  function fireEvent(eventName, handleNumber, tap) {
    Object.keys(scope_Events).forEach(function(targetEvent) {
      var eventType = targetEvent.split(".")[0];
      if (eventName === eventType) {
        scope_Events[targetEvent].forEach(function(callback) {
          callback.call(
            // Use the slider public API as the scope ('this')
            scope_Self,
            // Return values as array, so arg_1[arg_2] is always valid.
            scope_Values.map(options.format.to),
            // Handle index, 0 or 1
            handleNumber,
            // Un-formatted slider values
            scope_Values.slice(),
            // Event is fired by tap, true or false
            tap || false,
            // Left offset of the handle, in relation to the slider
            scope_Locations.slice(),
            // add the slider public API to an accessible parameter when this is unavailable
            scope_Self
          );
        });
      }
    });
  }
  function checkHandlePosition(reference2, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
    var distance;
    if (scope_Handles.length > 1 && !options.events.unconstrained) {
      if (lookBackward && handleNumber > 0) {
        distance = scope_Spectrum.getAbsoluteDistance(reference2[handleNumber - 1], options.margin, false);
        to = Math.max(to, distance);
      }
      if (lookForward && handleNumber < scope_Handles.length - 1) {
        distance = scope_Spectrum.getAbsoluteDistance(reference2[handleNumber + 1], options.margin, true);
        to = Math.min(to, distance);
      }
    }
    if (scope_Handles.length > 1 && options.limit) {
      if (lookBackward && handleNumber > 0) {
        distance = scope_Spectrum.getAbsoluteDistance(reference2[handleNumber - 1], options.limit, false);
        to = Math.min(to, distance);
      }
      if (lookForward && handleNumber < scope_Handles.length - 1) {
        distance = scope_Spectrum.getAbsoluteDistance(reference2[handleNumber + 1], options.limit, true);
        to = Math.max(to, distance);
      }
    }
    if (options.padding) {
      if (handleNumber === 0) {
        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
        to = Math.max(to, distance);
      }
      if (handleNumber === scope_Handles.length - 1) {
        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
        to = Math.min(to, distance);
      }
    }
    if (!smoothSteps) {
      to = scope_Spectrum.getStep(to);
    }
    to = limit(to);
    if (to === reference2[handleNumber] && !getValue) {
      return false;
    }
    return to;
  }
  function inRuleOrder(v2, a2) {
    var o2 = options.ort;
    return (o2 ? a2 : v2) + ", " + (o2 ? v2 : a2);
  }
  function moveHandles(upward, proposal, locations, handleNumbers, connect) {
    var proposals = locations.slice();
    var firstHandle = handleNumbers[0];
    var smoothSteps = options.events.smoothSteps;
    var b2 = [!upward, upward];
    var f2 = [upward, !upward];
    handleNumbers = handleNumbers.slice();
    if (upward) {
      handleNumbers.reverse();
    }
    if (handleNumbers.length > 1) {
      handleNumbers.forEach(function(handleNumber, o2) {
        var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b2[o2], f2[o2], false, smoothSteps);
        if (to === false) {
          proposal = 0;
        } else {
          proposal = to - proposals[handleNumber];
          proposals[handleNumber] = to;
        }
      });
    } else {
      b2 = f2 = [true];
    }
    var state = false;
    handleNumbers.forEach(function(handleNumber, o2) {
      state = setHandle(handleNumber, locations[handleNumber] + proposal, b2[o2], f2[o2], false, smoothSteps) || state;
    });
    if (state) {
      handleNumbers.forEach(function(handleNumber) {
        fireEvent("update", handleNumber);
        fireEvent("slide", handleNumber);
      });
      if (connect != void 0) {
        fireEvent("drag", firstHandle);
      }
    }
  }
  function transformDirection(a2, b2) {
    return options.dir ? 100 - a2 - b2 : a2;
  }
  function updateHandlePosition(handleNumber, to) {
    scope_Locations[handleNumber] = to;
    scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
    var translation = transformDirection(to, 0) - scope_DirOffset;
    var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
    scope_Handles[handleNumber].style[options.transformRule] = translateRule;
    updateConnect(handleNumber);
    updateConnect(handleNumber + 1);
  }
  function setZindex() {
    scope_HandleNumbers.forEach(function(handleNumber) {
      var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
      var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
      scope_Handles[handleNumber].style.zIndex = String(zIndex);
    });
  }
  function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
    if (!exactInput) {
      to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
    }
    if (to === false) {
      return false;
    }
    updateHandlePosition(handleNumber, to);
    return true;
  }
  function updateConnect(index2) {
    if (!scope_Connects[index2]) {
      return;
    }
    var l2 = 0;
    var h2 = 100;
    if (index2 !== 0) {
      l2 = scope_Locations[index2 - 1];
    }
    if (index2 !== scope_Connects.length - 1) {
      h2 = scope_Locations[index2];
    }
    var connectWidth = h2 - l2;
    var translateRule = "translate(" + inRuleOrder(transformDirection(l2, connectWidth) + "%", "0") + ")";
    var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
    scope_Connects[index2].style[options.transformRule] = translateRule + " " + scaleRule;
  }
  function resolveToValue(to, handleNumber) {
    if (to === null || to === false || to === void 0) {
      return scope_Locations[handleNumber];
    }
    if (typeof to === "number") {
      to = String(to);
    }
    to = options.format.from(to);
    if (to !== false) {
      to = scope_Spectrum.toStepping(to);
    }
    if (to === false || isNaN(to)) {
      return scope_Locations[handleNumber];
    }
    return to;
  }
  function valueSet(input, fireSetEvent, exactInput) {
    var values = asArray(input);
    var isInit = scope_Locations[0] === void 0;
    fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
    if (options.animate && !isInit) {
      addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
    }
    scope_HandleNumbers.forEach(function(handleNumber) {
      setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
    });
    var i2 = scope_HandleNumbers.length === 1 ? 0 : 1;
    if (isInit && scope_Spectrum.hasNoSize()) {
      exactInput = true;
      scope_Locations[0] = 0;
      if (scope_HandleNumbers.length > 1) {
        var space_1 = 100 / (scope_HandleNumbers.length - 1);
        scope_HandleNumbers.forEach(function(handleNumber) {
          scope_Locations[handleNumber] = handleNumber * space_1;
        });
      }
    }
    for (; i2 < scope_HandleNumbers.length; ++i2) {
      scope_HandleNumbers.forEach(function(handleNumber) {
        setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
      });
    }
    setZindex();
    scope_HandleNumbers.forEach(function(handleNumber) {
      fireEvent("update", handleNumber);
      if (values[handleNumber] !== null && fireSetEvent) {
        fireEvent("set", handleNumber);
      }
    });
  }
  function valueReset(fireSetEvent) {
    valueSet(options.start, fireSetEvent);
  }
  function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
    handleNumber = Number(handleNumber);
    if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
      throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
    }
    setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
    fireEvent("update", handleNumber);
    if (fireSetEvent) {
      fireEvent("set", handleNumber);
    }
  }
  function valueGet(unencoded) {
    if (unencoded === void 0) {
      unencoded = false;
    }
    if (unencoded) {
      return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
    }
    var values = scope_Values.map(options.format.to);
    if (values.length === 1) {
      return values[0];
    }
    return values;
  }
  function destroy() {
    removeEvent(INTERNAL_EVENT_NS.aria);
    removeEvent(INTERNAL_EVENT_NS.tooltips);
    Object.keys(options.cssClasses).forEach(function(key) {
      removeClass(scope_Target, options.cssClasses[key]);
    });
    while (scope_Target.firstChild) {
      scope_Target.removeChild(scope_Target.firstChild);
    }
    delete scope_Target.noUiSlider;
  }
  function getNextStepsForHandle(handleNumber) {
    var location = scope_Locations[handleNumber];
    var nearbySteps = scope_Spectrum.getNearbySteps(location);
    var value = scope_Values[handleNumber];
    var increment = nearbySteps.thisStep.step;
    var decrement = null;
    if (options.snap) {
      return [
        value - nearbySteps.stepBefore.startValue || null,
        nearbySteps.stepAfter.startValue - value || null
      ];
    }
    if (increment !== false) {
      if (value + increment > nearbySteps.stepAfter.startValue) {
        increment = nearbySteps.stepAfter.startValue - value;
      }
    }
    if (value > nearbySteps.thisStep.startValue) {
      decrement = nearbySteps.thisStep.step;
    } else if (nearbySteps.stepBefore.step === false) {
      decrement = false;
    } else {
      decrement = value - nearbySteps.stepBefore.highestStep;
    }
    if (location === 100) {
      increment = null;
    } else if (location === 0) {
      decrement = null;
    }
    var stepDecimals = scope_Spectrum.countStepDecimals();
    if (increment !== null && increment !== false) {
      increment = Number(increment.toFixed(stepDecimals));
    }
    if (decrement !== null && decrement !== false) {
      decrement = Number(decrement.toFixed(stepDecimals));
    }
    return [decrement, increment];
  }
  function getNextSteps() {
    return scope_HandleNumbers.map(getNextStepsForHandle);
  }
  function updateOptions(optionsToUpdate, fireSetEvent) {
    var v2 = valueGet();
    var updateAble = [
      "margin",
      "limit",
      "padding",
      "range",
      "animate",
      "snap",
      "step",
      "format",
      "pips",
      "tooltips"
    ];
    updateAble.forEach(function(name) {
      if (optionsToUpdate[name] !== void 0) {
        originalOptions[name] = optionsToUpdate[name];
      }
    });
    var newOptions = testOptions(originalOptions);
    updateAble.forEach(function(name) {
      if (optionsToUpdate[name] !== void 0) {
        options[name] = newOptions[name];
      }
    });
    scope_Spectrum = newOptions.spectrum;
    options.margin = newOptions.margin;
    options.limit = newOptions.limit;
    options.padding = newOptions.padding;
    if (options.pips) {
      pips(options.pips);
    } else {
      removePips();
    }
    if (options.tooltips) {
      tooltips();
    } else {
      removeTooltips();
    }
    scope_Locations = [];
    valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v2, fireSetEvent);
  }
  function setupSlider() {
    scope_Base = addSlider(scope_Target);
    addElements(options.connect, scope_Base);
    bindSliderEvents(options.events);
    valueSet(options.start);
    if (options.pips) {
      pips(options.pips);
    }
    if (options.tooltips) {
      tooltips();
    }
    aria();
  }
  setupSlider();
  var scope_Self = {
    destroy,
    steps: getNextSteps,
    on: bindEvent,
    off: removeEvent,
    get: valueGet,
    set: valueSet,
    setHandle: valueSetHandle,
    reset: valueReset,
    disable,
    enable,
    // Exposed for unit testing, don't use this in your application.
    __moveHandles: function(upward, proposal, handleNumbers) {
      moveHandles(upward, proposal, scope_Locations, handleNumbers);
    },
    options: originalOptions,
    updateOptions,
    target: scope_Target,
    removePips,
    removeTooltips,
    getPositions: function() {
      return scope_Locations.slice();
    },
    getTooltips: function() {
      return scope_Tooltips;
    },
    getOrigins: function() {
      return scope_Handles;
    },
    pips
    // Issue #594
  };
  return scope_Self;
}
function initialize(target, originalOptions) {
  if (!target || !target.nodeName) {
    throw new Error("noUiSlider: create requires a single element, got: " + target);
  }
  if (target.noUiSlider) {
    throw new Error("noUiSlider: Slider was already initialized.");
  }
  var options = testOptions(originalOptions);
  var api = scope(target, options, originalOptions);
  target.noUiSlider = api;
  return api;
}
var nouislider = {
  // Exposed for unit testing, don't use this in your application.
  __spectrum: Spectrum,
  // A reference to the default classes, allows global changes.
  // Use the cssClasses option for changes to one slider.
  cssClasses,
  create: initialize
};
function arraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  const array2Sorted = array2.slice().sort();
  return array1.length === array2.length && array1.slice().sort().every(function(value, index2) {
    return value === array2Sorted[index2];
  });
}
function useSlider(props, context, dependencies) {
  const {
    orientation,
    direction,
    tooltips,
    step,
    min: min2,
    max: max2,
    merge,
    id,
    disabled,
    options,
    classes: classes2,
    format,
    lazy,
    ariaLabelledby,
    aria
  } = toRefs(props);
  const value = dependencies.value;
  const initialValue = dependencies.initialValue;
  const tooltipsFormat = dependencies.tooltipsFormat;
  const tooltipsMerge = dependencies.tooltipsMerge;
  const tooltipFormat = dependencies.tooltipFormat;
  const classList = dependencies.classList;
  const slider = ref(null);
  const slider$ = ref(null);
  const inited = ref(false);
  const defaultOptions = computed(() => {
    let defaultOptions2 = {
      cssPrefix: "",
      cssClasses: classList.value,
      orientation: orientation.value,
      direction: direction.value,
      tooltips: tooltips.value ? tooltipsFormat.value : false,
      connect: "lower",
      start: isNullish(value.value) ? min2.value : value.value,
      range: {
        "min": min2.value,
        "max": max2.value
      }
    };
    if (step.value > 0) {
      defaultOptions2.step = step.value;
    }
    if (Array.isArray(value.value)) {
      defaultOptions2.connect = true;
    }
    if (ariaLabelledby && ariaLabelledby.value || aria && Object.keys(aria.value).length) {
      let handles = Array.isArray(value.value) ? value.value : [value.value];
      defaultOptions2.handleAttributes = handles.map((h2) => Object.assign({}, aria.value, ariaLabelledby && ariaLabelledby.value ? {
        "aria-labelledby": ariaLabelledby.value
      } : {}));
    }
    if (format.value) {
      defaultOptions2.ariaFormat = tooltipFormat.value;
    }
    return defaultOptions2;
  });
  const sliderProps = computed(() => {
    let sliderProps2 = {
      id: id && id.value ? id.value : void 0
    };
    if (disabled.value) {
      sliderProps2.disabled = true;
    }
    return sliderProps2;
  });
  const isRange = computed(() => {
    return Array.isArray(value.value);
  });
  const reset = () => {
    updateValue(initialValue.value);
  };
  const getSliderValue = () => {
    let sliderValue = slider$.value.get();
    return Array.isArray(sliderValue) ? sliderValue.map((v2) => parseFloat(v2)) : parseFloat(sliderValue);
  };
  const update = (val, triggerChange = true) => {
    slider$.value.set(val, triggerChange);
  };
  const updateValue = (val) => {
    context.emit("input", val);
    context.emit("update:modelValue", val);
    context.emit("update", val);
  };
  const init = () => {
    slider$.value = nouislider.create(slider.value, Object.assign({}, defaultOptions.value, options.value));
    if (tooltips.value && isRange.value && merge.value >= 0) {
      tooltipsMerge(slider.value, merge.value, " - ");
    }
    slider$.value.on("set", () => {
      const sliderValue = getSliderValue();
      context.emit("change", sliderValue);
      context.emit("set", sliderValue);
      if (lazy.value) {
        updateValue(sliderValue);
      }
    });
    slider$.value.on("update", () => {
      if (!inited.value) {
        return;
      }
      const sliderValue = getSliderValue();
      if (isRange.value && arraysEqual(value.value, sliderValue) || !isRange.value && value.value == sliderValue) {
        context.emit("update", sliderValue);
        return;
      }
      if (!lazy.value) {
        updateValue(sliderValue);
      }
    });
    slider$.value.on("start", () => {
      context.emit("start", getSliderValue());
    });
    slider$.value.on("end", () => {
      context.emit("end", getSliderValue());
    });
    slider$.value.on("slide", () => {
      context.emit("slide", getSliderValue());
    });
    slider$.value.on("drag", () => {
      context.emit("drag", getSliderValue());
    });
    slider.value.querySelectorAll("[data-handle]").forEach((handle) => {
      handle.onblur = () => {
        if (!slider.value) {
          return;
        }
        classList.value.focused.split(" ").forEach((c2) => {
          slider.value.classList.remove(c2);
        });
      };
      handle.onfocus = () => {
        classList.value.focused.split(" ").forEach((c2) => {
          slider.value.classList.add(c2);
        });
      };
    });
    inited.value = true;
  };
  const destroy = () => {
    slider$.value.off();
    slider$.value.destroy();
    slider$.value = null;
  };
  const refresh = (n2, o2) => {
    inited.value = false;
    destroy();
    init();
  };
  onMounted(init);
  onUnmounted(destroy);
  watch(isRange, refresh, { immediate: false });
  watch(min2, refresh, { immediate: false });
  watch(max2, refresh, { immediate: false });
  watch(step, refresh, { immediate: false });
  watch(orientation, refresh, { immediate: false });
  watch(direction, refresh, { immediate: false });
  watch(tooltips, refresh, { immediate: false });
  watch(merge, refresh, { immediate: false });
  watch(format, refresh, { immediate: false, deep: true });
  watch(options, refresh, { immediate: false, deep: true });
  watch(classes2, refresh, { immediate: false, deep: true });
  watch(value, (value2, old) => {
    if (!old) {
      return;
    }
    if (
      // If both old and new has multiple handles
      // and the number of handles decreased
      typeof old === "object" && typeof value2 === "object" && value2 && Object.keys(old) > Object.keys(value2) || // If the old had multiple handles but
      // if it decreased to single
      typeof old === "object" && typeof value2 !== "object" || // Or has no value at all
      isNullish(value2)
    ) {
      refresh();
    }
  }, { immediate: false });
  watch(value, (newValue) => {
    if (isNullish(newValue)) {
      update(min2.value, false);
      return;
    }
    let sliderValue = getSliderValue();
    if (isRange.value && !Array.isArray(sliderValue)) {
      sliderValue = [sliderValue];
    }
    if (isRange.value && !arraysEqual(newValue, sliderValue) || !isRange.value && newValue != sliderValue) {
      update(newValue, false);
    }
  }, { deep: true });
  return {
    slider,
    slider$,
    isRange,
    sliderProps,
    init,
    destroy,
    refresh,
    update,
    reset
  };
}
var valueProps$1 = {
  value: {
    validator: function(p2) {
      return (p3) => typeof p3 === "number" || p3 instanceof Array || p3 === null || p3 === void 0 || p3 === false;
    },
    required: false
  },
  modelValue: {
    validator: function(p2) {
      return (p3) => typeof p3 === "number" || p3 instanceof Array || p3 === null || p3 === void 0 || p3 === false;
    },
    required: false
  }
};
var script$J = {
  name: "Slider",
  emits: [
    "input",
    "update:modelValue",
    "start",
    "slide",
    "drag",
    "update",
    "change",
    "set",
    "end"
  ],
  props: {
    ...valueProps$1,
    id: {
      type: [String, Number],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    },
    step: {
      type: Number,
      required: false,
      default: 1
    },
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    direction: {
      type: String,
      required: false,
      default: "ltr"
    },
    tooltips: {
      type: Boolean,
      required: false,
      default: true
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    merge: {
      type: Number,
      required: false,
      default: -1
    },
    format: {
      type: [Object, Function, Boolean],
      required: false,
      default: null
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    showTooltip: {
      type: String,
      required: false,
      default: "always"
    },
    tooltipPosition: {
      type: String,
      required: false,
      default: null
    },
    lazy: {
      type: Boolean,
      required: false,
      default: true
    },
    ariaLabelledby: {
      type: String,
      required: false,
      default: void 0
    },
    aria: {
      required: false,
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    const value = useValue$2(props);
    const classes2 = useClasses$1(props);
    const tooltip = useTooltip(props, context, {
      value: value.value,
      classList: classes2.classList
    });
    const slider = useSlider(props, context, {
      value: value.value,
      initialValue: value.initialValue,
      tooltipFormat: tooltip.tooltipFormat,
      tooltipsFormat: tooltip.tooltipsFormat,
      tooltipsMerge: tooltip.tooltipsMerge,
      classList: classes2.classList
    });
    return {
      ...classes2,
      ...tooltip,
      ...slider
    };
  }
};
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    mergeProps(_ctx.sliderProps, { ref: "slider" }),
    null,
    16
    /* FULL_PROPS */
  );
}
script$J.render = render$k;
script$J.__file = "node_modules/@vueform/slider/src/Slider.vue";
var script$I = {
  name: "SliderElement",
  components: {
    Slider: script$J
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        slider: {
          target: "",
          focused: "",
          tooltipFocus: "",
          tooltipDrag: "",
          ltr: "",
          rtl: "",
          horizontal: "",
          vertical: "",
          textDirectionRtl: "",
          textDirectionLtr: "",
          base: "",
          connects: "",
          connect: "",
          origin: "",
          handle: "",
          touchArea: "",
          tooltip: "",
          tooltipTop: "",
          tooltipBottom: "",
          tooltipLeft: "",
          tooltipRight: "",
          tooltipHidden: "",
          active: "",
          draggable: "",
          tap: "",
          drag: ""
        }
      }
    };
  }
};
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Slider = resolveComponent("Slider");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            createCommentVNode(" @vueform/slider component "),
            createVNode(_component_Slider, mergeProps({
              value: _ctx.value,
              modelValue: _ctx.value
            }, _ctx.fieldOptions, {
              aria: _ctx.aria,
              classes: _ctx.classes.slider,
              id: _ctx.fieldId,
              ref: "input",
              onUpdate: _ctx.handleUpdate,
              onChange: _ctx.handleChange
            }), null, 16, ["value", "modelValue", "aria", "classes", "id", "onUpdate", "onChange"])
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$I.render = render$j;
script$I.__file = "themes/blank/templates/elements/SliderElement.vue";
var script$H = {
  name: "SliderElement",
  render: script$I.render,
  components: {
    Slider: script$J
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "vf-slider-wrapper",
        wrapper_sm: "vf-slider-wrapper-sm",
        wrapper_md: "",
        wrapper_lg: "vf-slider-wrapper-lg",
        slider: {
          target: "vf-slider-target",
          target_sm: "vf-slider-target-sm",
          target_md: "vf-slider-target-md",
          target_lg: "vf-slider-target-lg",
          focused: "vf-slider-focused",
          tooltipFocus: "vf-slider-tooltip-focus",
          tooltipDrag: "vf-slider-tooltip-drag",
          ltr: "vf-slider-ltr",
          rtl: "vf-slider-rtl",
          horizontal: "vf-slider-horizontal",
          horizontal_sm: "vf-slider-horizontal-sm",
          horizontal_md: "vf-slider-horizontal-md",
          horizontal_lg: "vf-slider-horizontal-lg",
          vertical: "vf-slider-vertical",
          vertical_sm: "vf-slider-vertical-sm",
          vertical_md: "vf-slider-vertical-md",
          vertical_lg: "vf-slider-vertical-lg",
          textDirectionRtl: "vf-slider-txt-dir-rtl",
          textDirectionLtr: "vf-slider-txt-dir-ltr",
          base: "vf-slider-base",
          base_sm: "vf-slider-base-sm",
          base_md: "vf-slider-base-md",
          base_lg: "vf-slider-base-lg",
          connects: "vf-slider-connects",
          connects_sm: "vf-slider-connects-sm",
          connects_md: "vf-slider-connects-md",
          connects_lg: "vf-slider-connects-lg",
          connect: "vf-slider-connect",
          connect_sm: "vf-slider-connect-sm",
          connect_md: "vf-slider-connect-md",
          connect_lg: "vf-slider-connect-lg",
          origin: "vf-slider-origin",
          handle: "vf-slider-handle",
          handle_sm: "vf-slider-handle-sm",
          handle_md: "vf-slider-handle-md",
          handle_lg: "vf-slider-handle-lg",
          handleUpper: "vf-handle-upper",
          handleLower: "vf-handle-lower",
          touchArea: "vf-slider-touch-area",
          tooltip: "vf-slider-tooltip",
          tooltip_sm: "vf-slider-tooltip-sm",
          tooltip_md: "vf-slider-tooltip-md",
          tooltip_lg: "vf-slider-tooltip-lg",
          tooltipTop: "vf-slider-tooltip-top",
          tooltipTop_sm: "vf-slider-tooltip-top-sm",
          tooltipTop_md: "vf-slider-tooltip-top-md",
          tooltipTop_lg: "vf-slider-tooltip-top-lg",
          tooltipBottom: "vf-slider-tooltip-bottom",
          tooltipBottom_sm: "vf-slider-tooltip-bottom-sm",
          tooltipBottom_md: "vf-slider-tooltip-bottom-md",
          tooltipBottom_lg: "vf-slider-tooltip-bottom-lg",
          tooltipLeft: "vf-slider-tooltip-left",
          tooltipLeft_sm: "vf-slider-tooltip-left-sm",
          tooltipLeft_md: "vf-slider-tooltip-left-md",
          tooltipLeft_lg: "vf-slider-tooltip-left-lg",
          tooltipRight: "vf-slider-tooltip-right",
          tooltipRight_sm: "vf-slider-tooltip-right-sm",
          tooltipRight_md: "vf-slider-tooltip-right-md",
          tooltipRight_lg: "vf-slider-tooltip-right-lg",
          tooltipHidden: "vf-slider-tooltip-hidden",
          active: "vf-slider-active",
          draggable: "vf-slider-draggable",
          tap: "vf-slider-state-tap",
          drag: "vf-slider-state-drag",
          $slider: (classes2, { Size }) => [
            classes2.slider.slider,
            classes2.slider[`slider_${Size}`]
          ],
          $horizontal: (classes2, { Size }) => [
            classes2.slider.horizontal,
            classes2.slider[`horizontal_${Size}`]
          ],
          $vertical: (classes2, { Size }) => [
            classes2.slider.vertical,
            classes2.slider[`vertical_${Size}`]
          ],
          $base: (classes2, { Size }) => [
            classes2.slider.base,
            classes2.slider[`base_${Size}`]
          ],
          $connects: (classes2, { Size }) => [
            classes2.slider.connects,
            classes2.slider[`connects_${Size}`]
          ],
          $connect: (classes2, { Size }) => [
            classes2.slider.connect,
            classes2.slider[`connect_${Size}`]
          ],
          $handle: (classes2, { Size }) => [
            classes2.slider.handle,
            classes2.slider[`handle_${Size}`]
          ],
          $tooltip: (classes2, { Size }) => [
            classes2.slider.tooltip,
            classes2.slider[`tooltip_${Size}`]
          ],
          $tooltipTop: (classes2, { Size }) => [
            classes2.slider.tooltipTop,
            classes2.slider[`tooltipTop_${Size}`]
          ],
          $tooltipBottom: (classes2, { Size }) => [
            classes2.slider.tooltipBottom,
            classes2.slider[`tooltipBottom_${Size}`]
          ],
          $tooltipLeft: (classes2, { Size }) => [
            classes2.slider.tooltipLeft,
            classes2.slider[`tooltipLeft_${Size}`]
          ],
          $tooltipRight: (classes2, { Size }) => [
            classes2.slider.tooltipRight,
            classes2.slider[`tooltipRight_${Size}`]
          ]
        },
        $wrapper: (classes2, { Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$l = '.vf-slider-wrapper {\n  margin-top: calc((var(--vf-min-height-input) - var(--vf-slider-height)) / 2);\n}\n\n.vf-slider-wrapper.vf-slider-wrapper-sm {\n  margin-top: calc((var(--vf-min-height-input-sm) - var(--vf-slider-height)) / 2);\n  margin-bottom: 0.25rem;\n}\n\n.vf-slider-wrapper.vf-slider-wrapper-lg {\n  margin-top: calc((var(--vf-min-height-input-lg) - var(--vf-slider-height)) / 2);\n}\n\n/* @vueform/slider styles */\n\n.vf-slider-target,\n.vf-slider-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  touch-action: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n.vf-slider-target {\n  position: relative;\n  margin: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2) 0;\n}\n\n.vf-slider-target[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.vf-slider-target.vf-slider-target-sm {\n  margin: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2) 0;\n}\n\n.vf-slider-target.vf-slider-target-lg {\n  margin: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2) 0;\n}\n\n.vf-slider-target.vf-slider-horizontal {\n  height: var(--vf-slider-height);\n}\n\n.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-sm {\n  height: var(--vf-slider-height-sm);\n}\n\n.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-lg {\n  height: var(--vf-slider-height-lg);\n}\n\n.vf-slider-target.vf-slider-vertical {\n  width: var(--vf-slider-height);\n  height: var(--vf-slider-height-vertical);\n}\n\n.vf-slider-target.vf-slider-vertical.vf-slider-vertical-sm {\n  width: var(--vf-slider-height-sm);\n  height: var(--vf-slider-height-vertical-sm);\n}\n\n.vf-slider-target.vf-slider-vertical.vf-slider-vertical-lg {\n  width: var(--vf-slider-height-lg);\n  height: var(--vf-slider-height-vertical-lg);\n}\n\n.vf-slider-target.vf-slider-state-drag * {\n  cursor: inherit !important;\n}\n\n.vf-slider-base,\n.vf-slider-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.vf-slider-base {\n  box-shadow: var(--vf-shadow-input);\n  background-color: var(--vf-bg-passive);\n  border-radius: var(--vf-radius-slider);\n  z-index: 1;\n}\n\n.vf-slider-base.vf-slider-base-sm {\n  border-radius: var(--vf-radius-slider-sm);\n}\n\n.vf-slider-base.vf-slider-base-lg {\n  border-radius: var(--vf-radius-slider-lg);\n}\n\n.vf-slider-connects {\n  overflow: hidden;\n  z-index: 0;\n  border-radius: var(--vf-radius-slider);\n}\n\n.vf-slider-connects.vf-slider-connects-sm {\n  border-radius: var(--vf-radius-slider-sm);\n}\n\n.vf-slider-connects.vf-slider-connects-lg {\n  border-radius: var(--vf-radius-slider-lg);\n}\n\n.vf-slider-connect,\n.vf-slider-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n\n.vf-slider-connect {\n  background: var(--vf-primary);\n  border-radius: var(--vf-radius-slider);\n  cursor: pointer;\n}\n\n.vf-slider-connect.vf-slider-connect-sm {\n  border-radius: var(--vf-radius-slider-sm);\n}\n\n.vf-slider-connect.vf-slider-connect-lg {\n  border-radius: var(--vf-radius-slider-lg);\n}\n\n[disabled] .vf-slider-connect {\n  background: var(--vf-slider-connect-bg-disabled);\n}\n\n.vf-slider-txt-dir-rtl.vf-slider-horizontal .vf-slider-origin {\n  left: 0;\n  right: auto;\n}\n\n.vf-slider-vertical .vf-slider-origin {\n  top: -100%;\n  width: 0;\n}\n\n.vf-slider-horizontal .vf-slider-origin {\n  height: 0;\n}\n\n.vf-slider-state-tap .vf-slider-connect,\n.vf-slider-state-tap .vf-slider-origin {\n  transition: transform 0.3s;\n}\n\n.vf-slider-handle {\n  backface-visibility: hidden;\n  position: absolute;\n  width: var(--vf-slider-handle-size);\n  height: var(--vf-slider-handle-size);\n  background-color: var(--vf-bg-slider-handle);\n  border-radius: 999px;\n  box-shadow: var(--vf-shadow-handles);\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  cursor: grab;\n  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;\n}\n\n.vf-slider-handle:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-slider-handle:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n\n.vf-slider-handle.vf-slider-handle-sm {\n  height: var(--vf-slider-handle-size-sm);\n  width: var(--vf-slider-handle-size-sm);\n}\n\n.vf-slider-handle.vf-slider-handle-lg {\n  height: var(--vf-slider-handle-size-lg);\n  width: var(--vf-slider-handle-size-lg);\n}\n\n.vf-slider-horizontal .vf-slider-handle {\n  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);\n  right: calc(var(--vf-slider-handle-size) / 2 * -1);\n}\n\n.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-sm {\n  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);\n  right: calc(var(--vf-slider-handle-size-sm) / 2 * -1);\n}\n\n.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-lg {\n  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);\n  right: calc(var(--vf-slider-handle-size-lg) / 2 * -1);\n}\n\n.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle {\n  left: calc(var(--vf-slider-handle-width) / 2 * -1);\n  right: auto;\n}\n\n.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-sm {\n  left: calc(var(--vf-slider-handle-width-sm) / 2 * -1);\n}\n\n.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-lg {\n  left: calc(var(--vf-slider-handle-width-lg) / 2 * -1);\n}\n\n.vf-slider-vertical {\n  width: var(--vf-slider-height);\n  height: var(--vf-slider-vertical-height);\n}\n\n.vf-slider-vertical .vf-slider-handle {\n  bottom: calc(var(--vf-slider-handle-size) / 2 * -1);\n  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);\n}\n\n.vf-slider-vertical .vf-slider-handle.vf-slider-handle-sm {\n  bottom: calc(var(--vf-slider-handle-size-sm) / 2 * -1);\n  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);\n}\n\n.vf-slider-vertical .vf-slider-handle.vf-slider-handle-lg {\n  bottom: calc(var(--vf-slider-handle-size-lg) / 2 * -1);\n  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);\n}\n\n.vf-slider-touch-area {\n  height: 100%;\n  width: 100%;\n}\n\n.vf-slider-tooltip {\n  position: absolute;\n  display: block;\n  font-weight: 600;\n  white-space: nowrap;\n  min-width: 1.25rem;\n  text-align: center;\n  border: 1px solid var(--vf-border-color-slider-tooltip);\n  background: var(--vf-primary);\n  color: var(--vf-color-on-primary);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  padding: var(--vf-py-slider-tooltip) var(--vf-px-slider-tooltip);\n  border-radius: var(--vf-radius-small);\n}\n\n.vf-slider-tooltip.vf-slider-tooltip-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  padding: var(--vf-py-slider-tooltip-sm) var(--vf-px-slider-tooltip-sm);\n  border-radius: var(--vf-radius-small-sm);\n}\n\n.vf-slider-tooltip.vf-slider-tooltip-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  padding: var(--vf-py-slider-tooltip-lg) var(--vf-px-slider-tooltip-lg);\n  border-radius: var(--vf-radius-small-lg);\n}\n\n.vf-slider-tooltip-focus .vf-slider-tooltip,\n.vf-slider-tooltip-drag .vf-slider-tooltip {\n  display: none !important;\n}\n\n.vf-slider-tooltip-focus.vf-slider-focused .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),\n.vf-slider-tooltip-drag.vf-slider-state-drag .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),\n.vf-slider-tooltip-drag .vf-slider-active .vf-slider-tooltip {\n  display: block !important;\n}\n\n[disabled].vf-slider-target,\n[disabled].vf-slider-handle,\n[disabled] .vf-slider-handle {\n  cursor: not-allowed;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top {\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top:before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  width: 0;\n  height: 0;\n  transform: translate(-50%);\n  bottom: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-top-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {\n  bottom: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm:before {\n  bottom: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-top-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {\n  bottom: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg:before {\n  bottom: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-top-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top {\n  bottom: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {\n  bottom: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {\n  bottom: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom {\n  transform: translate(-50%, 0);\n  left: 50%;\n  top: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom:before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  width: 0;\n  height: 0;\n  transform: translate(-50%);\n  top: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-bottom-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {\n  top: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm:before {\n  top: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-bottom-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {\n  top: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg:before {\n  top: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-bottom-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom {\n  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {\n  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {\n  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left {\n  transform: translate(0, -50%);\n  top: 50%;\n  right: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  width: 0;\n  height: 0;\n  transform: translateY(-50%);\n  right: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-left-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {\n  right: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm:before {\n  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-left-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {\n  right: calc(var(--vf-slider-handle-siz-lg) + var(--vf-slider-tooltip-distanc-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg:before {\n  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-left-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left {\n  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {\n  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {\n  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right {\n  transform: translate(0, -50%);\n  top: 50%;\n  left: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  width: 0;\n  height: 0;\n  transform: translateY(-50%);\n  left: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-right-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {\n  left: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm:before {\n  left: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-right-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {\n  left: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg:before {\n  left: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-right-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right {\n  left: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {\n  left: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {\n  left: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip {\n  transform: translate(50%, 0);\n  left: auto;\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip {\n  transform: translate(0, 50%);\n  top: auto;\n}\n\n.vf-slider-active {\n  cursor: grabbing;\n}\n\n.vf-slider-draggable {\n  cursor: ew-resize;\n}\n\n.vf-slider-vertical .vf-slider-draggable {\n  cursor: ns-resize;\n}';
styleInject(css_248z$l);
script$H.__file = "themes/vueform/templates/elements/SliderElement.vue";
var script$G = {
  name: "StaticElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        content: "",
        tag: ""
      }
    };
  }
};
var _hoisted_1$f = ["innerHTML"];
var _hoisted_2$a = ["href", "target", "innerHTML"];
var _hoisted_3$8 = ["href", "target"];
var _hoisted_4$3 = ["href", "target"];
var _hoisted_5$2 = ["src", "alt", "title", "width", "height"];
var _hoisted_6$1 = ["src", "alt", "title", "width", "height"];
var _hoisted_7 = ["innerHTML"];
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.wrap ? (openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    {
      key: 0,
      ref: "container"
    },
    createSlots({
      element: withCtx(() => [
        createCommentVNode(" If content is HTML "),
        _ctx.isHtml && (_ctx.resolvedContent || ["img", "hr"].indexOf(_ctx.tag) !== -1) ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            !_ctx.tag && _ctx.allowHtml ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              class: _ctx.classes.content,
              innerHTML: _ctx.resolvedContent
            }, _ctx.attrs), null, 16, _hoisted_1$f)) : createCommentVNode("v-if", true),
            !_ctx.tag && !_ctx.allowHtml ? (openBlock(), createElementBlock(
              "div",
              mergeProps({
                key: 1,
                class: _ctx.classes.content
              }, _ctx.attrs),
              toDisplayString(_ctx.content),
              17
              /* TEXT, FULL_PROPS */
            )) : createCommentVNode("v-if", true),
            _ctx.tag === "a" ? (openBlock(), createElementBlock(
              "div",
              {
                key: 2,
                class: normalizeClass(_ctx.classes.tag)
              },
              [
                _ctx.allowHtml ? (openBlock(), createElementBlock("a", mergeProps({
                  key: 0,
                  href: _ctx.href,
                  target: _ctx.target
                }, _ctx.attrs, { innerHTML: _ctx.resolvedContent }), null, 16, _hoisted_2$a)) : (openBlock(), createElementBlock("a", mergeProps({
                  key: 1,
                  href: _ctx.href,
                  target: _ctx.target
                }, _ctx.attrs), toDisplayString(_ctx.resolvedContent), 17, _hoisted_3$8))
              ],
              2
              /* CLASS */
            )) : _ctx.tag === "hr" ? (openBlock(), createElementBlock(
              "div",
              {
                key: 3,
                class: normalizeClass(_ctx.classes.tag)
              },
              [
                createBaseVNode(
                  "hr",
                  normalizeProps(guardReactiveProps(_ctx.attrs)),
                  null,
                  16
                  /* FULL_PROPS */
                )
              ],
              2
              /* CLASS */
            )) : _ctx.tag === "img" ? (openBlock(), createElementBlock(
              "div",
              {
                key: 4,
                class: normalizeClass(_ctx.classes.tag)
              },
              [
                _ctx.href ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: _ctx.href,
                  target: _ctx.target
                }, [
                  createBaseVNode("img", mergeProps({
                    src: _ctx.src,
                    alt: _ctx.alt,
                    title: _ctx.title,
                    width: _ctx.width,
                    height: _ctx.height
                  }, _ctx.attrs), null, 16, _hoisted_5$2)
                ], 8, _hoisted_4$3)) : (openBlock(), createElementBlock("img", mergeProps({
                  key: 1,
                  src: _ctx.src,
                  alt: _ctx.alt,
                  title: _ctx.title,
                  width: _ctx.width,
                  height: _ctx.height
                }, _ctx.attrs), null, 16, _hoisted_6$1))
              ],
              2
              /* CLASS */
            )) : (openBlock(), createElementBlock(
              "div",
              {
                key: 5,
                class: normalizeClass(_ctx.classes.tag)
              },
              [
                _ctx.allowHtml ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
                  key: 0,
                  innerHTML: _ctx.resolvedContent
                }, _ctx.attrs), null, 16, ["innerHTML"])) : (openBlock(), createBlock(
                  resolveDynamicComponent(_ctx.tag),
                  normalizeProps(mergeProps({ key: 1 }, _ctx.attrs)),
                  {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(_ctx.resolvedContent),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  },
                  16
                  /* FULL_PROPS */
                ))
              ],
              2
              /* CLASS */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : _ctx.resolvedContent ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" If content is component "),
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.componentContent), { el$: _ctx.el$ }, null, 8, ["el$"]))
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          Fragment,
          { key: 2 },
          [
            createCommentVNode(" If content is a slot "),
            renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.slotContent), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        ))
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  )) : _ctx.content && _ctx.isHtml ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(_ctx.classes.content),
    innerHTML: _ctx.resolvedContent
  }, null, 10, _hoisted_7)) : _ctx.content ? (openBlock(), createBlock(
    resolveDynamicComponent(_ctx.componentContent),
    {
      key: 2,
      ref: "container"
    },
    null,
    512
    /* NEED_PATCH */
  )) : (openBlock(), createElementBlock(
    "div",
    {
      key: 3,
      class: normalizeClass(_ctx.classes.container),
      ref: "container"
    },
    [
      renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.slotContent), { el$: _ctx.el$ }, null, 8, ["el$"]))
      ])
    ],
    2
    /* CLASS */
  ));
}
script$G.render = render$i;
script$G.__file = "themes/blank/templates/elements/StaticElement.vue";
var script$F = {
  name: "StaticElement",
  render: script$G.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-contains-link",
        content: "vf-static",
        content_sm: "vf-static-sm",
        content_md: "",
        content_lg: "vf-static-lg",
        content_top_1: "vf-static-tag-top-1",
        content_top_2: "vf-static-tag-top-2",
        content_top_3: "vf-static-tag-top-3",
        content_bottom_1: "vf-static-tag-bottom-1",
        content_bottom_2: "vf-static-tag-bottom-2",
        content_bottom_3: "vf-static-tag-bottom-3",
        tag: "vf-static-tag",
        tag_sm: "vf-static-tag-sm",
        tag_md: "",
        tag_lg: "vf-static-tag-lg",
        tag_top_1: "vf-static-tag-top-1",
        tag_top_2: "vf-static-tag-top-2",
        tag_top_3: "vf-static-tag-top-3",
        tag_bottom_1: "vf-static-tag-bottom-1",
        tag_bottom_2: "vf-static-tag-bottom-2",
        tag_bottom_3: "vf-static-tag-bottom-3",
        tag_left: "vf-static-tag-left",
        tag_center: "vf-static-tag-center",
        tag_right: "vf-static-tag-right",
        tag_p: "vf-static-tag-p",
        tag_h1: "vf-static-tag-h1",
        tag_h2: "vf-static-tag-h2",
        tag_h3: "vf-static-tag-h3",
        tag_h4: "vf-static-tag-h4",
        tag_blockquote: "vf-static-tag-blockquote",
        tag_a: "vf-static-tag-a",
        tag_hr: "vf-static-tag-hr",
        tag_img: "vf-static-tag-img",
        $content: (classes2, { Size, top: top2, bottom: bottom2 }) => [
          classes2.content,
          classes2[`content_${Size}`],
          top2 >= 1 ? classes2[`content_top_${top2}`] : null,
          bottom2 >= 1 ? classes2[`content_bottom_${bottom2}`] : null
        ],
        $tag: (classes2, { Size, tag, align, top: top2, bottom: bottom2 }) => [
          classes2.tag,
          classes2[`tag_${Size}`],
          classes2[`tag_${tag}`],
          align === "left" ? classes2.tag_left : null,
          align === "center" ? classes2.tag_center : null,
          align === "right" ? classes2.tag_right : null,
          top2 >= 1 ? classes2[`tag_top_${top2}`] : null,
          bottom2 >= 1 ? classes2[`tag_bottom_${bottom2}`] : null
        ]
      }
    };
  }
};
var css_248z$k = "/* Styles contained in scss/_static.scss */";
styleInject(css_248z$k);
script$F.__file = "themes/vueform/templates/elements/StaticElement.vue";
var script$E = {
  name: "TagsElement",
  components: {
    Multiselect: script$Y
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        select: {
          container: "",
          containerDisabled: "",
          containerOpen: "",
          containerOpenTop: "",
          containerActive: "",
          search: "",
          tags: "",
          tag: "",
          tagDisabled: "",
          tagRemove: "",
          tagRemoveIcon: "",
          tagsSearchWrapper: "",
          tagsSearch: "",
          tagsSearchCopy: "",
          placeholder: "",
          caret: "",
          caretOpen: "",
          clear: "",
          clearIcon: "",
          spinner: "",
          dropdown: "",
          dropdownTop: "",
          dropdownHidden: "",
          options: "",
          optionsTop: "",
          group: "",
          groupLabel: "",
          groupLabelPointable: "",
          groupLabelPointed: "",
          groupLabelSelected: "",
          groupLabelDisabled: "",
          groupLabelSelectedPointed: "",
          groupLabelSelectedDisabled: "",
          groupOptions: "",
          option: "",
          optionPointed: "",
          optionSelected: "",
          optionDisabled: "",
          optionSelectedPointed: "",
          optionSelectedDisabled: "",
          noOptions: "",
          noResults: "",
          fakeInput: "",
          spacer: ""
        }
      }
    };
  }
};
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_Multiselect = resolveComponent("Multiselect");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
          key: 0,
          visible: !_ctx.empty
        }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
        createCommentVNode(" @vueform/multiselect copmonent "),
        createVNode(_component_Multiselect, mergeProps(_ctx.fieldOptions, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
          classes: _ctx.classes.select,
          id: _ctx.fieldId,
          name: _ctx.name,
          options: _ctx.resolvedOptions,
          disabled: _ctx.isDisabled,
          placeholder: _ctx.Placeholder,
          attrs: _ctx.attrs,
          aria: _ctx.aria,
          locale: _ctx.form$.locale$,
          onSelect: _ctx.handleSelect,
          onDeselect: _ctx.handleDeselect,
          onSearchChange: _ctx.handleSearchChange,
          onTag: _ctx.handleTag,
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          onClear: _ctx.handleClear,
          onPaste: _ctx.handlePaste,
          ref: "input"
        }), createSlots({
          _: 2
          /* DYNAMIC */
        }, [
          renderList({
            option: "option",
            noresults: "no-results",
            nooptions: "no-options",
            afterlist: "after-list",
            beforelist: "before-list",
            placeholder: "placeholder",
            grouplabel: "group-label",
            caret: "caret",
            clear: "clear",
            spinner: "spinner",
            default: "default"
          }, (slotName, slotKey) => {
            return {
              name: slotKey,
              fn: withCtx((props) => [
                renderSlot(_ctx.$slots, slotName, mergeProps(props, { el$: _ctx.el$ }), () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots[slotName]), mergeProps(props, { el$: _ctx.el$ }), null, 16, ["el$"]))
                ])
              ])
            };
          }),
          _ctx.fieldOptions.mode == "tags" ? {
            name: "tag",
            fn: withCtx(({ option, handleTagRemove, disabled }) => [
              renderSlot(_ctx.$slots, "tag", {
                option,
                handleTagRemove,
                disabled,
                el$: _ctx.el$
              }, () => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.tag), {
                  option,
                  handleTagRemove,
                  disabled,
                  el$: _ctx.el$
                }, null, 8, ["option", "handleTagRemove", "disabled", "el$"]))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["modelValue", "classes", "id", "name", "options", "disabled", "placeholder", "attrs", "aria", "locale", "onSelect", "onDeselect", "onSearchChange", "onTag", "onOpen", "onClose", "onClear", "onPaste"])
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$E.render = render$h;
script$E.__file = "themes/blank/templates/elements/TagsElement.vue";
var script$D = {
  name: "TagsElement",
  render: script$E.render,
  components: {
    Multiselect: script$Y
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        select: {
          tags: "vf-multiselect-tags",
          tags_sm: "vf-multiselect-tags-sm",
          tags_md: "",
          tags_lg: "vf-multiselect-tags-lg",
          tag: "vf-multiselect-tag",
          tag_sm: "vf-multiselect-tag-sm",
          tag_md: "",
          tag_lg: "vf-multiselect-tag-lg",
          tagDisabled: "vf-multiselect-tag-disabled",
          tagDisabled_sm: "",
          tagDisabled_md: "",
          tagDisabled_lg: "",
          tagWrapper: "vf-multiselect-tag-wrapper",
          tagWrapperBreak: "vf-multiselect-tag-wrapper-break",
          tagRemove: "vf-multiselect-tag-remove",
          tagRemove_sm: "vf-multiselect-tag-remove-sm",
          tagRemove_md: "",
          tagRemove_lg: "vf-multiselect-tag-remove-lg",
          tagRemoveIcon: "vf-multiselect-tag-remove-icon",
          tagsSearchWrapper: "vf-multiselect-tags-search-wrapper",
          tagsSearchWrapper_sm: "",
          tagsSearchWrapper_md: "",
          tagsSearchWrapper_lg: "",
          tagsSearch: "vf-multiselect-tags-search",
          tagsSearch_sm: "vf-multiselect-tags-search-sm",
          tagsSearch_md: "",
          tagsSearch_lg: "vf-multiselect-tags-search-lg",
          tagsSearchCopy: "vf-multiselect-tags-search-copy",
          container: "vf-multiselect",
          container_enabled: "",
          container_disabled: "vf-multiselect-disabled",
          container_success: "vf-multiselect-success",
          container_danger: "vf-multiselect-danger",
          container_sm: "vf-multiselect-sm",
          container_md: "",
          container_lg: "vf-multiselect-lg",
          containerDisabled: "",
          containerOpen: "vf-multiselect-open",
          containerOpenTop: "vf-multiselect-open-top",
          containerActive: "vf-multiselect-active",
          containerActive_enabled: "",
          wrapper: "vf-multiselect-wrapper",
          wrapper_sm: "vf-multiselect-wrapper-sm",
          wrapper_md: "",
          wrapper_lg: "vf-multiselect-wrapper-lg",
          search: "vf-multiselect-search",
          search_sm: "vf-multiselect-search-sm",
          search_md: "",
          search_lg: "vf-multiselect-search-lg",
          placeholder: "vf-multiselect-placeholder",
          placeholder_sm: "vf-multiselect-placeholder-sm",
          placeholder_md: "",
          placeholder_lg: "vf-multiselect-placeholder-lg",
          caret: "vf-multiselect-caret",
          caret_sm: "vf-multiselect-caret-sm",
          caret_md: "",
          caret_lg: "vf-multiselect-caret-lg",
          caretOpen: "vf-multiselect-caret-open",
          clear: "vf-multiselect-clear",
          clear_sm: "vf-multiselect-clear-sm",
          clear_md: "",
          clear_lg: "vf-multiselect-clear-lg",
          clearIcon: "vf-multiselect-clear-icon",
          spinner: "vf-multiselect-spinner",
          spinner_sm: "vf-multiselect-spinner-sm",
          spinner_md: "",
          spinner_lg: "vf-multiselect-spinner-lg",
          infinite: "vf-multiselect-infinite",
          infinite_sm: "vf-multiselect-infinite-sm",
          infinite_md: "",
          infinite_lg: "vf-multiselect-infinite-lg",
          infiniteSpinner: "vf-multiselect-infinite-spinner",
          dropdown: "vf-multiselect-dropdown",
          dropdown_sm: "vf-multiselect-dropdown-sm",
          dropdown_md: "",
          dropdown_lg: "vf-multiselect-dropdown-lg",
          dropdownTop: "vf-multiselect-dropdown-top",
          dropdownTop_sm: "vf-multiselect-dropdown-top-sm",
          dropdownTop_md: "",
          dropdownTop_lg: "vf-multiselect-dropdown-top-lg",
          dropdownHidden: "vf-multiselect-dropdown-hidden",
          options: "vf-multiselect-options",
          optionsTop: "vf-multiselect-options-top",
          group: "vf-multiselect-group",
          groupLabel: "vf-multiselect-group-label",
          groupLabel_sm: "vf-multiselect-group-label-sm",
          groupLabel_md: "",
          groupLabel_lg: "vf-multiselect-group-label-lg",
          groupLabelPointable: "vf-multiselect-group-label-pointable",
          groupLabelPointed: "vf-multiselect-group-label-pointed",
          groupLabelSelected: "vf-multiselect-group-label-selected",
          groupLabelDisabled: "vf-multiselect-group-label-disabled",
          groupLabelSelectedPointed: "vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",
          groupLabelSelectedDisabled: "vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",
          groupOptions: "vf-multiselect-group-options",
          option: "vf-multiselect-option",
          option_sm: "vf-multiselect-option-sm",
          option_md: "",
          option_lg: "vf-multiselect-option-lg",
          optionPointed: "vf-multiselect-option-pointed",
          optionSelected: "vf-multiselect-option-selected",
          optionDisabled: "vf-multiselect-option-disabled",
          optionSelectedPointed: "vf-multiselect-option-selected vf-multiselect-option-pointed",
          optionSelectedDisabled: "vf-multiselect-option-selected vf-multiselect-option-disabled",
          noOptions: "vf-multiselect-no-options",
          noOptions_sm: "vf-multiselect-no-options-sm",
          noOptions_md: "",
          noOptions_lg: "vf-multiselect-no-options-lg",
          noResults: "vf-multiselect-no-results",
          noResults_sm: "vf-multiselect-no-results-sm",
          noResults_md: "",
          noResults_lg: "vf-multiselect-no-results-lg",
          fakeInput: "vf-multiselect-fake-input",
          assist: "vf-assistive-text",
          spacer: "vf-multiselect-spacer",
          spacer_sm: "vf-multiselect-spacer-sm",
          spacer_md: "",
          spacer_lg: "vf-multiselect-spacer-lg",
          $container: (classes2, { Size, isDanger, isSuccess, isDisabled }) => [
            classes2.select.container,
            classes2.select[`container_${Size}`],
            isDisabled ? classes2.select.container_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes2.select.container_enabled : null,
            !isDisabled && isDanger ? classes2.select.container_danger : null,
            !isDisabled && isSuccess ? classes2.select.container_success : null
          ],
          $containerActive: (classes2, { Size, isDanger, isSuccess, isDisabled }) => [
            classes2.select.containerActive,
            classes2.select[`container_${Size}`],
            !isDisabled && !isSuccess && !isDanger ? classes2.select.containerActive_enabled : null
          ],
          $wrapper: (classes2, { Size }) => [
            classes2.select.wrapper,
            classes2.select[`wrapper_${Size}`]
          ],
          $search: (classes2, { Size }) => [
            classes2.select.search,
            classes2.select[`search_${Size}`]
          ],
          $placeholder: (classes2, { Size }) => [
            classes2.select.placeholder,
            classes2.select[`placeholder_${Size}`]
          ],
          $caret: (classes2, { Size }) => [
            classes2.select.caret,
            classes2.select[`caret_${Size}`]
          ],
          $clear: (classes2, { Size }) => [
            classes2.select.clear,
            classes2.select[`clear_${Size}`]
          ],
          $spinner: (classes2, { Size }) => [
            classes2.select.spinner,
            classes2.select[`spinner_${Size}`]
          ],
          $infinite: (classes2, { Size }) => [
            classes2.select.infinite,
            classes2.select[`infinite_${Size}`]
          ],
          $dropdown: (classes2, { Size }) => [
            classes2.select.dropdown,
            classes2.select[`dropdown_${Size}`]
          ],
          $dropdownTop: (classes2, { Size }) => [
            classes2.select.dropdownTop,
            classes2.select[`dropdownTop_${Size}`]
          ],
          $groupLabel: (classes2, { Size }) => [
            classes2.select.groupLabel,
            classes2.select[`groupLabel_${Size}`]
          ],
          $option: (classes2, { Size }) => [
            classes2.select.option,
            classes2.select[`option_${Size}`]
          ],
          $spacer: (classes2, { Size }) => [
            classes2.select.spacer,
            classes2.select[`spacer_${Size}`]
          ],
          $noOptions: (classes2, { Size }) => [
            classes2.select.noOptions,
            classes2.select[`noOptions_${Size}`]
          ],
          $noResults: (classes2, { Size }) => [
            classes2.select.noResults,
            classes2.select[`noResults_${Size}`]
          ],
          $tags: (classes2, { Size }) => [
            classes2.select.tags,
            classes2.select[`tags_${Size}`]
          ],
          $tag: (classes2, { Size }) => [
            classes2.select.tag,
            classes2.select[`tag_${Size}`]
          ],
          $tagDisabled: (classes2, { Size }) => [
            classes2.select.tagDisabled,
            classes2.select[`tagDisabled_${Size}`]
          ],
          $tagRemove: (classes2, { Size }) => [
            classes2.select.tagRemove,
            classes2.select[`tagRemove_${Size}`]
          ],
          $tagsSearchWrapper: (classes2, { Size }) => [
            classes2.select.tagsSearchWrapper,
            classes2.select[`tagsSearchWrapper_${Size}`]
          ],
          $tagsSearch: (classes2, { Size }) => [
            classes2.select.tagsSearch,
            classes2.select[`tagsSearch_${Size}`]
          ]
        },
        $input: (classes2, { isDisabled, Size, isDanger, isSuccess }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.input_enabled : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ],
        $inputWrapper: (classes2, { Size }) => [
          classes2.inputWrapper,
          classes2[`inputWrapper_${Size}`]
        ]
      }
    };
  }
};
var css_248z$j = `/* Some styles are contained in SelectElement.vue */

.vf-multiselect-tags {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-wrap: wrap;
  margin: var(--vf-space-tags) 0 0;
  padding-left: var(--vf-py-input);
  align-items: center;
  min-width: 0;
}

.vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-left: var(--vf-py-input-sm);
}

.vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-left: var(--vf-py-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-tags,
.vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: var(--vf-px-input);
  margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-sm,
.vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: var(--vf-px-input-sm);
  margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-lg,
.vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: var(--vf-px-input-lg);
  margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;
}

.vf-multiselect-tag {
  background: var(--vf-bg-tag);
  color: var(--vf-color-tag);
  border-style: solid;
  border-width: var(--vf-border-width-tag);
  border-color: var(--vf-border-color-tag);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  font-weight: 600;
  padding: var(--vf-py-tag) 0 var(--vf-py-tag) var(--vf-px-tag);
  border-radius: var(--vf-radius-tag);
  margin-right: var(--vf-space-tags);
  margin-bottom: var(--vf-space-tags);
  display: flex;
  align-items: center;
  white-space: nowrap;
  min-width: 0;
}

.vf-multiselect-tag.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag);
  opacity: 0.5;
}

.vf-multiselect-tag.vf-multiselect-tag-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  border-radius: var(--vf-radius-tag-sm);
  padding: var(--vf-py-tag-sm) 0 var(--vf-py-tag-sm) var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-sm.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  border-radius: var(--vf-radius-tag-lg);
  padding: var(--vf-py-tag-lg) 0 var(--vf-py-tag-lg) var(--vf-px-tag-lg);
}

.vf-multiselect-tag.vf-multiselect-tag-lg.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-lg);
}

.vf-multiselect-tag-wrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-multiselect-tag-wrapper-break {
  white-space: normal;
  word-break: break-all;
}

.vf-multiselect-tag-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0 0.125rem;
  border-radius: var(--vf-radius-tag);
}

.vf-multiselect-tag-remove:hover {
  background: rgba(0, 0, 0, 0.1);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-sm {
  border-radius: var(--vf-radius-tag-sm);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-lg {
  border-radius: var(--vf-radius-tag-lg);
}

.vf-multiselect-tag-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: currentColor;
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
}

.vf-multiselect-tags-search-wrapper {
  display: inline-block;
  position: relative;
  margin: 0 var(--vf-space-tags) var(--vf-space-tags);
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  max-width: 100%;
}

.vf-multiselect-tags-search-copy {
  visibility: hidden;
  white-space: pre-wrap;
  display: inline-block;
  height: 1px;
  width: 100%;
}

.vf-multiselect-tags-search {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: transparent;
  padding-right: 0.5rem;
}

.vf-multiselect-tags-search::-webkit-search-decoration, .vf-multiselect-tags-search::-webkit-search-cancel-button, .vf-multiselect-tags-search::-webkit-search-results-button, .vf-multiselect-tags-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

[dir=rtl] .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-py-input);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-right: var(--vf-py-input-sm);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-right: var(--vf-py-input-lg);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-sm,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-lg,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-tag {
  padding: var(--vf-py-tag) var(--vf-px-tag) var(--vf-py-tag) 0;
  margin-right: 0;
  margin-left: var(--vf-space-tags);
}

[dir=rtl] .vf-multiselect-tag.is-disabled {
  padding-left: ar(--vf-px-tag);
}`;
styleInject(css_248z$j);
script$D.__file = "themes/vueform/templates/elements/TagsElement.vue";
var script$C = {
  name: "TextareaElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        input: ""
      }
    };
  }
};
var _hoisted_1$e = ["value", "name", "id", "placeholder", "disabled", "readonly", "rows", "data-autogrow"];
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_ElementLoader = resolveComponent("ElementLoader");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.inputContainer)
          },
          [
            _ctx.hasAddonBefore ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-before"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasAddonAfter ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-after"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
            withDirectives(createVNode(
              _component_ElementLoader,
              null,
              null,
              512
              /* NEED_PATCH */
            ), [
              [vShow, _ctx.pending]
            ]),
            createBaseVNode("textarea", mergeProps({
              value: _ctx.model,
              name: _ctx.name,
              id: _ctx.fieldId,
              class: _ctx.classes.input,
              placeholder: _ctx.Placeholder,
              disabled: _ctx.isDisabled,
              readonly: _ctx.readonly,
              rows: _ctx.rows
            }, {
              ..._ctx.attrs,
              ..._ctx.aria
            }, {
              "data-autogrow": _ctx.autogrow || void 0,
              onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
              onKeyup: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args)),
              onKeypress: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
              onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
              onBlur: _cache[4] || (_cache[4] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              ref: "input"
            }), null, 16, _hoisted_1$e)
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$C.render = render$g;
script$C.__file = "themes/blank/templates/elements/TextareaElement.vue";
var script$B = {
  name: "TextareaElement",
  render: script$C.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group vf-input-group-textarea",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        input: "vf-input-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$i = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$i);
script$B.__file = "themes/vueform/templates/elements/TextareaElement.vue";
var script$A = {
  name: "TextElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        input: ""
      }
    };
  }
};
var _hoisted_1$d = ["value", "type", "name", "id", "placeholder", "autocomplete", "disabled", "readonly"];
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_ElementLoader = resolveComponent("ElementLoader");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.inputContainer)
          },
          [
            _ctx.hasAddonBefore ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-before"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasAddonAfter ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots["addon-after"]), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true),
            _ctx.hasFloating && !_ctx.empty ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8, ["visible"])) : createCommentVNode("v-if", true),
            _ctx.isLoading ? (openBlock(), createBlock(_component_ElementLoader, { key: 3 })) : createCommentVNode("v-if", true),
            createBaseVNode("input", mergeProps({
              value: _ctx.model,
              type: _ctx.inputType,
              name: _ctx.name,
              id: _ctx.fieldId,
              class: _ctx.classes.input,
              placeholder: _ctx.Placeholder,
              autocomplete: _ctx.autocomplete,
              disabled: _ctx.isDisabled,
              readonly: _ctx.readonly
            }, {
              ..._ctx.attrs,
              ..._ctx.aria
            }, {
              onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
              onKeyup: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args)),
              onKeypress: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
              onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
              onSelect: _cache[4] || (_cache[4] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
              onBlur: _cache[5] || (_cache[5] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              ref: "input"
            }), null, 16, _hoisted_1$d)
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$A.render = render$f;
script$A.__file = "themes/blank/templates/elements/TextElement.vue";
var script$z = {
  name: "TextElement",
  render: script$A.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        input: "vf-input-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$h = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$h);
script$z.__file = "themes/vueform/templates/elements/TextElement.vue";
function useValue$1(props, context, dependencies) {
  const { value, modelValue, falseValue, trueValue, disabled } = toRefs(props);
  const externalValue = modelValue && modelValue.value !== void 0 ? modelValue : value;
  const checked = computed(() => {
    return externalValue.value === trueValue.value;
  });
  const update = (val) => {
    context.emit("input", val);
    context.emit("update:modelValue", val);
    context.emit("change", val);
  };
  const check = () => {
    update(trueValue.value);
  };
  const uncheck = () => {
    update(falseValue.value);
  };
  const handleInput = (val) => {
    update(val.target.checked ? trueValue.value : falseValue.value);
  };
  const handleClick = () => {
    if (disabled.value) {
      return;
    }
    checked.value ? uncheck() : check();
  };
  if ([null, void 0, false, 0, "0", "off"].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    uncheck();
  }
  if ([true, 1, "1", "on"].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    check();
  }
  return {
    externalValue,
    checked,
    update,
    check,
    uncheck,
    handleInput,
    handleClick
  };
}
function useValue(props, context, dependencies) {
  const { trueValue, falseValue, onLabel, offLabel } = toRefs(props);
  const checked = dependencies.checked;
  const update = dependencies.update;
  const label = computed(() => {
    let label2 = checked.value ? onLabel.value : offLabel.value;
    if (!label2) {
      label2 = "&nbsp;";
    }
    return label2;
  });
  const toggle = () => {
    update(checked.value ? falseValue.value : trueValue.value);
  };
  const on2 = () => {
    update(trueValue.value);
  };
  const off = () => {
    update(falseValue.value);
  };
  return {
    label,
    toggle,
    on: on2,
    off
  };
}
function useClasses(props, context, dependencies) {
  const refs = toRefs(props);
  const disabled = refs.disabled;
  const checked = dependencies.checked;
  const classes2 = computed(() => ({
    container: "toggle-container",
    toggle: "toggle",
    toggleOn: "toggle-on",
    toggleOff: "toggle-off",
    toggleOnDisabled: "toggle-on-disabled",
    toggleOffDisabled: "toggle-off-disabled",
    handle: "toggle-handle",
    handleOn: "toggle-handle-on",
    handleOff: "toggle-handle-off",
    handleOnDisabled: "toggle-handle-on-disabled",
    handleOffDisabled: "toggle-handle-off-disabled",
    label: "toggle-label",
    ...refs.classes.value
  }));
  const classList = computed(() => {
    return {
      container: classes2.value.container,
      toggle: [
        classes2.value.toggle,
        disabled.value ? checked.value ? classes2.value.toggleOnDisabled : classes2.value.toggleOffDisabled : checked.value ? classes2.value.toggleOn : classes2.value.toggleOff
      ],
      handle: [
        classes2.value.handle,
        disabled.value ? checked.value ? classes2.value.handleOnDisabled : classes2.value.handleOffDisabled : checked.value ? classes2.value.handleOn : classes2.value.handleOff
      ],
      label: classes2.value.label
    };
  });
  return {
    classList
  };
}
function useStyle(props, context, dependencies) {
  const { disabled } = toRefs(props);
  const check = dependencies.check;
  const uncheck = dependencies.uncheck;
  const checked = dependencies.checked;
  const handleSpace = () => {
    if (disabled.value) {
      return;
    }
    checked.value ? uncheck() : check();
  };
  return {
    handleSpace
  };
}
var valueProps = {
  value: {
    validator: function(p2) {
      return (p3) => ["number", "string", "boolean"].indexOf(typeof p3) !== -1 || p3 === null || p3 === void 0;
    },
    required: false
  },
  modelValue: {
    validator: function(p2) {
      return (p3) => ["number", "string", "boolean"].indexOf(typeof p3) !== -1 || p3 === null || p3 === void 0;
    },
    required: false
  }
};
var script$y = {
  name: "Toggle",
  emits: [
    "input",
    "update:modelValue",
    "change"
  ],
  props: {
    ...valueProps,
    id: {
      type: [String, Number],
      required: false,
      default: "toggle"
    },
    name: {
      type: [String, Number],
      required: false,
      default: "toggle"
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    falseValue: {
      type: [String, Number, Boolean],
      required: false,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      required: false,
      default: true
    },
    onLabel: {
      type: [String, Object],
      required: false,
      default: ""
    },
    offLabel: {
      type: [String, Object],
      required: false,
      default: ""
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    labelledby: {
      type: String,
      required: false
    },
    describedby: {
      type: String,
      required: false
    },
    aria: {
      required: false,
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    const value = useValue$1(props, context);
    const toggle = useValue(props, context, {
      checked: value.checked,
      update: value.update
    });
    const classes2 = useClasses(props, context, {
      checked: value.checked
    });
    const keyboard = useStyle(props, context, {
      check: value.check,
      uncheck: value.uncheck,
      checked: value.checked
    });
    return {
      ...value,
      ...classes2,
      ...toggle,
      ...keyboard
    };
  }
};
var _hoisted_1$c = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"];
var _hoisted_2$9 = ["id", "name", "value", "checked", "disabled"];
var _hoisted_3$7 = ["innerHTML"];
var _hoisted_4$2 = ["checked"];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classList.container,
    tabindex: $props.disabled ? void 0 : 0,
    "aria-checked": _ctx.checked,
    "aria-describedby": $props.describedby,
    "aria-labelledby": $props.labelledby,
    role: "switch"
  }, $props.aria, {
    onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.handleSpace && _ctx.handleSpace(...args), ["prevent"]), ["space"]))
  }), [
    withDirectives(createBaseVNode("input", {
      type: "checkbox",
      id: $props.id,
      name: $props.name,
      value: $props.trueValue,
      checked: _ctx.checked,
      disabled: $props.disabled
    }, null, 8, _hoisted_2$9), [
      [vShow, false]
    ]),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.classList.toggle),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      },
      [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classList.handle)
          },
          null,
          2
          /* CLASS */
        ),
        renderSlot(_ctx.$slots, "label", {
          checked: _ctx.checked,
          classList: _ctx.classList
        }, () => [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.classList.label),
            innerHTML: _ctx.label
          }, null, 10, _hoisted_3$7)
        ]),
        $props.required ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "checkbox",
          style: {
            appearance: "none",
            height: "1px",
            margin: "0",
            padding: "0",
            fontSize: "0",
            background: "transparent",
            position: "absolute",
            width: "100%",
            bottom: "0",
            outline: "none"
          },
          checked: _ctx.checked,
          "aria-hidden": "true",
          tabindex: "-1",
          required: ""
        }, null, 8, _hoisted_4$2)) : createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    )
  ], 16, _hoisted_1$c);
}
script$y.render = render$e;
script$y.__file = "node_modules/@vueform/toggle/src/Toggle.vue";
var script$x = {
  name: "ToggleElement",
  components: {
    Toggle: script$y
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        toggle: {
          container: "",
          toggle: "",
          toggleOn: "",
          toggleOff: "",
          toggleOnDisabled: "",
          toggleOffDisabled: "",
          handle: "",
          handleOn: "",
          handleOff: "",
          handleOnDisabled: "",
          handleOffDisabled: "",
          label: ""
        },
        text: ""
      }
    };
  }
};
var _hoisted_1$b = ["innerHTML"];
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toggle = resolveComponent("Toggle");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            createCommentVNode(" @vueform/toggle component "),
            createVNode(_component_Toggle, mergeProps({
              value: _ctx.value,
              modelValue: _ctx.value
            }, _ctx.fieldOptions, {
              classes: _ctx.classes.toggle,
              name: _ctx.name,
              id: _ctx.fieldId,
              aria: _ctx.aria,
              onInput: _ctx.handleChange,
              ref: "input"
            }), null, 16, ["value", "modelValue", "classes", "name", "id", "aria", "onInput"]),
            _ctx.Text ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.classes.text),
              innerHTML: _ctx.Text
            }, null, 10, _hoisted_1$b)) : (openBlock(), createElementBlock(
              "span",
              {
                key: 1,
                class: normalizeClass(_ctx.classes.text)
              },
              [
                renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8, ["el$"]))
                ])
              ],
              2
              /* CLASS */
            ))
          ],
          2
          /* CLASS */
        )
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$x.render = render$d;
script$x.__file = "themes/blank/templates/elements/ToggleElement.vue";
var script$w = {
  name: "ToggleElement",
  render: script$x.render,
  components: {
    Toggle: script$y
  },
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-contains-link",
        wrapper: "vf-toggle-wrapper",
        wrapper_left: "vf-toggle-wrapper-left",
        wrapper_right: "vf-toggle-wrapper-right",
        text: "vf-toggle-text",
        text_sm: "vf-toggle-text-sm",
        text_md: "",
        text_lg: "vf-toggle-text-lg",
        text_left: "vf-toggle-text-left",
        text_right: "vf-toggle-text-right",
        toggle: {
          container: "vf-toggle-container",
          container_enabled: "",
          container_disabled: "vf-toggle-container-disabled",
          toggle: "vf-toggle",
          toggle_sm: "vf-toggle-sm",
          toggle_md: "",
          toggle_lg: "vf-toggle-lg",
          toggleOn: "vf-toggle-on",
          toggleOff: "vf-toggle-off",
          toggleOnDisabled: "vf-toggle-on-disabled",
          toggleOffDisabled: "vf-toggle-off-disabled",
          handle: "vf-toggle-handle",
          handle_sm: "vf-toggle-handle-sm",
          handle_md: "",
          handle_lg: "vf-toggle-handle-lg",
          handleOn: "vf-toggle-handle-on",
          handleOff: "vf-toggle-handle-off",
          handleOnDisabled: "vf-toggle-handle-on-disabled",
          handleOffDisabled: "vf-toggle-handle-off-disabled",
          label: "vf-toggle-label",
          label_sm: "vf-toggle-label-sm",
          label_md: "",
          label_lg: "vf-toggle-label-lg",
          $container: (classes2, { Size, isDisabled }) => [
            classes2.toggle.container,
            classes2.toggle[`container_${Size}`],
            !isDisabled ? classes2.toggle.container_enabled : classes2.toggle.container_disabled
          ],
          $toggle: (classes2, { Size }) => [
            classes2.toggle.toggle,
            classes2.toggle[`toggle_${Size}`]
          ],
          $handle: (classes2, { Size }) => [
            classes2.toggle.handle,
            classes2.toggle[`handle_${Size}`]
          ],
          $label: (classes2, { Size }) => [
            classes2.toggle.label,
            classes2.toggle[`label_${Size}`]
          ]
        },
        $text: (classes2, { Size, align }) => [
          classes2.text,
          classes2[`text_${Size}`],
          align === "left" ? classes2.text_left : null,
          align === "right" ? classes2.text_right : null
        ],
        $wrapper: (classes2, { align }) => [
          classes2.wrapper,
          align === "left" ? classes2.wrapper_left : null,
          align === "right" ? classes2.wrapper_right : null
        ]
      }
    };
  }
};
var css_248z$g = ".vf-toggle-wrapper {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.vf-toggle-text {\n  margin-left: var(--vf-space-checkbox);\n}\n\n.vf-toggle-text.vf-toggle-text-sm {\n  margin-left: var(--vf-space-checkbox-sm);\n}\n\n.vf-toggle-text.vf-toggle-text-lg {\n  margin-left: var(--vf-space-checkbox-lg);\n}\n\n/* @vueform/toggle styles */\n\n.vf-toggle-container {\n  display: inline-block;\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  border-radius: 9999px;\n  transition: box-shadow 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n  box-shadow: var(--vf-shadow-handles);\n}\n\n.vf-toggle-container:hover:not(.vf-toggle-container-disabled) {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n\n.vf-toggle-container:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-toggle-container.vf-toggle-container-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.vf-toggle {\n  display: flex;\n  border-radius: 999px;\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s all;\n  align-items: center;\n  box-sizing: content-box;\n  border-width: var(--vf-border-width-toggle);\n  border-style: solid;\n  font-size: 0.75rem;\n  width: var(--vf-toggle-width);\n  height: var(--vf-toggle-height);\n  line-height: 1;\n}\n\n.vf-toggle.vf-toggle-sm {\n  width: var(--vf-toggle-width-sm);\n  height: var(--vf-toggle-height-sm);\n  font-size: 0.75rem;\n}\n\n.vf-toggle.vf-toggle-lg {\n  width: var(--vf-toggle-width-lg);\n  height: var(--vf-toggle-height-lg);\n  font-size: 0.8125rem;\n}\n\n.vf-toggle-on {\n  background: var(--vf-primary);\n  border-color: var(--vf-primary);\n  justify-content: flex-start;\n  color: var(--vf-color-on-primary);\n}\n\n.vf-toggle-off {\n  background: var(--vf-bg-passive);\n  border-color: var(--vf-bg-passive);\n  justify-content: flex-end;\n  color: var(--vf-color-passive);\n}\n\n.vf-toggle-on-disabled {\n  background: var(--vf-primary);\n  border-color: var(--vf-primary);\n  justify-content: flex-start;\n  color: var(--vf-color-on-primary);\n}\n\n.vf-toggle-off-disabled {\n  background: var(--vf-bg-passive);\n  border-color: var(--vf-bg-passive);\n  justify-content: flex-end;\n  color: var(--vf-color-passive);\n}\n\n.vf-toggle-handle {\n  display: inline-block;\n  background: var(--vf-bg-toggle-handle);\n  width: var(--vf-toggle-height);\n  height: var(--vf-toggle-height);\n  top: 0;\n  border-radius: 50%;\n  position: absolute;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.vf-toggle-handle.vf-toggle-handle-sm {\n  width: var(--vf-toggle-height-sm);\n  height: var(--vf-toggle-height-sm);\n}\n\n.vf-toggle-handle.vf-toggle-handle-lg {\n  width: var(--vf-toggle-height-lg);\n  height: var(--vf-toggle-height-lg);\n}\n\n.vf-toggle-handle-on {\n  left: 100%;\n  transform: translateX(-100%);\n}\n\n.vf-toggle-handle-off {\n  left: 0%;\n}\n\n.vf-toggle-handle-on-disabled {\n  left: 100%;\n  transform: translateX(-100%);\n  background: var(--vf-bg-toggle-handle);\n}\n\n.vf-toggle-handle-off-disabled {\n  left: 0%;\n  background: var(--vf-bg-toggle-handle);\n}\n\n.vf-toggle-label {\n  text-align: center;\n  width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));\n  box-sizing: border-box;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.vf-toggle-label.vf-toggle-label-sm {\n  width: calc(var(--vf-toggle-width-sm) - var(--vf-toggle-height-sm));\n}\n\n.vf-toggle-label.vf-toggle-label-lg {\n  width: calc(var(--vf-toggle-width-lg) - var(--vf-toggle-height-lg));\n}\n\nbody:not([dir=rtl]) .vf-toggle-wrapper-right {\n  justify-content: flex-end;\n}\n\nbody:not([dir=rtl]) .vf-toggle-text-right {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox);\n  order: -1;\n}\n\nbody:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-sm {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-sm);\n}\n\nbody:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-lg {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-lg);\n}\n\nbody[dir=rtl] .vf-toggle-wrapper-left {\n  justify-content: flex-end;\n}\n\nbody[dir=rtl] .vf-toggle-text {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-sm {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-sm);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-lg {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-lg);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-left {\n  margin-right: 0;\n  margin-left: var(--vf-space-checkbox);\n  order: -1;\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-sm {\n  margin-right: 0;\n  margin-left: var(--vf-space-checkbox-sm);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-lg {\n  margin-right: 0;\n  margin-left: var(--vf-space-checkbox-lg);\n}";
styleInject(css_248z$g);
script$w.__file = "themes/vueform/templates/elements/ToggleElement.vue";
var script$v = {
  name: "EditorElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        input: ""
      }
    };
  }
};
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EditorWrapper = resolveComponent("EditorWrapper");
  return openBlock(), createBlock(
    resolveDynamicComponent(_ctx.elementLayout),
    { ref: "container" },
    createSlots({
      element: withCtx(() => [
        createVNode(_component_EditorWrapper, {
          value: _ctx.model,
          placeholder: _ctx.Placeholder,
          id: _ctx.fieldId,
          accept: _ctx.accept,
          "accept-mimes": _ctx.acceptMimes,
          endpoint: _ctx.editorEndpoint,
          method: _ctx.editorMethod,
          disabled: _ctx.isDisabled,
          "hide-tools": _ctx.hideTools,
          class: normalizeClass(_ctx.classes.input),
          attrs: _ctx.aria,
          onInput: _ctx.handleInput,
          onAlert: _ctx.handleAlert,
          onError: _ctx.handleError,
          onBlur: _ctx.handleBlur,
          ref: "input"
        }, null, 8, ["value", "placeholder", "id", "accept", "accept-mimes", "endpoint", "method", "disabled", "hide-tools", "class", "attrs", "onInput", "onAlert", "onError", "onBlur"])
      ]),
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.elementSlots, (component, slot) => {
        return {
          name: slot,
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8, ["el$"]))
            ])
          ])
        };
      })
    ]),
    1536
    /* NEED_PATCH, DYNAMIC_SLOTS */
  );
}
script$v.render = render$c;
script$v.__file = "themes/blank/templates/elements/EditorElement.vue";
var script$u = {
  name: "EditorElement",
  render: script$v.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        input: "vf-editor",
        input_enabled: "",
        input_disabled: "vf-editor-disabled",
        input_success: "vf-editor-success",
        input_danger: "vf-editor-danger",
        input_focused: "vf-editor-focused",
        input_sm: "vf-editor-sm",
        input_md: "",
        input_lg: "vf-editor-lg",
        $input: (classes2, { isDisabled, focused, Size, isSuccess, isDanger }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.input_default : null,
          !isDisabled && focused ? classes2.input_focused : null,
          !isDisabled && isSuccess ? classes2.input_success : null,
          !isDisabled && isDanger ? classes2.input_danger : null
        ]
      }
    };
  }
};
var css_248z$f = ".vf-editor {\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  border-style: solid;\n  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  background-color: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  border-color: var(--vf-border-color-input);\n  box-shadow: var(--vf-shadow-input);\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-radius: var(--vf-radius-input);\n}\n\n.vf-editor.vf-editor-disabled {\n  background-color: var(--vf-bg-disabled);\n  color: var(--vf-color-disabled);\n}\n\n.vf-editor.vf-editor-success {\n  background-color: var(--vf-bg-input-success);\n  color: var(--vf-color-input-success);\n  border-color: var(--vf-border-color-input-success);\n}\n\n.vf-editor.vf-editor-danger {\n  background-color: var(--vf-bg-input-danger);\n  color: var(--vf-color-input-danger);\n  border-color: var(--vf-border-color-input-danger);\n}\n\n.vf-editor:hover:not(.vf-editor-disabled) {\n  box-shadow: var(--vf-shadow-input-hover);\n}\n\n.vf-editor:hover:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {\n  background-color: var(--vf-bg-input-hover);\n  color: var(--vf-color-input-hover);\n  border-color: var(--vf-border-color-input-hover);\n}\n\n.vf-editor.vf-editor-focused {\n  box-shadow: var(--vf-shadow-input-focus);\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n  border-color: var(--vf-border-color-input-focus);\n}\n\n.vf-editor.vf-editor-focused:not(.vf-editor-success):not(.vf-editor-danger), .vf-editor.vf-editor-focused:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {\n  background-color: var(--vf-bg-input-focus);\n  color: var(--vf-color-input-focus);\n}";
styleInject(css_248z$f);
script$u.__file = "themes/vueform/templates/elements/EditorElement.vue";
var script$t = {
  name: "TTextareaElement",
  render: script$C.render,
  staticRenderFns: script$C.staticRenderFns,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        input: ""
      }
    };
  }
};
script$t.__file = "themes/blank/templates/elements/TTextareaElement.vue";
var script$s = {
  name: "TTextareaElement",
  render: script$t.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group vf-input-group-textarea",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        input: "vf-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$e = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$e);
script$s.__file = "themes/vueform/templates/elements/TTextareaElement.vue";
var script$r = {
  name: "TTextElement",
  render: script$A.render,
  staticRenderFns: script$A.staticRenderFns,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        inputContainer: "",
        input: ""
      }
    };
  }
};
script$r.__file = "themes/blank/templates/elements/TTextElement.vue";
var script$q = {
  name: "TTextElement",
  render: script$r.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        inputContainer: "vf-input-group",
        inputContainer_sm: "vf-input-group-sm",
        inputContainer_md: "",
        inputContainer_lg: "vf-input-group-lg",
        inputContainer_default: "",
        inputContainer_disabled: "vf-input-group-disabled",
        inputContainer_focused: "vf-input-group-focused",
        inputContainer_success: "vf-input-group-success",
        inputContainer_danger: "vf-input-group-danger",
        input: "vf-input-field",
        input_sm: "",
        input_md: "",
        input_lg: "",
        input_enabled: "",
        input_disabled: "",
        input_focused: "",
        input_success: "",
        input_danger: "",
        $inputContainer: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.inputContainer,
          classes2[`inputContainer_${Size}`],
          isDisabled ? classes2.inputContainer_disabled : null,
          !isDisabled && !isSuccess && !isDanger ? classes2.inputContainer_default : null,
          !isDisabled && focused ? classes2.inputContainer_focused : null,
          !isDisabled && isSuccess ? classes2.inputContainer_success : null,
          !isDisabled && isDanger ? classes2.inputContainer_danger : null
        ],
        $input: (classes2, { isDisabled, Size, isSuccess, isDanger, focused }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && focused && !isSuccess && !isDanger ? classes2.input_focused : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null
        ]
      }
    };
  }
};
var css_248z$d = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$d);
script$q.__file = "themes/vueform/templates/elements/TTextElement.vue";
var script$p = {
  name: "TEditorElement",
  render: script$v.render,
  staticRenderFns: script$v.staticRenderFns,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        input: ""
      }
    };
  }
};
script$p.__file = "themes/blank/templates/elements/TEditorElement.vue";
var script$o = {
  name: "TEditorElement",
  render: script$p.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-text-type",
        input: "vf-editor",
        input_enabled: "",
        input_disabled: "vf-editor-disabled",
        input_success: "vf-editor-success",
        input_danger: "vf-editor-danger",
        input_focused: "vf-editor-focused",
        input_focused_success: "vf-editor-focused-success",
        input_focused_danger: "vf-editor-focused-danger",
        input_sm: "vf-editor-sm",
        input_md: "",
        input_lg: "vf-editor-lg",
        $input: (classes2, { isDisabled, focused, Size, isSuccess, isDanger }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : null,
          !isDisabled && !isSuccess && !isDanger && !focused ? classes2.input_enabled : null,
          !isDisabled && isDanger ? classes2.input_danger : null,
          !isDisabled && isSuccess ? classes2.input_success : null,
          focused && !isDanger && !isSuccess ? classes2.input_focused : null,
          focused && isSuccess ? classes2.input_focused_success : null,
          focused && isDanger ? classes2.input_focused_danger : null
        ]
      }
    };
  }
};
var css_248z$c = "/* Some styles are contained in EditorElement.vue */";
styleInject(css_248z$c);
script$o.__file = "themes/vueform/templates/elements/TEditorElement.vue";
var script$n = {
  name: "CheckboxgroupCheckbox",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        input: "",
        text: ""
      }
    };
  }
};
var _hoisted_1$a = ["value", "name", "id", "disabled", "aria-label"];
var _hoisted_2$8 = ["innerHTML"];
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
        classes: _ctx.classes,
        isDisabled: _ctx.isDisabled,
        id: _ctx.id,
        item: _ctx.item,
        value: _ctx.value,
        items: _ctx.items,
        index: _ctx.index
      }), () => [
        withDirectives(createBaseVNode("input", mergeProps({
          type: "checkbox",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.el$.model = $event)
        }, _ctx.attrs, {
          value: _ctx.value,
          class: _ctx.classes.input,
          name: _ctx.name,
          id: _ctx.id,
          disabled: _ctx.isDisabled,
          "aria-label": _ctx.item.label
        }), null, 16, _hoisted_1$a), [
          [vModelCheckbox, _ctx.el$.model]
        ]),
        createBaseVNode("span", {
          class: normalizeClass(_ctx.classes.text),
          innerHTML: _ctx.item.label
        }, null, 10, _hoisted_2$8)
      ])
    ],
    2
    /* CLASS */
  );
}
script$n.render = render$b;
script$n.__file = "themes/blank/templates/elements/partials/CheckboxgroupCheckbox.vue";
var script$m = {
  name: "CheckboxgroupCheckbox",
  render: script$n.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-checkbox-container",
        input: "vf-checkbox",
        input_enabled: "",
        input_disabled: "",
        input_sm: "vf-checkbox-sm",
        input_md: "",
        input_lg: "vf-checkbox-lg",
        text: "vf-checkbox-text",
        $input: (classes2, { isDisabled, Size }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : classes2.input_enabled
        ]
      }
    };
  }
};
var css_248z$b = "/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */";
styleInject(css_248z$b);
script$m.__file = "themes/vueform/templates/elements/partials/CheckboxgroupCheckbox.vue";
var script$l = {
  name: "CheckboxgroupCheckbox_tabs",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        input: "",
        text: ""
      }
    };
  }
};
var _hoisted_1$9 = ["aria-checked"];
var _hoisted_2$7 = ["value", "id", "name", "disabled"];
var _hoisted_3$6 = ["innerHTML"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", mergeProps(_ctx.attrs, {
    class: _ctx.classes.container,
    tabindex: "0",
    role: "checkbox",
    "aria-checked": _ctx.checked,
    onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.el$.toggle(_ctx.value), ["prevent"]), ["space"])),
    onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }), [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(_ctx.classes.wrapper)
        },
        [
          withDirectives(createBaseVNode("input", {
            type: "checkbox",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.el$.model = $event),
            value: _ctx.value,
            id: _ctx.id,
            class: normalizeClass(_ctx.classes.input),
            name: _ctx.name,
            disabled: _ctx.isDisabled
          }, null, 10, _hoisted_2$7), [
            [vModelCheckbox, _ctx.el$.model]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(_ctx.classes.text),
            innerHTML: `${_ctx.item.label}`
          }, null, 10, _hoisted_3$6)
        ],
        2
        /* CLASS */
      )
    ])
  ], 16, _hoisted_1$9);
}
script$l.render = render$a;
script$l.__file = "themes/blank/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";
var script$k = {
  name: "CheckboxgroupCheckbox_tabs",
  render: script$l.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-checkbox-tabs-container",
        wrapper: "vf-checkbox-tabs",
        wrapper_not_last: "vf-checkbox-tabs-not-last",
        wrapper_first: "vf-checkbox-tabs-first",
        wrapper_first_sm: "vf-checkbox-tabs-first-sm",
        wrapper_first_md: "",
        wrapper_first_lg: "vf-checkbox-tabs-first-lg",
        wrapper_last: "vf-checkbox-tabs-last",
        wrapper_last_sm: "vf-checkbox-tabs-last-sm",
        wrapper_last_md: "",
        wrapper_last_lg: "vf-checkbox-tabs-last-lg",
        wrapper_selected: "vf-checkbox-tabs-selected",
        wrapper_unselected: "vf-checkbox-tabs-unselected",
        wrapper_disabled: "vf-checkbox-tabs-disabled",
        wrapper_sm: "vf-checkbox-tabs-sm",
        wrapper_md: "",
        wrapper_lg: "vf-checkbox-tabs-lg",
        input: "vf-checkbox-tabs-input",
        text: "",
        $wrapper: (classes2, { index: index2, items, el$, value, isDisabled, Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          index2 < Object.keys(items).length - 1 ? classes2.wrapper_not_last : null,
          index2 === 0 ? classes2.wrapper_first : null,
          index2 === 0 ? classes2[`wrapper_first_${Size}`] : null,
          index2 === Object.keys(items).length - 1 ? classes2.wrapper_last : null,
          index2 === Object.keys(items).length - 1 ? classes2[`wrapper_last_${Size}`] : null,
          el$.value.indexOf(value) !== -1 ? classes2.wrapper_selected : classes2.wrapper_unselected,
          isDisabled ? classes2.wrapper_disabled : null
        ]
      }
    };
  }
};
var css_248z$a = "/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */\n\n.vf-checkbox-tabs-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n}\n\n.vf-checkbox-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);\n  width: 100%;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-not-last {\n  border-right: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-first {\n  border-radius: var(--vf-radius-input);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-last {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-selected {\n  background-color: var(--vf-primary);\n  border-color: rgba(0, 0, 0, 0.15);\n  color: var(--vf-color-on-primary);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-unselected {\n  border-color: var(--vf-border-color-input);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {\n  background-color: var(--vf-bg-input-hover);\n  color: var(--vf-color-input-hover);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-disabled {\n  opacity: 0.5;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-sm {\n  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-lg {\n  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-checkbox-tabs-input {\n  display: none;\n}";
styleInject(css_248z$a);
script$k.__file = "themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";
var script$j = {
  name: "CheckboxgroupCheckbox_tabs",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        input: "",
        text_wrapper: "",
        text: "",
        description: ""
      }
    };
  }
};
var _hoisted_1$8 = ["value", "name", "id", "disabled"];
var _hoisted_2$6 = ["innerHTML"];
var _hoisted_3$5 = ["innerHTML"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
        classes: _ctx.classes,
        isDisabled: _ctx.isDisabled,
        id: _ctx.id,
        item: _ctx.item,
        value: _ctx.value,
        items: _ctx.items,
        index: _ctx.index
      }), () => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            withDirectives(createBaseVNode("input", mergeProps({
              type: "checkbox",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.el$.model = $event)
            }, _ctx.attrs, {
              value: _ctx.value,
              class: _ctx.classes.input,
              name: _ctx.name,
              id: _ctx.id,
              disabled: _ctx.isDisabled
            }), null, 16, _hoisted_1$8), [
              [vModelCheckbox, _ctx.el$.model]
            ]),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(_ctx.classes.text_wrapper)
              },
              [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.classes.text),
                  innerHTML: _ctx.item.label
                }, null, 10, _hoisted_2$6),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.classes.description),
                  innerHTML: _ctx.item.description
                }, null, 10, _hoisted_3$5)
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
script$j.render = render$9;
script$j.__file = "themes/blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";
var script$i = {
  name: "CheckboxgroupCheckbox_blocks",
  render: script$j.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-checkbox-blocks-container",
        container_sm: "vf-checkbox-blocks-container-sm",
        container_md: "",
        container_lg: "vf-checkbox-blocks-container-lg",
        wrapper: "vf-checkbox-blocks",
        wrapper_not_last: "vf-checkbox-blocks-not-last",
        wrapper_first: "vf-checkbox-blocks-first",
        wrapper_first_sm: "vf-checkbox-blocks-first-sm",
        wrapper_first_md: "",
        wrapper_first_lg: "vf-checkbox-blocks-first-lg",
        wrapper_last: "vf-checkbox-blocks-last",
        wrapper_last_sm: "vf-checkbox-blocks-last-sm",
        wrapper_last_md: "",
        wrapper_last_lg: "vf-checkbox-blocks-last-lg",
        wrapper_selected: "vf-checkbox-blocks-selected",
        wrapper_unselected: "vf-checkbox-blocks-unselected",
        wrapper_disabled: "vf-checkbox-blocks-disabled",
        wrapper_sm: "vf-checkbox-blocks-sm",
        wrapper_md: "",
        wrapper_lg: "vf-checkbox-blocks-lg",
        input: "vf-checkbox",
        input_enabled: "",
        input_disabled: "",
        input_sm: "vf-checkbox-sm",
        input_md: "",
        input_lg: "vf-checkbox-lg",
        text_wrapper: "vf-checkbox-blocks-text-wrapper",
        text: "vf-checkbox-blocks-text",
        description: "vf-checkbox-blocks-description",
        description_sm: "vf-checkbox-blocks-description-sm",
        description_md: "",
        description_lg: "vf-checkbox-blocks-description-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ],
        $wrapper: (classes2, { index: index2, items, el$, value, isDisabled, Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          index2 < Object.keys(items).length - 1 ? classes2.wrapper_not_last : null,
          index2 === 0 ? classes2.wrapper_first : null,
          index2 === 0 ? classes2[`wrapper_first_${Size}`] : null,
          index2 === Object.keys(items).length - 1 ? classes2.wrapper_last : null,
          index2 === Object.keys(items).length - 1 ? classes2[`wrapper_last_${Size}`] : null,
          el$.value.indexOf(value) !== -1 ? classes2.wrapper_selected : classes2.wrapper_unselected,
          isDisabled ? classes2.wrapper_disabled : null
        ],
        $input: (classes2, { isDisabled, Size }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : classes2.input_enabled
        ],
        $description: (classes2, { Size }) => [
          classes2.description,
          classes2[`description_${Size}`]
        ]
      }
    };
  }
};
var css_248z$9 = "/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */\n\n.vf-checkbox-blocks-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-checkbox-blocks-container .vf-checkbox {\n  margin-top: 0;\n}\n\n.vf-checkbox-blocks-container.vf-checkbox-blocks-container-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-checkbox-blocks-container.vf-checkbox-blocks-container-lg {\n  border-radius: var(--vf-radius-large-lg);\n}\n\n.vf-checkbox-blocks {\n  display: flex;\n  align-items: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  width: 100%;\n  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  background: var(--vf-bg-input);\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-not-last {\n  border-bottom: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-first {\n  border-radius: var(--vf-radius-large);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-last {\n  border-radius: var(--vf-radius-large);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-selected {\n  background-color: var(--vf-bg-selected);\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-disabled {\n  opacity: 0.5;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-sm {\n  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-lg {\n  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-checkbox-blocks-text-wrapper {\n  margin-left: 0.5rem;\n}\n\n.vf-checkbox-blocks-description {\n  color: var(--vf-color-muted);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  margin-top: -0.125rem;\n}\n\n.vf-checkbox-blocks-description.vf-checkbox-blocks-description-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: -0.125rem;\n}\n\n.vf-checkbox-blocks-description.vf-checkbox-blocks-description-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  margin-top: -0.125rem;\n}";
styleInject(css_248z$9);
script$i.__file = "themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";
var script$h = {
  name: "DragAndDrop",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        icon: "",
        title: "",
        description: ""
      }
    };
  }
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["prevent"])),
      ref: "area"
    },
    [
      createBaseVNode(
        "span",
        {
          class: normalizeClass(_ctx.classes.icon)
        },
        null,
        2
        /* CLASS */
      ),
      _ctx.title ? (openBlock(), createElementBlock(
        "span",
        {
          key: 0,
          class: normalizeClass(_ctx.classes.title)
        },
        toDisplayString(_ctx.title),
        3
        /* TEXT, CLASS */
      )) : createCommentVNode("v-if", true),
      _ctx.description ? (openBlock(), createElementBlock(
        "span",
        {
          key: 1,
          class: normalizeClass(_ctx.classes.description)
        },
        toDisplayString(_ctx.description),
        3
        /* TEXT, CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
script$h.render = render$8;
script$h.__file = "themes/blank/templates/elements/partials/DragAndDrop.vue";
var script$g = {
  name: "DragAndDrop",
  render: script$h.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-dnd",
        container_sm: "vf-dnd-sm",
        container_md: "",
        container_lg: "vf-dnd-lg",
        container_inactive: "",
        container_active: "is-active",
        container_enabled: "",
        container_disabled: "is-disabled",
        icon: "vf-dnd-icon-upload",
        title: "vf-dnd-title",
        description: "vf-dnd-description",
        $container: (classes2, { dragging, disabled, Size }) => [
          classes2.container,
          classes2[`container_${Size}`],
          dragging ? classes2.container_active : classes2.container_inactive,
          disabled ? classes2.container_disabled : classes2.container_enabled
        ]
      }
    };
  }
};
var css_248z$8 = `.vf-dnd {
  background-color: #FFFFFF;
  transition: 0.3s;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: dashed;
  border-color: var(--vf-border-color-input);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  font-size: inherit;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: 0.3s;
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-radius: var(--vf-radius-large);
  box-shadow: var(--vf-shadow-input);
  text-align: center;
}

.vf-dnd.vf-dnd-sm {
  border-radius: var(--vf-radius-large);
}

.vf-dnd.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-dnd.is-active {
  border-color: var(--vf-primary);
}

.vf-dnd-icon-upload {
  display: flex;
  width: 2.25rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background: var(--vf-primary);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: cover;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-dnd-title {
  font-weight: 600;
  margin-top: 0.75rem;
}`;
styleInject(css_248z$8);
script$g.__file = "themes/vueform/templates/elements/partials/DragAndDrop.vue";
var script$f = {
  name: "FilePreview",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        file: "",
        filenameLink: "",
        filenameStatic: "",
        actions: "",
        percent: "",
        upload: "",
        progressBar: "",
        progress: "",
        warning: "",
        warningIcon: "",
        uploaded: "",
        uploadedIcon: "",
        remove: "",
        removeIcon: "",
        assistiveText: ""
      }
    };
  }
};
var _hoisted_1$7 = ["aria-labelledby", "aria-placeholder", "aria-describedby"];
var _hoisted_2$5 = ["id"];
var _hoisted_3$4 = ["href"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classes.container
  }, _ctx.attrs, {
    tabindex: "0",
    role: "button",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-placeholder": _ctx.ariaPlaceholder,
    "aria-describedby": `${_ctx.el$.fieldId}-file-description`,
    onKeyup: _cache[3] || (_cache[3] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args))
  }), [
    createBaseVNode("span", {
      id: `${_ctx.el$.fieldId}-file-description`,
      class: normalizeClass(_ctx.classes.assistiveText),
      "aria-hidden": ""
    }, toDisplayString(_ctx.form$.translations.vueform.a11y.file.description), 11, _hoisted_2$5),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.classes.wrapper)
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.file)
          },
          [
            createCommentVNode(" Filename "),
            _ctx.hasLink && _ctx.clickable ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: _ctx.link,
              class: normalizeClass(_ctx.classes.filenameLink),
              target: "_blank",
              rel: "nofollow noopener"
            }, toDisplayString(_ctx.filename), 11, _hoisted_3$4)) : (openBlock(), createElementBlock(
              "span",
              {
                key: 1,
                class: normalizeClass(_ctx.classes.filenameStatic)
              },
              toDisplayString(_ctx.filename),
              3
              /* TEXT, CLASS */
            ))
          ],
          2
          /* CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.actions)
          },
          [
            createCommentVNode(" Remove "),
            _ctx.canRemove ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(_ctx.classes.remove),
                onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.remove && _ctx.remove(...args), ["prevent"])),
                onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.remove && _ctx.remove(...args), ["enter", "space"])),
                "aria-roledescription": "❎",
                role: "button",
                tabindex: "0"
              },
              [
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.removeIcon)
                  },
                  null,
                  2
                  /* CLASS */
                )
              ],
              34
              /* CLASS, NEED_HYDRATION */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" Progress "),
            _ctx.uploading ? (openBlock(), createElementBlock(
              "div",
              {
                key: 1,
                class: normalizeClass(_ctx.classes.percent)
              },
              toDisplayString(_ctx.progress) + "%",
              3
              /* TEXT, CLASS */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" Error "),
            _ctx.hasError ? (openBlock(), createElementBlock(
              "span",
              {
                key: 2,
                class: normalizeClass(_ctx.classes.warning)
              },
              [
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.warningIcon)
                  },
                  null,
                  2
                  /* CLASS */
                )
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" Upload button "),
            _ctx.canUploadTemp ? (openBlock(), createElementBlock(
              "div",
              {
                key: 3,
                class: normalizeClass(_ctx.classes.upload),
                onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.upload && _ctx.upload(...args), ["prevent"])),
                tabindex: "-1"
              },
              toDisplayString(_ctx.uploadText),
              3
              /* TEXT, CLASS */
            )) : _ctx.el$.stage > 1 ? (openBlock(), createElementBlock(
              Fragment,
              { key: 4 },
              [
                createCommentVNode(" Success "),
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.uploaded)
                  },
                  [
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(_ctx.classes.uploadedIcon)
                      },
                      null,
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ),
    _ctx.uploading ? (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(_ctx.classes.progressBar)
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.progress),
            style: normalizeStyle({ width: _ctx.progress + "%" })
          },
          null,
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)
  ], 16, _hoisted_1$7)), [
    [vShow, _ctx.visible]
  ]);
}
script$f.render = render$7;
script$f.__file = "themes/blank/templates/elements/partials/FilePreview.vue";
var script$e = {
  name: "FilePreview",
  render: script$f.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-file-preview",
        container_sm: "vf-file-preview-sm",
        container_md: "",
        container_lg: "vf-file-preview-lg",
        wrapper: "vf-file-preview-wrapper",
        file: "vf-file-preview-file",
        filenameLink: "vf-file-preview-filename-link",
        filenameStatic: "vf-file-preview-filename",
        actions: "vf-file-preview-actions",
        percent: "vf-file-preview-percent",
        upload: "vf-file-preview-upload",
        progressBar: "vf-file-preview-progress-bar",
        progress: "vf-file-preview-progress",
        warning: "vf-file-preview-warning",
        warningIcon: "vf-file-preview-warning-icon",
        uploaded: "vf-file-preview-uploaded",
        uploadedIcon: "vf-file-preview-uploaded-icon",
        remove: "vf-file-preview-remove",
        removeIcon: "vf-file-preview-remove-icon",
        assistiveText: "vf-assistive-text",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ]
      }
    };
  }
};
var css_248z$7 = `.vf-file-preview {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  min-height: var(--vf-min-height-input);
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.vf-file-preview:hover .vf-file-preview-uploaded,
.vf-file-preview:hover .vf-file-preview-warning,
.vf-file-preview:hover .vf-file-preview-percent {
  display: none;
}

.vf-file-preview:hover .vf-file-preview-remove {
  display: inline-block;
}

.vf-file-preview.vf-file-preview-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-sm);
}

.vf-file-preview.vf-file-preview-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-lg);
}

.vf-file-preview-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vf-file-preview-file {
  display: flex;
  align-items: center;
}

.vf-file-preview-filename-link {
  text-decoration: none;
  color: inherit;
}

.vf-file-preview-filename-link:hover, .vf-file-preview-filename-link:focus, .vf-file-preview-filename-link:active {
  color: inherit;
}

.vf-file-preview-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  width: 100%;
}

.vf-file-preview-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-warning,
.vf-file-preview-uploaded,
.vf-file-preview-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-warning-icon,
.vf-file-preview-uploaded-icon,
.vf-file-preview-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview {
  opacity: 0.6;
}`;
styleInject(css_248z$7);
script$e.__file = "themes/vueform/templates/elements/partials/FilePreview.vue";
var script$d = {
  name: "FilePreview_image",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        image: "",
        img: "",
        file: "",
        filenameLink: "",
        filenameStatic: "",
        actions: "",
        percent: "",
        upload: "",
        progressBar: "",
        progress: "",
        warning: "",
        warningIcon: "",
        uploaded: "",
        uploadedIcon: "",
        remove: "",
        removeIcon: ""
      }
    };
  }
};
var _hoisted_1$6 = ["aria-labelledby", "aria-placeholder", "aria-describedby"];
var _hoisted_2$4 = ["id"];
var _hoisted_3$3 = ["href"];
var _hoisted_4$1 = ["src", "alt", "title"];
var _hoisted_5$1 = ["src", "alt", "title"];
var _hoisted_6 = ["href"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classes.container,
    tabindex: "0",
    role: "button"
  }, _ctx.attrs, {
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-placeholder": _ctx.ariaPlaceholder,
    "aria-describedby": `${_ctx.el$.fieldId}-file-description`,
    onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args))
  }), [
    createBaseVNode("span", {
      id: `${_ctx.el$.fieldId}-file-description`,
      class: normalizeClass(_ctx.classes.assistiveText),
      "aria-hidden": ""
    }, toDisplayString(_ctx.form$.translations.vueform.a11y.file.description), 11, _hoisted_2$4),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.classes.wrapper)
      },
      [
        createCommentVNode(" Image "),
        _ctx.uploaded && _ctx.hasLink && _ctx.clickable ? (openBlock(), createElementBlock("a", {
          key: 0,
          href: _ctx.link,
          class: normalizeClass(_ctx.classes.image),
          target: "_blank",
          rel: "nofollow noopener"
        }, [
          createBaseVNode("img", {
            class: normalizeClass(_ctx.classes.img),
            src: _ctx.preview,
            alt: _ctx.filename,
            title: _ctx.filename,
            "aria-hidden": "true"
          }, null, 10, _hoisted_4$1)
        ], 10, _hoisted_3$3)) : (openBlock(), createElementBlock(
          "span",
          {
            key: 1,
            class: normalizeClass(_ctx.classes.image)
          },
          [
            createBaseVNode("img", {
              class: normalizeClass(_ctx.classes.img),
              src: _ctx.preview,
              alt: _ctx.filename,
              title: _ctx.filename,
              "aria-hidden": "true"
            }, null, 10, _hoisted_5$1)
          ],
          2
          /* CLASS */
        )),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.file)
          },
          [
            createCommentVNode(" Filename "),
            _ctx.hasLink && _ctx.clickable ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: _ctx.link,
              class: normalizeClass(_ctx.classes.filenameLink),
              target: "_blank",
              rel: "nofollow noopener"
            }, toDisplayString(_ctx.filename), 11, _hoisted_6)) : (openBlock(), createElementBlock(
              "span",
              {
                key: 1,
                class: normalizeClass(_ctx.classes.filenameStatic)
              },
              toDisplayString(_ctx.filename),
              3
              /* TEXT, CLASS */
            ))
          ],
          2
          /* CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.actions)
          },
          [
            createCommentVNode(" Remove "),
            _ctx.canRemove ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(_ctx.classes.remove),
                onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.remove && _ctx.remove(...args), ["prevent"])),
                onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.remove && _ctx.remove(...args), ["enter", "space"])),
                "aria-roledescription": "❎",
                role: "button",
                tabindex: "0"
              },
              [
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.removeIcon)
                  },
                  null,
                  2
                  /* CLASS */
                )
              ],
              34
              /* CLASS, NEED_HYDRATION */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" Progress "),
            _ctx.uploading ? (openBlock(), createElementBlock(
              "div",
              {
                key: 1,
                class: normalizeClass(_ctx.classes.percent)
              },
              toDisplayString(_ctx.progress) + "%",
              3
              /* TEXT, CLASS */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" Error "),
            _ctx.hasError ? (openBlock(), createElementBlock(
              "span",
              {
                key: 2,
                class: normalizeClass(_ctx.classes.warning)
              },
              [
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.warningIcon)
                  },
                  null,
                  2
                  /* CLASS */
                )
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" Upload button "),
            _ctx.canUploadTemp ? (openBlock(), createElementBlock(
              "div",
              {
                key: 3,
                class: normalizeClass(_ctx.classes.upload),
                onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.upload && _ctx.upload(...args), ["prevent"])),
                onKeypress: _cache[3] || (_cache[3] = withKeys((...args) => _ctx.upload && _ctx.upload(...args), ["enter", "space"])),
                tabindex: "-1",
                role: "button"
              },
              toDisplayString(_ctx.uploadText),
              35
              /* TEXT, CLASS, NEED_HYDRATION */
            )) : _ctx.el$.stage > 1 ? (openBlock(), createElementBlock(
              Fragment,
              { key: 4 },
              [
                createCommentVNode(" Success "),
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.classes.uploaded)
                  },
                  [
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(_ctx.classes.uploadedIcon)
                      },
                      null,
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ),
    _ctx.uploading ? (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(_ctx.classes.progressBar)
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.progress),
            style: normalizeStyle({ width: _ctx.progress + "%" })
          },
          null,
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)
  ], 16, _hoisted_1$6)), [
    [vShow, _ctx.visible]
  ]);
}
script$d.render = render$6;
script$d.__file = "themes/blank/templates/elements/partials/FilePreview_image.vue";
var script$c = {
  name: "ImagePreview",
  render: script$d.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-file-preview-image",
        wrapper: "vf-file-preview-image-wrapper",
        image: "vf-file-preview-image-image",
        image_link: "",
        image_static: "",
        image_sm: "vf-file-preview-image-image-sm",
        image_md: "",
        image_lg: "vf-file-preview-image-image-lg",
        img: "vf-file-preview-image-img",
        img_sm: "vf-file-preview-image-img-sm",
        img_md: "",
        img_lg: "vf-file-preview-image-img-lg",
        file: "vf-file-preview-image-file",
        filenameLink: "vf-file-preview-image-filename-link",
        filenameStatic: "vf-file-preview-image-filename",
        actions: "vf-file-preview-image-actions",
        percent: "vf-file-preview-image-percent",
        upload: "vf-file-preview-image-upload",
        progressBar: "vf-file-preview-image-progress-bar",
        progressBar_sm: "vf-file-preview-image-progress-bar-sm",
        progressBar_md: "",
        progressBar_lg: "vf-file-preview-image-progress-bar-lg",
        progress: "vf-file-preview-image-progress",
        warning: "vf-file-preview-image-warning",
        warningIcon: "vf-file-preview-image-warning-icon",
        uploaded: "vf-file-preview-image-uploaded",
        uploadedIcon: "vf-file-preview-image-uploaded-icon",
        remove: "vf-file-preview-image-remove",
        removeIcon: "vf-file-preview-image-remove-icon",
        assistiveText: "vf-assistive-text",
        $image: (classes2, { hasLink, Size }) => [
          classes2.image,
          classes2[`image_${Size}`],
          hasLink ? classes2.image_link : classes2.image_static
        ],
        $img: (classes2, { Size }) => [
          classes2.img,
          classes2[`img_${Size}`]
        ],
        $progressBar: (classes2, { Size }) => [
          classes2.progressBar,
          classes2[`progressBar_${Size}`]
        ]
      }
    };
  }
};
var css_248z$6 = `.vf-file-preview-image {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
}

.vf-file-preview-image:hover .vf-file-preview-image-uploaded,
.vf-file-preview-image:hover .vf-file-preview-image-warning,
.vf-file-preview-image:hover .vf-file-preview-image-percent {
  display: none;
}

.vf-file-preview-image:hover .vf-file-preview-image-remove {
  display: inline-block;
}

.vf-file-preview-image-image {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-image);
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  box-shadow: var(--vf-shadow-input);
}

.vf-file-preview-image-image:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-image.vf-file-preview-image-image-sm {
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-image.vf-file-preview-image-image-lg {
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-img {
  -o-object-fit: cover;
     object-fit: cover;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-image);
  border: 0;
}

.vf-file-preview-image-img[src=""], .vf-file-preview-image-img[src="data:"], .vf-file-preview-image-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-image-img.vf-file-preview-image-img-sm {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-img.vf-file-preview-image-img-lg {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.vf-file-preview-image-file {
  display: flex;
  align-items: center;
  margin-left: 0.625rem;
  flex: 1 1 auto;
}

.vf-file-preview-image-filename-link {
  text-decoration: none;
  color: inherit;
}

.vf-file-preview-image-filename-link:hover, .vf-file-preview-image-filename-link:focus, .vf-file-preview-image-filename-link:active {
  color: inherit;
}

.vf-file-preview-image-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-image-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-image-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-image-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-image-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-image-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  left: calc(var(--vf-min-height-input) + 0.625rem);
  right: 0;
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-sm {
  left: calc(var(--vf-min-height-input-sm) + 0.625rem);
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-lg {
  left: calc(var(--vf-min-height-input-lg) + 0.625rem);
}

.vf-file-preview-image-progress {
  border-radius: 0;
  display: block;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-image-warning,
.vf-file-preview-image-uploaded,
.vf-file-preview-image-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-image-warning-icon,
.vf-file-preview-image-uploaded-icon,
.vf-file-preview-image-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-image-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-image-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-image-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-image-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-image-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-image-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-image-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-image {
  opacity: 0.6;
}`;
styleInject(css_248z$6);
script$c.__file = "themes/vueform/templates/elements/partials/FilePreview_image.vue";
var script$b = {
  name: "FilePreview_gallery",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        image: "",
        img: "",
        overlay: "",
        upload: "",
        progressBar: "",
        progress: "",
        warning: "",
        warningIcon: "",
        uploaded: "",
        uploadedIcon: "",
        remove: "",
        removeIcon: ""
      }
    };
  }
};
var _hoisted_1$5 = ["aria-labelledby", "aria-placeholder", "aria-role", "aria-describedby"];
var _hoisted_2$3 = ["id"];
var _hoisted_3$2 = ["href"];
var _hoisted_4 = ["src", "alt", "title"];
var _hoisted_5 = ["src", "alt", "title"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classes.container,
    tabindex: "0",
    role: "button"
  }, _ctx.attrs, {
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-placeholder": _ctx.ariaPlaceholder,
    "aria-role": _ctx.ariaRoledescription,
    "aria-describedby": `${_ctx.el$.fieldId}-file-description`,
    onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args))
  }), [
    createBaseVNode("span", {
      id: `${_ctx.el$.fieldId}-file-description`,
      class: normalizeClass(_ctx.classes.assistiveText),
      "aria-hidden": ""
    }, toDisplayString(_ctx.form$.translations.vueform.a11y.file.description), 11, _hoisted_2$3),
    createCommentVNode(" Image  "),
    _ctx.uploaded && _ctx.hasLink && _ctx.clickable ? (openBlock(), createElementBlock("a", {
      key: 0,
      class: normalizeClass(_ctx.classes.image),
      href: _ctx.link,
      target: "_blank",
      rel: "nofollow noopener"
    }, [
      createBaseVNode("img", {
        src: _ctx.preview,
        class: normalizeClass(_ctx.classes.img),
        alt: _ctx.filename,
        title: _ctx.filename,
        "aria-hidden": "true"
      }, null, 10, _hoisted_4)
    ], 10, _hoisted_3$2)) : (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass(_ctx.classes.image)
      },
      [
        createBaseVNode("img", {
          class: normalizeClass(_ctx.classes.img),
          src: _ctx.preview,
          alt: _ctx.filename,
          title: _ctx.filename,
          "aria-hidden": "true"
        }, null, 10, _hoisted_5)
      ],
      2
      /* CLASS */
    )),
    createCommentVNode(" Overlay "),
    !_ctx.uploaded && !_ctx.uploading ? (openBlock(), createElementBlock(
      "div",
      {
        key: 2,
        class: normalizeClass(_ctx.classes.overlay)
      },
      [
        _ctx.canUploadTemp ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(_ctx.classes.upload),
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.upload && _ctx.upload(...args), ["prevent"])),
            onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.upload && _ctx.upload(...args), ["enter", "space"])),
            tabindex: "-1",
            role: "button"
          },
          toDisplayString(_ctx.uploadText),
          35
          /* TEXT, CLASS, NEED_HYDRATION */
        )) : createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true),
    createCommentVNode(" Error "),
    _ctx.hasError ? (openBlock(), createElementBlock(
      "span",
      {
        key: 3,
        class: normalizeClass(_ctx.classes.warning)
      },
      [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classes.warningIcon)
          },
          null,
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    )) : _ctx.el$.stage > 1 ? (openBlock(), createElementBlock(
      Fragment,
      { key: 4 },
      [
        createCommentVNode(" Success "),
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classes.uploaded)
          },
          [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(_ctx.classes.uploadedIcon)
              },
              null,
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : createCommentVNode("v-if", true),
    createCommentVNode(" Remove "),
    _ctx.canRemove ? (openBlock(), createElementBlock(
      "div",
      {
        key: 5,
        class: normalizeClass(_ctx.classes.remove),
        onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.remove && _ctx.remove(...args), ["prevent"])),
        onKeypress: _cache[3] || (_cache[3] = withKeys((...args) => _ctx.remove && _ctx.remove(...args), ["enter", "space"])),
        "aria-roledescription": "❎",
        role: "button",
        tabindex: "0"
      },
      [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classes.removeIcon)
          },
          null,
          2
          /* CLASS */
        )
      ],
      34
      /* CLASS, NEED_HYDRATION */
    )) : createCommentVNode("v-if", true),
    createCommentVNode(" Progress "),
    _ctx.uploading ? (openBlock(), createElementBlock(
      "div",
      {
        key: 6,
        class: normalizeClass(_ctx.classes.progressBar)
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.progress),
            style: normalizeStyle({ width: _ctx.progress + "%" })
          },
          null,
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)
  ], 16, _hoisted_1$5)), [
    [vShow, _ctx.visible]
  ]);
}
script$b.render = render$5;
script$b.__file = "themes/blank/templates/elements/partials/FilePreview_gallery.vue";
var script$a = {
  name: "GalleryPreview",
  render: script$b.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-file-preview-gallery",
        container_sm: "vf-file-preview-gallery-sm",
        container_md: "",
        container_lg: "vf-file-preview-gallery-lg",
        image: "vf-file-preview-gallery-image",
        image_sm: "vf-file-preview-gallery-image-sm",
        image_md: "",
        image_lg: "vf-file-preview-gallery-image-lg",
        image_link: "",
        image_static: "",
        img: "vf-file-preview-gallery-img",
        img_sm: "vf-file-preview-gallery-img-sm",
        img_md: "",
        img_lg: "vf-file-preview-gallery-img-lg",
        overlay: "vf-file-preview-gallery-overlay",
        overlay_sm: "vf-file-preview-gallery-overlay-sm",
        overlay_md: "",
        overlay_lg: "vf-file-preview-gallery-overlay-lg",
        upload: "vf-file-preview-gallery-upload",
        progressBar: "vf-file-preview-gallery-progress-bar",
        progress: "vf-file-preview-gallery-progress",
        warning: "vf-file-preview-gallery-warning",
        warningIcon: "vf-file-preview-gallery-warning-icon",
        uploaded: "vf-file-preview-gallery-uploaded",
        uploadedIcon: "vf-file-preview-gallery-uploaded-icon",
        remove: "vf-file-preview-gallery-remove",
        removeIcon: "vf-file-preview-gallery-remove-icon",
        assistiveText: "vf-assistive-text",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ],
        $image: (classes2, { Size }) => [
          classes2.image,
          classes2[`image_${Size}`]
        ],
        $img: (classes2, { Size }) => [
          classes2.img,
          classes2[`img_${Size}`]
        ],
        $overlay: (classes2, { Size }) => [
          classes2.overlay,
          classes2[`overlay_${Size}`]
        ]
      }
    };
  }
};
var css_248z$5 = `.vf-file-preview-gallery {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: 0.2s background;
  width: var(--vf-gallery-size);
  height: var(--vf-gallery-size);
  position: relative;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery.vf-file-preview-gallery-sm {
  width: var(--vf-gallery-size-sm);
  height: var(--vf-gallery-size-sm);
}

.vf-file-preview-gallery.vf-file-preview-gallery-lg {
  width: var(--vf-gallery-size-lg);
  height: var(--vf-gallery-size-lg);
}

.vf-file-preview-gallery-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0.75rem;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-upload {
  font-size: 0.75rem;
  white-space: nowrap;
  background: #FFFFFF;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-gallery-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-gallery-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-gallery-image {
  width: 100%;
  height: 100%;
  font-size: 0;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-gallery);
  outline: none;
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-img[src=""], .vf-file-preview-gallery-img[src="data:"], .vf-file-preview-gallery-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-progress-bar {
  border-radius: 0;
  height: 0.1875rem;
  position: absolute;
  left: 0.1875rem;
  bottom: 0.1875rem;
  z-index: 1;
  background: #FFFFFF;
  right: 0.1875rem;
}

.vf-file-preview-gallery-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-gallery-remove,
.vf-file-preview-gallery-uploaded,
.vf-file-preview-gallery-warning {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
}

.vf-file-preview-gallery-remove-icon,
.vf-file-preview-gallery-uploaded-icon,
.vf-file-preview-gallery-warning-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-gallery-remove {
  position: absolute;
  right: 0.1875rem;
  top: 0.1875rem;
  opacity: 0;
  visibility: hidden;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-file-preview-gallery-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-gallery-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-gallery-uploaded {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-success);
}

.vf-file-preview-gallery-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-gallery-warning {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-gallery-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-gallery {
  opacity: 0.6;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 0;
  visibility: hidden;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 0;
  visibility: hidden;
}`;
styleInject(css_248z$5);
script$a.__file = "themes/vueform/templates/elements/partials/FilePreview_gallery.vue";
var script$9 = {
  name: "RadiogroupRadio",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        input: "",
        text: ""
      }
    };
  }
};
var _hoisted_1$4 = ["value", "name", "id", "disabled", "aria-label"];
var _hoisted_2$2 = ["innerHTML"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
        classes: _ctx.classes,
        isDisabled: _ctx.isDisabled,
        id: _ctx.id,
        item: _ctx.item,
        value: _ctx.value,
        items: _ctx.items,
        index: _ctx.index
      }), () => [
        withDirectives(createBaseVNode("input", mergeProps({
          type: "radio",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.el$.value = $event)
        }, _ctx.attrs, {
          value: _ctx.value,
          class: _ctx.classes.input,
          name: _ctx.name,
          id: _ctx.id,
          disabled: _ctx.isDisabled,
          "aria-label": _ctx.item.label
        }), null, 16, _hoisted_1$4), [
          [vModelRadio, _ctx.el$.value]
        ]),
        createBaseVNode("span", {
          class: normalizeClass(_ctx.classes.text),
          innerHTML: _ctx.item.label
        }, null, 10, _hoisted_2$2)
      ])
    ],
    2
    /* CLASS */
  );
}
script$9.render = render$4;
script$9.__file = "themes/blank/templates/elements/partials/RadiogroupRadio.vue";
var script$8 = {
  name: "RadiogroupRadio",
  render: script$9.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-radio-container",
        input: "vf-radio",
        input_enabled: "",
        input_disabled: "",
        input_sm: "vf-radio-sm",
        input_md: "",
        input_lg: "vf-radio-lg",
        text: "vf-radio-text",
        $input: (classes2, { isDisabled, Size }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : classes2.input_enabled
        ]
      }
    };
  }
};
var css_248z$4 = "/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */";
styleInject(css_248z$4);
script$8.__file = "themes/vueform/templates/elements/partials/RadiogroupRadio.vue";
var script$7 = {
  name: "RadiogroupRadio_tabs",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        input: "",
        text: ""
      }
    };
  }
};
var _hoisted_1$3 = ["aria-checked"];
var _hoisted_2$1 = ["value", "name", "id", "disabled"];
var _hoisted_3$1 = ["innerHTML"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", mergeProps(_ctx.attrs, {
    class: _ctx.classes.container,
    tabindex: "0",
    role: "radio",
    "aria-checked": _ctx.checked,
    onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.el$.update(_ctx.value), ["prevent"]), ["space"])),
    onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }), [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(_ctx.classes.wrapper)
        },
        [
          withDirectives(createBaseVNode("input", {
            type: "radio",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.el$.model = $event),
            value: _ctx.value,
            class: normalizeClass(_ctx.classes.input),
            name: _ctx.name,
            id: _ctx.id,
            disabled: _ctx.isDisabled
          }, null, 10, _hoisted_2$1), [
            [vModelRadio, _ctx.el$.model]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(_ctx.classes.text),
            innerHTML: `${_ctx.item.label}`
          }, null, 10, _hoisted_3$1)
        ],
        2
        /* CLASS */
      )
    ])
  ], 16, _hoisted_1$3);
}
script$7.render = render$3;
script$7.__file = "themes/blank/templates/elements/partials/RadiogroupRadio_tabs.vue";
var script$6 = {
  name: "RadiogroupRadio_tabs",
  render: script$7.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-radio-tabs-container",
        wrapper: "vf-radio-tabs",
        wrapper_not_last: "vf-radio-tabs-not-last",
        wrapper_first: "vf-radio-tabs-first",
        wrapper_first_sm: "vf-radio-tabs-first-sm",
        wrapper_first_md: "",
        wrapper_first_lg: "vf-radio-tabs-first-lg",
        wrapper_last: "vf-radio-tabs-last",
        wrapper_last_sm: "vf-radio-tabs-last-sm",
        wrapper_last_md: "",
        wrapper_last_lg: "vf-radio-tabs-last-lg",
        wrapper_selected: "vf-radio-tabs-selected",
        wrapper_unselected: "vf-radio-tabs-unselected",
        wrapper_disabled: "vf-radio-tabs-disabled",
        wrapper_sm: "vf-radio-tabs-sm",
        wrapper_md: "",
        wrapper_lg: "vf-radio-tabs-lg",
        input: "vf-radio-tabs-input",
        text: "",
        $wrapper: (classes2, { index: index2, items, el$, value, isDisabled, Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          index2 < Object.keys(items).length - 1 ? classes2.wrapper_not_last : null,
          index2 === 0 ? classes2.wrapper_first : null,
          index2 === Object.keys(items).length - 1 ? classes2.wrapper_last : null,
          el$.value == value ? classes2.wrapper_selected : classes2.wrapper_unselected,
          isDisabled ? classes2.wrapper_disabled : null
        ]
      }
    };
  }
};
var css_248z$3 = "/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */\n\n.vf-radio-tabs-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n}\n\n.vf-radio-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);\n  width: 100%;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-radio-tabs.vf-radio-tabs-not-last {\n  border-right: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-first {\n  border-radius: var(--vf-radius-input);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-last {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-selected {\n  background-color: var(--vf-primary);\n  border-color: rgba(0, 0, 0, 0.15);\n  color: var(--vf-color-on-primary);\n}\n\n.vf-radio-tabs.vf-radio-tabs-unselected {\n  border-color: var(--vf-border-color-input);\n}\n\n.vf-radio-tabs.vf-radio-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {\n  background-color: var(--vf-bg-input-hover);\n  color: var(--vf-color-input-hover);\n}\n\n.vf-radio-tabs.vf-radio-tabs-disabled {\n  opacity: 0.5;\n}\n\n.vf-radio-tabs.vf-radio-tabs-sm {\n  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-radio-tabs.vf-radio-tabs-lg {\n  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-radio-tabs-input {\n  display: none;\n}";
styleInject(css_248z$3);
script$6.__file = "themes/vueform/templates/elements/partials/RadiogroupRadio_tabs.vue";
var script$5 = {
  name: "RadiogroupRadio_tabs",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        wrapper: "",
        input: "",
        text_wrapper: "",
        text: "",
        description: ""
      }
    };
  }
};
var _hoisted_1$2 = ["value", "name", "id", "disabled"];
var _hoisted_2 = ["innerHTML"];
var _hoisted_3 = ["innerHTML"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
        classes: _ctx.classes,
        isDisabled: _ctx.isDisabled,
        id: _ctx.id,
        item: _ctx.item,
        value: _ctx.value,
        items: _ctx.items,
        index: _ctx.index
      }), () => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classes.wrapper)
          },
          [
            withDirectives(createBaseVNode("input", mergeProps({
              type: "radio",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.el$.model = $event)
            }, _ctx.attrs, {
              value: _ctx.value,
              class: _ctx.classes.input,
              name: _ctx.name,
              id: _ctx.id,
              disabled: _ctx.isDisabled
            }), null, 16, _hoisted_1$2), [
              [vModelRadio, _ctx.el$.model]
            ]),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(_ctx.classes.text_wrapper)
              },
              [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.classes.text),
                  innerHTML: _ctx.item.label
                }, null, 10, _hoisted_2),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.classes.description),
                  innerHTML: _ctx.item.description
                }, null, 10, _hoisted_3)
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
script$5.render = render$2;
script$5.__file = "themes/blank/templates/elements/partials/RadiogroupRadio_blocks.vue";
var script$4 = {
  name: "RadiogroupRadio_blocks",
  render: script$5.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "vf-radio-blocks-container",
        container_sm: "vf-radio-blocks-container-sm",
        container_md: "",
        container_lg: "vf-radio-blocks-container-lg",
        wrapper: "vf-radio-blocks",
        wrapper_not_last: "vf-radio-blocks-not-last",
        wrapper_first: "vf-radio-blocks-first",
        wrapper_first_sm: "vf-radio-blocks-first-sm",
        wrapper_first_md: "",
        wrapper_first_lg: "vf-radio-blocks-first-lg",
        wrapper_last: "vf-radio-blocks-last",
        wrapper_last_sm: "vf-radio-blocks-last-sm",
        wrapper_last_md: "",
        wrapper_last_lg: "vf-radio-blocks-last-lg",
        wrapper_selected: "vf-radio-blocks-selected",
        wrapper_unselected: "vf-radio-blocks-unselected",
        wrapper_disabled: "vf-radio-blocks-disabled",
        wrapper_sm: "vf-radio-blocks-sm",
        wrapper_md: "",
        wrapper_lg: "vf-radio-blocks-lg",
        input: "vf-radio",
        input_enabled: "",
        input_disabled: "",
        input_sm: "vf-radio-sm",
        input_md: "",
        input_lg: "vf-radio-lg",
        text_wrapper: "vf-radio-blocks-text-wrapper",
        text: "vf-radio-blocks-text",
        description: "vf-radio-blocks-description",
        description_sm: "vf-radio-blocks-description-sm",
        description_md: "",
        description_lg: "vf-radio-blocks-description-lg",
        $container: (classes2, { Size }) => [
          classes2.container,
          classes2[`container_${Size}`]
        ],
        $wrapper: (classes2, { index: index2, items, el$, value, isDisabled, Size }) => [
          classes2.wrapper,
          classes2[`wrapper_${Size}`],
          index2 < Object.keys(items).length - 1 ? classes2.wrapper_not_last : null,
          index2 === 0 ? classes2.wrapper_first : null,
          index2 === 0 ? classes2[`wrapper_first_${Size}`] : null,
          index2 === Object.keys(items).length - 1 ? classes2.wrapper_last : null,
          index2 === Object.keys(items).length - 1 ? classes2[`wrapper_last_${Size}`] : null,
          el$.value == value ? classes2.wrapper_selected : classes2.wrapper_unselected,
          isDisabled ? classes2.wrapper_disabled : null
        ],
        $input: (classes2, { isDisabled, Size }) => [
          classes2.input,
          classes2[`input_${Size}`],
          isDisabled ? classes2.input_disabled : classes2.input_enabled
        ],
        $description: (classes2, { Size }) => [
          classes2.description,
          classes2[`description_${Size}`]
        ]
      }
    };
  }
};
var css_248z$2 = "/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */\n\n.vf-radio-blocks-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n  background: var(--vf-bg-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-radio-blocks-container .vf-radio {\n  margin-top: 0;\n}\n\n.vf-radio-blocks-container.vf-radio-blocks-container-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-radio-blocks-container.vf-radio-blocks-container-lg {\n  border-radius: var(--vf-radius-large-lg);\n}\n\n.vf-radio-blocks {\n  display: flex;\n  align-items: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  width: 100%;\n  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-radio-blocks.vf-radio-blocks-not-last {\n  border-bottom: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-first {\n  border-radius: var(--vf-radius-large);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-last {\n  border-radius: var(--vf-radius-large);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-selected {\n  background-color: var(--vf-bg-selected);\n}\n\n.vf-radio-blocks.vf-radio-blocks-disabled {\n  opacity: 0.5;\n}\n\n.vf-radio-blocks.vf-radio-blocks-sm {\n  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-radio-blocks.vf-radio-blocks-lg {\n  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-radio-blocks-text-wrapper {\n  margin-left: 0.5rem;\n}\n\n.vf-radio-blocks-description {\n  color: var(--vf-color-muted);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  margin-top: -0.125rem;\n}\n\n.vf-radio-blocks-description.vf-radio-blocks-description-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: -0.125rem;\n}\n\n.vf-radio-blocks-description.vf-radio-blocks-description-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  margin-top: -0.125rem;\n}";
styleInject(css_248z$2);
script$4.__file = "themes/vueform/templates/elements/partials/RadiogroupRadio_blocks.vue";
var script$3 = {
  name: "DatepickerWrapper",
  data() {
    return {
      merge: true,
      defaultClasses: {
        datepicker: "",
        calendarContainer: ""
      }
    };
  }
};
var _hoisted_1$1 = ["id", "placeholder"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    class: _ctx.classes.datepicker,
    id: _ctx.id,
    placeholder: _ctx.placeholder
  }, _ctx.attrs, { ref: "input" }), null, 16, _hoisted_1$1);
}
script$3.render = render$1;
script$3.__file = "themes/blank/templates/wrappers/DatepickerWrapper.vue";
var script$2 = {
  name: "DatepickerWrapper",
  render: script$3.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        datepicker: "",
        calendarContainer: "flatpickr-calendar-container"
      }
    };
  }
};
var css_248z$1 = '.flatpickr-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  box-sizing: border-box;\n  touch-action: manipulation;\n  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);\n  color: var(--vf-color-input);\n}\n\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 999;\n}\n\n.flatpickr-calendar.animate.open {\n  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n\n.flatpickr-calendar.rightMost {\n  left: auto;\n  right: 0;\n}\n\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  box-shadow: none !important;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid var(--vf-border-color-input);\n}\n\n.flatpickr-calendar.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: "";\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\n\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\n\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: var(--vf-bg-date-head);\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: var(--vf-bg-date-head);\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: var(--vf-bg-date-head);\n}\n\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: var(--vf-bg-date-head);\n}\n\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n\n.flatpickr-wrapper {\n  position: relative;\n  display: flex;\n}\n\n.flatpickr-months {\n  display: flex;\n}\n\n.flatpickr-months .flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: var(--vf-bg-date-head);\n  color: var(--vf-color-date-head);\n  fill: var(--vf-color-date-head);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  flex: 1;\n}\n\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 1;\n  color: var(--vf-color-date-head);\n  fill: var(--vf-color-date-head);\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n  left: 0;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n  right: 0;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: var(--vf-color-date-head);\n}\n\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  opacity: 1;\n}\n\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n  opacity: 0.7;\n  display: block;\n}\n\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  transition: fill 0.1s;\n  fill: inherit;\n}\n\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n\n.numInputWrapper input {\n  width: 100%;\n}\n\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid var(--vf-border-color-input);\n  box-sizing: border-box;\n}\n\n.numInputWrapper span:hover {\n  background: var(--vf-bg-selected);\n}\n\n.numInputWrapper span:active {\n  background: var(--vf-bg-selected);\n}\n\n.numInputWrapper span:after {\n  display: block;\n  content: "";\n  position: absolute;\n}\n\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid var(--vf-color-input);\n  top: 26%;\n  box-sizing: border-box;\n}\n\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid var(--vf-color-input);\n  top: 40%;\n  box-sizing: border-box;\n}\n\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n\n.numInputWrapper span svg path {\n  fill: var(--vf-color-input);\n}\n\n.numInputWrapper:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0 ;\n  display: inline-block;\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: var(--vf-color-date-head);\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: var(--vf-color-date-head);\n}\n\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: var(--vf-gray-300);\n  background: transparent;\n  pointer-events: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: var(--vf-bg-date-head);\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: var(--vf-bg-date-head);\n  outline: none;\n  padding: 0;\n}\n\n.flatpickr-weekdays {\n  background: var(--vf-bg-date-head);\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 28px;\n}\n\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: flex;\n  flex: 1;\n}\n\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: var(--vf-bg-date-head);\n  color: var(--vf-color-date-head);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  flex: 1;\n  font-weight: bolder;\n}\n\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  width: 307.875px;\n  background-color: var(--vf-bg-input);\n}\n\n.flatpickr-days:focus {\n  outline: 0;\n}\n\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  box-sizing: border-box;\n  display: inline-block;\n  display: flex;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  justify-content: space-around;\n  transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n\n.dayContainer + .dayContainer {\n  box-shadow: -1px 0 0 var(--vf-gray-200);\n}\n\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 38px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: var(--vf-bg-selected);\n  border-color: var(--vf-bg-selected);\n}\n\n.flatpickr-day.today {\n  border-color: var(--vf-bg-selected);\n}\n\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: var(--vf-bg-selected);\n  background: var(--vf-bg-selected);\n}\n\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: var(--vf-primary);\n  box-shadow: none;\n  color: #fff;\n  border-color: var(--vf-primary);\n}\n\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 var(--vf-primary);\n}\n\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n\n.flatpickr-day.inRange {\n  border-radius: 0;\n  box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: var(--vf-color-disabled);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: var(--vf-color-disabled);\n}\n\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);\n}\n\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n\n.flatpickr-weekwrapper {\n  float: left;\n}\n\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n}\n\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: var(--vf-gray-300);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n\n.flatpickr-innerContainer {\n  display: block;\n  display: flex;\n  box-sizing: border-box;\n  overflow: hidden;\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: flex;\n  background: var(--vf-bg-input);\n  border-radius: 0 0 5px 5px;\n  color: var(--vf-color-input);\n}\n\n.flatpickr-time:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n.flatpickr-time .numInputWrapper {\n  flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: var(--vf-color-input);\n  box-sizing: border-box;\n}\n\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: var(--vf-color-input);\n  box-sizing: border-box;\n}\n\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n\n.flatpickr-time input {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  font-size: 14px;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n  color: var(--vf-color-input);\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  align-self: center;\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: var(--vf-bg-selected);\n}\n\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\nspan.flatpickr-day.selected {\n  font-weight: bold;\n}';
styleInject(css_248z$1);
script$2.__file = "themes/vueform/templates/wrappers/DatepickerWrapper.vue";
var t = "2.1.1";
var e = "[data-trix-attachment]";
var i = { preview: { presentation: "gallery", caption: { name: true, size: true } }, file: { caption: { size: true } } };
var n = { default: { tagName: "div", parse: false }, quote: { tagName: "blockquote", nestable: true }, heading1: { tagName: "h1", terminal: true, breakOnReturn: true, group: false }, code: { tagName: "pre", terminal: true, htmlAttributes: ["language"], text: { plaintext: true } }, bulletList: { tagName: "ul", parse: false }, bullet: { tagName: "li", listAttribute: "bulletList", group: false, nestable: true, test(t2) {
  return r(t2.parentNode) === n[this.listAttribute].tagName;
} }, numberList: { tagName: "ol", parse: false }, number: { tagName: "li", listAttribute: "numberList", group: false, nestable: true, test(t2) {
  return r(t2.parentNode) === n[this.listAttribute].tagName;
} }, attachmentGallery: { tagName: "div", exclusive: true, terminal: true, parse: false, group: false } };
var r = (t2) => {
  var e2;
  return null == t2 || null === (e2 = t2.tagName) || void 0 === e2 ? void 0 : e2.toLowerCase();
};
var o = navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i);
var s = o && parseInt(o[1]);
var a = { composesExistingText: /Android.*Chrome/.test(navigator.userAgent), recentAndroid: s && s > 12, samsungAndroid: s && navigator.userAgent.match(/Android.*SM-/), forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent), supportsInputEvents: "undefined" != typeof InputEvent && ["data", "getTargetRanges", "inputType"].every((t2) => t2 in InputEvent.prototype) };
var l = { attachFiles: "Attach Files", bold: "Bold", bullets: "Bullets", byte: "Byte", bytes: "Bytes", captionPlaceholder: "Add a caption…", code: "Code", heading1: "Heading", indent: "Increase Level", italic: "Italic", link: "Link", numbers: "Numbers", outdent: "Decrease Level", quote: "Quote", redo: "Redo", remove: "Remove", strike: "Strikethrough", undo: "Undo", unlink: "Unlink", url: "URL", urlPlaceholder: "Enter a URL…", GB: "GB", KB: "KB", MB: "MB", PB: "PB", TB: "TB" };
var c = [l.bytes, l.KB, l.MB, l.GB, l.TB, l.PB];
var u = { prefix: "IEC", precision: 2, formatter(t2) {
  switch (t2) {
    case 0:
      return "0 ".concat(l.bytes);
    case 1:
      return "1 ".concat(l.byte);
    default:
      let e2;
      "SI" === this.prefix ? e2 = 1e3 : "IEC" === this.prefix && (e2 = 1024);
      const i2 = Math.floor(Math.log(t2) / Math.log(e2)), n2 = (t2 / Math.pow(e2, i2)).toFixed(this.precision).replace(/0*$/, "").replace(/\.$/, "");
      return "".concat(n2, " ").concat(c[i2]);
  }
} };
var h = "\uFEFF";
var d = " ";
var g = function(t2) {
  for (const e2 in t2) {
    const i2 = t2[e2];
    this[e2] = i2;
  }
  return this;
};
var m = document.documentElement;
var p = m.matches;
var f = function(t2) {
  let { onElement: e2, matchingSelector: i2, withCallback: n2, inPhase: r2, preventDefault: o2, times: s2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const a2 = e2 || m, l2 = i2, c2 = "capturing" === r2, u2 = function(t3) {
    null != s2 && 0 == --s2 && u2.destroy();
    const e3 = A(t3.target, { matchingSelector: l2 });
    null != e3 && (null == n2 || n2.call(e3, t3, e3), o2 && t3.preventDefault());
  };
  return u2.destroy = () => a2.removeEventListener(t2, u2, c2), a2.addEventListener(t2, u2, c2), u2;
};
var b = function(t2) {
  let { onElement: e2, bubbles: i2, cancelable: n2, attributes: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const o2 = null != e2 ? e2 : m;
  i2 = false !== i2, n2 = false !== n2;
  const s2 = document.createEvent("Events");
  return s2.initEvent(t2, i2, n2), null != r2 && g.call(s2, r2), o2.dispatchEvent(s2);
};
var v = function(t2, e2) {
  if (1 === (null == t2 ? void 0 : t2.nodeType))
    return p.call(t2, e2);
};
var A = function(t2) {
  let { matchingSelector: e2, untilNode: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  for (; t2 && t2.nodeType !== Node.ELEMENT_NODE; )
    t2 = t2.parentNode;
  if (null != t2) {
    if (null == e2)
      return t2;
    if (t2.closest && null == i2)
      return t2.closest(e2);
    for (; t2 && t2 !== i2; ) {
      if (v(t2, e2))
        return t2;
      t2 = t2.parentNode;
    }
  }
};
var x = (t2) => document.activeElement !== t2 && y(t2, document.activeElement);
var y = function(t2, e2) {
  if (t2 && e2)
    for (; e2; ) {
      if (e2 === t2)
        return true;
      e2 = e2.parentNode;
    }
};
var C = function(t2) {
  var e2;
  if (null === (e2 = t2) || void 0 === e2 || !e2.parentNode)
    return;
  let i2 = 0;
  for (t2 = t2.previousSibling; t2; )
    i2++, t2 = t2.previousSibling;
  return i2;
};
var k = (t2) => {
  var e2;
  return null == t2 || null === (e2 = t2.parentNode) || void 0 === e2 ? void 0 : e2.removeChild(t2);
};
var R = function(t2) {
  let { onlyNodesOfType: e2, usingFilter: i2, expandEntityReferences: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const r2 = (() => {
    switch (e2) {
      case "element":
        return NodeFilter.SHOW_ELEMENT;
      case "text":
        return NodeFilter.SHOW_TEXT;
      case "comment":
        return NodeFilter.SHOW_COMMENT;
      default:
        return NodeFilter.SHOW_ALL;
    }
  })();
  return document.createTreeWalker(t2, r2, null != i2 ? i2 : null, true === n2);
};
var E = (t2) => {
  var e2;
  return null == t2 || null === (e2 = t2.tagName) || void 0 === e2 ? void 0 : e2.toLowerCase();
};
var S = function(t2) {
  let e2, i2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  "object" == typeof t2 ? (n2 = t2, t2 = n2.tagName) : n2 = { attributes: n2 };
  const r2 = document.createElement(t2);
  if (null != n2.editable && (null == n2.attributes && (n2.attributes = {}), n2.attributes.contenteditable = n2.editable), n2.attributes)
    for (e2 in n2.attributes)
      i2 = n2.attributes[e2], r2.setAttribute(e2, i2);
  if (n2.style)
    for (e2 in n2.style)
      i2 = n2.style[e2], r2.style[e2] = i2;
  if (n2.data)
    for (e2 in n2.data)
      i2 = n2.data[e2], r2.dataset[e2] = i2;
  return n2.className && n2.className.split(" ").forEach((t3) => {
    r2.classList.add(t3);
  }), n2.textContent && (r2.textContent = n2.textContent), n2.childNodes && [].concat(n2.childNodes).forEach((t3) => {
    r2.appendChild(t3);
  }), r2;
};
var L;
var D = function() {
  if (null != L)
    return L;
  L = [];
  for (const t2 in n) {
    const e2 = n[t2];
    e2.tagName && L.push(e2.tagName);
  }
  return L;
};
var w = (t2) => B(null == t2 ? void 0 : t2.firstChild);
var T = function(t2) {
  let { strict: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { strict: true };
  return e2 ? B(t2) : B(t2) || !B(t2.firstChild) && function(t3) {
    return D().includes(E(t3)) && !D().includes(E(t3.firstChild));
  }(t2);
};
var B = (t2) => F(t2) && "block" === (null == t2 ? void 0 : t2.data);
var F = (t2) => (null == t2 ? void 0 : t2.nodeType) === Node.COMMENT_NODE;
var P = function(t2) {
  let { name: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (t2)
    return O(t2) ? t2.data === h ? !e2 || t2.parentNode.dataset.trixCursorTarget === e2 : void 0 : P(t2.firstChild);
};
var I = (t2) => v(t2, e);
var N = (t2) => O(t2) && "" === (null == t2 ? void 0 : t2.data);
var O = (t2) => (null == t2 ? void 0 : t2.nodeType) === Node.TEXT_NODE;
var M = { level2Enabled: true, getLevel() {
  return this.level2Enabled && a.supportsInputEvents ? 2 : 0;
}, pickFiles(t2) {
  const e2 = S("input", { type: "file", multiple: true, hidden: true, id: this.fileInputId });
  e2.addEventListener("change", () => {
    t2(e2.files), k(e2);
  }), k(document.getElementById(this.fileInputId)), document.body.appendChild(e2), e2.click();
} };
var j = { removeBlankTableCells: false, tableCellSeparator: " | ", tableRowSeparator: "\n" };
var W = { bold: { tagName: "strong", inheritable: true, parser(t2) {
  const e2 = window.getComputedStyle(t2);
  return "bold" === e2.fontWeight || e2.fontWeight >= 600;
} }, italic: { tagName: "em", inheritable: true, parser: (t2) => "italic" === window.getComputedStyle(t2).fontStyle }, href: { groupTagName: "a", parser(t2) {
  const i2 = "a:not(".concat(e, ")"), n2 = t2.closest(i2);
  if (n2)
    return n2.getAttribute("href");
} }, strike: { tagName: "del", inheritable: true }, frozen: { style: { backgroundColor: "highlight" } } };
var U = { getDefaultHTML: () => '<div class="trix-button-row">\n      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'.concat(l.bold, '" tabindex="-1">').concat(l.bold, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="').concat(l.italic, '" tabindex="-1">').concat(l.italic, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="').concat(l.strike, '" tabindex="-1">').concat(l.strike, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="').concat(l.link, '" tabindex="-1">').concat(l.link, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="').concat(l.heading1, '" tabindex="-1">').concat(l.heading1, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="').concat(l.quote, '" tabindex="-1">').concat(l.quote, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="').concat(l.code, '" tabindex="-1">').concat(l.code, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="').concat(l.bullets, '" tabindex="-1">').concat(l.bullets, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="').concat(l.numbers, '" tabindex="-1">').concat(l.numbers, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="').concat(l.outdent, '" tabindex="-1">').concat(l.outdent, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="').concat(l.indent, '" tabindex="-1">').concat(l.indent, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="').concat(l.attachFiles, '" tabindex="-1">').concat(l.attachFiles, '</button>\n      </span>\n\n      <span class="trix-button-group-spacer"></span>\n\n      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="').concat(l.undo, '" tabindex="-1">').concat(l.undo, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="').concat(l.redo, '" tabindex="-1">').concat(l.redo, '</button>\n      </span>\n    </div>\n\n    <div class="trix-dialogs" data-trix-dialogs>\n      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n        <div class="trix-dialog__link-fields">\n          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="').concat(l.urlPlaceholder, '" aria-label="').concat(l.url, '" required data-trix-input>\n          <div class="trix-button-group">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(l.link, '" data-trix-method="setAttribute">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(l.unlink, '" data-trix-method="removeAttribute">\n          </div>\n        </div>\n      </div>\n    </div>') };
var q = { interval: 5e3 };
var V = Object.freeze({ __proto__: null, attachments: i, blockAttributes: n, browser: a, css: { attachment: "attachment", attachmentCaption: "attachment__caption", attachmentCaptionEditor: "attachment__caption-editor", attachmentMetadata: "attachment__metadata", attachmentMetadataContainer: "attachment__metadata-container", attachmentName: "attachment__name", attachmentProgress: "attachment__progress", attachmentSize: "attachment__size", attachmentToolbar: "attachment__toolbar", attachmentGallery: "attachment-gallery" }, fileSize: u, input: M, keyNames: { 8: "backspace", 9: "tab", 13: "return", 27: "escape", 37: "left", 39: "right", 46: "delete", 68: "d", 72: "h", 79: "o" }, lang: l, parser: j, textAttributes: W, toolbar: U, undo: q });
var H = class {
  static proxyMethod(t2) {
    const { name: e2, toMethod: i2, toProperty: n2, optional: r2 } = z(t2);
    this.prototype[e2] = function() {
      let t3, o2;
      var s2, a2;
      i2 ? o2 = r2 ? null === (s2 = this[i2]) || void 0 === s2 ? void 0 : s2.call(this) : this[i2]() : n2 && (o2 = this[n2]);
      return r2 ? (t3 = null === (a2 = o2) || void 0 === a2 ? void 0 : a2[e2], t3 ? _.call(t3, o2, arguments) : void 0) : (t3 = o2[e2], _.call(t3, o2, arguments));
    };
  }
};
var z = function(t2) {
  const e2 = t2.match(J);
  if (!e2)
    throw new Error("can't parse @proxyMethod expression: ".concat(t2));
  const i2 = { name: e2[4] };
  return null != e2[2] ? i2.toMethod = e2[1] : i2.toProperty = e2[1], null != e2[3] && (i2.optional = true), i2;
};
var { apply: _ } = Function.prototype;
var J = new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");
var K;
var G;
var $;
var X = class extends H {
  static box() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return t2 instanceof this ? t2 : this.fromUCS2String(null == t2 ? void 0 : t2.toString());
  }
  static fromUCS2String(t2) {
    return new this(t2, tt(t2));
  }
  static fromCodepoints(t2) {
    return new this(et(t2), t2);
  }
  constructor(t2, e2) {
    super(...arguments), this.ucs2String = t2, this.codepoints = e2, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
  }
  offsetToUCS2Offset(t2) {
    return et(this.codepoints.slice(0, Math.max(0, t2))).length;
  }
  offsetFromUCS2Offset(t2) {
    return tt(this.ucs2String.slice(0, Math.max(0, t2))).length;
  }
  slice() {
    return this.constructor.fromCodepoints(this.codepoints.slice(...arguments));
  }
  charAt(t2) {
    return this.slice(t2, t2 + 1);
  }
  isEqualTo(t2) {
    return this.constructor.box(t2).ucs2String === this.ucs2String;
  }
  toJSON() {
    return this.ucs2String;
  }
  getCacheKey() {
    return this.ucs2String;
  }
  toString() {
    return this.ucs2String;
  }
};
var Y = 1 === (null === (K = Array.from) || void 0 === K ? void 0 : K.call(Array, "👼").length);
var Q = null != (null === (G = " ".codePointAt) || void 0 === G ? void 0 : G.call(" ", 0));
var Z = " 👼" === (null === ($ = String.fromCodePoint) || void 0 === $ ? void 0 : $.call(String, 32, 128124));
var tt;
var et;
tt = Y && Q ? (t2) => Array.from(t2).map((t3) => t3.codePointAt(0)) : function(t2) {
  const e2 = [];
  let i2 = 0;
  const { length: n2 } = t2;
  for (; i2 < n2; ) {
    let r2 = t2.charCodeAt(i2++);
    if (55296 <= r2 && r2 <= 56319 && i2 < n2) {
      const e3 = t2.charCodeAt(i2++);
      56320 == (64512 & e3) ? r2 = ((1023 & r2) << 10) + (1023 & e3) + 65536 : i2--;
    }
    e2.push(r2);
  }
  return e2;
}, et = Z ? (t2) => String.fromCodePoint(...Array.from(t2 || [])) : function(t2) {
  return (() => {
    const e2 = [];
    return Array.from(t2).forEach((t3) => {
      let i2 = "";
      t3 > 65535 && (t3 -= 65536, i2 += String.fromCharCode(t3 >>> 10 & 1023 | 55296), t3 = 56320 | 1023 & t3), e2.push(i2 + String.fromCharCode(t3));
    }), e2;
  })().join("");
};
var it = 0;
var nt = class extends H {
  static fromJSONString(t2) {
    return this.fromJSON(JSON.parse(t2));
  }
  constructor() {
    super(...arguments), this.id = ++it;
  }
  hasSameConstructorAs(t2) {
    return this.constructor === (null == t2 ? void 0 : t2.constructor);
  }
  isEqualTo(t2) {
    return this === t2;
  }
  inspect() {
    const t2 = [], e2 = this.contentsForInspection() || {};
    for (const i2 in e2) {
      const n2 = e2[i2];
      t2.push("".concat(i2, "=").concat(n2));
    }
    return "#<".concat(this.constructor.name, ":").concat(this.id).concat(t2.length ? " ".concat(t2.join(", ")) : "", ">");
  }
  contentsForInspection() {
  }
  toJSONString() {
    return JSON.stringify(this);
  }
  toUTF16String() {
    return X.box(this);
  }
  getCacheKey() {
    return this.id.toString();
  }
};
var rt = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  if (t2.length !== e2.length)
    return false;
  for (let i2 = 0; i2 < t2.length; i2++) {
    if (t2[i2] !== e2[i2])
      return false;
  }
  return true;
};
var ot = function(t2) {
  const e2 = t2.slice(0);
  for (var i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), r2 = 1; r2 < i2; r2++)
    n2[r2 - 1] = arguments[r2];
  return e2.splice(...n2), e2;
};
var st = /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/;
var at = function() {
  const t2 = S("input", { dir: "auto", name: "x", dirName: "x.dir" }), e2 = S("textarea", { dir: "auto", name: "y", dirName: "y.dir" }), i2 = S("form");
  i2.appendChild(t2), i2.appendChild(e2);
  const n2 = function() {
    try {
      return new FormData(i2).has(e2.dirName);
    } catch (t3) {
      return false;
    }
  }(), r2 = function() {
    try {
      return t2.matches(":dir(ltr),:dir(rtl)");
    } catch (t3) {
      return false;
    }
  }();
  return n2 ? function(t3) {
    return e2.value = t3, new FormData(i2).get(e2.dirName);
  } : r2 ? function(e3) {
    return t2.value = e3, t2.matches(":dir(rtl)") ? "rtl" : "ltr";
  } : function(t3) {
    const e3 = t3.trim().charAt(0);
    return st.test(e3) ? "rtl" : "ltr";
  };
}();
var lt = null;
var ct = null;
var ut = null;
var ht = null;
var dt = () => (lt || (lt = ft().concat(mt())), lt);
var gt = (t2) => n[t2];
var mt = () => (ct || (ct = Object.keys(n)), ct);
var pt = (t2) => W[t2];
var ft = () => (ut || (ut = Object.keys(W)), ut);
var bt = function(t2, e2) {
  vt(t2).textContent = e2.replace(/%t/g, t2);
};
var vt = function(t2) {
  const e2 = document.createElement("style");
  e2.setAttribute("type", "text/css"), e2.setAttribute("data-tag-name", t2.toLowerCase());
  const i2 = At();
  return i2 && e2.setAttribute("nonce", i2), document.head.insertBefore(e2, document.head.firstChild), e2;
};
var At = function() {
  const t2 = xt("trix-csp-nonce") || xt("csp-nonce");
  if (t2)
    return t2.getAttribute("content");
};
var xt = (t2) => document.head.querySelector("meta[name=".concat(t2, "]"));
var yt = { "application/x-trix-feature-detection": "test" };
var Ct = function(t2) {
  const e2 = t2.getData("text/plain"), i2 = t2.getData("text/html");
  if (!e2 || !i2)
    return null == e2 ? void 0 : e2.length;
  {
    const { body: t3 } = new DOMParser().parseFromString(i2, "text/html");
    if (t3.textContent === e2)
      return !t3.querySelector("*");
  }
};
var kt = /Mac|^iP/.test(navigator.platform) ? (t2) => t2.metaKey : (t2) => t2.ctrlKey;
var Rt = (t2) => setTimeout(t2, 1);
var Et = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  const e2 = {};
  for (const i2 in t2) {
    const n2 = t2[i2];
    e2[i2] = n2;
  }
  return e2;
};
var St = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (Object.keys(t2).length !== Object.keys(e2).length)
    return false;
  for (const i2 in t2) {
    if (t2[i2] !== e2[i2])
      return false;
  }
  return true;
};
var Lt = function(t2) {
  if (null != t2)
    return Array.isArray(t2) || (t2 = [t2, t2]), [Tt(t2[0]), Tt(null != t2[1] ? t2[1] : t2[0])];
};
var Dt = function(t2) {
  if (null == t2)
    return;
  const [e2, i2] = Lt(t2);
  return Bt(e2, i2);
};
var wt = function(t2, e2) {
  if (null == t2 || null == e2)
    return;
  const [i2, n2] = Lt(t2), [r2, o2] = Lt(e2);
  return Bt(i2, r2) && Bt(n2, o2);
};
var Tt = function(t2) {
  return "number" == typeof t2 ? t2 : Et(t2);
};
var Bt = function(t2, e2) {
  return "number" == typeof t2 ? t2 === e2 : St(t2, e2);
};
var Ft = class extends H {
  constructor() {
    super(...arguments), this.update = this.update.bind(this), this.selectionManagers = [];
  }
  start() {
    this.started || (this.started = true, document.addEventListener("selectionchange", this.update, true));
  }
  stop() {
    if (this.started)
      return this.started = false, document.removeEventListener("selectionchange", this.update, true);
  }
  registerSelectionManager(t2) {
    if (!this.selectionManagers.includes(t2))
      return this.selectionManagers.push(t2), this.start();
  }
  unregisterSelectionManager(t2) {
    if (this.selectionManagers = this.selectionManagers.filter((e2) => e2 !== t2), 0 === this.selectionManagers.length)
      return this.stop();
  }
  notifySelectionManagersOfSelectionChange() {
    return this.selectionManagers.map((t2) => t2.selectionDidChange());
  }
  update() {
    this.notifySelectionManagersOfSelectionChange();
  }
  reset() {
    this.update();
  }
};
var Pt = new Ft();
var It = function() {
  const t2 = window.getSelection();
  if (t2.rangeCount > 0)
    return t2;
};
var Nt = function() {
  var t2;
  const e2 = null === (t2 = It()) || void 0 === t2 ? void 0 : t2.getRangeAt(0);
  if (e2 && !Mt(e2))
    return e2;
};
var Ot = function(t2) {
  const e2 = window.getSelection();
  return e2.removeAllRanges(), e2.addRange(t2), Pt.update();
};
var Mt = (t2) => jt(t2.startContainer) || jt(t2.endContainer);
var jt = (t2) => !Object.getPrototypeOf(t2);
var Wt = (t2) => t2.replace(new RegExp("".concat(h), "g"), "").replace(new RegExp("".concat(d), "g"), " ");
var Ut = new RegExp("[^\\S".concat(d, "]"));
var qt = (t2) => t2.replace(new RegExp("".concat(Ut.source), "g"), " ").replace(/\ {2,}/g, " ");
var Vt = function(t2, e2) {
  if (t2.isEqualTo(e2))
    return ["", ""];
  const i2 = Ht(t2, e2), { length: n2 } = i2.utf16String;
  let r2;
  if (n2) {
    const { offset: o2 } = i2, s2 = t2.codepoints.slice(0, o2).concat(t2.codepoints.slice(o2 + n2));
    r2 = Ht(e2, X.fromCodepoints(s2));
  } else
    r2 = Ht(e2, t2);
  return [i2.utf16String.toString(), r2.utf16String.toString()];
};
var Ht = function(t2, e2) {
  let i2 = 0, n2 = t2.length, r2 = e2.length;
  for (; i2 < n2 && t2.charAt(i2).isEqualTo(e2.charAt(i2)); )
    i2++;
  for (; n2 > i2 + 1 && t2.charAt(n2 - 1).isEqualTo(e2.charAt(r2 - 1)); )
    n2--, r2--;
  return { utf16String: t2.slice(i2, n2), offset: i2 };
};
var zt = class _zt extends nt {
  static fromCommonAttributesOfObjects() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    if (!t2.length)
      return new this();
    let e2 = Gt(t2[0]), i2 = e2.getKeys();
    return t2.slice(1).forEach((t3) => {
      i2 = e2.getKeysCommonToHash(Gt(t3)), e2 = e2.slice(i2);
    }), e2;
  }
  static box(t2) {
    return Gt(t2);
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(...arguments), this.values = Kt(t2);
  }
  add(t2, e2) {
    return this.merge(_t(t2, e2));
  }
  remove(t2) {
    return new _zt(Kt(this.values, t2));
  }
  get(t2) {
    return this.values[t2];
  }
  has(t2) {
    return t2 in this.values;
  }
  merge(t2) {
    return new _zt(Jt(this.values, $t(t2)));
  }
  slice(t2) {
    const e2 = {};
    return Array.from(t2).forEach((t3) => {
      this.has(t3) && (e2[t3] = this.values[t3]);
    }), new _zt(e2);
  }
  getKeys() {
    return Object.keys(this.values);
  }
  getKeysCommonToHash(t2) {
    return t2 = Gt(t2), this.getKeys().filter((e2) => this.values[e2] === t2.values[e2]);
  }
  isEqualTo(t2) {
    return rt(this.toArray(), Gt(t2).toArray());
  }
  isEmpty() {
    return 0 === this.getKeys().length;
  }
  toArray() {
    if (!this.array) {
      const t2 = [];
      for (const e2 in this.values) {
        const i2 = this.values[e2];
        t2.push(t2.push(e2, i2));
      }
      this.array = t2.slice(0);
    }
    return this.array;
  }
  toObject() {
    return Kt(this.values);
  }
  toJSON() {
    return this.toObject();
  }
  contentsForInspection() {
    return { values: JSON.stringify(this.values) };
  }
};
var _t = function(t2, e2) {
  const i2 = {};
  return i2[t2] = e2, i2;
};
var Jt = function(t2, e2) {
  const i2 = Kt(t2);
  for (const t3 in e2) {
    const n2 = e2[t3];
    i2[t3] = n2;
  }
  return i2;
};
var Kt = function(t2, e2) {
  const i2 = {};
  return Object.keys(t2).sort().forEach((n2) => {
    n2 !== e2 && (i2[n2] = t2[n2]);
  }), i2;
};
var Gt = function(t2) {
  return t2 instanceof zt ? t2 : new zt(t2);
};
var $t = function(t2) {
  return t2 instanceof zt ? t2.values : t2;
};
var Xt = class {
  static groupObjects() {
    let t2, e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], { depth: i2, asTree: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    n2 && null == i2 && (i2 = 0);
    const r2 = [];
    return Array.from(e2).forEach((e3) => {
      var o2;
      if (t2) {
        var s2, a2, l2;
        if (null !== (s2 = e3.canBeGrouped) && void 0 !== s2 && s2.call(e3, i2) && null !== (a2 = (l2 = t2[t2.length - 1]).canBeGroupedWith) && void 0 !== a2 && a2.call(l2, e3, i2))
          return void t2.push(e3);
        r2.push(new this(t2, { depth: i2, asTree: n2 })), t2 = null;
      }
      null !== (o2 = e3.canBeGrouped) && void 0 !== o2 && o2.call(e3, i2) ? t2 = [e3] : r2.push(e3);
    }), t2 && r2.push(new this(t2, { depth: i2, asTree: n2 })), r2;
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], { depth: e2, asTree: i2 } = arguments.length > 1 ? arguments[1] : void 0;
    this.objects = t2, i2 && (this.depth = e2, this.objects = this.constructor.groupObjects(this.objects, { asTree: i2, depth: this.depth + 1 }));
  }
  getObjects() {
    return this.objects;
  }
  getDepth() {
    return this.depth;
  }
  getCacheKey() {
    const t2 = ["objectGroup"];
    return Array.from(this.getObjects()).forEach((e2) => {
      t2.push(e2.getCacheKey());
    }), t2.join("/");
  }
};
var Yt = class extends H {
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), this.objects = {}, Array.from(t2).forEach((t3) => {
      const e2 = JSON.stringify(t3);
      null == this.objects[e2] && (this.objects[e2] = t3);
    });
  }
  find(t2) {
    const e2 = JSON.stringify(t2);
    return this.objects[e2];
  }
};
var Qt = class {
  constructor(t2) {
    this.reset(t2);
  }
  add(t2) {
    const e2 = Zt(t2);
    this.elements[e2] = t2;
  }
  remove(t2) {
    const e2 = Zt(t2), i2 = this.elements[e2];
    if (i2)
      return delete this.elements[e2], i2;
  }
  reset() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return this.elements = {}, Array.from(t2).forEach((t3) => {
      this.add(t3);
    }), t2;
  }
};
var Zt = (t2) => t2.dataset.trixStoreKey;
var te = class extends H {
  isPerforming() {
    return true === this.performing;
  }
  hasPerformed() {
    return true === this.performed;
  }
  hasSucceeded() {
    return this.performed && this.succeeded;
  }
  hasFailed() {
    return this.performed && !this.succeeded;
  }
  getPromise() {
    return this.promise || (this.promise = new Promise((t2, e2) => (this.performing = true, this.perform((i2, n2) => {
      this.succeeded = i2, this.performing = false, this.performed = true, this.succeeded ? t2(n2) : e2(n2);
    })))), this.promise;
  }
  perform(t2) {
    return t2(false);
  }
  release() {
    var t2, e2;
    null === (t2 = this.promise) || void 0 === t2 || null === (e2 = t2.cancel) || void 0 === e2 || e2.call(t2), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
  }
};
te.proxyMethod("getPromise().then"), te.proxyMethod("getPromise().catch");
var ee = class extends H {
  constructor(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(...arguments), this.object = t2, this.options = e2, this.childViews = [], this.rootView = this;
  }
  getNodes() {
    return this.nodes || (this.nodes = this.createNodes()), this.nodes.map((t2) => t2.cloneNode(true));
  }
  invalidate() {
    var t2;
    return this.nodes = null, this.childViews = [], null === (t2 = this.parentView) || void 0 === t2 ? void 0 : t2.invalidate();
  }
  invalidateViewForObject(t2) {
    var e2;
    return null === (e2 = this.findViewForObject(t2)) || void 0 === e2 ? void 0 : e2.invalidate();
  }
  findOrCreateCachedChildView(t2, e2, i2) {
    let n2 = this.getCachedViewForObject(e2);
    return n2 ? this.recordChildView(n2) : (n2 = this.createChildView(...arguments), this.cacheViewForObject(n2, e2)), n2;
  }
  createChildView(t2, e2) {
    let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    e2 instanceof Xt && (i2.viewClass = t2, t2 = ie);
    const n2 = new t2(e2, i2);
    return this.recordChildView(n2);
  }
  recordChildView(t2) {
    return t2.parentView = this, t2.rootView = this.rootView, this.childViews.push(t2), t2;
  }
  getAllChildViews() {
    let t2 = [];
    return this.childViews.forEach((e2) => {
      t2.push(e2), t2 = t2.concat(e2.getAllChildViews());
    }), t2;
  }
  findElement() {
    return this.findElementForObject(this.object);
  }
  findElementForObject(t2) {
    const e2 = null == t2 ? void 0 : t2.id;
    if (e2)
      return this.rootView.element.querySelector("[data-trix-id='".concat(e2, "']"));
  }
  findViewForObject(t2) {
    for (const e2 of this.getAllChildViews())
      if (e2.object === t2)
        return e2;
  }
  getViewCache() {
    return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? (this.viewCache || (this.viewCache = {}), this.viewCache) : void 0;
  }
  isViewCachingEnabled() {
    return false !== this.shouldCacheViews;
  }
  enableViewCaching() {
    this.shouldCacheViews = true;
  }
  disableViewCaching() {
    this.shouldCacheViews = false;
  }
  getCachedViewForObject(t2) {
    var e2;
    return null === (e2 = this.getViewCache()) || void 0 === e2 ? void 0 : e2[t2.getCacheKey()];
  }
  cacheViewForObject(t2, e2) {
    const i2 = this.getViewCache();
    i2 && (i2[e2.getCacheKey()] = t2);
  }
  garbageCollectCachedViews() {
    const t2 = this.getViewCache();
    if (t2) {
      const e2 = this.getAllChildViews().concat(this).map((t3) => t3.object.getCacheKey());
      for (const i2 in t2)
        e2.includes(i2) || delete t2[i2];
    }
  }
};
var ie = class extends ee {
  constructor() {
    super(...arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
  }
  getChildViews() {
    return this.childViews.length || Array.from(this.objectGroup.getObjects()).forEach((t2) => {
      this.findOrCreateCachedChildView(this.viewClass, t2, this.options);
    }), this.childViews;
  }
  createNodes() {
    const t2 = this.createContainerElement();
    return this.getChildViews().forEach((e2) => {
      Array.from(e2.getNodes()).forEach((e3) => {
        t2.appendChild(e3);
      });
    }), [t2];
  }
  createContainerElement() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.objectGroup.getDepth();
    return this.getChildViews()[0].createContainerElement(t2);
  }
};
var { css: ne } = V;
var re = class extends ee {
  constructor() {
    super(...arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
  }
  createContentNodes() {
    return [];
  }
  createNodes() {
    let t2;
    const e2 = t2 = S({ tagName: "figure", className: this.getClassName(), data: this.getData(), editable: false }), i2 = this.getHref();
    return i2 && (t2 = S({ tagName: "a", editable: false, attributes: { href: i2, tabindex: -1 } }), e2.appendChild(t2)), this.attachment.hasContent() ? t2.innerHTML = this.attachment.getContent() : this.createContentNodes().forEach((e3) => {
      t2.appendChild(e3);
    }), t2.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = S({ tagName: "progress", attributes: { class: ne.attachmentProgress, value: this.attachment.getUploadProgress(), max: 100 }, data: { trixMutable: true, trixStoreKey: ["progressElement", this.attachment.id].join("/") } }), e2.appendChild(this.progressElement)), [oe("left"), e2, oe("right")];
  }
  createCaptionElement() {
    const t2 = S({ tagName: "figcaption", className: ne.attachmentCaption }), e2 = this.attachmentPiece.getCaption();
    if (e2)
      t2.classList.add("".concat(ne.attachmentCaption, "--edited")), t2.textContent = e2;
    else {
      let e3, i2;
      const n2 = this.getCaptionConfig();
      if (n2.name && (e3 = this.attachment.getFilename()), n2.size && (i2 = this.attachment.getFormattedFilesize()), e3) {
        const i3 = S({ tagName: "span", className: ne.attachmentName, textContent: e3 });
        t2.appendChild(i3);
      }
      if (i2) {
        e3 && t2.appendChild(document.createTextNode(" "));
        const n3 = S({ tagName: "span", className: ne.attachmentSize, textContent: i2 });
        t2.appendChild(n3);
      }
    }
    return t2;
  }
  getClassName() {
    const t2 = [ne.attachment, "".concat(ne.attachment, "--").concat(this.attachment.getType())], e2 = this.attachment.getExtension();
    return e2 && t2.push("".concat(ne.attachment, "--").concat(e2)), t2.join(" ");
  }
  getData() {
    const t2 = { trixAttachment: JSON.stringify(this.attachment), trixContentType: this.attachment.getContentType(), trixId: this.attachment.id }, { attributes: e2 } = this.attachmentPiece;
    return e2.isEmpty() || (t2.trixAttributes = JSON.stringify(e2)), this.attachment.isPending() && (t2.trixSerialize = false), t2;
  }
  getHref() {
    if (!se(this.attachment.getContent(), "a"))
      return this.attachment.getHref();
  }
  getCaptionConfig() {
    var t2;
    const e2 = this.attachment.getType(), n2 = Et(null === (t2 = i[e2]) || void 0 === t2 ? void 0 : t2.caption);
    return "file" === e2 && (n2.name = true), n2;
  }
  findProgressElement() {
    var t2;
    return null === (t2 = this.findElement()) || void 0 === t2 ? void 0 : t2.querySelector("progress");
  }
  attachmentDidChangeUploadProgress() {
    const t2 = this.attachment.getUploadProgress(), e2 = this.findProgressElement();
    e2 && (e2.value = t2);
  }
};
var oe = (t2) => S({ tagName: "span", textContent: h, data: { trixCursorTarget: t2, trixSerialize: false } });
var se = function(t2, e2) {
  const i2 = S("div");
  return i2.innerHTML = t2 || "", i2.querySelector(e2);
};
var ae = class extends re {
  constructor() {
    super(...arguments), this.attachment.previewDelegate = this;
  }
  createContentNodes() {
    return this.image = S({ tagName: "img", attributes: { src: "" }, data: { trixMutable: true } }), this.refresh(this.image), [this.image];
  }
  createCaptionElement() {
    const t2 = super.createCaptionElement(...arguments);
    return t2.textContent || t2.setAttribute("data-trix-placeholder", l.captionPlaceholder), t2;
  }
  refresh(t2) {
    var e2;
    t2 || (t2 = null === (e2 = this.findElement()) || void 0 === e2 ? void 0 : e2.querySelector("img"));
    if (t2)
      return this.updateAttributesForImage(t2);
  }
  updateAttributesForImage(t2) {
    const e2 = this.attachment.getURL(), i2 = this.attachment.getPreviewURL();
    if (t2.src = i2 || e2, i2 === e2)
      t2.removeAttribute("data-trix-serialized-attributes");
    else {
      const i3 = JSON.stringify({ src: e2 });
      t2.setAttribute("data-trix-serialized-attributes", i3);
    }
    const n2 = this.attachment.getWidth(), r2 = this.attachment.getHeight();
    null != n2 && (t2.width = n2), null != r2 && (t2.height = r2);
    const o2 = ["imageElement", this.attachment.id, t2.src, t2.width, t2.height].join("/");
    t2.dataset.trixStoreKey = o2;
  }
  attachmentDidChangeAttributes() {
    return this.refresh(this.image), this.refresh();
  }
};
var le = class extends ee {
  constructor() {
    super(...arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), this.textConfig = this.options.textConfig, this.context = this.options.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
  }
  createNodes() {
    let t2 = this.attachment ? this.createAttachmentNodes() : this.createStringNodes();
    const e2 = this.createElement();
    if (e2) {
      const i2 = function(t3) {
        for (; null !== (e3 = t3) && void 0 !== e3 && e3.firstElementChild; ) {
          var e3;
          t3 = t3.firstElementChild;
        }
        return t3;
      }(e2);
      Array.from(t2).forEach((t3) => {
        i2.appendChild(t3);
      }), t2 = [e2];
    }
    return t2;
  }
  createAttachmentNodes() {
    const t2 = this.attachment.isPreviewable() ? ae : re;
    return this.createChildView(t2, this.piece.attachment, { piece: this.piece }).getNodes();
  }
  createStringNodes() {
    var t2;
    if (null !== (t2 = this.textConfig) && void 0 !== t2 && t2.plaintext)
      return [document.createTextNode(this.string)];
    {
      const t3 = [], e2 = this.string.split("\n");
      for (let i2 = 0; i2 < e2.length; i2++) {
        const n2 = e2[i2];
        if (i2 > 0) {
          const e3 = S("br");
          t3.push(e3);
        }
        if (n2.length) {
          const e3 = document.createTextNode(this.preserveSpaces(n2));
          t3.push(e3);
        }
      }
      return t3;
    }
  }
  createElement() {
    let t2, e2, i2;
    const n2 = {};
    for (e2 in this.attributes) {
      i2 = this.attributes[e2];
      const o2 = pt(e2);
      if (o2) {
        if (o2.tagName) {
          var r2;
          const e3 = S(o2.tagName);
          r2 ? (r2.appendChild(e3), r2 = e3) : t2 = r2 = e3;
        }
        if (o2.styleProperty && (n2[o2.styleProperty] = i2), o2.style)
          for (e2 in o2.style)
            i2 = o2.style[e2], n2[e2] = i2;
      }
    }
    if (Object.keys(n2).length)
      for (e2 in t2 || (t2 = S("span")), n2)
        i2 = n2[e2], t2.style[e2] = i2;
    return t2;
  }
  createContainerElement() {
    for (const t2 in this.attributes) {
      const e2 = this.attributes[t2], i2 = pt(t2);
      if (i2 && i2.groupTagName) {
        const n2 = {};
        return n2[t2] = e2, S(i2.groupTagName, n2);
      }
    }
  }
  preserveSpaces(t2) {
    return this.context.isLast && (t2 = t2.replace(/\ $/, d)), t2 = t2.replace(/(\S)\ {3}(\S)/g, "$1 ".concat(d, " $2")).replace(/\ {2}/g, "".concat(d, " ")).replace(/\ {2}/g, " ".concat(d)), (this.context.isFirst || this.context.followsWhitespace) && (t2 = t2.replace(/^\ /, d)), t2;
  }
};
var ce = class extends ee {
  constructor() {
    super(...arguments), this.text = this.object, this.textConfig = this.options.textConfig;
  }
  createNodes() {
    const t2 = [], e2 = Xt.groupObjects(this.getPieces()), i2 = e2.length - 1;
    for (let r2 = 0; r2 < e2.length; r2++) {
      const o2 = e2[r2], s2 = {};
      0 === r2 && (s2.isFirst = true), r2 === i2 && (s2.isLast = true), ue(n2) && (s2.followsWhitespace = true);
      const a2 = this.findOrCreateCachedChildView(le, o2, { textConfig: this.textConfig, context: s2 });
      t2.push(...Array.from(a2.getNodes() || []));
      var n2 = o2;
    }
    return t2;
  }
  getPieces() {
    return Array.from(this.text.getPieces()).filter((t2) => !t2.hasAttribute("blockBreak"));
  }
};
var ue = (t2) => /\s$/.test(null == t2 ? void 0 : t2.toString());
var { css: he } = V;
var de = class extends ee {
  constructor() {
    super(...arguments), this.block = this.object, this.attributes = this.block.getAttributes();
  }
  createNodes() {
    const t2 = [document.createComment("block")];
    if (this.block.isEmpty())
      t2.push(S("br"));
    else {
      var e2;
      const i2 = null === (e2 = gt(this.block.getLastAttribute())) || void 0 === e2 ? void 0 : e2.text, n2 = this.findOrCreateCachedChildView(ce, this.block.text, { textConfig: i2 });
      t2.push(...Array.from(n2.getNodes() || [])), this.shouldAddExtraNewlineElement() && t2.push(S("br"));
    }
    if (this.attributes.length)
      return t2;
    {
      let e3;
      const { tagName: i2 } = n.default;
      this.block.isRTL() && (e3 = { dir: "rtl" });
      const r2 = S({ tagName: i2, attributes: e3 });
      return t2.forEach((t3) => r2.appendChild(t3)), [r2];
    }
  }
  createContainerElement(t2) {
    const e2 = {};
    let i2;
    const n2 = this.attributes[t2], { tagName: r2, htmlAttributes: o2 = [] } = gt(n2);
    if (0 === t2 && this.block.isRTL() && Object.assign(e2, { dir: "rtl" }), "attachmentGallery" === n2) {
      const t3 = this.block.getBlockBreakPosition();
      i2 = "".concat(he.attachmentGallery, " ").concat(he.attachmentGallery, "--").concat(t3);
    }
    return Object.entries(this.block.htmlAttributes).forEach((t3) => {
      let [i3, n3] = t3;
      o2.includes(i3) && (e2[i3] = n3);
    }), S({ tagName: r2, className: i2, attributes: e2 });
  }
  shouldAddExtraNewlineElement() {
    return /\n\n$/.test(this.block.toString());
  }
};
var ge = class extends ee {
  static render(t2) {
    const e2 = S("div"), i2 = new this(t2, { element: e2 });
    return i2.render(), i2.sync(), e2;
  }
  constructor() {
    super(...arguments), this.element = this.options.element, this.elementStore = new Qt(), this.setDocument(this.object);
  }
  setDocument(t2) {
    t2.isEqualTo(this.document) || (this.document = this.object = t2);
  }
  render() {
    if (this.childViews = [], this.shadowElement = S("div"), !this.document.isEmpty()) {
      const t2 = Xt.groupObjects(this.document.getBlocks(), { asTree: true });
      Array.from(t2).forEach((t3) => {
        const e2 = this.findOrCreateCachedChildView(de, t3);
        Array.from(e2.getNodes()).map((t4) => this.shadowElement.appendChild(t4));
      });
    }
  }
  isSynced() {
    return pe(this.shadowElement, this.element);
  }
  sync() {
    const t2 = this.createDocumentFragmentForSync();
    for (; this.element.lastChild; )
      this.element.removeChild(this.element.lastChild);
    return this.element.appendChild(t2), this.didSync();
  }
  didSync() {
    return this.elementStore.reset(me(this.element)), Rt(() => this.garbageCollectCachedViews());
  }
  createDocumentFragmentForSync() {
    const t2 = document.createDocumentFragment();
    return Array.from(this.shadowElement.childNodes).forEach((e2) => {
      t2.appendChild(e2.cloneNode(true));
    }), Array.from(me(t2)).forEach((t3) => {
      const e2 = this.elementStore.remove(t3);
      e2 && t3.parentNode.replaceChild(e2, t3);
    }), t2;
  }
};
var me = (t2) => t2.querySelectorAll("[data-trix-store-key]");
var pe = (t2, e2) => fe(t2.innerHTML) === fe(e2.innerHTML);
var fe = (t2) => t2.replace(/&nbsp;/g, " ");
function Ae(t2, e2, i2) {
  return (e2 = xe(e2)) in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
}
function xe(t2) {
  var e2 = function(t3, e3) {
    if ("object" != typeof t3 || null === t3)
      return t3;
    var i2 = t3[Symbol.toPrimitive];
    if (void 0 !== i2) {
      var n2 = i2.call(t3, e3 || "default");
      if ("object" != typeof n2)
        return n2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e3 ? String : Number)(t3);
  }(t2, "string");
  return "symbol" == typeof e2 ? e2 : String(e2);
}
var ye = class extends nt {
  static registerType(t2, e2) {
    e2.type = t2, this.types[t2] = e2;
  }
  static fromJSON(t2) {
    const e2 = this.types[t2.type];
    if (e2)
      return e2.fromJSON(t2);
  }
  constructor(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(...arguments), this.attributes = zt.box(e2);
  }
  copyWithAttributes(t2) {
    return new this.constructor(this.getValue(), t2);
  }
  copyWithAdditionalAttributes(t2) {
    return this.copyWithAttributes(this.attributes.merge(t2));
  }
  copyWithoutAttribute(t2) {
    return this.copyWithAttributes(this.attributes.remove(t2));
  }
  copy() {
    return this.copyWithAttributes(this.attributes);
  }
  getAttribute(t2) {
    return this.attributes.get(t2);
  }
  getAttributesHash() {
    return this.attributes;
  }
  getAttributes() {
    return this.attributes.toObject();
  }
  hasAttribute(t2) {
    return this.attributes.has(t2);
  }
  hasSameStringValueAsPiece(t2) {
    return t2 && this.toString() === t2.toString();
  }
  hasSameAttributesAsPiece(t2) {
    return t2 && (this.attributes === t2.attributes || this.attributes.isEqualTo(t2.attributes));
  }
  isBlockBreak() {
    return false;
  }
  isEqualTo(t2) {
    return super.isEqualTo(...arguments) || this.hasSameConstructorAs(t2) && this.hasSameStringValueAsPiece(t2) && this.hasSameAttributesAsPiece(t2);
  }
  isEmpty() {
    return 0 === this.length;
  }
  isSerializable() {
    return true;
  }
  toJSON() {
    return { type: this.constructor.type, attributes: this.getAttributes() };
  }
  contentsForInspection() {
    return { type: this.constructor.type, attributes: this.attributes.inspect() };
  }
  canBeGrouped() {
    return this.hasAttribute("href");
  }
  canBeGroupedWith(t2) {
    return this.getAttribute("href") === t2.getAttribute("href");
  }
  getLength() {
    return this.length;
  }
  canBeConsolidatedWith(t2) {
    return false;
  }
};
Ae(ye, "types", {});
var Ce = class extends te {
  constructor(t2) {
    super(...arguments), this.url = t2;
  }
  perform(t2) {
    const e2 = new Image();
    e2.onload = () => (e2.width = this.width = e2.naturalWidth, e2.height = this.height = e2.naturalHeight, t2(true, e2)), e2.onerror = () => t2(false), e2.src = this.url;
  }
};
var ke = class _ke extends nt {
  static attachmentForFile(t2) {
    const e2 = new this(this.attributesForFile(t2));
    return e2.setFile(t2), e2;
  }
  static attributesForFile(t2) {
    return new zt({ filename: t2.name, filesize: t2.size, contentType: t2.type });
  }
  static fromJSON(t2) {
    return new this(t2);
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t2), this.releaseFile = this.releaseFile.bind(this), this.attributes = zt.box(t2), this.didChangeAttributes();
  }
  getAttribute(t2) {
    return this.attributes.get(t2);
  }
  hasAttribute(t2) {
    return this.attributes.has(t2);
  }
  getAttributes() {
    return this.attributes.toObject();
  }
  setAttributes() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e2 = this.attributes.merge(t2);
    var i2, n2, r2, o2;
    if (!this.attributes.isEqualTo(e2))
      return this.attributes = e2, this.didChangeAttributes(), null === (i2 = this.previewDelegate) || void 0 === i2 || null === (n2 = i2.attachmentDidChangeAttributes) || void 0 === n2 || n2.call(i2, this), null === (r2 = this.delegate) || void 0 === r2 || null === (o2 = r2.attachmentDidChangeAttributes) || void 0 === o2 ? void 0 : o2.call(r2, this);
  }
  didChangeAttributes() {
    if (this.isPreviewable())
      return this.preloadURL();
  }
  isPending() {
    return null != this.file && !(this.getURL() || this.getHref());
  }
  isPreviewable() {
    return this.attributes.has("previewable") ? this.attributes.get("previewable") : _ke.previewablePattern.test(this.getContentType());
  }
  getType() {
    return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
  }
  getURL() {
    return this.attributes.get("url");
  }
  getHref() {
    return this.attributes.get("href");
  }
  getFilename() {
    return this.attributes.get("filename") || "";
  }
  getFilesize() {
    return this.attributes.get("filesize");
  }
  getFormattedFilesize() {
    const t2 = this.attributes.get("filesize");
    return "number" == typeof t2 ? u.formatter(t2) : "";
  }
  getExtension() {
    var t2;
    return null === (t2 = this.getFilename().match(/\.(\w+)$/)) || void 0 === t2 ? void 0 : t2[1].toLowerCase();
  }
  getContentType() {
    return this.attributes.get("contentType");
  }
  hasContent() {
    return this.attributes.has("content");
  }
  getContent() {
    return this.attributes.get("content");
  }
  getWidth() {
    return this.attributes.get("width");
  }
  getHeight() {
    return this.attributes.get("height");
  }
  getFile() {
    return this.file;
  }
  setFile(t2) {
    if (this.file = t2, this.isPreviewable())
      return this.preloadFile();
  }
  releaseFile() {
    this.releasePreloadedFile(), this.file = null;
  }
  getUploadProgress() {
    return null != this.uploadProgress ? this.uploadProgress : 0;
  }
  setUploadProgress(t2) {
    var e2, i2;
    if (this.uploadProgress !== t2)
      return this.uploadProgress = t2, null === (e2 = this.uploadProgressDelegate) || void 0 === e2 || null === (i2 = e2.attachmentDidChangeUploadProgress) || void 0 === i2 ? void 0 : i2.call(e2, this);
  }
  toJSON() {
    return this.getAttributes();
  }
  getCacheKey() {
    return [super.getCacheKey(...arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
  }
  getPreviewURL() {
    return this.previewURL || this.preloadingURL;
  }
  setPreviewURL(t2) {
    var e2, i2, n2, r2;
    if (t2 !== this.getPreviewURL())
      return this.previewURL = t2, null === (e2 = this.previewDelegate) || void 0 === e2 || null === (i2 = e2.attachmentDidChangeAttributes) || void 0 === i2 || i2.call(e2, this), null === (n2 = this.delegate) || void 0 === n2 || null === (r2 = n2.attachmentDidChangePreviewURL) || void 0 === r2 ? void 0 : r2.call(n2, this);
  }
  preloadURL() {
    return this.preload(this.getURL(), this.releaseFile);
  }
  preloadFile() {
    if (this.file)
      return this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL);
  }
  releasePreloadedFile() {
    this.fileObjectURL && (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null);
  }
  preload(t2, e2) {
    if (t2 && t2 !== this.getPreviewURL()) {
      this.preloadingURL = t2;
      return new Ce(t2).then((i2) => {
        let { width: n2, height: r2 } = i2;
        return this.getWidth() && this.getHeight() || this.setAttributes({ width: n2, height: r2 }), this.preloadingURL = null, this.setPreviewURL(t2), null == e2 ? void 0 : e2();
      }).catch(() => (this.preloadingURL = null, null == e2 ? void 0 : e2()));
    }
  }
};
Ae(ke, "previewablePattern", /^image(\/(gif|png|webp|jpe?g)|$)/);
var Re = class _Re extends ye {
  static fromJSON(t2) {
    return new this(ke.fromJSON(t2.attachment), t2.attributes);
  }
  constructor(t2) {
    super(...arguments), this.attachment = t2, this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
  }
  ensureAttachmentExclusivelyHasAttribute(t2) {
    this.hasAttribute(t2) && (this.attachment.hasAttribute(t2) || this.attachment.setAttributes(this.attributes.slice([t2])), this.attributes = this.attributes.remove(t2));
  }
  removeProhibitedAttributes() {
    const t2 = this.attributes.slice(_Re.permittedAttributes);
    t2.isEqualTo(this.attributes) || (this.attributes = t2);
  }
  getValue() {
    return this.attachment;
  }
  isSerializable() {
    return !this.attachment.isPending();
  }
  getCaption() {
    return this.attributes.get("caption") || "";
  }
  isEqualTo(t2) {
    var e2;
    return super.isEqualTo(t2) && this.attachment.id === (null == t2 || null === (e2 = t2.attachment) || void 0 === e2 ? void 0 : e2.id);
  }
  toString() {
    return "￼";
  }
  toJSON() {
    const t2 = super.toJSON(...arguments);
    return t2.attachment = this.attachment, t2;
  }
  getCacheKey() {
    return [super.getCacheKey(...arguments), this.attachment.getCacheKey()].join("/");
  }
  toConsole() {
    return JSON.stringify(this.toString());
  }
};
Ae(Re, "permittedAttributes", ["caption", "presentation"]), ye.registerType("attachment", Re);
var Ee = class extends ye {
  static fromJSON(t2) {
    return new this(t2.string, t2.attributes);
  }
  constructor(t2) {
    super(...arguments), this.string = ((t3) => t3.replace(/\r\n?/g, "\n"))(t2), this.length = this.string.length;
  }
  getValue() {
    return this.string;
  }
  toString() {
    return this.string.toString();
  }
  isBlockBreak() {
    return "\n" === this.toString() && true === this.getAttribute("blockBreak");
  }
  toJSON() {
    const t2 = super.toJSON(...arguments);
    return t2.string = this.string, t2;
  }
  canBeConsolidatedWith(t2) {
    return t2 && this.hasSameConstructorAs(t2) && this.hasSameAttributesAsPiece(t2);
  }
  consolidateWith(t2) {
    return new this.constructor(this.toString() + t2.toString(), this.attributes);
  }
  splitAtOffset(t2) {
    let e2, i2;
    return 0 === t2 ? (e2 = null, i2 = this) : t2 === this.length ? (e2 = this, i2 = null) : (e2 = new this.constructor(this.string.slice(0, t2), this.attributes), i2 = new this.constructor(this.string.slice(t2), this.attributes)), [e2, i2];
  }
  toConsole() {
    let { string: t2 } = this;
    return t2.length > 15 && (t2 = t2.slice(0, 14) + "…"), JSON.stringify(t2.toString());
  }
};
ye.registerType("string", Ee);
var Se = class extends nt {
  static box(t2) {
    return t2 instanceof this ? t2 : new this(t2);
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), this.objects = t2.slice(0), this.length = this.objects.length;
  }
  indexOf(t2) {
    return this.objects.indexOf(t2);
  }
  splice() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
      e2[i2] = arguments[i2];
    return new this.constructor(ot(this.objects, ...e2));
  }
  eachObject(t2) {
    return this.objects.map((e2, i2) => t2(e2, i2));
  }
  insertObjectAtIndex(t2, e2) {
    return this.splice(e2, 0, t2);
  }
  insertSplittableListAtIndex(t2, e2) {
    return this.splice(e2, 0, ...t2.objects);
  }
  insertSplittableListAtPosition(t2, e2) {
    const [i2, n2] = this.splitObjectAtPosition(e2);
    return new this.constructor(i2).insertSplittableListAtIndex(t2, n2);
  }
  editObjectAtIndex(t2, e2) {
    return this.replaceObjectAtIndex(e2(this.objects[t2]), t2);
  }
  replaceObjectAtIndex(t2, e2) {
    return this.splice(e2, 1, t2);
  }
  removeObjectAtIndex(t2) {
    return this.splice(t2, 1);
  }
  getObjectAtIndex(t2) {
    return this.objects[t2];
  }
  getSplittableListInRange(t2) {
    const [e2, i2, n2] = this.splitObjectsAtRange(t2);
    return new this.constructor(e2.slice(i2, n2 + 1));
  }
  selectSplittableList(t2) {
    const e2 = this.objects.filter((e3) => t2(e3));
    return new this.constructor(e2);
  }
  removeObjectsInRange(t2) {
    const [e2, i2, n2] = this.splitObjectsAtRange(t2);
    return new this.constructor(e2).splice(i2, n2 - i2 + 1);
  }
  transformObjectsInRange(t2, e2) {
    const [i2, n2, r2] = this.splitObjectsAtRange(t2), o2 = i2.map((t3, i3) => n2 <= i3 && i3 <= r2 ? e2(t3) : t3);
    return new this.constructor(o2);
  }
  splitObjectsAtRange(t2) {
    let e2, [i2, n2, r2] = this.splitObjectAtPosition(De(t2));
    return [i2, e2] = new this.constructor(i2).splitObjectAtPosition(we(t2) + r2), [i2, n2, e2 - 1];
  }
  getObjectAtPosition(t2) {
    const { index: e2 } = this.findIndexAndOffsetAtPosition(t2);
    return this.objects[e2];
  }
  splitObjectAtPosition(t2) {
    let e2, i2;
    const { index: n2, offset: r2 } = this.findIndexAndOffsetAtPosition(t2), o2 = this.objects.slice(0);
    if (null != n2)
      if (0 === r2)
        e2 = n2, i2 = 0;
      else {
        const t3 = this.getObjectAtIndex(n2), [s2, a2] = t3.splitAtOffset(r2);
        o2.splice(n2, 1, s2, a2), e2 = n2 + 1, i2 = s2.getLength() - r2;
      }
    else
      e2 = o2.length, i2 = 0;
    return [o2, e2, i2];
  }
  consolidate() {
    const t2 = [];
    let e2 = this.objects[0];
    return this.objects.slice(1).forEach((i2) => {
      var n2, r2;
      null !== (n2 = (r2 = e2).canBeConsolidatedWith) && void 0 !== n2 && n2.call(r2, i2) ? e2 = e2.consolidateWith(i2) : (t2.push(e2), e2 = i2);
    }), e2 && t2.push(e2), new this.constructor(t2);
  }
  consolidateFromIndexToIndex(t2, e2) {
    const i2 = this.objects.slice(0).slice(t2, e2 + 1), n2 = new this.constructor(i2).consolidate().toArray();
    return this.splice(t2, i2.length, ...n2);
  }
  findIndexAndOffsetAtPosition(t2) {
    let e2, i2 = 0;
    for (e2 = 0; e2 < this.objects.length; e2++) {
      const n2 = i2 + this.objects[e2].getLength();
      if (i2 <= t2 && t2 < n2)
        return { index: e2, offset: t2 - i2 };
      i2 = n2;
    }
    return { index: null, offset: null };
  }
  findPositionAtIndexAndOffset(t2, e2) {
    let i2 = 0;
    for (let n2 = 0; n2 < this.objects.length; n2++) {
      const r2 = this.objects[n2];
      if (n2 < t2)
        i2 += r2.getLength();
      else if (n2 === t2) {
        i2 += e2;
        break;
      }
    }
    return i2;
  }
  getEndPosition() {
    return null == this.endPosition && (this.endPosition = 0, this.objects.forEach((t2) => this.endPosition += t2.getLength())), this.endPosition;
  }
  toString() {
    return this.objects.join("");
  }
  toArray() {
    return this.objects.slice(0);
  }
  toJSON() {
    return this.toArray();
  }
  isEqualTo(t2) {
    return super.isEqualTo(...arguments) || Le(this.objects, null == t2 ? void 0 : t2.objects);
  }
  contentsForInspection() {
    return { objects: "[".concat(this.objects.map((t2) => t2.inspect()).join(", "), "]") };
  }
};
var Le = function(t2) {
  let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  if (t2.length !== e2.length)
    return false;
  let i2 = true;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const r2 = t2[n2];
    i2 && !r2.isEqualTo(e2[n2]) && (i2 = false);
  }
  return i2;
};
var De = (t2) => t2[0];
var we = (t2) => t2[1];
var Te = class extends nt {
  static textForAttachmentWithAttributes(t2, e2) {
    return new this([new Re(t2, e2)]);
  }
  static textForStringWithAttributes(t2, e2) {
    return new this([new Ee(t2, e2)]);
  }
  static fromJSON(t2) {
    return new this(Array.from(t2).map((t3) => ye.fromJSON(t3)));
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments);
    const e2 = t2.filter((t3) => !t3.isEmpty());
    this.pieceList = new Se(e2);
  }
  copy() {
    return this.copyWithPieceList(this.pieceList);
  }
  copyWithPieceList(t2) {
    return new this.constructor(t2.consolidate().toArray());
  }
  copyUsingObjectMap(t2) {
    const e2 = this.getPieces().map((e3) => t2.find(e3) || e3);
    return new this.constructor(e2);
  }
  appendText(t2) {
    return this.insertTextAtPosition(t2, this.getLength());
  }
  insertTextAtPosition(t2, e2) {
    return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t2.pieceList, e2));
  }
  removeTextAtRange(t2) {
    return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t2));
  }
  replaceTextAtRange(t2, e2) {
    return this.removeTextAtRange(e2).insertTextAtPosition(t2, e2[0]);
  }
  moveTextFromRangeToPosition(t2, e2) {
    if (t2[0] <= e2 && e2 <= t2[1])
      return;
    const i2 = this.getTextAtRange(t2), n2 = i2.getLength();
    return t2[0] < e2 && (e2 -= n2), this.removeTextAtRange(t2).insertTextAtPosition(i2, e2);
  }
  addAttributeAtRange(t2, e2, i2) {
    const n2 = {};
    return n2[t2] = e2, this.addAttributesAtRange(n2, i2);
  }
  addAttributesAtRange(t2, e2) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithAdditionalAttributes(t2)));
  }
  removeAttributeAtRange(t2, e2) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithoutAttribute(t2)));
  }
  setAttributesAtRange(t2, e2) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithAttributes(t2)));
  }
  getAttributesAtPosition(t2) {
    var e2;
    return (null === (e2 = this.pieceList.getObjectAtPosition(t2)) || void 0 === e2 ? void 0 : e2.getAttributes()) || {};
  }
  getCommonAttributes() {
    const t2 = Array.from(this.pieceList.toArray()).map((t3) => t3.getAttributes());
    return zt.fromCommonAttributesOfObjects(t2).toObject();
  }
  getCommonAttributesAtRange(t2) {
    return this.getTextAtRange(t2).getCommonAttributes() || {};
  }
  getExpandedRangeForAttributeAtOffset(t2, e2) {
    let i2, n2 = i2 = e2;
    const r2 = this.getLength();
    for (; n2 > 0 && this.getCommonAttributesAtRange([n2 - 1, i2])[t2]; )
      n2--;
    for (; i2 < r2 && this.getCommonAttributesAtRange([e2, i2 + 1])[t2]; )
      i2++;
    return [n2, i2];
  }
  getTextAtRange(t2) {
    return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t2));
  }
  getStringAtRange(t2) {
    return this.pieceList.getSplittableListInRange(t2).toString();
  }
  getStringAtPosition(t2) {
    return this.getStringAtRange([t2, t2 + 1]);
  }
  startsWithString(t2) {
    return this.getStringAtRange([0, t2.length]) === t2;
  }
  endsWithString(t2) {
    const e2 = this.getLength();
    return this.getStringAtRange([e2 - t2.length, e2]) === t2;
  }
  getAttachmentPieces() {
    return this.pieceList.toArray().filter((t2) => !!t2.attachment);
  }
  getAttachments() {
    return this.getAttachmentPieces().map((t2) => t2.attachment);
  }
  getAttachmentAndPositionById(t2) {
    let e2 = 0;
    for (const n2 of this.pieceList.toArray()) {
      var i2;
      if ((null === (i2 = n2.attachment) || void 0 === i2 ? void 0 : i2.id) === t2)
        return { attachment: n2.attachment, position: e2 };
      e2 += n2.length;
    }
    return { attachment: null, position: null };
  }
  getAttachmentById(t2) {
    const { attachment: e2 } = this.getAttachmentAndPositionById(t2);
    return e2;
  }
  getRangeOfAttachment(t2) {
    const e2 = this.getAttachmentAndPositionById(t2.id), i2 = e2.position;
    if (t2 = e2.attachment)
      return [i2, i2 + 1];
  }
  updateAttributesForAttachment(t2, e2) {
    const i2 = this.getRangeOfAttachment(e2);
    return i2 ? this.addAttributesAtRange(t2, i2) : this;
  }
  getLength() {
    return this.pieceList.getEndPosition();
  }
  isEmpty() {
    return 0 === this.getLength();
  }
  isEqualTo(t2) {
    var e2;
    return super.isEqualTo(t2) || (null == t2 || null === (e2 = t2.pieceList) || void 0 === e2 ? void 0 : e2.isEqualTo(this.pieceList));
  }
  isBlockBreak() {
    return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
  }
  eachPiece(t2) {
    return this.pieceList.eachObject(t2);
  }
  getPieces() {
    return this.pieceList.toArray();
  }
  getPieceAtPosition(t2) {
    return this.pieceList.getObjectAtPosition(t2);
  }
  contentsForInspection() {
    return { pieceList: this.pieceList.inspect() };
  }
  toSerializableText() {
    const t2 = this.pieceList.selectSplittableList((t3) => t3.isSerializable());
    return this.copyWithPieceList(t2);
  }
  toString() {
    return this.pieceList.toString();
  }
  toJSON() {
    return this.pieceList.toJSON();
  }
  toConsole() {
    return JSON.stringify(this.pieceList.toArray().map((t2) => JSON.parse(t2.toConsole())));
  }
  getDirection() {
    return at(this.toString());
  }
  isRTL() {
    return "rtl" === this.getDirection();
  }
};
var Be = class _Be extends nt {
  static fromJSON(t2) {
    return new this(Te.fromJSON(t2.text), t2.attributes, t2.htmlAttributes);
  }
  constructor(t2, e2, i2) {
    super(...arguments), this.text = Fe(t2 || new Te()), this.attributes = e2 || [], this.htmlAttributes = i2 || {};
  }
  isEmpty() {
    return this.text.isBlockBreak();
  }
  isEqualTo(t2) {
    return !!super.isEqualTo(t2) || this.text.isEqualTo(null == t2 ? void 0 : t2.text) && rt(this.attributes, null == t2 ? void 0 : t2.attributes) && St(this.htmlAttributes, null == t2 ? void 0 : t2.htmlAttributes);
  }
  copyWithText(t2) {
    return new _Be(t2, this.attributes, this.htmlAttributes);
  }
  copyWithoutText() {
    return this.copyWithText(null);
  }
  copyWithAttributes(t2) {
    return new _Be(this.text, t2, this.htmlAttributes);
  }
  copyWithoutAttributes() {
    return this.copyWithAttributes(null);
  }
  copyUsingObjectMap(t2) {
    const e2 = t2.find(this.text);
    return e2 ? this.copyWithText(e2) : this.copyWithText(this.text.copyUsingObjectMap(t2));
  }
  addAttribute(t2) {
    const e2 = this.attributes.concat(je(t2));
    return this.copyWithAttributes(e2);
  }
  addHTMLAttribute(t2, e2) {
    const i2 = Object.assign({}, this.htmlAttributes, { [t2]: e2 });
    return new _Be(this.text, this.attributes, i2);
  }
  removeAttribute(t2) {
    const { listAttribute: e2 } = gt(t2), i2 = Ue(Ue(this.attributes, t2), e2);
    return this.copyWithAttributes(i2);
  }
  removeLastAttribute() {
    return this.removeAttribute(this.getLastAttribute());
  }
  getLastAttribute() {
    return We(this.attributes);
  }
  getAttributes() {
    return this.attributes.slice(0);
  }
  getAttributeLevel() {
    return this.attributes.length;
  }
  getAttributeAtLevel(t2) {
    return this.attributes[t2 - 1];
  }
  hasAttribute(t2) {
    return this.attributes.includes(t2);
  }
  hasAttributes() {
    return this.getAttributeLevel() > 0;
  }
  getLastNestableAttribute() {
    return We(this.getNestableAttributes());
  }
  getNestableAttributes() {
    return this.attributes.filter((t2) => gt(t2).nestable);
  }
  getNestingLevel() {
    return this.getNestableAttributes().length;
  }
  decreaseNestingLevel() {
    const t2 = this.getLastNestableAttribute();
    return t2 ? this.removeAttribute(t2) : this;
  }
  increaseNestingLevel() {
    const t2 = this.getLastNestableAttribute();
    if (t2) {
      const e2 = this.attributes.lastIndexOf(t2), i2 = ot(this.attributes, e2 + 1, 0, ...je(t2));
      return this.copyWithAttributes(i2);
    }
    return this;
  }
  getListItemAttributes() {
    return this.attributes.filter((t2) => gt(t2).listAttribute);
  }
  isListItem() {
    var t2;
    return null === (t2 = gt(this.getLastAttribute())) || void 0 === t2 ? void 0 : t2.listAttribute;
  }
  isTerminalBlock() {
    var t2;
    return null === (t2 = gt(this.getLastAttribute())) || void 0 === t2 ? void 0 : t2.terminal;
  }
  breaksOnReturn() {
    var t2;
    return null === (t2 = gt(this.getLastAttribute())) || void 0 === t2 ? void 0 : t2.breakOnReturn;
  }
  findLineBreakInDirectionFromPosition(t2, e2) {
    const i2 = this.toString();
    let n2;
    switch (t2) {
      case "forward":
        n2 = i2.indexOf("\n", e2);
        break;
      case "backward":
        n2 = i2.slice(0, e2).lastIndexOf("\n");
    }
    if (-1 !== n2)
      return n2;
  }
  contentsForInspection() {
    return { text: this.text.inspect(), attributes: this.attributes };
  }
  toString() {
    return this.text.toString();
  }
  toJSON() {
    return { text: this.text, attributes: this.attributes, htmlAttributes: this.htmlAttributes };
  }
  getDirection() {
    return this.text.getDirection();
  }
  isRTL() {
    return this.text.isRTL();
  }
  getLength() {
    return this.text.getLength();
  }
  canBeConsolidatedWith(t2) {
    return !this.hasAttributes() && !t2.hasAttributes() && this.getDirection() === t2.getDirection();
  }
  consolidateWith(t2) {
    const e2 = Te.textForStringWithAttributes("\n"), i2 = this.getTextWithoutBlockBreak().appendText(e2);
    return this.copyWithText(i2.appendText(t2.text));
  }
  splitAtOffset(t2) {
    let e2, i2;
    return 0 === t2 ? (e2 = null, i2 = this) : t2 === this.getLength() ? (e2 = this, i2 = null) : (e2 = this.copyWithText(this.text.getTextAtRange([0, t2])), i2 = this.copyWithText(this.text.getTextAtRange([t2, this.getLength()]))), [e2, i2];
  }
  getBlockBreakPosition() {
    return this.text.getLength() - 1;
  }
  getTextWithoutBlockBreak() {
    return Oe(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
  }
  canBeGrouped(t2) {
    return this.attributes[t2];
  }
  canBeGroupedWith(t2, e2) {
    const i2 = t2.getAttributes(), r2 = i2[e2], o2 = this.attributes[e2];
    return o2 === r2 && !(false === gt(o2).group && !(() => {
      if (!ht) {
        ht = [];
        for (const t3 in n) {
          const { listAttribute: e3 } = n[t3];
          null != e3 && ht.push(e3);
        }
      }
      return ht;
    })().includes(i2[e2 + 1])) && (this.getDirection() === t2.getDirection() || t2.isEmpty());
  }
};
var Fe = function(t2) {
  return t2 = Pe(t2), t2 = Ne(t2);
};
var Pe = function(t2) {
  let e2 = false;
  const i2 = t2.getPieces();
  let n2 = i2.slice(0, i2.length - 1);
  const r2 = i2[i2.length - 1];
  return r2 ? (n2 = n2.map((t3) => t3.isBlockBreak() ? (e2 = true, Me(t3)) : t3), e2 ? new Te([...n2, r2]) : t2) : t2;
};
var Ie = Te.textForStringWithAttributes("\n", { blockBreak: true });
var Ne = function(t2) {
  return Oe(t2) ? t2 : t2.appendText(Ie);
};
var Oe = function(t2) {
  const e2 = t2.getLength();
  if (0 === e2)
    return false;
  return t2.getTextAtRange([e2 - 1, e2]).isBlockBreak();
};
var Me = (t2) => t2.copyWithoutAttribute("blockBreak");
var je = function(t2) {
  const { listAttribute: e2 } = gt(t2);
  return e2 ? [e2, t2] : [t2];
};
var We = (t2) => t2.slice(-1)[0];
var Ue = function(t2, e2) {
  const i2 = t2.lastIndexOf(e2);
  return -1 === i2 ? t2 : ot(t2, i2, 1);
};
var qe = class extends nt {
  static fromJSON(t2) {
    return new this(Array.from(t2).map((t3) => Be.fromJSON(t3)));
  }
  static fromString(t2, e2) {
    const i2 = Te.textForStringWithAttributes(t2, e2);
    return new this([new Be(i2)]);
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), 0 === t2.length && (t2 = [new Be()]), this.blockList = Se.box(t2);
  }
  isEmpty() {
    const t2 = this.getBlockAtIndex(0);
    return 1 === this.blockList.length && t2.isEmpty() && !t2.hasAttributes();
  }
  copy() {
    const t2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray();
    return new this.constructor(t2);
  }
  copyUsingObjectsFromDocument(t2) {
    const e2 = new Yt(t2.getObjects());
    return this.copyUsingObjectMap(e2);
  }
  copyUsingObjectMap(t2) {
    const e2 = this.getBlocks().map((e3) => t2.find(e3) || e3.copyUsingObjectMap(t2));
    return new this.constructor(e2);
  }
  copyWithBaseBlockAttributes() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e2 = this.getBlocks().map((e3) => {
      const i2 = t2.concat(e3.getAttributes());
      return e3.copyWithAttributes(i2);
    });
    return new this.constructor(e2);
  }
  replaceBlock(t2, e2) {
    const i2 = this.blockList.indexOf(t2);
    return -1 === i2 ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e2, i2));
  }
  insertDocumentAtRange(t2, e2) {
    const { blockList: i2 } = t2;
    e2 = Lt(e2);
    let [n2] = e2;
    const { index: r2, offset: o2 } = this.locationFromPosition(n2);
    let s2 = this;
    const a2 = this.getBlockAtPosition(n2);
    return Dt(e2) && a2.isEmpty() && !a2.hasAttributes() ? s2 = new this.constructor(s2.blockList.removeObjectAtIndex(r2)) : a2.getBlockBreakPosition() === o2 && n2++, s2 = s2.removeTextAtRange(e2), new this.constructor(s2.blockList.insertSplittableListAtPosition(i2, n2));
  }
  mergeDocumentAtRange(t2, e2) {
    let i2, n2;
    e2 = Lt(e2);
    const [r2] = e2, o2 = this.locationFromPosition(r2), s2 = this.getBlockAtIndex(o2.index).getAttributes(), a2 = t2.getBaseBlockAttributes(), l2 = s2.slice(-a2.length);
    if (rt(a2, l2)) {
      const e3 = s2.slice(0, -a2.length);
      i2 = t2.copyWithBaseBlockAttributes(e3);
    } else
      i2 = t2.copy({ consolidateBlocks: true }).copyWithBaseBlockAttributes(s2);
    const c2 = i2.getBlockCount(), u2 = i2.getBlockAtIndex(0);
    if (rt(s2, u2.getAttributes())) {
      const t3 = u2.getTextWithoutBlockBreak();
      if (n2 = this.insertTextAtRange(t3, e2), c2 > 1) {
        i2 = new this.constructor(i2.getBlocks().slice(1));
        const e3 = r2 + t3.getLength();
        n2 = n2.insertDocumentAtRange(i2, e3);
      }
    } else
      n2 = this.insertDocumentAtRange(i2, e2);
    return n2;
  }
  insertTextAtRange(t2, e2) {
    e2 = Lt(e2);
    const [i2] = e2, { index: n2, offset: r2 } = this.locationFromPosition(i2), o2 = this.removeTextAtRange(e2);
    return new this.constructor(o2.blockList.editObjectAtIndex(n2, (e3) => e3.copyWithText(e3.text.insertTextAtPosition(t2, r2))));
  }
  removeTextAtRange(t2) {
    let e2;
    t2 = Lt(t2);
    const [i2, n2] = t2;
    if (Dt(t2))
      return this;
    const [r2, o2] = Array.from(this.locationRangeFromRange(t2)), s2 = r2.index, a2 = r2.offset, l2 = this.getBlockAtIndex(s2), c2 = o2.index, u2 = o2.offset, h2 = this.getBlockAtIndex(c2);
    if (n2 - i2 == 1 && l2.getBlockBreakPosition() === a2 && h2.getBlockBreakPosition() !== u2 && "\n" === h2.text.getStringAtPosition(u2))
      e2 = this.blockList.editObjectAtIndex(c2, (t3) => t3.copyWithText(t3.text.removeTextAtRange([u2, u2 + 1])));
    else {
      let t3;
      const i3 = l2.text.getTextAtRange([0, a2]), n3 = h2.text.getTextAtRange([u2, h2.getLength()]), r3 = i3.appendText(n3);
      t3 = s2 !== c2 && 0 === a2 && l2.getAttributeLevel() >= h2.getAttributeLevel() ? h2.copyWithText(r3) : l2.copyWithText(r3);
      const o3 = c2 + 1 - s2;
      e2 = this.blockList.splice(s2, o3, t3);
    }
    return new this.constructor(e2);
  }
  moveTextFromRangeToPosition(t2, e2) {
    let i2;
    t2 = Lt(t2);
    const [n2, r2] = t2;
    if (n2 <= e2 && e2 <= r2)
      return this;
    let o2 = this.getDocumentAtRange(t2), s2 = this.removeTextAtRange(t2);
    const a2 = n2 < e2;
    a2 && (e2 -= o2.getLength());
    const [l2, ...c2] = o2.getBlocks();
    return 0 === c2.length ? (i2 = l2.getTextWithoutBlockBreak(), a2 && (e2 += 1)) : i2 = l2.text, s2 = s2.insertTextAtRange(i2, e2), 0 === c2.length ? s2 : (o2 = new this.constructor(c2), e2 += i2.getLength(), s2.insertDocumentAtRange(o2, e2));
  }
  addAttributeAtRange(t2, e2, i2) {
    let { blockList: n2 } = this;
    return this.eachBlockAtRange(i2, (i3, r2, o2) => n2 = n2.editObjectAtIndex(o2, function() {
      return gt(t2) ? i3.addAttribute(t2, e2) : r2[0] === r2[1] ? i3 : i3.copyWithText(i3.text.addAttributeAtRange(t2, e2, r2));
    })), new this.constructor(n2);
  }
  addAttribute(t2, e2) {
    let { blockList: i2 } = this;
    return this.eachBlock((n2, r2) => i2 = i2.editObjectAtIndex(r2, () => n2.addAttribute(t2, e2))), new this.constructor(i2);
  }
  removeAttributeAtRange(t2, e2) {
    let { blockList: i2 } = this;
    return this.eachBlockAtRange(e2, function(e3, n2, r2) {
      gt(t2) ? i2 = i2.editObjectAtIndex(r2, () => e3.removeAttribute(t2)) : n2[0] !== n2[1] && (i2 = i2.editObjectAtIndex(r2, () => e3.copyWithText(e3.text.removeAttributeAtRange(t2, n2))));
    }), new this.constructor(i2);
  }
  updateAttributesForAttachment(t2, e2) {
    const i2 = this.getRangeOfAttachment(e2), [n2] = Array.from(i2), { index: r2 } = this.locationFromPosition(n2), o2 = this.getTextAtIndex(r2);
    return new this.constructor(this.blockList.editObjectAtIndex(r2, (i3) => i3.copyWithText(o2.updateAttributesForAttachment(t2, e2))));
  }
  removeAttributeForAttachment(t2, e2) {
    const i2 = this.getRangeOfAttachment(e2);
    return this.removeAttributeAtRange(t2, i2);
  }
  setHTMLAttributeAtPosition(t2, e2, i2) {
    const n2 = this.getBlockAtPosition(t2), r2 = n2.addHTMLAttribute(e2, i2);
    return this.replaceBlock(n2, r2);
  }
  insertBlockBreakAtRange(t2) {
    let e2;
    t2 = Lt(t2);
    const [i2] = t2, { offset: n2 } = this.locationFromPosition(i2), r2 = this.removeTextAtRange(t2);
    return 0 === n2 && (e2 = [new Be()]), new this.constructor(r2.blockList.insertSplittableListAtPosition(new Se(e2), i2));
  }
  applyBlockAttributeAtRange(t2, e2, i2) {
    const n2 = this.expandRangeToLineBreaksAndSplitBlocks(i2);
    let r2 = n2.document;
    i2 = n2.range;
    const o2 = gt(t2);
    if (o2.listAttribute) {
      r2 = r2.removeLastListAttributeAtRange(i2, { exceptAttributeName: t2 });
      const e3 = r2.convertLineBreaksToBlockBreaksInRange(i2);
      r2 = e3.document, i2 = e3.range;
    } else
      r2 = o2.exclusive ? r2.removeBlockAttributesAtRange(i2) : o2.terminal ? r2.removeLastTerminalAttributeAtRange(i2) : r2.consolidateBlocksAtRange(i2);
    return r2.addAttributeAtRange(t2, e2, i2);
  }
  removeLastListAttributeAtRange(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { blockList: i2 } = this;
    return this.eachBlockAtRange(t2, function(t3, n2, r2) {
      const o2 = t3.getLastAttribute();
      o2 && gt(o2).listAttribute && o2 !== e2.exceptAttributeName && (i2 = i2.editObjectAtIndex(r2, () => t3.removeAttribute(o2)));
    }), new this.constructor(i2);
  }
  removeLastTerminalAttributeAtRange(t2) {
    let { blockList: e2 } = this;
    return this.eachBlockAtRange(t2, function(t3, i2, n2) {
      const r2 = t3.getLastAttribute();
      r2 && gt(r2).terminal && (e2 = e2.editObjectAtIndex(n2, () => t3.removeAttribute(r2)));
    }), new this.constructor(e2);
  }
  removeBlockAttributesAtRange(t2) {
    let { blockList: e2 } = this;
    return this.eachBlockAtRange(t2, function(t3, i2, n2) {
      t3.hasAttributes() && (e2 = e2.editObjectAtIndex(n2, () => t3.copyWithoutAttributes()));
    }), new this.constructor(e2);
  }
  expandRangeToLineBreaksAndSplitBlocks(t2) {
    let e2;
    t2 = Lt(t2);
    let [i2, n2] = t2;
    const r2 = this.locationFromPosition(i2), o2 = this.locationFromPosition(n2);
    let s2 = this;
    const a2 = s2.getBlockAtIndex(r2.index);
    if (r2.offset = a2.findLineBreakInDirectionFromPosition("backward", r2.offset), null != r2.offset && (e2 = s2.positionFromLocation(r2), s2 = s2.insertBlockBreakAtRange([e2, e2 + 1]), o2.index += 1, o2.offset -= s2.getBlockAtIndex(r2.index).getLength(), r2.index += 1), r2.offset = 0, 0 === o2.offset && o2.index > r2.index)
      o2.index -= 1, o2.offset = s2.getBlockAtIndex(o2.index).getBlockBreakPosition();
    else {
      const t3 = s2.getBlockAtIndex(o2.index);
      "\n" === t3.text.getStringAtRange([o2.offset - 1, o2.offset]) ? o2.offset -= 1 : o2.offset = t3.findLineBreakInDirectionFromPosition("forward", o2.offset), o2.offset !== t3.getBlockBreakPosition() && (e2 = s2.positionFromLocation(o2), s2 = s2.insertBlockBreakAtRange([e2, e2 + 1]));
    }
    return i2 = s2.positionFromLocation(r2), n2 = s2.positionFromLocation(o2), { document: s2, range: t2 = Lt([i2, n2]) };
  }
  convertLineBreaksToBlockBreaksInRange(t2) {
    t2 = Lt(t2);
    let [e2] = t2;
    const i2 = this.getStringAtRange(t2).slice(0, -1);
    let n2 = this;
    return i2.replace(/.*?\n/g, function(t3) {
      e2 += t3.length, n2 = n2.insertBlockBreakAtRange([e2 - 1, e2]);
    }), { document: n2, range: t2 };
  }
  consolidateBlocksAtRange(t2) {
    t2 = Lt(t2);
    const [e2, i2] = t2, n2 = this.locationFromPosition(e2).index, r2 = this.locationFromPosition(i2).index;
    return new this.constructor(this.blockList.consolidateFromIndexToIndex(n2, r2));
  }
  getDocumentAtRange(t2) {
    t2 = Lt(t2);
    const e2 = this.blockList.getSplittableListInRange(t2).toArray();
    return new this.constructor(e2);
  }
  getStringAtRange(t2) {
    let e2;
    const i2 = t2 = Lt(t2);
    return i2[i2.length - 1] !== this.getLength() && (e2 = -1), this.getDocumentAtRange(t2).toString().slice(0, e2);
  }
  getBlockAtIndex(t2) {
    return this.blockList.getObjectAtIndex(t2);
  }
  getBlockAtPosition(t2) {
    const { index: e2 } = this.locationFromPosition(t2);
    return this.getBlockAtIndex(e2);
  }
  getTextAtIndex(t2) {
    var e2;
    return null === (e2 = this.getBlockAtIndex(t2)) || void 0 === e2 ? void 0 : e2.text;
  }
  getTextAtPosition(t2) {
    const { index: e2 } = this.locationFromPosition(t2);
    return this.getTextAtIndex(e2);
  }
  getPieceAtPosition(t2) {
    const { index: e2, offset: i2 } = this.locationFromPosition(t2);
    return this.getTextAtIndex(e2).getPieceAtPosition(i2);
  }
  getCharacterAtPosition(t2) {
    const { index: e2, offset: i2 } = this.locationFromPosition(t2);
    return this.getTextAtIndex(e2).getStringAtRange([i2, i2 + 1]);
  }
  getLength() {
    return this.blockList.getEndPosition();
  }
  getBlocks() {
    return this.blockList.toArray();
  }
  getBlockCount() {
    return this.blockList.length;
  }
  getEditCount() {
    return this.editCount;
  }
  eachBlock(t2) {
    return this.blockList.eachObject(t2);
  }
  eachBlockAtRange(t2, e2) {
    let i2, n2;
    t2 = Lt(t2);
    const [r2, o2] = t2, s2 = this.locationFromPosition(r2), a2 = this.locationFromPosition(o2);
    if (s2.index === a2.index)
      return i2 = this.getBlockAtIndex(s2.index), n2 = [s2.offset, a2.offset], e2(i2, n2, s2.index);
    for (let t3 = s2.index; t3 <= a2.index; t3++)
      if (i2 = this.getBlockAtIndex(t3), i2) {
        switch (t3) {
          case s2.index:
            n2 = [s2.offset, i2.text.getLength()];
            break;
          case a2.index:
            n2 = [0, a2.offset];
            break;
          default:
            n2 = [0, i2.text.getLength()];
        }
        e2(i2, n2, t3);
      }
  }
  getCommonAttributesAtRange(t2) {
    t2 = Lt(t2);
    const [e2] = t2;
    if (Dt(t2))
      return this.getCommonAttributesAtPosition(e2);
    {
      const e3 = [], i2 = [];
      return this.eachBlockAtRange(t2, function(t3, n2) {
        if (n2[0] !== n2[1])
          return e3.push(t3.text.getCommonAttributesAtRange(n2)), i2.push(Ve(t3));
      }), zt.fromCommonAttributesOfObjects(e3).merge(zt.fromCommonAttributesOfObjects(i2)).toObject();
    }
  }
  getCommonAttributesAtPosition(t2) {
    let e2, i2;
    const { index: n2, offset: r2 } = this.locationFromPosition(t2), o2 = this.getBlockAtIndex(n2);
    if (!o2)
      return {};
    const s2 = Ve(o2), a2 = o2.text.getAttributesAtPosition(r2), l2 = o2.text.getAttributesAtPosition(r2 - 1), c2 = Object.keys(W).filter((t3) => W[t3].inheritable);
    for (e2 in l2)
      i2 = l2[e2], (i2 === a2[e2] || c2.includes(e2)) && (s2[e2] = i2);
    return s2;
  }
  getRangeOfCommonAttributeAtPosition(t2, e2) {
    const { index: i2, offset: n2 } = this.locationFromPosition(e2), r2 = this.getTextAtIndex(i2), [o2, s2] = Array.from(r2.getExpandedRangeForAttributeAtOffset(t2, n2)), a2 = this.positionFromLocation({ index: i2, offset: o2 }), l2 = this.positionFromLocation({ index: i2, offset: s2 });
    return Lt([a2, l2]);
  }
  getBaseBlockAttributes() {
    let t2 = this.getBlockAtIndex(0).getAttributes();
    for (let e2 = 1; e2 < this.getBlockCount(); e2++) {
      const i2 = this.getBlockAtIndex(e2).getAttributes(), n2 = Math.min(t2.length, i2.length);
      t2 = (() => {
        const e3 = [];
        for (let r2 = 0; r2 < n2 && i2[r2] === t2[r2]; r2++)
          e3.push(i2[r2]);
        return e3;
      })();
    }
    return t2;
  }
  getAttachmentById(t2) {
    for (const e2 of this.getAttachments())
      if (e2.id === t2)
        return e2;
  }
  getAttachmentPieces() {
    let t2 = [];
    return this.blockList.eachObject((e2) => {
      let { text: i2 } = e2;
      return t2 = t2.concat(i2.getAttachmentPieces());
    }), t2;
  }
  getAttachments() {
    return this.getAttachmentPieces().map((t2) => t2.attachment);
  }
  getRangeOfAttachment(t2) {
    let e2 = 0;
    const i2 = this.blockList.toArray();
    for (let n2 = 0; n2 < i2.length; n2++) {
      const { text: r2 } = i2[n2], o2 = r2.getRangeOfAttachment(t2);
      if (o2)
        return Lt([e2 + o2[0], e2 + o2[1]]);
      e2 += r2.getLength();
    }
  }
  getLocationRangeOfAttachment(t2) {
    const e2 = this.getRangeOfAttachment(t2);
    return this.locationRangeFromRange(e2);
  }
  getAttachmentPieceForAttachment(t2) {
    for (const e2 of this.getAttachmentPieces())
      if (e2.attachment === t2)
        return e2;
  }
  findRangesForBlockAttribute(t2) {
    let e2 = 0;
    const i2 = [];
    return this.getBlocks().forEach((n2) => {
      const r2 = n2.getLength();
      n2.hasAttribute(t2) && i2.push([e2, e2 + r2]), e2 += r2;
    }), i2;
  }
  findRangesForTextAttribute(t2) {
    let { withValue: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = 0, n2 = [];
    const r2 = [];
    return this.getPieces().forEach((o2) => {
      const s2 = o2.getLength();
      (function(i3) {
        return e2 ? i3.getAttribute(t2) === e2 : i3.hasAttribute(t2);
      })(o2) && (n2[1] === i2 ? n2[1] = i2 + s2 : r2.push(n2 = [i2, i2 + s2])), i2 += s2;
    }), r2;
  }
  locationFromPosition(t2) {
    const e2 = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t2));
    if (null != e2.index)
      return e2;
    {
      const t3 = this.getBlocks();
      return { index: t3.length - 1, offset: t3[t3.length - 1].getLength() };
    }
  }
  positionFromLocation(t2) {
    return this.blockList.findPositionAtIndexAndOffset(t2.index, t2.offset);
  }
  locationRangeFromPosition(t2) {
    return Lt(this.locationFromPosition(t2));
  }
  locationRangeFromRange(t2) {
    if (!(t2 = Lt(t2)))
      return;
    const [e2, i2] = Array.from(t2), n2 = this.locationFromPosition(e2), r2 = this.locationFromPosition(i2);
    return Lt([n2, r2]);
  }
  rangeFromLocationRange(t2) {
    let e2;
    t2 = Lt(t2);
    const i2 = this.positionFromLocation(t2[0]);
    return Dt(t2) || (e2 = this.positionFromLocation(t2[1])), Lt([i2, e2]);
  }
  isEqualTo(t2) {
    return this.blockList.isEqualTo(null == t2 ? void 0 : t2.blockList);
  }
  getTexts() {
    return this.getBlocks().map((t2) => t2.text);
  }
  getPieces() {
    const t2 = [];
    return Array.from(this.getTexts()).forEach((e2) => {
      t2.push(...Array.from(e2.getPieces() || []));
    }), t2;
  }
  getObjects() {
    return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
  }
  toSerializableDocument() {
    const t2 = [];
    return this.blockList.eachObject((e2) => t2.push(e2.copyWithText(e2.text.toSerializableText()))), new this.constructor(t2);
  }
  toString() {
    return this.blockList.toString();
  }
  toJSON() {
    return this.blockList.toJSON();
  }
  toConsole() {
    return JSON.stringify(this.blockList.toArray().map((t2) => JSON.parse(t2.text.toConsole())));
  }
};
var Ve = function(t2) {
  const e2 = {}, i2 = t2.getLastAttribute();
  return i2 && (e2[i2] = true), e2;
};
var He = "style href src width height language class".split(" ");
var ze = "javascript:".split(" ");
var _e = "script iframe form noscript".split(" ");
var Je = class extends H {
  static sanitize(t2, e2) {
    const i2 = new this(t2, e2);
    return i2.sanitize(), i2;
  }
  constructor(t2) {
    let { allowedAttributes: e2, forbiddenProtocols: i2, forbiddenElements: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(...arguments), this.allowedAttributes = e2 || He, this.forbiddenProtocols = i2 || ze, this.forbiddenElements = n2 || _e, this.body = Ke(t2);
  }
  sanitize() {
    return this.sanitizeElements(), this.normalizeListElementNesting();
  }
  getHTML() {
    return this.body.innerHTML;
  }
  getBody() {
    return this.body;
  }
  sanitizeElements() {
    const t2 = R(this.body), e2 = [];
    for (; t2.nextNode(); ) {
      const i2 = t2.currentNode;
      switch (i2.nodeType) {
        case Node.ELEMENT_NODE:
          this.elementIsRemovable(i2) ? e2.push(i2) : this.sanitizeElement(i2);
          break;
        case Node.COMMENT_NODE:
          e2.push(i2);
      }
    }
    return e2.forEach((t3) => k(t3)), this.body;
  }
  sanitizeElement(t2) {
    return t2.hasAttribute("href") && this.forbiddenProtocols.includes(t2.protocol) && t2.removeAttribute("href"), Array.from(t2.attributes).forEach((e2) => {
      let { name: i2 } = e2;
      this.allowedAttributes.includes(i2) || 0 === i2.indexOf("data-trix") || t2.removeAttribute(i2);
    }), t2;
  }
  normalizeListElementNesting() {
    return Array.from(this.body.querySelectorAll("ul,ol")).forEach((t2) => {
      const e2 = t2.previousElementSibling;
      e2 && "li" === E(e2) && e2.appendChild(t2);
    }), this.body;
  }
  elementIsRemovable(t2) {
    if ((null == t2 ? void 0 : t2.nodeType) === Node.ELEMENT_NODE)
      return this.elementIsForbidden(t2) || this.elementIsntSerializable(t2);
  }
  elementIsForbidden(t2) {
    return this.forbiddenElements.includes(E(t2));
  }
  elementIsntSerializable(t2) {
    return "false" === t2.getAttribute("data-trix-serialize") && !I(t2);
  }
};
var Ke = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  t2 = t2.replace(/<\/html[^>]*>[^]*$/i, "</html>");
  const e2 = document.implementation.createHTMLDocument("");
  return e2.documentElement.innerHTML = t2, Array.from(e2.head.querySelectorAll("style")).forEach((t3) => {
    e2.body.appendChild(t3);
  }), e2.body;
};
var Ge = function(t2) {
  let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return { string: t2 = Wt(t2), attributes: e2, type: "string" };
};
var $e = (t2, e2) => {
  try {
    const i2 = JSON.parse(t2.getAttribute("data-trix-".concat(e2)));
    return "text/html" === i2.contentType && i2.content && (i2.content = Je.sanitize(i2.content).getHTML()), i2;
  } catch (t3) {
    return {};
  }
};
var Xe = class extends H {
  static parse(t2, e2) {
    const i2 = new this(t2, e2);
    return i2.parse(), i2;
  }
  constructor(t2) {
    let { referenceElement: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(...arguments), this.html = t2, this.referenceElement = e2, this.blocks = [], this.blockElements = [], this.processedElements = [];
  }
  getDocument() {
    return qe.fromJSON(this.blocks);
  }
  parse() {
    try {
      this.createHiddenContainer();
      const t2 = Je.sanitize(this.html).getHTML();
      this.containerElement.innerHTML = t2;
      const e2 = R(this.containerElement, { usingFilter: ti });
      for (; e2.nextNode(); )
        this.processNode(e2.currentNode);
      return this.translateBlockElementMarginsToNewlines();
    } finally {
      this.removeHiddenContainer();
    }
  }
  createHiddenContainer() {
    return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(false), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = S({ tagName: "div", style: { display: "none" } }), document.body.appendChild(this.containerElement));
  }
  removeHiddenContainer() {
    return k(this.containerElement);
  }
  processNode(t2) {
    switch (t2.nodeType) {
      case Node.TEXT_NODE:
        if (!this.isInsignificantTextNode(t2))
          return this.appendBlockForTextNode(t2), this.processTextNode(t2);
        break;
      case Node.ELEMENT_NODE:
        return this.appendBlockForElement(t2), this.processElement(t2);
    }
  }
  appendBlockForTextNode(t2) {
    const e2 = t2.parentNode;
    if (e2 === this.currentBlockElement && this.isBlockElement(t2.previousSibling))
      return this.appendStringWithAttributes("\n");
    if (e2 === this.containerElement || this.isBlockElement(e2)) {
      var i2;
      const t3 = this.getBlockAttributes(e2), n2 = this.getBlockHTMLAttributes(e2);
      rt(t3, null === (i2 = this.currentBlock) || void 0 === i2 ? void 0 : i2.attributes) || (this.currentBlock = this.appendBlockForAttributesWithElement(t3, e2, n2), this.currentBlockElement = e2);
    }
  }
  appendBlockForElement(t2) {
    const e2 = this.isBlockElement(t2), i2 = y(this.currentBlockElement, t2);
    if (e2 && !this.isBlockElement(t2.firstChild)) {
      if (!this.isInsignificantTextNode(t2.firstChild) || !this.isBlockElement(t2.firstElementChild)) {
        const e3 = this.getBlockAttributes(t2), n2 = this.getBlockHTMLAttributes(t2);
        if (t2.firstChild) {
          if (i2 && rt(e3, this.currentBlock.attributes))
            return this.appendStringWithAttributes("\n");
          this.currentBlock = this.appendBlockForAttributesWithElement(e3, t2, n2), this.currentBlockElement = t2;
        }
      }
    } else if (this.currentBlockElement && !i2 && !e2) {
      const e3 = this.findParentBlockElement(t2);
      if (e3)
        return this.appendBlockForElement(e3);
      this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null;
    }
  }
  findParentBlockElement(t2) {
    let { parentElement: e2 } = t2;
    for (; e2 && e2 !== this.containerElement; ) {
      if (this.isBlockElement(e2) && this.blockElements.includes(e2))
        return e2;
      e2 = e2.parentElement;
    }
    return null;
  }
  processTextNode(t2) {
    let e2 = t2.data;
    var i2;
    Ye(t2.parentNode) || (e2 = qt(e2), ni(null === (i2 = t2.previousSibling) || void 0 === i2 ? void 0 : i2.textContent) && (e2 = ei(e2)));
    return this.appendStringWithAttributes(e2, this.getTextAttributes(t2.parentNode));
  }
  processElement(t2) {
    let e2;
    if (I(t2)) {
      if (e2 = $e(t2, "attachment"), Object.keys(e2).length) {
        const i2 = this.getTextAttributes(t2);
        this.appendAttachmentWithAttributes(e2, i2), t2.innerHTML = "";
      }
      return this.processedElements.push(t2);
    }
    switch (E(t2)) {
      case "br":
        return this.isExtraBR(t2) || this.isBlockElement(t2.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t2)), this.processedElements.push(t2);
      case "img":
        e2 = { url: t2.getAttribute("src"), contentType: "image" };
        const i2 = ((t3) => {
          const e3 = t3.getAttribute("width"), i3 = t3.getAttribute("height"), n2 = {};
          return e3 && (n2.width = parseInt(e3, 10)), i3 && (n2.height = parseInt(i3, 10)), n2;
        })(t2);
        for (const t3 in i2) {
          const n2 = i2[t3];
          e2[t3] = n2;
        }
        return this.appendAttachmentWithAttributes(e2, this.getTextAttributes(t2)), this.processedElements.push(t2);
      case "tr":
        if (this.needsTableSeparator(t2))
          return this.appendStringWithAttributes(j.tableRowSeparator);
        break;
      case "td":
        if (this.needsTableSeparator(t2))
          return this.appendStringWithAttributes(j.tableCellSeparator);
    }
  }
  appendBlockForAttributesWithElement(t2, e2) {
    let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    this.blockElements.push(e2);
    const n2 = function() {
      return { text: [], attributes: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, htmlAttributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {} };
    }(t2, i2);
    return this.blocks.push(n2), n2;
  }
  appendEmptyBlock() {
    return this.appendBlockForAttributesWithElement([], null);
  }
  appendStringWithAttributes(t2, e2) {
    return this.appendPiece(Ge(t2, e2));
  }
  appendAttachmentWithAttributes(t2, e2) {
    return this.appendPiece(function(t3) {
      return { attachment: t3, attributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, type: "attachment" };
    }(t2, e2));
  }
  appendPiece(t2) {
    return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t2);
  }
  appendStringToTextAtIndex(t2, e2) {
    const { text: i2 } = this.blocks[e2], n2 = i2[i2.length - 1];
    if ("string" !== (null == n2 ? void 0 : n2.type))
      return i2.push(Ge(t2));
    n2.string += t2;
  }
  prependStringToTextAtIndex(t2, e2) {
    const { text: i2 } = this.blocks[e2], n2 = i2[0];
    if ("string" !== (null == n2 ? void 0 : n2.type))
      return i2.unshift(Ge(t2));
    n2.string = t2 + n2.string;
  }
  getTextAttributes(t2) {
    let e2;
    const i2 = {};
    for (const n2 in W) {
      const r2 = W[n2];
      if (r2.tagName && A(t2, { matchingSelector: r2.tagName, untilNode: this.containerElement }))
        i2[n2] = true;
      else if (r2.parser) {
        if (e2 = r2.parser(t2), e2) {
          let o2 = false;
          for (const i3 of this.findBlockElementAncestors(t2))
            if (r2.parser(i3) === e2) {
              o2 = true;
              break;
            }
          o2 || (i2[n2] = e2);
        }
      } else
        r2.styleProperty && (e2 = t2.style[r2.styleProperty], e2 && (i2[n2] = e2));
    }
    if (I(t2)) {
      const n2 = $e(t2, "attributes");
      for (const t3 in n2)
        e2 = n2[t3], i2[t3] = e2;
    }
    return i2;
  }
  getBlockAttributes(t2) {
    const e2 = [];
    for (; t2 && t2 !== this.containerElement; ) {
      for (const r2 in n) {
        const o2 = n[r2];
        var i2;
        if (false !== o2.parse) {
          if (E(t2) === o2.tagName)
            (null !== (i2 = o2.test) && void 0 !== i2 && i2.call(o2, t2) || !o2.test) && (e2.push(r2), o2.listAttribute && e2.push(o2.listAttribute));
        }
      }
      t2 = t2.parentNode;
    }
    return e2.reverse();
  }
  getBlockHTMLAttributes(t2) {
    const e2 = {}, i2 = Object.values(n).find((e3) => e3.tagName === E(t2));
    return ((null == i2 ? void 0 : i2.htmlAttributes) || []).forEach((i3) => {
      t2.hasAttribute(i3) && (e2[i3] = t2.getAttribute(i3));
    }), e2;
  }
  findBlockElementAncestors(t2) {
    const e2 = [];
    for (; t2 && t2 !== this.containerElement; ) {
      const i2 = E(t2);
      D().includes(i2) && e2.push(t2), t2 = t2.parentNode;
    }
    return e2;
  }
  isBlockElement(t2) {
    if ((null == t2 ? void 0 : t2.nodeType) === Node.ELEMENT_NODE && !I(t2) && !A(t2, { matchingSelector: "td", untilNode: this.containerElement }))
      return D().includes(E(t2)) || "block" === window.getComputedStyle(t2).display;
  }
  isInsignificantTextNode(t2) {
    if ((null == t2 ? void 0 : t2.nodeType) !== Node.TEXT_NODE)
      return;
    if (!ii(t2.data))
      return;
    const { parentNode: e2, previousSibling: i2, nextSibling: n2 } = t2;
    return Qe(e2.previousSibling) && !this.isBlockElement(e2.previousSibling) || Ye(e2) ? void 0 : !i2 || this.isBlockElement(i2) || !n2 || this.isBlockElement(n2);
  }
  isExtraBR(t2) {
    return "br" === E(t2) && this.isBlockElement(t2.parentNode) && t2.parentNode.lastChild === t2;
  }
  needsTableSeparator(t2) {
    if (j.removeBlankTableCells) {
      var e2;
      const i2 = null === (e2 = t2.previousSibling) || void 0 === e2 ? void 0 : e2.textContent;
      return i2 && /\S/.test(i2);
    }
    return t2.previousSibling;
  }
  translateBlockElementMarginsToNewlines() {
    const t2 = this.getMarginOfDefaultBlockElement();
    for (let e2 = 0; e2 < this.blocks.length; e2++) {
      const i2 = this.getMarginOfBlockElementAtIndex(e2);
      i2 && (i2.top > 2 * t2.top && this.prependStringToTextAtIndex("\n", e2), i2.bottom > 2 * t2.bottom && this.appendStringToTextAtIndex("\n", e2));
    }
  }
  getMarginOfBlockElementAtIndex(t2) {
    const e2 = this.blockElements[t2];
    if (e2 && e2.textContent && !D().includes(E(e2)) && !this.processedElements.includes(e2))
      return Ze(e2);
  }
  getMarginOfDefaultBlockElement() {
    const t2 = S(n.default.tagName);
    return this.containerElement.appendChild(t2), Ze(t2);
  }
};
var Ye = function(t2) {
  const { whiteSpace: e2 } = window.getComputedStyle(t2);
  return ["pre", "pre-wrap", "pre-line"].includes(e2);
};
var Qe = (t2) => t2 && !ni(t2.textContent);
var Ze = function(t2) {
  const e2 = window.getComputedStyle(t2);
  if ("block" === e2.display)
    return { top: parseInt(e2.marginTop), bottom: parseInt(e2.marginBottom) };
};
var ti = function(t2) {
  return "style" === E(t2) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
};
var ei = (t2) => t2.replace(new RegExp("^".concat(Ut.source, "+")), "");
var ii = (t2) => new RegExp("^".concat(Ut.source, "*$")).test(t2);
var ni = (t2) => /\s$/.test(t2);
var ri = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"];
var oi = "data-trix-serialized-attributes";
var si = "[".concat(oi, "]");
var ai = new RegExp("<!--block-->", "g");
var li = { "application/json": function(t2) {
  let e2;
  if (t2 instanceof qe)
    e2 = t2;
  else {
    if (!(t2 instanceof HTMLElement))
      throw new Error("unserializable object");
    e2 = Xe.parse(t2.innerHTML).getDocument();
  }
  return e2.toSerializableDocument().toJSONString();
}, "text/html": function(t2) {
  let e2;
  if (t2 instanceof qe)
    e2 = ge.render(t2);
  else {
    if (!(t2 instanceof HTMLElement))
      throw new Error("unserializable object");
    e2 = t2.cloneNode(true);
  }
  return Array.from(e2.querySelectorAll("[data-trix-serialize=false]")).forEach((t3) => {
    k(t3);
  }), ri.forEach((t3) => {
    Array.from(e2.querySelectorAll("[".concat(t3, "]"))).forEach((e3) => {
      e3.removeAttribute(t3);
    });
  }), Array.from(e2.querySelectorAll(si)).forEach((t3) => {
    try {
      const e3 = JSON.parse(t3.getAttribute(oi));
      t3.removeAttribute(oi);
      for (const i2 in e3) {
        const n2 = e3[i2];
        t3.setAttribute(i2, n2);
      }
    } catch (t4) {
    }
  }), e2.innerHTML.replace(ai, "");
} };
var ci = Object.freeze({ __proto__: null });
var ui = class extends H {
  constructor(t2, e2) {
    super(...arguments), this.attachmentManager = t2, this.attachment = e2, this.id = this.attachment.id, this.file = this.attachment.file;
  }
  remove() {
    return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
  }
};
ui.proxyMethod("attachment.getAttribute"), ui.proxyMethod("attachment.hasAttribute"), ui.proxyMethod("attachment.setAttribute"), ui.proxyMethod("attachment.getAttributes"), ui.proxyMethod("attachment.setAttributes"), ui.proxyMethod("attachment.isPending"), ui.proxyMethod("attachment.isPreviewable"), ui.proxyMethod("attachment.getURL"), ui.proxyMethod("attachment.getHref"), ui.proxyMethod("attachment.getFilename"), ui.proxyMethod("attachment.getFilesize"), ui.proxyMethod("attachment.getFormattedFilesize"), ui.proxyMethod("attachment.getExtension"), ui.proxyMethod("attachment.getContentType"), ui.proxyMethod("attachment.getFile"), ui.proxyMethod("attachment.setFile"), ui.proxyMethod("attachment.releaseFile"), ui.proxyMethod("attachment.getUploadProgress"), ui.proxyMethod("attachment.setUploadProgress");
var hi = class extends H {
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), this.managedAttachments = {}, Array.from(t2).forEach((t3) => {
      this.manageAttachment(t3);
    });
  }
  getAttachments() {
    const t2 = [];
    for (const e2 in this.managedAttachments) {
      const i2 = this.managedAttachments[e2];
      t2.push(i2);
    }
    return t2;
  }
  manageAttachment(t2) {
    return this.managedAttachments[t2.id] || (this.managedAttachments[t2.id] = new ui(this, t2)), this.managedAttachments[t2.id];
  }
  attachmentIsManaged(t2) {
    return t2.id in this.managedAttachments;
  }
  requestRemovalOfAttachment(t2) {
    var e2, i2;
    if (this.attachmentIsManaged(t2))
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.attachmentManagerDidRequestRemovalOfAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
  }
  unmanageAttachment(t2) {
    const e2 = this.managedAttachments[t2.id];
    return delete this.managedAttachments[t2.id], e2;
  }
};
var di = class {
  constructor(t2) {
    this.composition = t2, this.document = this.composition.document;
    const e2 = this.composition.getSelectedRange();
    this.startPosition = e2[0], this.endPosition = e2[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
  }
  shouldInsertBlockBreak() {
    return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
  }
  shouldBreakFormattedBlock() {
    return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
  }
  shouldDecreaseListLevel() {
    return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
  }
  shouldPrependListItem() {
    return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
  }
  shouldRemoveLastBlockAttribute() {
    return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
  }
};
var gi = class extends H {
  constructor() {
    super(...arguments), this.document = new qe(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
  }
  setDocument(t2) {
    var e2, i2;
    if (!t2.isEqualTo(this.document))
      return this.document = t2, this.refreshAttachments(), this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidChangeDocument) || void 0 === i2 ? void 0 : i2.call(e2, t2);
  }
  getSnapshot() {
    return { document: this.document, selectedRange: this.getSelectedRange() };
  }
  loadSnapshot(t2) {
    var e2, i2, n2, r2;
    let { document: o2, selectedRange: s2 } = t2;
    return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionWillLoadSnapshot) || void 0 === i2 || i2.call(e2), this.setDocument(null != o2 ? o2 : new qe()), this.setSelection(null != s2 ? s2 : [0, 0]), null === (n2 = this.delegate) || void 0 === n2 || null === (r2 = n2.compositionDidLoadSnapshot) || void 0 === r2 ? void 0 : r2.call(n2);
  }
  insertText(t2) {
    let { updatePosition: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { updatePosition: true };
    const i2 = this.getSelectedRange();
    this.setDocument(this.document.insertTextAtRange(t2, i2));
    const n2 = i2[0], r2 = n2 + t2.getLength();
    return e2 && this.setSelection(r2), this.notifyDelegateOfInsertionAtRange([n2, r2]);
  }
  insertBlock() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Be();
    const e2 = new qe([t2]);
    return this.insertDocument(e2);
  }
  insertDocument() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new qe();
    const e2 = this.getSelectedRange();
    this.setDocument(this.document.insertDocumentAtRange(t2, e2));
    const i2 = e2[0], n2 = i2 + t2.getLength();
    return this.setSelection(n2), this.notifyDelegateOfInsertionAtRange([i2, n2]);
  }
  insertString(t2, e2) {
    const i2 = this.getCurrentTextAttributes(), n2 = Te.textForStringWithAttributes(t2, i2);
    return this.insertText(n2, e2);
  }
  insertBlockBreak() {
    const t2 = this.getSelectedRange();
    this.setDocument(this.document.insertBlockBreakAtRange(t2));
    const e2 = t2[0], i2 = e2 + 1;
    return this.setSelection(i2), this.notifyDelegateOfInsertionAtRange([e2, i2]);
  }
  insertLineBreak() {
    const t2 = new di(this);
    if (t2.shouldDecreaseListLevel())
      return this.decreaseListLevel(), this.setSelection(t2.startPosition);
    if (t2.shouldPrependListItem()) {
      const e2 = new qe([t2.block.copyWithoutText()]);
      return this.insertDocument(e2);
    }
    return t2.shouldInsertBlockBreak() ? this.insertBlockBreak() : t2.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : t2.shouldBreakFormattedBlock() ? this.breakFormattedBlock(t2) : this.insertString("\n");
  }
  insertHTML(t2) {
    const e2 = Xe.parse(t2).getDocument(), i2 = this.getSelectedRange();
    this.setDocument(this.document.mergeDocumentAtRange(e2, i2));
    const n2 = i2[0], r2 = n2 + e2.getLength() - 1;
    return this.setSelection(r2), this.notifyDelegateOfInsertionAtRange([n2, r2]);
  }
  replaceHTML(t2) {
    const e2 = Xe.parse(t2).getDocument().copyUsingObjectsFromDocument(this.document), i2 = this.getLocationRange({ strict: false }), n2 = this.document.rangeFromLocationRange(i2);
    return this.setDocument(e2), this.setSelection(n2);
  }
  insertFile(t2) {
    return this.insertFiles([t2]);
  }
  insertFiles(t2) {
    const e2 = [];
    return Array.from(t2).forEach((t3) => {
      var i2;
      if (null !== (i2 = this.delegate) && void 0 !== i2 && i2.compositionShouldAcceptFile(t3)) {
        const i3 = ke.attachmentForFile(t3);
        e2.push(i3);
      }
    }), this.insertAttachments(e2);
  }
  insertAttachment(t2) {
    return this.insertAttachments([t2]);
  }
  insertAttachments(t2) {
    let e2 = new Te();
    return Array.from(t2).forEach((t3) => {
      var n2;
      const r2 = t3.getType(), o2 = null === (n2 = i[r2]) || void 0 === n2 ? void 0 : n2.presentation, s2 = this.getCurrentTextAttributes();
      o2 && (s2.presentation = o2);
      const a2 = Te.textForAttachmentWithAttributes(t3, s2);
      e2 = e2.appendText(a2);
    }), this.insertText(e2);
  }
  shouldManageDeletingInDirection(t2) {
    const e2 = this.getLocationRange();
    if (Dt(e2)) {
      if ("backward" === t2 && 0 === e2[0].offset)
        return true;
      if (this.shouldManageMovingCursorInDirection(t2))
        return true;
    } else if (e2[0].index !== e2[1].index)
      return true;
    return false;
  }
  deleteInDirection(t2) {
    let e2, i2, n2, { length: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o2 = this.getLocationRange();
    let s2 = this.getSelectedRange();
    const a2 = Dt(s2);
    if (a2 ? i2 = "backward" === t2 && 0 === o2[0].offset : n2 = o2[0].index !== o2[1].index, i2 && this.canDecreaseBlockAttributeLevel()) {
      const t3 = this.getBlock();
      if (t3.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(s2[0]), t3.isEmpty())
        return false;
    }
    return a2 && (s2 = this.getExpandedRangeInDirection(t2, { length: r2 }), "backward" === t2 && (e2 = this.getAttachmentAtRange(s2))), e2 ? (this.editAttachment(e2), false) : (this.setDocument(this.document.removeTextAtRange(s2)), this.setSelection(s2[0]), !i2 && !n2 && void 0);
  }
  moveTextFromRange(t2) {
    const [e2] = Array.from(this.getSelectedRange());
    return this.setDocument(this.document.moveTextFromRangeToPosition(t2, e2)), this.setSelection(e2);
  }
  removeAttachment(t2) {
    const e2 = this.document.getRangeOfAttachment(t2);
    if (e2)
      return this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e2)), this.setSelection(e2[0]);
  }
  removeLastBlockAttribute() {
    const [t2, e2] = Array.from(this.getSelectedRange()), i2 = this.document.getBlockAtPosition(e2);
    return this.removeCurrentAttribute(i2.getLastAttribute()), this.setSelection(t2);
  }
  insertPlaceholder() {
    return this.placeholderPosition = this.getPosition(), this.insertString(" ");
  }
  selectPlaceholder() {
    if (null != this.placeholderPosition)
      return this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + 1]), this.getSelectedRange();
  }
  forgetPlaceholder() {
    this.placeholderPosition = null;
  }
  hasCurrentAttribute(t2) {
    const e2 = this.currentAttributes[t2];
    return null != e2 && false !== e2;
  }
  toggleCurrentAttribute(t2) {
    const e2 = !this.currentAttributes[t2];
    return e2 ? this.setCurrentAttribute(t2, e2) : this.removeCurrentAttribute(t2);
  }
  canSetCurrentAttribute(t2) {
    return gt(t2) ? this.canSetCurrentBlockAttribute(t2) : this.canSetCurrentTextAttribute(t2);
  }
  canSetCurrentTextAttribute(t2) {
    const e2 = this.getSelectedDocument();
    if (e2) {
      for (const t3 of Array.from(e2.getAttachments()))
        if (!t3.hasContent())
          return false;
      return true;
    }
  }
  canSetCurrentBlockAttribute(t2) {
    const e2 = this.getBlock();
    if (e2)
      return !e2.isTerminalBlock();
  }
  setCurrentAttribute(t2, e2) {
    return gt(t2) ? this.setBlockAttribute(t2, e2) : (this.setTextAttribute(t2, e2), this.currentAttributes[t2] = e2, this.notifyDelegateOfCurrentAttributesChange());
  }
  setHTMLAtributeAtPosition(t2, e2, i2) {
    var n2;
    const r2 = this.document.getBlockAtPosition(t2), o2 = null === (n2 = gt(r2.getLastAttribute())) || void 0 === n2 ? void 0 : n2.htmlAttributes;
    if (r2 && null != o2 && o2.includes(e2)) {
      const n3 = this.document.setHTMLAttributeAtPosition(t2, e2, i2);
      this.setDocument(n3);
    }
  }
  setTextAttribute(t2, e2) {
    const i2 = this.getSelectedRange();
    if (!i2)
      return;
    const [n2, r2] = Array.from(i2);
    if (n2 !== r2)
      return this.setDocument(this.document.addAttributeAtRange(t2, e2, i2));
    if ("href" === t2) {
      const t3 = Te.textForStringWithAttributes(e2, { href: e2 });
      return this.insertText(t3);
    }
  }
  setBlockAttribute(t2, e2) {
    const i2 = this.getSelectedRange();
    if (this.canSetCurrentAttribute(t2))
      return this.setDocument(this.document.applyBlockAttributeAtRange(t2, e2, i2)), this.setSelection(i2);
  }
  removeCurrentAttribute(t2) {
    return gt(t2) ? (this.removeBlockAttribute(t2), this.updateCurrentAttributes()) : (this.removeTextAttribute(t2), delete this.currentAttributes[t2], this.notifyDelegateOfCurrentAttributesChange());
  }
  removeTextAttribute(t2) {
    const e2 = this.getSelectedRange();
    if (e2)
      return this.setDocument(this.document.removeAttributeAtRange(t2, e2));
  }
  removeBlockAttribute(t2) {
    const e2 = this.getSelectedRange();
    if (e2)
      return this.setDocument(this.document.removeAttributeAtRange(t2, e2));
  }
  canDecreaseNestingLevel() {
    var t2;
    return (null === (t2 = this.getBlock()) || void 0 === t2 ? void 0 : t2.getNestingLevel()) > 0;
  }
  canIncreaseNestingLevel() {
    var t2;
    const e2 = this.getBlock();
    if (e2) {
      if (null === (t2 = gt(e2.getLastNestableAttribute())) || void 0 === t2 || !t2.listAttribute)
        return e2.getNestingLevel() > 0;
      {
        const t3 = this.getPreviousBlock();
        if (t3)
          return function() {
            let t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return rt((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).slice(0, t4.length), t4);
          }(t3.getListItemAttributes(), e2.getListItemAttributes());
      }
    }
  }
  decreaseNestingLevel() {
    const t2 = this.getBlock();
    if (t2)
      return this.setDocument(this.document.replaceBlock(t2, t2.decreaseNestingLevel()));
  }
  increaseNestingLevel() {
    const t2 = this.getBlock();
    if (t2)
      return this.setDocument(this.document.replaceBlock(t2, t2.increaseNestingLevel()));
  }
  canDecreaseBlockAttributeLevel() {
    var t2;
    return (null === (t2 = this.getBlock()) || void 0 === t2 ? void 0 : t2.getAttributeLevel()) > 0;
  }
  decreaseBlockAttributeLevel() {
    var t2;
    const e2 = null === (t2 = this.getBlock()) || void 0 === t2 ? void 0 : t2.getLastAttribute();
    if (e2)
      return this.removeCurrentAttribute(e2);
  }
  decreaseListLevel() {
    let [t2] = Array.from(this.getSelectedRange());
    const { index: e2 } = this.document.locationFromPosition(t2);
    let i2 = e2;
    const n2 = this.getBlock().getAttributeLevel();
    let r2 = this.document.getBlockAtIndex(i2 + 1);
    for (; r2 && r2.isListItem() && !(r2.getAttributeLevel() <= n2); )
      i2++, r2 = this.document.getBlockAtIndex(i2 + 1);
    t2 = this.document.positionFromLocation({ index: e2, offset: 0 });
    const o2 = this.document.positionFromLocation({ index: i2, offset: 0 });
    return this.setDocument(this.document.removeLastListAttributeAtRange([t2, o2]));
  }
  updateCurrentAttributes() {
    const t2 = this.getSelectedRange({ ignoreLock: true });
    if (t2) {
      const e2 = this.document.getCommonAttributesAtRange(t2);
      if (Array.from(dt()).forEach((t3) => {
        e2[t3] || this.canSetCurrentAttribute(t3) || (e2[t3] = false);
      }), !St(e2, this.currentAttributes))
        return this.currentAttributes = e2, this.notifyDelegateOfCurrentAttributesChange();
    }
  }
  getCurrentAttributes() {
    return g.call({}, this.currentAttributes);
  }
  getCurrentTextAttributes() {
    const t2 = {};
    for (const e2 in this.currentAttributes) {
      const i2 = this.currentAttributes[e2];
      false !== i2 && pt(e2) && (t2[e2] = i2);
    }
    return t2;
  }
  freezeSelection() {
    return this.setCurrentAttribute("frozen", true);
  }
  thawSelection() {
    return this.removeCurrentAttribute("frozen");
  }
  hasFrozenSelection() {
    return this.hasCurrentAttribute("frozen");
  }
  setSelection(t2) {
    var e2;
    const i2 = this.document.locationRangeFromRange(t2);
    return null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.compositionDidRequestChangingSelectionToLocationRange(i2);
  }
  getSelectedRange() {
    const t2 = this.getLocationRange();
    if (t2)
      return this.document.rangeFromLocationRange(t2);
  }
  setSelectedRange(t2) {
    const e2 = this.document.locationRangeFromRange(t2);
    return this.getSelectionManager().setLocationRange(e2);
  }
  getPosition() {
    const t2 = this.getLocationRange();
    if (t2)
      return this.document.positionFromLocation(t2[0]);
  }
  getLocationRange(t2) {
    return this.targetLocationRange ? this.targetLocationRange : this.getSelectionManager().getLocationRange(t2) || Lt({ index: 0, offset: 0 });
  }
  withTargetLocationRange(t2, e2) {
    let i2;
    this.targetLocationRange = t2;
    try {
      i2 = e2();
    } finally {
      this.targetLocationRange = null;
    }
    return i2;
  }
  withTargetRange(t2, e2) {
    const i2 = this.document.locationRangeFromRange(t2);
    return this.withTargetLocationRange(i2, e2);
  }
  withTargetDOMRange(t2, e2) {
    const i2 = this.createLocationRangeFromDOMRange(t2, { strict: false });
    return this.withTargetLocationRange(i2, e2);
  }
  getExpandedRangeInDirection(t2) {
    let { length: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, [i2, n2] = Array.from(this.getSelectedRange());
    return "backward" === t2 ? e2 ? i2 -= e2 : i2 = this.translateUTF16PositionFromOffset(i2, -1) : e2 ? n2 += e2 : n2 = this.translateUTF16PositionFromOffset(n2, 1), Lt([i2, n2]);
  }
  shouldManageMovingCursorInDirection(t2) {
    if (this.editingAttachment)
      return true;
    const e2 = this.getExpandedRangeInDirection(t2);
    return null != this.getAttachmentAtRange(e2);
  }
  moveCursorInDirection(t2) {
    let e2, i2;
    if (this.editingAttachment)
      i2 = this.document.getRangeOfAttachment(this.editingAttachment);
    else {
      const n2 = this.getSelectedRange();
      i2 = this.getExpandedRangeInDirection(t2), e2 = !wt(n2, i2);
    }
    if ("backward" === t2 ? this.setSelectedRange(i2[0]) : this.setSelectedRange(i2[1]), e2) {
      const t3 = this.getAttachmentAtRange(i2);
      if (t3)
        return this.editAttachment(t3);
    }
  }
  expandSelectionInDirection(t2) {
    let { length: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i2 = this.getExpandedRangeInDirection(t2, { length: e2 });
    return this.setSelectedRange(i2);
  }
  expandSelectionForEditing() {
    if (this.hasCurrentAttribute("href"))
      return this.expandSelectionAroundCommonAttribute("href");
  }
  expandSelectionAroundCommonAttribute(t2) {
    const e2 = this.getPosition(), i2 = this.document.getRangeOfCommonAttributeAtPosition(t2, e2);
    return this.setSelectedRange(i2);
  }
  selectionContainsAttachments() {
    var t2;
    return (null === (t2 = this.getSelectedAttachments()) || void 0 === t2 ? void 0 : t2.length) > 0;
  }
  selectionIsInCursorTarget() {
    return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
  }
  positionIsCursorTarget(t2) {
    const e2 = this.document.locationFromPosition(t2);
    if (e2)
      return this.locationIsCursorTarget(e2);
  }
  positionIsBlockBreak(t2) {
    var e2;
    return null === (e2 = this.document.getPieceAtPosition(t2)) || void 0 === e2 ? void 0 : e2.isBlockBreak();
  }
  getSelectedDocument() {
    const t2 = this.getSelectedRange();
    if (t2)
      return this.document.getDocumentAtRange(t2);
  }
  getSelectedAttachments() {
    var t2;
    return null === (t2 = this.getSelectedDocument()) || void 0 === t2 ? void 0 : t2.getAttachments();
  }
  getAttachments() {
    return this.attachments.slice(0);
  }
  refreshAttachments() {
    const t2 = this.document.getAttachments(), { added: e2, removed: i2 } = function() {
      let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const i3 = [], n2 = [], r2 = /* @__PURE__ */ new Set();
      t3.forEach((t4) => {
        r2.add(t4);
      });
      const o2 = /* @__PURE__ */ new Set();
      return e3.forEach((t4) => {
        o2.add(t4), r2.has(t4) || i3.push(t4);
      }), t3.forEach((t4) => {
        o2.has(t4) || n2.push(t4);
      }), { added: i3, removed: n2 };
    }(this.attachments, t2);
    return this.attachments = t2, Array.from(i2).forEach((t3) => {
      var e3, i3;
      t3.delegate = null, null === (e3 = this.delegate) || void 0 === e3 || null === (i3 = e3.compositionDidRemoveAttachment) || void 0 === i3 || i3.call(e3, t3);
    }), (() => {
      const t3 = [];
      return Array.from(e2).forEach((e3) => {
        var i3, n2;
        e3.delegate = this, t3.push(null === (i3 = this.delegate) || void 0 === i3 || null === (n2 = i3.compositionDidAddAttachment) || void 0 === n2 ? void 0 : n2.call(i3, e3));
      }), t3;
    })();
  }
  attachmentDidChangeAttributes(t2) {
    var e2, i2;
    return this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidEditAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
  }
  attachmentDidChangePreviewURL(t2) {
    var e2, i2;
    return this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidChangeAttachmentPreviewURL) || void 0 === i2 ? void 0 : i2.call(e2, t2);
  }
  editAttachment(t2, e2) {
    var i2, n2;
    if (t2 !== this.editingAttachment)
      return this.stopEditingAttachment(), this.editingAttachment = t2, null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionDidStartEditingAttachment) || void 0 === n2 ? void 0 : n2.call(i2, this.editingAttachment, e2);
  }
  stopEditingAttachment() {
    var t2, e2;
    this.editingAttachment && (null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.compositionDidStopEditingAttachment) || void 0 === e2 || e2.call(t2, this.editingAttachment), this.editingAttachment = null);
  }
  updateAttributesForAttachment(t2, e2) {
    return this.setDocument(this.document.updateAttributesForAttachment(t2, e2));
  }
  removeAttributeForAttachment(t2, e2) {
    return this.setDocument(this.document.removeAttributeForAttachment(t2, e2));
  }
  breakFormattedBlock(t2) {
    let { document: e2 } = t2;
    const { block: i2 } = t2;
    let n2 = t2.startPosition, r2 = [n2 - 1, n2];
    i2.getBlockBreakPosition() === t2.startLocation.offset ? (i2.breaksOnReturn() && "\n" === t2.nextCharacter ? n2 += 1 : e2 = e2.removeTextAtRange(r2), r2 = [n2, n2]) : "\n" === t2.nextCharacter ? "\n" === t2.previousCharacter ? r2 = [n2 - 1, n2 + 1] : (r2 = [n2, n2 + 1], n2 += 1) : t2.startLocation.offset - 1 != 0 && (n2 += 1);
    const o2 = new qe([i2.removeLastAttribute().copyWithoutText()]);
    return this.setDocument(e2.insertDocumentAtRange(o2, r2)), this.setSelection(n2);
  }
  getPreviousBlock() {
    const t2 = this.getLocationRange();
    if (t2) {
      const { index: e2 } = t2[0];
      if (e2 > 0)
        return this.document.getBlockAtIndex(e2 - 1);
    }
  }
  getBlock() {
    const t2 = this.getLocationRange();
    if (t2)
      return this.document.getBlockAtIndex(t2[0].index);
  }
  getAttachmentAtRange(t2) {
    const e2 = this.document.getDocumentAtRange(t2);
    if (e2.toString() === "".concat("￼", "\n"))
      return e2.getAttachments()[0];
  }
  notifyDelegateOfCurrentAttributesChange() {
    var t2, e2;
    return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.compositionDidChangeCurrentAttributes) || void 0 === e2 ? void 0 : e2.call(t2, this.currentAttributes);
  }
  notifyDelegateOfInsertionAtRange(t2) {
    var e2, i2;
    return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidPerformInsertionAtRange) || void 0 === i2 ? void 0 : i2.call(e2, t2);
  }
  translateUTF16PositionFromOffset(t2, e2) {
    const i2 = this.document.toUTF16String(), n2 = i2.offsetFromUCS2Offset(t2);
    return i2.offsetToUCS2Offset(n2 + e2);
  }
};
gi.proxyMethod("getSelectionManager().getPointRange"), gi.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), gi.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), gi.proxyMethod("getSelectionManager().locationIsCursorTarget"), gi.proxyMethod("getSelectionManager().selectionIsExpanded"), gi.proxyMethod("delegate?.getSelectionManager");
var mi = class extends H {
  constructor(t2) {
    super(...arguments), this.composition = t2, this.undoEntries = [], this.redoEntries = [];
  }
  recordUndoEntry(t2) {
    let { context: e2, consolidatable: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n2 = this.undoEntries.slice(-1)[0];
    if (!i2 || !pi(n2, t2, e2)) {
      const i3 = this.createEntry({ description: t2, context: e2 });
      this.undoEntries.push(i3), this.redoEntries = [];
    }
  }
  undo() {
    const t2 = this.undoEntries.pop();
    if (t2) {
      const e2 = this.createEntry(t2);
      return this.redoEntries.push(e2), this.composition.loadSnapshot(t2.snapshot);
    }
  }
  redo() {
    const t2 = this.redoEntries.pop();
    if (t2) {
      const e2 = this.createEntry(t2);
      return this.undoEntries.push(e2), this.composition.loadSnapshot(t2.snapshot);
    }
  }
  canUndo() {
    return this.undoEntries.length > 0;
  }
  canRedo() {
    return this.redoEntries.length > 0;
  }
  createEntry() {
    let { description: t2, context: e2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return { description: null == t2 ? void 0 : t2.toString(), context: JSON.stringify(e2), snapshot: this.composition.getSnapshot() };
  }
};
var pi = (t2, e2, i2) => (null == t2 ? void 0 : t2.description) === (null == e2 ? void 0 : e2.toString()) && (null == t2 ? void 0 : t2.context) === JSON.stringify(i2);
var fi = "attachmentGallery";
var bi = class {
  constructor(t2) {
    this.document = t2.document, this.selectedRange = t2.selectedRange;
  }
  perform() {
    return this.removeBlockAttribute(), this.applyBlockAttribute();
  }
  getSnapshot() {
    return { document: this.document, selectedRange: this.selectedRange };
  }
  removeBlockAttribute() {
    return this.findRangesOfBlocks().map((t2) => this.document = this.document.removeAttributeAtRange(fi, t2));
  }
  applyBlockAttribute() {
    let t2 = 0;
    this.findRangesOfPieces().forEach((e2) => {
      e2[1] - e2[0] > 1 && (e2[0] += t2, e2[1] += t2, "\n" !== this.document.getCharacterAtPosition(e2[1]) && (this.document = this.document.insertBlockBreakAtRange(e2[1]), e2[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), e2[1]++, t2++), 0 !== e2[0] && "\n" !== this.document.getCharacterAtPosition(e2[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(e2[0]), e2[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), e2[0]++, t2++), this.document = this.document.applyBlockAttributeAtRange(fi, true, e2));
    });
  }
  findRangesOfBlocks() {
    return this.document.findRangesForBlockAttribute(fi);
  }
  findRangesOfPieces() {
    return this.document.findRangesForTextAttribute("presentation", { withValue: "gallery" });
  }
  moveSelectedRangeForward() {
    this.selectedRange[0] += 1, this.selectedRange[1] += 1;
  }
};
var vi = function(t2) {
  const e2 = new bi(t2);
  return e2.perform(), e2.getSnapshot();
};
var Ai = [vi];
var xi = class {
  constructor(t2, e2, i2) {
    this.insertFiles = this.insertFiles.bind(this), this.composition = t2, this.selectionManager = e2, this.element = i2, this.undoManager = new mi(this.composition), this.filters = Ai.slice(0);
  }
  loadDocument(t2) {
    return this.loadSnapshot({ document: t2, selectedRange: [0, 0] });
  }
  loadHTML() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    const e2 = Xe.parse(t2, { referenceElement: this.element }).getDocument();
    return this.loadDocument(e2);
  }
  loadJSON(t2) {
    let { document: e2, selectedRange: i2 } = t2;
    return e2 = qe.fromJSON(e2), this.loadSnapshot({ document: e2, selectedRange: i2 });
  }
  loadSnapshot(t2) {
    return this.undoManager = new mi(this.composition), this.composition.loadSnapshot(t2);
  }
  getDocument() {
    return this.composition.document;
  }
  getSelectedDocument() {
    return this.composition.getSelectedDocument();
  }
  getSnapshot() {
    return this.composition.getSnapshot();
  }
  toJSON() {
    return this.getSnapshot();
  }
  deleteInDirection(t2) {
    return this.composition.deleteInDirection(t2);
  }
  insertAttachment(t2) {
    return this.composition.insertAttachment(t2);
  }
  insertAttachments(t2) {
    return this.composition.insertAttachments(t2);
  }
  insertDocument(t2) {
    return this.composition.insertDocument(t2);
  }
  insertFile(t2) {
    return this.composition.insertFile(t2);
  }
  insertFiles(t2) {
    return this.composition.insertFiles(t2);
  }
  insertHTML(t2) {
    return this.composition.insertHTML(t2);
  }
  insertString(t2) {
    return this.composition.insertString(t2);
  }
  insertText(t2) {
    return this.composition.insertText(t2);
  }
  insertLineBreak() {
    return this.composition.insertLineBreak();
  }
  getSelectedRange() {
    return this.composition.getSelectedRange();
  }
  getPosition() {
    return this.composition.getPosition();
  }
  getClientRectAtPosition(t2) {
    const e2 = this.getDocument().locationRangeFromRange([t2, t2 + 1]);
    return this.selectionManager.getClientRectAtLocationRange(e2);
  }
  expandSelectionInDirection(t2) {
    return this.composition.expandSelectionInDirection(t2);
  }
  moveCursorInDirection(t2) {
    return this.composition.moveCursorInDirection(t2);
  }
  setSelectedRange(t2) {
    return this.composition.setSelectedRange(t2);
  }
  activateAttribute(t2) {
    let e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return this.composition.setCurrentAttribute(t2, e2);
  }
  attributeIsActive(t2) {
    return this.composition.hasCurrentAttribute(t2);
  }
  canActivateAttribute(t2) {
    return this.composition.canSetCurrentAttribute(t2);
  }
  deactivateAttribute(t2) {
    return this.composition.removeCurrentAttribute(t2);
  }
  setHTMLAtributeAtPosition(t2, e2, i2) {
    this.composition.setHTMLAtributeAtPosition(t2, e2, i2);
  }
  canDecreaseNestingLevel() {
    return this.composition.canDecreaseNestingLevel();
  }
  canIncreaseNestingLevel() {
    return this.composition.canIncreaseNestingLevel();
  }
  decreaseNestingLevel() {
    if (this.canDecreaseNestingLevel())
      return this.composition.decreaseNestingLevel();
  }
  increaseNestingLevel() {
    if (this.canIncreaseNestingLevel())
      return this.composition.increaseNestingLevel();
  }
  canRedo() {
    return this.undoManager.canRedo();
  }
  canUndo() {
    return this.undoManager.canUndo();
  }
  recordUndoEntry(t2) {
    let { context: e2, consolidatable: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return this.undoManager.recordUndoEntry(t2, { context: e2, consolidatable: i2 });
  }
  redo() {
    if (this.canRedo())
      return this.undoManager.redo();
  }
  undo() {
    if (this.canUndo())
      return this.undoManager.undo();
  }
};
var yi = class {
  constructor(t2) {
    this.element = t2;
  }
  findLocationFromContainerAndOffset(t2, e2) {
    let { strict: i2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { strict: true }, n2 = 0, r2 = false;
    const o2 = { index: 0, offset: 0 }, s2 = this.findAttachmentElementParentForNode(t2);
    s2 && (t2 = s2.parentNode, e2 = C(s2));
    const a2 = R(this.element, { usingFilter: Ei });
    for (; a2.nextNode(); ) {
      const s3 = a2.currentNode;
      if (s3 === t2 && O(t2)) {
        P(s3) || (o2.offset += e2);
        break;
      }
      if (s3.parentNode === t2) {
        if (n2++ === e2)
          break;
      } else if (!y(t2, s3) && n2 > 0)
        break;
      T(s3, { strict: i2 }) ? (r2 && o2.index++, o2.offset = 0, r2 = true) : o2.offset += Ci(s3);
    }
    return o2;
  }
  findContainerAndOffsetFromLocation(t2) {
    let e2, i2;
    if (0 === t2.index && 0 === t2.offset) {
      for (e2 = this.element, i2 = 0; e2.firstChild; )
        if (e2 = e2.firstChild, w(e2)) {
          i2 = 1;
          break;
        }
      return [e2, i2];
    }
    let [n2, r2] = this.findNodeAndOffsetFromLocation(t2);
    if (n2) {
      if (O(n2))
        0 === Ci(n2) ? (e2 = n2.parentNode.parentNode, i2 = C(n2.parentNode), P(n2, { name: "right" }) && i2++) : (e2 = n2, i2 = t2.offset - r2);
      else {
        if (e2 = n2.parentNode, !T(n2.previousSibling) && !w(e2))
          for (; n2 === e2.lastChild && (n2 = e2, e2 = e2.parentNode, !w(e2)); )
            ;
        i2 = C(n2), 0 !== t2.offset && i2++;
      }
      return [e2, i2];
    }
  }
  findNodeAndOffsetFromLocation(t2) {
    let e2, i2, n2 = 0;
    for (const r2 of this.getSignificantNodesForIndex(t2.index)) {
      const o2 = Ci(r2);
      if (t2.offset <= n2 + o2)
        if (O(r2)) {
          if (e2 = r2, i2 = n2, t2.offset === i2 && P(e2))
            break;
        } else
          e2 || (e2 = r2, i2 = n2);
      if (n2 += o2, n2 > t2.offset)
        break;
    }
    return [e2, i2];
  }
  findAttachmentElementParentForNode(t2) {
    for (; t2 && t2 !== this.element; ) {
      if (I(t2))
        return t2;
      t2 = t2.parentNode;
    }
  }
  getSignificantNodesForIndex(t2) {
    const e2 = [], i2 = R(this.element, { usingFilter: ki });
    let n2 = false;
    for (; i2.nextNode(); ) {
      const o2 = i2.currentNode;
      var r2;
      if (B(o2)) {
        if (null != r2 ? r2++ : r2 = 0, r2 === t2)
          n2 = true;
        else if (n2)
          break;
      } else
        n2 && e2.push(o2);
    }
    return e2;
  }
};
var Ci = function(t2) {
  if (t2.nodeType === Node.TEXT_NODE) {
    if (P(t2))
      return 0;
    return t2.textContent.length;
  }
  return "br" === E(t2) || I(t2) ? 1 : 0;
};
var ki = function(t2) {
  return Ri(t2) === NodeFilter.FILTER_ACCEPT ? Ei(t2) : NodeFilter.FILTER_REJECT;
};
var Ri = function(t2) {
  return N(t2) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
};
var Ei = function(t2) {
  return I(t2.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
};
var Si = class {
  createDOMRangeFromPoint(t2) {
    let e2, { x: i2, y: n2 } = t2;
    if (document.caretPositionFromPoint) {
      const { offsetNode: t3, offset: r2 } = document.caretPositionFromPoint(i2, n2);
      return e2 = document.createRange(), e2.setStart(t3, r2), e2;
    }
    if (document.caretRangeFromPoint)
      return document.caretRangeFromPoint(i2, n2);
    if (document.body.createTextRange) {
      const t3 = Nt();
      try {
        const t4 = document.body.createTextRange();
        t4.moveToPoint(i2, n2), t4.select();
      } catch (t4) {
      }
      return e2 = Nt(), Ot(t3), e2;
    }
  }
  getClientRectsForDOMRange(t2) {
    const e2 = Array.from(t2.getClientRects());
    return [e2[0], e2[e2.length - 1]];
  }
};
var Li = class extends H {
  constructor(t2) {
    super(...arguments), this.didMouseDown = this.didMouseDown.bind(this), this.selectionDidChange = this.selectionDidChange.bind(this), this.element = t2, this.locationMapper = new yi(this.element), this.pointMapper = new Si(), this.lockCount = 0, f("mousedown", { onElement: this.element, withCallback: this.didMouseDown });
  }
  getLocationRange() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return false === t2.strict ? this.createLocationRangeFromDOMRange(Nt()) : t2.ignoreLock ? this.currentLocationRange : this.lockedLocationRange ? this.lockedLocationRange : this.currentLocationRange;
  }
  setLocationRange(t2) {
    if (this.lockedLocationRange)
      return;
    t2 = Lt(t2);
    const e2 = this.createDOMRangeFromLocationRange(t2);
    e2 && (Ot(e2), this.updateCurrentLocationRange(t2));
  }
  setLocationRangeFromPointRange(t2) {
    t2 = Lt(t2);
    const e2 = this.getLocationAtPoint(t2[0]), i2 = this.getLocationAtPoint(t2[1]);
    this.setLocationRange([e2, i2]);
  }
  getClientRectAtLocationRange(t2) {
    const e2 = this.createDOMRangeFromLocationRange(t2);
    if (e2)
      return this.getClientRectsForDOMRange(e2)[1];
  }
  locationIsCursorTarget(t2) {
    const e2 = Array.from(this.findNodeAndOffsetFromLocation(t2))[0];
    return P(e2);
  }
  lock() {
    0 == this.lockCount++ && (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange());
  }
  unlock() {
    if (0 == --this.lockCount) {
      const { lockedLocationRange: t2 } = this;
      if (this.lockedLocationRange = null, null != t2)
        return this.setLocationRange(t2);
    }
  }
  clearSelection() {
    var t2;
    return null === (t2 = It()) || void 0 === t2 ? void 0 : t2.removeAllRanges();
  }
  selectionIsCollapsed() {
    var t2;
    return true === (null === (t2 = Nt()) || void 0 === t2 ? void 0 : t2.collapsed);
  }
  selectionIsExpanded() {
    return !this.selectionIsCollapsed();
  }
  createLocationRangeFromDOMRange(t2, e2) {
    if (null == t2 || !this.domRangeWithinElement(t2))
      return;
    const i2 = this.findLocationFromContainerAndOffset(t2.startContainer, t2.startOffset, e2);
    if (!i2)
      return;
    const n2 = t2.collapsed ? void 0 : this.findLocationFromContainerAndOffset(t2.endContainer, t2.endOffset, e2);
    return Lt([i2, n2]);
  }
  didMouseDown() {
    return this.pauseTemporarily();
  }
  pauseTemporarily() {
    let t2;
    this.paused = true;
    const e2 = () => {
      if (this.paused = false, clearTimeout(i2), Array.from(t2).forEach((t3) => {
        t3.destroy();
      }), y(document, this.element))
        return this.selectionDidChange();
    }, i2 = setTimeout(e2, 200);
    t2 = ["mousemove", "keydown"].map((t3) => f(t3, { onElement: document, withCallback: e2 }));
  }
  selectionDidChange() {
    if (!this.paused && !x(this.element))
      return this.updateCurrentLocationRange();
  }
  updateCurrentLocationRange(t2) {
    var e2, i2;
    if ((null != t2 ? t2 : t2 = this.createLocationRangeFromDOMRange(Nt())) && !wt(t2, this.currentLocationRange))
      return this.currentLocationRange = t2, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.locationRangeDidChange) || void 0 === i2 ? void 0 : i2.call(e2, this.currentLocationRange.slice(0));
  }
  createDOMRangeFromLocationRange(t2) {
    const e2 = this.findContainerAndOffsetFromLocation(t2[0]), i2 = Dt(t2) ? e2 : this.findContainerAndOffsetFromLocation(t2[1]) || e2;
    if (null != e2 && null != i2) {
      const t3 = document.createRange();
      return t3.setStart(...Array.from(e2 || [])), t3.setEnd(...Array.from(i2 || [])), t3;
    }
  }
  getLocationAtPoint(t2) {
    const e2 = this.createDOMRangeFromPoint(t2);
    var i2;
    if (e2)
      return null === (i2 = this.createLocationRangeFromDOMRange(e2)) || void 0 === i2 ? void 0 : i2[0];
  }
  domRangeWithinElement(t2) {
    return t2.collapsed ? y(this.element, t2.startContainer) : y(this.element, t2.startContainer) && y(this.element, t2.endContainer);
  }
};
Li.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), Li.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), Li.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), Li.proxyMethod("pointMapper.createDOMRangeFromPoint"), Li.proxyMethod("pointMapper.getClientRectsForDOMRange");
var Di = Object.freeze({ __proto__: null, Attachment: ke, AttachmentManager: hi, AttachmentPiece: Re, Block: Be, Composition: gi, Document: qe, Editor: xi, HTMLParser: Xe, HTMLSanitizer: Je, LineBreakInsertion: di, LocationMapper: yi, ManagedAttachment: ui, Piece: ye, PointMapper: Si, SelectionManager: Li, SplittableList: Se, StringPiece: Ee, Text: Te, UndoManager: mi });
var wi = Object.freeze({ __proto__: null, ObjectView: ee, AttachmentView: re, BlockView: de, DocumentView: ge, PieceView: le, PreviewableAttachmentView: ae, TextView: ce });
var { lang: Ti, css: Bi, keyNames: Fi } = V;
var Pi = function(t2) {
  return function() {
    const e2 = t2.apply(this, arguments);
    e2.do(), this.undos || (this.undos = []), this.undos.push(e2.undo);
  };
};
var Ii = class extends H {
  constructor(t2, e2, i2) {
    let n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    super(...arguments), Ae(this, "makeElementMutable", Pi(() => ({ do: () => {
      this.element.dataset.trixMutable = true;
    }, undo: () => delete this.element.dataset.trixMutable }))), Ae(this, "addToolbar", Pi(() => {
      const t3 = S({ tagName: "div", className: Bi.attachmentToolbar, data: { trixMutable: true }, childNodes: S({ tagName: "div", className: "trix-button-row", childNodes: S({ tagName: "span", className: "trix-button-group trix-button-group--actions", childNodes: S({ tagName: "button", className: "trix-button trix-button--remove", textContent: Ti.remove, attributes: { title: Ti.remove }, data: { trixAction: "remove" } }) }) }) });
      return this.attachment.isPreviewable() && t3.appendChild(S({ tagName: "div", className: Bi.attachmentMetadataContainer, childNodes: S({ tagName: "span", className: Bi.attachmentMetadata, childNodes: [S({ tagName: "span", className: Bi.attachmentName, textContent: this.attachment.getFilename(), attributes: { title: this.attachment.getFilename() } }), S({ tagName: "span", className: Bi.attachmentSize, textContent: this.attachment.getFormattedFilesize() })] }) })), f("click", { onElement: t3, withCallback: this.didClickToolbar }), f("click", { onElement: t3, matchingSelector: "[data-trix-action]", withCallback: this.didClickActionButton }), b("trix-attachment-before-toolbar", { onElement: this.element, attributes: { toolbar: t3, attachment: this.attachment } }), { do: () => this.element.appendChild(t3), undo: () => k(t3) };
    })), Ae(this, "installCaptionEditor", Pi(() => {
      const t3 = S({ tagName: "textarea", className: Bi.attachmentCaptionEditor, attributes: { placeholder: Ti.captionPlaceholder }, data: { trixMutable: true } });
      t3.value = this.attachmentPiece.getCaption();
      const e3 = t3.cloneNode();
      e3.classList.add("trix-autoresize-clone"), e3.tabIndex = -1;
      const i3 = function() {
        e3.value = t3.value, t3.style.height = e3.scrollHeight + "px";
      };
      f("input", { onElement: t3, withCallback: i3 }), f("input", { onElement: t3, withCallback: this.didInputCaption }), f("keydown", { onElement: t3, withCallback: this.didKeyDownCaption }), f("change", { onElement: t3, withCallback: this.didChangeCaption }), f("blur", { onElement: t3, withCallback: this.didBlurCaption });
      const n3 = this.element.querySelector("figcaption"), r2 = n3.cloneNode();
      return { do: () => {
        if (n3.style.display = "none", r2.appendChild(t3), r2.appendChild(e3), r2.classList.add("".concat(Bi.attachmentCaption, "--editing")), n3.parentElement.insertBefore(r2, n3), i3(), this.options.editCaption)
          return Rt(() => t3.focus());
      }, undo() {
        k(r2), n3.style.display = null;
      } };
    })), this.didClickToolbar = this.didClickToolbar.bind(this), this.didClickActionButton = this.didClickActionButton.bind(this), this.didKeyDownCaption = this.didKeyDownCaption.bind(this), this.didInputCaption = this.didInputCaption.bind(this), this.didChangeCaption = this.didChangeCaption.bind(this), this.didBlurCaption = this.didBlurCaption.bind(this), this.attachmentPiece = t2, this.element = e2, this.container = i2, this.options = n2, this.attachment = this.attachmentPiece.attachment, "a" === E(this.element) && (this.element = this.element.firstChild), this.install();
  }
  install() {
    this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() && this.installCaptionEditor();
  }
  uninstall() {
    var t2;
    let e2 = this.undos.pop();
    for (this.savePendingCaption(); e2; )
      e2(), e2 = this.undos.pop();
    null === (t2 = this.delegate) || void 0 === t2 || t2.didUninstallAttachmentEditor(this);
  }
  savePendingCaption() {
    if (null != this.pendingCaption) {
      const r2 = this.pendingCaption;
      var t2, e2, i2, n2;
      if (this.pendingCaption = null, r2)
        null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.attachmentEditorDidRequestUpdatingAttributesForAttachment) || void 0 === e2 || e2.call(t2, { caption: r2 }, this.attachment);
      else
        null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.attachmentEditorDidRequestRemovingAttributeForAttachment) || void 0 === n2 || n2.call(i2, "caption", this.attachment);
    }
  }
  didClickToolbar(t2) {
    return t2.preventDefault(), t2.stopPropagation();
  }
  didClickActionButton(t2) {
    var e2;
    if ("remove" === t2.target.getAttribute("data-trix-action"))
      return null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.attachmentEditorDidRequestRemovalOfAttachment(this.attachment);
  }
  didKeyDownCaption(t2) {
    var e2, i2;
    if ("return" === Fi[t2.keyCode])
      return t2.preventDefault(), this.savePendingCaption(), null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.attachmentEditorDidRequestDeselectingAttachment) || void 0 === i2 ? void 0 : i2.call(e2, this.attachment);
  }
  didInputCaption(t2) {
    this.pendingCaption = t2.target.value.replace(/\s/g, " ").trim();
  }
  didChangeCaption(t2) {
    return this.savePendingCaption();
  }
  didBlurCaption(t2) {
    return this.savePendingCaption();
  }
};
var Ni = class extends H {
  constructor(t2, i2) {
    super(...arguments), this.didFocus = this.didFocus.bind(this), this.didBlur = this.didBlur.bind(this), this.didClickAttachment = this.didClickAttachment.bind(this), this.element = t2, this.composition = i2, this.documentView = new ge(this.composition.document, { element: this.element }), f("focus", { onElement: this.element, withCallback: this.didFocus }), f("blur", { onElement: this.element, withCallback: this.didBlur }), f("click", { onElement: this.element, matchingSelector: "a[contenteditable=false]", preventDefault: true }), f("mousedown", { onElement: this.element, matchingSelector: e, withCallback: this.didClickAttachment }), f("click", { onElement: this.element, matchingSelector: "a".concat(e), preventDefault: true });
  }
  didFocus(t2) {
    var e2;
    const i2 = () => {
      var t3, e3;
      if (!this.focused)
        return this.focused = true, null === (t3 = this.delegate) || void 0 === t3 || null === (e3 = t3.compositionControllerDidFocus) || void 0 === e3 ? void 0 : e3.call(t3);
    };
    return (null === (e2 = this.blurPromise) || void 0 === e2 ? void 0 : e2.then(i2)) || i2();
  }
  didBlur(t2) {
    this.blurPromise = new Promise((t3) => Rt(() => {
      var e2, i2;
      x(this.element) || (this.focused = null, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidBlur) || void 0 === i2 || i2.call(e2));
      return this.blurPromise = null, t3();
    }));
  }
  didClickAttachment(t2, e2) {
    var i2, n2;
    const r2 = this.findAttachmentForElement(e2), o2 = !!A(t2.target, { matchingSelector: "figcaption" });
    return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerDidSelectAttachment) || void 0 === n2 ? void 0 : n2.call(i2, r2, { editCaption: o2 });
  }
  getSerializableElement() {
    return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
  }
  render() {
    var t2, e2, i2, n2, r2, o2;
    (this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced()) && (null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillSyncDocumentView) || void 0 === n2 || n2.call(i2), this.documentView.sync(), null === (r2 = this.delegate) || void 0 === r2 || null === (o2 = r2.compositionControllerDidSyncDocumentView) || void 0 === o2 || o2.call(r2));
    return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.compositionControllerDidRender) || void 0 === e2 ? void 0 : e2.call(t2);
  }
  rerenderViewForObject(t2) {
    return this.invalidateViewForObject(t2), this.render();
  }
  invalidateViewForObject(t2) {
    return this.documentView.invalidateViewForObject(t2);
  }
  isViewCachingEnabled() {
    return this.documentView.isViewCachingEnabled();
  }
  enableViewCaching() {
    return this.documentView.enableViewCaching();
  }
  disableViewCaching() {
    return this.documentView.disableViewCaching();
  }
  refreshViewCache() {
    return this.documentView.garbageCollectCachedViews();
  }
  isEditingAttachment() {
    return !!this.attachmentEditor;
  }
  installAttachmentEditorForAttachment(t2, e2) {
    var i2;
    if ((null === (i2 = this.attachmentEditor) || void 0 === i2 ? void 0 : i2.attachment) === t2)
      return;
    const n2 = this.documentView.findElementForObject(t2);
    if (!n2)
      return;
    this.uninstallAttachmentEditor();
    const r2 = this.composition.document.getAttachmentPieceForAttachment(t2);
    this.attachmentEditor = new Ii(r2, n2, this.element, e2), this.attachmentEditor.delegate = this;
  }
  uninstallAttachmentEditor() {
    var t2;
    return null === (t2 = this.attachmentEditor) || void 0 === t2 ? void 0 : t2.uninstall();
  }
  didUninstallAttachmentEditor() {
    return this.attachmentEditor = null, this.render();
  }
  attachmentEditorDidRequestUpdatingAttributesForAttachment(t2, e2) {
    var i2, n2;
    return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillUpdateAttachment) || void 0 === n2 || n2.call(i2, e2), this.composition.updateAttributesForAttachment(t2, e2);
  }
  attachmentEditorDidRequestRemovingAttributeForAttachment(t2, e2) {
    var i2, n2;
    return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillUpdateAttachment) || void 0 === n2 || n2.call(i2, e2), this.composition.removeAttributeForAttachment(t2, e2);
  }
  attachmentEditorDidRequestRemovalOfAttachment(t2) {
    var e2, i2;
    return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidRequestRemovalOfAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
  }
  attachmentEditorDidRequestDeselectingAttachment(t2) {
    var e2, i2;
    return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidRequestDeselectingAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
  }
  canSyncDocumentView() {
    return !this.isEditingAttachment();
  }
  findAttachmentForElement(t2) {
    return this.composition.document.getAttachmentById(parseInt(t2.dataset.trixId, 10));
  }
};
var Oi = class extends H {
};
var Mi = "data-trix-mutable";
var ji = "[".concat(Mi, "]");
var Wi = { attributes: true, childList: true, characterData: true, characterDataOldValue: true, subtree: true };
var Ui = class extends H {
  constructor(t2) {
    super(t2), this.didMutate = this.didMutate.bind(this), this.element = t2, this.observer = new window.MutationObserver(this.didMutate), this.start();
  }
  start() {
    return this.reset(), this.observer.observe(this.element, Wi);
  }
  stop() {
    return this.observer.disconnect();
  }
  didMutate(t2) {
    var e2, i2;
    if (this.mutations.push(...Array.from(this.findSignificantMutations(t2) || [])), this.mutations.length)
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.elementDidMutate) || void 0 === i2 || i2.call(e2, this.getMutationSummary()), this.reset();
  }
  reset() {
    this.mutations = [];
  }
  findSignificantMutations(t2) {
    return t2.filter((t3) => this.mutationIsSignificant(t3));
  }
  mutationIsSignificant(t2) {
    if (this.nodeIsMutable(t2.target))
      return false;
    for (const e2 of Array.from(this.nodesModifiedByMutation(t2)))
      if (this.nodeIsSignificant(e2))
        return true;
    return false;
  }
  nodeIsSignificant(t2) {
    return t2 !== this.element && !this.nodeIsMutable(t2) && !N(t2);
  }
  nodeIsMutable(t2) {
    return A(t2, { matchingSelector: ji });
  }
  nodesModifiedByMutation(t2) {
    const e2 = [];
    switch (t2.type) {
      case "attributes":
        t2.attributeName !== Mi && e2.push(t2.target);
        break;
      case "characterData":
        e2.push(t2.target.parentNode), e2.push(t2.target);
        break;
      case "childList":
        e2.push(...Array.from(t2.addedNodes || [])), e2.push(...Array.from(t2.removedNodes || []));
    }
    return e2;
  }
  getMutationSummary() {
    return this.getTextMutationSummary();
  }
  getTextMutationSummary() {
    const { additions: t2, deletions: e2 } = this.getTextChangesFromCharacterData(), i2 = this.getTextChangesFromChildList();
    Array.from(i2.additions).forEach((e3) => {
      Array.from(t2).includes(e3) || t2.push(e3);
    }), e2.push(...Array.from(i2.deletions || []));
    const n2 = {}, r2 = t2.join("");
    r2 && (n2.textAdded = r2);
    const o2 = e2.join("");
    return o2 && (n2.textDeleted = o2), n2;
  }
  getMutationsByType(t2) {
    return Array.from(this.mutations).filter((e2) => e2.type === t2);
  }
  getTextChangesFromChildList() {
    let t2, e2;
    const i2 = [], n2 = [];
    Array.from(this.getMutationsByType("childList")).forEach((t3) => {
      i2.push(...Array.from(t3.addedNodes || [])), n2.push(...Array.from(t3.removedNodes || []));
    });
    0 === i2.length && 1 === n2.length && B(n2[0]) ? (t2 = [], e2 = ["\n"]) : (t2 = qi(i2), e2 = qi(n2));
    return { additions: t2.filter((t3, i3) => t3 !== e2[i3]).map(Wt), deletions: e2.filter((e3, i3) => e3 !== t2[i3]).map(Wt) };
  }
  getTextChangesFromCharacterData() {
    let t2, e2;
    const i2 = this.getMutationsByType("characterData");
    if (i2.length) {
      const n2 = i2[0], r2 = i2[i2.length - 1], o2 = function(t3, e3) {
        let i3, n3;
        return t3 = X.box(t3), (e3 = X.box(e3)).length < t3.length ? [n3, i3] = Vt(t3, e3) : [i3, n3] = Vt(e3, t3), { added: i3, removed: n3 };
      }(Wt(n2.oldValue), Wt(r2.target.data));
      t2 = o2.added, e2 = o2.removed;
    }
    return { additions: t2 ? [t2] : [], deletions: e2 ? [e2] : [] };
  }
};
var qi = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  const e2 = [];
  for (const i2 of Array.from(t2))
    switch (i2.nodeType) {
      case Node.TEXT_NODE:
        e2.push(i2.data);
        break;
      case Node.ELEMENT_NODE:
        "br" === E(i2) ? e2.push("\n") : e2.push(...Array.from(qi(i2.childNodes) || []));
    }
  return e2;
};
var Vi = class extends te {
  constructor(t2) {
    super(...arguments), this.file = t2;
  }
  perform(t2) {
    const e2 = new FileReader();
    return e2.onerror = () => t2(false), e2.onload = () => {
      e2.onerror = null;
      try {
        e2.abort();
      } catch (t3) {
      }
      return t2(true, this.file);
    }, e2.readAsArrayBuffer(this.file);
  }
};
var Hi = class {
  constructor(t2) {
    this.element = t2;
  }
  shouldIgnore(t2) {
    return !!a.samsungAndroid && (this.previousEvent = this.event, this.event = t2, this.checkSamsungKeyboardBuggyModeStart(), this.checkSamsungKeyboardBuggyModeEnd(), this.buggyMode);
  }
  checkSamsungKeyboardBuggyModeStart() {
    this.insertingLongTextAfterUnidentifiedChar() && zi(this.element.innerText, this.event.data) && (this.buggyMode = true, this.event.preventDefault());
  }
  checkSamsungKeyboardBuggyModeEnd() {
    this.buggyMode && "insertText" !== this.event.inputType && (this.buggyMode = false);
  }
  insertingLongTextAfterUnidentifiedChar() {
    var t2;
    return this.isBeforeInputInsertText() && this.previousEventWasUnidentifiedKeydown() && (null === (t2 = this.event.data) || void 0 === t2 ? void 0 : t2.length) > 50;
  }
  isBeforeInputInsertText() {
    return "beforeinput" === this.event.type && "insertText" === this.event.inputType;
  }
  previousEventWasUnidentifiedKeydown() {
    var t2, e2;
    return "keydown" === (null === (t2 = this.previousEvent) || void 0 === t2 ? void 0 : t2.type) && "Unidentified" === (null === (e2 = this.previousEvent) || void 0 === e2 ? void 0 : e2.key);
  }
};
var zi = (t2, e2) => Ji(t2) === Ji(e2);
var _i = new RegExp("(".concat("￼", "|").concat(h, "|").concat(d, "|\\s)+"), "g");
var Ji = (t2) => t2.replace(_i, " ").trim();
var Ki = class extends H {
  constructor(t2) {
    super(...arguments), this.element = t2, this.mutationObserver = new Ui(this.element), this.mutationObserver.delegate = this, this.flakyKeyboardDetector = new Hi(this.element);
    for (const t3 in this.constructor.events)
      f(t3, { onElement: this.element, withCallback: this.handlerFor(t3) });
  }
  elementDidMutate(t2) {
  }
  editorWillSyncDocumentView() {
    return this.mutationObserver.stop();
  }
  editorDidSyncDocumentView() {
    return this.mutationObserver.start();
  }
  requestRender() {
    var t2, e2;
    return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.inputControllerDidRequestRender) || void 0 === e2 ? void 0 : e2.call(t2);
  }
  requestReparse() {
    var t2, e2;
    return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.inputControllerDidRequestReparse) || void 0 === e2 || e2.call(t2), this.requestRender();
  }
  attachFiles(t2) {
    const e2 = Array.from(t2).map((t3) => new Vi(t3));
    return Promise.all(e2).then((t3) => {
      this.handleInput(function() {
        var e3, i2;
        return null === (e3 = this.delegate) || void 0 === e3 || e3.inputControllerWillAttachFiles(), null === (i2 = this.responder) || void 0 === i2 || i2.insertFiles(t3), this.requestRender();
      });
    });
  }
  handlerFor(t2) {
    return (e2) => {
      e2.defaultPrevented || this.handleInput(() => {
        if (!x(this.element)) {
          if (this.flakyKeyboardDetector.shouldIgnore(e2))
            return;
          this.eventName = t2, this.constructor.events[t2].call(this, e2);
        }
      });
    };
  }
  handleInput(t2) {
    try {
      var e2;
      null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillHandleInput(), t2.call(this);
    } finally {
      var i2;
      null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerDidHandleInput();
    }
  }
  createLinkHTML(t2, e2) {
    const i2 = document.createElement("a");
    return i2.href = t2, i2.textContent = e2 || t2, i2.outerHTML;
  }
};
var Gi;
Ae(Ki, "events", {});
var { browser: $i, keyNames: Xi } = V;
var Yi = 0;
var Qi = class extends Ki {
  constructor() {
    super(...arguments), this.resetInputSummary();
  }
  setInputSummary() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.inputSummary.eventName = this.eventName;
    for (const e2 in t2) {
      const i2 = t2[e2];
      this.inputSummary[e2] = i2;
    }
    return this.inputSummary;
  }
  resetInputSummary() {
    this.inputSummary = {};
  }
  reset() {
    return this.resetInputSummary(), Pt.reset();
  }
  elementDidMutate(t2) {
    var e2, i2;
    return this.isComposing() ? null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidAllowUnhandledInput) || void 0 === i2 ? void 0 : i2.call(e2) : this.handleInput(function() {
      return this.mutationIsSignificant(t2) && (this.mutationIsExpected(t2) ? this.requestRender() : this.requestReparse()), this.reset();
    });
  }
  mutationIsExpected(t2) {
    let { textAdded: e2, textDeleted: i2 } = t2;
    if (this.inputSummary.preferDocument)
      return true;
    const n2 = null != e2 ? e2 === this.inputSummary.textAdded : !this.inputSummary.textAdded, r2 = null != i2 ? this.inputSummary.didDelete : !this.inputSummary.didDelete, o2 = ["\n", " \n"].includes(e2) && !n2, s2 = "\n" === i2 && !r2;
    if (o2 && !s2 || s2 && !o2) {
      const t3 = this.getSelectedRange();
      if (t3) {
        var a2;
        const i3 = o2 ? e2.replace(/\n$/, "").length || -1 : (null == e2 ? void 0 : e2.length) || 1;
        if (null !== (a2 = this.responder) && void 0 !== a2 && a2.positionIsBlockBreak(t3[1] + i3))
          return true;
      }
    }
    return n2 && r2;
  }
  mutationIsSignificant(t2) {
    var e2;
    const i2 = Object.keys(t2).length > 0, n2 = "" === (null === (e2 = this.compositionInput) || void 0 === e2 ? void 0 : e2.getEndData());
    return i2 || !n2;
  }
  getCompositionInput() {
    if (this.isComposing())
      return this.compositionInput;
    this.compositionInput = new rn(this);
  }
  isComposing() {
    return this.compositionInput && !this.compositionInput.isEnded();
  }
  deleteInDirection(t2, e2) {
    var i2;
    return false !== (null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.deleteInDirection(t2)) ? this.setInputSummary({ didDelete: true }) : e2 ? (e2.preventDefault(), this.requestRender()) : void 0;
  }
  serializeSelectionToDataTransfer(t2) {
    var e2;
    if (!function(t3) {
      if (null == t3 || !t3.setData)
        return false;
      for (const e3 in yt) {
        const i3 = yt[e3];
        try {
          if (t3.setData(e3, i3), !t3.getData(e3) === i3)
            return false;
        } catch (t4) {
          return false;
        }
      }
      return true;
    }(t2))
      return;
    const i2 = null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.getSelectedDocument().toSerializableDocument();
    return t2.setData("application/x-trix-document", JSON.stringify(i2)), t2.setData("text/html", ge.render(i2).innerHTML), t2.setData("text/plain", i2.toString().replace(/\n$/, "")), true;
  }
  canAcceptDataTransfer(t2) {
    const e2 = {};
    return Array.from((null == t2 ? void 0 : t2.types) || []).forEach((t3) => {
      e2[t3] = true;
    }), e2.Files || e2["application/x-trix-document"] || e2["text/html"] || e2["text/plain"];
  }
  getPastedHTMLUsingHiddenElement(t2) {
    const e2 = this.getSelectedRange(), i2 = { position: "absolute", left: "".concat(window.pageXOffset, "px"), top: "".concat(window.pageYOffset, "px"), opacity: 0 }, n2 = S({ style: i2, tagName: "div", editable: true });
    return document.body.appendChild(n2), n2.focus(), requestAnimationFrame(() => {
      const i3 = n2.innerHTML;
      return k(n2), this.setSelectedRange(e2), t2(i3);
    });
  }
};
Ae(Qi, "events", { keydown(t2) {
  this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = true;
  const e2 = Xi[t2.keyCode];
  if (e2) {
    var i2;
    let n3 = this.keys;
    ["ctrl", "alt", "shift", "meta"].forEach((e3) => {
      var i3;
      t2["".concat(e3, "Key")] && ("ctrl" === e3 && (e3 = "control"), n3 = null === (i3 = n3) || void 0 === i3 ? void 0 : i3[e3]);
    }), null != (null === (i2 = n3) || void 0 === i2 ? void 0 : i2[e2]) && (this.setInputSummary({ keyName: e2 }), Pt.reset(), n3[e2].call(this, t2));
  }
  if (kt(t2)) {
    const e3 = String.fromCharCode(t2.keyCode).toLowerCase();
    if (e3) {
      var n2;
      const i3 = ["alt", "shift"].map((e4) => {
        if (t2["".concat(e4, "Key")])
          return e4;
      }).filter((t3) => t3);
      i3.push(e3), null !== (n2 = this.delegate) && void 0 !== n2 && n2.inputControllerDidReceiveKeyboardCommand(i3) && t2.preventDefault();
    }
  }
}, keypress(t2) {
  if (null != this.inputSummary.eventName)
    return;
  if (t2.metaKey)
    return;
  if (t2.ctrlKey && !t2.altKey)
    return;
  const e2 = en(t2);
  var i2, n2;
  return e2 ? (null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformTyping(), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(e2), this.setInputSummary({ textAdded: e2, didDelete: this.selectionIsExpanded() })) : void 0;
}, textInput(t2) {
  const { data: e2 } = t2, { textAdded: i2 } = this.inputSummary;
  if (i2 && i2 !== e2 && i2.toUpperCase() === e2) {
    var n2;
    const t3 = this.getSelectedRange();
    return this.setSelectedRange([t3[0], t3[1] + i2.length]), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(e2), this.setInputSummary({ textAdded: e2 }), this.setSelectedRange(t3);
  }
}, dragenter(t2) {
  t2.preventDefault();
}, dragstart(t2) {
  var e2, i2;
  return this.serializeSelectionToDataTransfer(t2.dataTransfer), this.draggedRange = this.getSelectedRange(), null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidStartDrag) || void 0 === i2 ? void 0 : i2.call(e2);
}, dragover(t2) {
  if (this.draggedRange || this.canAcceptDataTransfer(t2.dataTransfer)) {
    t2.preventDefault();
    const n2 = { x: t2.clientX, y: t2.clientY };
    var e2, i2;
    if (!St(n2, this.draggingPoint))
      return this.draggingPoint = n2, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidReceiveDragOverPoint) || void 0 === i2 ? void 0 : i2.call(e2, this.draggingPoint);
  }
}, dragend(t2) {
  var e2, i2;
  null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidCancelDrag) || void 0 === i2 || i2.call(e2), this.draggedRange = null, this.draggingPoint = null;
}, drop(t2) {
  var e2, i2;
  t2.preventDefault();
  const n2 = null === (e2 = t2.dataTransfer) || void 0 === e2 ? void 0 : e2.files, r2 = t2.dataTransfer.getData("application/x-trix-document"), o2 = { x: t2.clientX, y: t2.clientY };
  if (null === (i2 = this.responder) || void 0 === i2 || i2.setLocationRangeFromPointRange(o2), null != n2 && n2.length)
    this.attachFiles(n2);
  else if (this.draggedRange) {
    var s2, a2;
    null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillMoveText(), null === (a2 = this.responder) || void 0 === a2 || a2.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender();
  } else if (r2) {
    var l2;
    const t3 = qe.fromJSONString(r2);
    null === (l2 = this.responder) || void 0 === l2 || l2.insertDocument(t3), this.requestRender();
  }
  this.draggedRange = null, this.draggingPoint = null;
}, cut(t2) {
  var e2, i2;
  if (null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionIsExpanded() && (this.serializeSelectionToDataTransfer(t2.clipboardData) && t2.preventDefault(), null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillCutText(), this.deleteInDirection("backward"), t2.defaultPrevented))
    return this.requestRender();
}, copy(t2) {
  var e2;
  null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionIsExpanded() && this.serializeSelectionToDataTransfer(t2.clipboardData) && t2.preventDefault();
}, paste(t2) {
  const e2 = t2.clipboardData || t2.testClipboardData, i2 = { clipboard: e2 };
  if (!e2 || nn(t2))
    return void this.getPastedHTMLUsingHiddenElement((t3) => {
      var e3, n3, r3;
      return i2.type = "text/html", i2.html = t3, null === (e3 = this.delegate) || void 0 === e3 || e3.inputControllerWillPaste(i2), null === (n3 = this.responder) || void 0 === n3 || n3.insertHTML(i2.html), this.requestRender(), null === (r3 = this.delegate) || void 0 === r3 ? void 0 : r3.inputControllerDidPaste(i2);
    });
  const n2 = e2.getData("URL"), r2 = e2.getData("text/html"), o2 = e2.getData("public.url-name");
  if (n2) {
    var s2, a2, l2;
    let t3;
    i2.type = "text/html", t3 = o2 ? qt(o2).trim() : n2, i2.html = this.createLinkHTML(n2, t3), null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillPaste(i2), this.setInputSummary({ textAdded: t3, didDelete: this.selectionIsExpanded() }), null === (a2 = this.responder) || void 0 === a2 || a2.insertHTML(i2.html), this.requestRender(), null === (l2 = this.delegate) || void 0 === l2 || l2.inputControllerDidPaste(i2);
  } else if (Ct(e2)) {
    var c2, u2, h2;
    i2.type = "text/plain", i2.string = e2.getData("text/plain"), null === (c2 = this.delegate) || void 0 === c2 || c2.inputControllerWillPaste(i2), this.setInputSummary({ textAdded: i2.string, didDelete: this.selectionIsExpanded() }), null === (u2 = this.responder) || void 0 === u2 || u2.insertString(i2.string), this.requestRender(), null === (h2 = this.delegate) || void 0 === h2 || h2.inputControllerDidPaste(i2);
  } else if (r2) {
    var d2, g2, m2;
    i2.type = "text/html", i2.html = r2, null === (d2 = this.delegate) || void 0 === d2 || d2.inputControllerWillPaste(i2), null === (g2 = this.responder) || void 0 === g2 || g2.insertHTML(i2.html), this.requestRender(), null === (m2 = this.delegate) || void 0 === m2 || m2.inputControllerDidPaste(i2);
  } else if (Array.from(e2.types).includes("Files")) {
    var p2, f2;
    const t3 = null === (p2 = e2.items) || void 0 === p2 || null === (p2 = p2[0]) || void 0 === p2 || null === (f2 = p2.getAsFile) || void 0 === f2 ? void 0 : f2.call(p2);
    if (t3) {
      var b2, v2, A2;
      const e3 = Zi(t3);
      !t3.name && e3 && (t3.name = "pasted-file-".concat(++Yi, ".").concat(e3)), i2.type = "File", i2.file = t3, null === (b2 = this.delegate) || void 0 === b2 || b2.inputControllerWillAttachFiles(), null === (v2 = this.responder) || void 0 === v2 || v2.insertFile(i2.file), this.requestRender(), null === (A2 = this.delegate) || void 0 === A2 || A2.inputControllerDidPaste(i2);
    }
  }
  t2.preventDefault();
}, compositionstart(t2) {
  return this.getCompositionInput().start(t2.data);
}, compositionupdate(t2) {
  return this.getCompositionInput().update(t2.data);
}, compositionend(t2) {
  return this.getCompositionInput().end(t2.data);
}, beforeinput(t2) {
  this.inputSummary.didInput = true;
}, input(t2) {
  return this.inputSummary.didInput = true, t2.stopPropagation();
} }), Ae(Qi, "keys", { backspace(t2) {
  var e2;
  return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t2);
}, delete(t2) {
  var e2;
  return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t2);
}, return(t2) {
  var e2, i2;
  return this.setInputSummary({ preferDocument: true }), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.insertLineBreak();
}, tab(t2) {
  var e2, i2;
  null !== (e2 = this.responder) && void 0 !== e2 && e2.canIncreaseNestingLevel() && (null === (i2 = this.responder) || void 0 === i2 || i2.increaseNestingLevel(), this.requestRender(), t2.preventDefault());
}, left(t2) {
  var e2;
  if (this.selectionIsInCursorTarget())
    return t2.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("backward");
}, right(t2) {
  var e2;
  if (this.selectionIsInCursorTarget())
    return t2.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("forward");
}, control: { d(t2) {
  var e2;
  return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t2);
}, h(t2) {
  var e2;
  return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t2);
}, o(t2) {
  var e2, i2;
  return t2.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.insertString("\n", { updatePosition: false }), this.requestRender();
} }, shift: { return(t2) {
  var e2, i2;
  null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.insertString("\n"), this.requestRender(), t2.preventDefault();
}, tab(t2) {
  var e2, i2;
  null !== (e2 = this.responder) && void 0 !== e2 && e2.canDecreaseNestingLevel() && (null === (i2 = this.responder) || void 0 === i2 || i2.decreaseNestingLevel(), this.requestRender(), t2.preventDefault());
}, left(t2) {
  if (this.selectionIsInCursorTarget())
    return t2.preventDefault(), this.expandSelectionInDirection("backward");
}, right(t2) {
  if (this.selectionIsInCursorTarget())
    return t2.preventDefault(), this.expandSelectionInDirection("forward");
} }, alt: { backspace(t2) {
  var e2;
  return this.setInputSummary({ preferDocument: false }), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.inputControllerWillPerformTyping();
} }, meta: { backspace(t2) {
  var e2;
  return this.setInputSummary({ preferDocument: false }), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.inputControllerWillPerformTyping();
} } }), Qi.proxyMethod("responder?.getSelectedRange"), Qi.proxyMethod("responder?.setSelectedRange"), Qi.proxyMethod("responder?.expandSelectionInDirection"), Qi.proxyMethod("responder?.selectionIsInCursorTarget"), Qi.proxyMethod("responder?.selectionIsExpanded");
var Zi = (t2) => {
  var e2;
  return null === (e2 = t2.type) || void 0 === e2 || null === (e2 = e2.match(/\/(\w+)$/)) || void 0 === e2 ? void 0 : e2[1];
};
var tn = !(null === (Gi = " ".codePointAt) || void 0 === Gi || !Gi.call(" ", 0));
var en = function(t2) {
  if (t2.key && tn && t2.key.codePointAt(0) === t2.keyCode)
    return t2.key;
  {
    let e2;
    if (null === t2.which ? e2 = t2.keyCode : 0 !== t2.which && 0 !== t2.charCode && (e2 = t2.charCode), null != e2 && "escape" !== Xi[e2])
      return X.fromCodepoints([e2]).toString();
  }
};
var nn = function(t2) {
  const e2 = t2.clipboardData;
  if (e2) {
    if (e2.types.includes("text/html")) {
      for (const t3 of e2.types) {
        const i2 = /^CorePasteboardFlavorType/.test(t3), n2 = /^dyn\./.test(t3) && e2.getData(t3);
        if (i2 || n2)
          return true;
      }
      return false;
    }
    {
      const t3 = e2.types.includes("com.apple.webarchive"), i2 = e2.types.includes("com.apple.flat-rtfd");
      return t3 || i2;
    }
  }
};
var rn = class extends H {
  constructor(t2) {
    super(...arguments), this.inputController = t2, this.responder = this.inputController.responder, this.delegate = this.inputController.delegate, this.inputSummary = this.inputController.inputSummary, this.data = {};
  }
  start(t2) {
    if (this.data.start = t2, this.isSignificant()) {
      var e2, i2;
      if ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded)
        null === (i2 = this.responder) || void 0 === i2 || i2.deleteInDirection("left");
      this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.getSelectedRange();
    }
  }
  update(t2) {
    if (this.data.update = t2, this.isSignificant()) {
      const t3 = this.selectPlaceholder();
      t3 && (this.forgetPlaceholder(), this.range = t3);
    }
  }
  end(t2) {
    return this.data.end = t2, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({ preferDocument: true, didInput: false }), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.setSelectedRange(this.range), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(this.data.end), null === (r2 = this.responder) || void 0 === r2 ? void 0 : r2.setSelectedRange(this.range[0] + this.data.end.length)) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
    var e2, i2, n2, r2;
  }
  getEndData() {
    return this.data.end;
  }
  isEnded() {
    return null != this.getEndData();
  }
  isSignificant() {
    return !$i.composesExistingText || this.inputSummary.didInput;
  }
  canApplyToDocument() {
    var t2, e2;
    return 0 === (null === (t2 = this.data.start) || void 0 === t2 ? void 0 : t2.length) && (null === (e2 = this.data.end) || void 0 === e2 ? void 0 : e2.length) > 0 && this.range;
  }
};
rn.proxyMethod("inputController.setInputSummary"), rn.proxyMethod("inputController.requestRender"), rn.proxyMethod("inputController.requestReparse"), rn.proxyMethod("responder?.selectionIsExpanded"), rn.proxyMethod("responder?.insertPlaceholder"), rn.proxyMethod("responder?.selectPlaceholder"), rn.proxyMethod("responder?.forgetPlaceholder");
var on = class extends Ki {
  constructor() {
    super(...arguments), this.render = this.render.bind(this);
  }
  elementDidMutate() {
    return this.scheduledRender ? this.composing ? null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.inputControllerDidAllowUnhandledInput) || void 0 === e2 ? void 0 : e2.call(t2) : void 0 : this.reparse();
    var t2, e2;
  }
  scheduleRender() {
    return this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
  }
  render() {
    var t2, e2;
    (cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing) || (null === (e2 = this.delegate) || void 0 === e2 || e2.render());
    null === (t2 = this.afterRender) || void 0 === t2 || t2.call(this), this.afterRender = null;
  }
  reparse() {
    var t2;
    return null === (t2 = this.delegate) || void 0 === t2 ? void 0 : t2.reparse();
  }
  insertString() {
    var t2;
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i2 = arguments.length > 1 ? arguments[1] : void 0;
    return null === (t2 = this.delegate) || void 0 === t2 || t2.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
      var t3;
      return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertString(e2, i2);
    });
  }
  toggleAttributeIfSupported(t2) {
    var e2;
    if (dt().includes(t2))
      return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformFormatting(t2), this.withTargetDOMRange(function() {
        var e3;
        return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.toggleCurrentAttribute(t2);
      });
  }
  activateAttributeIfSupported(t2, e2) {
    var i2;
    if (dt().includes(t2))
      return null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformFormatting(t2), this.withTargetDOMRange(function() {
        var i3;
        return null === (i3 = this.responder) || void 0 === i3 ? void 0 : i3.setCurrentAttribute(t2, e2);
      });
  }
  deleteInDirection(t2) {
    let { recordUndoEntry: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { recordUndoEntry: true };
    var i2;
    e2 && (null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformTyping());
    const n2 = () => {
      var e3;
      return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.deleteInDirection(t2);
    }, r2 = this.getTargetDOMRange({ minLength: 2 });
    return r2 ? this.withTargetDOMRange(r2, n2) : n2();
  }
  withTargetDOMRange(t2, e2) {
    var i2;
    return "function" == typeof t2 && (e2 = t2, t2 = this.getTargetDOMRange()), t2 ? null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.withTargetDOMRange(t2, e2.bind(this)) : (Pt.reset(), e2.call(this));
  }
  getTargetDOMRange() {
    var t2, e2;
    let { minLength: i2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { minLength: 0 };
    const n2 = null === (t2 = (e2 = this.event).getTargetRanges) || void 0 === t2 ? void 0 : t2.call(e2);
    if (n2 && n2.length) {
      const t3 = sn(n2[0]);
      if (0 === i2 || t3.toString().length >= i2)
        return t3;
    }
  }
  withEvent(t2, e2) {
    let i2;
    this.event = t2;
    try {
      i2 = e2.call(this);
    } finally {
      this.event = null;
    }
    return i2;
  }
};
Ae(on, "events", { keydown(t2) {
  if (kt(t2)) {
    var e2;
    const i2 = un(t2);
    null !== (e2 = this.delegate) && void 0 !== e2 && e2.inputControllerDidReceiveKeyboardCommand(i2) && t2.preventDefault();
  } else {
    let e3 = t2.key;
    t2.altKey && (e3 += "+Alt"), t2.shiftKey && (e3 += "+Shift");
    const i2 = this.constructor.keys[e3];
    if (i2)
      return this.withEvent(t2, i2);
  }
}, paste(t2) {
  var e2;
  let i2;
  const n2 = null === (e2 = t2.clipboardData) || void 0 === e2 ? void 0 : e2.getData("URL");
  return ln(t2) ? (t2.preventDefault(), this.attachFiles(t2.clipboardData.files)) : cn(t2) ? (t2.preventDefault(), i2 = { type: "text/plain", string: t2.clipboardData.getData("text/plain") }, null === (r2 = this.delegate) || void 0 === r2 || r2.inputControllerWillPaste(i2), null === (o2 = this.responder) || void 0 === o2 || o2.insertString(i2.string), this.render(), null === (s2 = this.delegate) || void 0 === s2 ? void 0 : s2.inputControllerDidPaste(i2)) : n2 ? (t2.preventDefault(), i2 = { type: "text/html", html: this.createLinkHTML(n2) }, null === (a2 = this.delegate) || void 0 === a2 || a2.inputControllerWillPaste(i2), null === (l2 = this.responder) || void 0 === l2 || l2.insertHTML(i2.html), this.render(), null === (c2 = this.delegate) || void 0 === c2 ? void 0 : c2.inputControllerDidPaste(i2)) : void 0;
  var r2, o2, s2, a2, l2, c2;
}, beforeinput(t2) {
  const e2 = this.constructor.inputTypes[t2.inputType];
  e2 && (this.withEvent(t2, e2), this.scheduleRender());
}, input(t2) {
  Pt.reset();
}, dragstart(t2) {
  var e2, i2;
  null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionContainsAttachments() && (t2.dataTransfer.setData("application/x-trix-dragging", true), this.dragging = { range: null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.getSelectedRange(), point: hn(t2) });
}, dragenter(t2) {
  an(t2) && t2.preventDefault();
}, dragover(t2) {
  if (this.dragging) {
    t2.preventDefault();
    const i2 = hn(t2);
    var e2;
    if (!St(i2, this.dragging.point))
      return this.dragging.point = i2, null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.setLocationRangeFromPointRange(i2);
  } else
    an(t2) && t2.preventDefault();
}, drop(t2) {
  var e2, i2;
  if (this.dragging)
    return t2.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillMoveText(), null === (i2 = this.responder) || void 0 === i2 || i2.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender();
  if (an(t2)) {
    var n2;
    t2.preventDefault();
    const e3 = hn(t2);
    return null === (n2 = this.responder) || void 0 === n2 || n2.setLocationRangeFromPointRange(e3), this.attachFiles(t2.dataTransfer.files);
  }
}, dragend() {
  var t2;
  this.dragging && (null === (t2 = this.responder) || void 0 === t2 || t2.setSelectedRange(this.dragging.range), this.dragging = null);
}, compositionend(t2) {
  this.composing && (this.composing = false, a.recentAndroid || this.scheduleRender());
} }), Ae(on, "keys", { ArrowLeft() {
  var t2, e2;
  if (null !== (t2 = this.responder) && void 0 !== t2 && t2.shouldManageMovingCursorInDirection("backward"))
    return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("backward");
}, ArrowRight() {
  var t2, e2;
  if (null !== (t2 = this.responder) && void 0 !== t2 && t2.shouldManageMovingCursorInDirection("forward"))
    return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("forward");
}, Backspace() {
  var t2, e2, i2;
  if (null !== (t2 = this.responder) && void 0 !== t2 && t2.shouldManageDeletingInDirection("backward"))
    return this.event.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.deleteInDirection("backward"), this.render();
}, Tab() {
  var t2, e2;
  if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canIncreaseNestingLevel())
    return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 || e2.increaseNestingLevel(), this.render();
}, "Tab+Shift"() {
  var t2, e2;
  if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canDecreaseNestingLevel())
    return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 || e2.decreaseNestingLevel(), this.render();
} }), Ae(on, "inputTypes", { deleteByComposition() {
  return this.deleteInDirection("backward", { recordUndoEntry: false });
}, deleteByCut() {
  return this.deleteInDirection("backward");
}, deleteByDrag() {
  return this.event.preventDefault(), this.withTargetDOMRange(function() {
    var t2;
    this.deleteByDragRange = null === (t2 = this.responder) || void 0 === t2 ? void 0 : t2.getSelectedRange();
  });
}, deleteCompositionText() {
  return this.deleteInDirection("backward", { recordUndoEntry: false });
}, deleteContent() {
  return this.deleteInDirection("backward");
}, deleteContentBackward() {
  return this.deleteInDirection("backward");
}, deleteContentForward() {
  return this.deleteInDirection("forward");
}, deleteEntireSoftLine() {
  return this.deleteInDirection("forward");
}, deleteHardLineBackward() {
  return this.deleteInDirection("backward");
}, deleteHardLineForward() {
  return this.deleteInDirection("forward");
}, deleteSoftLineBackward() {
  return this.deleteInDirection("backward");
}, deleteSoftLineForward() {
  return this.deleteInDirection("forward");
}, deleteWordBackward() {
  return this.deleteInDirection("backward");
}, deleteWordForward() {
  return this.deleteInDirection("forward");
}, formatBackColor() {
  return this.activateAttributeIfSupported("backgroundColor", this.event.data);
}, formatBold() {
  return this.toggleAttributeIfSupported("bold");
}, formatFontColor() {
  return this.activateAttributeIfSupported("color", this.event.data);
}, formatFontName() {
  return this.activateAttributeIfSupported("font", this.event.data);
}, formatIndent() {
  var t2;
  if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canIncreaseNestingLevel())
    return this.withTargetDOMRange(function() {
      var t3;
      return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.increaseNestingLevel();
    });
}, formatItalic() {
  return this.toggleAttributeIfSupported("italic");
}, formatJustifyCenter() {
  return this.toggleAttributeIfSupported("justifyCenter");
}, formatJustifyFull() {
  return this.toggleAttributeIfSupported("justifyFull");
}, formatJustifyLeft() {
  return this.toggleAttributeIfSupported("justifyLeft");
}, formatJustifyRight() {
  return this.toggleAttributeIfSupported("justifyRight");
}, formatOutdent() {
  var t2;
  if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canDecreaseNestingLevel())
    return this.withTargetDOMRange(function() {
      var t3;
      return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.decreaseNestingLevel();
    });
}, formatRemove() {
  this.withTargetDOMRange(function() {
    for (const i2 in null === (t2 = this.responder) || void 0 === t2 ? void 0 : t2.getCurrentAttributes()) {
      var t2, e2;
      null === (e2 = this.responder) || void 0 === e2 || e2.removeCurrentAttribute(i2);
    }
  });
}, formatSetBlockTextDirection() {
  return this.activateAttributeIfSupported("blockDir", this.event.data);
}, formatSetInlineTextDirection() {
  return this.activateAttributeIfSupported("textDir", this.event.data);
}, formatStrikeThrough() {
  return this.toggleAttributeIfSupported("strike");
}, formatSubscript() {
  return this.toggleAttributeIfSupported("sub");
}, formatSuperscript() {
  return this.toggleAttributeIfSupported("sup");
}, formatUnderline() {
  return this.toggleAttributeIfSupported("underline");
}, historyRedo() {
  var t2;
  return null === (t2 = this.delegate) || void 0 === t2 ? void 0 : t2.inputControllerWillPerformRedo();
}, historyUndo() {
  var t2;
  return null === (t2 = this.delegate) || void 0 === t2 ? void 0 : t2.inputControllerWillPerformUndo();
}, insertCompositionText() {
  return this.composing = true, this.insertString(this.event.data);
}, insertFromComposition() {
  return this.composing = false, this.insertString(this.event.data);
}, insertFromDrop() {
  const t2 = this.deleteByDragRange;
  var e2;
  if (t2)
    return this.deleteByDragRange = null, null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillMoveText(), this.withTargetDOMRange(function() {
      var e3;
      return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.moveTextFromRange(t2);
    });
}, insertFromPaste() {
  var t2;
  const { dataTransfer: e2 } = this.event, i2 = { dataTransfer: e2 }, n2 = e2.getData("URL"), r2 = e2.getData("text/html");
  if (n2) {
    var o2;
    let t3;
    this.event.preventDefault(), i2.type = "text/html";
    const r3 = e2.getData("public.url-name");
    t3 = r3 ? qt(r3).trim() : n2, i2.html = this.createLinkHTML(n2, t3), null === (o2 = this.delegate) || void 0 === o2 || o2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
      var t4;
      return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertHTML(i2.html);
    }), this.afterRender = () => {
      var t4;
      return null === (t4 = this.delegate) || void 0 === t4 ? void 0 : t4.inputControllerDidPaste(i2);
    };
  } else if (Ct(e2)) {
    var s2;
    i2.type = "text/plain", i2.string = e2.getData("text/plain"), null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
      var t3;
      return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertString(i2.string);
    }), this.afterRender = () => {
      var t3;
      return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerDidPaste(i2);
    };
  } else if (r2) {
    var a2;
    this.event.preventDefault(), i2.type = "text/html", i2.html = r2, null === (a2 = this.delegate) || void 0 === a2 || a2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
      var t3;
      return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertHTML(i2.html);
    }), this.afterRender = () => {
      var t3;
      return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerDidPaste(i2);
    };
  } else if (null !== (t2 = e2.files) && void 0 !== t2 && t2.length) {
    var l2;
    i2.type = "File", i2.file = e2.files[0], null === (l2 = this.delegate) || void 0 === l2 || l2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
      var t3;
      return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertFile(i2.file);
    }), this.afterRender = () => {
      var t3;
      return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerDidPaste(i2);
    };
  }
}, insertFromYank() {
  return this.insertString(this.event.data);
}, insertLineBreak() {
  return this.insertString("\n");
}, insertLink() {
  return this.activateAttributeIfSupported("href", this.event.data);
}, insertOrderedList() {
  return this.toggleAttributeIfSupported("number");
}, insertParagraph() {
  var t2;
  return null === (t2 = this.delegate) || void 0 === t2 || t2.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
    var t3;
    return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertLineBreak();
  });
}, insertReplacementText() {
  const t2 = this.event.dataTransfer.getData("text/plain"), e2 = this.event.getTargetRanges()[0];
  this.withTargetDOMRange(e2, () => {
    this.insertString(t2, { updatePosition: false });
  });
}, insertText() {
  var t2;
  return this.insertString(this.event.data || (null === (t2 = this.event.dataTransfer) || void 0 === t2 ? void 0 : t2.getData("text/plain")));
}, insertTranspose() {
  return this.insertString(this.event.data);
}, insertUnorderedList() {
  return this.toggleAttributeIfSupported("bullet");
} });
var sn = function(t2) {
  const e2 = document.createRange();
  return e2.setStart(t2.startContainer, t2.startOffset), e2.setEnd(t2.endContainer, t2.endOffset), e2;
};
var an = (t2) => {
  var e2;
  return Array.from((null === (e2 = t2.dataTransfer) || void 0 === e2 ? void 0 : e2.types) || []).includes("Files");
};
var ln = function(t2) {
  const e2 = t2.clipboardData;
  if (e2)
    return e2.types.includes("Files") && 1 === e2.types.length && e2.files.length >= 1;
};
var cn = function(t2) {
  const e2 = t2.clipboardData;
  if (e2)
    return e2.types.includes("text/plain") && 1 === e2.types.length;
};
var un = function(t2) {
  const e2 = [];
  return t2.altKey && e2.push("alt"), t2.shiftKey && e2.push("shift"), e2.push(t2.key), e2;
};
var hn = (t2) => ({ x: t2.clientX, y: t2.clientY });
var dn = "[data-trix-attribute]";
var gn = "[data-trix-action]";
var mn = "".concat(dn, ", ").concat(gn);
var pn = "[data-trix-dialog]";
var fn2 = "".concat(pn, "[data-trix-active]");
var bn = "".concat(pn, " [data-trix-method]");
var vn = "".concat(pn, " [data-trix-input]");
var An = (t2, e2) => (e2 || (e2 = yn(t2)), t2.querySelector("[data-trix-input][name='".concat(e2, "']")));
var xn = (t2) => t2.getAttribute("data-trix-action");
var yn = (t2) => t2.getAttribute("data-trix-attribute") || t2.getAttribute("data-trix-dialog-attribute");
var Cn = class extends H {
  constructor(t2) {
    super(t2), this.didClickActionButton = this.didClickActionButton.bind(this), this.didClickAttributeButton = this.didClickAttributeButton.bind(this), this.didClickDialogButton = this.didClickDialogButton.bind(this), this.didKeyDownDialogInput = this.didKeyDownDialogInput.bind(this), this.element = t2, this.attributes = {}, this.actions = {}, this.resetDialogInputs(), f("mousedown", { onElement: this.element, matchingSelector: gn, withCallback: this.didClickActionButton }), f("mousedown", { onElement: this.element, matchingSelector: dn, withCallback: this.didClickAttributeButton }), f("click", { onElement: this.element, matchingSelector: mn, preventDefault: true }), f("click", { onElement: this.element, matchingSelector: bn, withCallback: this.didClickDialogButton }), f("keydown", { onElement: this.element, matchingSelector: vn, withCallback: this.didKeyDownDialogInput });
  }
  didClickActionButton(t2, e2) {
    var i2;
    null === (i2 = this.delegate) || void 0 === i2 || i2.toolbarDidClickButton(), t2.preventDefault();
    const n2 = xn(e2);
    return this.getDialog(n2) ? this.toggleDialog(n2) : null === (r2 = this.delegate) || void 0 === r2 ? void 0 : r2.toolbarDidInvokeAction(n2, e2);
    var r2;
  }
  didClickAttributeButton(t2, e2) {
    var i2;
    null === (i2 = this.delegate) || void 0 === i2 || i2.toolbarDidClickButton(), t2.preventDefault();
    const n2 = yn(e2);
    var r2;
    this.getDialog(n2) ? this.toggleDialog(n2) : null === (r2 = this.delegate) || void 0 === r2 || r2.toolbarDidToggleAttribute(n2);
    return this.refreshAttributeButtons();
  }
  didClickDialogButton(t2, e2) {
    const i2 = A(e2, { matchingSelector: pn });
    return this[e2.getAttribute("data-trix-method")].call(this, i2);
  }
  didKeyDownDialogInput(t2, e2) {
    if (13 === t2.keyCode) {
      t2.preventDefault();
      const i2 = e2.getAttribute("name"), n2 = this.getDialog(i2);
      this.setAttribute(n2);
    }
    if (27 === t2.keyCode)
      return t2.preventDefault(), this.hideDialog();
  }
  updateActions(t2) {
    return this.actions = t2, this.refreshActionButtons();
  }
  refreshActionButtons() {
    return this.eachActionButton((t2, e2) => {
      t2.disabled = false === this.actions[e2];
    });
  }
  eachActionButton(t2) {
    return Array.from(this.element.querySelectorAll(gn)).map((e2) => t2(e2, xn(e2)));
  }
  updateAttributes(t2) {
    return this.attributes = t2, this.refreshAttributeButtons();
  }
  refreshAttributeButtons() {
    return this.eachAttributeButton((t2, e2) => (t2.disabled = false === this.attributes[e2], this.attributes[e2] || this.dialogIsVisible(e2) ? (t2.setAttribute("data-trix-active", ""), t2.classList.add("trix-active")) : (t2.removeAttribute("data-trix-active"), t2.classList.remove("trix-active"))));
  }
  eachAttributeButton(t2) {
    return Array.from(this.element.querySelectorAll(dn)).map((e2) => t2(e2, yn(e2)));
  }
  applyKeyboardCommand(t2) {
    const e2 = JSON.stringify(t2.sort());
    for (const t3 of Array.from(this.element.querySelectorAll("[data-trix-key]"))) {
      const i2 = t3.getAttribute("data-trix-key").split("+");
      if (JSON.stringify(i2.sort()) === e2)
        return b("mousedown", { onElement: t3 }), true;
    }
    return false;
  }
  dialogIsVisible(t2) {
    const e2 = this.getDialog(t2);
    if (e2)
      return e2.hasAttribute("data-trix-active");
  }
  toggleDialog(t2) {
    return this.dialogIsVisible(t2) ? this.hideDialog() : this.showDialog(t2);
  }
  showDialog(t2) {
    var e2, i2;
    this.hideDialog(), null === (e2 = this.delegate) || void 0 === e2 || e2.toolbarWillShowDialog();
    const n2 = this.getDialog(t2);
    n2.setAttribute("data-trix-active", ""), n2.classList.add("trix-active"), Array.from(n2.querySelectorAll("input[disabled]")).forEach((t3) => {
      t3.removeAttribute("disabled");
    });
    const r2 = yn(n2);
    if (r2) {
      const e3 = An(n2, t2);
      e3 && (e3.value = this.attributes[r2] || "", e3.select());
    }
    return null === (i2 = this.delegate) || void 0 === i2 ? void 0 : i2.toolbarDidShowDialog(t2);
  }
  setAttribute(t2) {
    const e2 = yn(t2), i2 = An(t2, e2);
    return i2.willValidate && !i2.checkValidity() ? (i2.setAttribute("data-trix-validate", ""), i2.classList.add("trix-validate"), i2.focus()) : (null === (n2 = this.delegate) || void 0 === n2 || n2.toolbarDidUpdateAttribute(e2, i2.value), this.hideDialog());
    var n2;
  }
  removeAttribute(t2) {
    var e2;
    const i2 = yn(t2);
    return null === (e2 = this.delegate) || void 0 === e2 || e2.toolbarDidRemoveAttribute(i2), this.hideDialog();
  }
  hideDialog() {
    const t2 = this.element.querySelector(fn2);
    var e2;
    if (t2)
      return t2.removeAttribute("data-trix-active"), t2.classList.remove("trix-active"), this.resetDialogInputs(), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.toolbarDidHideDialog(((t3) => t3.getAttribute("data-trix-dialog"))(t2));
  }
  resetDialogInputs() {
    Array.from(this.element.querySelectorAll(vn)).forEach((t2) => {
      t2.setAttribute("disabled", "disabled"), t2.removeAttribute("data-trix-validate"), t2.classList.remove("trix-validate");
    });
  }
  getDialog(t2) {
    return this.element.querySelector("[data-trix-dialog=".concat(t2, "]"));
  }
};
var kn = class extends Oi {
  constructor(t2) {
    let { editorElement: e2, document: i2, html: n2 } = t2;
    super(...arguments), this.editorElement = e2, this.selectionManager = new Li(this.editorElement), this.selectionManager.delegate = this, this.composition = new gi(), this.composition.delegate = this, this.attachmentManager = new hi(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = 2 === M.getLevel() ? new on(this.editorElement) : new Qi(this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new Ni(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new Cn(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new xi(this.composition, this.selectionManager, this.editorElement), i2 ? this.editor.loadDocument(i2) : this.editor.loadHTML(n2);
  }
  registerSelectionManager() {
    return Pt.registerSelectionManager(this.selectionManager);
  }
  unregisterSelectionManager() {
    return Pt.unregisterSelectionManager(this.selectionManager);
  }
  render() {
    return this.compositionController.render();
  }
  reparse() {
    return this.composition.replaceHTML(this.editorElement.innerHTML);
  }
  compositionDidChangeDocument(t2) {
    if (this.notifyEditorElement("document-change"), !this.handlingInput)
      return this.render();
  }
  compositionDidChangeCurrentAttributes(t2) {
    return this.currentAttributes = t2, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", { attributes: this.currentAttributes });
  }
  compositionDidPerformInsertionAtRange(t2) {
    this.pasting && (this.pastedRange = t2);
  }
  compositionShouldAcceptFile(t2) {
    return this.notifyEditorElement("file-accept", { file: t2 });
  }
  compositionDidAddAttachment(t2) {
    const e2 = this.attachmentManager.manageAttachment(t2);
    return this.notifyEditorElement("attachment-add", { attachment: e2 });
  }
  compositionDidEditAttachment(t2) {
    this.compositionController.rerenderViewForObject(t2);
    const e2 = this.attachmentManager.manageAttachment(t2);
    return this.notifyEditorElement("attachment-edit", { attachment: e2 }), this.notifyEditorElement("change");
  }
  compositionDidChangeAttachmentPreviewURL(t2) {
    return this.compositionController.invalidateViewForObject(t2), this.notifyEditorElement("change");
  }
  compositionDidRemoveAttachment(t2) {
    const e2 = this.attachmentManager.unmanageAttachment(t2);
    return this.notifyEditorElement("attachment-remove", { attachment: e2 });
  }
  compositionDidStartEditingAttachment(t2, e2) {
    return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t2), this.compositionController.installAttachmentEditorForAttachment(t2, e2), this.selectionManager.setLocationRange(this.attachmentLocationRange);
  }
  compositionDidStopEditingAttachment(t2) {
    this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
  }
  compositionDidRequestChangingSelectionToLocationRange(t2) {
    if (!this.loadingSnapshot || this.isFocused())
      return this.requestedLocationRange = t2, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render();
  }
  compositionWillLoadSnapshot() {
    this.loadingSnapshot = true;
  }
  compositionDidLoadSnapshot() {
    this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = false;
  }
  getSelectionManager() {
    return this.selectionManager;
  }
  attachmentManagerDidRequestRemovalOfAttachment(t2) {
    return this.removeAttachment(t2);
  }
  compositionControllerWillSyncDocumentView() {
    return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
  }
  compositionControllerDidSyncDocumentView() {
    return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
  }
  compositionControllerDidRender() {
    this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
  }
  compositionControllerDidFocus() {
    return this.isFocusedInvisibly() && this.setLocationRange({ index: 0, offset: 0 }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
  }
  compositionControllerDidBlur() {
    return this.notifyEditorElement("blur");
  }
  compositionControllerDidSelectAttachment(t2, e2) {
    return this.toolbarController.hideDialog(), this.composition.editAttachment(t2, e2);
  }
  compositionControllerDidRequestDeselectingAttachment(t2) {
    const e2 = this.attachmentLocationRange || this.composition.document.getLocationRangeOfAttachment(t2);
    return this.selectionManager.setLocationRange(e2[1]);
  }
  compositionControllerWillUpdateAttachment(t2) {
    return this.editor.recordUndoEntry("Edit Attachment", { context: t2.id, consolidatable: true });
  }
  compositionControllerDidRequestRemovalOfAttachment(t2) {
    return this.removeAttachment(t2);
  }
  inputControllerWillHandleInput() {
    this.handlingInput = true, this.requestedRender = false;
  }
  inputControllerDidRequestRender() {
    this.requestedRender = true;
  }
  inputControllerDidHandleInput() {
    if (this.handlingInput = false, this.requestedRender)
      return this.requestedRender = false, this.render();
  }
  inputControllerDidAllowUnhandledInput() {
    return this.notifyEditorElement("change");
  }
  inputControllerDidRequestReparse() {
    return this.reparse();
  }
  inputControllerWillPerformTyping() {
    return this.recordTypingUndoEntry();
  }
  inputControllerWillPerformFormatting(t2) {
    return this.recordFormattingUndoEntry(t2);
  }
  inputControllerWillCutText() {
    return this.editor.recordUndoEntry("Cut");
  }
  inputControllerWillPaste(t2) {
    return this.editor.recordUndoEntry("Paste"), this.pasting = true, this.notifyEditorElement("before-paste", { paste: t2 });
  }
  inputControllerDidPaste(t2) {
    return t2.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", { paste: t2 });
  }
  inputControllerWillMoveText() {
    return this.editor.recordUndoEntry("Move");
  }
  inputControllerWillAttachFiles() {
    return this.editor.recordUndoEntry("Drop Files");
  }
  inputControllerWillPerformUndo() {
    return this.editor.undo();
  }
  inputControllerWillPerformRedo() {
    return this.editor.redo();
  }
  inputControllerDidReceiveKeyboardCommand(t2) {
    return this.toolbarController.applyKeyboardCommand(t2);
  }
  inputControllerDidStartDrag() {
    this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
  }
  inputControllerDidReceiveDragOverPoint(t2) {
    return this.selectionManager.setLocationRangeFromPointRange(t2);
  }
  inputControllerDidCancelDrag() {
    this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
  }
  locationRangeDidChange(t2) {
    return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !wt(this.attachmentLocationRange, t2) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
  }
  toolbarDidClickButton() {
    if (!this.getLocationRange())
      return this.setLocationRange({ index: 0, offset: 0 });
  }
  toolbarDidInvokeAction(t2, e2) {
    return this.invokeAction(t2, e2);
  }
  toolbarDidToggleAttribute(t2) {
    if (this.recordFormattingUndoEntry(t2), this.composition.toggleCurrentAttribute(t2), this.render(), !this.selectionFrozen)
      return this.editorElement.focus();
  }
  toolbarDidUpdateAttribute(t2, e2) {
    if (this.recordFormattingUndoEntry(t2), this.composition.setCurrentAttribute(t2, e2), this.render(), !this.selectionFrozen)
      return this.editorElement.focus();
  }
  toolbarDidRemoveAttribute(t2) {
    if (this.recordFormattingUndoEntry(t2), this.composition.removeCurrentAttribute(t2), this.render(), !this.selectionFrozen)
      return this.editorElement.focus();
  }
  toolbarWillShowDialog(t2) {
    return this.composition.expandSelectionForEditing(), this.freezeSelection();
  }
  toolbarDidShowDialog(t2) {
    return this.notifyEditorElement("toolbar-dialog-show", { dialogName: t2 });
  }
  toolbarDidHideDialog(t2) {
    return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", { dialogName: t2 });
  }
  freezeSelection() {
    if (!this.selectionFrozen)
      return this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = true, this.render();
  }
  thawSelection() {
    if (this.selectionFrozen)
      return this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = false, this.render();
  }
  canInvokeAction(t2) {
    return !!this.actionIsExternal(t2) || !(null === (e2 = this.actions[t2]) || void 0 === e2 || null === (e2 = e2.test) || void 0 === e2 || !e2.call(this));
    var e2;
  }
  invokeAction(t2, e2) {
    return this.actionIsExternal(t2) ? this.notifyEditorElement("action-invoke", { actionName: t2, invokingElement: e2 }) : null === (i2 = this.actions[t2]) || void 0 === i2 || null === (i2 = i2.perform) || void 0 === i2 ? void 0 : i2.call(this);
    var i2;
  }
  actionIsExternal(t2) {
    return /^x-./.test(t2);
  }
  getCurrentActions() {
    const t2 = {};
    for (const e2 in this.actions)
      t2[e2] = this.canInvokeAction(e2);
    return t2;
  }
  updateCurrentActions() {
    const t2 = this.getCurrentActions();
    if (!St(t2, this.currentActions))
      return this.currentActions = t2, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", { actions: this.currentActions });
  }
  runEditorFilters() {
    let t2 = this.composition.getSnapshot();
    if (Array.from(this.editor.filters).forEach((e3) => {
      const { document: i3, selectedRange: n2 } = t2;
      t2 = e3.call(this.editor, t2) || {}, t2.document || (t2.document = i3), t2.selectedRange || (t2.selectedRange = n2);
    }), e2 = t2, i2 = this.composition.getSnapshot(), !wt(e2.selectedRange, i2.selectedRange) || !e2.document.isEqualTo(i2.document))
      return this.composition.loadSnapshot(t2);
    var e2, i2;
  }
  updateInputElement() {
    const t2 = function(t3, e2) {
      const i2 = li[e2];
      if (i2)
        return i2(t3);
      throw new Error("unknown content type: ".concat(e2));
    }(this.compositionController.getSerializableElement(), "text/html");
    return this.editorElement.setInputElementValue(t2);
  }
  notifyEditorElement(t2, e2) {
    switch (t2) {
      case "document-change":
        this.documentChangedSinceLastRender = true;
        break;
      case "render":
        this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = false, this.notifyEditorElement("change"));
        break;
      case "change":
      case "attachment-add":
      case "attachment-edit":
      case "attachment-remove":
        this.updateInputElement();
    }
    return this.editorElement.notify(t2, e2);
  }
  removeAttachment(t2) {
    return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t2), this.render();
  }
  recordFormattingUndoEntry(t2) {
    const e2 = gt(t2), i2 = this.selectionManager.getLocationRange();
    if (e2 || !Dt(i2))
      return this.editor.recordUndoEntry("Formatting", { context: this.getUndoContext(), consolidatable: true });
  }
  recordTypingUndoEntry() {
    return this.editor.recordUndoEntry("Typing", { context: this.getUndoContext(this.currentAttributes), consolidatable: true });
  }
  getUndoContext() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
      e2[i2] = arguments[i2];
    return [this.getLocationContext(), this.getTimeContext(), ...Array.from(e2)];
  }
  getLocationContext() {
    const t2 = this.selectionManager.getLocationRange();
    return Dt(t2) ? t2[0].index : t2;
  }
  getTimeContext() {
    return q.interval > 0 ? Math.floor((/* @__PURE__ */ new Date()).getTime() / q.interval) : 0;
  }
  isFocused() {
    var t2;
    return this.editorElement === (null === (t2 = this.editorElement.ownerDocument) || void 0 === t2 ? void 0 : t2.activeElement);
  }
  isFocusedInvisibly() {
    return this.isFocused() && !this.getLocationRange();
  }
  get actions() {
    return this.constructor.actions;
  }
};
Ae(kn, "actions", { undo: { test() {
  return this.editor.canUndo();
}, perform() {
  return this.editor.undo();
} }, redo: { test() {
  return this.editor.canRedo();
}, perform() {
  return this.editor.redo();
} }, link: { test() {
  return this.editor.canActivateAttribute("href");
} }, increaseNestingLevel: { test() {
  return this.editor.canIncreaseNestingLevel();
}, perform() {
  return this.editor.increaseNestingLevel() && this.render();
} }, decreaseNestingLevel: { test() {
  return this.editor.canDecreaseNestingLevel();
}, perform() {
  return this.editor.decreaseNestingLevel() && this.render();
} }, attachFiles: { test: () => true, perform() {
  return M.pickFiles(this.editor.insertFiles);
} } }), kn.proxyMethod("getSelectionManager().setLocationRange"), kn.proxyMethod("getSelectionManager().getLocationRange");
var Rn = Object.freeze({ __proto__: null, AttachmentEditorController: Ii, CompositionController: Ni, Controller: Oi, EditorController: kn, InputController: Ki, Level0InputController: Qi, Level2InputController: on, ToolbarController: Cn });
var En = Object.freeze({ __proto__: null, MutationObserver: Ui, SelectionChangeObserver: Ft });
var Sn = Object.freeze({ __proto__: null, FileVerificationOperation: Vi, ImagePreloadOperation: Ce });
bt("trix-toolbar", "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}");
var Ln = class extends HTMLElement {
  connectedCallback() {
    "" === this.innerHTML && (this.innerHTML = U.getDefaultHTML());
  }
};
var Dn = 0;
var wn = function(t2) {
  if (!t2.hasAttribute("contenteditable"))
    return t2.setAttribute("contenteditable", ""), function(t3) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return e2.times = 1, f(t3, e2);
    }("focus", { onElement: t2, withCallback: () => Tn(t2) });
};
var Tn = function(t2) {
  return Bn(t2), Fn();
};
var Bn = function(t2) {
  var e2, i2;
  if (null !== (e2 = (i2 = document).queryCommandSupported) && void 0 !== e2 && e2.call(i2, "enableObjectResizing"))
    return document.execCommand("enableObjectResizing", false, false), f("mscontrolselect", { onElement: t2, preventDefault: true });
};
var Fn = function(t2) {
  var e2, i2;
  if (null !== (e2 = (i2 = document).queryCommandSupported) && void 0 !== e2 && e2.call(i2, "DefaultParagraphSeparator")) {
    const { tagName: t3 } = n.default;
    if (["div", "p"].includes(t3))
      return document.execCommand("DefaultParagraphSeparator", false, t3);
  }
};
var Pn = a.forcesObjectResizing ? { display: "inline", width: "auto" } : { display: "inline-block", width: "1px" };
bt("trix-editor", "%t {\n    display: block;\n}\n\n%t:empty:not(:focus)::before {\n    content: attr(placeholder);\n    color: graytext;\n    cursor: text;\n    pointer-events: none;\n    white-space: pre-line;\n}\n\n%t a[contenteditable=false] {\n    cursor: text;\n}\n\n%t img {\n    max-width: 100%;\n    height: auto;\n}\n\n%t ".concat(e, " figcaption textarea {\n    resize: none;\n}\n\n%t ").concat(e, " figcaption textarea.trix-autoresize-clone {\n    position: absolute;\n    left: -9999px;\n    max-height: 0px;\n}\n\n%t ").concat(e, " figcaption[data-trix-placeholder]:empty::before {\n    content: attr(data-trix-placeholder);\n    color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n    display: ").concat(Pn.display, " !important;\n    width: ").concat(Pn.width, " !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n    vertical-align: top !important;\n    margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n    vertical-align: bottom !important;\n    margin-right: -1px !important;\n}"));
var In = class extends HTMLElement {
  get trixId() {
    return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++Dn), this.trixId);
  }
  get labels() {
    const t2 = [];
    this.id && this.ownerDocument && t2.push(...Array.from(this.ownerDocument.querySelectorAll("label[for='".concat(this.id, "']")) || []));
    const e2 = A(this, { matchingSelector: "label" });
    return e2 && [this, null].includes(e2.control) && t2.push(e2), t2;
  }
  get toolbarElement() {
    var t2;
    if (this.hasAttribute("toolbar"))
      return null === (t2 = this.ownerDocument) || void 0 === t2 ? void 0 : t2.getElementById(this.getAttribute("toolbar"));
    if (this.parentNode) {
      const t3 = "trix-toolbar-".concat(this.trixId);
      this.setAttribute("toolbar", t3);
      const e2 = S("trix-toolbar", { id: t3 });
      return this.parentNode.insertBefore(e2, this), e2;
    }
  }
  get form() {
    var t2;
    return null === (t2 = this.inputElement) || void 0 === t2 ? void 0 : t2.form;
  }
  get inputElement() {
    var t2;
    if (this.hasAttribute("input"))
      return null === (t2 = this.ownerDocument) || void 0 === t2 ? void 0 : t2.getElementById(this.getAttribute("input"));
    if (this.parentNode) {
      const t3 = "trix-input-".concat(this.trixId);
      this.setAttribute("input", t3);
      const e2 = S("input", { type: "hidden", id: t3 });
      return this.parentNode.insertBefore(e2, this.nextElementSibling), e2;
    }
  }
  get editor() {
    var t2;
    return null === (t2 = this.editorController) || void 0 === t2 ? void 0 : t2.editor;
  }
  get name() {
    var t2;
    return null === (t2 = this.inputElement) || void 0 === t2 ? void 0 : t2.name;
  }
  get value() {
    var t2;
    return null === (t2 = this.inputElement) || void 0 === t2 ? void 0 : t2.value;
  }
  set value(t2) {
    var e2;
    this.defaultValue = t2, null === (e2 = this.editor) || void 0 === e2 || e2.loadHTML(this.defaultValue);
  }
  notify(t2, e2) {
    if (this.editorController)
      return b("trix-".concat(t2), { onElement: this, attributes: e2 });
  }
  setInputElementValue(t2) {
    this.inputElement && (this.inputElement.value = t2);
  }
  connectedCallback() {
    this.hasAttribute("data-trix-internal") || (wn(this), function(t2) {
      if (!t2.hasAttribute("role"))
        t2.setAttribute("role", "textbox");
    }(this), function(t2) {
      if (t2.hasAttribute("aria-label") || t2.hasAttribute("aria-labelledby"))
        return;
      const e2 = function() {
        const e3 = Array.from(t2.labels).map((e4) => {
          if (!e4.contains(t2))
            return e4.textContent;
        }).filter((t3) => t3), i2 = e3.join(" ");
        return i2 ? t2.setAttribute("aria-label", i2) : t2.removeAttribute("aria-label");
      };
      e2(), f("focus", { onElement: t2, withCallback: e2 });
    }(this), this.editorController || (b("trix-before-initialize", { onElement: this }), this.editorController = new kn({ editorElement: this, html: this.defaultValue = this.value }), requestAnimationFrame(() => b("trix-initialize", { onElement: this }))), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), function(t2) {
      if (!document.querySelector(":focus") && t2.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t2)
        t2.focus();
    }(this));
  }
  disconnectedCallback() {
    var t2;
    return null === (t2 = this.editorController) || void 0 === t2 || t2.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
  }
  registerResetListener() {
    return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, false);
  }
  unregisterResetListener() {
    return window.removeEventListener("reset", this.resetListener, false);
  }
  registerClickListener() {
    return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, false);
  }
  unregisterClickListener() {
    return window.removeEventListener("click", this.clickListener, false);
  }
  resetBubbled(t2) {
    if (!t2.defaultPrevented && t2.target === this.form)
      return this.reset();
  }
  clickBubbled(t2) {
    if (t2.defaultPrevented)
      return;
    if (this.contains(t2.target))
      return;
    const e2 = A(t2.target, { matchingSelector: "label" });
    return e2 && Array.from(this.labels).includes(e2) ? this.focus() : void 0;
  }
  reset() {
    this.value = this.defaultValue;
  }
};
var Nn = { VERSION: t, config: V, core: ci, models: Di, views: wi, controllers: Rn, observers: En, operations: Sn, elements: Object.freeze({ __proto__: null, TrixEditorElement: In, TrixToolbarElement: Ln }), filters: Object.freeze({ __proto__: null, Filter: bi, attachmentGalleryFilter: vi }) };
Object.assign(Nn, Di), window.Trix = Nn, setTimeout(function() {
  customElements.get("trix-toolbar") || customElements.define("trix-toolbar", Ln), customElements.get("trix-editor") || customElements.define("trix-editor", In);
}, 0);
var script$1 = {
  name: "EditorWrapper",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: ""
      }
    };
  }
};
var _hoisted_1 = ["id", "value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.classes.container)
    },
    [
      createBaseVNode("input", {
        id: `editor-input-${_ctx.id}`,
        value: _ctx.value,
        type: "hidden"
      }, null, 8, _hoisted_1),
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.editorComponent)))
    ],
    2
    /* CLASS */
  );
}
script$1.render = render;
script$1.__file = "themes/blank/templates/wrappers/EditorWrapper.vue";
var script = {
  name: "EditorWrapper",
  render: script$1.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: "",
        container_hideBold: "vf-editor-hide-bold",
        container_hideItalic: "vf-editor-hide-italic",
        container_hideStrike: "vf-editor-hide-strike",
        container_hideLink: "vf-editor-hide-link",
        container_hideHeading: "vf-editor-hide-heading",
        container_hideQuote: "vf-editor-hide-quote",
        container_hideCode: "vf-editor-hide-code",
        container_hideBulletList: "vf-editor-hide-bullet-list",
        container_hideNumberList: "vf-editor-hide-number-list",
        container_hideDecreaseNesting: "vf-editor-hide-decrease-nesting",
        container_hideIncreaseNesting: "vf-editor-hide-increase-nesting",
        container_hideAttach: "vf-editor-hide-attach",
        container_hideUndo: "vf-editor-hide-undo",
        container_hideRedo: "vf-editor-hide-redo",
        $container: (classes2, { hideTools }) => [
          classes2.container
        ].concat(hideTools.map((t2) => classes2[`container_hide${t2.split("-").map((s2) => s2.charAt(0).toUpperCase() + s2.slice(1)).join("")}`]))
      }
    };
  }
};
var css_248z = `@charset "UTF-8";

trix-toolbar {
  padding: 0.5rem 0.375rem;
  border-radius: 0.25rem;
  flex-wrap: wrap;
}

trix-toolbar .trix-button-row {
  display: block;
  margin-bottom: -0.25rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
}

trix-toolbar .trix-button-group {
  display: inline;
}

trix-toolbar .trix-button-group-spacer {
  display: hidden;
  flex-grow: 1;
}

trix-toolbar .trix-button {
  position: relative;
  margin-bottom: 0.25rem;
  color: var(--vf-bg-icon);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: none;
  border-radius: 0.25rem;
  white-space: nowrap;
  float: left;
  border: 0;
  background: none;
}

trix-toolbar .trix-button.trix-active {
  background-color: var(--vf-bg-selected);
  filter: brightness(0.9);
}

trix-toolbar .trix-button:not(.trix-active):hover {
  background-color: var(--vf-bg-selected);
}

.is-disabled trix-toolbar .trix-button:not(.trix-active):hover {
  background: transparent;
  cursor: default;
}

trix-toolbar .trix-button:not(:disabled) {
  cursor: pointer;
}

.is-disabled trix-toolbar .trix-button {
  cursor: default;
  pointer-events: none;
}

trix-toolbar .trix-button--icon {
  width: 2.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-indent: -9999px;
}

trix-toolbar .trix-button--icon::before {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: inline-block;
  content: "";
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  top: 0.125rem;
  bottom: 0.125rem;
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}

trix-toolbar .trix-button--icon.trix-active::before {
  opacity: 1;
}

trix-toolbar .trix-button--icon:disabled::before {
  opacity: 0.4;
}

trix-toolbar .trix-button--icon-attach::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-bold::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-italic::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-link::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-strike::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-quote::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-heading-1::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-code::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.375rem;
  bottom: 0.375rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-bullet-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-number-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-undo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-redo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-decrease-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  margin-bottom: 0;
}

trix-toolbar .trix-button--icon-increase-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-dialogs {
  position: relative;
}

trix-toolbar .trix-dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 1rem 0.625rem;
  background-color: var(--vf-bg-input);
  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);
  margin-top: 0.375rem;
  border-radius: 0.25rem;
  z-index: 2;
}

trix-toolbar .trix-input--dialog {
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--vf-border-color-input);
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
}

trix-toolbar .trix-input--dialog:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;
}

trix-toolbar .trix-input--dialog.validate:invalid {
  border-color: var(--vf-color-danger);
}

trix-toolbar .trix-button--dialog {
  padding: 0.5rem;
  border-left-width: 1px;
  border-color: var(--vf-border-color-input);
  background-color: transparent;
  border-radius: 0;
}

trix-toolbar .trix-button--dialog:not(.trix-active):hover {
  background-color: transparent;
}

trix-toolbar .trix-button--dialog:first-of-type {
  border: 0;
}

trix-toolbar .trix-dialog--link {
  max-width: 36rem;
}

trix-toolbar .trix-dialog__link-fields {
  display: flex;
  align-items: center;
  width: 100%;
}

trix-toolbar .trix-dialog__link-fields .trix-input {
  flex: 1 1 0%;
}

trix-toolbar .trix-dialog__link-fields .trix-button-group {
  flex-grow: 0;
  flex-shrink: 0;
}

trix-editor {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
  padding-bottom: var(--vf-py-input);
  border-radius: var(--vf-radius-large);
  outline: none;
  min-height: 6rem;
}

trix-editor:empty:not(:focus)::before {
  color: var(--vf-color-placeholder);
}

trix-editor [data-trix-mutable]:not(.attachment__caption-editor) {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

trix-editor [data-trix-mutable]::-moz-selection,
trix-editor [data-trix-cursor-target]::-moz-selection,
trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::-moz-selection, trix-editor [data-trix-cursor-target]::-moz-selection, trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::selection,
trix-editor [data-trix-cursor-target]::selection,
trix-editor [data-trix-mutable] ::selection {
  background-image: none;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment.attachment--file {
  background-color: var(--vf-bg-selected);
}

trix-editor [data-trix-mutable].attachment img {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

trix-editor .attachment {
  position: relative;
}

trix-editor .attachment:hover {
  cursor: default;
}

trix-editor .attachment--preview .attachment__caption:hover {
  cursor: text;
}

trix-editor .attachment__progress {
  position: absolute;
  z-index: 1;
  height: 1.25rem;
  top: 50%;
  left: 0;
  transform: translateY(-0.625rem);
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  opacity: 0.2;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

trix-editor .attachment__progress[value="100"] {
  opacity: 0;
}

trix-editor .attachment__caption-editor {
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  vertical-align: top;
  width: 100%;
  border-width: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-family: inherit;
}

trix-editor .attachment__toolbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
}

trix-editor .trix-button-group {
  display: inline-flex;
}

trix-editor .trix-button {
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0;
  background-color: transparent;
  color: var(--vf-bg-icon);
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  border-radius: 0;
  border-width: 0;
  outline: 0;
}

trix-editor .trix-button:not(:disabled) {
  cursor: pointer;
}

trix-editor .trix-button--remove {
  display: inline-block;
  overflow-x: hidden;
  padding: 0;
  background-color: var(--vf-bg-input);
  line-height: 1.75rem;
  border-color: var(--vf-color-selected);
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  text-indent: -9999px;
  width: 24px;
  height: 24px;
}

trix-editor .trix-button--remove:hover {
  background-color: var(--vf-bg-selected);
}

trix-editor .trix-button--remove::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0.125rem;
  right: 0.125rem;
  bottom: 0.125rem;
  left: 0.125rem;
  background-color: var(--vf-color-input);
  opacity: 0.7;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
}

trix-editor .attachment__metadata-container {
  position: relative;
}

trix-editor .attachment__metadata {
  position: absolute;
  top: 1rem;
  left: 50%;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #000000;
  opacity: 0.7;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
}

trix-editor .attachment__metadata .attachment__name {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  white-space: nowrap;
  max-width: 100%;
}

trix-editor .attachment__metadata .attachment__size {
  margin-left: 0.25rem;
  white-space: nowrap;
}

.trix-content h1,
trix-editor h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
}

.trix-content a,
trix-editor a {
  color: var(--vf-primary);
}

.trix-content ul,
trix-editor ul {
  padding-left: 2.5rem;
  list-style-type: disc;
}

.trix-content [dir=rtl] ul,
trix-editor [dir=rtl] ul {
  padding-right: 2.5rem;
  list-style-type: disc;
}

.trix-content ol,
trix-editor ol {
  padding-left: 2.5rem;
  list-style-type: decimal;
}

.trix-content [dir=rtl] ol,
trix-editor [dir=rtl] ol {
  padding-right: 2.5rem;
  list-style-type: decimal;
}

.trix-content blockquote,
trix-editor blockquote {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
  border-left-style: solid;
  margin: 0;
}

.trix-content [dir=rtl] blockquote,
.trix-content blockquote[dir=rtl],
trix-editor [dir=rtl] blockquote,
trix-editor blockquote[dir=rtl] {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
}

.trix-content pre,
trix-editor pre {
  display: inline-block;
  overscroll-behavior-x: auto;
  padding: 0.5rem;
  background-color: var(--vf-gray-50);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  vertical-align: top;
  white-space: pre;
  width: 100%;
}

.trix-content img,
trix-editor img {
  max-width: 100%;
  height: auto;
}

.trix-content .attachment__caption,
trix-editor .attachment__caption {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.trix-content .attachment__caption .attachment__name + .attachment__size::before,
trix-editor .attachment__caption .attachment__name + .attachment__size::before {
  content: " · ";
}

.trix-content * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.trix-content .attachment {
  display: inline-block;
  position: relative;
  max-width: 100%;
}

.trix-content .attachment a {
  text-decoration: none;
}

.trix-content .attachment--preview {
  text-align: center;
  width: 100%;
}

.trix-content .attachment--preview .attachment__caption {
  color: var(--vf-gray-500);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.trix-content .attachment--file {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.125rem;
  margin-top: 0;
  color: var(--vf-gray-700);
  line-height: 1;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: var(--vf-gray-300);
}

.trix-content .attachment-gallery {
  display: flex;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.trix-content .attachment-gallery .attachment {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex-grow: 1;
  flex-shrink: 0;
  width: 33.333333%;
}

.trix-content .attachment-gallery.attachment-gallery--2 .attachment, .trix-content .attachment-gallery.attachment-gallery--4 .attachment {
  width: 50%;
}

.trix-content .attachment__progress {
  display: none;
}

.vf-editor-sm trix-editor {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
  padding-bottom: var(--vf-py-input-sm);
  border-radius: var(--vf-radius-large-sm);
  min-height: 5rem;
}

.vf-editor-sm .trix-content h1,
.vf-editor-sm trix-editor h1 {
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.25;
}

.vf-editor-sm trix-toolbar {
  padding: var(--vf-py-input-sm) var(--vf-py-input-sm);
}

.vf-editor-sm trix-toolbar .trix-button--icon {
  width: 2.25rem;
}

.vf-editor-lg trix-editor {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-bottom: var(--vf-py-input-lg);
  border-radius: var(--vf-radius-large-lg);
}

.vf-editor-disabled trix-toolbar {
  pointer-events: none;
}

.vf-editor-hide-bold .trix-button--icon-bold {
  display: none;
}

.vf-editor-hide-italic .trix-button--icon-italic {
  display: none;
}

.vf-editor-hide-strike .trix-button--icon-strike {
  display: none;
}

.vf-editor-hide-link .trix-button--icon-link {
  display: none;
}

.vf-editor-hide-heading .trix-button--icon-heading-1 {
  display: none;
}

.vf-editor-hide-quote .trix-button--icon-quote {
  display: none;
}

.vf-editor-hide-code .trix-button--icon-code {
  display: none;
}

.vf-editor-hide-bullet-list .trix-button--icon-bullet-list {
  display: none;
}

.vf-editor-hide-number-list .trix-button--icon-number-list {
  display: none;
}

.vf-editor-hide-decrease-nesting .trix-button--icon-decrease-nesting-level {
  display: none;
}

.vf-editor-hide-increase-nesting .trix-button--icon-increase-nesting-level {
  display: none;
}

.vf-editor-hide-attach .trix-button--icon-attach {
  display: none;
}

.vf-editor-hide-undo .trix-button--icon-undo {
  display: none;
}

.vf-editor-hide-redo .trix-button--icon-redo {
  display: none;
}

.dark .trix-content blockquote,
.dark trix-editor blockquote {
  border-color: var(--vf-dark-700);
}

.dark .trix-content pre,
.dark trix-editor pre {
  background-color: var(--vf-dark-900);
}`;
styleInject(css_248z);
script.__file = "themes/vueform/templates/wrappers/EditorWrapper.vue";
function columns(breakpoint, size) {
  switch (breakpoint) {
    case "default":
      return "vf-col-".concat(size);
    default:
      return "vf-col-".concat(breakpoint, "-").concat(size);
  }
}
var classes = {};
var index = {
  templates: {
    Vueform: script$25,
    FormErrors: script$23,
    FormMessages: script$21,
    FormLanguages: script$1$,
    FormLanguage: script$1Z,
    FormTabs: script$1X,
    FormTab: script$1V,
    FormSteps: script$1T,
    FormStepsControls: script$1R,
    FormStepsControl: script$1P,
    FormStep: script$1N,
    FormElements: script$1L,
    ElementLayout: script$1J,
    ElementLayoutInline: script$1H,
    ElementLoader: script$1F,
    ElementLabelFloating: script$1D,
    ElementLabel: script$1B,
    ElementInfo: script$1z,
    ElementDescription: script$1x,
    ElementError: script$1v,
    ElementMessage: script$1t,
    ElementText: script$1r,
    ElementAddon: script$1p,
    ElementAddonOptions: script$1n,
    ButtonElement: script$1l,
    CaptchaElement: script$1j,
    CheckboxElement: script$1h,
    CheckboxgroupElement: script$1f,
    CheckboxgroupElement_tabs: script$1e,
    CheckboxgroupElement_blocks: script$1d,
    DateElement: script$1b,
    DatesElement: script$19,
    FileElement: script$17,
    GroupElement: script$15,
    HiddenElement: script$13,
    ListElement: script$11,
    LocationElement: script$$,
    MultifileElement: script$Z,
    MultiselectElement: script$W,
    ObjectElement: script$U,
    PhoneElement: script$S,
    RadioElement: script$Q,
    RadiogroupElement: script$O,
    RadiogroupElement_tabs: script$N,
    RadiogroupElement_blocks: script$M,
    SelectElement: script$K,
    SliderElement: script$H,
    StaticElement: script$F,
    TagsElement: script$D,
    TextareaElement: script$B,
    TextElement: script$z,
    ToggleElement: script$w,
    EditorElement: script$u,
    TTextareaElement: script$s,
    TTextElement: script$q,
    TEditorElement: script$o,
    CheckboxgroupCheckbox: script$m,
    CheckboxgroupCheckbox_tabs: script$k,
    CheckboxgroupCheckbox_blocks: script$i,
    DragAndDrop: script$g,
    FilePreview: script$e,
    FilePreview_image: script$c,
    FilePreview_gallery: script$a,
    RadiogroupRadio: script$8,
    RadiogroupRadio_tabs: script$6,
    RadiogroupRadio_blocks: script$4,
    DatepickerWrapper: script$2,
    EditorWrapper: script
  },
  classes,
  columns
};
export {
  script$1l as ButtonElement,
  script$1j as CaptchaElement,
  script$1h as CheckboxElement,
  script$m as CheckboxgroupCheckbox,
  script$i as CheckboxgroupCheckbox_blocks,
  script$k as CheckboxgroupCheckbox_tabs,
  script$1f as CheckboxgroupElement,
  script$1d as CheckboxgroupElement_blocks,
  script$1e as CheckboxgroupElement_tabs,
  script$1b as DateElement,
  script$2 as DatepickerWrapper,
  script$19 as DatesElement,
  script$g as DragAndDrop,
  script$u as EditorElement,
  script as EditorWrapper,
  script$1p as ElementAddon,
  script$1n as ElementAddonOptions,
  script$1x as ElementDescription,
  script$1v as ElementError,
  script$1z as ElementInfo,
  script$1B as ElementLabel,
  script$1D as ElementLabelFloating,
  script$1J as ElementLayout,
  script$1H as ElementLayoutInline,
  script$1F as ElementLoader,
  script$1t as ElementMessage,
  script$1r as ElementText,
  script$17 as FileElement,
  script$e as FilePreview,
  script$a as FilePreview_gallery,
  script$c as FilePreview_image,
  script$1L as FormElements,
  script$23 as FormErrors,
  script$1Z as FormLanguage,
  script$1$ as FormLanguages,
  script$21 as FormMessages,
  script$1N as FormStep,
  script$1T as FormSteps,
  script$1P as FormStepsControl,
  script$1R as FormStepsControls,
  script$1V as FormTab,
  script$1X as FormTabs,
  script$15 as GroupElement,
  script$13 as HiddenElement,
  script$11 as ListElement,
  script$$ as LocationElement,
  script$Z as MultifileElement,
  script$W as MultiselectElement,
  script$U as ObjectElement,
  script$S as PhoneElement,
  script$Q as RadioElement,
  script$O as RadiogroupElement,
  script$M as RadiogroupElement_blocks,
  script$N as RadiogroupElement_tabs,
  script$8 as RadiogroupRadio,
  script$4 as RadiogroupRadio_blocks,
  script$6 as RadiogroupRadio_tabs,
  script$K as SelectElement,
  script$H as SliderElement,
  script$F as StaticElement,
  script$o as TEditorElement,
  script$q as TTextElement,
  script$s as TTextareaElement,
  script$D as TagsElement,
  script$z as TextElement,
  script$B as TextareaElement,
  script$w as ToggleElement,
  script$25 as Vueform,
  classes,
  columns,
  index as default
};
/*! Bundled license information:

@vueform/vueform/dist/vueform.mjs:
  (*!
   * Vueform v1.9.9 (https://github.com/vueform/vueform)
   * Copyright (c) 2024 Adam Berecz <adam@vueform.com>
   * Licensed under the MIT License
   *)
*/
//# sourceMappingURL=@vueform_vueform_dist_vueform.js.map
