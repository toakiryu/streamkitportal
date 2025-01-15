import React, { ComponentType, lazy } from "react";

// import lazyImport from "@/components/lazyImport";
// const Name = lazyImport(() => import("pass"));

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

export default lazyImport;
