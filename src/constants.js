import MAIL_ICON from "./assets/mail_icon.png"
import CALENDAR from "./assets/calendar.png"
import BRIEFCASE from "./assets/briefcase.png"
import DEFAULT_AVATAR from "./assets/default_avatar.png"

export const IMAGES = {
    MAIL_ICON : MAIL_ICON,
    CALENDAR_ICON: CALENDAR,
    BRIEFCASE_ICON: BRIEFCASE,
    DEFAULT_AVATAR: DEFAULT_AVATAR
}

export const escapeRegExp = (str = "") => (
    str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
);
