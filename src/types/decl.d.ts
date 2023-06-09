// declare module '.svg' {
//     import React = require('react')
//     export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
//     const src: string
//     export default src
// }
//
// declare module '.jpg' {
//     const content: string
//     export default content
// }
//
// declare module '.png' {
//     const content: string
//     export default content
// }
//
// declare module '.gif' {
//     const content: string
//     export default content
// }

// declare module '.json' {
//     const content: string
//     export default content
// }

declare module '.css' {
    const content: Record<string, string>
    export default content
}

declare module "*.module.css";
declare module "*.module.scss";

declare module '.scss' {
    const content: Record<string, string>
    export default content
}