import { createCustomElement } from "@open-pioneer/runtime";
import * as appMetadata from "open-pioneer:app";
import { DemoUI } from "./DemoUI";

const Element = createCustomElement({
    component: DemoUI,
    appMetadata
});

customElements.define("api-app", Element);
