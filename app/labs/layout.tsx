"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/app/(Kambaz)/store";
import TOC from "./TOC";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="flex-fill">
          <TOC />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </Provider>
  );
}