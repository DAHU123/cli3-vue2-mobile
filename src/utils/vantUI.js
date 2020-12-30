/**
 *Created by DAHU123 <986220912@qq.com> on 2020/12/30.
 */
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Loading,
  Toast,
  ActionSheet,
  Notify,
  Image as VanImage
} from "vant";

export default {
  install: vue => {
    vue.component("van-button", Button);
    vue.component("van-cell", Cell);
    vue.component("van-cell-group", CellGroup);
    vue.component("van-icon", Icon);
    vue.component("van-loading", Loading);
    vue.component("van-action-sheet", ActionSheet);
    vue.component("van-notify", Notify);
    vue.component("van-image", VanImage);

    vue.prototype.$toast = Toast;
    vue.prototype.$notify = Notify;
  }
};
