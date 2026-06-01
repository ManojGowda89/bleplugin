// Reexport the native module. On web, it will be resolved to BlekitModule.web.ts
// and on native platforms to BlekitModule.ts
export { default } from './BlekitModule';
export * from './Blekit.types';
