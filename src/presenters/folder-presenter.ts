import {GenericILIASObjectPresenter} from "./object-presenter";
import {BrandingProvider} from "../providers/branding";

export class FolderObjectPresenter extends GenericILIASObjectPresenter {

    icon(): string {
        return BrandingProvider.instance().getAsset("icon/obj_folder.svg");
    }

    showTypeAsText(): boolean {
        return false;
    }
}
