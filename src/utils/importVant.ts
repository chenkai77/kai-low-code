/*
 * @Author: depp.chen
 * @Date: 2022-03-22 09:44:17
 * @Description: Vant 按需导入
 */
import type { App } from "vue";
import { Button } from "vant";

const components = [Button];

export default function introduceElement(app: App): void {
  components.forEach((component) => {
    app.use(component);
  });
}
