import React, { ComponentType, lazy } from "react";

// 共通のエラーハンドリングと遅延読み込み関数
const lazyImport = (factory: () => Promise<{ default: ComponentType<any> }>) =>
  lazy(async () => {
    try {
      return await factory();
    } catch (e) {
      return {
        default: () => (
          <>
            <h1>Error occurred</h1>
            <button onClick={() => window.location.reload()}>Reload</button>
          </>
        ),
      };
    }
  });

// // 複数の名前付きエクスポートにも対応するlazyImports
// const lazyImports = (
//   factory: () => Promise<{ [key: string]: ComponentType<any> }>
// ) =>
//   lazy(async () => {
//     try {
//       const modules = await factory();

//       // 名前付きエクスポートをdefaultとして返す
//       return {
//         default: () => {
//           // 名前付きエクスポートを`default` で返すためのラップ処理
//           return { ...modules }; // 名前付きエクスポートをそのまま返す
//         },
//       };
//     } catch (e) {
//       return {
//         default: () => (
//           <>
//             <h1>Error occurred</h1>
//             <button onClick={() => window.location.reload()}>Reload</button>
//           </>
//         ),
//       };
//     }
//   });

export { lazyImport };
