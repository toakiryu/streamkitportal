import React, { ComponentType, lazy } from "react";
import toast from "react-hot-toast";

// 共通のエラーハンドリングと遅延読み込み関数
const lazyImport = (factory: () => Promise<{ default: ComponentType<any> }>) =>
  lazy(async () => {
    try {
      return await factory();
    } catch (e) {
      console.log(e);
      toast.error("遅延読み込みが失敗しました");
      return {
        default: () => <></>,
      };
    }
  });

export { lazyImport };
