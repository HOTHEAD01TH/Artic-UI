// src/lib/utils.ts
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
// src/components/buttons/Button.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
var buttonVariants = cva("relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: [
                "bg-blue-600 text-white hover:bg-blue-700",
                "shadow-[0_0_0_3px_rgba(59,130,246,0.3)]",
                "dark:shadow-[0_0_0_3px_rgba(59,130,246,0.2)]"
            ],
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            ghost: "hover:bg-gray-100 hover:text-gray-900",
            gradient: [
                "relative inline-flex h-12 overflow-hidden rounded-full p-[1px]",
                "focus:outline-none focus:ring-2 focus:ring-slate-400",
                "focus:ring-offset-2 focus:ring-offset-slate-50",
                "before:absolute before:inset-[-1000%]",
                "before:animate-[spin_2s_linear_infinite]",
                "before:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
                "hover:scale-105 transition-transform duration-200"
            ]
        },
        size: {
            sm: "h-9 px-3",
            md: "h-10 px-4",
            lg: "h-12 px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
});
var Button = React.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild",
        "children"
    ]);
    var Comp = asChild ? motion.button : "button";
    if (variant === "gradient") {
        return /* @__PURE__ */ React.createElement(motion.button, _object_spread({
            ref: ref,
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            className: cn(buttonVariants({
                variant: variant,
                size: size,
                className: className
            }))
        }, props), /* @__PURE__ */ React.createElement("span", {
            className: "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl"
        }, children));
    }
    return /* @__PURE__ */ React.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props), children);
});
Button.displayName = "Button";
// src/components/alerts/Alert.tsx
import * as React2 from "react";
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { cva as cva2 } from "class-variance-authority";
var alertVariants = cva2("flex items-center gap-3 p-4 rounded-lg", {
    variants: {
        variant: {
            success: "text-green-400 bg-green-500/10",
            warning: "text-yellow-400 bg-yellow-500/10",
            error: "text-red-400 bg-red-500/10",
            info: "text-blue-400 bg-blue-500/10"
        }
    },
    defaultVariants: {
        variant: "info"
    }
});
var Alert = function(_param) {
    var message = _param.message, variant = _param.variant, className = _param.className, props = _object_without_properties(_param, [
        "message",
        "variant",
        "className"
    ]);
    var iconMap = {
        success: CheckCircleIcon,
        warning: ExclamationTriangleIcon,
        error: XCircleIcon,
        info: InformationCircleIcon
    };
    var IconComponent = iconMap[variant || "info"];
    return /* @__PURE__ */ React2.createElement("div", _object_spread({
        className: cn(alertVariants({
            variant: variant,
            className: className
        }))
    }, props), /* @__PURE__ */ React2.createElement(IconComponent, {
        className: "w-5 h-5 flex-shrink-0"
    }), /* @__PURE__ */ React2.createElement("p", null, message));
};
export { Alert, Button, alertVariants, buttonVariants, cn };
