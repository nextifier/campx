import { type VariantProps, cva } from "class-variance-authority";

export { default as Sheet } from "./Sheet.vue";
export { default as SheetTrigger } from "./SheetTrigger.vue";
export { default as SheetClose } from "./SheetClose.vue";
export { default as SheetContent } from "./SheetContent.vue";
export { default as SheetHeader } from "./SheetHeader.vue";
export { default as SheetTitle } from "./SheetTitle.vue";
export { default as SheetDescription } from "./SheetDescription.vue";
export { default as SheetFooter } from "./SheetFooter.vue";

export const sheetVariants = cva(
  "fixed z-50 bg-background transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "bottom-0 right-0 top-(--navbar-height-mobile) min-h-[calc(100dvh-var(--navbar-height-mobile))] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right lg:top-(--navbar-height-desktop) lg:min-h-[calc(100dvh-var(--navbar-height-desktop))]",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

export type SheetVariants = VariantProps<typeof sheetVariants>;
